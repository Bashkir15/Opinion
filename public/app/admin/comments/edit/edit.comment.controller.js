(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('EditCommentController', EditCommentController);

	/* @ngInject */
	function EditCommentController ($state, $stateParams, $scope, $location, appThreads, appComments, appToast) {
		var vm = this;
		var threadId = $stateParams.threadId;
		var commentId = $stateParams.commentId;
		vm.edit = edit;
		vm.getComment = getComment;

		function edit (isValid) {
			if (isValid) {
				var comment = appComments.single.get({commentId: commentId}, function() {
					comment.content = vm.comment.content;

					comment.$modify({commentId: commentId}, function (response) {
						if (response.success) {
							appToast.success('You just edited your comment!');
							window.history.go(-1);
						} else {
							appToast.error(response.res.message);
						}
					});
				});
			} else {
				appToast.error('Hmm, something seems to be missing');
			}
		}

		function getComment() {
			var commentData = appComments.single.get({commentId: commentId}, function() {
				vm.comment = commentData.res.record;
				vm.comment.content = commentData.res.record.content;
			});
		}

		getComment();
	}
}());