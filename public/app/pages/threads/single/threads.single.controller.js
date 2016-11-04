class threadsSingleCtrl {
	constructor(Thread, Comment, $stateParams, $rootScope) {
		'ngInject';

		this._Thread = Thread;
		this._Comment = Comment;
		this._$rootScope = $rootScope;
		this.streamName = $stateParams.streamName;
		this.threadId = $stateParams.threadId;
		this.comments = [];
		this.getThread();
		this.getComments();

		this._$rootScope.$on('commentCreated', () => {
			this.showCreate = !this.showCreate;
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

		this._Comment.get(this.threadId, options).then((response) => {
			console.log(response);
			
			if (!options.append) {
				this.comments = response.data.res.records.concat(this.comments);
			} else {
				this.comments = this.comments.concat(response.data.res.records);
			}
		});
	}
}

export default threadsSingleCtrl