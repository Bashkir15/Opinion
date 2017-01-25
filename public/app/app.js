import angular from 'angular'
import router from 'angular-ui-router'
import angularMaterial from 'angular-material'
import 'angular-moment'
import 'ng-file-upload'

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
	'ngFileUpload',
	'app.config',
	'app.pages',
	'app.components'
];

window.app = angular.module('app', requires);

angular.module('app').config(appConfig);
angular.module('app').run(appRun);
//angular.module("app").service('Websocket', websockets);
angular.bootstrap(document, ['app'], {
	strictDi: true
});