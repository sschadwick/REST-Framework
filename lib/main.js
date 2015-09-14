'use strict';

var server = require('../server');
var Router = require('./router');
var router = Router();


var app = exports = module.exports = {};

app.get = function getRoute(path, callback) {
  router.get(path, callback);
};

app.post = function postRoute(path, callback) {
  router.post(path, callback);
};

app.put = function putRoute(path, callback) {
  router.put(path, callback);
};

app.patch = function patchRoute(path, callback) {
  router.patch(path, callback);
};

app.delete = function deleteRoute(path, callback) {
  router.delete(path, callback);
};

app.createServer = function createServer(port) {
  server.startServer(port, router.route.bind(router));
};

