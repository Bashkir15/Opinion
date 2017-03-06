class notificationCtrl {
	constructor($rootScope, $location, Auth, User) {
		this._$rootScope = $rootScope;
		this._$location = $location;
		this._Auth = Auth;
		this._User = User;
		this._isLoggedIn = this._Auth.isLoggedIn();
		this.storedUser = this._Auth.getUser();

		this.notificationCount = 0;
		this.notifications = [];

		this.$onInit = () => {
			if (this._isLoggedIn) {
				this.updateNotifications();
			}
		}

		this._$rootScope.$on('newNotification', (event, data) => {
			if (this.user._id == data.userId) {
				this.updateNotifications();
			}
		});
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
}

let notificationsComponent = {
	controller: notificationCtrl,
	templateUrl: './app/components/shared/notifications/notifications.html'
};

export default notificationsComponent