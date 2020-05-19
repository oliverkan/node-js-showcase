var express = require('express');
var router = express.Router();
const user_controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', user_controller.test);

/* find user by id and return details. */
router.get('/:id', user_controller.user_details);

/* create new user. */
router.post('/', user_controller.user_create);

/* update user. */
router.put('/:id/update', user_controller.user_update);

/* delete user. */
router.delete('/:id/delete', user_controller.user_delete);

module.exports = router;
