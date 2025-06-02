var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/:custumer', function (req, res, next) {
    const { custumer } = req.params;
    if (custumer  =="anil"){
        return res.json({
            starus: 200,
            message: `Too high ${custumer}`
        })
    }
    res.json({
        starus: 200,
        message: `Too low ${custumer}`
    })
});

module.exports = router;
