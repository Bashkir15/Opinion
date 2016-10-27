class commentsCreateCtrl {
	constructor(commentsService, $stateParams) {
		this._Comment = commentsService;
		this.threadId = $stateParams.threadId;
		this.data = {
			content: '',
			thread: this.threadId
		};
	}

	create(isValid) {
		if (isValid) {
			this._Comment.create(this.data).then((response) => {
				alert('yay');
			}, (err) => {
				alert('boo');
			});
		} else {
			alert('man');
		}
	}
}

let commentsCreate = {
	scope: {},
	controller: commentsCreateCtrl,
	templateUrl: './app/components/comments/create/create.html'
};

export default commentsCreate