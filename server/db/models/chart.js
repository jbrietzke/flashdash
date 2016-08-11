'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('chart', {
	label: Sequelize.STRING,
	dataSourceUrl: {
		type: Sequelize.STRING,
		validate: {
			isUrl: true
		}
	},
	refreshInterval: {
		type: Sequelize.INTEGER,
		validate: {
			min: 1 // in production peg this to ??
		}
	},
	chartType: {
		type: Sequelize.STRING //change to enum when appropriate
	},
	xsize: {
		type: Sequelize.INTEGER
	},
	ysize: {
		type: Sequelize.INTEGER
	},
	xloc: {
		type: Sequelize.INTEGER
	},
	yloc: {
		type: Sequelize.INTEGER
	},
	color: {
		type: Sequelize.STRING,
		validate : {
			isColorString: function (value) {
				if(!value.match("^#[0-9a-fA-F]{6}$")) {
					throw new Error('Enter a color')
				}
			}
		}
	}
});