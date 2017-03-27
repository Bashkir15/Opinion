module.exports = {
	db: 'mongodb://localhost:27017/opinion',
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