class chatsService {
	constructor($http) {
		'ngInject';

		this._$http = $http;
	}

	create(data) {
		return this._$http({
			url: '/chats/',
			method: 'POST',
			data: data
		});
	}

	list(options) {
		return this._$http({
			url: '/chats/',
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				page: options.page
			}
		});
	}

	markRead(id) {
		return this._$http({
			url: '/chats/markRead/' + id,
			method: 'GET'
		});
	}

	findUnread(id) {
		return this._$http({
			url: '/chats/' + id + '/unread',
			method: 'GET'
		});
	}

	get(id) {
		return this._$http({
			url: '/chats/' + id,
			method: 'GET'
		});
	}

	message(id, data) {
		return this._$http({
			url: '/chats/' + id + '/message',
			method: 'POST',
			data: data
		});
	}

	save(id) {
		return this._$http({
			url: '/chats/' + id + '/save',
			method: 'POST'
		});
	}

	unsave(id) {
		return this._$http({
			url: '/chats/' + id + '/unsave',
			method: 'POST'
		});
	}

	getSaved(id, options) {
		return this._$http({
			url: '/chats/' + id + '/saved',
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				page: options.page
			}
		});
	}

	remove(id) {
		return this._$http({
			url: '/chats/' + id + '/remove',
			method: 'POST'
		});
	}

	unremove(id) {
		return this._$http({
			url: '/chats/' + id + '/unremove',
			method: 'POST'
		});
	}

	getRemoved(id, options) {
		return this._$http({
			url: '/chats/' + id + '/removed',
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				page: options.page
			}
		});
	}
}

export default chatsService