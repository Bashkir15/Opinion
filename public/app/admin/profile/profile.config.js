(function() {
	'use strict';

	angular.module('opinionated.admin')
	.config(profileConfig);

	/* @ngInject */
	function profileConfig ($stateProvider) {
		$stateProvider.state('profile', {
			url: '/profile/:userId',
			templateUrl: '/app/admin/profile/profile.tmpl.html',
			controller: 'ProfileController',
			controllerAs: 'vm'
		});
	}
}());