class chatsInboxCtrl {
	constructor(Chat) {
		this._Chat = Chat;
		this.chats = [];
		this.getChats();
	}

	getChats() {
		this._Chat.list().then((response) => {
			this.chats = response.data.res.records;
			console.log(response);
		});
	}
}

export default chatsInboxCtrl