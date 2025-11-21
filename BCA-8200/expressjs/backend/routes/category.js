var express = require('express');
const { default: Category } = require('../models/categoty');
var router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        const categories = await Category.find()
        res.status(200).json({ message: "Category fetched Successfully", data: categories })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Category fetching faied", error })
    }
});



// 691d5f3a8a399f7664961f0f
router.post('/', async function (req, res, next) {
    try {
        const data = req.body
        const createdCategory = await Category.create(data)

        res.status(201).json({ message: "Category Created Successfully", createdCategory })

    } catch (error) {
        res.status(500).json({ message: "Category Creation faied", error })
    }
});

module.exports = router;
