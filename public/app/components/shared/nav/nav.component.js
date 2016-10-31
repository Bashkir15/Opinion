class navCtrl {
	constructor($mdSidenav) {
		'ngInject';

		this._$sidenav = $mdSidenav
	}

	openUserMenu() {
		this._$sidenav('user-menu').toggle();
	} 
}

let appNav = {
	controller: navCtrl,
	templateUrl: './app/components/shared/nav/nav.html'
};

export default appNav