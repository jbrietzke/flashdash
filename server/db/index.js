'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Chart = require('./models/chart')
var Datasource = require('./models/datasource')
var Dashboard = require('./models/dashboard')


Chart.belongsTo(Dashboard)
Dashboard.hasMany(Chart)

Dashboard.belongsTo(User)
User.hasMany(Dashboard)
 