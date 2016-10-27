import angular from 'angular';
import threadConfig from './threads.config';
import threadService from './services/thread.service';
import commentService from './services/comments.service';
import singleCtrl from './single/single.thread.controller';

let threadsModule = angular.module('threads', []);
threadsModule.config(threadConfig);
threadsModule.service('threadService', threadService);
threadsModule.service('commentsService', commentService);
threadsModule.controller('singleThreadCtrl', singleCtrl);

export default threadsModule