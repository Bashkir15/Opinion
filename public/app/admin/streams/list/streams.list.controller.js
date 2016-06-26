(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsListController', StreamsListController);

	/* @ngInject */
	function StreamsListController ($state, $scope, $timeout, $location, appStreams) {
		var vm = this;
		vm.streams = [];
		vm.getStreams = getStreams;
		vm.subscribe = subscribe;
		vm.unsubscribe = unsubscribe;
		vm.streamPage = 0;
		vm.lastUpdated = 0;
		vm.streamsFilter = '';

		function getStreams (options) {
			options = options || {};

			var streamsData = appStreams.single.get({
				page: vm.streamPage,
				timestamp: vm.lastUpdated,
				filter: vm.streamsFilter
			}, function() {
				if (vm.streamsFilter) {
					vm.streams = [];
				}

				if (!options.append) {
					vm.streams = streamsData.res.records.concat(vm.streams);
				} else {
					vm.streams = vm.streams.concat(streamsData.res.records);
				}

				vm.noMoreStreams = !streamsData.res.morePages;
				vm.lastUpdated = Date.now();
			});
		}

		function subscribe (item) {
			var stream = appStreams.single.get({streamId: item._id}, function() {
				stream.$subscribe({streamId: item._id}, function() {
					item.subscribed = true;
					angular.extend(item, stream.res.record);
				});
			});
		}

		function unsubscribe (item) {
			var stream = appStreams.single.get({streamId: item._id}, function() {
				stream.$unsubscribe({streamId: item._id}, function() {
					item.subscribed = false;
					angular.extend(item, stream.res.record);
				});
			});
		}

		getStreams();
	}
}());