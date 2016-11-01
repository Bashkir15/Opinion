class singleStreamCtrl {
	constructor(Stream, Thread, $stateParams) {
		'ngInject';

		this._Stream = Stream;
		this._Thread = Thread;
		this.streamId = $stateParams.streamId;
		this.threads = [];
		this.threadsSearch = '';
		this.lastUpdated = 0;
		this.getStream();
		this.getThreads({
			timestamp: this.lastUpdated,
			filter: this.threadsSearch
		});
	}

	getStream() {
		this._Stream.single(this.streamId).then((response) => {
			this.stream = response.data.res.record;
		});
	}

	getThreads(options) {
		options = options || {};

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