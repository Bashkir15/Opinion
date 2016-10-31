class Toast {
	constructor($mdToast) {
		'ngInject';

		this._Toast = $mdToast;
	}

	success(message) {
		var toast = this._Toast.simple()
			.content(message)
			.action('OK')
			.highlightAction(false)
			.position('bottom right')
			.theme('success-toast');
		this._Toast.show(toast);
	}

	error(message) {
		var toast = this._Toast.simple()
			.content(message)
			.action('OK')
			.highlightAction(false)
			.position('bottom right')
			.theme('error-toast');
		this._Toast.show(toast)
	}
}

export default Toast