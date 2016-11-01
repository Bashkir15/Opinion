class singleStreamCtrl {
	constructor(Stream, Thread, $stateParams, $rootScope) {
		'ngInject';

		this._Stream = Stream;
		this._Thread = Thread;
		this._$rootScope = $rootScope;
		this.streamId = $stateParams.streamId;
		this.threads = [];
		this.threadsSearch = '';
		this.lastUpdated = 0;
		this.getStream();
		this.getThreads();

		this._$rootScope.$on('threadCreated', () => {
			this.showCreate = !this.showCreate;
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
}

export default singleStreamCtrl