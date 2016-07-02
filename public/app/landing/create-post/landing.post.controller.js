(function() {
	'use strict';

	angular.module('opinionated.landing')
	.controller('LandingPostController', LandingPostController);

	/* @ngInject */
	function LandingPostController ($state, $location, appStreams, appThreads, appToast) {
		var vm = this;
		vm.streamList = [];
		vm.getStreams = getStreams;
		vm.create = create;
		vm.thread = {
			title: '',
			content: '',
			stream: ''
		};

		function getStreams() {
			var streamsData = appStreams.list.get({}, function() {
				vm.streamList = streamsData.res.records;
			});
		}

		getStreams();

		function create (isValid) {
			if (isValid) {
				var thread = new appThreads.single({
					title: vm.thread.title,
					content: vm.thread.content,
					stream: vm.thread.stream
				});

				thread.$save(function (response) {
					if (response.success) {
						$location.url('streams/' + vm.thread.stream + '/' + response.res.record._id);
						appToast.success('You just posted a thread called: ' + response.res.record.title);
					} else {
						appToast.error(response.res.message);
					}
				});
			} else {
				appToast.error('Seems like something is missing');
			}
		}
	}
}());