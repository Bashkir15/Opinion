(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileCommentsController', ProfileCommentsController);

	/* @ngInject */
	function ProfileCommentsController ($state, $stateParams, $scope, appUsers, appComments) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.timeline = [];
		vm.getTimeline = getTimeline;
		vm.lastUpdated = 0;
		vm.timelinePage = 0;

		function getTimeline (options) {
			options = options || {};

			var timelineData = appComments.timeline.get({
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
				vm.noMoreComments = !timelineData.res.morePages;
			});
		}

		getTimeline();
	}
}());