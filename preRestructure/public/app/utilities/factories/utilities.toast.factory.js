(function() {
	'use strict';

	angular.module('opinionated.utilities')
	.factory('appToast', appToast);

	/* @ngInject */
	function appToast ($mdToast) {
		return function (message) {
			var toast = $mdToast.simple()
				.content(message)
				.action('OK')
				.highlightAction(false)
				.position('top right');
			$mdToast.show(toast);
		};
	}
}());