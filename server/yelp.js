var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'BkCGfK4qtGp7jn0Ch8c2KQ',
  consumer_secret: 'KJcinh1geGFPAtIRVUFlXStm974',
  token: '0AKP7BszvcZ-z-gxCxxl03UNj3I1Tijz',
  token_secret: 'et5do3f5JtQ3l6i3wYOuhdHuyCo',
});

module.exports.getData = function (req, res) {
  yelp.search({ term: 'food', location: 'Irvine', limit: 20})
  .then(function (data) {
   console.log("test");   
   res.send(data);
  })
  .catch(function (err) {
   console.error(err);
  });
}