var ensureAuthorized = function (req, res, next) {
	var mongoose = require('mongoose');
	var User = mongoose.model('User');
	var bearerToken;
	var bearerHeader = req.headers["authorization"];

	if (typeof bearerHeader !== 'undefined') {
		var bearer = bearerHeader.split(" ");
		bearerToken = bearer[1];
		req.token = bearerToken;

		User.findOne({token: req.token}, function (err, user) {
			if (err || !user) {
				return res.sendStatus(403);
			}

			req.user = user;
			next();
		});
	} else {
		res.sendStatus(403);
	}
};

var justGetUser = function (req, res, next) {
	var mongoose = require('mongoose');
	var User = mongoose.model('User');
	var bearerToken;
	var bearerHeader = req.headers["authorization"];

	if (typeof bearerHeader !== 'undefined') {
		var bearer = bearerHeader.split(" ");
		bearerToken = bearer[1];
		req.token = bearerToken;

		User.findOne({token: req.token}, function (err, user) {
			if (err) {
				req.user = user;
			}

			next();
		});
	}
};

module.exports = function (System) {
	var plugin = {
		register: function() {
			return {
				ensureAuthorized: ensureAuthorized,
				justGetUser: justGetUser
			};
		}
	};

	plugin.register.attributes = {
		name: 'Authentication Helper',
		key: 'auth',
		version: '1.0.0'
	};

	return plugin;
};