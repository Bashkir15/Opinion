(function() {
	'use strict';

	angular.module('opinionated.admin')
	.factory('appThreads', appThreads);

	/* @ngInject */
	function appThreads ($resource) {
		return {
			single: $resource('threads/:threadId', {
				threadId: '@_id'
			}),

			list: $resource('threads/stream/:streamId')
		};
	}
}());