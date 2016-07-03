(function() {
	'use strict';

	angular.module('opinionated.utilities')
	.factory('appAuth', appAuth);

	/* @ngInject */
	function appAuth ($http, appStorage) {
		var service = {
			getUser: getUser,
			getToken: getToken,
			isLoggedIn: isLoggedIn,
			refreshUser: refreshUser
		};

		return service;

		function getUser() {
			var serialized = appStorage.get('user');

			if (serialized) {
				return angular.fromJson(serialized);
			} else {
				return;
			}
		}

		function getToken() {
			return appStorage.get('opinion-token');
		}

		function isLoggedIn() {
			return appStorage.get('opinion-token');
		}

		function refreshUser () {
			$http.get('users/me').success(function (response) {
				var serializedUser = angular.toJson(response.res.record);
				appStorage.set('user', serializedUser);
			});
		}
	}
}());