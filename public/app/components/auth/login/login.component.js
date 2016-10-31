class LoginCtrl {
	constructor($state, Auth, Toast) {
		'ngInject';

		this._Auth = Auth;
		this._Toast = Toast;

	}

	login(isValid) {
		if (isValid) {
			this._Auth.login(this.data).then((response) => {
				this._Toast.success('Welcome back');
			},
				(err) => {
					this._Toast.error(response.res.message);
				}
			);
		} else {
			alert('hmm, form issue!');
		}
	}
}


let loginForm = {
	scope: {},
	controller: LoginCtrl,
	templateUrl: './app/components/auth/login/login.component.html'
};

export default loginForm