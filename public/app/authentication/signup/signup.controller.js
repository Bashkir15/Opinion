(function() {
	'use strict';

	angular.module('opinionated.authentication')
	.controller('SignupController', SignupController);

	/* @ngInject */
	function SignupController ($state, $scope, appUsers) {
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
						alert('yay');
					} else {
						alert(response.res.message);
					}
				});
			} else {
				alert('poop');
			}
		}
	}
}());