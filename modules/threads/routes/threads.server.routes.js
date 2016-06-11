var controller = require('../controller/threads.server.controller');

module.exports = function (System) {
	var threads = controller(System);
	var routes = [];

	routes.push({
		method: 'post',
		path: '/',
		handler: threads.create,
		authorized: true
	});

	routes.push({
		method: 'get',
		path: '/:streamId',
		handler: threads.list,
		authorized: false
	});

	routes.push({
		method: 'get',
		path: '/:threadId',
		handler: threads.single,
		authorized: false
	});

	return routes;
};