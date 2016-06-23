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

		$stateProvider.state('profile.comments', {
			url: '/comments',
			templateUrl: '/app/admin/profile/comments/comments.tmpl.html',
			controller: 'ProfileCommentsController',
			controllerAs: 'vm'
		});

		$stateProvider.state('profile.saved', {
			url: '/saved',
			templateUrl: '/app/admin/profile/saved/saved.tmpl.html',
			controller: 'ProfileSavedController',
			controllerAs: 'vm'
		});
	}
}());