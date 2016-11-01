class singleStreamCtrl {
	constructor(Stream, Thread, $stateParams) {
		'ngInject';

		this._Stream = Stream;
		this._Thread = Thread;
		this.streamId = $stateParams.streamId;
		this.getStream();
		//this.getThreads();
	}

	getStream() {
		this._Stream.single(this.streamId).then((response) => {
			this.stream = response.data.res.record;
		});
	}
}

export default singleStreamCtrl