(function() {
	'use strict';

	angular.module('opinionated.admin')
	.factory('appStreams', appStreams);

	/* @ngInject */
	function appStreams ($resource) {
		return {
			single: $resource('streams/:streamId/:action', {
				streamId: '@_id'
			}, {
				subscribe: {
					method: 'POST',
					params: {action: 'subscribe'}
				},

				unsubscribe: {
					method: 'POST',
					params: {action: 'unsubscribe'}
				}
			})
		};
	}
}());