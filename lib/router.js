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
  this.routes.GET[route] = callback;
  return this.routes.GET;
};

Router.prototype.post = function(route, callback) {
  this.routes.POST[route] = callback;
  return this.routes.POST;
};

Router.prototype.put = function(route, callback) {
  this.routes.PUT[route] = callback;
  return this.routes.PUT;
};

Router.prototype.patch = function(route, callback) {
  this.routes.PATCH[route] = callback;
  return this.routes.PATCH;
};

Router.prototype.delete= function(route, callback) {
  this.routes.DELETE[route] = callback;
  return this.routes.DELETE;
};

Router.prototype.route = function(req, res) {
  if (typeof this.routes[req.method][req.url] === 'function')
    this.routes[req.method][req.url](req, res);
};
