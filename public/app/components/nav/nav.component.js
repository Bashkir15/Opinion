class navCtrl {
	constructor(authService, $mdSidenav) {
		this.name = 'nav';
		this._Auth = authService;
		this.isLoggedIn = this._Auth.isLoggedIn();
		this._$sidenav = $mdSidenav
	}

	openUserMenu() {
		this._$sidenav('user-menu').toggle();
	}
}

let appNav = {
	controller: navCtrl,
	templateUrl: './app/components/nav/nav.html'
};

export default appNav