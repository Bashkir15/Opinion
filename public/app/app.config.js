(function() {
	'use strict';

	angular.module('opinionated')
	.config(appConfig);

	/* @ngInject */
	function appConfig ($stateProvider, $urlRouterProvider, $httpProvider) {
		$urlRouterProvider.when('', '/home');
		$urlRouterProvider.when('/', '/home');
		$httpProvider.interceptors.push('tokenHttpInterceptor');
	}
}());