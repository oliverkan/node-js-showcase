const User = require('../models/user');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_details = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return next(err);
        }
        res.send(user);
    }).populate('nationality');
};

exports.user_create = function (req, res, next) {
    //populate user object
    let user = new User(
        {
            name: req.body.name,
            lastName: req.body.lastname,
            birthDate: new Date(req.body.birthdate),
            userName: req.body.userName,
            password: req.body.password,
            nationality: req.body.nationality
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(user)
    })
};

exports.user_update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) {
            return next(err);
        }
        res.send('User udpated.');
    });
};

exports.user_delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Deleted successfully!');
    })
};