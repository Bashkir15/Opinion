(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsCreateController', StreamsCreateController);

	/* @ngInject */
	function StreamsCreateController ($rootScope, $location, appStreams, appToast) {
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
						$location.url('streams/' + response.res.record._id);
						appToast.success('You just created a stream called: ' + response.res.record.name);
					} else {
						appToast.error(response.res.message);
					}
				});
			} else {
				appToast.error('Hmm, something seems to be missing...');
			}
		}
	}
}());