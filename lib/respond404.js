'use strict';

module.exports = function(req, res) {
  res.writeHead(404, {
    "Content-Type": "text/plain"
  });
  res.write('404 Not Found');
  return res.end();
};
