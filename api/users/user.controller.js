var _ = require('lodash');
//var customer = require('./customer.model');
// Get list of customers
exports.index = function(req, res) {
	console.log("here in index");
	return res.json(200, "zoh:'haha index'");
};

// Updates an existing customer in the DB.
exports.update = function(req, res) {
	console.log("here in update");
	return res.json(200, "zoh:'haha update'");
};


function handleError(res, err) {
	return res.send(500, err);
};