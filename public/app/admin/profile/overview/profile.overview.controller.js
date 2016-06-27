(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileOverviewController', ProfileOverviewController);

	/* @ngInject */
	function ProfileOverviewController ($scope, $state, appAuth) {
		var vm = this;
		vm.stateName = $state.current.name;
	}
}());