class subscribedStreamsCtrl {
	constructor(Stream) {
		'ngInject';

		this._Stream = Stream;
		this.lastUpdated = 0;
		this.streamPage = 0;
		this.streams = [];
		this.getStreams();
	}

	getStreams(options) {
		options = options || {};
		options.timestamp = this.lastUpdated;
		options.page = this.streamPage;
		options.subscribed = true;

		this._Stream.get(options).then((response) => {
			
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

export default subscribedStreamsCtrl