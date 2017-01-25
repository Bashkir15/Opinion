class UsersSearchCtrl {
	constructor(User, $location, $timeout, $mdDialog) {
		'ngInject';

		this._User = User;
		this._$location = $location;
		this._$timeout = $timeout;
		this._$dialog = $mdDialog;
		this.search = '';
	}

	close() {
		this._$dialog.hide();
	}

	doSearch(val) {
		this._User.search(val).then((response) => {
			this.items = response.data.res.records;
		});
	}

	goToUser(item) {
		this._$dialog.hide();
		this._$location.url('/profile/' + item._id + '/overview');
	}

	clearSearch() {
		this._$timeout(() => {
			this.search = '';
		}, 500);
	}
}

export default UsersSearchCtrl