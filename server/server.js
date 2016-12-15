'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const path = require('path');
//const User = require('./database');
const passwords = require('./passwords');
const customYelpSearch = require('./customYelpSearch');

app.use(bodyParser());
app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('query');
});

app.post('/submitQuery', customYelpSearch.getCustom);

app.post('/twitter', function(req, res, next){
   console.log(req.body.business);
});

app.listen(3000);

module.exports = app;
