import angular from 'angular';
import router from 'angular-ui-router'

import "./config/config.module";
import "./pages/pages";
import "./components/components";


const requires = [
	router,
	'app.config',
	'app.pages',
	'app.components'
];

window.app = angular.module('app', requires);

import appConfig from './app.config';


angular.module('app').config(appConfig);
angular.bootstrap(document, ['app']);