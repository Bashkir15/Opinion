class updateProfileCtrl {
	constructor(Auth, Toast, $state, $rootScope, Upload) {
		'ngInject';

		this._Auth = Auth;
		this._Toast = Toast;
		this._$state = $state;
		this._$rootScope = $rootScope;
		this._Upload = Upload;
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

	uploadImage(file) {
		if (file) {
			this._Upload.upload({
				url: '/users/uploadPicture/' + this.user._id,
				file: file
			}).progress(function (evt) {
				this.progressPercentage = parseInt(100 * evt.loaded / evt.total);
			}).success((data, status, headers, config) => {
				this._Toast.success('Your photo has been uploaded');
				this.uploaded = true;
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