(function() {
	'use strict';

	angular.module('opinionated.authentication')
	.controller('LoginController', LoginController);

	/* @ngInject */
	function LoginController ($state, $scope, $rootScope, $location, appUsers, appStorage) {
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
				var auth = new appUsers.authenticate({
					email: vm.user.email,
					password: vm.user.password
				});

				auth.$save(function (response) {
					if (response.success) {
						reset();
						postLogin(response.res.record, response.res.token);
						alert('yay');
					} else {
						alert(response.res.message);
					}
				});
			} else {
				alert('hmm');
			}
		}

		function postLogin (user, token) {
			var serializedUser = angular.toJson(user);
			appStorage.set('user', serializedUser);
			appStorage.set('opinion-token', token);
			$rootScope.$broadcast('loggedIn');
			$location.url('profile/' + user._id);
		}
	} 
}());