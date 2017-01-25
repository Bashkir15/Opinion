class editCommentCtrl {
	constructor(Comment, $mdDialog, item) {
		'ngInject';

		this._$dialog = $mdDialog;
		this._Comment = Comment;
		this._item = item;
		this.getComment();
	}

	getComment() {
		this._Comment.single(this._item._id).then((response) => {
			this.comment = response.data.res.record;
		});
	}

	close() {
		this._$dialog.hide();
	}
}

export default editCommentCtrl