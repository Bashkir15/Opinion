class LoginCtrl {
	constructor($state, $mdDialog, Auth, Toast, Storage, Websocket) {
		'ngInject';

		this._Auth = Auth;
		this._Toast = Toast;
		this._Storage = Storage;
		this._$state = $state;
		this._$dialog = $mdDialog;
		this._Websocket = Websocket;
		this.data = {
			email: '',
			password: ''
		};

		this.checkRemember();

	}

	checkRemember() {
		var storedEmail = this._Storage.get('userEmail');

		if (storedEmail) {
			this.data.email = atob(storedEmail);
			this.isRemembered = true;
		} else {
			this.data.email = '';
		}
	}

	login(isValid) {
		this.isLoading = true;

		if (isValid) {
			if (typeof this.remember !== 'undefined') {
				let rememberEmail = btoa(this.data.email);
				this._Storage.set('userEmail', rememberEmail);
			}

			if (typeof this.forget !== 'undefined') {
				this._Storage.remove('userEmail');
			}

			this._Auth.login(this.data).then((response) => {
				 if (response.data.success) {
				 	this.postLogin(response);
					this._Toast.success('Welcome back ' + response.data.res.record.username);
				} else {
					this._Toast.error(response.data.res.message);
				} 
			});
		} else {
			this._Toast.error('hmm, form issue!');
		}
	}

	postLogin(response) {
		let user = response.data.res.record;
		let serializedUser = angular.toJson(user);
		this._Storage.set('user', serializedUser);
		this._Storage.set('opinion-token', response.data.res.token);
		this._Websocket.online(response.data.res.record._id);
		this._$state.go('app.home', {}, {reload: true});
	}

	openPasswordReset() {
		this._$dialog.show({
			controller: 'PasswordResetController',
			controllerAs: '$ctrl',
			templateUrl: './app/pages/auth/reset/reset.html'
		});
	}
}


let loginForm = {
	scope: {},
	controller: LoginCtrl,
	templateUrl: './app/components/auth/login/login.component.html'
};

export default loginForm