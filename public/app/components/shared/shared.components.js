import angular from 'angular'
import nav from './nav/nav.component'
import notifications from './notifications/notifications.component'

let sharedComponents = angular.module('shared.components', []);
sharedComponents.component('appNav', nav);
sharedComponents.component('notifications', notifications);

export default sharedComponents