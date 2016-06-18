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
				}
			}),
			list: $resource('threads/stream/:streamId'),
			home: $resource('threads/home'),
			subscribedHome: $resource('threads/subscribedHome'),
			timeline: $resource('threads/timeline/:userId')
		};
	}
}());