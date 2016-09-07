var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'BkCGfK4qtGp7jn0Ch8c2KQ',
  consumer_secret: 'KJcinh1geGFPAtIRVUFlXStm974',
  token: '0AKP7BszvcZ-z-gxCxxl03UNj3I1Tijz',
  token_secret: 'et5do3f5JtQ3l6i3wYOuhdHuyCo',
});


module.exports.getData = function (req, res) {
  yelp.search({ term: 'food', location: 'Irvine', limit: 11110})
  .then(function (data) {
    var businesses = data["businesses"];
    res.render('./../client/index', { businesses: businesses });
   //res.send(data);
  })
  .catch(function (err) {
   res.render('./../views/error',{});
  });
}
