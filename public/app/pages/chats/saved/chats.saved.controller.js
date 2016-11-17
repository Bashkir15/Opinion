class ChatsSavedCtrl {
	constructor(Chat, Auth) {
		this._Chat = Chat;
		this._Auth = Auth;
		this.chats = [];
		this.lastUpdated = 0;
		this.chatsPage = 0;
		this.currentUser = this._Auth.getUser()._id;
		this.getChats();
	}

	getChats(options) {
		options = options || {};
		options.timestamp = this.lastUpdated;
		options.page = this.chatsPage;

		this._Chat.getSaved(this.currentUser, options).then((response) => {

			if (!options.append) {
				this.chats = reponse.data.res.record.concat(this.chats);
			} else {
				this.chats = this.chats.concat(response.data.res.record);
			}

			this.lastUpdated = Date.now();
			this.noMoreChats = !response.data.res.morePages;
		});
	}

	loadMore() {
		this.chatsPage++;
		this.lastUpdated = 0;
		this.getChats({append: true});
	}
}

export default ChatsSavedCtrl