class editCommentCtrl {
	constructor(Comment, $mdDialog) {
		'ngInject';

		this._$dialog = $mdDialog;
		this._Comment = Comment;
	}

	edit(isValid) {
		if (isValid) {
			
			this.data = {
				content: this.comment.content
			};

			this._Comment.modify(this.comment._id, this.data).then((response) => {
				this._$dialog.hide();
			});
		}
	}
}


let editComment = {
	scope: {},
	bindings: {
		comment: '='
	},
	controller: editCommentCtrl,
	templateUrl: './app/components/forum/comments/edit/edit.html'
};

export default editComment