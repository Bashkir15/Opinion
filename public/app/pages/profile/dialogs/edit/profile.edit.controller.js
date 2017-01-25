class profileEditCtrl {
	constructor($mdDialog, user, $rootScope, $state) {
		'ngInject';

		this._$dialog = $mdDialog;
		this._$rootScope = $rootScope;
		this._$state = $state;
		this.user = user;

		this._$rootScope.$on('profileUpdated', () => {
			this._$dialog.hide();
		});
	}

	close() {
		this._$dialog.hide();
	}
}

export default profileEditCtrl