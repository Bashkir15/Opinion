(function() {
	'use strict';

	angular.module('opinionated.utilities')
	.factory('appStorage', appStorage);

	/* @ngInject */
	function appStorage() {
		var service = {
			get: get,
			set: set,
			remove: remove
		};

		return service;

		function get (item) {
			return localStorage.getItem(item);
		}

		function set (item, val) {
			return localStorage.setItem(item, val);
		}

		function remove (item) {
			return localStorage.removeItem(item);
		}
	}
}());