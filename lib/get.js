'use strict';

var fs = require('fs');

module.exports = function(req, res, fileName) {
  var getData = ''; //buffer GET requested file

  fs.readFile(__dirname + '/../data/' + fileName, function(err, data) {
    if (err) {
      console.log(err);
    }
    getData += data.toString();
  });

  res.writeHead(200, {
    "Content-Type": "plain/text"
  });
  res.write('Retrieved data: ' + getData);
  return res.end();
};
