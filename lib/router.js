'use strict';

var del = require('./delete');
var get = require('./get');
var post = require('./post');
var patch = require('./patch');
var put = require('./put');
var notFound = require('./respond404');


var Router = function() {
  this.routes = {
  'GET': {},
  'POST': {},
  'PUT': {},
  'PATCH': {},
  'DELETE': {}
  };
};

module.exports = exports = function() {
  return new Router();
};

Router.prototype.get = function(route, callback) {
  routes.GET[route] = callback;
  return routes.GET;
};

Router.prototype.post = function(route, callback) {
  routes.POST[route] = callback;
  return routes.POST;
};

Router.prototype.put = function(route, callback) {
  routes.PUT[route] = callback;
  return routes.PUT;
};

Router.prototype.patch = function(route, callback) {
  routes.PATCH[route] = callback;
  return routes.PATCH;
};

Router.prototype.delete= function(route, callback) {
  routes.DELETE[route] = callback;
  return routes.DELETE;
};

Router.prototype.route = function(req, res) {
  if (typeof routes[req.method][req.url] === 'function')
    routes[req.method][req.url](req, res);
};
