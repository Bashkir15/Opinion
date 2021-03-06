import angular from 'angular'
import User from './users.service'
import profileConfig from './profile.config'
import profileController from './profile.controller'
import profileThreadsCtrl from './threads/profile.threads.controller'
import profileCommentsCtrl from './comments/profile.comments.controller'
import profileSavedCtrl from './saved/profile.saved.controller'
import profileActivityCtrl from './activity/profile.activity.controller'
import usersSearchCtrl from './dialogs/users.search.controller'
import profileMessageCtrl from './dialogs/message/profile.message.controller'
import editProfileCtrl from './dialogs/edit/profile.edit.controller'
import profileResetCtrl from './dialogs/reset/profile.reset.controller'

let profileModule = angular.module('profile', []);
profileModule.config(profileConfig);
profileModule.service('User', User);
profileModule.controller('ProfileController', profileController);
profileModule.controller('ProfileThreadsController', profileThreadsCtrl);
profileModule.controller('ProfileCommentsController', profileCommentsCtrl);
profileModule.controller('ProfileSavedController', profileSavedCtrl);
profileModule.controller('ProfileActivityController', profileActivityCtrl);
profileModule.controller('UsersSearchController', usersSearchCtrl);
profileModule.controller('ProfileMessageController', profileMessageCtrl);
profileModule.controller('ProfileEditController', editProfileCtrl);
profileModule.controller('ProfileResetController', profileResetCtrl);

export default profileModule