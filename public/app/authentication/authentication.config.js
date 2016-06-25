(function() {
	'use strict';

	angular.module('opinionated.authentication')
	.config(authConfig);

	/* @ngInject */
	function authConfig ($stateProvider) {
		$stateProvider.state('authentication', {
			templateUrl: '/app/authentication/authentication.tmpl.html',
			abstract: true
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
	}
}());