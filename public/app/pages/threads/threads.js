import angular from 'angular'
import threadsConfig from './threads.config'
import threadService from './threads.service'
import commentService from './comments.service'
import threadsSingleCtrl from './single/threads.single.controller'
import editThread from './dialogs/edit/edit.thread.dialog.controller'

let threadsModule = angular.module('threads', []);
threadsModule.config(threadsConfig);
threadsModule.service('Thread', threadService);
threadsModule.service('Comment', commentService);
threadsModule.controller('threadsSingleCtrl', threadsSingleCtrl);
threadsModule.controller('EditThreadDialogController', editThread);

export default threadsModule