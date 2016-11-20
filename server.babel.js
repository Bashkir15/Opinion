import http from 'http';
import mongoose from 'mongoose'
import sio from 'socket.io'
import Users from './server/models/users'
import Streams from './server/models/streams'
import Threads from './server/models/threads'
import Comments from './server/models/comments'
import Activity from './server/models/activities';
import Chats from './server/models/chats'
import Settings from './server/models/settings'

process.env.NODE_ENV = "Production";

var config = require('./server/config/env/' + (process.env.NODE_ENV));
const db = mongoose.connect(config.db, () => {
	console.log('The application has connected to the: ' + config.db + ' database');
});



	var app = require('./server/config/express')(db);
	var server = require('http').createServer(app);
	var io = sio.listen(server);
	var websockets = require('./server/helpers/websockets')(io);
	var notifications = require('./server/helpers/notifications')(io);
	server.listen(config.server.port);

	global.notifications = notifications;
	global.config = config;
	global.server = server;
