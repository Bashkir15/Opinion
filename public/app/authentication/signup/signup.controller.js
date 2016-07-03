(function() {
	'use strict';

	angular.module('opinionated.authentication')
	.controller('SignupController', SignupController);

	/* @ngInject */
	function SignupController ($state, $scope, $rootScope, $location, appStorage, appUsers, appToast) {
		var vm = this;
		vm.reset = reset;
		vm.create = create;
		vm.user = {
			name: '',
			username: '',
			email: '',
			password: ''
		};

		function reset() {
			vm.signupForm.$setUntouched();
			vm.signupForm.$setPristine();
			vm.user.name = vm.user.username = vm.user.email = vm.user.password = vm.user.confirm = '';
		}

		function create (isValid) {
			if (isValid) {
				var user = new appUsers.single({
					name: vm.user.name,
					username: vm.user.username,
					email: vm.user.email,
					password: vm.user.password
				});

				user.$save(function (response) {
					if (response.success) {
						reset();
						postSignup(response.res.record, response.res.token);
					} else {
						appToast.error(reponse.res.message);
					}
				});
			} else {
				appToast.error('Hmm, something seems to be missing...');
			}
		}

		function postSignup (user, token) {
			var serializedUser = angular.toJson(user);
			appStorage.set('user', serializedUser);
			appStorage.set('opinion-token', token);
			$rootScope.$broadcast('loggedIn')
			appToast.success('Welcome to Opinionated, ' + user.name + '. Let\'s get started');
			$location.url(user._id + '/profileInfo');
		}
	}
}());