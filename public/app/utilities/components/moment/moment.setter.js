(function() {
	'use strict';

	angular.module('opinionated.moment', [])
	.constant('opinionatedMomentConfig', {
		preprocess: null,
		timezone: null,
		format: null,
		statefulFilters: true
	})
	.constant('moment', moment);
}());