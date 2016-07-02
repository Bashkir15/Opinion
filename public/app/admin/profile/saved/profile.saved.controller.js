(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileSavedController', ProfileSavedController);

	/* @ngInject */
	function ProfileSavedController ($state, $stateParams, $scope, $timeout, appAuth, appThreads, appComments) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.threads = [];
		vm.comments = [];
		vm.threadPage = 0;
		vm.commentPage = 0;
		vm.lastThreadUpdate = 0;
		vm.lastCommentUpdate = 0;
		vm.threadsFilter = '';
		vm.commentsFilter = '';
		vm.getThreads = getThreads;
		vm.getComments = getComments;
		vm.loadMoreThreads = loadMoreThreads;
		vm.loadMoreComments = loadMoreComments;

		function getThreads(options) {
			options = options || {};

			var threadsData = appThreads.saved.get({
				userId: userId,
				page: vm.threadPage,
				timestamp: vm.lastThreadUpdate,
				filter: vm.threadsFilter
			}, function() {

				if (vm.threadsFilter) {
					vm.threads = [];
				}

				if (!options.append) {
					vm.threads = threadsData.res.records.concat(vm.threads);
				} else {
					vm.threads = vm.threads.concat(threadsData.res.records);
				}

				vm.lastThreadUpdate = Date.now()
				vm.noMoreThreads = !threadsData.res.morePages;	
			});
		}

		function getComments (options) {
			options = options || {};

			var commentsData = appComments.saved.get({
				userId: userId,
				page: vm.commentPage,
				timestamp: vm.lastCommentUpdate,
				filter: vm.commentsFilter
			}, function() {

				if (vm.commentsFilter) {
					vm.comments = [];
				}

				if (!options.append) {
					vm.comments = commentsData.res.records.concat(vm.comments);
				} else {
					vm.comments = vm.comments.concat(commentsData.res.records);
				}

				vm.lastCommentUpdate = Date.now()
				vm.noMoreComments = !commentsData.res.morePages;
			});
		}

		var threadsFilterTimeout;
		var commentsFilterTimeout;

		$scope.$watch('vm.threadsFilter', function (newValue, oldValue) {
			if (!newValue !== oldValue) {
				vm.threads = [];
			}

			$timeout.cancel(threadsFilterTimeout);
			threadsFilterTimeout = $timeout(function() {
				if (!newValue) {
					if (vm.threadsFilterEnabled) {
						vm.lastThreadUpdate = 0;
						vm.getThreads();
					}
				} else {
					vm.getThreads();
				}

				vm.threadsFilterEnabled = vm.threadsFilter !== '';
			}, 500);
		});

		$scope.$watch('vm.commentsFilter', function (newValue, oldValue) {
			if (!newValue !== oldValue) {
				vm.comments = [];
			}

			$timeout.cancel(commentsFilterTimeout);
			commentsFilterTimeout = $timeout(function() {
				if (!newValue) {
					if (vm.commentsFilterEnabled) {
						vm.lastCommentUpdate = 0;
						vm.getComments();
					}
				} else {
					vm.getComments();
				}

				vm.commentsFilterEnabled = vm.commentsFilter !== '';
			}, 500);
		});

		function loadMoreThreads() {
			vm.threadPage++;
			vm.lastThreadUpdate = 0;
			vm.getThreads({append: true});
		}

		function loadMoreComments() {
			vm.commentPage++;
			vm.lastCommentUpdate = 0;
			vm.getComments({append: true});
		}



		getThreads();
		getComments();
	}
}());