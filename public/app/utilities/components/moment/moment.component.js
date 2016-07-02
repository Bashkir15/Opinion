'format amd';

(function() {
	function requireMoment() {
		try {
			return require('moment');
		} catch (e) {
			throw new Error('Moment is not working');
		}
	}

	function opinionatedMoment() {
		if (typeof moment === 'undefined') {
			if (typeof require === 'function') {
				moment = requireMoment();
			} else {
				throw new Error('Moment cannot be found');
			}
		}

		return angular.module('opinionated.moment', [])
		.constant('opinionMomentConfig', {
			preprocess: null,
			timezone: null,
			format: null,
			statefulFilters: true
		})
		.constant('moment', moment)
		.service('opMoment', opMoment)
		.filter('opCalendar', opCalendar);

		/* @ngInject */
		function opMoment (moment, $rootScope, $log, opinionMomentConfig) {
			var defaultTimezone = null;
			var service 

			this.changeLocale = function (locale, customization) {
				var result = moment.locale(locale, customization);

				if (angular.isDefined(locale)) {
					$rootScope.$broadcast('opMoment:localeChanged');
				}

				return result;
			};

			this.changeTimezone = function (timezone) {
				if (moment.tz && moment.tz.setDefault) {
					moment.tz.setDefault(timezone);
					$rootScope.$broadcast('opMoment:timezoneChanged');
				}

				opinionMomentConfig.timezone = timezone;
				defaultTimezone = timezone;
			};

			this.preprocessDate = function (value) {
				if (defaultTimezone !== opinionMomentConfig.timezone) {
					this.changeTimezone(opinionMomentConfig.timezone);
				}

				if (opinionMomentConfig.preprocess) {
					return opinionMomentConfig.preprocess(value);
				}

				if (!isNaN(parseFloat(value)) && isFinite(value)) {
					return moment(parseInt(value, 10));
				}

				return moment(value);
			};
		}

		/* @ngInject */
		function opCalendar (moment, opMoment, opinionMomentConfig) {
			function opCalendarFilter (value, referenceTime, formats) {
				if (isUndefinedOrNull(value)) {
					return '';
				}

				var date = opMoment.preprocessDate(value);
				return date.isValid() ? date.calendar(referenceTime, formats) : '';
			}

			opCalendarFilter.$stateful = opinionMomentConfig.statefulFilters;

			return opCalendarFilter;
		}
	}

	if (typeof define === 'function' && define.amd) {
		define(['angular', 'moment'], opinionatedMoment);
	} else if (typeof module !== 'undefined' && module && module.exports) {
		opinionatedMoment(require('angular'), require('moment'));
		module.exports = 'opinionatedMoment';
	} else {
		opinionatedMoment(angular, (typeof global !== 'undefined' ? ))
	}
})