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
    })
};

exports.user_create = function (req, res, next) {
    //populate user object
    let user = new User(
        {
            name: req.body.name,
            lastName: req.body.lastname,
            birthDate: new Date(req.body.birthdate)
        }
    );
    console.log(user);

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};