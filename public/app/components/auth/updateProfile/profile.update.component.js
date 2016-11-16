class updateProfileCtrl {
	constructor(Auth, Toast, $state, $rootScope) {
		'ngInject';

		this._Auth = Auth;
		this._Toast = Toast;
		this._$state = $state;
		this._$rootScope = $rootScope;
		this.data = {
			gender: '' || this.user.gender,
			phone: '' || this.user.phone,
			occupation: '' || this.user.occupation,
			interests: '' || this.user.interests,
			bio: '' || this.user.bio
		};

	}


	updateProfile(isValid) {
		if (isValid) {
			this._Auth.updateProfile(this.user._id, this.data).then((response) => {

					this._Toast.success('You have updated your profile!');
					this._$rootScope.$broadcast('profileUpdated');
					this._$state.go("app.profile.overview", {userId: this.user._id})
			});
		}
	}
}

let updateProfile = {
	scope: {},
	bindings: {
		user: '<'
	},
	controller: updateProfileCtrl,
	templateUrl: './app/components/auth/updateProfile/update.profile.html'
};

export default updateProfile