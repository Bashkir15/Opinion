class chatsMessagesCtrl {
	constructor(Chat, Auth, $timeout, $stateParams, $state, $rootScope, Websocket) {
		'ngInject';

		this._Chat = Chat;
		this._Auth = Auth;
		this._$timeout = $timeout;
		this._$stateParams = $stateParams;
		this._$rootScope = $rootScope;
		this._$state = $state;
		this._Websocket = Websocket;
		this.chatId = this._$stateParams.chatId;
		this.userId = this._Auth.getUser()._id;
		this.data = {
			message: '',
			creator: this.userId
		};


		if (this.chatId && document.documentElement.clientWidth < 1300) {
			this._$rootScope.$broadcast('hideChats');
		}
	}

	scrollToBottom() {
		this._$timeout(() => {
			var scroller = document.getElementById('scrollContainer');
			scroller.scrollTop = scroller.scrollHeight;
		}, 0, false);
	}

	sendMessage(isValid) {
		if (isValid) {
			this._Chat.message(this.chatId, this.data).then((response) => {
				this._Websocket.chatsMessage(this.chatId);
				this._$rootScope.$broadcast('newMessage');
				this.scrollToBottom();
				this.resetForm();			
			});
		}
	}

	resetForm() {
		this.chatForm.$setUntouched();
		this.chatForm.$setPristine();
		this.data.message = "";
	}
}

let chatMessages = {
	scope: {},
	bindings: {
		messages: '=',
		chat: '<'
	},
	controller: chatsMessagesCtrl,
	templateUrl: './app/components/chats/messages/messages.html'
};

export default chatMessages