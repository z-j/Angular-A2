module.exports = function(app) {
	app.use('/api/users', require('./api/users'));
	app.use('/api/activities', require('./api/activities'));
	// All undefined asset or api routes should return a 404
	app.route('/:url(api|app|assets)/*').get(function(req, res) {
		res.send(404);
	})
};