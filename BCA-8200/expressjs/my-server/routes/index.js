var express = require('express');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
=======
router.get('/', function (req, res, next) {
  res.render('index', { title: 'CEC' });
>>>>>>> b330280aaa865a04139e67a3c6476726038afd52
});

module.exports = router;
