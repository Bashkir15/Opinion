(function() {
	'use strict';

	angular.module('opinionated.admin')
	.factory('appThreads', appThreads);

	/* @ngInject */
	function appThreads ($resource) {
		return {
			single: $resource('threads/:threadId/:action', {
				threadId: '@_id'
			}, {
				upvote: {
					method: 'POST',
					params: {action: 'upvote'}
				},

				downvote: {
					method: 'POST',
					params: {action: 'downvote'}
				}
			}),
			list: $resource('threads/:streamId')
		};
	}
}());