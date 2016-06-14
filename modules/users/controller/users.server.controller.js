var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('jsonwebtoken');

module.exports = function (System) {
	var json = System.plugins.JSON;
	var obj = {};

	obj.create = function (req, res) {
		/**
		 * The roles for the new user
		 * @type {Array}
		 */
		var roles = ['authenticated'];

		/**
		 * Check if this user is the first user
		 */

		User.count({}, function (err, len) {
			/**
			 * If so, they should be admin
			 */

			if (!len) {
				roles.push('admin');
			}

			/**
			 * Add the user
			 */

			var user = new User(req.body);
			user.provider = 'local';
			user.roles = roles;
			user.token = jwt.sign(user, System.config.secret);
			user.active = true;

			user.save(function (err) {
				if (err) {
					return json.bad(err, res);
				}

				json.good({
					record: user,
					token: user.token
				}, res);
			});
		});
	};

	obj.authenticate = function (req, res) {
		User.findOne({email: req.body.email}, function (err, user) {
			if (err) {
				return json.bad(err, res);
			} else if (user) {
				if (user.isLocked) {
					return user.incorrectLoginAttempts(function (err) {
						if (err) {
							return json.bad(err, res);
						}

						return json.bad({message: 'You have logged in incorrectly too many times. For security reasons your account was locked for two hours.'}, res);
					});
				}

				user.comparePassword(req.body.password, function (err, isMatch) {
					if (err) {
						return json.bad(err, res);
					}

					if (isMatch) {
						if (!user.loginAttempts && !user.lockUntil) {
							return json.good({
								record: user,
								token: user.token
							}, res);
						}

						var updates = {
							$set: { loginAttempts: 0},
							$unset: {lockUntil: 1}
						};

						user.update(updates, function (err) {
							if (err) {
								return json.bad(err, res);
							}

							json.good({
								record: user,
								token: user.token
							}, res);
						});
					} else {
						user.incorrectLoginAttempts(function (err) {
							if (err) {
								return json.bad(err, res);
							}

							return json.bad({message: 'Either your email or password were incorrect. This was ' + user.loginAttempts + ' of 5 attempts'}, res);
						});
					}
				});
			} else {
				return json.bad({message: 'Either your email or password were incorrect'}, res);
			}
		});
	};

	obj.single = function (req, res) {
		User.findOne({_id: req.params.userId})
		.populate('following')
		.exec(function (err, user) {
			if (err) {
				return json.bad(err, res);
			} else if (user) {
				return json.good({
					record: user
				}, res);
			} else {
				return json.bad({message: 'Sorry, that user could not be found'}, res);
			}
		});
	};

	return obj;
};