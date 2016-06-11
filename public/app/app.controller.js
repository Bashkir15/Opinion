(function() {
	'use strict';

	angular.module('opinionated')
	.controller('AppController', AppController);

	/* @ngInject */
	function AppController ($state, $scope, $rootScope, $mdSidenav, appAuth) {
		var vm = this;
		vm.openUserMenu = openUserMenu;
		vm.updateLoginStatus = updateLoginStatus;

		function openUserMenu() {
			$mdSidenav('left').toggle();
		}

		function updateLoginStatus() {
			vm.isLoggedIn = appAuth.isLoggedIn();
			vm.user = appAuth.getUser();
		}

		$rootScope.$on('loggedIn', function() {
			updateLoginStatus();
		});

		updateLoginStatus();
	}
}());