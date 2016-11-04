class streamTrendingCtrl {
	constructor(Stream) {
		'ngInject';

		this._Stream = Stream;
	}

	toggleSubscribe(item) {
		if (!item.subscribed) {
			this._Stream.subscribe(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		} else {
			this._Stream.unsubscribe(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		}
	}
}

let trendingStream = {
	scope: {},
	bindings: {
		stream: '<'
	},
	controller: streamTrendingCtrl,
	templateUrl: './app/components/forum/streams/trending/streams.trending.component.html'
};

export default trendingStream