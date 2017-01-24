import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import fs from 'fs'
import path from 'path'
import multiparty from 'connect-multiparty'
import compression from 'compression'
import expressStatusMonitor from 'express-status-monitor'

module.exports = (db) => {
	const publicPath = path.join(__dirname, '../public');
	const modulePath = path.join(__dirname, '../node_modules');
	const prodPath = path.join(__dirname, '../dist');
	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(compression());
	app.use(multiparty());
	app.use(expressStatusMonitor());
	app.use(morgan('dev'));
	app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
		next();
	});

	app.use(express.static(publicPath));
	app.use(express.static(modulePath));
	app.use(express.static(prodPath));

	app.get('/', (req, res, next) => {
		res.sendFile(path.join(`${publicPath}/index.html`));
		next();
	});

	return app;
}