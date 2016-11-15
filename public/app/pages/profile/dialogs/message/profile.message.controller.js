class ProfileMessageCtrl {
	constructor(Chat, Toast, Auth, $mdDialog, message, user) {
		'ngInject';

		this._Chat = Chat;
		this._Toast = Toast;
		this._Auth = Auth;
		this._$dialog = $mdDialog;
		this._message = message;
		this.user = user;
		this.data = {
			message: '',
			creator: this._Auth.getUser()._Id,
			chatId: this._message._id

		};
	}

	close() {
		this._$dialog.hide();
	}

	sendMessage(isValid) {
		if (isValid) {
			this._Chat.message(this._message._id, this.data).then((response) => {
				this._Toast.success('chat sent to ' + this.user.username);
				this._$dialog.hide();
			});
		}
	}
}

export default ProfileMessageCtrl