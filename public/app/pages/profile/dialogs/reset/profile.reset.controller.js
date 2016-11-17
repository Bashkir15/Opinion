class profileResetCtrl {
	constructor(User, Toast, $mdDialog, user) {
		'ngInject';

		this._User = User;
		this._Toast = Toast;
		this._$dialog = $mdDialog;
		this.user = user;

		this.data = {
			password: '',
			newPassword: '',
			confirm: ''
		};
	}

	close() {
		this._$dialog.hide();
	}

	resetPassword(isValid) {
		if (isValid) {
			this._User.profileReset(this.user._id, this.data).then((response) => {
					this.resetForm();
					this._Toast.success('You have just reset your password, ' + response.data.res.record.username);
					this._$dialog.hide();
			});
		} else {
			this._Toast.error("Hmm, your form is not valid");
		}
	}

	resetForm() {
		this.resetPasswordForm.$setUntouched();
		this.resetPasswordForm.$setPristine();
	}
}

export default profileResetCtrl