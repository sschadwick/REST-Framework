'use strict';

var fs = require('fs');

module.exports = function(req, res) {
  var countFiles = fs.readdirSync('./data').length; //blocking
  var postData = '';

  req.on('data', function(data) {
    postData += data.toString();
  });

  req.on('end', function() {
    fs.writeFile('./data' + (countFiles + 1), postData, function(err) { //create a new file for the recd data
      if (err) {
        console.log(err);
      }
      res.writeHead(200, { //send response on end of request and after writing the new file
        "Content-Type": "text/plain"
      });
      res.write('Data received in: ' + countFiles + 1);
      return res.end();
    });
  });
};
