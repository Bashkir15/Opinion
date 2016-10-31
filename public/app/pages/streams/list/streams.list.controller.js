class StreamsListCtrl {
	constructor(Stream) {
		'ngInject';

		this._Stream = Stream;
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
}

export default StreamsListCtrl