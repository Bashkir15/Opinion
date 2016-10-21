import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import json from '../helpers/json';
import auth from '../helpers/auth';

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
			var token = auth.generateToken(user);
			user.provider = 'local';
			user.roles = roles;

			user.save((err) => {
				if (err) {
					return json.bad(err, res);
				}

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

			user.comparePassword(req.body.password, (err, isMatch) => {
				if (err) {
					return json.bad(err, res);
				}

				if (isMatch) {
					var token = auth.generateToken(user);

					console.log(user);

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

	return obj;
};