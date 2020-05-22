const Country = require('../models/country');

exports.country_details = function (req, res, next) {
    Country.findById(req.params.id, function (err, country) {
        if (err) {
            return next(err);
        }
        res.send(country);
    })
};

exports.countries = function (req, res, next) {
    Country.find( function (err, country) {
        if (err) {
            return next(err);
        }
        res.send(country);
    })
};