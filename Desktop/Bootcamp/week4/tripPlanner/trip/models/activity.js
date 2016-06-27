var db = require('./index');
var Place = require('./place');
var Sequelize = require('sequelize');

var Activity = db.define('activity', {
  name :  {type: Sequelize.STRING},
  age_range :  {type: Sequelize.STRING}
});

Activity.belongsTo(Place);

module.exports = Activity;
