class navCtrl {
	constructor(Auth,Storage, Stream, $mdSidenav, $state, $rootScope, $mdDialog) {
		'ngInject';

		this._$sidenav = $mdSidenav;
		this._Auth = Auth;
		this._Storage = Storage;
		this._Stream = Stream;
		this._$state = $state;
		this._$rootScope = $rootScope;
		this._$dialog = $mdDialog;
		this.isLoggedIn = this._Auth.isLoggedIn();
		this.getUserInfo();

		this._$rootScope.$on('$stateChangeStart', () => {
			this._$sidenav('user-menu').close();
		});

		this._$rootScope.$on('streamCreated', () => {
			this._$dialog.hide();
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
				this.streams = response.data.res.records;
			});
		} else {
			options.unsubscribed = true;
			this._Stream.get(options).then((response) => {
				this.streams = response.data.res.records;
			});
		}
	}

	openCreateStream() {
		this._$sidenav('user-menu').close();
		this._$dialog.show({
			templateUrl: './app/pages/streams/dialogs/create.html'
		});
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