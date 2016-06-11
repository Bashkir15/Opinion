(function() {
	'use strict';

	angular.module('opinionated.admin')
	.factory('appUsers', appUsers);

	/* @ngInject */
	function appUsers ($resource) {
		return {
			single: $resource('users/:userId/:action', {
				userId: '@_id'
			}),
			auth: $resource('users/authenticate')
		};
	}
}());