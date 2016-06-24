import mongoose from 'mongoose';
var User = mongoose.model('User');
import jwt from 'jsonwebtoken';

module.exports = function (System) {
	var obj = {};
	var json = System.plugins.JSON;

	obj.create = function (req, res) {
		var roles = ['authenticated'];

		User.count({}, function (err, len) {
			if (!len) {
				roles.push('admin');
			}

			var user = new User(req.body);
			user.provider = 'local';
			user.roles = roles;
			user.token = jwt.sign(user, System.config.secret);
			user.save(function (err, user) {
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

						return json.bad({message: 'You have logged in incorrectly too many times, your account has been locked for 2 hours to security'}, res);
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
							$set: {loginAttempts: 0},
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

							return json.bad({message: 'Either your email or password were incorrect'}, res);
						});
					}
				});
			} else {
				return json.bad({message: 'Sorry, either your email or password were incorrect'}, res);
			}
		});
	};

	obj.follow = function (req, res) {
		var currentUser = req.user;
		var toFollow = req.params.userId;

		if (req.user.following.indexOf(toFollow) !== -1) {
			return json.bad({message: 'You are already following that user'}, res);
		}

		User.findOne({_id: toFollow}, function (err, user) {
			if (err) {
				return json.bad(err, res);
			} else {
				currentUser.following.push(user._id);
				currentUser.save(function (err, item) {
					if (err) {
						return json.bad(err, res);
					}

					json.good({
						record: item
					}, res);
				});
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

					json.good({
						record: user
					}, res);
			} else { 
				return json.bad({message: 'Sorry, that user could not be found'}, res);
			}
		});
	};

	obj.search = function (req, res) {
		var keyword = req.params.keyword;
		var criteria = {};

		if (req.query.onlyUsernames) {
			criteria = {username: new RegExp(keyword, 'ig')};
		} else {
			criteria = {
				$or: [
					{ name: new RegExp(keyword, 'ig')},
					{ username: new RegExp(keyword, 'ig')}
				]
			};
		}

		criteria._id = {$ne: req.user._id};

		User.find(criteria, null).exec(function (err, items) {
			if (err) {
				return json.bad(err, res);
			}

			json.good({
				items: items
			}, res);
		});
	};


	return obj;
};