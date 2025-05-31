var express = require('express');
const contactUs = require('../models/contactUs');
var router = express.Router();

/* GET home page. */
router.post('/', async function (req, res, next) {
    try {
        const data = req.body
        console.log(data);
        const insertQuery = await contactUs.create(data)

        console.log(insertQuery);

        res.status(200).json({
            success: true,
            message: "Data inserted Successfully",
            data: insertQuery
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to insert data"
        })
    }
});







module.exports = router;
