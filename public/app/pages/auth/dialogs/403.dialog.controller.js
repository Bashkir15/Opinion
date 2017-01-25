class authUnauthedCtrl {
	constructor($mdDialog, $rootScope) {
		'ngInject';

		this._$dialog = $mdDialog;
		this._$rootScope = $rootScope;

		this._$rootScope.$on('loggedIn', () => {
			this._$dialog.hide();
		});

		this._$rootScope.$on('signedUp', () => {
			this._$dialog.hide();
		});
	}

	close() {
		this._$dialog.hide();
	}
}

export default authUnauthedCtrl