var express = require('express');
const { users } = require('../models/User');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  const user = users.filter((user) => user.age > 30)

  res.json({
    users: user
  })
});

module.exports = router;
