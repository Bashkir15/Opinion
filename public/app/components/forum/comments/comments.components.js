import angular from 'angular'
import createComment from './create/comments.create.component'
import commentsList from './list/comments.list.component'
import singleComment from './single/comments.single.component'
import editComment from './edit/edit.comment.component'

let commentComponents = angular.module('comments.components', []);
commentComponents.component('createComment', createComment);
commentComponents.component('commentsList', commentsList);
commentComponents.component('singleComment', singleComment);
commentComponents.component('editComment', editComment);

export default commentComponents