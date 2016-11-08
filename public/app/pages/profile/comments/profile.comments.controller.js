class ProfileCommentsCtrl {
	constructor(Comment, $stateParams) {
		'ngInject';

		this._Comment = Comment;
		this._$stateParams = $stateParams;
		this._userId = this._$stateParams.userId;

		this.lastUpdated = 0;
		this.commentsSearch = '';
		this.commentsPage = 0;

		this.getComments();
	}

	getComments(options) {
		options = options || {};
		options.filter = this.commentsSearch;
		options.timestamp = this.lastUpdated;
		options.page = this.commentsPage;

		this._Comment.userComments(this._userId, options).then((response) => {
			if (this.commentsSearch) {
				this.comments = [];
			}

			console.log(response);
			
			if (!options.append) {
				this.comments = response.data.res.records.concat(this.comments);
			} else {
				this.comments = this.comments.concat(response.data.res.records);
			}

			this.lastUpdated = Date.now();
			this.noMoreComments = !response.data.res.morePages;
		});
	}
}

export default ProfileCommentsCtrl