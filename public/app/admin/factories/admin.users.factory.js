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
				follow: {
					method: 'POST',
					params: {action: 'follow'}
				}
			}),
			authenticate: $resource('users/authenticate')
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