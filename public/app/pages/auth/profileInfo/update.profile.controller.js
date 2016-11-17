class updateProfileCtrl {
	constructor($stateParams, Auth, Toast, Storage, $state) {
		'ngInject';

		this._$stateParams = $stateParams;
		this._Auth = Auth;
		this._Toast = Toast;
		this._Storage = Storage;
		this._$state = $state;
		this.userId = $stateParams.userId
		this.user = this._Auth.getUser();
	}

	skip() {
		this._$state.go('app.profile.overview', {userId: this.userId});
	}
}

export default updateProfileCtrl