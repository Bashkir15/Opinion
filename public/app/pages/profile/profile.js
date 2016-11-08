import angular from 'angular'
import User from './users.service'
import profileConfig from './profile.config'
import profileController from './profile.controller'
import profileThreadsCtrl from './threads/profile.threads.controller'

let profileModule = angular.module('profile', []);
profileModule.config(profileConfig);
profileModule.service('User', User);
profileModule.controller('ProfileController', profileController);
profileModule.controller('ProfileThreadsController', profileThreadsCtrl);

export default profileModule