var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelpcache')

var Schema = mongoose.Schema;

var yelpCacheSchema = new Schema({
    name: String,
    text: String,
    phone: String
});

var YelpCache = mongoose.model('YelpCache', yelpCacheSchema);

module.exports = YelpCache;
