//temporary webserver for local dev env
var connect = require('connect');
var serveStatic = require('serve-static');
var port = 8080;
connect().use(serveStatic(__dirname)).listen(port);
console.log('Server listening on port: ' + port);