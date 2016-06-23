import mongoose from 'mongoose';
var User = mongoose.model('User');
import jwt from 'jsonwebtoken';

module.exports = function (System) {
	var obj = {};
	var json = System.plugins.JSON;

	obj.create = function (req, res) {
		var user = new User(req.body);
	};


	return obj;
};