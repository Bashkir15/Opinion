(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileSavedController', ProfileSavedController);

	/* @ngInject */
	function ProfileSavedController ($state, $stateParams, $scope, appUsers, appThreads) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.threads = [];
		vm.getThreads = getThreads;
		vm.lastUpdated = 0;
		vm.savedPage = 0;

		function getThreads (options) {
			options = options || {};

			var threadsData = appThreads.saved.get({
				userId: userId,
				timestamp: vm.lastUpdated,
				page: vm.savedPage
			}, function() {
				if (!options.append) {
					vm.threads = threadsData.res.records.concat(vm.threads);
				} else {
					vm.threads = vm.threads.concat(threadsData.res.records);
				}

				vm.lastUpdated = Date.now();
				vm.noMoreThreads = !threadsData.res.morePages;
			});
		}

		getThreads();
	}
}());