var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* create new user. */
router.post('/', function(req, res, next) {
  
});

/* delete user. */
router.delete('/', function(req, res, next) {
  
});

module.exports = router;
