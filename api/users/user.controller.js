var _ = require('lodash');
var user = require('./user.model');

exports.index = function(req, res) {
	console.log("get call");
	user.find(function (err, users) {
	if(err) { 
		console.log("in error");
		console.log(err);
		return handleError(res, err); 
	}
	return res.json(200, users);
	});
};

exports.create = function(req, res) {
	console.log("create call");
	console.log(req.body);
	user.create(req.body, function(err, user) {
	if(err) { return handleError(res, err); }
		return res.json(201, user);
	});
};

// Updates an existing customer in the DB.
exports.update = function(req, res) {
	console.log("update call");
	if(req.body._id) { delete req.body._id; }
	user.findById(req.params.id, function (err, user) {
		if (err) { return handleError(res, err); }
		if(!user) { return res.send(404); }
		var updated = _.merge(user, req.body);
		updated.save(function (err) {
		if (err) { return handleError(res, err); }
			return res.json(200, user);
		});
	});
};

// delete an existing customer in datastore.
exports.delete = function(req, res) {
	console.log("delete call");
	user.findById(req.params.id, function (err, user) {
	if(err) { return handleError(res, err); }
	if(!user) { return res.send(404); }
	user.remove(function(err) {
	if(err) { return handleError(res, err); }
		return res.send(204);
	});
	});
};

function handleError(res, err) {
	return res.send(500, err);
};