const express = require('express');
const router = express.Router();
const register = require('../modules/devices/register');

router.post('/new', register);

router.post('/update-nivel', function (req, res) {
    res.send('fuck')
});

module.exports = router;