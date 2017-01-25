class passwordReset {
	constructor($state, $mdDialog, Auth, Toast) {
		'ngInject';

		this._$state = $state;
		this._$dialog = $mdDialog;
		this._Auth = Auth;
		this._Toast = Toast;

		this.data = {
			email: '',
			token: '',
			password: ''
		};
	}

	close() {
		this._$dialog.hide();
	}

	generateReset() {
		this._Auth.forgot(this.data).then((response) => {
			if (response) {
				this.tokenSent = true;
				this._Toast.success('Great! Check your email for futher instructions');
			} else {
				this._Toast.error(response.data.res.message);
			}
		});
	}

	attemptReset() {
		this._Auth.reset(this.data).then((response) => {
			if (response) {
				this._Toast.success('Hooray! Now you can login');
				this._$dialog.hide();
			} else {
				this._Toast.error(response.data.res.error);
			}
		});
	}
}

export default passwordReset