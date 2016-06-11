(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsListController', StreamsListController);

	/* @ngInject */
	function StreamsListController ($state, $scope, $location, appStreams) {
		var vm = this;
		vm.streams = [];
		vm.getStreams = getStreams;
		vm.subscribe = subscribe;
		vm.unsubscribe = unsubscribe;
		vm.goToStream = goToStream;
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

		function subscribe (item) {
			var stream = appStreams.single.get({streamId: item._id}, function() {
				stream.$subscribe({streamId: item._id}, function() {
					angular.extend(item, stream.res.record);
					item.subscribed = true;
				});
			});
		}

		function unsubscribe (item) {
			var stream = appStreams.single.get({streamId: item._id}, function() {
				stream.$unsubscribe({streamId: item._id}, function() {
					angular.extend(item, stream.res.record);
					item.subscribed = false;
				});
			});
		}

		function goToStream (item) {
			$location.url('streams/' + item._id);
		}

		getStreams();
	}
}());