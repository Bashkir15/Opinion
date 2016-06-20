(function() {
	'use strict';

	angular.module('opinionated.admin')
	.config(threadsConfig);

	/* @ngInject */
	function threadsConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('createThread', {
			url: '/create-thread',
			templateUrl: '/app/admin/threads/create/create.thread.tmpl.html',
			controller: 'ThreadsCreateController',
			controllerAs: 'vm'
		});
	}
}());