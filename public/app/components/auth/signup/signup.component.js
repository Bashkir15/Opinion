class SignupFormCtrl {
	constructor($state, Auth, Toast, Storage, $rootScope) {
		'ngInject';

		this.data = {
			name: '',
			username: '',
			email: '',
			password: ''
		};

		this._state = $state;
		this._Auth = Auth;
		this._Toast = Toast;
		this._Storage = Storage
		this._$rootScope = $rootScope;
	}

	signup(isValid) {
		if (isValid) {
			this._Auth.signup(this.data).then((response) => {
				this._Toast.success('Welcome to Opinionated! ' + response.data.res.record.username);
				this.postSignup(response.data.res.record, response.data.res.token);
				this._$rootScope.$broadcast('signedUp');
			},
				(err) => {
					this._Toast.error('boo, but still yay');
				}
			);
		} else {
			this._Toast.error('hmm, form issue!');
		}
	}

	postSignup(user, token) {
		var serialized = angular.toJson(user);
		this._Storage.set('user', serialized);
		this._Storage.set('opinion-token', token);
		this._state.go('app.updateProfile', {userId: user._id});
	}
}


let signupForm = {
	scope: {},
	controller: SignupFormCtrl,
	templateUrl: './app/components/auth/signup/signup.component.html'
};

export default signupForm;