class profileCtrl {
	constructor(User, Auth, $stateParams) {
		'ngInject';

		this._User = User;
		this._Auth = Auth;
		this._$stateParams = $stateParams;
		this._username = $stateParams.username;

		this.currentUser = this._Auth.getUser();
		this.getUser();
	}

	getUser() {
		this._User.single(this._username).then((response) => {
			this.user = response.data.res.record;
		});
	}
}

export default profileCtrl