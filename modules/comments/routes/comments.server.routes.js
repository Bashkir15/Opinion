var controller = require('../controller/comments.server.controller');

module.exports = function (System) {
	var comments = controller(System);
	var routes = [];

	routes.push({
		method: 'post',
		path: '/',
		handler: comments.create,
		authorized: true
	});

	routes.push({
		method: 'get',
		path: '/thread/:threadId',
		handler: comments.list,
		authorized: false
	});

	routes.push({
		method: 'get',
		path: '/timeline/:userId',
		handler: comments.timeline,
		authorized: false
	});

	routes.push({
		method: 'get',
		path: '/:commentId',
		handler: comments.single,
		authorized: false
	});

	routes.push({
		method: 'post',
		path: '/:commentId/upvote',
		handler: comments.upvote,
		authorized: true
	});

	routes.push({
		method: 'post',
		path: '/:commentId/downvote',
		handler: comments.downvote,
		authorized: true
	});

	routes.push({
		method: 'post',
		path: '/:commentId/save',
		handler: comments.save,
		authorized: true
	});

	routes.push({
		method: 'post',
		path: '/:commentId/unsave',
		handler: comments.unsave,
		authorized: true
	});

	return routes;
};