import angular from 'angular'
import storage from './services/storage'
import toast from './services/toasts'

let configModule = angular.module('app.config', []);
configModule.service('Storage', storage);
configModule.service('Toast', toast);

export default configModule