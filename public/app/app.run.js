function runAway($rootScope, $anchorScroll) {
	'ngInject';

	$rootScope.$on('$stateChangeStart', () => {
		$anchorScroll('nav');
	});
}

export default runAway