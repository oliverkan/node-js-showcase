const Country = require('../models/country');
const Role = require('../models/role');
const Statistic = require('../models/statistic');
const fs = require("fs");
const path = require("path");

exports.roles =["user", "moderator", "admin"];

exports.checkData = () => {
    //check country collection on mongo db and if there is no data, read and insert country data
    Country.estimatedDocumentCount((err, count) => {
        if (err) {
            throw 'error on country query'
        }
        if (count == 0) {
            //read country list from file
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
        console.log(count + ' countries found in db');
    });

    //check role collection on mongo db and if there is no data, insert role data
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            this.roles.forEach(role => {
                new Role({
                    name: role
                }).save(err => {
                    if (err) {
                        console.log("error", err);
                    }

                    console.log(`added ${role} to roles collection`);
                });
            })
        } else{
            console.log(count + " roles found in db")
        }
    });

    //check statistic collection on mongo db and if there is no data, read and insert statistic data
    Statistic.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            //read statisticData from file
            const statisticData = JSON.parse(fs.readFileSync(path.resolve("data", "monthly_json.json")).toString());
            //convert statisticData to statistic document objects for mongoDb
            const statisticObject = statisticData.map(c => {
                return new Statistic(
                    {
                        date: c.Date,
                        mean: c.Mean,
                        source: c.Source
                    })
            })

            Statistic.insertMany(statisticObject, function (err) {
                if (err) {
                    throw 'error on statistic insert'
                }
                console.log('Statistics inserted successfully')
            })
        }
        console.log(count + ' statistics found in db');
    });
}

