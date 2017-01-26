class navCtrl {
	constructor(Auth, Storage, Stream, User, $mdSidenav, $state, $rootScope, $mdDialog, $location, Chat) {
		'ngInject';

		this._$sidenav = $mdSidenav;
		this._Auth = Auth;
		this._Storage = Storage;
		this._User = User;
		this._Stream = Stream;
		this._Chat = Chat;
		this._$state = $state;
		this._$rootScope = $rootScope;
		this._$location = $location;
		this._$dialog = $mdDialog;
		//this._Websocket = Websocket;
		this.storedUser = this._Auth.getUser();
		this.isLoggedIn = this._Auth.isLoggedIn();


		if (this.isLoggedIn) {
			this.getUserInfo();
		}

		this._$rootScope.$on('$stateChangeStart', () => {
			this._$sidenav('user-menu').close();
		});

		this._$rootScope.$on('streamCreated', () => {
			this._$dialog.hide();
		});

		this._$rootScope.$on('unauthedRequest', () => {
			this._$dialog.show({
				templateUrl: './app/pages/auth/dialogs/403.dialog.html',
				controller: 'AuthUnauthedController',
				controllerAs: "$ctrl",
				clickOutsideToClose: true
			});
		});


		this.getStreams();
	}


	openUserMenu() {
		this._$sidenav('user-menu').toggle();
	}

	getUserInfo() {
		this._User.single(this.storedUser._id).then((response) => {
			this.user = response.data.res.record;
		});
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
			templateUrl: './app/pages/streams/dialogs/create/create.html',
			controller: 'StreamsCreateController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true
		});
	}

	openCreateThread() {
		this._$sidenav("user-menu").close();
		this._$dialog.show({
			templateUrl: './app/pages/threads/dialogs/create/create.anywhere.html',
			controller: 'CreateThreadAnywhereController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true
		});
	}

	openUsersSearch() {
		this._$sidenav('user-menu').close();
		this._$dialog.show({
			templateUrl: './app/pages/profile/dialogs/search.html',
			controller: 'UsersSearchController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true
		});
	}

	openStreamSearch() {
		this._$sidenav('user-menu').close();
		this._$dialog.show({
			templateUrl: './app/pages/streams/dialogs/search/search.html',
			controller: 'StreamsSearchController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true
		});
	}

	openThreadSearch() {
		this._$sidenav('user-menu').close();
		this._$dialog.show({
			templateUrl: './app/pages/threads/dialogs/search/search.html',
			controller: 'ThreadsSearchController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true
		});
	}

	logout() {
		this._Storage.remove('user');
		this._Storage.remove('opinion-token');
		//this._Websocket.logout(this.user._id);
		this._$state.go('app.home', {}, {reload: true});
		this._$sidenav('user-menu').close();
	} 
}

let appNav = {
	controller: navCtrl,
	templateUrl: './app/components/shared/nav/nav.html'
};

export default appNav