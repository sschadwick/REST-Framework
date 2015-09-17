'use strict';

var fs = require('fs');

module.exports = function(req, res) {
  var countFiles = fs.readdirSync(__dirname + '/../data/').length; //blocking
  var postData = '';
  console.log(countFiles);

  req.on('data', function(data) {
    postData += data.toString();
  });

//'/../data/' + (countFiles + 1)
  req.on('end', function() {
    fs.writeFile(__dirname + '/../data/testfile', postData, { flag: 'w' }, function(err) { //create a new file for the recd data
      if (err) {
        console.log('post write file error: ' + err);
      }
      res.writeHead(200, { //send response on end of request and after writing the new file
        "Content-Type": "text/plain"
      });
      res.write('Data received in: ' + countFiles + 1);
      return res.end();
    });
  });
};
