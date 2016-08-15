'use strict';
var router = require('express').Router();
const db = require('../../../db');
const Dashboard = db.model('dashboard');
const User = db.model('dashboard');
module.exports = router;
var _ = require('lodash');

var ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

router.get('/:userId/dashboards', ensureAuthenticated, function (req, res, next) {
   Dashboard.findAll( {where: {userId: req.params.userId}})
   .then(function(boards) {
    res.send(boards);
   })
   .catch(next);
});

router.put('/:userId', ensureAuthenticated, function(req, res, next){
  User.findById(req.params.userId)
  .then(function(user){
    console.log(req.body)
    return user.update(req.body);
  })
  .catch(next);
})

router.delete('/:userId', ensureAuthenticated, function(req, res, next){
  User.findById(req.params.userId)
  .then(function(user){
    console.log('hit the delete')
    user.destroy();
    res.redirect('http://google.com')
  })
  .catch(next);
})
