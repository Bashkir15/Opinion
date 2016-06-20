(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ThreadsCreateController', ThreadsCreateController);

	/* @ngInject */
	function ThreadsCreateController ($state, $scope, $location, appToast, appStreams, appThreads) {
		var vm = this;
		vm.streamList = [];
		vm.getStreams = getStreams;
		vm.reset = reset;
		vm.create = create;
		vm.thread = {
			title: '',
			content: '',
			stream: ''
		};

		function getStreams() {
			var streamsData = appStreams.single.get({}, function() {
				vm.streamList = streamsData.res.records;
			});
		}

		function reset() {
			vm.createThreadForm.$setPristine();
			vm.createThreadForm.$setUntouched();
			vm.thread.title = vm.thread.content = vm.thread.stream = '';
		}

		function create (isValid) {
			if (isValid) {
				var thread = new appThreads.single({
					title: vm.thread.title,
					content: vm.thread.content,
					stream: vm.thread.stream
				});

				thread.$save(function (response) {
					if (response.success) {
						reset();
						$location.url('streams/' + vm.thread.stream + response.res.record._id);
						appToast('You have just posted a thread called ' + response.res.record.title + ' in the stream: ' + vm.thread.stream.name);
					} else {
						appToast(response.res.message);
					}
				});
			} else {
				appToast('Hmm... Something seems to be missing');
			}
		}

		getStreams();
	}
}());