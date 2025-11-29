var express = require('express');
const User = require('../models/user');
var router = express.Router();

// get all users
router.get('/', async function (req, res, next) {
    try {
        const allusers = await User.find()
        res.status(200).json({message: "Get all User Successfully", user: allusers})
    }catch(error) {
        console.log(error);
    }
});

module.exports = router;