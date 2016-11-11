import angular from 'angular'
import User from './users.service'
import profileConfig from './profile.config'
import profileController from './profile.controller'
import profileThreadsCtrl from './threads/profile.threads.controller'
import profileCommentsCtrl from './comments/profile.comments.controller'
import profileSavedCtrl from './saved/profile.saved.controller'
import profileActivityCtrl from './activity/profile.activity.controller'
import usersSearchCtrl from './dialogs/users.search.controller'

let profileModule = angular.module('profile', []);
profileModule.config(profileConfig);
profileModule.service('User', User);
profileModule.controller('ProfileController', profileController);
profileModule.controller('ProfileThreadsController', profileThreadsCtrl);
profileModule.controller('ProfileCommentsController', profileCommentsCtrl);
profileModule.controller('ProfileSavedController', profileSavedCtrl);
profileModule.controller('ProfileActivityController', profileActivityCtrl);
profileModule.controller('UsersSearchController', usersSearchCtrl);

export default profileModule