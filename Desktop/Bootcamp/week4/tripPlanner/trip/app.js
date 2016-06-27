var Express = require('express');
var app = new Express();

var bodyParser = require('body-parser');

var morgan = require('morgan');
var routes = require('./routes');
var swig = require('swig');
var path = require('path');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html' );
app.set('html', swig.renderFile);
swig.setDefaults({cache : false});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json);
app.use(morgan('dev'));

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render('./views/home.html');
});

app.listen(3000, function(){
  console.log("Listening on port 3000")
});
