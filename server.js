'use strict';

var http = require('http');
var Router = require('./lib/router');
var router = new Router();
var fs = require('fs');

router.get('/someroute', function(req, res) {

});

function startServer(port, handlerStack) {
  function onRequest(req, res) {

  }

  http.createServer(onRequest)
  .listen(port, function() {
    console.log('Server is running on port: ' + port);
  });
}

exports.startServer = startServer;
