import angular from 'angular'
import router from 'angular-ui-router'
import angularMaterial from 'angular-material'
import 'angular-moment'

import "./config/config.module"
import './pages/pages'
import './components/components'

import appConfig from './app.config'

const requires = [
	router,
	'ngMaterial',
	'angularMoment',
	'app.config',
	'app.pages',
	'app.components'
];

window.app = angular.module('app', requires);

angular.module('app').config(appConfig);
angular.bootstrap(document, ['app']);