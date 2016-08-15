'use strict';
var router = require('express').Router();
const db = require('../../../db');
const Dashboard = db.model('dashboard');
const User = db.model('user');
module.exports = router;
var _ = require('lodash');

var ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

//User's Routes
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
    return user.update(req.body);
  })
  .catch(next);
})

router.delete('/:userId', ensureAuthenticated, function(req, res, next){
  User.findById(req.params.userId)
  .then(function(user){
    user.destroy();
  })
  .then(function(){
    req.session.destroy();
  })
  .catch(next);
})
//User's Dashboard Routes
router.post('/:id/dashboard', ensureAuthenticated, function(req, res, next){
  return Dashboard.create({
      userId: req.params.id,
      name: req.body.name,
      description: req.body.description
  }).catch(next)
});

router.put('/:id/dashboard/:dashboardId', ensureAuthenticated,  function(req, res, next){
  console.log('route got hit')
  Dashboard.findById(req.params.dashboardId)
  .then(dashboard => dashboard.update(req.body))
  .catch(next)
})

router.delete('/:id/dashboard/:dashboardId', ensureAuthenticated, function(req, res, next){
  Dashboard.findById(req.params.dashboardId)
  .then(dashboard => dashboard.destroy())
  .catch(next)
})

