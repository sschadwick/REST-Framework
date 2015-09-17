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

Router.prototype.get = function(route) {
  this.routes.GET[route] = get;
};

Router.prototype.post = function(route, callback) {
  this.routes.POST[route] = post;
};

Router.prototype.put = function(route, callback) {
  this.routes.PUT[route] = put;
};

Router.prototype.patch = function(route, callback) {
  this.routes.PATCH[route] = patch;
};

Router.prototype.delete= function(route, callback) {
  this.routes.DELETE[route] = del;
};

Router.prototype.route = function(req, res) {
  var fileName = req.url.split('/');
  if (typeof this.routes[req.method][req.url] === 'function')
    this.routes[req.method][req.url](req, res, fileName[3]);
};
