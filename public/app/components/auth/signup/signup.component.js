class SignupFormCtrl {
	constructor($state, Auth, Toast, Storage, $rootScope, Websocket) {
		'ngInject';

		this.data = {
			name: '',
			username: '',
			email: '',
			password: ''
		};

		this._state = $state;
		this._Auth = Auth;
		this._Toast = Toast;
		this._Storage = Storage
		this._$rootScope = $rootScope;
		this._Websocket = Websocket;
	}

	signup(isValid) {
		if (isValid) {
			this._Auth.signup(this.data).then((response) => {
				console.log('meow');
				if (response.data.success) {
					console.log('yay');
					this._Toast.success(`Welcome to Opinionated! ${response.data.res.record.username}`)
					this.postSignup(response);
				} else {
					this._Toast.error('boo, but still yay');
				}
			});
		} else {
			this._Toast.error('hmm, form issue!');
		}
	}

	postSignup(response) {
		var serialized = angular.toJson(response.data.res.record);
		this._Storage.set('user', serialized);
		this._Storage.set('opinion-token', response.data.res.token);
		//this._Websocket.online(response.data.res.record._id);
		this._state.go('app.updateProfile', {userId: response.data.res.record._id}, {reload: true});
	}
}


let signupForm = {
	scope: {},
	controller: SignupFormCtrl,
	templateUrl: './app/components/auth/signup/signup.component.html'
};

export default signupForm;