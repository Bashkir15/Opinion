(function() {
	'use strict';

	angular.module('opinionated')
	.controller('AppController', AppController);

	/* @ngInject */
	function AppController ($scope, $rootScope, $location, $mdDialog, $mdSidenav, appUsersSearch, appAuth, appStreams) {
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
				var homeStreamsData = appStreams.list.get({subscribed: true}, function() {
					vm.homeStreams = homeStreamsData.res.records;
				});
			} else {
				var homeStreamsData = appStreams.list.get({}, function() {
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
			if (vm.showStreams) {
				vm.showStreams = !vm.showStreams;
			}
		});

		updateLoginStatus();
		getHomeStreams();
	}
}());