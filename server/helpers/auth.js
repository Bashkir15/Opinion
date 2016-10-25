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

		var decoded = jwt.verify(bearerToken, global.config.secret);
		var requestedUser = decoded.user._id;

		User.findOne({_id: requestedUser}, (err, user) => {
			if (err || !user) {
				return res.sendStatus(403);
			}

			req.user = user;
			next();
		})
	} else {
		res.sendStatus(403);
	}
}

function justGetUser (req, res, next) {
	var User = mongoose.model("User");
	var bearerToken;
	var bearerHeader = req.headers['authorization'];

	if (typeof bearerHeader !== 'undefined') {
		var bearer = bearerHeader.split(" ");
		bearerToken = bearer[1];

		try {
			var decoded = jwt.verify(bearerToken, global.config.secret);
			var requestedUser = decoded.user._id;

			User.findOne({_id: requestedUser}, (err, user) => {
				if (user) {
					req.user = user;
				}

				next();
			});
		} catch(err) {
			console.log(err);
		}
	}
}

module.exports = {
	generateToken: generateToken,
	ensureAuthorized: ensureAuthorized,
	justGetUser: justGetUser
};