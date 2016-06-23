(function() {
	'use strict';

	angular.module('opinionated')
	.config(appConfig);

	/* @ngInject */
	function appConfig ($stateProvider, $urlRouterProvider, $httpProvider) {
		$httpProvider.interceptors.push('tokenHttpInterceptor');
		$urlRouterProvider.when('', '/home');
		$urlRouterProvider.when('/', 'home');
	}
}());