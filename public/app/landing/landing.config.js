(function() {
	'use strict';

	angular.module('opinionated.landing')
	.config(landingConfig);

	/* @ngInject */
	function landingConfig ($stateProvider) {
		$stateProvider.state('landing', {
			templateUrl: '/app/landing/landing.tmpl.html',
			abstract: true
		});

		$stateProvider.state('landing.home', {
			url: '/home',
			templateUrl: '/app/landing/home/home.tmpl.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		});

		$stateProvider.state('landing.create', {
			url: '/create-post',
			templateUrl: '/app/landing/create-post/create.tmpl.html',
			controller: 'LandingPostController',
			controllerAs: 'vm'
		});
	}
}());