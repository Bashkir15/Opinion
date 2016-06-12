(function() {
	'use strict';

	angular.module('opinionated.admin')
	.factory('appComments', appComments);

	/* @ngInject */
	function appComments ($resource) {
		return {
			single: $resource('comments/:commentId/:action', {
				commentId: '@_id'
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
			list: $resource('comments/thread/:threadId')
		};
	}
}());