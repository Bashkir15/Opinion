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

	list() {
		return this._$http({
			url: '/chats/',
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
}

export default chatsService