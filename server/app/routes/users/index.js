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

router.get('/:userId/dashboards', ensureAuthenticated, function (req, res, next) {
   Dashboard.findAll( {where: {userId: req.params.userId}})
   .then(function(boards) {
    res.send(boards);
   })
   .catch(next);
});

router.put('/:userId', function(req, res, next){
  User.findById(req.params.userId)
  .then(function(user){
    return user.update(req.body);
  })
  .catch(next);
})

router.delete('/:userId', function(req, res, next){
  User.findById(req.params.userId)
  .then(function(user){
    user.destroy();
  })
  .catch(next);
})

router.post('/:id/dashboard', function(req, res, next){
  return Dashboard.create({

      userId: req.params.id,
      name: req.body.name,
      description: req.body.description

  }).catch(next)
});

router.delete('/:id/dashboard/:dashboardId', function(req, res, next){
  Dashboard.findById(req.params.dashboardId)
  .then(dashboard => dashboard.destory())
  .catch(next)
})

