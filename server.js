'use strict';

var http = require('http');
var fs = require('fs');

function startServer(port, route) {
  function onRequest(req, res) {
    route(req, res);
  }

  http.createServer(onRequest)
  .listen(port, function() {
    console.log('Server is running on port: ' + port);
  });
}

exports.startServer = startServer;
