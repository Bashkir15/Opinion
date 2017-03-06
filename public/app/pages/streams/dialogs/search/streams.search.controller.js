class StreamsSearchCtrl {
	constructor(Stream, $location, $timeout, $mdDialog) {
		'ngInject';

		this._Stream = Stream;
		this._$location = $location;
		this._$timeout = $timeout;
		this._$dialog = $mdDialog;
		this.search = '';
	}

	close() {
		this._$dialog.hide();
	}

	doSearch(val) {
		this._Stream.search(val).then((response) => {
			this.items = response.data.res.records;
		});
	}

	goToStream(item) {
		this._$dialog.hide();
		this._$location.url('streams/' + item._id);
	}

	clearSearch() {
		this._$timeout(() => {
			this.search = '';
		}, 500);
	}
}

export default StreamsSearchCtrl