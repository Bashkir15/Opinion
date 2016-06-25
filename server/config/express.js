import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import indexRoutes from '../routes/index.server.routes';
import usersRoutes from '../routes/users.server.routes';

module.exports = function (db) {
	var app = express();

	app.set('views', path.join(__dirname, '../../public'));
	app.set('view engine', 'ejs');
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(morgan('dev'));
	app.use(express.static(path.join(__dirname, '../../public')));
	app.disable('etag');

	app.use('/', indexRoutes);
	app.use('/users', usersRoutes);

	return app;
};