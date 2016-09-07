var Yelp = require('yelp');



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