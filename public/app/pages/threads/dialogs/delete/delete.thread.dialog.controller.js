class DeleteThreadCtrl {
	constructor(Thread, $state, $mdDialog, item) {
		'ngInject';

		this._$dialog = $mdDialog;
		this._$state = $state;
		this._Thread = Thread;
		this._item = item;
	}

	close() {
		this._$dialog.hide();
	}

	delete() {
		this._Thread.remove(this._item._id).then((response) => {
			this._$dialog.hide();
			this._$state.reload();
		});
	}
}

export default DeleteThreadCtrl