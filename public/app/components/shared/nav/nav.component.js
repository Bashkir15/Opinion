class navCtrl {
	constructor(Auth, Storage, Stream, User, $mdSidenav, $state, $rootScope, $mdDialog) {
		'ngInject';

		this._$sidenav = $mdSidenav;
		this._Auth = Auth;
		this._Storage = Storage;
		this._User = User;
		this._Stream = Stream;
		this._$state = $state;
		this._$rootScope = $rootScope;
		this._$dialog = $mdDialog;
		this.isLoggedIn = this._Auth.isLoggedIn();
		this.getUserInfo();

		if (this.isLoggedIn) {
			this.updateNotifications();
		}

		this.notificationCount = 0;
		this.notifications = [];

		this._$rootScope.$on('$stateChangeStart', () => {
			this._$sidenav('user-menu').close();
		});

		this._$rootScope.$on('streamCreated', () => {
			this._$dialog.hide();
		});


		this.getStreams();
	}

	markRead(item) {
		var record = this._User.notificationsRead(item._id).then((response) => {
			if (response.data.res.notifications) {
				response.data.res.notifications.map((item) => {
					item.display = this.NotificationText(item);
				});
			}

			this.notifications = response.data.res.notifications;
			this.notificationCount = response.data.res.notifications.length;
		});
	}

	updateNotifications() {
		this._User.notifications().then((response) => {
			console.log(response)
			if (response.data.res.notifications) {
				response.data.res.notifications.map((item) => {
					item.display = this.NotificationText(item);
				});
			}

			this.notifications = response.data.res.notifications;
			this.notificationCount = response.data.res.notifications ? response.data.res.notifications.length : 0;
		});		
	}

	NotificationText(obj) {
		if (!obj) {
			return { text: ''};
		}

		var msg = '';
		var actor = obj.actor;

		switch(obj.notificationType) {
			case 'liked':
			msg = actor.name + ' has liked a post';
			break;

			case 'comment':
			msg = actor.name + ' has commented on a post';
			break;

			case 'followed':
			msg = actor.name + ' is now following you';
			break;

			case 'saved':
			msg = actor.name + ' has saved a thread';

			case 'feed':
			msg = actor.name + ' just created a new thread';
			break;

			case 'mention':
			msg = actor.name + ' has just mentioned you in a thread';
			break;
		}

		return {
			text: msg
		};
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

	openUsersSearch() {
		this._$sidenav('user-menu').close();
		this._$dialog.show({
			templateUrl: './app/pages/profile/dialogs/search.html',
			controller: 'UsersSearchController',
			controllerAs: '$ctrl'
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