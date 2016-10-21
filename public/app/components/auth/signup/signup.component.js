class SignupFormCtrl {
	constructor($state, authService) {
		'ngInject';

		this.data = {
			name: '',
			username: '',
			email: '',
			password: ''
		};

		this._state = $state;
		this._Auth = authService;
	}

	signup(isValid) {
		if (isValid) {
			this._Auth.signup(this.data).then((response) => {
				this._state.go('app.auth.login');
			},
				(err) => {
					alert('boo, but still yay');
				}
			);
		} else {
			alert('hmm, form issue!');
		}
	}
}


let signupForm = {
	scope: {},
	controller: SignupFormCtrl,
	templateUrl: './app/components/auth/signup/signup.component.html'
};

export default signupForm;