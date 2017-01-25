import angular from 'angular'
import chatsList from './list/chats.list.component'
import singleChat from './single/chats.single.component'
import chatMessages from './messages/chats.messages.component'

let chatComponents = angular.module('chats.components', []);
chatComponents.component('chatsList', chatsList);
chatComponents.component('singleChat', singleChat);
chatComponents.component('chatMessages', chatMessages);

export default chatComponents