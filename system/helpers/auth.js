import mongoose from 'mongoose';

const ensureAuthorized = function (req, res, next) {
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

const justGetUser = function (req, res, next) {
	var User = mongoose.model('User');
	var bearerToken;
	var bearerHeader = req.headers["authorization"];

	if (typeof bearerHeader !== 'undefined') {
		var bearer = bearerHeader.split(" ");
		bearerToken = bearer[1];
		req.token = bearerToken;

		User.findOne({token: req.token}, function (err, user) {
			if (user) {
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
		name: 'Auth Helper',
		key: 'auth',
		version: '1.0.0'
	};

	return plugin;
};