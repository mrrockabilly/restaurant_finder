'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./database');
const passwords = require('./passwords');
const yelpController = require('./yelp');
const customYelpSearch = require('./customYelpSearch');
const passport = require('passport');
const InstagramStrategy = require('passport-instagram').Strategy;
const Strategy = require('./passport');
const INSTAGRAM_CLIENT_ID = passwords.instaClientId;
const INSTAGRAM_CLIENT_SECRET = passwords.instaClientSecret;

app.use(bodyParser());
app.use(express.static('client'));
app.set('view engine', 'ejs');

//The route defined as root.


/************ From Example for Instagram ************/
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
/****************************************************/


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
      console.log(accessToken);
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



/*********************** Manually adding users to the database test *****************/
/************************************************************************************/
/************************************************************************************/

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname, "../views/login.html"))
});

app.post('/user', function (req, res) {
    var user = new User({
        username: req.body.name,
        token: req.body.age
    });
    user.save(function(err){
        if(err){
            res.status(500).send('Failed to save to the database')
        } else {
            res.status(200).redirect("/user");
        }
    })
});

app.get('/user', function(req, res){
    User.find({}, function(err, people){
        if (err){
            res.status(500).send('Failed to find anyone:(')
        } else {
            res.status(200).send(people);
        }
    })
});

/************************************************************************************/
/************************************************************************************/
/************************************************************************************/



app.listen(3000);

module.exports = app;
