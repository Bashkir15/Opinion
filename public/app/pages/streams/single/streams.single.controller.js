class streamSingleCtrl {
	constructor(streamService, threadService, $state, $stateParams, $mdSidenav) {
		this._streamService = streamService;
		this._Threadservice = threadService
		this.streamId = $stateParams.streamId;
		this._$sidenav = $mdSidenav;
		this.getStream();
		this.getThreads();
	}

	getStream() {
		this._streamService.single(this.streamId).then((response) => {
			console.log(response);
			this.stream = response.data.res.record;
		});
	}

	getThreads() {
		this._Threadservice.get(this.streamId).then((response) => {
			this.threads = response.data.res.records;
		});
	}

	openCreate() {
		this._$sidenav('create-thread').toggle();
	}
}

export default streamSingleCtrl