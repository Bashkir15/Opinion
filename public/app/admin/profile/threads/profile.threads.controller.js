(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileThreadsController', ProfileThreadsController);

	/* @ngInject */
	function ProfileThreadsController ($state, $stateParams, $scope, appUsers, appAuth, appThreads) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.timeline = [];
		vm.getTimeline = getTimeline;
		vm.lastUpdated = 0;
		vm.timelinePage = 0;

		function getTimeline(options) {
			options = options || {};

			var timelineData = appThreads.timeline.get({
				userId: userId,
				timestamp: vm.lastUpdated,
				page: vm.timelinePage
			}, function() {
				if (!options.append) {
					vm.timeline = timelineData.res.records.concat(vm.timeline);
				} else {
					vm.timeline = vm.timeline.concat(timelineData.res.records);
				}

				vm.lastUpdated = Date.now();
				vm.noMoreThreads = !timelineData.res.morePages;
			});
		}

		getTimeline();
	} 
}());