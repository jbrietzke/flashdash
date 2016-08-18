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
        res.status(401).send("You must be logged in");
    }
};

var ensureRightUser = function (req, res, next) {
    // Authenticated AND the user ID in the route is the right one
    if (req.isAuthenticated() && (req.user.id === +req.params.userId)) {
        next();
    } else {
        let message = (req.isAuthenticated()) ? "Can't access data for that user" : "You must be logged in";
        res.status(401).send(message);
    }
};

//User's Routes
router.get('/:userId/dashboards', ensureRightUser, function (req, res, next) {
   Dashboard.findAll( 
    {where: {userId: req.params.userId},
    order : 'id ASC'}) 
   .then(function(boards) {
    res.send(boards);
   })

   .catch(next);
});

router.put('/:userId', ensureRightUser, function(req, res, next){
  User.findById(req.params.userId)
  .then(function(user){
    return user.update(req.body);
  })
  .then(()=> res.send(200))
  .catch(next);
})

router.delete('/:userId', ensureRightUser, function(req, res, next){
  User.findById(req.params.userId)
  .then(function(user){
    return user.destroy(); 
  })
  .then(function(){
    return req.session.destroy();
  })
  .then(()=> res.send(200))
  .catch(next);
})

//User's Dashboard Routes
router.post('/:userId/dashboard', ensureRightUser, function(req, res, next){
  Dashboard.create({ 
      userId: req.params.userId,
      name: req.body.name,
      description: req.body.description
  })
  .then(()=> res.send(200))
  .catch(next)
});

router.put('/:id/dashboard/:dashboardId', ensureAuthenticated, function(req, res, next){
  console.log('route got hit')
  Dashboard.findById(req.params.dashboardId)
  .then(dashboard => dashboard.update(req.body))
  .then(()=> res.send(200))
  .catch(next)
})

router.delete('/:id/dashboard/:dashboardId', ensureAuthenticated, function(req, res, next){
  Dashboard.findById(req.params.dashboardId)
  .then(dashboard => dashboard.destroy())
  .then(()=> res.send(200))
  .catch(next)
})

