import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import json from '../helpers/json';
import auth from '../helpers/auth';
import event from '../helpers/events';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer'
import async from 'async'
import crypto from 'crypto'
import handlebars from 'handlebars'

var User = mongoose.model("User");
var Setting = mongoose.model('Setting');

module.exports = () => {
	var obj = {};

	['followed'].map((action) => {
		event.on(action, (data) => {
			var user = data.user;
			var actor = data.actor;
			user.notify({
				userId: user._id,
				actorId: actor._id,
				notificationType: action
			});
		});
	});

	obj.create = (req, res) => {
		var roles = ['authenticated'];

		User.count({}, (err, len) => {
			if (!len) {
				roles.push('admin');
			}

			var user = new User(req.body);
			user.provider = 'local';
			user.roles = roles;

			var token = auth.generateToken(user);

			user.save((err) => {
				if (err) {
					return json.bad(err, res);
				}

				var settings = new Setting();
				settings.creator = user._id;
				settings.save((err) => {
					if (err) {
						return json.bad(err, res)
					}
				});

				json.good({
					record: user,
					token: token
				}, res);
			});
		});
	};

	obj.authenticate = (req, res) => {
		User.findOne({email: req.body.email}, (err, user) => {
			if (err) {
				return json.bad(err, res);
			}

			if (user.isLocked) {
				return user.incorrectLoginAttempts((err) => {
					if (err) {
						return json.bad(err, res);
					}

					json.bad({message: 'Sorry, you have reached the maximum number of login attempts and your account is locked until: ' + user.lockUntil}, res);
				});
			}

			if (user.secureLock) {
				return json.bad({message: 'Sorry, your account has reached the maximum number of login attempts several times and has been locked until further notice. If this has been an error, or if it was not you trying to login, please contact our support team to resolve this'}, res);
			}

			user.comparePassword(req.body.password, (err, isMatch) => {
				if (err) {
					return json.bad(err, res);
				}

				if (isMatch) {
					if (!user.loginAttempts && !user.lockUntil && !user.secureLock) {
						var token = auth.generateToken(user);

						return json.good({
							record: user,
							token: token
						}, res);
					}

					var updates = {
						$set: {
							loginAttempts: 0,
							limitReached: 0
						},

						$unset: {lockUntil: 1}
					};

					return user.update(updates, (err, item) => {
						var token = auth.generateToken(user);

						json.good({
							record: user,
							token: token
						}, res);
					});
				} 

				user.incorrectLoginAttempts((err) => {
					var totalAttempts;

					if (err) {
						return json.bad(err, res);
					}

					if (user.limitReached >= 2) {
						totalAttempts = 3;
					} else {
						totalAttempts = 5;
					}

					json.bad({message: 'Sorry, either your email or password were incorrect. You have ' + (totalAttempts - user.loginAttempts) + ' remaining until your account is temporarily locked'}, res);
				});
			});
		});
	};

	obj.uploadImage = (req, res) => {
		var userId = req.params.userId;
		var file = req.files.file;
		var uploadDate = Date.now();
		var tempPath = file.path;
		var targetPath = path.join(__dirname, '../../public/static/uploads/users/pictures/' + userId + uploadDate + file.name);
		var savePath = '../static/uploads/users/pictures/' + userId + uploadDate + file.name;

		User.findOne({_id: req.params.userId})
		.exec((err, user) => {
			if (err) {
				return json.bad(err, res);
			} else {
				fs.rename(tempPath, targetPath, (err) => {
					if (err) {
						return json.bad(err, res);
					}

					user.picture = savePath;
					user.save((err, u) => {
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

	obj.forgot = (req, res) => {
		async.waterfall([
			function (done) {
				crypto.randomBytes(20, (err, buf) => {
					var token = buf.toString('hex');
					done(err, token);
				});
			},

			function (token, done) {
				User.findOne({email: req.body.email}, (err, user) => {
					if (!user) {
						return json.bad({message: 'Sorry, there is no user with that email'}, res);
					}

					user.resetPasswordToken = token;
					user.resetPasswordExpires = Date.now() + 3600000;

					user.save((err) => {
						done(err, token, user);
					});
				});
			},

			function (token, user, done) {
				var emailTemplate = fs.readFileSync('./server/templates/email.template.html', {encoding: 'utf-8'});
				var template = handlebars.compile(emailTemplate);

				var replacements = {
					token: user.resetPasswordToken
				};

				var templateToSend = template(replacements);

				var mailTransport = nodemailer.createTransport({
					service: global.config.mailer.service,
					auth: {
						user: global.config.mailer.auth.user,
						pass: global.config.mailer.auth.pass
					}
				});

				var mailOptions = {
					to: user.email,
					from: 'Opinionated',
					subject: 'Your password reset',
					html: templateToSend
				};

				mailTransport.sendMail(mailOptions, (error, info) => {
					if (error) {
						json.bad(error, res);
					} else {
						json.good(info.response, res);
					}
				});
			}
		], (err) => {
			var success = true;

			if (err) {
				return json.bad(err, res);
			}

			json.good({
				record: success
			}, res);
		});
	};

	obj.reset = (req, res) => {
		User.findOne({resetPasswordToken: req.body.token}, (err, user) => {
			if (err) {
				return json.bad(err, res);
			}

			user.password = req.body.password;
			user.resetPasswordToken = undefined;
			user.resetPasswordExpires = undefined;

			user.save((err) => {
				if (err) {
					return json.bad(err, res);
				}

				json.good({
					record: user
				}, res);
			});
		});
	};

	obj.profileReset = (req, res) => {
		User.findOne({_id: req.params.userId})
		.exec((err, user) => {
			if (err) {
				return json.bad(err, res);
			}

			user.comparePassword(req.body.password, (err, isMatch) => {
				if (err) {
					return json.bad(err, res);
				} else if (isMatch) {
					user.password = req.body.newPassword;
					user.save((err) => {
						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: user
						}, res);
					});
				}
			});
		});
	};

	obj.single = (req, res) => {
		User.findOne({_id: req.params.userId})
		.populate('following')
		.exec((err, user) => {
			if (err) {
				return json.bad(err, res);
			} else if (user) {
				return User.find({following: user._id}, (err, followers) => {
					if (err) {
						return json.bad(err, res);
					}

					var alreadyFollowing;

					var isInArray = req.user.following.some((follow) => {
						return follow.equals(user._id);
					});

					if (isInArray) {
						alreadyFollowing = true;
					} else {
						alreadyFollowing = false;
					}

					

					return json.good({
						record: user,
						followers: followers,
						following: user.following,
						alreadyFollowing: alreadyFollowing
					}, res);
				});
			} else {
				return json.bad({message: 'Sorry, that user could not be found'}, res);
			}
		});
	};

	obj.follow = (req, res) => {
		User.findOne({_id: req.params.userId})
		.populate('following')
		.exec((err, user) => {
			if (err) {
				return json.bad(err, res);
			} else if (user) {
				if (req.user.following.indexOf(user._id) != -1) {
					return json.bad({message: 'Sorry, you are already following that user'}, res);
				}

				req.user.following.push(user._id);
				req.user.save((err, item) => {
					if (err) {
						return json.bad(err, res);
					}

					event.trigger('followed', {
						user: user,
						actor: req.user
					});

					json.good({
						record: item
					}, res);
				});
			}
		});
	};

	obj.unfollow = (req, res) => {
		User.findOne({_id: req.params.userId})
		.populate('following')
		.exec((err, user) => {
			if (err) {
				return json.bad(err, res);
			} else if (user) {
				if (req.user.following.indexOf(user._id) != -1) {
					req.user.following.splice(req.user.following.indexOf(user._id), 1);
					req.user.save((err, item) => {
						if (err) {
							return json.bad(err, res);
						}

						event.trigger('unfollowed', {
							user: user,
							actor: req.user
						});

						json.good({
							record: item
						}, res);
					});
				}
			}
		});
	};

	obj.notifications = (req, res) => {
		User.findOne({_id: req.user._id, 'notifications.unread': true})
		.lean()
		.populate('notifications')
		.populate('notifications.thread')
		.populate('notifications.user')
		.populate('notifications.actor')
		.exec((err, user) => {
			if (err) {
				return json.bad(err, res);
			} else if (user) {
				user.notifications = user.notifications.filter((item) => {
					return item.unread;
				});

				return json.good({
					record: user,
					notifications: user.notifications.slice(0, 10)
				}, res);
			} else {
				return json.good({message: 'No unread notifications'}, res);
			}
		});
	};

	obj.markRead = (req, res) => {
		var notificationsIds = [];
		User.findOne({_id: req.user._id, 'notifications.unread': true})
		.populate('notification')
		.exec((err, user) => {
			if (err) {
				return json.bad(err, res);
			} else if (user) {
				for (var i in req.body) {
					notificationsIds.push(req.body[i]._id);
				}

				user.notifications.forEach((item) => {
					if (notificationsIds.indexOf(item._id.toString()) != -1) {
						item.unread = false
					}
				});

				user.save(() => {
					user.notifications.filter((item) => {
						return item.unread;
					});

					return json.good({
						notifications: user.notifications.slice(0, 10)
					}, res);
				});
			}
		});
	};



	obj.search = (req, res) => {
		var keyword = req.params.keyword;

		var criteria = {
			$or: [
				{name: new RegExp(keyword, 'ig')},
				{username: new RegExp(keyword, 'ig')}
			]
		};

		criteria._id = {$ne: req.user._id};

		User.find(criteria, null)
		.exec((err, items) => {
			if (err) {
				return json.bad(err, res);
			}



			json.good({
				records: items
			}, res);
		});
	};

	obj.updateProfile = (req, res) => {
		User.findOne({_id: req.params.userId})
		.exec((err, user) => {
			if (err) {
				return json.bad(err, res);
			} else {
				user.gender = req.body.gender || user.gender;
				user.phone - req.body.phone || user.phone;
				user.occupation = req.body.occupation || user.occupation;
				user.interests = req.body.interests || user.interests;
				user.bio = req.body.bio || user.bio;

				user.save((err, item) => {
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