class messagesCtrl {
	constructor(Auth, Chat) {
		this._Auth = Auth;
		this._Chat = Chat;

		this.User = this._Auth.getUser();
		this.chats = [];
		this.messageCount;

		this.$onInit = () => {
			if (this.User) {
				this.updateChats();
			}
		};

		this._$rootScope.$on('newChatMessage', (event, data) => {
			data.participants.forEach((participant) => {
				if (this.user._id == participant._id) {
					this.updateChats();
				}
			});
		});

	}

	updateChats() {
		this._Chat.findUnread(this.User._id).then((response) => {
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
}

let messagesComponent = {
	controller: messagesCtrl,
	templateUrl: './app/components/shared/messages/messages.html'
};

export default messagesComponent