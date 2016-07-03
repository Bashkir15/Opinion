(function() {
	'use strict';

	angular.module('opinionated.authentication')
	.controller('LoginController', LoginController);

	/* @ngInject */
	function LoginController ($scope, $rootScope, $location, appStorage, appUsers, appToast) {
		var vm = this;
		vm.reset = reset;
		vm.login = login;
		vm.postLogin = postLogin;
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
				var auth = new appUsers.auth({
					email: vm.user.email,
					password: vm.user.password
				});

				auth.$save(function (response) {
					if (response.success) {
						reset();
						postLogin(response.res.record, response.res.token);
					} else {
						appToast.error(response.res.message);
					}
				});
			} else {
				appToast.error('Hmm, seems like something is missing');
			}
		}

		function postLogin (user, token) {
			var serializedUser = angular.toJson(user);
			appStorage.set('user', serializedUser);
			appStorage.set('opinion-token', token);
			$rootScope.$broadcast('loggedIn');
			appToast.success('Welcome back, ' + user.name);
			$location.url('profile/' + user._id + '/overview');
		}
	}
}());