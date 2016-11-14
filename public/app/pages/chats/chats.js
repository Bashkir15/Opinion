import angular from 'angular'
import chatsService from './chats.service'
import chatsConfig from './chats.config'

let chatsModule = angular.module('chats', []);
chatsModule.config(chatsConfig);
chatsModule.service('Chat', chatsService);

export default chatsModule