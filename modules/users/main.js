import routes from './routes/users.server.routes';

module.exports = function (System) {
	var moduleName = 'users';
	var builtRoutes = routes(System);

	System.route(builtRoutes, moduleName);
};