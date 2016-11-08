import angular from 'angular'

import './shared/shared.components'
import './auth/auth.components'
import './forum/forum.components'
import "./profile/profile.components"

const requires = [
	'shared.components',
	'auth.components',
	'forum.components',
	'profile.components'
];

let componentModule = angular.module('app.components', requires);

export default componentModule