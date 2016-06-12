(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ThreadController', ThreadController);

	/* @ngInject */
	function ThreadController ($scope, $state, $stateParams, $mdDialog, appAuth, appThreads, appToast, appComments) {
		var vm = this;
		var streamId = $stateParams.streamId;
		var threadId = $stateParams.threadId;
		vm.threads = [];
		vm.comments = [];
		vm.getThread = getThread;
		vm.getComments = getComments;
		vm.upvote = upvote;
		vm.downvote = downvote;
		vm.commentPage = 0;
		vm.commentFilter = '';
		vm.lastUpdated = 0;
		vm.openAddComment = openAddComment;

		function getThread() {
			var threadData = appThreads.single.get({threadId: threadId}, function() {
				vm.threads = [threadData.res.record];
			});
		}

		function getComments (options) {
			options = options || {};

			var commentsData = appComments.list.get({
				threadId: threadId,
				page: vm.commentPage,
				filter: vm.commentFilter,
				timestamp: vm.lastUpdated
			}, function() {
				if (vm.commentFilter) {
					vm.comments = [];
				}

				if (!options.append) {
					vm.comments = commentsData.res.records.concat(vm.comments);
				} else {
					vm.comments = vm.comments.concat(commentsData.res.records);
				}

				vm.noMoreComments = !commentsData.res.morePages;
				vm.lastUpdated = 0;
			});
		}

		function upvote (thread) {
			var item = appThreads.single.get({theadId: thread._id}, function() {
				item.$upvote({threadId: thread._id}, function() {
					angular.extend(thread, item.res.record);
				});
			});
		}

		function downvote (thread) {
			var item = appThreads.single.get({threadId: thread._id}, function() {
				item.$downvote({threadId: thread._id}, function() {
					angular.extend(thread, item.res.record);
				});
			});
		}

		function openAddComment() {
			$mdDialog.show({
				controller: [
					'$scope',
					'$mdDialog',
					function ($scope, $mdDialog) {
						$scope.reset = function() {
							$scope.addCommentForm.$setUntouched();
							$scope.addCommentForm.$setPristine();
							$scope.content = '';
						};

						$scope.create = function (isValid) {
							if (isValid) {
								var comment = new appComments.single({
									content: this.content,
									thread: threadId
								});

								comment.$save(function (response) {
									if (response.success) {
										appToast('yay!');
										vm.getComments();
										$mdDialog.hide();
									} else {
										appToast(response.res.message);
									}
								});
							} else {
								appToast('uh oh');
							}
						};

						$scope.close = function() {
							$mdDialog.hide();
						};
					}
				],
				templateUrl: '/app/admin/comments/dialogs/create.comment.dialog.tmpl.html'
			}).finally(function() {
				vm.getComments({reload: true});
			});
		}

		getThread();
		getComments();
	}
}());