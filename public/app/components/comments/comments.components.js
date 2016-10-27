import angular from 'angular';
import createComment from './create/comments.create.component';
import commentsList from './list/comments.list.component';
import commentsSingle from './single/comments.single.component';

let commentsComponents = angular.module('comments.components', []);
commentsComponents.component('createComment', createComment);
commentsComponents.component('listComments', commentsList);
commentsComponents.component('singleComment', commentsSingle);

export default commentsComponents