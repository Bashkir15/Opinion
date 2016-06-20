(function() {
	'use strict';

	angular.module('opinionated.admin')
	.factory('appUsers', appUsers);

	/* @ngInject */
	function appUsers ($resource) {
		return {
			single: $resource('users/:userId/:action', {
				userId: '@_id'
			}, {
				follow: {
					method: 'POST',
					params: {action: 'follow'}
				},

				unfollow: {
					method: 'POST',
					params: {action: 'unfollow'}
				}
			}),
			auth: $resource('users/authenticate')
		};
	}
}());