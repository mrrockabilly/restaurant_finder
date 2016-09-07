var request = require('supertest');
var _ = require('lodash');
var expect = require('chai').expect;
var app = require('./../server/server');
var routes = app._router.stack;
var router_counter = 0;

for (var i = 0; i < routes.length; i++) {
  if (routes[i].route) {
    router_counter++;
  }
}

request = request(app);

describe('Unit 9 Node API', function() {
  it('should connect to api', function(done) {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should provide back json', function(done) {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200, done);
  });

  it('should have at least two end points', function() {
    expect(router_counter).to.be.at.least(2);
  });

  it('should allows cross origin resource sharing (look up Access-Control-Allow-Origin)', function(done){
    request
      .get('/')
      .expect('Access-Control-Allow-Origin', '*')
      .end(done);
  });
});
