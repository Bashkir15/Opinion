'use strict';

import mongoose from 'mongoose';
import users from './server/models/users';
var config = require('./server/config/env/' + (process.env.NODE_ENV || 'development'));

var db = mongoose.connect(config.db, ()=> {
	console.log('Mongoose connected');
});

var app = require('./server/config/express')(db);

app.listen(config.server.port, () => {
	var host = config.server.host;
	var port = config.server.port;
	console.log('Application up and running at ' + host + port);
});

module.exports = app;