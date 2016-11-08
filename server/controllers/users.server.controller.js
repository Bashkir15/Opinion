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
		User.findOne({_id: req.params.userId}, (err, user) => {
			if (err) {
				return json.bad(err, res);
			}

			json.good({
				record: user
			}, res);
		});
	};

	return obj;
};