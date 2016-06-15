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

	routes.push({
		method: 'post',
		path: '/:streamId/subscribe',
		handler: streams.subscribe,
		authorized: true
	});

	routes.push({
		method: 'post',
		path: '/:streamId/unsubscribe',
		handler: streams.unsubscribe,
		authorized: true
	});

	routes.push({
		method: 'delete',
		path: '/:streamId/remove',
		handler: streams.remove,
		authorized: true
	});

	routes.push({
		method: 'post',
		path: '/:streamId/modify',
		handler: streams.modify,
		authorized: true
	});

	routes.push({
		method: 'post',
		path: '/:streamId/imageUpload',
		handler: streams.image,
		authorized: true
	});

	return routes;
};