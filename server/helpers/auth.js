import jwt from 'jsonwebtoken';

function generateToken(obj) {
	var today = new Date();
	var exp = new Date(today);
	exp.setDate(today.getDate() + 2);

	return jwt.sign({
		user: obj,
		exp: parseInt(exp.getTime() / 1000)
	}, global.config.secret);
}

module.exports = {
	generateToken: generateToken
};