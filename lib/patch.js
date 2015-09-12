'use strict';

var fs = require('fs');

module.exports = function(req, res, fileName) {
  var loadFile = '';
  var inputData = '';

  fs.readFile('./data/' + fileName, function(err, data) {
    if (err) {
      console.log(err);
    }
    loadFile += data.toString();
  })

  req.on('data', function(data) {
    inputData += data.toString();
  })

  req.on('end', function() {
    var patchData = loadFile + inputData;
    fs.writeFile('./data/' + fileName, patchData, function(err) { //create a new file for the recd data
      if (err) {
        console.log(err);
      }
      res.writeHead(200, { //send response on end of request and after writing the new file
        "Content-Type": "text/plain"
      })
      res.write('Data patched to: ' + fileName);
      return res.end();
    })
  })
}
