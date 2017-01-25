class deleteCommentCtrl {
	constructor(Comment, $state, $mdDialog, item) {
		'ngInject';

		this._$dialog = $mdDialog;
		this._$state = $state;
		this._Comment = Comment;
		this._item = item;
	}

	close() {
		this._$dialog.hide();
	}

	delete() {
		this._Comment.remove(this._item._id).then((response) => {
			this._$dialog.hide();
			this._$state.reload();
		});
	}
}

export default deleteCommentCtrl