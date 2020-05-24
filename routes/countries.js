var express = require('express');
var router = express.Router();
const country_controller = require('../controllers/countryController');

/* GET country list. */
router.get('/', country_controller.countries);

/* find country by id and return details. */
router.get('/:id', country_controller.country_details);

module.exports = router;
