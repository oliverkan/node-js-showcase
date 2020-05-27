const express = require('express');
const router = express.Router();
const authentication = require("../controllers/authController")

// Login
router.post('/login', (req, res, next) => {
    authentication.signin(req, res);
})

// Register
router.post('/register', (req, res) => {
    const {name, email, password, password2} = req.body;
    authentication.signup(req, res);
})

// Logout
router.get('/logout', (req, res) => {
    req.logout();
})

module.exports = router;
