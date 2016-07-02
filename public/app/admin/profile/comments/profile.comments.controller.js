(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileCommentsController', ProfileCommentsController);

	/* @ngInject */
	function ProfileCommentsController ($state, $stateParams, $scope, $timeout, appUsers, appComments) {
		var vm = this;
		vm.stateName = $state.current.name;
		var userId = $stateParams.userId;
		vm.timeline = [];
		vm.getTimeline = getTimeline;
		vm.loadMore = loadMore;
		vm.lastUpdated = 0;
		vm.timelinePage = 0;
		vm.timelineFilter = '';

		function getTimeline (options) {
			options = options || {};

			var timelineData = appComments.timeline.get({
				userId: userId,
				timestamp: vm.lastUpdated,
				page: vm.timelinePage,
				filter: vm.timelineFilter
			}, function() {

				if (vm.timelineFilter) {
					vm.timeline = [];
				}

				if (!options.append) {
					vm.timeline = timelineData.res.records.concat(vm.timeline);
				} else {
					vm.timeline = vm.timeline.concat(timelineData.res.records);
				}

				vm.lastUpdated = Date.now();
				vm.noMoreComments = !timelineData.res.morePages;
			});
		}

		var timelineFilterTimeout;
		$scope.$watch('vm.timelineFilter', function (newValue, oldValue) {
			if (!newValue !== oldValue) {
				vm.timeline = [];
			}

			$timeout.cancel(timelineFilterTimeout);
			timelineFilterTimeout = $timeout(function() {
				if (!newValue) {
					if (vm.timelineFilterEnabled) {
						vm.lastUpdated = 0;
						vm.getTimeline();
					}
				} else {
					vm.getTimeline();
				}

				vm.timelineFilterEnabled = vm.timelineFilter !== '';
			}, 500);
		});

		function loadMore() {
			vm.timelinePage++;
			vm.lastUpdated = 0;
			vm.getTimeline({append: true});
		}

		getTimeline();
	}
}());