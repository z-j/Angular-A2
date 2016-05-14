'use strict';
var express = require('express');
var controller = require('./authenticate.controller');
var router = express.Router();

router.post('/', controller.token);

module.exports = router;