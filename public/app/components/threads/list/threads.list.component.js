class threadListController {
	constructor(threadService, $stateParams) {
		this._Thread = threadService;
		this.streamId = $stateParams.streamId
	}
}


let threadsList = {
	scope: {},
	bindings: {
		threads: '='
	},
	controller: threadListController,
	templateUrl: './app/components/threads/list/list.html'
};

export default threadsList