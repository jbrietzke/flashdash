var db = require('./index');
var Place = require('./place');
var Sequelize = require('sequelize');
var Restaraunt = db.define('restaraunt', {
  name : {type: Sequelize.STRING},
  cuisine :  {type: Sequelize.ARRAY(Sequelize.STRING)},
  price :  {type: Sequelize.INTEGER},
});

Restaraunt.belongsTo(Place);

module.exports = Restaraunt;
