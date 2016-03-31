var User = require('../models/users');
module.exports.create = function (req, res) {
    var user_data = new User(req.body);
    user_data.save(function (err, result) {
        res.json(result);
    });
}
module.exports.update = function (req, res) {
    var user_data = new User(req.body);
    console.log(user_data);
}
module.exports.list = function (req, res) {
    User.find({}, function (err, result) {
        res.json(result);
    }).sort({date: -1});
}