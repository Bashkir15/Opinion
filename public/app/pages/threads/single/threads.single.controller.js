class threadsSingleCtrl {
	constructor(Thread, $stateParams) {
		'ngInject';

		this._Thread = Thread;
		this.threadId = $stateParams.threadId;
		this.streamId = $stateParams.streamId;
		this.getThread();
	}

	getThread() {
		this._Thread.single(this.threadId).then((response) => {
			this.thread = response.data.res.record;
		});
	}
}

export default threadsSingleCtrl