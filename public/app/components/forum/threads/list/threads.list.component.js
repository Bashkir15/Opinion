class threadListController {
	constructor($stateParams) {
		this.streamId = $stateParams.streamId
	}
}


let threadsList = {
	scope: {},
	bindings: {
		threads: '='
	},
	controller: threadListController,
	templateUrl: './app/components/forum/threads/list/threads.list.component.html'
};

export default threadsList