const express = require('express');
const router = express.Router();
const statistic_controller = require('../controllers/statisticController');
const authJwt = require("../middlewares/authJwt");

/* GET statistics. */
router.get('/', [authJwt.verifyToken], statistic_controller.statistics);

module.exports = router;
