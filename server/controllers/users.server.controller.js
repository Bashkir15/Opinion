import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import json from '../helpers/json';
import auth from '../helpers/auth';

var User = mongoose.model("User");

module.exports = () => {
	var obj = {};

	obj.create = (req, res) => {
		var roles = ['authenticated'];

		User.cound({}, (err, len) => {
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

	return obj;
};