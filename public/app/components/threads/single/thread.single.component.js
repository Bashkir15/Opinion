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
	templateUrl: './app/components/threads/single/single.html'
};

export default singleThread