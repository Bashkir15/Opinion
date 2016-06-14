(function() {
	'use strict';

	angular.module('opinionated.admin')
	.config(profileConfig);

	/* @ngInject */
	function profileConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('profile', {
			url: '/:userId/profile',
			abstract: true,
			templateUrl: '/app/admin/profile/profile.tmpl.html',
			controller: 'ProfileController',
			controllerAs: 'vm'
		});

		$stateProvider.state('profile.overview', {
			url: '/overview',
			templateUrl: '/app/admin/profile/overview/overview.tmpl.html',
			controller: 'ProfileOverviewController',
			controllerAs: 'vm'
		});

		$stateProvider.state('profile.threads', {
			url: '/threads',
			templateUrl: '/app/admin/profile/threads/threads.tmpl.html',
			controller: 'ProfileThreadsController',
			controllerAs: 'vm'
		});
	}
}());