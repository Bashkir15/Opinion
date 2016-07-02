(function() {
	'use strict';

	angular.module('opinionated.moment')
	.factory('opMoment', opMoment);

	/* @ngInject */

	function opMoment (moment, $rootScope, $log, opinionatedMomentConfig) {
		var defaultTimezone = null;
		var service = {
			changeLocale: changeLocale,
			changeTimezone: changeTimezone,
			preprocessDate: preprocessDate
		};

		return service;

		function changeLocale (locale, customization) {
			var result = moment.locale(locale, customization);

			if (angular.isDefined(locale)) {
				$rootScope.$broadcast('opMoment:localeChanged');
			}

			return result;
		};

		function changeTimezone (timezone) {
			if (moment.tz && moment.tz.setDefault) {
				moment.tz.setDefault(timezone);
				$rootScope.$broadcast('opMoment:timezoneChanged');
			}

			opinionatedMomentConfig.timezone = timezone;
			defaultTimezone = timezone;
		};

		function preprocessDate (value) {
			if (defaultTimezone !== opinionatedMomentConfig.timezone) {
				this.changeTimezone(opinionatedMomentConfig.timezone);
			}

			if (opinionatedMomentConfig.preprocess) {
				return opinionatedMomentConfig.preprocess(value);
			}

			if (!isNaN(parseFloat(value)) && isFinite(value)) {
				return moment(parseInt(value, 10));
			}

			return moment(value);
		};
	}
}());