(function() {
	'use strict';

	angular.module('opinionated.utilities')
	.factory('appAuth', appAuth);

	/* @ngInject */
	function appAuth (appStorage) {
		var service = {
			getUser: getUser,
			isLoggedIn: isLoggedIn,
			getToken: getToken
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

		function isLoggedIn() {
			return appStorage.get('opinion-token');
		}

		function getToken() {
			return appStorage.get('opinion-token');
		}
	}
}());