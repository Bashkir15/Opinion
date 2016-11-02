class StreamsListCtrl {
	constructor(Stream, $timeout, $rootScope) {
		'ngInject';

		this._Stream = Stream;
		this._$timeout = $timeout;
		this._$rootScope = $rootScope
		this.streams = [];
		this.streamsSearch = '';
		this.lastUpdated = 0;
		this.getStreams();
		this._$rootScope.$on('streamCreated', () => {
			this.showCreate = !this.showCreate;
			this.getStreams({
				append: true
			});
		});
	}

	getStreams(options) {
		options = options || {};
		options.filter = this.streamsSearch,
		options.timestamp = this.lastUpdated


		this._Stream.get(options).success((response) => {

			if (this.streamsSearch) {
				this.streams = [];
			}

			if (!options.append) {
				this.streams = response.res.records.concat(this.streams);
			} else {
				this.streams = this.streams.concat(response.res.records);
			}

			console.log(this.streams);
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