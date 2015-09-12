'use strict';

var del = require('./lib/delete');
var get = require('./lib/get');
var post = require('./lib/post');
var patch = require('./lib/patch');
var put = require('./lib/put');

var routes = {
  'GET': {},
  'POST': {},
  'PUT': {},
  'PATCH': {},
  'DELETE': {}
};

var Router = function() {
};

module.exports = exports = function() {
  return new Router();
};

Router.prototype.get = function(route, callback) {
  routes.GET[route] = callback;
};

Router.prototype.post = function(route, callback) {
  routes.POST[route] = callback;
};

Router.prototype.put = function(route, callback) {
  routes.PUT[route] = callback;
};

Router.prototype.patch = function(route, callback) {
  routes.PATCH[route] = callback;
};

Router.prototype.delete= function(route, callback) {
  routes.DELETE[route] = callback;
};

Router.prototype.route = function(req, res) {
  if (typeof routes[req.method][req.url] === 'function')
    routes[req.method][req.url](req, res);
};
