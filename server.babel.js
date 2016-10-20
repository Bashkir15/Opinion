import http from 'http';
import cluster from 'cluster'
import mongoose from 'mongoose'

var config = require('./server/config/env/' + (process.env.NODE_ENV || 'development'));
const db = mongoose.connect(config.db, () => {
	console.log('The application has connected to the: ' + config.db + ' database');
});

if (cluster.isMaster) {
	var cpuCount = require('os').cpus().length;

	for (var i = 0; i < cpuCount; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker) => {
		console.log('Worker %d died', worker.id);
		cluster.fork();
	});
} else {
	var app = require('./server/config/express')(db);
	var server = require('http').Server(app);

	server.listen(config.server.port, () => {
		console.log('The application is up and running at: ' + config.server.host + config.server.port);
	});

	global.config = config;
	global.server = server;

	module.exports = app;
}