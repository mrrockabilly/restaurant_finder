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

describe('Restaurant Finder should have an index page', function() {
  it('should connect to server', function(done) {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should provide back html', function(done) {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect('content-type', /html/)
      .expect(200, done);
  });
});
