class chatsInboxCtrl {
	constructor(Chat) {
		'ngInject';
		
		this._Chat = Chat;
		this.chats = [];
		this.getChats();
		this.lastUpdated = 0;
		this.chatsPage = 0;

	}

	getChats(options) {
		options = options || {};
		options.timestamp = this.lastUpdated;
		options.page = this.chatsPage;

		this._Chat.list(options).then((response) => {
			if (response.data.res.records) {

				if (!options.append) {
					this.chats = response.data.res.records.concat(this.chats);
				} else {
					this.chats = this.chats.concat(response.data.res.records);
				}

				this.lastUpdated = Date.now();
				this.noMoreChats = !response.data.res.morePages;
			}
		});
	}


	loadMore() {
		this.chatsPage++;
		this.lastUpdated = 0;
		this.getChats({append: true});
	}
}

export default chatsInboxCtrl