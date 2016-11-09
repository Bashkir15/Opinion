class TrendingStreamCtrl {
	constructor(Stream) {
		'ngInject';

		this._Stream = Stream;
		this.lastUpdated = 0;
		this.streamPage = 0;
		this.streamSearch = '';
		this.streams = [];
		this.getStreams();
	}

	getStreams(options) {
		options = options || {};
		options.timestamp = this.lastUpdated;
		options.filter = this.streamSearch;
		options.page = this.streamPage;

		this._Stream.get(options).then((response) => {
			if (this.streamSearch) {
				this.streams = [];
			}

			if (!options.append) {
				this.streams = response.data.res.records.concat(this.streams);
			} else {
				this.streams = this.streams.concat(response.data.res.records);
			}
			

			this.lastUpdated = Date.now();
			this.noMoreStreams = !response.data.res.morePages;
		});
	}
}

export default TrendingStreamCtrl