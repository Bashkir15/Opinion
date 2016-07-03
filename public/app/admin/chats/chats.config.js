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

		$stateProvider.state('chats.inbox', {
			url: '/inbox',
			templateUrl: '/app/admin/chats/inbox/chats.inbox.tmpl.html',
			controller: 'ChatsInboxController',
			controllerAs: 'vm'
		});

		$stateProvider.state('chats.inbox.single', {
			url: '/:chatId',
			templateUrl: '/app/admin/chats/dialogs/chats.single.tmpl.html',
			controller: 'ChatsSingleController',
			controllerAs: 'vm'
		});
	}
}());