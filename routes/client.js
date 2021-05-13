const express = require('express');
const router = express.Router();
const register = require('../modules/register');

router.get('/', function (req, res) {
    res.send('aaa page');
});

router.post('/register', register);

router.get('/singin', function (req, res) {
    res.send('sing in page');
});

module.exports = router;