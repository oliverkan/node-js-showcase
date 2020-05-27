const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/userController');
const authJwt = require("../middlewares/authJwt");

/* GET users listing. */
router.get('/', [authJwt.verifyToken, authJwt.isAdmin], user_controller.users);

/* find user by id and return details. */
router.get('/:id', [authJwt.verifyToken], user_controller.user_details);

/* create new user. */
router.post('/', [authJwt.verifyToken, authJwt.isAdmin],user_controller.user_create);

/* update user. */
router.put('/:id/update', [authJwt.verifyToken],user_controller.user_update);

/* delete user. */
router.delete('/:id/delete', [authJwt.verifyToken, authJwt.isAdmin],user_controller.user_delete);

module.exports = router;
