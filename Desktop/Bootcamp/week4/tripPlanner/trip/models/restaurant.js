var db = require('./index');
var Place = require('./place');
var Sequelize = require('sequelize');
var Restaurant = db.define('restaurant', {
  name : {type: Sequelize.STRING},
  cuisine :  {type: Sequelize.ARRAY(Sequelize.STRING)},
  price :  {type: Sequelize.INTEGER},
});

Restaurant.belongsTo(Place);

module.exports = Restaurant;
