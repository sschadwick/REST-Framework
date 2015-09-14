'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var app = require(__dirname + '/../index.js');
var host = 'localhost:3000';

app.get('/foo', function(req, res, sampleFile) {
  console.log('test GET');
});

app.put('/foo/bar', function(req, res, sampleFile) {
  console.log('test PUT');
});

app.post('/foo/bar', function(req, res, sampleFile) {
  console.log('test POST');
});

app.put('/foo/bar', function(req, res, sampleFile) {
  console.log('test PUT');
});

app.delete('/foo/bar', function(req, res, sampleFile) {
  console.log('test DELETE');
});

app.createServer(3000);


describe('http methods through the rest api', function() {
  it('Should should return the contents from .data/sampleFIle', function(done) {
    chai.request(host)
    .get('/foo')
    .end(function(err, res) {
      expect(err).to.eql(null);
      done();
    });
  });
});

//   it('Should write data to a file', function(done) {
//     chai.request(host)
//     .put('/foo/bar')
//     .send({msg: 'Hello from test PUT'})
//     .end(function(err, res) {
//       done();
//     });
//   });

//   it('Should create a new file and write data to it', function(done) {
//     chai.request(host)
//     .post('/foo/bar')
//     .send({msg: 'Hello from test POST'})
//     .end(function(err, res) {
//       done();
//     });
//   });

//   it('Should write data to a file without overwriting its current content', function(done) {
//     chai.request(host)
//     .patch('/foo/bar')
//     .send({msg: 'Hello from test PATCH'})
//     .end(function(err, res) {
//       done();
//     });
//   });

//   it('Should delete a file', function(done) {
//     chai.request(host)
//     .delete('/foo/bar')
//     .end(function(err, res) {
//       done();
//     });
//   });
// });
