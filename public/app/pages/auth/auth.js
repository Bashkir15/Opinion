import angular from 'angular'
import authConfig from './auth.config'
import authService from './auth.service'
import resetCtrl from './reset/password.reset.controller'
import passwordMatch from './password.match.directive'
import updateProfile from './profileInfo/update.profile.controller'
import authUnauthedCtrl from './dialogs/403.dialog.controller'


let authModule = angular.module('auth', []);
authModule.config(authConfig);
authModule.service('Auth', authService);
authModule.controller('PasswordResetController', resetCtrl);
authModule.directive('compareTo', passwordMatch);
authModule.controller('UpdateProfileController', updateProfile);
authModule.controller('AuthUnauthedController', authUnauthedCtrl);

export default authModule