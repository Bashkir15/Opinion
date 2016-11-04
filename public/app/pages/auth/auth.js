import angular from 'angular'
import authConfig from './auth.config'
import authService from './auth.service'
import resetCtrl from './reset/password.reset.controller'
import passwordMatch from './password.match.directive'


let authModule = angular.module('auth', []);
authModule.config(authConfig);
authModule.service('Auth', authService);
authModule.controller('PasswordResetController', resetCtrl);
authModule.directive('compareTo', passwordMatch);

export default authModule