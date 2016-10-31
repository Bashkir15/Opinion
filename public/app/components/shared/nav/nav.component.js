class navCtrl {
	constructor(Auth, $mdSidenav) {
		'ngInject';

		this._$sidenav = $mdSidenav;
		this._Auth = Auth;
		this.isLoggedIn = this._Auth.isLoggedIn();
		this.getUserInfo();
	}

	openUserMenu() {
		this._$sidenav('user-menu').toggle();
	}

	getUserInfo() {
		this.user = this._Auth.getUser();
	} 
}

let appNav = {
	controller: navCtrl,
	templateUrl: './app/components/shared/nav/nav.html'
};

export default appNav