import angular from 'angular'
import threadsList from './list/threads.list.component'

let threadComponents = angular.module('threads.components', []);
threadComponents.component('threadList', threadsList);

export default threadComponents