class createCommentCtrl {
	constructor(Comment, Toast, $stateParams, $rootScope) {
		'ngInject';

		this._Comment = Comment;
		this._Toast = Toast;
		this.threadId = $stateParams.threadId;
		this._$rootScope = $rootScope;
		this.data = {
			content: '',
			thread: this.threadId
		};
	}

	create(isValid) {
		if (isValid) {
			this._Comment.create(this.data).then((response) => {
				if (response.data.success) {
					this._Toast.success('You created a new comment');
					this._$rootScope.$broadcast('commentCreated');
					this.clearForm();
				} else {
					this._Toast.error(response.data.res.message);
				}
			});
		} else {
			this._Toast.error('Your form is not valid');
		}
	}

	clearForm() {
		this.createComment.$setPristine();
		this.createComment.$setUntouched();
		this.data.content = '';
	}
}

let createComment = {
	scope: {},
	templateUrl: './app/components/forum/comments/create/comments.create.component.html',
	controller: createCommentCtrl
};

export default createComment