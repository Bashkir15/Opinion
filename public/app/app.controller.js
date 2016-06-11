(function() {
	'use strict';

	angular.module('opinionated')
	.controller('AppController', AppController);

	/* @ngInject */
	function AppController ($state, $scope, $rootScope, $mdSidenav, appAuth, appStorage) {
		var vm = this;
		vm.openUserMenu = openUserMenu;
		vm.updateLoginStatus = updateLoginStatus;
		vm.logout = logout;

		function openUserMenu() {
			$mdSidenav('left').toggle();
		}

		function updateLoginStatus() {
			vm.isLoggedIn = appAuth.isLoggedIn();
			vm.user = appAuth.getUser();
		}

		function logout() {
			appStorage.remove('user');
			appStorage.remove('opinion-token');
			$scope.$broadcast('loggedOut');
		}

		$rootScope.$on('loggedIn', function() {
			updateLoginStatus();
		});

		$scope.$on('loggedOut', function() {
			updateLoginStatus();
		});

		updateLoginStatus();
	}
}());