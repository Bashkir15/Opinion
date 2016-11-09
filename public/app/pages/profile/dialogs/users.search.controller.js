class UsersSearchCtrl {
	constructor(User, $location, $timeout) {
		'ngInject';

		this._User = User;
		this._$location = $location;
		this._$timeout = $timeout;
		this.search = '';
	}

	doSearch(val) {
		this._User.search(val).then((response) => {
			return response.data.res.items;
		});
	}

	goToUser(item) {
		this._$location.url('/profile/' + item._id + '/overview');
	}

	clearSearch() {
		this._$timeout(() => {
			this.search = '';
		}, 500);
	}
}

export default UsersSearchCtrl