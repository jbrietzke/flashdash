var db = require('./index');
var Place = require('./place');
var Sequelize = require('sequelize');

var Hotel = db.define('hotel', {
  name : {type: Sequelize.STRING},
  num_stars : {type: Sequelize.INTEGER},
  amenities :  {type: Sequelize.ARRAY(Sequelize.STRING)}
});

Hotel.belongsTo(Place);

module.exports = Hotel;
