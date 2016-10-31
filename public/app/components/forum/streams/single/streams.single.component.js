class singleStreamCtrl {
	constructor(Stream) {
		'ngInject';

		this._Stream = Stream;

	}

	subscribe(item) {
		this._Stream.subscribe(item._id).success((response) => {
			angular.extend(item, response.res.record);
		});
	}

	unsubscribe(item) {
		this._Stream.unsubscribe(item._id).success((response) => {
			angular.extend(item, response.res.record);
		});
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