class passwordReset {
	constructor($state, $mdDialog, Auth, Toast) {
		'ngInject';

		this._$state = $state;
		this._$dialog = $mdDialog;
		this._Auth = Auth;
		this._Toast = Toast;

		this.resetEmail = '';
		this.data = {
			token: '',
			password: ''
		};
	}

	close() {
		this._$dialog.hide();
	}

	generateReset() {
		this._Auth.forgot(this.data.email).then((response) => {
			if (response.data.res.success) {
				this.tokenSent = true;
				this._Toast.success('Great! Check your email for futher instructions');
			} else {
				this._Toast.error(response.data.res.message);
			}
		});
	}

	attemptReset() {
		this._Auth.reset(this.data).then((response) => {
			if (response.data.res.success) {
				this._Toast.success('Hooray! Now you can login');
				this.close();
			} else {
				this._Toast.error(response.data.res.error);
			}
		});
	}
}

export passwordReset