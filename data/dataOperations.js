const Country = require('../models/country');
const fs = require("fs");
const path = require("path");

exports.checkData = () => {
    Country.find(function (err, countries) {
        if (err) {
            throw 'error on country query'
        }
        if (countries.length == 0) {
            const countriesData = JSON.parse(fs.readFileSync(path.resolve("data", "countries.json")).toString());
            //convert country array to Country document objects for mongoDb
            const countriesObject = countriesData.map(c => {
                return new Country(
                    {
                        name: c.name,
                        code: c.code
                    })
            })

            Country.insertMany(countriesObject, function (err) {
                if (err) {
                    throw 'error on country insert'
                }
                console.log('Countries inserted successfully')
            })
        }
        console.log(countries.length + ' countries found in db');
    })
}