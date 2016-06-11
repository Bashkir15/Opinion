var express = require('express');
var app = express();
var fs = require('fs');
var mongoose = require('mongoose');
var Config = require('./config/' + (process.env.NODE_ENV || 'development'));
var bodyParser = require('body-parser');
var morgan = require('morgan');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	next();
});
app.use(express.static(__dirname + '/../public'));

var modulePath = __dirname + '/../modules';

function startServer() {
	app.use(function (req, res) {
		res.redirect('/index.html');
	});
	var server = app.listen(Config.server.port, function() {
		var host = Config.server.host;
		var port = Config.server.port;

		console.log('The application is up and running at ' + host + port + ' and the environment is currently set to ' + (process.env.NODE_ENV || 'development'));
	});
}

var dbConnect = function() {
	var db = mongoose.connect(Config.db);
	return db;
};

var loadPlugins = function (startingPath, System) {
	var helpersPath = startingPath + '/helpers';

	if (!fs.existsSync(helpersPath)) {
		return false;
	}

	var files = fs.readdirSync(helpersPath);
	files.forEach(function (file) {
		var plugin = require(helpersPath + '/' + file)(System);
		System.plugins[plugin.register.attributes.key] = plugin.register();
		console.log('Plugin loaded: ' + file);
	});

	System.auth = System.plugins.auth;

	return true;
};

var loadDBModels = function (startingPath) {
	var modelsPath = startingPath + '/models';

	if (!fs.existsSync(modelsPath)) {
		return false;
	}

	var files = fs.readdirSync(modelsPath);
	files.forEach(function (file) {
		require(modelsPath + '/' + file);
		console.log('Model loaded: ' + file);
	});

	return true;
};

var loadModules = function (System, callback) {
	fs.readdir(modulePath, function (err, list) {
		list.forEach(function (folder) {
			var folderPath = modulePath + '/' + folder;
			loadDBModels(folderPath);

			var moduleFile = folderPath + '/main.js';

			if (fs.existsSync(moduleFile)) {
				require(moduleFile)(System);
			}
		});
		callback();
	});
};

module.exports = {
	plugins: {},

	boot: function() {
		this.config = Config;

		dbConnect();

		loadPlugins(__dirname, this);

		loadModules(this, function() {
			startServer();
		});
	},

	config: {},

	route: function (routes, moduleName) {
		var $this = this;

		moduleName = moduleName || 'unidentified';

		routes.forEach(function (route) {
			var moduleRouter = express.Router();

			if (!route.authorized) {
				moduleRouter[route.method](route.path, $this.auth.justGetUser, route.handler);
			} else {
				moduleRouter[route.method](route.path, $this.auth.ensureAuthorized, route.handler);
			}

			app.use('/' + moduleName, moduleRouter);
		});
	}
};