import angular from 'angular'
import router from 'angular-ui-router'
import angularMaterial from 'angular-material'
import 'angular-moment'

import "./config/config.module"
import './pages/pages'
import './components/components'

import appConfig from './app.config'
import appRun from './app.run'

const requires = [
	router,
	'ngMaterial',
	'ngAnimate',
	'angularMoment',
	'app.config',
	'app.pages',
	'app.components'
];

window.app = angular.module('app', requires);

angular.module('app').config(appConfig);
//angular.module('app').run(appRun);
angular.bootstrap(document, ['app']);