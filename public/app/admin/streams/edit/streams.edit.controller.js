(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsEditController', StreamsEditController);

	/* @ngInject */
	function StreamsEditController ($state, $stateParams, appAuth, appStreams, appToast) {
		var vm = this;
		var streamId = $stateParams.streamId;
		vm.reset = reset;
		vm.edit = edit;
		vm.getStream = getStream;

		function reset() {
			vm.editStreamForm.$setUntouched();
			vm.editStreamForm.$setPristine();
			vm.stream.name = vm.stream.description = '';
		}

		function edit (isValid) {
			if (isValid) {
				var stream = appStreams.single.get({streamId: streamId}, function() {
					stream.name = vm.stream.name;
					stream.description = vm.stream.description;

					stream.$modify({streamId: streamId}, function (response) {
						if (response.success) {
							reset();
							appToast('You have updated the stream ' + response.res.record.name);
							window.history.go(-1);
						} else {
							appToast(response.res.message);
						}
					});
				});
			} else {
				appToast('Hmm... Something seems to be missing');
			}
		}

		function getStream() {
			var stream = appStreams.single.get({streamId: streamId}, function() {
				vm.stream = stream.res.record;
				vm.stream.name = vm.stream.name;
				vm.stream.description = vm.stream.description;
			});
		}

		getStream();
	}
}());