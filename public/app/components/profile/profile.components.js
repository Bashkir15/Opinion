import angular from 'angular'
import profileHeader from './header/profile.header.component'
import profileOverview from './overview/profile.overview.component'

let profileComponents = angular.module('profile.components', []);
profileComponents.component('profileHeader', profileHeader);
profileComponents.component('profileOverview', profileOverview);

export default profileComponents