import angular from 'angular'
import authConfig from './auth.config'
import authService from './auth.service'
import resetCtrl from './reset/password.reset.controller'


let authModule = angular.module('auth', []);
authModule.config(authConfig);
authModule.service('Auth', authService);
authModule.controller('PasswordResetController', resetCtrl);

export default authModule