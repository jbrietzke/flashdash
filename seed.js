/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Dashboard = db.model('dashboard');
var Promise = require('sequelize').Promise;
let fs = require('fs');
var path = require('path');

var seed = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        },
        {
            email: 'noone@nowhere.com',
            password: 'nothing'
        }

    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers)
    .then (function() {
        let agg = [];
        function seedFile(fileName, model, list) {
            let buffer = fs.readFileSync(path.join(__dirname, fileName), 'utf-8');
            let items = JSON.parse(buffer);
            let foo = items.map(function (itemObj) {
                list.push(model.create(itemObj));
            });
        }
        seedFile("seedFiles/dashboardSeed.json", Dashboard, agg);
        return Promise.all(agg)
    })
};

db.sync({ force: true })
    .then(function () {
        return seed();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
