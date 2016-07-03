(function() {
	'use strict';

	angular.module('opinionated.datepicker', [])
	.constant('DatePickerYears', doGetYears());

	function doBuildRows (options) {
		var row = [],
		currentMonthAndYear = options.date.getMonth() === options.now.getMonth() && options.date.getFullYear() === options.now.getFullYear(),
		selectMonthAndYear = options.date.getMonth() === options.selectedDate.getMonth() && options.selectedDate.getFullYear() === options.date.getFullYear(),
		isVisible;

		for (var i = options.firstDay; i < options.lastDay; i++) {
			isVisible = i >= 0 && i < options.daysInMonth && !(currentMonthAndYear && (new Date()).getDate() > (i + 1));

			row.push({
				isToday: isVisible && (options.now.getDate() - 1) === i,
				selected: currentMonthAndYear && (options.selectedDate.getDate() - 1) === i,
				value: i + 1,
				visible: isVisible
			});
		}

		return row;
	}

	function doDaysInMonth (year, month) {
		return new Date(year, month + 1, 0).getDate();
	}

	function doGetFirstDay (year, month) {
		return (new Date(year, month, 1)).getDate();
	}

	function doGetRows (date, selectedDate) {
		var firstDay = doGetFirstDay(date.getFullYear(), date.getMonth()),
		daysInMonth = doDaysInMonth(date.getFullYear(), date.getMonth()),
		daysInView = daysInMonth + firstDay,
		numberOfRows = Math.round(daysInView/7),
		rows = [],
		options = {
			date: new Date(date.getTime()),
			daysInMonth: daysInMonth,
			now: new Date(),
			selectedDate: new Date(selectedDate.getTime()),
			startDay: firstDay
		};

		for (var i = 0; i < numberOfRows; i++) {
			options.firstDay = (i * 7) - firstDay;
			options.lastDay = options.firstDay + 7;

			rows.push(doBuildRows(options));
		}

		return rows;
	}

	function doGetYears() {
		return [1].reduce(function (previous, current) {
			previous.push(previous[previous.length - 1] + 1);

			return previous;
		}, [(new Date()).getFullYear()]);
	}
}());