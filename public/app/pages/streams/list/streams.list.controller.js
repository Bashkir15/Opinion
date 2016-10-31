class StreamsListCtrl {
	constructor(Stream, $timeout) {
		'ngInject';

		this._Stream = Stream;
		this._$timeout = $timeout;
		this.streams = [];
		this.streamsSearch = '';
		this.lastUpdated = 0;
		this.getStreams();
	}

	getStreams(options) {
		options = options || {};

		this._Stream.get({
			timestamp: this.lastUpdated,
			filter: this.streamsSearch
		}).success((response) => {
			if (this.streamsSearch) {
				this.streams = [];
			}

			if (!options.append) {
				this.streams = response.res.records.concat(this.streams);
			} else {
				this.streams = this.streams.concat(response.res.records);
			}

			this.lastUpdated = Date.now();
		});
	}

	search(newValue, oldValue) {
		var streamsSearchTimeout;
		
		if (!newValue !== oldValue) {
			this.streams = [];
		}

		this._$timeout.cancel(streamsSearchTimeout);

		streamsSearchTimeout = this._$timeout(() => {
			if (!newValue) {
				if (this.streamsSearchEnabled) {
					this.lastUpdated = 0;
					this.getStreams();
				}
			} else {
				this.getStreams();
			}

			this.streamsSearchEnabled = this.streamsSearch !== '';
		}, 500);
	}
}

export default StreamsListCtrl