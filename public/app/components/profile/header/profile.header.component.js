class headerCtrl {
	constructor(Auth, User, Chat, Toast, $rootScope, $stateParams, $mdDialog) {
		'ngInject';

		this._Auth = Auth;
		this._User = User;
		this._Chat = Chat;
		this._Toast = Toast;
		this._$rootScope = $rootScope;
		this._$stateParams = $stateParams;
		this._$dialog = $mdDialog;
		this.userId = $stateParams.userId;
		this._isLoggedIn = this._Auth.isLoggedIn();
		if (this._isLoggedIn) {
			this.currentUser = this._Auth.getUser();
		}

		this.checkUserFollowing();
	}

	checkUserFollowing() {
		this._User.single(this.userId).then((response) => {
			this.user = response.data.res.record;
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

	message(item) {
		var data = {
			participants: [
				this.userId,
				this.currentUser._id
			]
		};

		this._Chat.create(data).then((response) => {
			this._$dialog.show({
				templateUrl: './app/pages/profile/dialogs/message/message.html',
				controller: 'ProfileMessageController',
				controllerAs: '$ctrl',
				clickOutsideToClose: true,
				locals: {
					message: response.data.res.record,
					user: this.user
				}
			});
		});
	}

	openEditProfile(item) {
		this._$dialog.show({
			templateUrl: './app/pages/profile/dialogs/edit/profile.edit.html',
			controller: 'ProfileEditController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true,
			locals: {
				user: this.user
			}
		});
	}

	resetPassword() {
		this._$dialog.show({
			templateUrl: './app/pages/profile/dialogs/reset/reset.html',
			controller: 'ProfileResetController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true,
			locals: {
				user: this.user
			}
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