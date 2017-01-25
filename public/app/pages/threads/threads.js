import angular from 'angular'
import threadsConfig from './threads.config'
import threadService from './threads.service'
import commentService from './comments.service'
import threadsSingleCtrl from './single/threads.single.controller'
import editThread from './dialogs/edit/edit.thread.dialog.controller'
import deleteThread from './dialogs/delete/delete.thread.dialog.controller'
import editComment from './dialogs/edit/edit.comment.controller'
import deleteComment from './dialogs/delete/delete.comment.controller'
import threadsCreate from './dialogs/create/threads.create.controller'
import commentsCreate from './dialogs/create/comments.create.controller'
import createThreadAnywayCtrl from './dialogs/create/create.anywhere.controller'
import threadsSearchCtrl from './dialogs/search/threads.search.controller'

let threadsModule = angular.module('threads', []);
threadsModule.config(threadsConfig);
threadsModule.service('Thread', threadService);
threadsModule.service('Comment', commentService);
threadsModule.controller('threadsSingleCtrl', threadsSingleCtrl);
threadsModule.controller('EditThreadDialogController', editThread);
threadsModule.controller('DeleteThreadDialogController', deleteThread);
threadsModule.controller('DeleteCommentController', deleteComment);
threadsModule.controller('EditCommentController', editComment);
threadsModule.controller('ThreadsCreateController', threadsCreate);
threadsModule.controller('CommentsCreateController', commentsCreate);
threadsModule.controller('CreateThreadAnywhereController', createThreadAnywayCtrl);
threadsModule.controller('ThreadsSearchController', threadsSearchCtrl);

export default threadsModule