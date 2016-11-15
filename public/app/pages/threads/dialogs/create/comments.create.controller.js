class createCommentsCtrl {
	constructor($mdDialog) {
		'ngInject';

		this._$dialog = $mdDialog;
	}

	close() {
		this._$dialog.hide();
	}
}

export default createCommentsCtrl