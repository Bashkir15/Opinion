class headerCtrl {
	constructor(Auth) {
		'ngInject';

		this._Auth = Auth;
		this.currentUser = this._Auth.getUser();
	}
}

let headerComponent = {
	scope: {},
	bindings: {
		user: '<'
	},
	controller: headerCtrl,
	templateUrl: './app/components/profile/header/profile.header.component.html'
};

export default headerComponent