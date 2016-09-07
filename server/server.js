'use strict';

const express = require('express');
const app = express();
const yelpController = require('./yelp');
const instagramController = require('./instagram');

//Allows CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//The route defined as root.

app.get('/', yelpController.getData);

// first sample route


app.get('/yelp', yelpController.getData);
app.get('/instagram', instagramController.getData);

app.listen(3000);

module.exports = app;
