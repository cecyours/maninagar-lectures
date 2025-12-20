var express = require('express');
const { default: Product } = require('../models/product');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    try {
        const createdProduct = await Product.find().populate('category', 'title')
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

router.get('/:id', async function (req, res, next) {
    try {
        const { id } = req.params
        const products = await Product.findById(id)
        res.status(200).json({ message: "Product fetched Successfully", data: products })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Product fetching faied", error })
    }
});

router.put('/:id', async function (req, res, next) {
    try {
        const body = req.body
        const { id } = req.params
        const products = await Product.findByIdAndUpdate(id, body, { new: true })
        res.status(200).json({ message: "Product fetched Successfully", data: products })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Product fetching faied", error })
    }
});


router.delete('/:id', async function (req, res, next) {
    try {
        const { id } = req.params
        const products = await Product.findByIdAndDelete(id)
        res.status(200).json({ message: "Product deleted Successfully", data: products })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Product fetching faied", error })
    }
});

module.exports = router;