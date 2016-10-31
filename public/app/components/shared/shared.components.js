import angular from 'angular'
import nav from './nav/nav.component'

let sharedComponents = angular.module('shared.components', []);
sharedComponents.component('appNav', nav);

export default sharedComponents