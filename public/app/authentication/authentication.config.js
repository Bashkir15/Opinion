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

		$stateProvider.state('authentication.signup', {
			url: '/signup',
			templateUrl: '/app/authentication/signup/signup.tmpl.html',
			controller: 'SignupController',
			controllerAs: 'vm'
		});

		$stateProvider.state('authentication.login', {
			url: '/login',
			templateUrl: '/app/authentication/login/login.tmpl.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		});

		$stateProvider.state('authentication.logout', {
			url: '/logout',
			templateUrl: '/app/landing/home/home.tmpl.html',
			controller: 'LogoutController'
		});
	}
}());