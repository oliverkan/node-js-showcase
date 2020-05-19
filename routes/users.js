var express = require('express');
var router = express.Router();
const user_controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', user_controller.test);

/* create new user. */
router.post('/', user_controller.user_create);

/* update user. */
router.put('/', function(req, res, next) {
  res.send('update user');
});

/* delete user. */
router.delete('/', function(req, res, next) {
  res.send('delete user');
});

module.exports = router;
