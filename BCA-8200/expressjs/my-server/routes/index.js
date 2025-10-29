var express = require('express');
var router = express.Router();

/* GET home page. */
// http method
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sania', function(req, res, next) {
  res.render('index', { title: 'Sania' });
});

router.get('/cec', function(req, res, next) {
  res.render('index', { title: 'CEC' });
});


// http methods
// delete , patch  , put/update , post/create , get/fetch  

module.exports = router;
