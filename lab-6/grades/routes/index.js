var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'get' });
});

//post grade page
router.post('/', function(req, res, next) {
  res.render('index', { title: 'post' });
});

//put udate grade
router.post('/', function(req, res, next) {
  res.render('index', { title: 'put' });
});


//delete grade
router.post('/', function(req, res, next) {
  res.render('index', { title: 'delete' });
});

module.exports = router;
