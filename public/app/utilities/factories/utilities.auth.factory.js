(function() {
	'use strict';

	angular.module('opinionated.utilities')
	.factory('appAuth', appAuth);

	/* @ngInject */
	function appAuth (appStorage) {
		var service = {
			isLoggedIn: isLoggedIn,
			getUser: getUser,
			getToken: getToken
		};

		return service;

		function isLoggedIn() {
			return appStorage.get('opinion-token');
		}

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
	}
}());