class StreamsListCtrl {
	constructor(Stream) {
		'ngInject';

		this._Stream = Stream;
		this.getStreams();
	}

	getStreams() {
		this._Stream.get().success((response) => {
			this.streams = response.res.records;
			console.log(response);
		});
	}
}

export default StreamsListCtrl