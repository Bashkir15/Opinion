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
		vm.upvote = upvote;
		vm.downvote = downvote;
		vm.save = save;
		vm.unsave = unsave;

		function getHomeThreads (options) {
			options = options || {};

			if (appAuth.isLoggedIn()) {
				var homeThreadData = appThreads.subscribedHome.get({}, function() {
					if (!options.append) {
						vm.threads = homeThreadData.res.record;
					} else {
						vm.threads = vm.threads.concat(homeThreadData.res.records);
					}

					vm.lastUpdated = Date.now()
					console.log(vm.threads);
				});
			} else {
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
		}

		function downvote (thread) {
			var obj = appThreads.single.get({threadId: thread._id}, function() {
				obj.$downvote({threadId: thread._id}, function() {
					angular.extend(thread, obj.res.record);
				});
			});
		}

		function upvote (thread) {
			var obj = appThreads.single.get({threadId: thread._id}, function() {
				obj.$upvote({threadId: thread._id}, function() {
					angular.extend(thread, obj.res.record);
				});
			});
		}

		function save (thread) {
			var obj = appThreads.single.get({threadId: thread._id}, function() {
				obj.$doSave({threadId: thread._id}, function() {
					angular.extend(thread, obj.res.record);
				});
			});
		}

		function unsave (thread) {
			var obj = appThreads.single.get({threadId: thread._id}, function() {
				obj.$doUnsave({threadId: thread._id}, function() {
					angular.extend(thread, obj.res.record);
				});
			});
		}

		getHomeThreads();
	}
}());