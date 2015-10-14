/* global require,process,__dirname */
var express = require('express'),
  routes = require('./routes'),
  path = require('path'),
  countries = require('./js/dao/countries.js'),
  users = require('./js/dao/users');

var app = express();
var bodyParser = require('body-parser');

// all environments

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //production: set to domain we want to allow service access to
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, X-Auth-Token");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  next();
});

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));



if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/getUsers', users.getUsers);
app.get('/countries', countries.getCountries);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.info('Sample web service app listening at http://%s:%s', host, port);
});