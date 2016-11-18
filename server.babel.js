import http from 'http';
import cluster from 'cluster'
import net from 'net'
import mongoose from 'mongoose'
import sio from 'socket.io'
import Users from './server/models/users'
import Streams from './server/models/streams'
import Threads from './server/models/threads'
import Comments from './server/models/comments'
import Activity from './server/models/activities';
import Chats from './server/models/chats'
import Settings from './server/models/settings'

var config = require('./server/config/env/' + (process.env.NODE_ENV || 'development'));
const db = mongoose.connect(config.db, () => {
	console.log('The application has connected to the: ' + config.db + ' database');
});


if (cluster.isMaster) {
	var cpuCount = require('os').cpus().length;
	var workers = [];

	var spawn = (i) => {
		workers[i] = cluster.fork();

		workers[i].on('exit', (code, signal) => {
			console.log('respawning worker', i);
			spawn(i);
		});
	};

	for (var i = 0; i < cpuCount; i++) {
		spawn(i);
	}

	var worker_index = (ip, len) => {
		var s = '';

		for (var i = 0, _len = ip.length; i < _len; i++) {
			if (!isNaN(ip[i])) {
				s += ip[i];
			}
		}

		return Number(s) % len;
	};

	var server = net.createServer({pauseOnConnect: true}, (connection) => {
		var worker = workers[worker_index(connection.remoteAddress, cpuCount)];
		worker.send('sticky-session:connection', connection);
	}).listen(config.server.port  || 5000);
} else {
	var app = require('./server/config/express')(db);
	var server = require('http').Server(app);
	server.listen(0, 'localhost', () => {
		console.log('The application is up and runnin at: ' + config.server.host + config.server.port);
	});

	var io = sio.listen(server);
	var websockets = require('./server/helpers/websockets')(io);
	var notifications = require('./server/helpers/notifications')(io);

	process.on('message', (message, connection) => {
		if (message !== 'sticky-session:connection') {
			return;
		}

		server.emit('connection', connection);

		connection.resume();
	});

	global.notifications = notifications;
	global.config = config;
	global.server = server;
}