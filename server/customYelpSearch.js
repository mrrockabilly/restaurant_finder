var Yelp = require('yelp');
var passwords = require('./passwords');
// var mongoose = require('mongoose');
// var YelpCache = require('./yelpresults');

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

    // var newyelpcache = new YelpCache({
    //   name: "Test1",
    //   text: "Test2",
    //   phone: "Test3"
    // });
    // newyelpcache.save(function (err) {
    //   if (err) {
    //     console.log("bad");
    //   } else {
    //     console.log("good");
    //   }
    // })


    // YelpCache.find({}, function(err, data){
    //     if (err){
    //         console.log("the error", data)
    //     } else {
    //         console.log(err)
    //     }
    // })

    res.render('./../views/index', { businesses: businesses });
  })
  .catch(function (err) {
   res.render('./../views/error',{});
  });
}
