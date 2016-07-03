var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var config = require('../config/env/' + (process.env.NODE_ENV || 'development'));
var json = require('../helpers/json');
var User = mongoose.model('User');
import path from 'path';
import fs from 'fs';



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
				var alreadyFollowing;
				user.profileViews += 1;

				var isInArray = req.user.following.some(function (follow) {
					return follow.equals(user._id);
				});

				if (isInArray) {
					alreadyFollowing = true;
				} else {
					alreadyFollowing = false;
				}

				user.save(function (err, item) {
					if (err) {
						return json.bad(err, res);
					}

					json.good({
						record: item,
						alreadyFollowing: alreadyFollowing
					}, res);
				});
				/*var alreadyFollowing;
				user.profileViews += 1;

				var isInArray = req.user.following.some(function (follower) {
					return follower.equals(user._id);
				});

				if (isInArray) {
					alreadyFollowing = true;
				} else {
					alreadyFollowing = false;
				}

				user.save(function (err, item) {
					if (err) {
						return json.bad(err, res);
					}

					if (alreadyFollowing = true) {
						return json.good({
							record: item,
							alreadyFollowing: alreadyFollowing
						}, res);
					} else {
						json.good({
							record: item
						}, res);
					}
					
				}); */
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

	obj.unfollow = function (req, res) {
		var toUnfollow = req.params.userId;

		User.findOne({_id: req.params.userId})
		.populate('following')
		.exec(function (err, user) {
			if (err) {
				return json.bad(err, res);
			} else {
				var isInArray = req.user.following.some(function (follower) {
					return follower.equals(user._id);
				});

				if (isInArray) {
					req.user.following.splice(req.user.following.indexOf(user._id), 1);
					req.user.save(function (err, item) {
						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				} else {
					return json.bad({message: 'Sorry, you are not following that user'}, res);
				}
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

	obj.image = function (req, res) {
		var userId = req.params.userId;
		var file = req.files.file;
		var uploadDate = Date.now();
		var tempPath = file.path;
		var targetPath = path.join(__dirname, "../../public/static/uploads/users/pictures/" + userId + uploadDate + file.name)
		var savePath = '../static/uploads/users/pictures/' + userId + uploadDate + file.name;

		User.findOne({_id: req.params.userId})
		.exec(function (err, user) {
			if (err) {
				return json.bad(err, res);
			} else {
				fs.rename(tempPath, targetPath, function (err) {
					if (err) {
						return json.bad(err, res);
					}

					user.picture = savePath;
					user.save(function (err, u) {
						if (err) {
							return json.bad(err, res);
						}

						json.good({
							picture: u.picture
						}, res);
					});
				});
			}
		});
	};

	obj.updateProfile = function (req, res) {
		User.findOne({_id: req.params.userId})
		.exec(function (err, user) {
			if (err) {
				return json.bad(err, res);
			} else {
				user.gender = req.body.gender;
				user.birthday = req.body.birthday;
				user.phone = req.body.phone;
				user.occupation = req.body.occupation;
				user.interests = req.body.interests;
				user.bio = req.body.bio;

				user.save(function (err, item) {
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


	return obj;
};