class HomeCtrl {
	constructor(Thread, Auth) {
		'ngInject';

		this._Thread = Thread;
		this._Auth = Auth;
		this._isLoggedIn = this._Auth.isLoggedIn();
		this.getHome();
	}

	getHome() {
		if (this._isLoggedIn) {
			this._Thread.home().then((response) => {
				console.log(response);
			});
		}
	}


}

export default HomeCtrl