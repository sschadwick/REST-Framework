'use strict';

var http = require('http');
var server;

function startServer(port, route) {
  function onRequest(req, res) {
    route(req, res);
  }

  server = http.createServer(onRequest)
  .listen(port, function() {
    console.log('Server is running on port: ' + port);
  });
}

exports.startServer = startServer;

function stopServer() {
  server.close();
}

exports.stopServer = stopServer;


