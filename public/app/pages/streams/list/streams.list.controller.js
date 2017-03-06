class StreamsListCtrl {
	constructor(Stream, $timeout, $rootScope, $mdDialog) {
		'ngInject';

		this._Stream = Stream;
		this._$timeout = $timeout;
		this._$rootScope = $rootScope
		this._$dialog = $mdDialog;
		this.streams = [];
		this.streamsSearch = '';
		this.streamPage = 0;
		this.lastUpdated = 0;
		this.getStreams();
		this.getCount();
		this._$rootScope.$on('streamCreated', () => {
			this._$dialog.hide();
			this.getStreams({
				append: true
			});
		});
	}

	getStreams(options) {
		options = options || {};
		options.filter = this.streamsSearch,
		options.timestamp = this.lastUpdated
		options.page = this.streamPage


		this._Stream.get(options).then((response) => {

			if (this.streamsSearch) {
				this.streams = [];
			}

			if (!options.append) {
				this.streams = response.data.res.records.concat(this.streams);
			} else {
				this.streams = this.streams.concat(response.data.res.records);
			}

			
			if (response.data.res.morePages == false) {
				this.noMoreStreams = true;
			}

			this.lastUpdated = Date.now();
		});
	}

	getCount() {
		this._Stream.count().then((response) => {
			this.streamCount = response.data.res.streamCount;
		});
	}

	loadMore() {
		this.streamPage++;
		this.lastUpdated = 0;
		this.getStreams({append: true});
	}


	search(newValue, oldValue) {
		let streamsSearchTimeout;
		
		if (newValue !== oldValue) {
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

	byThreads() {
		this._$rootScope.$broadcast('streamByThreads');
	}

	bySubscribers() {
		this._$rootScope.$broadcast('streamBySubscribers');
	}

	byDate() {
		this._$rootScope.$broadcast('streamByDate');
	}
}

export default StreamsListCtrl