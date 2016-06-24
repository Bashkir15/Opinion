import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import multipart from 'connect-multiparty';

const Config = require('./config/' + (process.env.NODE_ENV || 'development'));
const modulePath = __dirname + '/../modules';
const options = {
	dotfiles: 'ignore',
	etag: false,
	index: false,
	maxAge: '1d',
	redirect: false,
	setHeaders: function (res, path, stat) {
		res.set('x-timestamp', Date.now());
	}
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(morgan('dev'));
app.use(multipart());
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	next();
});
app.disable('etag');
app.use(express.static(__dirname + "/../public", options));


function startServer() {
	app.use(function (req, res, next) {
		const output = fs.readFileSync(__dirname + "/../public/index.html");
		res.type('html').send(output);
		next();
	});

	const server = app.listen(Config.server.port, function() {
		const host = Config.server.host;
		const port = Config.server.port;

		console.log('The application is up and running at ' + host + port + ' and the environment is currently set to ' + (process.env.NODE_ENV || 'development'));
	});
}

var dbConnect = function() {
	const db = mongoose.connect(Config.db);
	return db;
};

var loadPlugins = function (startingPath, System) {
	const helpersPath = startingPath + '/helpers';

	if (!fs.existsSync(helpersPath)) {
		return false;
	}

	var files = fs.readdirSync(helpersPath);
	files.forEach(function (file) {
		var plugin = require(helpersPath + '/' + file)(System);
		System.plugins[plugin.register.attributes.key] = plugin.register();
		console.log('Plugin Loaded: ' + file);
	});

	System.auth = System.plugins.auth;

	return true;
};

var loadDBModels = function (startingPath) {
	const modelsPath = startingPath + '/models';

	if (!fs.existsSync(modelsPath)) {
		return false;
	}

	var files = fs.readdirSync(modelsPath);
	files.forEach(function (file) {
		require(modelsPath + '/' + file);
		console.log('Model Loaded: ' + file);
	});

	return true;
};

var loadModules = function (System, callback) {

	var list = fs.readdirSync(modulePath);
	var requires = [];

	list.forEach(function (folder) {
		var folderPath = modulePath + '/' + folder;
		loadDBModels(folderPath);

		var moduleFile = folderPath + '/main.js';
		if (fs.existsSync(moduleFile)) {
			requires.push(require(moduleFile));
		} 
	});

	requires.map(function (module) {
		module(System);
	});

	callback();
};


module.exports = {
	plugins: {},

	boot: function() {
		this.config = Config;

		dbConnect();

		loadPlugins(__dirname, this);

		loadModules(this, () => {
			startServer();
		});
	},

	config: {},

	route: function (routes, moduleName) {
		var $this = this;

		moduleName = moduleName || 'unidentified';

		routes.forEach(function (route) {
			const moduleRouter = express.Router();

			if (!route.authorized) {
				moduleRouter[route.method](route.path, $this.auth.justGetUser, route.handler);
			} else {
				moduleRouter[route.method](route.path, $this.auth.ensureAuthorized, route.handler);
			}

			app.use('/' + moduleName, moduleRouter);
		});
	}
};