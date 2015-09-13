//HandlerStack creates a new object with a defined path,
//containing the list of that paths methods/callbacks
'use strict';

var Router = require('router');



module.exports = HandlerStack;

function HandlerStack(path) {
  //user defined path to start a method stack on i.e. /foo/bar
  this.path = path;
  //array of method/callbacks tied to a particular path
  this.stack = [];
}

HandlerStack.prototype.routeHandle = function(httpMethod, methodCallback) {
  httpMethod.toLowerCase();

  this.stack.push(router[httpMethod](path, methodCallback));
}

