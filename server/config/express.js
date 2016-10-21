import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import fs from 'fs';
import path from 'path';

import userRoutes from '../routes/users.server.routes';
import streamRoutes from '../routes/streams.server.routes';

module.exports = (db) => {
	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(morgan('dev'));
	app.use(compression());
	app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');	
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
		next();
	});

	app.get('/', (req, res, next) => {
		res.sendFile(path.join(__dirname, '../../public/index.html'));
		next();
	});

	app.use(express.static(path.join(__dirname, '../../public')));
	app.use(express.static(path.join(__dirname, '../../dist')));
	app.use(express.static(path.join(__dirname, '../../node_modules')));

	app.use('/users', userRoutes);
	app.use('/streams', streamRoutes);

	return app;
}