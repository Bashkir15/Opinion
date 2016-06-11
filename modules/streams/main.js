var routes = require('./routes/streams.server.routes');

module.exports = function (System) {
	var moduleName = 'streams';
	var builtRoutes = routes(System);

	System.route(builtRoutes, moduleName);
};