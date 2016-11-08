class profileCtrl {
	constructor(User, Auth, Thread, $stateParams) {
		'ngInject';

		this._User = User;
		this._Auth = Auth;
		this._Thread = Thread;
		this._$stateParams = $stateParams;
		this._userId = $stateParams.userId;

		this.currentUser = this._Auth.getUser();
		this.getUser();
	}

	getUser() {
		this._User.single(this._userId).then((response) => {
			this.user = response.data.res.record;
		});
	}
}

export default profileCtrl