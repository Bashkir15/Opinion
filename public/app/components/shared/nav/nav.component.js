class navCtrl {
	constructor(Auth,Storage, Stream, $mdSidenav, $state, $rootScope) {
		'ngInject';

		this._$sidenav = $mdSidenav;
		this._Auth = Auth;
		this._Storage = Storage;
		this._Stream = Stream;
		this._$state = $state;
		this._$rootScope = $rootScope
		this.isLoggedIn = this._Auth.isLoggedIn();
		this.getUserInfo();

		this._$rootScope.$on('$stateChangeStart', () => {
			this._$sidenav('user-menu').close();
		});

		this.getStreams();
	}

	openUserMenu() {
		this._$sidenav('user-menu').toggle();
	}

	getUserInfo() {
		this.user = this._Auth.getUser();
	}

	getStreams(options) {
		options = options || {};

		if (this.isLoggedIn) {
			options.subscribed = true;

			this._Stream.get(options).then((response) => {
				console.log(response);
				this.streams = response.data.res.records;
			});
		} else {
			options.subscribed = '';

			this._Stream.get(options).then((response) => {
				console.log(response);
				this.streams = response.data.res.records;
			});
		}
	}

	logout() {
		this._Storage.remove('user');
		this._Storage.remove('opinion-token');
		this._$state.go('app.home', {}, {reload: true});
		this._$sidenav('user-menu').close();
	} 
}

let appNav = {
	controller: navCtrl,
	templateUrl: './app/components/shared/nav/nav.html'
};

export default appNav