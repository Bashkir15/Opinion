(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('EditCommentController', EditCommentController);

	/* @ngInject */
	function EditCommentController ($state, $stateParams, $scope, $location, appThreads, appComments) {
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
							alert('yay');
							window.history.go(-1);
						} else {
							alert(response.res.message);
						}
					});
				});
			} else {
				alert('poop');
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