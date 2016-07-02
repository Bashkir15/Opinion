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
				},

				doSave: {
					method: 'POST',
					params: {action: 'save'}
				},

				doUnsave: {
					method: 'POST',
					params: {action: 'unsave'}
				},

				modify: {
					method: 'POST',
					params: {action: 'modify'}
				},

				destroy: {
					method: 'DELETE',
					params: {action: 'remove'}
				}
			}),

			list: $resource('threads/stream/:streamId'),
			timeline: $resource('threads/timeline/:userId'),
			saved: $resource('threads/saved/:userId'),
			home: $resource('threads/home')
		};
	}
}());