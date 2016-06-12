(function() {
	'use strict';

	angular.module('opinionated.admin')
	.factory('appComments', appComments);

	/* @ngInject */
	function appComments ($resource) {
		return {
			single: $resource('comments/:commentId/:action', {
				commentId: '@_id'
			}),
			list: $resource('comments/thread/:threadId')
		};
	}
}());