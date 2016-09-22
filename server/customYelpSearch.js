var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'BkCGfK4qtGp7jn0Ch8c2KQ',
  consumer_secret: 'KJcinh1geGFPAtIRVUFlXStm974',
  token: '0AKP7BszvcZ-z-gxCxxl03UNj3I1Tijz',
  token_secret: 'et5do3f5JtQ3l6i3wYOuhdHuyCo',
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
