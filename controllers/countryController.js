const Country = require('../models/country');

exports.country_details = (req, res, next) => {
    Country.findById(req.params.id, function (err, country) {
        if (err) {
            return next(err);
        }
        res.send(country);
    })
};

exports.countries = (req, res, next) => {
    Country.find(function (err, country) {
        if (err) {
            return next(err);
        }
        res.send(country);
    })
};