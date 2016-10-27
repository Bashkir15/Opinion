class singleThreadCtrl {
	constructor(threadService, commentsService, $stateParams, $mdSidenav) {
		this._threadId = $stateParams.threadId;
		this._Thread = threadService;
		this._Comment = commentsService;
		this._$Sidenav = $mdSidenav;
		this.getThread()
		this.getComments();
	}

	getThread() {
		this._Thread.single(this._threadId).then((response) => {
			this.thread = response.data.res.record;
		});
	}

	getComments(){
		this._Comment.get(this._threadId).then((response) =>{
			this.comments = response.data.res.records;
		});
	}

	openCreate() {
		this._$Sidenav('create-comment').toggle();
	}

}

export default singleThreadCtrl