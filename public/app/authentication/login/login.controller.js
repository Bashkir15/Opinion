(function() {
	'use strict';

	angular.module('opinionated.authentication')
	.controller('LoginController', LoginController);

	/* @ngInject */
	function LoginController ($state, $scope, $rootScope, $mdDialog, appStorage, appToast, appUsers) {
		var vm = this;
		vm.reset = reset;
		vm.login = login;
		vm.postLogin = postLogin;
		vm.openResetPassword = openResetPassword;
		vm.user = {
			email: '',
			password: ''
		};

		function reset() {
			vm.loginForm.$setUntouched();
			vm.loginForm.$setPristine();
			vm.user.email = vm.user.password = '';
		}

		function login (isValid) {
			if (isValid) {
				var user = new appUsers.auth({
					email: vm.user.email,
					password: vm.user.password
				});

				user.$save(function (response) {
					if (response.success) {
						reset();
						postLogin(response.res.record, response.res.token);
						appToast('Welcome to opinionated, ' + response.res.record.name);
					} else {
						appToast(response.res.message);
					}
				});
			} else {
				appToast('uh oh');
			}
		}

		function postLogin(user, token) {
			var serializedUser = angular.toJson(user);
			appStorage.set('user', serializedUser);
			appStorage.set('opinion-token', token);
			$rootScope.$broadcast('loggedIn');
			$state.go('home');
		}

		function openResetPassword() {
			$mdDialog.show({
				controller: [
					'$scope',
					'$mdDialog',
					function ($scope, $mdDialog) {

						$scope.reset = function() {
							passwordResetForm.$setPristine();
							passwordResetForm.$setUntouched();
							$scope.email = '';
						};

						$scope.close = function() {
							$mdDialog.hide();
						};
					}
				],
				templateUrl: '/app/authentication/reset/password.reset.tmpl.html'
			}).finally(function() {

			});
		}
	}
}());