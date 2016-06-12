(function() {
	'use strict';

	angular.module('opinionated')
	.controller('AppController', AppController);

	/* @ngInject */
	function AppController ($state, $scope, $rootScope, $mdSidenav, appAuth, appStorage, appStreams) {
		var vm = this;
		vm.openUserMenu = openUserMenu;
		vm.updateLoginStatus = updateLoginStatus;
		vm.getHomeStreams = getHomeStreams;
		vm.homeStreams = [];

		function openUserMenu() {
			$mdSidenav('left').toggle();
		}

		function updateLoginStatus() {
			vm.isLoggedIn = appAuth.isLoggedIn();
			vm.user = appAuth.getUser();
		}

		function getHomeStreams() {
			if (vm.isLoggedIn) {
				var homeStreamsData = appStreams.single.get({subscribed: true}, function() {
					vm.homeStreams = homeStreamsData.res.records;
				});
			} else {
				var homeStreamsData = appStreams.single.get({}, function() {
					vm.homeStreams = homeStreamsData.res.records;
				});
			}
		}

		$rootScope.$on('loggedIn', function() {
			updateLoginStatus();
		});

		$rootScope.$on('loggedOut', function() {
			updateLoginStatus();
		});

		$rootScope.$on('$stateChangeSuccess', function() {
			$mdSidenav('left').close();
		});

		updateLoginStatus();
		getHomeStreams();
	}
}());