'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaihttp = require('chai-http');

var del = require('../lib/delete');
var get = require('../lib/get');
var post = require('../lib/post');
var patch = require('../lib/patch');
var put = require('../lib/put');

chai.use(chaihttp);

describe('POST request', function() {
  it('should respond to a POST request', function() {
    chai.request('localhost:3000')
    .post('/someroute') //need to change this to an actual route
    .send({msg: "POST message here"})
    .end(function(err, res) {
      expect(err).to.be(null);
      expect(res).to.have.status(200);

    });
  });
});

describe('GET request', function() {
  it('should respond to a GET request', function() {
    chai.request('localhost:3000')
    .get('/someroute/somefile')
    .end(function(err, res) {
      expect(err).to.be(null);
      expect(res).to.have.status(200);

    });
  });
});

describe('PUT request', function() {
  it('should respond to a PUT request', function() {
    chai.request('localhost:3000')
    .put('/someroute/somefile')
    .send({msg: "PUT message here"})
    .end(function(err, res) {
      expect(err).to.be(null);
      expect(res).to.have.status(200);

    });
  });
});

describe('PATCH request', function() {
  it('should respond to a PATCH request', function() {
    chai.request('localhost:3000')
    .patch('/someroute/somefile')
    .send({msg: "PATCH message here"})
    .end(function(err, res) {
      expect(err).to.be(null);
      expect(res).to.have.status(200);

    });
  });
});

describe('DELETE request', function() {
  it('should respond to a DELETE request', function() {
    chai.request('localhost:3000')
    .delete('/someroute/somefile')
    .end(function(err, res) {
      expect(err).to.be(null);
      expect(res).to.have.status(200);

    });
  });
});
