import http from 'http';
import mongoose from 'mongoose'
import Users from './server/models/users'
import Streams from './server/models/streams'
import Threads from './server/models/threads'
import Comments from './server/models/comments'
import Activity from './server/models/activities';
import Chats from './server/models/chats'
import Settings from './server/models/settings'
import expressConfig from './server/config/express'



const environment = process.env.NODE_ENV || 'development'
const appConfig = require(`./server/config/env/${environment}`);
var config = require('./server/config/env/' + (process.env.NODE_ENV || 'development'));
const db = mongoose.connect(config.db, () => {
	console.log('The application has connected to the: ' + config.db + ' database');

});
const app = expressConfig(db);
const server = http.createServer(app);

server.listen(appConfig.server.port, () => {
	console.log(`The application is running at: ${appConfig.server.host}${appConfig.server.port}. The environment is: ${environment}`);
});

global.config = appConfig;

