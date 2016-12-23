var Yelp = require('yelp');
var passwords = require('./passwords');
var yelp = new Yelp({
  consumer_key: passwords.yelpConsumer_key,
  consumer_secret: passwords.yelpConsumer_secret,
  token: passwords.yelpToken,
  token_secret: passwords.yelpToken_secret,
});

module.exports.getCustom = function (req, res) {
console.log(req.body);
  yelp.search({ term: req.body.results, location: req.body.city})
  .then(function (data) {
    var businesses = data["businesses"];
    res.render('./../views/index', { businesses: businesses });
  })
  .catch(function (err) {
   res.render('./../views/error',{});
  });
}
