class ProfileSavedCtrl {
	constructor(Thread, Comment, $stateParams) {
		'ngInject';

		this._Thread = Thread;
		this._Comment =Comment;
		this._$stateParams = $stateParams;
		this._userId = this._$stateParams.userId;

		this.lastThreadUpdated = 0;
		this.threadSearch = '';
		this.threadPage = 0;

		this.lastCommentUpdated = 0;
		this.commentsSearch = '';
		this.commentPage = 0;

		this.getThreads();
		this.getComments();
	}

	getThreads(options) {
		options = options || {};
		options.timestamp = this.lastThreadUpdated;
		options.page = this.threadPage;
		options.filter = this.threadSearch;

		this._Thread.userSaved(this._userId, options).then((response) => {
			if (this.threadSearch) {
				this.threads = [];
			}

			if (!options.append) {
				this.threads = response.data.res.records.concat(this.threads);
			} else {
				this.threads = this.threads.concat(response.data.res.records);
			}

			this.lastThreadUpdated = Date.now();
			this.noMoreThreads = !response.data.res.morePages;
		});
	}

	getComments(options) {
		options = options || {};
		options.timestamp = this.lastCommentUpdated;
		options.page = this.commentPage;
		options.filter = this.commentsSearch;

		this._Comment.userSaved(this._userId, options).then((response) => {
			if (this.commentsSearch) {
				this.comments = [];
			}

			if (!options.append) {
				this.comments = response.data.res.records.concat(this.comments);
			} else {
				this.comments = this.comments.concat(response.data.res.records);
			}

			this.lastCommentUpdated = Date.now();
			this.noMoreComments = !response.data.res.morePages;
		});
	}
}

export default ProfileSavedCtrl