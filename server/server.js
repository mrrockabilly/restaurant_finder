'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const yelpController = require('./yelp');
const instagramController = require('./instagram');
const customYelpSearch = require('./customYelpSearch')

//Allows CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   bodyParser();

app.use(bodyParser());
app.set('view engine', 'ejs');

//The route defined as root.

app.get('/search', function(req, res) {
  res.render('./../client/query');
});

app.post('/submitQuery', customYelpSearch.getCustom);

app.get('/', yelpController.getData);

// first sample route


app.get('/yelp', yelpController.getData);
app.get('/instagram', instagramController.getData);

app.listen(3000);

module.exports = app;
