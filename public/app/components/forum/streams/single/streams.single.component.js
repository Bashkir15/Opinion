class singleStreamCtrl {
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

let singleStream = {
	scope: {},
	bindings: {
		stream: '='
	},
	controller: singleStreamCtrl,
	templateUrl: './app/components/forum/streams/single/streams.single.component.html'
};


export default singleStream