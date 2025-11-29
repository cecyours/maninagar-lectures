var express = require('express');
const { default: Product } = require('../models/product');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    try {
        const createdProduct = await Product.find().populate('category', 'title ')

        res.status(200).json({ message: "Product Fetched Successfully", createdProduct })

    } catch (error) {
        res.status(500).json({ message: "Product fetching faied", error })
    }

});

router.post('/', async function (req, res, next) {
    try {
        const data = req.body
        const createdProduct = await Product.create(data)

        res.status(201).json({ message: "Product Created Successfully", createdProduct })

    } catch (error) {
        res.status(500).json({ message: "Product Creation faied", error })
        console.log(error);

    }
});

module.exports = router;
