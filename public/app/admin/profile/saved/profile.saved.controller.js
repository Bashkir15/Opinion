(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileSavedController', ProfileSavedController);

	/* @ngInject */
	function ProfileSavedController ($state, $stateParams, $scope, appUsers, appThreads, appComments) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.threads = [];
		vm.comments = [];
		vm.getThreads = getThreads;
		vm.getComments = getComments;
		vm.lastThreadUpdated = 0;
		vm.lastCommentUpdated = 0;
		vm.threadPage = 0;
		vm.commentPage = 0;

		function getThreads (options) {
			options = options || {};

			var threadsData = appThreads.saved.get({
				userId: userId,
				timestamp: vm.lastThreadUpdated,
				page: vm.threadPage
			}, function() {
				if (!options.append) {
					vm.threads = threadsData.res.records.concat(vm.threads);
				} else {
					vm.threads = vm.threads.concat(threadsData.res.records);
				}

				vm.lastThreadUpdated = Date.now();
				vm.noMoreThreads = !threadsData.res.morePages;
			});
		}

		function getComments (options) {
			options = options || {};

			var commentsData = appComments.saved.get({
				userId: userId,
				timestamp: vm.lastCommentUpdated,
				page: vm.commentPage
			}, function() {
				if (!options.append) {
					vm.comments = commentsData.res.records.concat(vm.comments); 
				} else {
					vm.comments = vm.comments.concat(commentsData.res.records);
				}

				vm.lastCommentUpdated = Date.now();
				vm.noMoreComments = !commentsData.res.morePages;
			});
		}

		getThreads();
		getComments();
	}
}());