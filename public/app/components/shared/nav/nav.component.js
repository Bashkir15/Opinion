class navCtrl {
	constructor(Auth, Storage, Stream, User, $mdSidenav, $state, $rootScope, $mdDialog, $location, Chat, Websocket) {
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
		this._Websocket = Websocket;
		this.storedUser = this._Auth.getUser();
		this.isLoggedIn = this._Auth.isLoggedIn();


		if (this.isLoggedIn) {
			this.getUserInfo();
			this.updateNotifications();
			this.updateChats();
		}

		this.notificationCount = 0;
		this.notifications = [];

		this._$rootScope.$on('$stateChangeStart', () => {
			this._$sidenav('user-menu').close();
		});

		this._$rootScope.$on('streamCreated', () => {
			this._$dialog.hide();
		});

		this._$rootScope.$on('profileUpdated', () => {
			this._$state.reload();
		});

		this._$rootScope.$on('unauthedRequest', () => {
			this._$dialog.show({
				templateUrl: './app/pages/auth/dialogs/403.dialog.html',
				controller: 'AuthUnauthedController',
				controllerAs: "$ctrl",
				clickOutsideToClose: true
			});
		});

		this._$rootScope


		this.getStreams();
	}

	markRead(item) {
		var record = this._User.notificationsRead(item._id).then((response) => {
			if (response.data.res.notifications) {
				response.data.res.notifications.map((item) => {
					item.display = this.NotificationText(item);

					if (item.thread) {
						item.href = 'app.singleThread({threadId: item.thread._id, streamId: item.thread.stream})';
					}

					if (item.user) {
						item.href = 'app.profile.overview({userId: item.user._id})';
					}
				});
			}

			this.notifications = response.data.res.notifications;
			this.notificationCount = response.data.res.notifications.length;
		});
	}

	markAsRead() {
		this._User.markRead(this.storedUser._id, this.notifications).then((response) => {
			this.updateNotifications();
		});
	}

	notificationAction(item) {
		if (item.thread) {
			this._$location.url(item.thread.stream + '/' + item.thread._id);
		}

		if (item.user) {
			this._$location.url('profile/' + item.actor._id + '/overview');
		}

		if (item.thread && item.user) {
			this._$location.url(item.thread.stream + '/' + item.thread._id);
		}
	}

	updateNotifications() {
		this._User.notifications().then((response) => {
			if (response.data.res.notifications) {
				response.data.res.notifications.map((item) => {
					item.display = this.NotificationText(item);
				});
			}

			this.notifications = response.data.res.notifications;
			this.notificationCount = response.data.res.notifications ? response.data.res.notifications.length : 0;
		});		
	}

	updateChats() {
		this._Chat.findUnread(this.storedUser._id).then((response) => {
			this.chats = response.data.res.records,
			this.messageCount = response.data.res.unread
		});
	}

	doChatAction(item) {
		this._Chat.markRead(item._id).then((response) => {
			this.messageCount -= 1;
			angular.extend(item, response.data.res.record);
			this.updateChats();
			this._$state.go("app.chats.inbox", {reload: true});
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
		this._User.single(this.storedUser._id).then((response) => {
			this.user = response.data.res.record;
		});
	}

	getStreams(options) {
		options = options || {};

		if (this.isLoggedIn) {
			if (!this.storedUser.streams) {
				options.unsubscribed = true;
				this._Stream.get(options).then((response) => {
					this.streams = response.data.res.records;
				});
			}
			
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
		this._Websocket.logout(this.user._id);
		this._$state.go('app.home', {}, {reload: true});
		this._$sidenav('user-menu').close();
	} 
}

let appNav = {
	controller: navCtrl,
	templateUrl: './app/components/shared/nav/nav.html'
};

export default appNav