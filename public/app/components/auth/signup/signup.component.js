class SignupFormCtrl {
	constructor($state, Auth, Toast) {
		'ngInject';

		this.data = {
			name: '',
			username: '',
			email: '',
			password: ''
		};

		this._state = $state;
		this._Auth = Auth;
		this._Toaster = Toast;
	}

	signup(isValid) {
		if (isValid) {
			this._Auth.signup(this.data).then((response) => {
				this._Toaster.success('Welcome to Opinionated!');
				this._state.go('app.login');
			},
				(err) => {
					this._Toast.error('boo, but still yay');
				}
			);
		} else {
			this._Toast('hmm, form issue!');
		}
	}
}


let signupForm = {
	scope: {},
	controller: SignupFormCtrl,
	templateUrl: './app/components/auth/signup/signup.component.html'
};

export default signupForm;