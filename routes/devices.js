const express = require('express');
const router = express.Router();
const register = require('../modules/devices/register');
const update = require('../modules/devices/update');
const list = require('../modules/devices/list');

router.post('/new', register);

router.post('/update-nivel', update);

router.get('/list', list);

module.exports = router;