class profileEditCtrl {
	constructor($mdDialog, user) {
		'ngInject';

		this._$dialog = $mdDialog;
		this.user = user;
	}

	close() {
		this._$dialog.hide();
	}
}

export default profileEditCtrl