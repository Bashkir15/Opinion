var routes = require('./routes/comments.server.routes');

module.exports = function (System) {
	var moduleName = 'comments';
	var builtRoutes = routes(System);

	System.route(builtRoutes, moduleName);
};