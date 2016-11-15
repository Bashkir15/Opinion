class chatsSingleCtrl {
	constructor(Chat, $rootScope, $location, $state, Auth) {
		this._Chat = Chat;
		this._$rootScope = $rootScope;
		this._$location = $location;
		this._$state = $state
		this._Auth = Auth;
		this.currentUser = this._Auth.getUser()._id;

		if (this._$state.current.name == 'app.chats.inbox' || this._$state.current.name == 'app.chats.saved') {
			this.hideRemoved = true;
		}
	}

	goToChat(item) {

		if (this._$state.current.name == 'app.chats.inbox') {
			this._$state.go('app.chats.inbox.messages', {chatId: item._id});
		} else if (this._$state.current.name == 'app.chats.saved') {
			this._$state.go('app.chats.saved.messages', ({chatId: item._id}));
		} else if (this._$state.current.name == 'app.chats.trash') {
			this._$state.go('app.chats.trash.messages', ({chatId: item._id}));
		}
	}

	toggleSave(item) {
		if (!item.saved) {
			this._Chat.save(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		} else {
			this._Chat.unsave(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		}
	}

	toggleRemove(item) {
		if (!item.isDeleted) {
			this._Chat.remove(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		} else {
			this._Chat.unremove(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		}
	}
}

let singleChat = {
	scope: {},
	bindings: {
		chat: '<'
	},
	controller: chatsSingleCtrl,
	templateUrl: './app/components/chats/single/single.html'
};

export default singleChat