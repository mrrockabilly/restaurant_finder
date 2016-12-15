'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const path = require('path');
//const User = require('./database');
const passwords = require('./passwords');
const customYelpSearch = require('./customYelpSearch');
const INSTAGRAM_CLIENT_ID = passwords.instaClientId;
const INSTAGRAM_CLIENT_SECRET = passwords.instaClientSecret;

app.use(bodyParser());
app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('query');
});

app.post('/submitQuery', customYelpSearch.getCustom);

// app.get('/', yelpController.getData);

// app.get('/yelp', yelpController.getData);

app.listen(3000);

module.exports = app;
