var routes = require('./routes/threads.server.routes');

module.exports = function (System) {
	var moduleName = 'threads';
	var builtRoutes = routes(System);

	System.route(builtRoutes, moduleName);
};