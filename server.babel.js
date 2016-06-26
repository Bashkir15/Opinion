'use strict';

import mongoose from 'mongoose';
import users from './server/models/users';
import streams from './server/models/streams';
import threads from './server/models/threads';
import comments from './server/models/comments';
var config = require('./server/config/env/' + (process.env.NODE_ENV || 'development'));

var db = mongoose.connect(config.db, ()=> {
	console.log('Mongoose connected');
});

var app = require('./server/config/express')(db);
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.listen(config.server.port, () => {
	var host = config.server.host;
	var port = config.server.port;
	console.log('Application up and running at ' + host + port);
});

module.exports = app;