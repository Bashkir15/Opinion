(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ThreadController', ThreadController);

	/* @ngInject */
	function ThreadController ($scope, $state, $stateParams, $mdDialog, $timeout, appAuth, appThreads, appComments) {
		var vm = this;
		var streamId = $stateParams.streamId;
		var threadId = $stateParams.threadId;
		vm.currentUserId = appAuth.getUser()._id;
		vm.threads = [];
		vm.comments = [];
		vm.getThread = getThread;
		vm.upvote = upvote;
		vm.downvote = downvote;
		vm.save = save;
		vm.unsave = unsave;
		vm.getComments = getComments;
		vm.openAddComment = openAddComment;
		vm.commentUpvote = commentUpvote;
		vm.commentDownvote = commentDownvote;
		vm.commentSave = commentSave;
		vm.commentUnsave = commentUnsave;
		vm.commentPage = 0;
		vm.lastUpdated = 0;
		vm.commentsFilter = '';

		function getThread() {
			var threadData = appThreads.single.get({threadId: threadId}, function() {
				vm.threads = [threadData.res.record];
				vm.isMod = threadData.res.mods.mod;
			});
		}

		function upvote (thread) {
			var obj = appThreads.single.get({threadId: thread._id}, function() {
				obj.$upvote({threadId: thread._id}, function() {
					angular.extend(thread, obj.res.record);
				});
			});
		}

		function downvote (thread) {
			var obj = appThreads.single.get({threadId: thread._id}, function() {
				obj.$downvote({threadId: thread._id}, function() {
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

		function getComments (options) {
			options = options || {};

			var commentsData = appComments.list.get({
				threadId: threadId,
				page: vm.commentPage,
				filter: vm.commentsFilter,
				timestamp: vm.lastUpdated
			}, function() {
				if (vm.commentsFilter) {
					vm.comments = [];
				}

				if (!options.append) {
					vm.comments = commentsData.res.records.concat(vm.comments);
				} else {
					vm.comments = vm.comments.concat(commentsData.res.records);
				}

				vm.noMoreComments = !commentsData.res.morePages;
				vm.lastUpdated = Date.now();
			});
		}

		var commentsFilterTimeout;
		$scope.$watch('vm.commentsFilter', function (newValue, oldValue) {
			if (!newValue !== oldValue) {
				vm.comments = [];
			}

			$timeout.cancel(commentsFilterTimeout);
			commentsFilterTimeout = $timeout(function() {
				if (!newValue) {
					if (vm.commentsFilterEnabled) {
						vm.lastUpdated = 0;
						vm.getComments();
					}
				} else {
					vm.getComments();
				}

				vm.commentsFilterEnabled = vm.commentsFilter !== '';
			}, 500);
		});

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
										//appToast('You just commented on this thread!');
										vm.getComments();
										$mdDialog.hide();
									} else {
										appToast(response.res.message);
									}
								});
							} else {
								appToast('Hmm... looks like something is missing');
							}
						};

						$scope.close = function() {
							$mdDialog.hide();
						};
					}
				],
				templateUrl: '/app/admin/threads/dialogs/create.comment.dialog.tmpl.html'
			}).finally(function() {
				vm.getComments({reload: true});
			});
		}

		function commentUpvote (item) {
			var comment = appComments.single.get({commentId: item._id}, function() {
				comment.$upvote({commentId: item._id}, function() {
					angular.extend(item, comment.res.record);
				});
			});
		}

		function commentDownvote (item) {
			var comment = appComments.single.get({commentId: item._id}, function() {
				comment.$downvote({commentId: item._id}, function() {
					angular.extend(item, comment.res.record);
				});
			});
		}

		function commentSave (item) {
			var comment = appComments.single.get({commentId: item._id}, function() {
				comment.$doSave({commentId: item._id}, function() {
					angular.extend(item, comment.res.record);
				});
			});
		}

		function commentUnsave (item) {
			var comment = appComments.single.get({commentId: item._id}, function() {
				comment.$doUnsave({commentId: item._id}, function() {
					angular.extend(item, comment.res.record);
				});
			});
		}

		getThread();
		getComments();
	}
}());