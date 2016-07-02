(function() {
	'use strict';

	angular.module('opinionated.utilities')
	.directive('passwordCheck', passwordCheck);

	/* @ngInject */

	function passwordCheck() {
		var directive = {
			require: 'ngModel',
			link: link,
			scope: {
				otherModelValue: "=passwordCheck"
			}
		};

		return directive;

		function link (scope, element, attributes, ngModel) {
			ngModel.$validators.passwordCheck = function (modelValue) {
				return modelValue == scope.otherModelValue;
			};

			scope.$watch("otherModelValue", function() {
				ngModel.$validate();
			});
		}
	}
}());