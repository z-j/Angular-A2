var _ = require('lodash');
var jwt    = require('jsonwebtoken');

exports.token = function(req, res) {
	console.log(req.body.username);
	console.log(req.body.pwd);
	console.log("create token call");
	console.log(req.body);
	
	var user = {
		username:"admin_123",
		pwd:"admin_456"
	};

	if(req.body.username == user.username && req.body.pwd == user.pwd) {
		var token = jwt.sign(user, "myTokenSecret", {
	          expiresIn: '1h' // expires in 24 hours
	        });

	        // return the information including token as JSON
	        res.json({
	          success: true,
	          message: 'Enjoy your token!',
	          token: token
	        });
	} else {
		res.json({
	          success: false,
	          message: 'Username or password does not match!'
	        });
	}

	return res;


};


function handleError(res, err) {
	return res.send(500, err);
};