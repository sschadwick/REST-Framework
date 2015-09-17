'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var app = require(__dirname + '/../index.js');
var host = 'localhost:3000/api';
chai.use(chaiHttp);


describe('App test', function() {
  before('create server', function(done) {
    app.get('/api/foo/testfile');
    app.put('/api/foo/testfile');
    app.post('/api/foo/testfile');
    app.patch('/api/foo/testfile');
    app.delete('/api/foo/testfile');
    app.createServer(3000);
    done();
  });

  after('stop server', function() {
    app.stopServer();
  });

  it('POST to /foo/testfile', function(done) {
    chai.request(host)
    .post('/foo/testfile')
    .send({msg: 'Hello from test POST'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      done();
    });
  });

  it('POST to /foo/testfile', function(done) {
    chai.request(host)
      .get('/foo/testfile')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        done();
      });
  });


  it('PUT to /foo/testfile', function(done) {
    chai.request(host)
    .put('/foo/testfile')
    .send({msg: 'Hello from test PUT'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      done();
    });
  });

  it('PATCH to /foo/testfile', function(done) {
    chai.request(host)
    .patch('/foo/testfile')
    .send({msg: 'Hello from test PATCH'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      done();
    });
  });

  it('DELETE to /foo/testfile', function(done) {
    chai.request(host)
    .delete('/foo/testfile')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      done();
    });
  });
});
