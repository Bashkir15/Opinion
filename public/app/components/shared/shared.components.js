import angular from 'angular'
import nav from './nav/nav.component'
import notifications from './notifications/notifications.component'
import messages from './messages/messages.component'

let sharedComponents = angular.module('shared.components', []);
sharedComponents.component('appNav', nav);
sharedComponents.component('notifications', notifications);
sharedComponents.component('messages', messages);

export default sharedComponents