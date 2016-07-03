(function() {
	'use strict';

	angular.module('opinionated.admin')
	.factory('appChats', appChats);

	/* @ngInject */
	function appChats ($resource) {
		return {
			single: $resource('chats/:chatId/:action', {
				chatId: '@_id'
			}, {
				message: {
					method: 'POST',
					params: {action: 'message'}
				}
			})
		};
	}
}());