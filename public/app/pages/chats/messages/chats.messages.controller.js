class chatsMessagesCtrl {
	constructor(Auth, Chat, $state, $stateParams, $rootScope) {
		this._Auth = Auth;
		this._Chat = Chat;
		this._$state = $state;
		this._$stateParams = $stateParams;
		this._$rootScope = $rootScope;

		this.chatId = $stateParams.chatId;
		this.currentUser = this._Auth.getUser();
		this.messages = [];
		this.getChat();

		this._$rootScope.$on('newMessage', () => {
			this.updateMessages({
				append: true
			});
		});
	}

	getChat() {
		this._Chat.get(this.chatId).then((response) => {
			console.log(response);
			this.chat = response.data.res.chat;
			this.messages = response.data.res.record.messages;
		});
	}

	updateMessages(options) {
		options = options || {};

		this._Chat.get(this.chatId).then((response) => {
			if (!options.append) {
				this.messages = response.data.res.record.messages.concat(this.messages);
			} else {
				this.messages = this.messages.concat(response.data.res.record.messages[0]);
			}
		})
	}

	closeMessage() {
		this._$rootScope.$broadcast('showChats');
		this._$state.go('app.chats.inbox');
	}
}

export default chatsMessagesCtrl