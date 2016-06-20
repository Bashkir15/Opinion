(function() {
	'use strict';

	angular.module('opinionated.admin')
	.factory('appUsers', appUsers)
	.factory('appUsersSearch', appUsersSearch);

	/* @ngInject */
	function appUsers ($resource) {
		return {
			single: $resource('users/:userId/:action', {
				userId: '@_id'
			}, {

				profile: {
					method: 'POST',
					params: {action: 'updateProfile'}
				}
			}),
			auth: $resource('users/authenticate'),
			follow: $resource('users/follow')
		};
	}

	/* @ngInject */
	function appUsersSearch ($resource) {
		var search = $resource('users/search/:keyword', {}, {query: {isArray: false}});
		return function (keyword, onlyUsernames) {
			var criteria = {keyword: keyword};

			if (onlyUsernames) {
				criteria.onlyUsernames = true;
			}
			
			var promise = search.query(criteria).$promise;
			return promise;
		};
	}
}());