var controller = require('../controller/streams.server.controller');

module.exports = function (System) {
	var streams = controller(System);
	var routes = [];

	routes.push({
		method: 'post',
		path: '/',
		handler: streams.create,
		authorized: true
	});

	routes.push({
		method: 'get',
		path: '/',
		handler: streams.list,
		authorized: false
	});

	routes.push({
		method: 'get',
		path: '/:streamId',
		handler: streams.single,
		authorized: false
	});

	return routes;
};