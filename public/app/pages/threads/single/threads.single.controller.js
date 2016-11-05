class threadsSingleCtrl {
	constructor(Thread, Comment, $stateParams, $rootScope, $mdDialog) {
		'ngInject';

		this._Thread = Thread;
		this._Comment = Comment;
		this._$rootScope = $rootScope;
		this._$dialog = $mdDialog;
		this.streamId = $stateParams.streamId;
		this.threadId = $stateParams.threadId;
		this.comments = [];
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