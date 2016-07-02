(function() {
	'use strict';

	angular.module('opinionated')
	.controller('AppController', AppController);

	/* @ngInject */
	function AppController ($scope, $rootScope, $location, $mdDialog, $mdSidenav, appUsersSearch, appAuth, appStreams) {
		var vm = this;
		vm.openUserMenu = openUserMenu;
		vm.openUsersSearch = openUsersSearch;
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
			

		function openUsersSearch() {
			$mdDialog.show({
				controller: [
					'$scope',
					'$mdDialog',
					function ($scope, $mdDialog) {
						$scope.search = '';

						$scope.doSearch = function (val) {
							return appUsersSearch(val).then(function (response) {
								return response.res.items;
							});
						};

						$scope.goToUser = function (item) {
							$location.url('profile/' + item._id);
							$mdDialog.hide();
						};

						$scope.clearSearch = function() {
							$scope.search = '';
						};

						$scope.close = function() {
							$mdDialog.hide();
						};
					}
				],
				templateUrl: '/app/admin/profile/dialogs/users.search.dialog.tmpl.html'
			}).finally(function() {

			});
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