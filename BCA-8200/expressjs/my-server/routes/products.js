var express = require('express');
const { default: Product } = require('../models/product');
var router = express.Router()


router.get('/', async function (req, res) {
    try {
        const products = await Product.find()
        res.status(200).json({ message: "Products Fetched Successfully", products })
    } catch (error) {
        console.log(error);
    }
})

// for create product 
router.post('/', async function (req, res) {
    try {
        const body = req.body
        const createdProduct = await Product.create(body)
        res.status(200).json({ message: "Products Create Successfully", createdProduct: createdProduct })
    } catch (error) {
        console.log(error);
    }
})

// cors  ,  dotenv


module.exports = router
