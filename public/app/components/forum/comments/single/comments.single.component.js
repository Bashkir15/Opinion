class commentsSingleCtrl {
	constructor(Auth, Comment, Thread, $stateParams, $state) {
		'ngInject';

		this._Auth = Auth;
		this._Comment = Comment;
		this._Thread = Thread;
		this._$state = $state;
		this.currentUser = this._Auth.getUser()._id;
		this._$stateParams = $stateParams;
		this._threadId = $stateParams.threadId;

		this.getThread();
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

	delete(item) {
		this._Comment.remove(item._id).then((response) => {
			history.go(-1);
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