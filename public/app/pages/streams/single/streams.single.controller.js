class streamSingleCtrl {
	constructor(streamService, $state, $stateParams, $mdSidenav) {
		this._streamService = streamService;
		this.streamId = $stateParams.streamId;
		this._$sidenav = $mdSidenav;
		this.getStream()
	}

	getStream() {
		this._streamService.single(this.streamId).then((response) => {
			console.log(response);
			this.stream = response.data.res.record;
		});
	}

	openCreate() {
		this._$sidenav('create-thread').toggle();
	}
}

export default streamSingleCtrl