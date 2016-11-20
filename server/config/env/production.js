require('../env');

module.exports = {
	db: process.env.MONGODB_URI,
	server: {
		host: 'opinionate.herokuapp.com',
		port: process.env.PORT
	},

	secret: process.env.SECRET,
	mailer: {
		service: 'Gmail',
		auth: {
			user: process.env.USER,
			pass: process.env.PASS
		}
	},

	settings: {
		perPage: 20
	}
};