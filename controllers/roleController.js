const Role = require('../models/role');

exports.roles = (req, res, next) => {
    Role.find(function (err, role) {
        if (err) {
            return next(err);
        }
        res.send(role);
    })
};