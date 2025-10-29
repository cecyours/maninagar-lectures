var express = require('express')

var router = express.Router()

router.get('/', function (req, res) {
    res.json({ Name: "Unknown", Course: "unknown" })
})

router.get('/sania', function (req, res) {
    res.json({ Name: "sania", Course: "CEC" })
})

router.get('/sania', function (req, res) {
    res.json({ Name: "sania", Course: "MERN" })
})







module.exports = router;

