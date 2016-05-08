'use strict';
var express = require('express');
var controller = require('./user.controller');
var router = express.Router();

router.get('/', controller.index);
router.put('/:id', controller.update);
router.post('/', controller.create);
router.delete('/:id', controller.delete);



module.exports = router;