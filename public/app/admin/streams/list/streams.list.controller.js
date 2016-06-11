(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsListController', StreamsListController);

	/* @ngInject */
	function StreamsListController ($state, $scope, appStreams) {
		var vm = this;
		vm.streams = [];
		vm.getStreams = getStreams;
		vm.streamPage = 0;

		function getStreams (options) {
			options = options || {};

			var streamData = appStreams.single.get({
				page: vm.streamPage
			}, function() {
				if (!options.append) {
					vm.streams = streamData.res.records.concat(vm.streams);
				} else {
					vm.streams = vm.streams.concat(streamData.res.records);
				}
			});
		}

		getStreams();
	}
}());