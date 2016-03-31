var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    name: String,
    user: String,
    date: String,
});
