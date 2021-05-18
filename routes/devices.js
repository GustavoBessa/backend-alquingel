const express = require('express');
const router = express.Router();
const register = require('../modules/devices/register');
const update = require('../modules/devices/update');

router.post('/new', register);

router.post('/update-nivel', update);

module.exports = router;