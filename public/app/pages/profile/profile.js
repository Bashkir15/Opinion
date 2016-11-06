import angular from 'angular'
import User from './users.service'
import profileConfig from './profile.config'
import profileController from './profile.controller'

let profileModule = angular.module('profile', []);
profileModule.config(profileConfig);
profileModule.service('User', User);
profileModule.controller('ProfileController', profileController);

export default profileModule