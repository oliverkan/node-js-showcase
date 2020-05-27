const Country = require('../models/country');
const Role = require('../models/role');
const fs = require("fs");
const path = require("path");

exports.checkData = () => {
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

    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        } else{
            console.log(count + " roles found in db")
        }
    });
}

