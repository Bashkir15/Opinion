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
		path: '/home',
		handler: threads.home,
		authorized: false
	});

	routes.push({
		method: 'get',
		path: '/stream/:streamId',
		handler: threads.list,
		authorized: false
	});

	routes.push({
		method: 'get',
		path: '/:threadId',
		handler: threads.single,
		authorized: false
	});

	routes.push({
		method: 'post',
		path: '/:threadId/upvote',
		handler: threads.upvote,
		authorized: true
	});

	routes.push({
		method: 'post',
		path: '/:threadId/downvote',
		handler: threads.downvote,
		authorized: true
	});

	routes.push({
		method: 'post',
		path: '/:threadId/save',
		handler: threads.save,
		authorized: true
	});

	routes.push({
		method: 'post',
		path: '/:threadId/unsave',
		handler: threads.unsave,
		authorized: true
	});

	return routes;
};