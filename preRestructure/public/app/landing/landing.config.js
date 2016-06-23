(function() {
	'use strict';

	angular.module('opinionated.landing')
	.config(landingConfig);

	/* @ngInject */
	function landingConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: '/app/landing/home/home.tmpl.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		});
	}
}());