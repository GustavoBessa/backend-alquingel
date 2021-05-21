const express = require('express');
const router = express.Router();
const register = require('../modules/devices/register');
const update = require('../modules/devices/update');
const list = require('../modules/devices/list');

router.post('/', register);

router.put('/', update);

router.get('/', list);

module.exports = router;