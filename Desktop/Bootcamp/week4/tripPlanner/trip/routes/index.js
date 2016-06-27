var Express = require('express');
var router = Express.Router();

router.get('/', function(req, res, next){
  res.render('home');
})

router.get('/contact', function(req, res, next){
  res.render('contact');
})

router.get('/about', function(req, res, next){
  res.render('about');
})


module.exports = router;
