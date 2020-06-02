const Statisctic = require('../models/statistic');

exports.statistics = (req, res, next) => {
    Statisctic.find(function (err, statistic) {
        if (err) {
            return next(err);
        }
        res.send(statistic);
    })
};