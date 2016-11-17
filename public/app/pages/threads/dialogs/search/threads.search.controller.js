class ThreadsSearchCtrl {
	constructor(Thread, $location, $timeout, $mdDialog) {
		'ngInject';

		this._Thread = Thread;
		this._$location = $location;
		this._$timeout = $timeout;
		this._$dialog = $mdDialog;
		this.search = '';
	}

	close() {
		this._$dialog.hide();
	}

	doSearch(val) {
		this._Thread.search(val).then((response) => {
			this.items = response.data.res.records;
		});
	}

	goToUser(item) {
		this._$dialog.hide();
		this._$location.url(item._id);
	}

	clearSearch() {
		this._$timeout(() => {
			this.search = '';
		}, 500);
	}
}

export default ThreadsSearchCtrl