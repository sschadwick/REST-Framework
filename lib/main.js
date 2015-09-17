'use strict';

var server = require('../server');
var Router = require('./router');
var router = Router();

var app = module.exports = exports = {};

app.get = function(path, callback) {
  router.get(path, callback);
};

app.post = function(path, callback) {
  router.post(path, callback);
};

app.put = function(path, callback) {
  router.put(path, callback);
};

app.patch = function(path, callback) {
  router.patch(path, callback);
};

app.delete = function(path, callback) {
  router.delete(path, callback);
};

app.createServer = function(port) {
  server.startServer(port, router.route.bind(router));
};

app.stopServer = function() {
  server.stopServer();
}
