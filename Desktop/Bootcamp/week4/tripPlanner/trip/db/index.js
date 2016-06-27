var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/tripPlanner', {
  logging: true
});

var Place = db.define('place', {
  address = Sequelize.STRING,
  city = Sequelize.STRING,
  state = Sequelize.STRING,
  phone = Sequelize.STRING,
  location = Sequelize.ARRAY(Sequelize.FLOAT);
});

var Hotel = db.define('hotel', {
  name = Sequelize.STRING,
  num_stars = Sequelize.INTEGER,
  amenities = Sequelize.ARRAY(Sequelize.STRING)
});

var Activity = db.define('activity', {
  name = Sequelize.STRING,
  age_range = Sequelize.STRING,
});

var Restaraunt = db.define('restaraunt', {
  name = Sequelize.STRING,
  cuisine = Sequelize.ARRAY(Sequelize.STRING),
  price = Sequelize.INTEGER
});

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaraunt.belongsTo(Place);

module.exports = db;
