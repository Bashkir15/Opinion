class ChatsSavedCtrl {
	constructor(Chat, Auth) {
		this._Chat = Chat;
		this._Auth = Auth;
		this.chats = [];
		this.currentUser = this._Auth.getUser()._id;
		this.getChats();
	}

	getChats() {
		this._Chat.getSaved(this.currentUser).then((response) => {
			this.chats = response.data.res.records
		});
	}
}

export default ChatsSavedCtrl