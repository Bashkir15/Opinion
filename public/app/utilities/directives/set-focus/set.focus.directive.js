(function() {
	'use strict';

	angular.module('opinionated.utilities')
	.directive('setFocus', setFocus);

	/* @ngInject */

	function setFocus() {
		var directive = {
			scope: {
				setFocus: '='
			},
			link: link
		};

		return directive;

		function link (scope, element) {
			if (scope.setFocus) {
				element[0].focus();
			}
		}
	}
}());