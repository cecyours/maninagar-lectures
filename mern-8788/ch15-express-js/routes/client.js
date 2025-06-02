var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});



router.get('/:id', function (req, res, next) {

    const { id } = req.params;
    if (id > 45) {
        return res.json({
            starus: 200,
            message: `Too high ${id}`
        })
    }

    res.json({
        starus: 200,
        message: `This is you api ${id}`
    })


    

});



module.exports = router;
