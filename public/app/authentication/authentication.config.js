(function() {
	'use strict';

	angular.module('opinionated.authentication')
	.config(routesConfig);

	/* @ngInject */
	function routesConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('authentication', {
			abstract: true,
			templateUrl: '/app/authentication/authentication.tmpl.html'
		});

		$stateProvider.state('signup', {
			url: '/signup',
			templateUrl: '/app/authentication/signup/signup.tmpl.html',
			controller: 'SignupController',
			controllerAs: 'vm'
		});

		$stateProvider.state('login', {
			url: '/login',
			templateUrl: '/app/authentication/login/login.tmpl.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		});
	}
}());