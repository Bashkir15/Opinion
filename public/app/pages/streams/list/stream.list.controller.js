class StreamListCtrl {
	constructor(streamService) {
		'ngInject';

		this._Stream = streamService;
		this.getStreams()
	}

	getStreams() {
		this._Stream.get().success((response) => {
			this.streams = response.res.records;
		});
	}

}

export default StreamListCtrl