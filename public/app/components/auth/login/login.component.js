class LoginFormCtrl {
	constructor(authService, Storage) {
		'ngInject';

		this.data = {
			email: '',
			password: ''
		};
		
		this._Storage = Storage
		this._Auth = authService;
	}

	login(isValid) {
		if (isValid) {
			this._Auth.login(this.data).then((response) => {
				alert('yay');
			},
				(err) => {
					alert('boo, but still yay');
				}
			);
		} else {
			alert('hmm, form issue!');
		}
	}

	tester() {
		this._Auth.test().then((response) => {
			alert('meow');
		},
			(err) => {
				alert('blah');
			}
		);
	}
}


let loginForm = {
	scope: {},
	controller: LoginFormCtrl,
	templateUrl: './app/components/auth/login/login.component.html'
};

export default loginForm;