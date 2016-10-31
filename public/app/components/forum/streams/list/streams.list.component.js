class ListStreamCtrl {
	constructor() {

	}
}

let listStream = {
	scope: {},
	bindings:{
		streams: '='
	},
	controller: ListStreamCtrl,
	templateUrl: './app/components/forum/streams/list/streams.list.component.html'
};

export default listStream