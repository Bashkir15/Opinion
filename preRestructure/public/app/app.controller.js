(function() {
	'use strict';

	angular.module('opinionated')
	.controller('AppController', AppController);

	/* @ngInject */
	function AppController ($state, $scope, $rootScope, $location, $mdSidenav, $mdDialog, appAuth, appStorage, appStreams, appUsersSearch) {
		var vm = this;
		vm.openUserMenu = openUserMenu;
		vm.updateLoginStatus = updateLoginStatus;
		vm.getHomeStreams = getHomeStreams;
		vm.goToStream = goToStream;
		vm.openUserSearch = openUserSearch;
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

		function goToStream (item) {
			$location.url('streams/' + item._id);
		}

		function openUserSearch() {
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
							$location.url(item._id + '/profile/overview');
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