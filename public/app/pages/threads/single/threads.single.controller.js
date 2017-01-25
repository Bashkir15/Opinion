class threadsSingleCtrl {
	constructor(Thread, Comment, $stateParams, $rootScope, $mdDialog, $timeout) {
		'ngInject';

		this._Thread = Thread;
		this._Comment = Comment;
		this._$rootScope = $rootScope;
		this._$dialog = $mdDialog;
		this._$timeout = $timeout;
		this.streamId = $stateParams.streamId;
		this.threadId = $stateParams.threadId;
		this.comments = [];
		this.commentPage = 0;
		this.commentsSearch = '';
		this.lastUpdated = 0;
		this.getThread();
		this.getComments();

		this._$rootScope.$on('commentCreated', () => {
			this._$dialog.hide();
			this.getComments({
				append: true
			});
		});
	}

	getThread() {
		this._Thread.single(this.threadId).then((response) => {
			this.thread = response.data.res.record;
		});
	}

	getComments(options) {
		options = options || {};
		options.filter = this.commentsSearch;
		options.timestamp = this.lastUpdated;
		options.page = this.commentPage;

		this._Comment.get(this.threadId, options).then((response) => {
			if (this.commentsSearch) {
				this.comments = [];
			}
			
			if (!options.append) {
				this.comments = response.data.res.records.concat(this.comments);
			} else {
				this.comments = this.comments.concat(response.data.res.records);
			}

			this.noMoreComments = !response.data.res.morePages;
			this.lastUpdated = Date.now();
		});
	}

	loadMore() {
		this.commentPage++;
		this.lastUpdated = 0;
		this.getComments({
			append: true
		});
	}

	search(newValue, oldValue) {
		var commentsSearchTimeout;

		if (newValue != oldValue) {
			this.comments = [];
		}

		this._$timeout.cancel(commentsSearchTimeout);
		commentsSearchTimeout = this._$timeout(() => {
			if (!newValue) {
				if (this.commentsSearchEnabled) {
					this.lastUpdated = 0;
					this.getComments();
				}
			} else {
				this.getComments();
			}

			this.commentsSearchEnabled = this.commentsSearch !== '';
		}, 500);
	}
}

export default threadsSingleCtrl