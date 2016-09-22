'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const yelpController = require('./yelp');
const customYelpSearch = require('./customYelpSearch');
var passport = require('passport');
var InstagramStrategy = require('passport-instagram').Strategy;
var Strategy = require('./passport');



app.use(bodyParser());
app.use(express.static('client'));
app.set('view engine', 'ejs');

//The route defined as root.


/************ From Example ************/
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
/***************************************/







passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/instagram/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // To keep the example simple, the user's Instagram profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Instagram account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));



app.get('/', function(req, res) {
  res.render('query');
});

app.post('/submitQuery', customYelpSearch.getCustom);

// app.post('/login',
//   passport.authenticate('instagram'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/');
//   });

app.get('/auth/instagram',
  passport.authenticate('instagram'));

app.get('/auth/instagram/callback', 
  passport.authenticate('instagram', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/', yelpController.getData);

// first sample route


app.get('/yelp', yelpController.getData);
//app.get('/instagram', instagramController.getData);

app.listen(3000);

module.exports = app;
