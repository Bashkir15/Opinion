(function() {
	'use strict';

	angular.module('opinionated')
	.controller('AppController', AppController);

	/* @ngInject */
	function AppController ($scope, $rootScope, $location, $mdDialog, $mdSidenav, appUsersSearch, appAuth) {
		var vm = this;
		vm.openUsersSearch = openUsersSearch;

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
	}
}());