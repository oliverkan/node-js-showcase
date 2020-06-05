const express = require('express');
const router = express.Router();
const authentication = require("../controllers/authController");
const roleController = require("../controllers/roleController");
const verifySignUp = require("../middlewares/verifySignup")

// Login
router.post('/login', (req, res, next) => {
    authentication.signin(req, res);
})

// Register
router.post('/register', [
    verifySignUp.checkDuplicateUsernameOrEmail
], (req, res) => {
    authentication.signup(req, res);
})

// Logout
router.get('/logout', (req, res) => {
    req.logout();
})

// get roles
router.get('/roles', (req, res) => {
    roleController.roles(req,res);
})

module.exports = router;
