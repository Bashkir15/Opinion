(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ThreadController', ThreadController);

	/* @ngInject */
	function ThreadController ($scope, $state, $stateParams, $mdDialog, $location, $timeout, appAuth, appThreads, appComments, appToast) {
		var vm = this;
		var streamId = $stateParams.streamId;
		var threadId = $stateParams.threadId;
		vm.getCurrentUser = getCurrentUser();
		vm.currentUserId = '';
		vm.threads = [];
		vm.comments = [];
		vm.getThread = getThread;
		vm.openDeleteThread = openDeleteThread;
		vm.upvote = upvote;
		vm.downvote = downvote;
		vm.save = save;
		vm.unsave = unsave;
		vm.getComments = getComments;
		vm.loadMore = loadMore;
		vm.openAddComment = openAddComment;
		vm.openDeleteComment = openDeleteComment;
		vm.commentUpvote = commentUpvote;
		vm.commentDownvote = commentDownvote;
		vm.commentSave = commentSave;
		vm.commentUnsave = commentUnsave;
		vm.commentPage = 0;
		vm.lastUpdated = 0;
		vm.commentsFilter = '';
		vm.orderByDate = orderByDate;
		vm.orderByScore = orderByScore;
		vm.orderBySaves = orderBySaves;

		function getCurrentUser() {
			if (appAuth.isLoggedIn()) {
				vm.currentUserId = appAuth.getUser()._id;
			} else {
				vm.currentUserId = '';
			}
		}

		function getThread() {
			var threadName;

			var threadData = appThreads.single.get({threadId: threadId}, function() {
				vm.threads = [threadData.res.record];
				vm.isMod = threadData.res.isMod;
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

		function loadMore() {
			vm.commentPage++;
			vm.lastUpdated = 0;
			vm.getComments({append: true});
		}

		function openDeleteThread () {
			$mdDialog.show({
				controller: [
					'$scope',
					'$mdDialog',
					function ($scope, $mdDialog) {
						$scope.close = function() {
							$mdDialog.hide();
							appToast.success('Phew, that was a close one');
							vm.showMod = !vm.showMod;
						};

						$scope.getThread = function() {
							appThreads.single.get({threadId: threadId}).$promise.then(function (response) {
								response.res.thread = response.res.record;
								angular.extend($scope, response.res);
							});
						};

						$scope.confirm = function() {
							var thread = appThreads.single.get({threadId: threadId}, function() {
								thread.$destroy({threadId: threadId}, function (response) {
									if (response.success) {
										$mdDialog.hide();
										$location.url('streams/' + streamId);
										appToast.error('You have just deleted your thread');
									} else {
										appToast.error(response.res.message);
									}
								});
							});
						};

						$scope.getThread();
					}
				],
				templateUrl: '/app/admin/threads/dialogs/delete.thread.dialog.tmpl.html'
			}).finally(function() {

			});
		}

		function openDeleteComment (item) {
			$mdDialog.show({
				controller: [
					'$scope',
					'$mdDialog',
					function ($scope, $mdDialog) {
						$scope.close = function() {
							$mdDialog.hide();
							appToast.success('Phew, that was a close one');
						};

						$scope.getComment = function() {
							appComments.single.get({commentId: item._id}).$promise.then(function (response) {
								response.res.comment = response.res.record;
								angular.extend($scope, response.res);
							});
						};
						$scope.confirm = function(comment) {
							var comment = appComments.single.get({commentId: item._id}, function() {
								comment.$destroy({commentId: item._id}, function(response) {
									if (response.success) {
										$mdDialog.hide();
										$state.reload();
										appToast.error('You have deleted your comment');
									} else {
										appToast.error(response.res.message);
									}
								});
							});
						};

						$scope.getComment();
					}
				],
				templateUrl: '/app/admin/comments/dialogs/delete.comment.dialog.tmpl.html'
			}).finally(function() {
				vm.getComment();
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
										appToast.success('You just commented on this thread!');
										vm.getComments();
										$mdDialog.hide();
									} else {
										appToast.error(response.res.message);
									}
								});
							} else {
								appToast.error('Hmm... looks like something is missing');
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

		getCurrentUser();
		getThread();
		getComments();
	}
}());