const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const dataOperations = require('./data/dataOperations');
require("custom-env").env(true);

const authRouter = require('./routes/authentication');
const usersRouter = require('./routes/users');
const countriesRouter = require('./routes/countries');
const statisticsRouter = require('./routes/statistics');

const app = express();

app.use(logger('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
const corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/countries', countriesRouter);
app.use('/statistics', statisticsRouter);

app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

// Set up mongoose connection
let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true,});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function (ref) {
        console.log("Connected to mongo server.");
        dataOperations.checkData();
    }
);

module.exports = app;
