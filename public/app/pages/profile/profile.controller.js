class profileCtrl {
	constructor(User, Auth, Thread, $stateParams, $state, $rootScope) {
		'ngInject';

		this._User = User;
		this._Auth = Auth;
		this._Thread = Thread;
		this._$stateParams = $stateParams;
		this._$rootScope = $rootScope;
		this._userId = $stateParams.userId;
		this._$state = $state;
		this.currentState = this._$state.current.name;

		this.currentUser = this._Auth.getUser();
		this.getUser();

		this._$rootScope.$on('userFollowed', () => {
			this.getUser();
		});

		this._$rootScope.$on('userUnfollowed', () => {
			this.getUser();
		});
	}

	getUser() {
		this._User.single(this._userId).then((response) => {
			this.user = response.data.res.record;
			this.followers = response.data.res.followers;
			this.alreadyFollowing = response.data.res.alreadyFollowing;
		});
	}
}

export default profileCtrl