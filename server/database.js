var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users')

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    token: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
