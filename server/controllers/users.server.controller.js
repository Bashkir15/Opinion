var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var config = require('../config/env/' + (process.env.NODE_ENV || 'development'));
var json = require('../helpers/json');
var User = mongoose.model('User');



module.exports = function() {
	var obj = {};

	obj.create = function (req, res) {
		var user = new User(req.body);
		user.token = jwt.sign(user, config.secret);
		user.save(function (err) {
			if (err) {
				return json.bad(err, res);
			}

			json.good({
				record: user
			}, res);
		});
	};

	obj.authenticate = function (req, res) {
		User.findOne({email: req.body.email}, function (err, user) {
			if (err) {
				return json.bad(err, res);
			} else if (user) {
				user.comparePassword(req.body.password, function (err, isMatch) {
					if (err) {
						return json.bad(err, res);
					} else if (isMatch) {
						return json.good({
							record: user,
							token: user.token
						}, res);
					} else {
						return json.bad({message: 'sorry, invalid'}, res);
					}
				});
			} else {
				return json.bad({message: 'Sorry, invalid lawl'}, res);
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
				user.profileViews += 1;
				user.save(function (err, item) {
					if (err) {
						return json.bad(err, res);
					}

					json.good({
						record: item
					}, res);
				});
			} else {
				return json.bad({message: 'Sorry'}, res);
			}
		});
	};

	obj.follow = function (req, res) {
		var currentUser = req.user;
		var toFollow = req.params.userId;

		User.findOne({_id: req.params.userId})
		.populate('following')
		.exec(function (err, user) {
			if (err) {
				return json.bad(err, res);
			} else {
				if (currentUser.following.indexOf(user._id) !== -1) {
					return json.bad({message: 'Sorry, you are already following'}, res);
				}

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