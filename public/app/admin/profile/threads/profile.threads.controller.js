(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileThreadsController', ProfileThreadsController);

	/* @ngInject */
	function ProfileThreadsController ($scope, $state) {
		var vm = this;
		vm.stateName = $state.current.name;
	}
}());