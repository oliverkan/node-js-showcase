const express = require('express');
const router = express.Router();
const authentication = require("../controllers/authController")
const verifySignUp = require("../middlewares/verifySignup")

// Login
router.post('/login', (req, res, next) => {
    authentication.signin(req, res);
})

// Register
router.post('/register', [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
], (req, res) => {
    authentication.signup(req, res);
})

// Logout
router.get('/logout', (req, res) => {
    req.logout();
})

module.exports = router;
