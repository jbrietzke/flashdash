'use strict';
var router = require('express').Router();
let cnt = 0;

// Log a trivial get
router.get('/loghits', function(req,res,next) {
  console.log("The get was called at", new Date());
  cnt = cnt + 1;
  res.json(cnt);
});


module.exports = router;

