class ProfileCommentsCtrl {
	constructor(Comment, $stateParams, $timeout, $rootScope) {
		'ngInject';

		this._Comment = Comment;
		this._$stateParams = $stateParams;
		this._userId = this._$stateParams.userId;
		this._$timeout = $timeout;
		this._$rootScope = $rootScope;
		this.comments = [];

		this.lastUpdated = 0;
		this.commentsPage = 0;

		this.getComments();
	}

	getComments(options) {
		options = options || {};
		options.timestamp = this.lastUpdated;
		options.page = this.commentsPage;

		this._Comment.userComments(this._userId, options).then((response) => {
			
			if (!options.append) {
				this.comments = response.data.res.records.concat(this.comments);
			} else {
				this.comments = this.comments.concat(response.data.res.records);
			}

			this.lastUpdated = Date.now();
			this.noMoreComments = !response.data.res.morePages;
		});
	}

	loadMore() {
		this.commentsPage++;
		this.lastUpdated = 0;
		this.getComments({
			append: true
		});
	}
}

export default ProfileCommentsCtrl