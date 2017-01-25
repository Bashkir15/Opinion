module.exports = {
	db: process.env.MONGO,
	server: {
		host: 'localhost:',
		port: '8000'
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