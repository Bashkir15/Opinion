import angular from 'angular'
import storage from './services/storage'
import toast from './services/toasts'
import websockets from './services/sockets'

let configModule = angular.module('app.config', []);
configModule.service('Storage', storage);
configModule.service('Toast', toast);
configModule.service('Socket', websockets);

export default configModule