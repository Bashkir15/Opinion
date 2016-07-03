import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import multipart from 'connect-multiparty';
import path from 'path';
import indexRoutes from '../routes/index.server.routes';
import usersRoutes from '../routes/users.server.routes';
import streamsRoutes from '../routes/streams.server.routes';
import threadsRoutes from '../routes/threads.server.routes';
import commentsRoutes from '../routes/comments.server.routes';
import chatsRoutes from '../routes/chats.server.routes';

module.exports = function (db) {
	var app = express();

	app.set('views', path.join(__dirname, '../../public'));
	app.set('view engine', 'ejs');
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(morgan('dev'));
	app.use(multipart());
	app.use(express.static(path.join(__dirname, '../../public')));
	app.disable('etag');

	app.use('/', indexRoutes);
	app.use('/users', usersRoutes);
	app.use('/streams', streamsRoutes);
	app.use('/threads', threadsRoutes);
	app.use('/comments', commentsRoutes);
	app.use('/chats', chatsRoutes);

	return app;
};