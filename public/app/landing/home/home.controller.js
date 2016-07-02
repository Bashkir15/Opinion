(function() {
	'use strict';

	angular.module('opinionated.landing')
	.controller('HomeController', HomeController);

	/* @ngInject */
	function HomeController ($state, $scope, $rootScope, $timeout, appAuth, appUsers, appStreams, appThreads) {
		var vm = this;
		vm.threads = [];
		vm.getHomeThreads = getHomeThreads;
		vm.homePage = 0;
		vm.lastUpdated = 0;
		vm.homeFilter = '';
		vm.orderByDate = orderByDate;
		vm.orderByScore = orderByScore;
		vm.orderBySaves = orderBySaves;
		vm.orderByComments = orderByComments;
		vm.upvote = upvote;
		vm.downvote = downvote;
		vm.save = save;
		vm.unsave = unsave;

		function getHomeThreads (options) {
			options = options || {};

			var homeThreadData = appThreads.home.get({
				page: vm.homePage,
				timestamp:vm.lastUpdated,
				filter: vm.homeFilter
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

		var homeFilterTimeout;

		$scope.$watch('vm.homeFilter', function (newValue, oldValue) {
			if (!newValue !== oldValue) {
				vm.threads = [];
			}

			$timeout.cancel(homeFilterTimeout);
			homeFilterTimeout = $timeout(function() {
				if (!newValue) {
					if (vm.homeFilterEnabled) {
						vm.lastUpdated = 0;
						vm.getHomeThreads();
					}
				} else {
					vm.getHomeThreads();
				}

				vm.homeFilterEnabled = vm.homeFilter !== '';
			}, 500);
		});
		
		function orderByDate() {
			if (vm.rowFilter == 'created') {
				vm.rowFilter = '-created';
			} else {
				vm.rowFilter = 'created';
			}
		}

		function orderByScore() {
			if (vm.rowFilter == '-score') {
				vm.rowFilter = 'score';
			} else {
				vm.rowFilter = '-score';
			}
		}

		function orderBySaves() {
			if (vm.rowFilter == '-saves.length') {
				vm.rowFilter = 'saves.length';
			} else {
				vm.rowFilter = '-saves.length';
			}
 		}

 		function orderByComments() {
 			if (vm.rowFilter == '-comments.length') {
 				vm.rowFilter = 'comments.length';
 			} else {
 				vm.rowFilter = '-comments.length';
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