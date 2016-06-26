(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsSingleController', StreamsSingleController);

	/* @ngInject */
	function StreamsSingleController ($state, $stateParams, $mdDialog, $location, appAuth, appStreams, appThreads) {
		var vm = this;
		var streamId = $stateParams.streamId;
		vm.stream = [];
		vm.feed = [];
		vm.getStream = getStream;
		vm.updateFeed = updateFeed;
		vm.feedPage = 0;
		vm.lastUpdated = 0;
		vm.feedsFilter = '';

		function getStream () {
			var streamData = appStreams.single.get({streamId: streamId}, function() {
				vm.stream = [streamData.res.record];
				vm.moderators = streamData.res.moderators;
				vm.isMod = streamData.res.isMod;
			});
		}

		function updateFeed (options) {
			options = options || {};

			var threadData = appThreads.list.get({
				streamId: streamId,
				page: vm.feedPage,
				timestamp: vm.lastUpdated,
				filter: vm.feedsFilter
			}, function() {
				if (vm.feedsFilter) {
					vm.feed = [];
				}

				if (!options.append) {
					vm.feed = threadData.res.records.concat(vm.feed);
				} else {
					vm.feed = vm.feed.concat(threadData.res.records);
				}

				vm.noMorePages = !threadData.res.noMorePages;
				vm.lastUpdated = Date.now();
			});
		}

		getStream();
		updateFeed();
	}
}());