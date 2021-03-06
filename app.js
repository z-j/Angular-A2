'use strict';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/');
var path = require('path');
var jwt    = require('jsonwebtoken');

var controller = require('./api/users/user.controller');
var router = express.Router();

mongoose.connect('mongodb://test:edw16@ds013290.mlab.com:13290/customers_db');

//create an express app
var app = express();


//configure the express app to parse JSON-formatted body
app.use(bodyParser.json());
app.use(express.static('public'));
require('./routes')(app);

//app.get('/api/users',function(req, res) {
//	return res.status(200).json("zoh:'zohnewoinw'");
//});


app.listen(8080);



// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8080/");
