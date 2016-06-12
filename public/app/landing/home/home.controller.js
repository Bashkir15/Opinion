(function() {
	'use strict';

	angular.module('opinionated.landing')
	.controller('HomeController', HomeController);

	/* @ngInject */
	function HomeController ($state, $scope, $rootScope, appAuth, appUsers, appStreams, appThreads, appToast) {
		var vm = this;
		vm.threads = [];
		vm.getHomeThreads = getHomeThreads;
		vm.homePage = 0;
		vm.homeFilter = '';
		vm.lastUpdated = 0;

		function getHomeThreads (options) {
			options = options || {};

			var homeThreadData = appThreads.home.get({
				page: vm.homePage,
				filter: vm.homeFilter,
				timestamp:vm.lastUpdated
			}, function() {
				if (vm.homeFilter) {
					vm.threads = [];
				}

				if (!options.append) {
					vm.threads = homeThreadData.res.records.concat(vm.threads);
				} else {
					vm.threads = vm.threads.concat(homeThreadData.res.records);
				}

				vm.noMoreThreads = !homeThreadData.res.morePages;
				vm.lastUpdated = Date.now()
			});
		}

		getHomeThreads();
	}
}());