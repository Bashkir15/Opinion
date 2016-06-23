(function() {
	'use strict';

	angular.module('opinionated.utilities')
	.factory('tokenHttpInterceptor', tokenHttpInterceptor);

	/* @ngInject */
	function tokenHttpInterceptor (appStorage) {
		return {
			request: function (config) {
				config.headers.Authorization = 'Bearer ' + appStorage.get('opinion-token');
				return config;
			}
		};
	}
}());