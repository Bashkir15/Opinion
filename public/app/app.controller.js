(function() {
	'use strict';

	angular.module('opinionated')
	.controller('AppController', AppController);

	/* @ngInject */
	function AppController ($scope, $rootScope, $state, $location, $mdSidenav, $mdDialog, appAuth, appStorage, appUsersSearch) {
		var vm = this;
		vm.openUserMenu = openUserMenu;
		vm.updateLoginStatus = updateLoginStatus;
		vm.openUserSearch = openUserSearch;

		function openUserMenu() {
			$mdSidenav('left').toggle();
		}

		function updateLoginStatus() {
			vm.isLoggedIn = appAuth.isLoggedIn();
			vm.user = appAuth.getUser();
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
	}
}());