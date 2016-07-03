(function() {
	'use strict';

	angular.module('opinionated.admin')
	.config(chatsConfig);

	/* @ngInject */
	function chatsConfig ($stateProvider) {
		$stateProvider.state('chats', {
			templateUrl: '/app/admin/chats/chats.tmpl.html',
			abstract: true
		});

		$stateProvider.state('chats.overview', {
			url: '/overview',
			templateUrl: '/app/admin/chats/overview/chats.overview.tmpl.html',
			controller: 'ChatsOverviewController',
			controllerAs: 'vm'
		});
	}
}());