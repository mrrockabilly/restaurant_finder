var Twitter = require('twitter');
var passwords = require('./passwords');

var client = new Twitter({
  consumer_key: passwords.twitterconsumer_key,
  consumer_secret: passwords.twitterconsumer_secret,
  access_token_key: passwords.twitteraccess_token_key,
  access_token_secret: passwords.twitteraccess_token_secret
});

module.exports.getTweets = function (req, res) {
  client.get('search/tweets', { q: req.body.business }, function (error, tweets, response) {
    var statuses = tweets.statuses;
    res.render('./../views/tweets', {statuses: statuses});
  });

}
