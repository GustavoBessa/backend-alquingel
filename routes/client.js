const express = require('express');
const router = express.Router();
const register = require('../modules/users/register');
const login = require('../modules/users/login');

router.post('/singup', register);

router.post('/singin', login);

module.exports = router;