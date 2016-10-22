class singleStreamCtrl {
	constructor() {

	}
}

let singleStream = {
	scope: {},
	bindings: {
		stream: '='
	},
	controller: singleStreamCtrl,
	templateUrl: './app/components/streams/single/single.html'
};

export default singleStream