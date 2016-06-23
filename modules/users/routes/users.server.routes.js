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

	return routes;
};