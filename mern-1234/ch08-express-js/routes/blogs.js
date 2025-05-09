var express = require('express');
var router = express.Router()

router.get('/', function (req, res) {
    res.json({
        name: "I am on blog page "
    })
})

module.exports = router;





