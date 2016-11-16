class updateProfileCtrl {
	constructor($stateParams, Auth, Toast, Storage) {
		'ngInject';

		this._$stateParams = $stateParams;
		this._Auth = Auth;
		this._Toast = Toast;
		this._Storage = Storage;
		this.userId = $stateParams.userId
		this.user = this._Auth.getUser();
	}
}

export default updateProfileCtrl