class SignupFormCtrl {
	constructor(authService) {
		'ngInject';

		this.data = {};
		this._Auth = authService;
	}

	signup(isValid) {
		if (isValid) {
			this._Auth.signup(this.data).then((response) => {
				alert('yay!');
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