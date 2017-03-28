class commentsSingleCtrl {
	constructor(Auth, Comment, Thread, $stateParams, $state, $mdDialog) {
		'ngInject';

		this._Auth = Auth;
		this._Comment = Comment;
		this._Thread = Thread;
		this._$state = $state;
		this._isLoggedIn = this._Auth.isLoggedIn();
		this._$stateParams = $stateParams;
		this._$dialog = $mdDialog;
		this._threadId = $stateParams.threadId;

		if (this._isLoggedIn) {
			this.currentUser = this._Auth.getUser()._id;
		}

		
		if (this._threadId) {
			this.getThread();
		}		
	}

	getThread() {
		this._Thread.single(this._threadId).then((response) => {
			response.data.res.record.stream.moderators.forEach((moderator) => {
				if (this.currentUser == moderator) {
					this.moderator = true;
				}
			});
		});
	}

	like(item) {
		this._Comment.like(item._id).then((response) => {
			angular.extend(item, response.data.res.record);
		});
	}

	dislike(item) {
		this._Comment.dislike(item._id).then((response) => {
			angular.extend(item, response.data.res.record);
		});
	}

	toggleSave(item) {
		if (!item.saved) {
			this._Comment.save(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		} else {
			this._Comment.unsave(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		}
	}

	openEditComment(item) {
		this._$dialog.show({
			templateUrl: './app/pages/threads/dialogs/edit/edit.comment.html',
			controller: 'EditCommentController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true,
			locals: {
				item: item
			}
		});
	}

	openDeleteComment(item) {
		this._$dialog.show({
			templateUrl: './app/pages/threads/dialogs/delete/delete.comment.html',
			controller: 'DeleteCommentController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true,
			locals: {
				item: item
			}
		});
	}
}

let singleComment = {
	scope: {},
	bindings: {
		comment: '<'
	},
	controller: commentsSingleCtrl,
	templateUrl: './app/components/forum/comments/single/comments.single.component.html'
};

export default singleComment