module.exports = {
	db: process.env.MONGODB_URI,
	server: {
		host: 'opinionate.herokuapp.com',
		port: process.env.PORT 
	},
	secret: process.env.SECRET,
	settings: {
		perPage: 10
	}
};