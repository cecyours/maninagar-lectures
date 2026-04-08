var express = require('express');
const Product = require('../models/product');
var router = express.Router()

router.get('/', async function (req, res, next) {
    try {
        const products = await Product.find()
        res.status(200).json({
            message: "Prodct fetched Successfully", product:products
        })
    }catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Prodct not fetched", error:error
        })
    }
})

// create products
router.post('/', async function (req, res) {
    try {
        const body = req.body
        const createdProduct = await Product.create(body)
        res.status(200).json({
            message: "Prodct create Successfully", createdProduct:createdProduct
        })
    }catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Prodct not created", error:error
        })
    }
})

module.exports = router