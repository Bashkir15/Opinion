class SingleThreadCtrl {
	constructor() {

	}
}


let singleThread = {
	scope: {},
	bindings: {
		thread: '='
	},
	controller: SingleThreadCtrl,
	templateUrl: './app/components/forum/threads/single/threads.single.component.html'
};

export default singleThread