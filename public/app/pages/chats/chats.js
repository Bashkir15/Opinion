import angular from 'angular'
import chatsService from './chats.service'
import chatsConfig from './chats.config'
import chatsInboxCtrl from './inbox/chats.inbox.controller'
import chatsMessagesCtrl from './messages/chats.messages.controller'
import chatsSavedCtrl from './saved/chats.saved.controller'
import chatsTrashCtrl from './trash/chats.trash.controller'

let chatsModule = angular.module('chats', []);
chatsModule.config(chatsConfig);
chatsModule.service('Chat', chatsService);
chatsModule.controller('ChatsInboxController', chatsInboxCtrl);
chatsModule.controller('ChatsMessagesController', chatsMessagesCtrl);
chatsModule.controller("ChatsSavedController", chatsSavedCtrl);
chatsModule.controller('ChatsTrashController', chatsTrashCtrl);
export default chatsModule