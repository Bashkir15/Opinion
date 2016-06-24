import controller from "../controllers/users.server.controller";

module.exports = function (System) {
	var routes = [];
	var users = controller(System);

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
		method: 'post',
		path: '/:userId/follow',
		handler: users.follow,
		authorized: true
	});

	routes.push({
		method: 'get',
		path: '/:userId',
		handler: users.single,
		authorized: true
	});

	routes.push({
		method: 'get',
		path: '/search/:keyword',
		handler: users.search,
		authorized: false
	});

	return routes;
};