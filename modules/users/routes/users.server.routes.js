var controller = require('../controller/users.server.controller');

module.exports = function (System) {
	var users = controller(System);
	var routes = [];

	routes.push({
		method: 'post',
		path: '/',
		handler: users.create,
		authorized: false
	});

	routes.push({
		method: 'post',
		path: '/authenticate',
		handler: users.authenticate,
		authorized: false
	});

	routes.push({
		method: 'get',
		path: '/:userId',
		handler: users.single,
		authorized: false
	});

	routes.push({
		method: 'post',
		path: '/:userId/imageUpload',
		handler: users.imageUpload,
		authorized: true
	});

	return routes;
};