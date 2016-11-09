import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import json from '../helpers/json';
import auth from '../helpers/auth';
import fs from 'fs';
import nodemailer from 'nodemailer'
import async from 'async'
import crypto from 'crypto'
import handlebars from 'handlebars'

var User = mongoose.model("User");

module.exports = () => {
	var obj = {};

	obj.create = (req, res) => {
		var roles = ['authenticated'];

		User.count({}, (err, len) => {
			if (!len) {
				roles.push('admin');
			}

			var user = new User(req.body);
			user.provider = 'local';
			user.roles = roles;

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

	obj.authenticate = (req, res) => {
		User.findOne({email: req.body.email}, (err, user) => {
			if (err) {
				return json.bad(err, res);
			}

			user.comparePassword(req.body.password, (err, isMatch) => {
				if (err) {
					return json.bad(err, res);
				}

				if (isMatch) {
					var token = auth.generateToken(user);

					return json.good({
						record: user,
						token: token
					}, res);
				} else {
					return json.bad({message: 'Sorry, either your email or password were incorrect'}, res);
				}
			});
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

					console.log(alreadyFollowing);

					

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

						json.good({
							record: item
						}, res);
					});
				}
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

	return obj;
};