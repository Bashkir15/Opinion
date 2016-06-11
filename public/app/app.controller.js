(function() {
	'use strict';

	angular.module('opinionated')
	.controller('AppController', AppController);

	/* @ngInject */
	function AppController ($state, $scope, $mdSidenav) {
		var vm = this;
		vm.openUserMenu = openUserMenu;

		function openUserMenu() {
			$mdSidenav('left').toggle();
		}
	}
}());