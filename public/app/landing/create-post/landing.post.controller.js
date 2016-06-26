(function() {
	'use strict';

	angular.module('opinionated.landing')
	.controller('LandingPostController', LandingPostController);

	/* @ngInject */
	function LandingPostController ($state, $location, appStreams, appThreads) {
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
			var streamsData = appStreams.single.get({}, function() {
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
						alert('yay!');
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