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

	return routes;
};