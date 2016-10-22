class ListStreamCtrl {
	constructor() {

	}
}


let listStream = {
	scope: {},
	bindings: {
		streams: '='
	},
	controller: ListStreamCtrl,
	templateUrl: './app/components/streams/list/streams.list.html'
};

export default listStream