var Twitter = require('twitter');
var passwords = require('./passwords');

var client = new Twitter({
  consumer_key: passwords.twitterconsumer_key,
  consumer_secret: passwords.twitterconsumer_secret,
  access_token_key: passwords.twitteraccess_token_key,
  access_token_secret: passwords.twitteraccess_token_secret
});

client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
   console.log(tweets);
});