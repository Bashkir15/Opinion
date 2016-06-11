(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsCreateController', StreamsCreateController);

	/* @ngInject */
	function StreamsCreateController ($state, $scope, appStorage, appToast, appStreams) {
		var vm = this;
		vm.reset = reset;
		vm.create = create;
		vm.stream = {
			name: '',
			description: ''
		};

		function reset() {
			vm.createStreamForm.$setUntouched();
			vm.createStreamForm.$setPristine();
			vm.stream.name = vm.stream.description = '';
		}

		function create (isValid) {
			if (isValid) {
				var stream = new appStreams.single({
					name: vm.stream.name,
					description: vm.stream.description
				});

				stream.$save(function (response) {
					if (response.success) {
						reset();
						$state.go('streamsList');
						appToast('yay!');
					} else {
						appToast(response.res.message);
					}
				});
			} else {
				appToast('oh no');
			}
		}
	}
}());