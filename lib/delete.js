'use strict';

var fs = require('fs');

module.exports = function(req, res, fileName) {
  fs.unlink('./data/' + fileName, function(err) {
    if (err) {
      console.log(err);
    }
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.write('File successfully deleted');
    return res.end();
  });
};
