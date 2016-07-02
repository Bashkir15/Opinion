(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileOverviewController', ProfileOverviewController);

	/* @ngInject */
	function ProfileOverviewController ($scope, $state, $mdDialog, $location, appAuth, appUsersSearch) {
		var vm = this;
		vm.stateName = $state.current.name;
		vm.openUserSearch = openUserSearch;

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
							$location.url('profile/' + item._id + '/overview');
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