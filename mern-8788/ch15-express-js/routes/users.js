var express = require('express');
const { sayHello } = require('../controllers/UserController');

var router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
    const { fetchall } = req.query

    if (fetchall === "true") {
        res.json({
            message: `Hello true ${fetchall}`
        })
    }
    else {
        res.json({
            message: `Hello ${fetchall}`
        })
    }

})



router.get('/:id', (req, res) => {
    const { id } = req.query

    res.json({
        message: `Hello ${id}`
    })
});

module.exports = router;
