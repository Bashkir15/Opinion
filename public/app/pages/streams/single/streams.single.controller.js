class singleStreamCtrl {
	constructor(Stream, Thread, $stateParams, $mdDialog, $rootScope) {
		'ngInject';

		this._Stream = Stream;
		this._Thread = Thread;
		this._$rootScope = $rootScope;
		this._$dialog = $mdDialog;
		this.streamId = $stateParams.streamId;
		this.threads = [];
		this.threadsSearch = '';
		this.lastUpdated = 0;
		this.getStream();
		this.getThreads();

		this._$rootScope.$on('threadCreated', () => {
			this._$dialog.hide();
			this.getThreads({
				append: true
			});
		});
	}

	getStream() {
		this._Stream.single(this.streamId).then((response) => {
			this.stream = response.data.res.record;
		});
	}

	getThreads(options) {
		options = options || {};
		options.filter = this.threadsSearch;
		options.timestamp = this.lastUpdated;

		this._Thread.get(this.streamId, options).then((response) => {
			console.log(response);
			if (this.threadsSearch) {
				this.threads = [];
			}

			if (!options.append) {
				this.threads = response.data.res.records.concat(this.threads);
			} else {
				this.threads = this.threads.concat(response.data.res.records);
			}

			this.lastUpdated = Date.now();
		});
	}

	byScore() {
		this._$rootScope.$broadcast('threadByScore');
	}

	byComments() {
		this._$rootScope.$broadcast('threadByComments');
	}

	bySaves() {
		this._$rootScope.$broadcast('threadBySaves');
	}

	byDate() {
		this._$rootScope.$broadcast('threadByDate');
	}
}

export default singleStreamCtrl