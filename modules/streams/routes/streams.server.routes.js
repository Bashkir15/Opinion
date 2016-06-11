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

	return routes;
};