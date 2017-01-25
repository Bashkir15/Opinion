function homeConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.home', {
		url: '/',
		controller: 'HomeCtrl',
		controllerAs: '$ctrl',
		templateUrl: './app/pages/home/home.html'
	});
}

export default homeConfig