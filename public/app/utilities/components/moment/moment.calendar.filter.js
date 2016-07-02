(function() {
	'use strict';

	angular.module('opinionated.moment')
	.filter('opCalendar', opCalendar);

	/* @ngInject */
	function opCalendar (moment, opMoment, opinionatedMomentConfig) {
		function opCalendarFilter (value, referenceTime, formats) {

			var date = opMoment.preprocessDate(value);
			return date.isValid() ? date.calendar(referenceTime, formats) : '';
		}

		opCalendarFilter.$stateful = opinionatedMomentConfig.statefulFilters;

		return opCalendarFilter;
	} 
}());