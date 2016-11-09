class headerCtrl {
	constructor(Auth, User, $rootScope, $stateParams) {
		'ngInject';

		this._Auth = Auth;
		this._User = User;
		this._$rootScope = $rootScope;
		this._$stateParams = $stateParams;
		this.userId = $stateParams.userId;
		this._isLoggedIn = this._Auth.isLoggedIn();
		if (this._isLoggedIn) {
			this.currentUser = this._Auth.getUser();
		}

		this.checkUserFollowing();
	}

	checkUserFollowing() {
		this._User.single(this.userId).then((response) => {
			this.alreadyFollowing = response.data.res.alreadyFollowing
		});
	}

	follow(item) {
		this._User.follow(item._id).then((response) => {
			this._$rootScope.$broadcast('userFollowed');
			this.checkUserFollowing();
		});
	}

	unfollow(item) {
		this._User.unfollow(item._id).then((response) => {
			this._$rootScope.$broadcast('userUnfollowed');
			this.checkUserFollowing();
		});
	}
}

let headerComponent = {
	scope: {},
	bindings: {
		user: '<'
	},
	controller: headerCtrl,
	templateUrl: './app/components/profile/header/profile.header.component.html'
};

export default headerComponent