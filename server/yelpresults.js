var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/YelpCache')

var Schema = mongoose.Schema;

var YelpCacheSchema = new Schema({
    name: String,
    text: String,
    phone: String
});

var YelpCache = mongoose.model('YelpCache', YelpCacheSchema);

module.exports = User;
