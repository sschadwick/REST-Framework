'use strict';

var fs = require('fs');

module.exports = function(req, res, fileName) {
  var putData = '';

  req.on('data', function(data) {
    putData += data.toString();
  });

  req.on('end', function() {
    fs.writeFile(__dirname + '/../data/' + fileName, putData, function(err) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.write('Data has been put into file: ' + fileName);
      return res.end();
    });
  });
};
