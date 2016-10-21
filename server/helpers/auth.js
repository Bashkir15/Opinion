import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


function generateToken(obj) {
	var today = new Date();
	var exp = new Date(today);
	exp.setDate(today.getDate() + 2);

	return jwt.sign({
		user: obj,
		exp: parseInt(exp.getTime() / 1000)
	}, global.config.secret);
}

function ensureAuthorized (req, res, next) {
	var User = mongoose.model('User');
	var bearerToken;
	var bearerHeader = req.headers['authorization'];

	if (typeof bearerHeader !== 'undefined') {
		var bearer = bearerHeader.split(" ");
		bearerToken = bearer[1];

		var decodedToken = jwt.decode(bearerToken, global.config.secret);
		console.log(decodedToken);
	}
}

module.exports = {
	generateToken: generateToken,
	ensureAuthorized: ensureAuthorized
};