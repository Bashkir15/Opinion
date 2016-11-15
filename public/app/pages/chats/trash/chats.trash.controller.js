class chatsTrashCtrl {
	constructor(Chat, Auth) {
		'ngInject';

		this._Chat = Chat;
		this._Auth = Auth;
		this.currentUser = this._Auth.getUser()._id;
		this.getChats();
	}

	getChats() {
		this._Chat.getRemoved(this.currentUser).then((response) => {
			this.chats = response.data.res.records;
		});
	}
}

export default chatsTrashCtrl