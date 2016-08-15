'use strict';
var router = require('express').Router();

module.exports = router;

var ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

// Authenticate all requests down this route.  Remove to open the route.
// router.get('/', ensureAuthenticated, function (req, res, next) {
//  next();
// })

// Farm requests out to the individual dummy data files
router.use('/yhStocks', require('./yhStocks.route'));
router.use('/gitMosane', require('./gitMosane.route'));
router.use('/guardianFootball', require('./guardianFootball.route'));
router.use('/nflPlayers', require('./nflPlayers.route'));
router.use('/weather', require('./weather.route'));


