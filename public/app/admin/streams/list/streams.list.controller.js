(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsListController', StreamsListController);

	/* @ngInject */
	function StreamsListController ($state, $scope, $location, $timeout, appStreams) {
		var vm = this;
		vm.streams = [];
		vm.getStreams = getStreams;
		vm.subscribe = subscribe;
		vm.unsubscribe = unsubscribe;
		vm.orderByThreads = orderByThreads;
		vm.orderBySubscribers = orderBySubscribers;
		vm.orderByDate = orderByDate;
		vm.streamPage = 0;
		vm.streamsFilter = ''
		vm.lastUpdated = 0;

		function getStreams (options) {
			options = options || {};

			var streamData = appStreams.single.get({
				page: vm.streamPage,
				filter: vm.streamsFilter,
				timestamp: vm.lastUpdated
			}, function() {

				if (vm.streamsFilter) {
					vm.streams = [];
				}

				if (!options.append) {
					vm.streams = streamData.res.records.concat(vm.streams);
				} else {
					vm.streams = vm.streams.concat(streamData.res.records);
				}

				vm.noMoreStreams = !streamData.res.morePages;
				vm.lastUpdated = Date.now();
			});
		}

		var streamsFilterTimeout;
		$scope.$watch('vm.streamsFilter', function (newValue, oldValue) {
			if (!newValue !== oldValue) {
				vm.streams = [];
			}

			$timeout.cancel(streamsFilterTimeout);
			streamsFilterTimeout = $timeout(function() {
				if (!newValue) {
					if (vm.streamsFilterEnabled) {
						vm.lastUpdated = 0;
						vm.getStreams();
					}
				} else {
					vm.getStreams();
				}

				vm.streamsFilterEnabled = vm.streamsFilter !== '';
			}, 500);
		});

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

		function orderByThreads() {
			if (vm.rowFilter == '-threads.length') {
				vm.rowFilter = 'threads.length';
			} else {
				vm.rowFilter = '-threads.length';
			}
		}

		function orderBySubscribers() {
			if (vm.rowFilter == '-subscribers.length') {
				vm.rowFilter = 'subscribers.length';
			} else {
				vm.rowFilter = '-subscribers.length';
			}
		}

		function orderByDate() {
			if (vm.rowFilter == '-created') {
				vm.rowFilter = 'created';
			} else {
				vm.rowFilter = '-created';
			}
		}


		getStreams();
	}
}());