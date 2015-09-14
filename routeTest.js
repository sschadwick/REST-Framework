'use strict';

var app = require('./index.js');
var textContent = { "Content-Type": "plain/text" };

app.get('/', function(req, res) {
  res.writeHead(200, textContent);
  res.write('Root request recieved');
  res.end();
});

app.createServer(3000);

console.log(app);
