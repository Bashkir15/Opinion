import angular from 'angular'
import threadService from './threads.service'

let threadsModule = angular.module('threads', []);
threadsModule.service('Thread', threadService);

export default threadsModule