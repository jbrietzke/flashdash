'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('dashboard', {
  name: Sequelize.STRING,
  description: Sequelize.STRING
}, {
      indexes: [
    {
      unique: true,
      fields: ['name', 'userId']
    }
  ]
});
