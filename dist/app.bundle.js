webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(117);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _angularMaterial = __webpack_require__(116);

	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

	__webpack_require__(211);

	__webpack_require__(153);

	__webpack_require__(174);

	__webpack_require__(129);

	var _app = __webpack_require__(119);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(120);

	var _app4 = _interopRequireDefault(_app3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = [_angularUiRouter2.default, 'ngMaterial', 'ngAnimate', 'ngFileUpload', 'app.config', 'app.pages', 'app.components'];

	window.app = _angular2.default.module('app', requires);

	_angular2.default.module('app').config(_app2.default);
	_angular2.default.module('app').run(_app4.default);
	//angular.module("app").service('Websocket', websockets);
	_angular2.default.bootstrap(document, ['app'], {
		strictDi: false
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _auth = __webpack_require__(154);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function appConfig($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
		'ngInject';

		$httpProvider.interceptors.push(_auth2.default);

		$stateProvider.state('app', {
			abstract: true,
			templateUrl: './app/pages/app-layout.html'
		});

		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	}

	exports.default = appConfig;

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function appRun($templateCache) {
		'ngInject';

		$templateCache.put('public/index.html', '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Opinionated</title><link href="https://fonts.googleapis.com/css?family=Open+Sans:300|Raleway:400,600" rel="stylesheet"><link rel="stylesheet" href="./mdi/css/materialdesignicons.css"><link rel="stylesheet" href="./angular-material/angular-material.css"><link rel="stylesheet" href="./styles/main.min.css"></head><body ng-cloak><div id="page-loading" class="page-loading"><img src="./static/uploads/cat-loader.gif"><p class="page-loading-text">Just a second, you\'ll only have to do this once</p><p class="page-loaded-text">The party is ready!</p></div><div ui-view class="main-ui-view"></div><script type="text/javascript">\n\t\t\tdocument.addEventListener(\'DOMContentLoaded\', function (event) {\n\t\t\t\tvar element = document.getElementById(\'page-loading\');\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\telement.classList.add(\'page-load-timeout\');\n\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\telement.parentNode.removeChild(element);\n\t\t\t\t\t}, 1000)\n\t\t\t\t}, 1000);\n\t\t\t});\n\t\t</script><script src="./socket.io-client/socket.io.js"></script><script src="./scripts/vendors.min.js"></script><script src="./scripts/app.min.js"></script></body></html>');
		$templateCache.put('public/app/pages/app-layout.html', '<app-nav></app-nav><md-content class="view-content-holder" ui-view></md-content>');
		$templateCache.put('public/app/pages/chats/chats.tmpl.html', '<div class="chats-page-container"><div><div class="chats-page-header"><h3>Chats</h3><button ui-sref="app.chats.inbox" ui-sref-active="active"><span>Inbox</span></button> <button ui-sref="app.chats.saved" ui-sref-active="active"><span>Saved</span></button> <button ui-sref="app.chats.trash" ui-sref-active="active"><span>Trash</span></button></div></div><div class="chats-views" ui-view></div></div>');
		$templateCache.put('public/app/pages/home/home.html', '<thread-list threads="$ctrl.threads"></thread-list>');
		$templateCache.put('public/app/pages/profile/profile.tmpl.html', '<div class="profile-page-container"><profile-header user="$ctrl.user" class="profile-header-component"></profile-header><md-tabs class="profile-tabs" md-dynamic-height md-swipe-content="true"><md-tab ui-sref="app.profile.overview({userId: $ctrl.user._id})" md-active="$ctrl.currentState == \'app.profile.overview\'"><md-tab-label><span>Overview</span></md-tab-label></md-tab><md-tab ui-sref="app.profile.threads({userId: $ctrl.user._id})" md-active="$ctrl.currentState == \'app.profile.threads\'"><md-tab-label><span>Threads</span></md-tab-label></md-tab><md-tab ui-sref="app.profile.comments({userId: $ctrl.user._id})" md-active="$ctrl.currentState == \'app.profile.comments\'"><md-tab-label><span>Comments</span></md-tab-label></md-tab><md-tab ui-sref="app.profile.saved({userId: $ctrl.user._id})" md-active="$ctrl.currentState == \'app.profile.saved\'"><md-tab-label><span>Saved</span></md-tab-label></md-tab><md-tab ui-sref="app.profile.activity({userId: $ctrl.user._id})" md-active="$ctrl.currentState == \'app.profile.activity\'"><md-tab-label><span>Activity</span></md-tab-label></md-tab></md-tabs><div class="profile-views" ui-view></div></div>');
		$templateCache.put('public/app/pages/auth/dialogs/403.dialog.html', '<md-dialog class="unauth-dialog-container"><div class="unauth-dialog-header"><button ng-click="$ctrl.close()"><i class="mdi mdi-close"></i></button></div><p>Sorry, you need to be logged in to do that</p><md-tabs class="unauth-dialog-tabs" md-swipe-content="true" md-stretch-tabs="always"><md-tab label="signup"><div class="unauth-dialog-signup"><signup-form></signup-form></div></md-tab><md-tab label="login"><div class="unauth-dialog-login"><login-form></login-form></div></md-tab></md-tabs></md-dialog>');
		$templateCache.put('public/app/pages/auth/profileInfo/update-profile.html', '<div class="update-profile-page-container"><div class="update-profile-page-header"><h3>{{$ctrl.user.username}}: Your profile awaits</h3><button ng-click="$ctrl.skip()"><span>Skip</span></button></div><div class="update-profile-component-container"><update-profile user="$ctrl.user"></update-profile></div></div>');
		$templateCache.put('public/app/pages/auth/login/login.html', '<div class="auth-page-container"><header><h1>Login</h1></header><login-form class="auth-form"></login-form></div>');
		$templateCache.put('public/app/pages/auth/reset/reset.html', '<md-dialog class="auth-dialog"><md-dialog-content><div class="auth-dialog-header"><div><h3>Reset password</h3></div><div><button ng-click="$ctrl.close()"><span class="mdi mdi-close"></span></button></div></div><div class="auth-dialog-body" ng-if="!$ctrl.tokenSent"><p>Enter your email here and your reset infomation will be sent there</p><div class="auth-dialog-form"><form name="$ctrl.resetForm" novalidate><div class="auth-form-wraper auth-dialog-form" ng-class="{\'has-focus\': $ctrl.resetForm.email.hasFocus, \'has-success\': $ctrl.resetForm.email.$valid, \'has-error\': $ctrl.resetForm.email.$error && $ctrl.resetForm.email.$touched && !$ctrl.resetForm.email.$valid, \'is-empty\': !$ctrl.resetForm.email.$viewValue}"><label>Email</label> <input type="email" name="email" ng-model="$ctrl.data.email" required ng-focus="$ctrl.resetForm.email.hasFocus=true" ng-blur="$ctrl.resetForm.email.hasFocus=false"></div></form></div></div><div class="auth-dialog-body" ng-if="$ctrl.tokenSent"><p>Please copy and paste the code from your email here, along with your new password</p><form name="$ctrl.confirmReset" novalidate><div class="auth-form-wrapper"><label>Reset Code</label> <input type="text" name="token" ng-model="$ctrl.data.token"></div><div class="auth-form-wrapper"><label>New Password</label> <input type="password" name="password" ng-model="$ctrl.data.password"></div></form></div></md-dialog-content><md-dialog-actions><div class="auth-dialog-actions" ng-if="!$ctrl.tokenSent"><button ng-click="$ctrl.generateReset()"><span>Send Email</span></button> <button ng-click="$ctrl.close()"><span>I Remembered</span></button></div><div class="auth-dialog-actions" ng-if="$ctrl.tokenSent"><button ng-click="$ctrl.attemptReset()"><span>Reset</span></button></div></md-dialog-actions></md-dialog>');
		$templateCache.put('public/app/pages/auth/signup/signup.html', '<div class="auth-page-container"><header><h1>Signup</h1></header><signup-form class="auth-form"></signup-form></div>');
		$templateCache.put('public/app/pages/chats/inbox/inbox.html', '<div class="chats-inbox-container"><div class="chats-inbox-header"><p>Inbox</p><button ng-click="$ctrl.loadMore()" ng-if="!$ctrl.noMoreChats"><span>Load More</span></button></div><div class="chats-nested-container"><chats-list chats="$ctrl.chats" class="chats-list-component-container"></chats-list><div ui-view class="chats-messages-view"></div></div></div>');
		$templateCache.put('public/app/pages/chats/messages/messages.html', '<div class="chats-messages-container"><div class="chats-messages-options"><button ng-click="$ctrl.closeMessage()"><span>Back</span></button></div><chat-messages messages="$ctrl.messages" chat="$ctrl.chat"></chat-messages></div>');
		$templateCache.put('public/app/pages/chats/saved/saved.html', '<div class="chats-inbox-container"><div class="chats-inbox-header"><p>Saved</p><button ng-click="$ctrl.loadMore()" ng-if="!$ctrl.noMoreChats"><span>Load More</span></button></div><div class="chats-nested-container"><chats-list chats="$ctrl.chats" class="chats-list-component-container"></chats-list><div ui-view class="chats-messages-view"></div></div></div>');
		$templateCache.put('public/app/pages/chats/trash/trash.html', '<div class="chats-inbox-container"><div class="chats-inbox-header"><p>Trash</p><button ng-click="$ctrl.loadMore()" ng-if="!$ctrl.noMoreChats"><span>Load More</span></button></div><div class="chats-nested-container"><chats-list chats="$ctrl.chats" class="chats-list-component-container"></chats-list><div ui-view class="chats-messages-view"></div></div></div>');
		$templateCache.put('public/app/pages/streams/list/list.html', '<div class="forum-page-container"><header><h1>Streams</h1></header><p>Opinionated is home to over {{$ctrl.streamCount}} different Stream<span ng-if="$ctrl.streamCount.length > 1 || $ctrl.streamCount.length == 0">s</span>, each one with a different purpose and function. There is always something to be discussed or found here. If you don\'t see a Stream for what you want, feel free to create your own! Remember though, being a moderator can be a hefty task</p><div class="forum-search-container"><div ng-class="{\'has-focus\': $ctrl.search.hasFocus}"><label class="mdi mdi-magnify"></label> <input type="text" name="search" ng-model="$ctrl.streamsSearch" ng-change="$ctrl.search()" ng-focus="$ctrl.search.hasFocus=true" ng-blur="$ctrl.search.hasFocus=false"><md-menu md-offset="-15 60"><button class="large-mobile" ng-click="$mdOpenMenu()"><span>Filter</span></button><md-menu-content class="forum-search-dropdown"><md-menu-item><button ng-click="$ctrl.byThreads()"><span>Threads</span></button></md-menu-item><md-menu-item><button ng-click="$ctrl.bySubscribers()"><span>Subscribers</span></button></md-menu-item><md-menu-item><button ng-click="$ctrl.byDate()"><span>Date</span></button></md-menu-item></md-menu-content></md-menu></div></div><streams-list streams="$ctrl.streams"></streams-list><div class="load-more-button streams-load-more-button" ng-if="!$ctrl.noMoreStreams"><button ng-click="$ctrl.loadMore()"><span>Load More</span></button></div></div>');
		$templateCache.put('public/app/pages/streams/single/single.html', '<div class="forum-page-container single-stream-container"><header><h1>{{$ctrl.stream.name}}</h1></header><div class="forum-header-image"><img ng-src="{{$ctrl.stream.picture}}" ng-if="$ctrl.currentUser == $ctrl.stream.creator._id" ngf-select="$ctrl.uploadImage(file)" ng-model="file" name="file" ngf-pattern="\'image/*\'" accept="image/"> <img ng-src="{{$ctrl.stream.picture}}" ng-if="$ctrl.currentUser != $ctrl.stream.creator._id"></div><p>{{$ctrl.stream.description}}</p><div class="forum-stats"><div><span class="mdi mdi-heart-outline"></span><p>{{$ctrl.stream.subscribers.length}} Subscriber<span ng-if="$ctrl.stream.subscribers.length > 1 || $ctrl.stream.subscribers.length == 0">s</span></p></div><div><span class="mdi mdi-comment-outline"></span><p>{{$ctrl.stream.threads.length}} Thread<span ng-if="$ctrl.stream.threads.length > 1 || $ctrl.stream.threads.length == 0">s</span></p></div></div><div class="forum-search-container"><div ng-class="{\'has-focus\': $ctrl.search.hasFocus}"><label class="mdi mdi-magnify"></label> <input type="text" name="search" ng-model="$ctrl.threadsSearch" ng-change="$ctrl.search()" ng-focus="$ctrl.search.hasFocus=true" ng-blur="$ctrl.search.hasFocus=false"><md-menu md-offset="-15 60"><button class="large-mobile" ng-click="$mdOpenMenu()"><span>Filter</span></button><md-menu-content class="forum-search-dropdown"><md-menu-item><button ng-click="$ctrl.byScore()"><span>Score</span></button></md-menu-item><md-menu-item><button ng-click="$ctrl.byComments()"><span>Comments</span></button></md-menu-item><md-menu-item><button ng-click="$ctrl.bySaves()"><span>Saves</span></button></md-menu-item><md-menu-item><button ng-click="$ctrl.byDate()"><span>Date</span></button></md-menu-item></md-menu-content></md-menu></div></div><thread-list threads="$ctrl.threads" stream="$ctrl.stream" class="thread-list-component"></thread-list><div class="load-more-button" ng-if="!$ctrl.noMoreThreads"><button ng-click="$ctrl.loadMore()"><span>Load More</span></button></div></div>');
		$templateCache.put('public/app/pages/streams/subscribed/subscribed.html', '<div class="streams-subscribed-container"><header><h1>Your Streams</h1></header><div class="streams-subscribed-list-container"><streams-list streams="$ctrl.streams"></streams-list></div><div class="load-more-button streams-load-more-button" ng-if="!$ctrl.noMoreStreams"><button ng-click="$ctrl.loadMore()"><span>Load More</span></button></div></div>');
		$templateCache.put('public/app/pages/streams/trending/trending.html', '<div class="trending-streams-container"><header><h1>Hot Streams</h1></header><p>These are the most popular streams on Opinionable</p><div ng-repeat="item in $ctrl.streams | orderBy: \'-subscribers.length\'" class="trending-streams-repeat"><trending-stream stream="item"></trending-stream></div><div class="load-more-button streams-load-more-button" ng-if="!$ctrl.noMoreStreams"><button ng-click="$ctrl.loadMore()"><span>Load More</span></button></div></div>');
		$templateCache.put('public/app/pages/profile/activity/activity.html', '<div class="activity-page-container"><div class="activity-list-container"><div ng-repeat="item in $ctrl.activities"><div><span ng-if="item.action == \'liked\'">Liked this thread: <span ui-sref="app.singleThread({streamId: item.thread.stream, threadId: item.thread._id})">{{item.thread.title}}</span></span> <span ng-if="item.action == \'disliked\'">Disliked this thread: <span ui-sref="app.singleThread({streamId: item.thread.stream, threadId: item.thread._id})">{{item.thread.title}}</span></span> <span ng-if="item.action == \'saved\'">Saved this thread: <span ui-sref="app.singleThread({streamId: item.thread.stream, threadId: item.thread._id})">{{item.thread.title}}</span></span> <span ng-if="item.action ==\'unsaved\'">Unsaved this thread: <span ui-sref="app.singleThread({streamId: item.thread.stream, threadId: item.thread._id})">{{item.thread.title}}</span></span> <span ng-if="item.action ==\'new thread\'">Create a new thread: <span ui-sref="app.singleThread({streamId: item.thread.stream, threadId: item.thread._id})">{{item.thread.title}}</span></span> <span ng-if="item.action ==\'followed\'">Followed: <span ui-sref="app.profile.overview({userId: item.user._id})">{{item.user.name}}</span></span> <span ng-if="item.action ==\'unfollowed\'">Unfollowed: <span ui-sref="app.profile.overview({userId: item.user._id})">{{item.user.name}}</span></span> <span ng-if="item.action == \'new stream\'">Created a new stream: <span ui-sref="app.singleStream({streamId: item.stream._id})">{{item.stream.name}}</span></span> <span ng-if="item.action == \'subscribed\'">Subscribed to the stream: <span ui-sref="app.singleStream({streamId: item.stream._id})">{{item.stream.name}}</span></span> <span ng-if="item.action == \'unsubscribed\'">Unubscribed from the stream: <span ui-sref="app.singleStream({streamId: item.stream._id})">{{item.stream.name}}</span></span></div><div><span am-time-ago="item.created"></span></div></div></div></div>');
		$templateCache.put('public/app/pages/profile/dialogs/search.html', '<md-dialog class="users-search-dialog"><md-dialog-content><div class="users-search-dialog-header"><h3>Find a user</h3><button ng-click="$ctrl.close()" aria-label="close user search dialog"><i class="mdi mdi-close"></i></button></div><div class="users-search-body"><md-autocomplete md-search-text="$ctrl.search" md-items="item in $ctrl.items" md-search-text-change="$ctrl.doSearch($ctrl.search)" md-item-text="item.name" md-item-value="item._id" md-floating-label="search" md-selected-item-change="$ctrl.goToUser(item)" class="users-search-autocomplete"><md-item-template class="users-search-template"><div class="users-search-results"><img ng-src="{{item.picture}}" ng-if="item.picture"> <span md-highlight-text="search">{{item.name}} /@{{item.username}}</span></div></md-item-template></md-autocomplete></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/profile/comments/comments.html', '<comments-list comments="$ctrl.comments"></comments-list><div class="load-more-button" ng-if="!$ctrl.noMoreComments"><button ng-click="$ctrl.loadMore()"><span>Load More</span></button></div>');
		$templateCache.put('public/app/pages/profile/overview/overview.html', '<profile-overview user="$ctrl.user" class="overview-component-container"></profile-overview>');
		$templateCache.put('public/app/pages/profile/saved/saved.html', '<div class="profile-saved-container"><div class="profile-saved-items"><md-tabs class="profile-saved-tabs" md-dynamic-height><md-tab label="threads"><thread-list threads="$ctrl.threads"></thread-list></md-tab><md-tab label="comments"><comments-list comments="$ctrl.comments"></comments-list></md-tab></md-tabs></div></div>');
		$templateCache.put('public/app/pages/profile/threads/threads.html', '<thread-list threads="$ctrl.threads"></thread-list><div class="load-more-button" ng-if="!$ctrl.noMoreThreads"><button ng-click="$ctrl.loadMore()"><span>Load More</span></button></div>');
		$templateCache.put('public/app/pages/threads/single/single.html', '<div class="single-thread-page-container"><div class="single-thread-thread-container"><single-thread thread="$ctrl.thread" class="single-thread-thread-component"></single-thread></div><div class="forum-search-container"><div ng-class="{\'has-focus\': $ctrl.search.hasFocus}"><label class="mdi mdi-magnify"></label> <input type="text" name="search" ng-model="$ctrl.commentsSearch" ng-change="$ctrl.search()" ng-focus="$ctrl.search.hasFocus=true" ng-blur="$ctrl.search.hasFocus=false"><md-menu md-offset="-15 60"><button class="large-mobile" ng-click="$mdOpenMenu()"><span>Filter</span></button><md-menu-content class="forum-search-dropdown"><md-menu-item><button><span>Score</span></button></md-menu-item><md-menu-item><button><span>Saves</span></button></md-menu-item><md-menu-item><button><span>Date</span></button></md-menu-item></md-menu-content></md-menu></div></div><comments-list comments="$ctrl.comments" class="comments-list-component"></comments-list><div class="load-more-button" ng-if="!$ctrl.noMoreComments"><button ng-click="$ctrl.loadMore()"><span>Load More</span></button></div></div>');
		$templateCache.put('public/app/components/auth/login/login.component.html', '<div class="auth-form-container"><form name="$ctrl.loginForm" ng-submit="$ctrl.login($ctrl.loginForm.$valid)" novalidate><div class="auth-form-wrapper" ng-class="{\'has-focus\': $ctrl.loginForm.email.hasFocus, \'has-success\': $ctrl.loginForm.email.$valid, \'has-error\': $ctrl.loginForm.email.$error && $ctrl.loginForm.email.$touched && !$ctrl.loginForm.email.$valid, \'is-empty\': !$ctrl.loginForm.email.$viewValue}"><label>Email</label> <input type="email" name="email" ng-model="$ctrl.data.email" required ng-focus="$ctrl.loginForm.email.hasFocus=true" , ng-blur="$ctrl.loginForm.email.hasFocus=false"><div ng-messages="$ctrl.loginForm.email.$error" ng-if="$ctrl.loginForm.email.$touched && !$ctrl.loginForm.email.$valid" class="auth-form-error-container"><div ng-message="required"><span>Please provide an email</span></div></div></div><div class="auth-form-wrapper" ng-class="{\'has-focus\': $ctrl.loginForm.password.hasFocus, \'has-success\': $ctrl.loginForm.password.$valid, \'has-error\': $ctrl.loginForm.password.$error && $ctrl.loginForm.password.$touched && !$ctrl.loginForm.password.$valid, \'is-empty\': !$ctrl.loginForm.password.$viewValue}"><label>Password</label> <input type="password" name="password" ng-model="$ctrl.data.password" required ng-focus="$ctrl.loginForm.password.hasFocus=true" ng-blur="$ctrl.loginForm.password.hasFocus=false"><div ng-messages="$ctrl.loginForm.password.$error" ng-if="$ctrl.loginForm.password.$touched && !$ctrl.loginForm.password.$valid" class="auth-form-error-container"><div ng-message="required"><span>Sorry, you need your password</span></div></div></div><div class="auth-form-utilities"><div><md-checkbox ng-model="$ctrl.remember" md-true-value="\'isRemembered\'" ng-if="!$ctrl.isRemembered">Remember Me</md-checkbox><md-checkbox ng-model="$ctrl.forget" md-true-value="\'isForgotten\'" ng-if="$ctrl.isRemembered">Forget Me</md-checkbox></div><div><button ng-click="$ctrl.openPasswordReset()" type="button"><span>Forgot Password</span></button></div></div><div class="auth-form-submit"><button type="submit" aria-label="submit login form" ng-class="{\'form-valid\': $ctrl.loginForm.$valid}"><span>Login</span></button></div><div class="auth-form-other-link"><p>Don\'t have an account yet?</p><a ui-sref="app.signup">Signup Here</a></div></form></div>');
		$templateCache.put('public/app/components/auth/signup/signup.component.html', '<div class="auth-form-container"><form name="$ctrl.signupForm" ng-submit="$ctrl.signup($ctrl.signupForm.$valid)" novalidate><div class="auth-form-wrapper" ng-class="{\'has-focus\': $ctrl.signupForm.name.hasFocus, \'has-success\': $ctrl.signupForm.name.$valid, \'has-error\': $ctrl.signupForm.name.$error && $ctrl.signupForm.name.$touched && !$ctrl.signupForm.name.$valid, \'is-empty\': !$ctrl.signupForm.name.$viewValue}"><label>Name</label> <input type="text" name="name" ng-model="$ctrl.data.name" required ng-focus="$ctrl.signupForm.name.hasFocus=true" ng-blur="$ctrl.signupForm.name.hasFocus=false"><div ng-messages="$ctrl.signupForm.name.$error" ng-if="$ctrl.signupForm.name.$touched && !$ctrl.signupForm.name.$valid" class="auth-form-error-container"><div ng-message="required"><span>Sorry, your name is required</span></div></div></div><div class="auth-form-wrapper" ng-class="{\'has-focus\': $ctrl.signupForm.username.hasFocus, \'has-success\': $ctrl.signupForm.username.$valid, \'has-error\': $ctrl.signupForm.username.$error && $ctrl.signupForm.username.$touched && !$ctrl.signupForm.username.$valid, \'is-empty\': !$ctrl.signupForm.username.$viewValue}"><label>Username</label> <input type="text" name="username" ng-model="$ctrl.data.username" required ng-focus="$ctrl.signupForm.username.hasFocus=true" ng-blur="$ctrl.signupForm.username.hasFocus=false"><div ng-messages="$ctrl.signupForm.username.$error" ng-if="$ctrl.signupForm.username.$touched && !$ctrl.signupForm.username.$valid" class="auth-form-error-container"><div ng-message="required"><span>Sorry, your username is required</span></div></div></div><div class="auth-form-wrapper" ng-class="{\'has-focus\': $ctrl.signupForm.email.hasFocus, \'has-success\': $ctrl.signupForm.email.$valid, \'has-error\': $ctrl.signupForm.email.$error && $ctrl.signupForm.email.$touched && !$ctrl.signupForm.email.$valid, \'is-empty\': !$ctrl.signupForm.email.$viewValue}"><label>Email</label> <input type="email" name="email" ng-model="$ctrl.data.email" required ng-focus="$ctrl.signupForm.email.hasFocus=true" ng-blur="$ctrl.signupForm.email.hasFocus=false"><div ng-messages="$ctrl.signupForm.email.$error" ng-if="$ctrl.signupForm.email.$touched && !$ctrl.signupForm.email.$valid" class="auth-form-error-container"><div ng-message="required"><span>Sorry, your email is required</span></div></div></div><div class="auth-form-wrapper" ng-class="{\'has-focus\': $ctrl.signupForm.password.hasFocus, \'has-success\': $ctrl.signupForm.password.$valid, \'has-error\': $ctrl.signupForm.password.$error && $ctrl.signupForm.password.$touched && !$ctrl.signupForm.password.$valid, \'is-empty\': !$ctrl.signupForm.password.$viewValue}"><label>Password</label> <input type="password" name="password" ng-model="$ctrl.data.password" required ng-focus="$ctrl.signupForm.password.hasFocus=true" ng-blur="$ctrl.signupForm.password.hasFocus=false"><div ng-messages="$ctrl.signupForm.password.$error" ng-if="$ctrl.signupForm.password.$touched && !$ctrl.signupForm.password.$valid" class="auth-form-error-container"><div ng-message="required"><span>Sorry, you need a password</span></div></div></div><div class="auth-form-wrapper" ng-class="{\'has-focus\': $ctrl.signupForm.confirm.hasFocus, \'has-success\': $ctrl.signupForm.confirm.$valid, \'has-error\': $ctrl.signupForm.confirm.$error && $ctrl.signupForm.confirm.$touched && !$ctrl.signupForm.confirm.$valid, \'is-empty\': !$ctrl.signupForm.confirm.$viewValue}"><label>Confirm Password</label> <input type="password" name="confirm" ng-model="$ctrl.data.confirm" required ng-focus="$ctrl.signupForm.confirm.hasFocus=true" ng-blur="$ctrl.signupForm.confirm.hasFocus=false" compare-to="$ctrl.data.password"><div ng-messages="$ctrl.signupForm.confirm.$error" ng-if="!$ctrl.signupForm.confirm.$valid && $ctrl.signupForm.confirm.$touched" class="auth-form-error-container"><div ng-message="compareTo"><span>Sorry, your passwords do not match</span></div><div ng-message="required"><span>Sorry, you need to confirm your password</span></div></div></div><div class="auth-form-submit"><button type="submit" aria-label="submit signup form" ng-class="{\'form-valid\': $ctrl.signupForm.$valid}"><span>Sign up!</span></button></div><div class="auth-form-other-link"><p>Already have an account?</p><a ui-sref="app.login">Login Here</a></div></form></div>');
		$templateCache.put('public/app/components/auth/updateProfile/update.profile.html', '<div class="update-profile-component"><form name="$ctrl.updateProfileForm" ng-submit="$ctrl.updateProfile($ctrl.updateProfileForm.$valid)" novalidate><div class="update-profile-wrapper" ng-class="{\'has-focus\': $ctrl.updateProfileForm.gender.hasFocus, \'has-success\': $ctrl.updateProfileForm.gender.$valid && $ctrl.updateProfileForm.gender.$touched, \'is-blank\': !$ctrl.updateProfileForm.gender.$viewValue}"><label>Gender</label> <input type="text" name="gender" ng-model="$ctrl.data.gender" ng-focus="$ctrl.updateProfileForm.gender.hasFocus=true" ng-blur="$ctrl.updateProfileForm.gender.hasFocus=false"></div><div class="update-profile-wrapper" ng-class="{\'has-focus\': $ctrl.updateProfileForm.phone.hasFocus, \'has-success\': $ctrl.updateProfileForm.phone.$valid && $ctrl.updateProfileForm.phone.$touched, \'is-blank\': !$ctrl.updateProfileForm.phone.$viewValue}"><label>Phone</label> <input type="phone" name="phone" ng-model="$ctrl.data.phone" ng-focus="$ctrl.updateProfileForm.phone.hasFocus=true" ng-blur="$ctrl.updateProfileForm.phone.hasFocus=false"></div><div class="update-profile-wrapper" ng-class="{\'has-focus\': $ctrl.updateProfileForm.occupation.hasFocus, \'has-success\': $ctrl.updateProfileForm.occupation.$valid && $ctrl.updateProfileForm.occupation.$touched, \'is-blank\': !$ctrl.updateProfileForm.occupation.$viewValue}"><label>Occupation</label> <input type="text" name="occupation" ng-model="$ctrl.data.occupation" ng-focus="$ctrl.updateProfileForm.occupation.hasFocus=true" ng-blur="$ctrl.updateProfileForm.occupation.hasFocus=false"></div><div class="update-profile-wrapper update-profile-textarea-wrapper" ng-class="{\'has-focus\': $ctrl.updateProfileForm.interests.hasFocus, \'has-success\': $ctrl.updateProfileForm.interests.$valid && $ctrl.updateProfileForm.interests.$touched, \'is-blank\': !$ctrl.updateProfileForm.interests.$viewValue}"><label>Interests</label> <textarea type="text" name="interests" ng-model="$ctrl.data.interests" rows="7" ng-focus="$ctrl.updateProfileForm.interests.hasFocus=true" ng-blur="$ctrl.updateProfileForm.interests.hasFocus=false"></textarea></div><div class="update-profile-wrapper update-profile-textarea-wrapper" ng-class="{\'has-focus\': $ctrl.updateProfileForm.bio.hasFocus, \'has-success\': $ctrl.updateProfileForm.bio.$valid && $ctrl.updateProfileForm.bio.$touched, \'is-blank\': !$ctrl.updateProfileForm.bio.$viewValue}"><label>Bio</label> <textarea type="text" name="bio" ng-model="$ctrl.data.bio" rows="7" ng-focus="$ctrl.updateProfileForm.bio.hasFocus=true" ng-blur="$ctrl.updateProfileForm.bio.hasFocus=false"></textarea></div><div class="update-profile-wrapper update-profile-image-wrapper"><button type="button" ngf-select="$ctrl.uploadImage(file)" ng-model="file" name="file" ngf-pattern="\'image/*\'" accept="image/"><span>Upload Image</span></button></div><div class="update-profile-submit"><button type="submit" aria-label="Subit update profile form"><span>Submit</span></button></div></form></div>');
		$templateCache.put('public/app/components/chats/list/list.html', '<div class="chats-list-component" ng-if="!$ctrl.hideChats"><div ng-repeat="item in $ctrl.chats"><single-chat chat="item"></single-chat></div><div ng-if="!$ctrl.chats.length" class="no-chats"><p>You have no chats yet. You should message someone</p></div></div>');
		$templateCache.put('public/app/components/chats/messages/messages.html', '<div class="chats-messages-component"><md-content class="chats-messages-body" id="scrollContainer"><div ng-repeat="item in $ctrl.messages | orderBy: \'created\'" class="chats-message-repeat" ng-class="{\'current-user\': $ctrl.userId == item.creator._id}"><div class="chats-message"><img class="chats-avatar" ng-src="{{item.creator.picture}}" ui-sref="app.profile.overview({userId: item.creator._id})" ng-class="{\'online\': item.creator.loggedIn}"><div class="chats-bubble"><span>{{item.message}}</span><div class="chats-bubble-corner"></div></div></div><div class="chats-message-info"><span>{{item.creator.username}}</span> <span am-time-ago="item.created"></span></div></div></md-content><div class="chats-messages-form"><form name="$ctrl.chatForm" novalidate><div class="chats-form-wrapper" ng-class="{\'has-focus\': $ctrl.chatForm.message.hasFocus}"><label>Message</label> <textarea ng-model="$ctrl.data.message" ng-keyup="$event.keyCode == 13 && $ctrl.sendMessage($ctrl.chatForm.$valid)" name="message" required ng-focus="$ctrl.chatForm.message.hasFocus=true" ng-blur="$ctrl.chatForm.message.hasFocus=false"></textarea></div></form></div></div>');
		$templateCache.put('public/app/components/chats/single/single.html', '<div class="chats-single-container" ng-if="!$ctrl.chat.isDeleted"><div class="chats-single-single" ng-click="$ctrl.goToChat($ctrl.chat)"><div class="chats-single-header"><img ng-if="$ctrl.currentUser == $ctrl.chat.creator._id" ng-src="{{$ctrl.chat.participants[1].picture}}" ng-class="{\'online\': $ctrl.chat.participants[1].loggedIn}"> <img ng-if="!$ctrl.currentUser == $ctrl.chat.creator._id" ng-src="{{$ctrl.chat.participants[0].picture}}" ng-class="{\'online\': $ctrl.chat.participants[0].loggedIn}"><div class="chats-user-info"><h4 ng-if="$ctrl.currentUser == $ctrl.chat.creator._id">{{$ctrl.chat.participants[1].username}}</h4><h4 ng-if="$ctrl.currentUser != $ctrl.chat.creator._id">{{$ctrl.chat.participants[0].username}}</h4><p am-time-ago="$ctrl.chat.messages[0].created"></p></div></div><div class="chats-single-body"><p>{{$ctrl.chat.messages[0].message}}</p></div></div><div class="chats-single-actions"><div><button ng-click="$ctrl.toggleSave($ctrl.chat)"><i class="mdi mdi-heart-outline" ng-class="{\'saved\': $ctrl.chat.saved}"></i></button> <button ng-click="$ctrl.toggleRemove($ctrl.chat)"><i class="mdi mdi-delete" ng-class="{\'removed\': $ctrl.chat.isDeleted}"></i></button></div></div></div><div class="chats-single-container chats-trash-single-container" ng-if="$ctrl.chat.isDeleted && !$ctrl.hideRemoved"><div class="chats-single-single" ng-click="$ctrl.goToChat($ctrl.chat)"><div class="chats-single-header"><div></div><div class="chats-user-info"><h4>{{$ctrl.chat.participants[1].username}}</h4><p am-time-ago="$ctrl.chat.messages[0].created"></p></div></div><div class="chats-single-body"><p>{{$ctrl.chat.messages[0].message}}</p></div></div><div class="chats-single-actions"><div><button ng-click="$ctrl.toggleSave($ctrl.chat)"><i class="mdi mdi-heart-outline" ng-class="{\'saved\': $ctrl.chat.saved}"></i></button> <button ng-click="$ctrl.toggleRemove($ctrl.chat)"><i class="mdi mdi-delete" ng-class="{\'removed\': $ctrl.chat.isDeleted}"></i></button></div></div></div>');
		$templateCache.put('public/app/components/profile/header/profile.header.component.html', '<div class="profile-header-component-container"><div class="profile-header-info"><img ng-src="{{$ctrl.user.picture}}" class="profile-header-image" ng-class="{\'is-online\': $ctrl.user.loggedIn}"><div class="profile-header-user"><h4>{{$ctrl.user.name}}</h4><p>{{$ctrl.user.username}}</p></div><div class="profile-header-options"><md-menu class="profile-header-dropdown" ng-if="$ctrl._isLoggedIn"><button ng-click="$mdOpenMenu()"><span>Options</span></button><md-menu-content><md-menu-item ng-if="$ctrl.currentUser._id != $ctrl.user._id && !$ctrl.alreadyFollowing"><button ng-click="$ctrl.follow($ctrl.user)"><span>Follow</span></button></md-menu-item><md-menu-item ng-if="$ctrl.currentUser._id != $ctrl.user._id && $ctrl.alreadyFollowing"><button ng-click="$ctrl.unfollow($ctrl.user)"><span>Unfollow</span></button></md-menu-item><md-menu-item ng-if="$ctrl.currentUser._id != $ctrl.user._id" ng-click="$ctrl.message(item)"><button><span>Message</span></button></md-menu-item><md-menu-item ng-if="$ctrl.currentUser._id == $ctrl.user._id" ng-click="$ctrl.openEditProfile(item)"><button><span>Edit Profile</span></button></md-menu-item><md-menu-item ng-if="$ctrl.currentUser._id == $ctrl.user._id" ng-click="$ctrl.resetPassword()"><button><span>Reset Password</span></button></md-menu-item><md-menu-item ng-if="$ctrl.currentUser._id == $ctrl.user._id"><button><span>Upload Image</span></button></md-menu-item></md-menu-content></md-menu></div></div></div>');
		$templateCache.put('public/app/components/profile/overview/profile.overview.component.html', '<div class="profile-overview-component"><div><div class="general-info"><div><h3>Name</h3><span>{{$ctrl.user.name}}</span></div><div><h3>Username</h3><span>{{$ctrl.user.username}}</span></div><div><h3>Email</h3><span>{{$ctrl.user.email}}</span></div><div><h3>Gender</h3><span>{{$ctrl.user.gender}}</span></div><div><h3>Birthday</h3><span>Satan</span></div></div><div class="other-info"><div><h3>Occupation</h3><span>{{$ctrl.user.occupation}}</span></div><div><h3>Interests</h3><span>{{$ctrl.user.interests}}</span></div><div><h3>Bio</h3><span>{{$ctrl.user.bio}}</span></div></div></div><div><div class="score-container"><div><i class="mdi mdi-check"></i> <span>Thread Score</span> <span>{{$ctrl.user.threadScore}}</span></div><div><i class="mdi mdi-check"></i> <span>Comment Score</span> <span>{{$ctrl.user.commentScore}}</span></div></div><div class="friends-list"><div class="friends-list-header"><div><h3>Friends</h3></div><span ng-if="$ctrl.user.following">{{$ctrl.user.following.length}} Friend<span ng-if="$ctrl.user.following.length > 1 || $ctrl.user.following.length == 0">s</span></span></div><div class="friends-list-body"><div ng-repeat="item in $ctrl.user.following" ui-sref="app.profile.overview({userId: item._id})" class="profile-friends-list-repeat"><img ng-src="{{item.picture}}"><p>{{item.name}}</p><p>{{item.username}}</p></div><div class="friends-list-no-friends" ng-if="!$ctrl.user.following.length"><p>{{$ctrl.user.username}} is not following anyone</p></div></div><div class="friends-list-footer"><div><button><span ng-if="$ctrl.friends.length > 3">See all {{$ctrl.user.following.length}} Friends></span></button></div></div></div></div></div>');
		$templateCache.put('public/app/components/shared/nav/nav.html', '<nav class="nav"><div class="nav-left"><div class="nav-item"><a ui-sref="app.home"><button><span>Opinionated</span></button></a></div><div class="nav-item"><md-menu md-offset="-45 73"><button ng-click="$mdOpenMenu()"><span>Streams</span></button><md-menu-content class="nav-item-dropdown"><md-menu-item><button ui-sref="app.streamsList"><span>All</span></button></md-menu-item><md-menu-item ng-repeat="item in $ctrl.streams"><button ui-sref="app.singleStream({streamId: item._id})"><span>{{item.name}}</span></button></md-menu-item></md-menu-content></md-menu></div></div><div class="nav-right"><div class="nav-item" ng-if="!$ctrl.isLoggedIn"><a ui-sref="app.signup"><button><span>Signup</span></button></a></div><div class="nav-item" ng-if="!$ctrl.isLoggedIn"><a ui-sref="app.login"><button><span>Login</span></button></a></div><div class="nav-item nav-menu-icon" ng-if="$ctrl.isLoggedIn"><md-menu class="nav-chats-menu" md-offset="0 15"><button ng-click="$mdOpenMenu()"><span class="mdi mdi-email"><div ng-if="$ctrl.messageCount > 0" class="nav-notification-count"><span>{{$ctrl.messageCount}}</span></div></span></button><md-menu-content class="nav-messages-dropdown"><md-menu-item ng-repeat="item in $ctrl.chats" ng-if="$ctrl.messageCount > 0"><div class="message" ng-click="$ctrl.doChatAction(item)"><div class="message-header"><div><div ng-if="item.lastAccessed[0].user == $ctrl.user._id && item.lastAccessed[0].unread > 0"><span>{{item.lastAccessed[0].unread}}</span></div><div ng-if="item.lastAccessed[1].user == $ctrl.user._id && item.lastAccessed[1].unread > 0"><span>{{item.lastAccessed[1].unread}}</span></div></div><p ng-if="$ctrl.user._id == item.creator._id">{{item.participants[1].username}}</p><p ng-if="$ctrl.user._id !== item.creator._id">{{item.participants[0].username}}</p></div><div class="message-body"><p>{{item.messages[0].message}}</p></div></div></md-menu-item><md-menu-item ng-if="$ctrl.messageCount == 0" class="no-messages"><div><p>No Unread Messages</p></div></md-menu-item><md-menu-item ui-sref="app.chats.inbox" class="see-all-messages"><p>See all Messages</p></md-menu-item></md-menu-content></md-menu></div><div class="nav-item nav-menu-icon" ng-if="$ctrl.isLoggedIn"><md-menu class="nav-notifications-menu" md-offset="0 15"><button ng-click="$mdOpenMenu()"><span class="mdi mdi-bell"><div ng-if="$ctrl.notificationCount > 0" class="nav-notification-count"><span>{{$ctrl.notificationCount}}</span></div></span></button><md-menu-content class="nav-notifications-dropdown"><md-menu-item ng-repeat="item in $ctrl.notifications" ng-if="$ctrl.notifications.length"><div class="notification" ng-click="$ctrl.notificationAction(item)"><div class="notification-header"><div></div><p>{{item.display.text}}</p></div><span am-time-ago="item.created"></span></div></md-menu-item><md-menu-item ng-click="$ctrl.markAsRead()" ng-if="$ctrl.notifications.length" class="mark-all-as-read"><p>Mark all as read</p></md-menu-item><md-menu-item ng-if="!$ctrl.notifications.length" class="no-notifications"><div><p>You have no new notifications</p></div></md-menu-item></md-menu-content></md-menu></div><div class="nav-item nav-menu-icon" ng-if="$ctrl.isLoggedIn"><button ng-click="$ctrl.openUserMenu()"><span class="mdi mdi-menu"></span></button></div></div></nav><div class="nav-notifications-container" ng-if="$ctrl.showNotifications"><div><div ng-repeat="item in $ctrl.notifications"><p>{{item.display.text}}</p><span am-time-ago="item.created"></span></div></div></div><md-sidenav class="md-sidenav-left user-menu" md-component-id="user-menu" md-whiteframe="4" flex><div class="user-menu-user-info"><img ng-if="$ctrl.user.picture" ng-src="{{$ctrl.user.picture}}"><p>{{$ctrl.user.username}}</p><p>{{$ctrl.user.email}}</p></div><md-list class="user-menu-body"><md-list-item md-ink-ripple class="first-item" ng-class="{\'open\': $ctrl.showProfile}"><div><i class="mdi mdi-account"></i></div><div class="inset"><span>Profile</span></div><button class="md-secondary" ng-click="$ctrl.showProfile = !$ctrl.showProfile"><i class="mdi mdi-chevron-down"></i></button></md-list-item><ul class="user-menu-nested-list" ng-show="$ctrl.showProfile"><div><li><button class="md-ink-ripple" ui-sref="app.profile.overview({userId: $ctrl.user._id})"><span>Overview</span></button></li></div><div><li><button class="md-ink-ripple" ui-sref="app.profile.threads({userId: $ctrl.user._id})"><span>Threads</span></button></li></div><div><li><button class="md-ink-ripple" ui-sref="app.profile.comments({userId: $ctrl.user._id})"><span>Comments</span></button></li></div><div><li><button class="md-ink-ripple" ui-sref="app.profile.saved({userId: $ctrl.user._id})"><span>Saved</span></button></li></div><div><li><button class="md-ink-ripple" ui-sref="app.profile.activity({userId: $ctrl.user._id})"><span>Activity</span></button></li></div></ul><md-list-item md-ink-ripple ng-class="{\'open\': $ctrl.showMessages}"><div><i class="mdi mdi-comment-outline"></i></div><div class="inset"><span>Messages</span></div><button class="md-secondary" ng-click="$ctrl.showMessages = !$ctrl.showMessages"><i class="mdi mdi-chevron-down"></i></button></md-list-item><ul class="user-menu-nested-list" ng-show="$ctrl.showMessages"><div><li><button class="md-ink-ripple" ui-sref="app.chats.inbox"><span>Inbox</span></button></li></div><div><li><button class="md-ink-ripple" ui-sref="app.chats.saved"><span>Saved</span></button></li></div><div><li><button class="md-ink-ripple" ui-sref="app.chats.trash"><span>Trash</span></button></li></div></ul><md-list-item md-ink-ripple ng-class="{\'open\': $ctrl.showStreams}"><div><i class="mdi mdi-book"></i></div><div class="inset"><span>Streams</span></div><button class="md-secondary" ng-click="$ctrl.showStreams = !$ctrl.showStreams"><i class="mdi mdi-chevron-down"></i></button></md-list-item><ul class="user-menu-nested-list" ng-show="$ctrl.showStreams"><div><li><button class="md-ink-ripple" ui-sref="app.streamsList"><span>All</span></button></li></div><div><li><button class="md-ink-ripple" ui-sref="app.trendingStreams"><span>Trending</span></button></li></div><div><li><button class="md-ink-ripple" ui-sref="app.subscribedStreams"><span>Subscribed</span></button></li></div><div><li><button class="md-ink-ripple" ng-click="$ctrl.openCreateStream()"><span>Create</span></button></li></div></ul><md-list-item md-ink-ripple ng-class="{\'open\': $ctrl.showSearch}"><div><i class="mdi mdi-magnify"></i></div><div class="inset"><span>Search</span></div><button class="md-secondary" ng-click="$ctrl.showSearch = !$ctrl.showSearch"><i class="mdi mdi-chevron-down"></i></button></md-list-item><ul class="user-menu-nested-list" ng-show="$ctrl.showSearch"><div><li><button class="md-ink-ripple" ng-click="$ctrl.openUsersSearch()"><span>Users</span></button></li></div><div><li><button class="md-ink-ripple" ng-click="$ctrl.openStreamSearch()"><span>Streams</span></button></li></div><div><li><button class="md-ink-ripple" ng-click="$ctrl.openThreadSearch()"><span>Threads</span></button></li></div></ul><md-list-item md-ink-ripple><div><i class="mdi mdi-pencil"></i></div><div class="inset" ng-click="$ctrl.openCreateThread()"><span>Add Thread</span></div></md-list-item></md-list><div class="logout-container" ng-click="$ctrl.logout()"><div><i class="mdi mdi-emoticon-poop"></i></div><div><span>Logout</span></div></div></md-sidenav>');
		$templateCache.put('public/app/pages/streams/dialogs/create/create.html', '<md-dialog class="streams-create-dialog"><md-dialog-content><div class="streams-create-dialog-header"><h3>Create A Stream</h3><button ng-click="$ctrl.close()" aria-label="Close create stream dialog"><i class="mdi mdi-close"></i></button></div><p>Once you are finished here, you can upload an image for your stream by click on the default image at the top of your stream</p><div class="streams-create-dialog-form"><create-stream></create-stream></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/streams/dialogs/search/search.html', '<md-dialog class="users-search-dialog"><md-dialog-content><div class="users-search-dialog-header"><h3>Find a Stream</h3><button ng-click="$ctrl.close()" aria-label="close user search dialog"><i class="mdi mdi-close"></i></button></div><div class="users-search-body"><md-autocomplete md-search-text="$ctrl.search" md-items="item in $ctrl.items" md-search-text-change="$ctrl.doSearch($ctrl.search)" md-item-text="item.name" md-item-value="item._id" md-floating-label="search" md-selected-item-change="$ctrl.goToThread(item)" class="users-search-autocomplete"><md-item-template class="users-search-template"><span md-highlight-text="search">{{item.name}}</span></md-item-template></md-autocomplete></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/profile/dialogs/edit/profile.edit.html', '<md-dialog class="profile-edit-dialog"><md-dialog-content><div class="profile-edit-dialog-header"><h3>Edit your profile</h3><button ng-click="$ctrl.close()" aria-label="close edit profile dialog"><i class="mdi mdi-close"></i></button></div><div class="profile-edit-dialog-content"><update-profile user="$ctrl.user"></update-profile></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/profile/dialogs/message/message.html', '<md-dialog class="profile-message-dialog"><md-dialog-content><div class="profile-message-dialog-header"><button ng-click="$ctrl.close()"><i class="mdi mdi-close"></i></button></div><p>Send {{$ctrl.user.username}} a message</p><form name="$ctrl.messageForm" ng-submit="$ctrl.sendMessage($ctrl.messageForm.$valid)" novalidate><div class="profile-dialog-wrapper" ng-class="{\'has-focus\': $ctrl.messageForm.message.hasFocus, \'has-success\': $ctrl.messageForm.message.$valid && $ctrl.messageForm.message.$touched, \'has-error\': $ctrl.messageForm.message.$error && $ctrl.messageForm.message.$touched && !$ctrl.messageForm.message.$valid, \'is-empty\': !$ctrl.messageForm.message.$viewValue}"><label>Message</label> <textarea name="message" ng-model="$ctrl.data.message" rows="7" required></textarea></div><div class="profile-dialog-submit"><button type="submit" aria-label="submit message button" ng-class="{\'valid\': $ctrl.messageForm.$valid}"><span>Send</span></button></div></form></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/profile/dialogs/reset/reset.html', '<md-dialog class="profile-reset-dialog"><md-dialog-content><div class="profile-reset-dialog-header"><h3>Change Password</h3><button ng-click="$ctrl.close()" aria-label="close reset password dialog"><i class="mdi mdi-close"></i></button></div><div class="profile-reset-dialog-form"><form name="$ctrl.resetPasswordForm" ng-submit="$ctrl.resetPassword($ctrl.resetPasswordForm.$valid)" novalidate><div class="update-profile-wrapper" ng-class="{\'has-focus\': $ctrl.resetPasswordForm.password.hasFocus, \'has-success\': $ctrl.resetPasswordForm.password.$valid, \'has-error\': $ctrl.resetPasswordForm.password.$error && $ctrl.resetPasswordForm.password.$touched && !$ctrl.resetPasswordForm.password.$valid, \'is-blank\': !$ctrl.resetPasswordForm.password.$viewValue}"><label>Old Password</label> <input type="password" ng-model="$ctrl.data.password" name="password" required ng-focus="$ctrl.resetPasswordForm.password.hasFocus=true" ng-blur="$ctrl.resetPasswordForm.password.hasFocus=false"></div><div class="update-profile-wrapper" ng-class="{\'has-focus\': $ctrl.resetPasswordForm.newPassword.hasFocus, \'has-success\': $ctrl.resetPasswordForm.newPassword.$valid, \'has-error\': $ctrl.resetPasswordForm.newPassword.$error && $ctrl.resetPasswordForm.newPassword.$touched && !$ctrl.resetPasswordForm.newPassword.$valid, \'is-blank\': !$ctrl.resetPasswordForm.newPassword.$viewValue}"><label>New Password</label> <input type="password" ng-model="$ctrl.data.newPassword" name="newPassword" required ng-focus="$ctrl.resetPasswordForm.newPassword.hasFocus=true" ng-blur="$ctrl.resetPasswordForm.newPassword.hasFocus=false"></div><div class="update-profile-wrapper" ng-class="{\'has-focus\': $ctrl.resetPasswordForm.confirm.hasFocus, \'has-success\': $ctrl.resetPasswordForm.confirm.$valid, \'has-error\': $ctrl.resetPasswordForm.confirm.$error && $ctrl.resetPasswordForm.confirm.$touched && !$ctrl.resetPasswordForm.confirm.$valid, \'is-blank\': !$ctrl.resetPasswordForm.confirm.$viewValue}"><label>Confirm New Password</label> <input type="password" ng-model="$ctrl.data.confirm" name="confirm" required compare-to="$ctrl.data.newPassword" ng-focus="$ctrl.resetPasswordForm.confirm.hasFocus=true" ng-blur="$ctrl.resetPasswordForm.confirm.hasFocus=false"></div><div class="profile-reset-submit"><button type="submit" aria-label="submit reset password dialog" ng-class="{\'is-valid\': $ctrl.resetPasswordForm.$valid}"><span>Change Password</span></button></div></form></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/threads/dialogs/create/create.anywhere.html', '<md-dialog class="create-anywhere-dialog"><md-dialog-content><div class="create-anywhere-dialog-header"><h3>Create a Thread</h3><button ng-click="$ctrl.close()"><i class="mdi mdi-close"></i></button></div><div class="create-anywhere-dialog-content"><form name="$ctrl.createThread" ng-submit="$ctrl.create($ctrl.createThread.$valid)" novalidate><div class="forum-form-wrapper" ng-class="{\'has-focus\': $ctrl.createThread.title.hasFocus, \'has-success\': $ctrl.createThread.title.$valid, \'has-error\': $ctrl.createThread.title.$error && $ctrl.createThread.title.$touched && !$ctrl.createThread.title.$valid, \'is-empty\': !$ctrl.createThread.title.$viewValue}"><label>Name</label> <input type="text" name="title" ng-model="$ctrl.data.title" required ng-focus="$ctrl.createThread.title.hasFocus=true" ng-blur="$ctrl.createThread.title.hasFocus=false"></div><div class="forum-form-wrapper" ng-class="{\'has-focus\': $ctrl.createThread.content.hasFocus, \'has-success\': $ctrl.createThread.content.$valid && $ctrl.createThread.content.$touched, \'has-error\': $ctrl.createThread.content.$error && $ctrl.createThread.content.$touched && !$ctrl.createThread.content.$valid, \'is-empty\': !$ctrl.createThread.content.$viewValue}"><label>Description</label> <textarea rows="7" cols="40" ng-model="$ctrl.data.content" name="content" ng-focus="$ctrl.createThread.content.hasFocus=true" ng-blur="$ctrl.createThread.content.hasFocus=false">\n\t\t\t\t\t</textarea></div><div class="forum-form-wrapper forum-link-input" ng-class="{\'has-focus\': $ctrl.createThread.link.hasFocus, \'has-success\': $ctrl.createThread.link.$valid && $ctrl.createThread.content.$touched, \'has-error\': $ctrl.createThread.link.$error && $ctrl.createThread.link.$touched && !$ctrl.createThread.link.$valid, \'is-empty\': !$ctrl.createThread.link.$viewValue}" ng-if="$ctrl.hasLink"><label>Link</label> <input type="text" name="link" ng-model="$ctrl.data.link" ng-focus="$ctrl.createThread.link.hasFocus=true" ng-blur="$ctrl.createThread.link.hasFocus=false"></div><div class="forum-form-wrapper"><md-select ng-model="$ctrl.data.stream" placeholder="In what Stream?" class="thread-create-select"><md-option ng-value="stream._id" ng-repeat="stream in $ctrl.streams">{{stream.name}}</md-option></md-select></div><div class="forum-form-check"><md-checkbox ng-model="$ctrl.link" md-true-value="hasLink" ng-change="$ctrl.makeLink()">Should this be a link?</md-checkbox></div><div class="forum-form-submit"><button type="submit" aria-label="submit create thread form" ng-class="{\'form-valid\': $ctrl.createThread.$valid}"><span>Create!</span></button></div></form></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/threads/dialogs/create/create.comment.html', '<md-dialog class="streams-create-dialog"><md-dialog-content><div class="streams-create-dialog-header"><h3>Create A Comment</h3><button ng-click="$ctrl.close()" aria-label="Close create stream dialog"><i class="mdi mdi-close"></i></button></div><div class="streams-create-dialog-form"><create-comment thread="$ctrl.threadId"></create-comment></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/threads/dialogs/create/create.html', '<md-dialog class="streams-create-dialog"><md-dialog-content><div class="streams-create-dialog-header"><h3>Create A Thread</h3><button ng-click="$ctrl.close()" aria-label="Close create stream dialog"><i class="mdi mdi-close" ng-click="$ctrl.close()"></i></button></div><div class="streams-create-dialog-form"><create-thread stream="$ctrl.stream"></create-thread></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/threads/dialogs/delete/delete.comment.html', '<md-dialog class="thread-delete-dialog"><md-dialog-content><div><div class="thread-delete-dialog-header"><h3>Delete Comment</h3><button ng-click="$ctrl.close()"><i class="mdi mdi-close"></i></button></div></div><div class="thread-delete-dialog-body"><p>Are you sure you want to PERMENANTLY delete this comment?</p></div></md-dialog-content><md-dialog-actions class="thread-delete-dialog-actions"><button ng-click="$ctrl.delete()"><span>Delete</span></button> <button ng-click="$ctrl.close()"><span>Nevermind</span></button></md-dialog-actions></md-dialog>');
		$templateCache.put('public/app/pages/threads/dialogs/delete/delete.html', '<md-dialog class="thread-delete-dialog"><md-dialog-content><div class="thread-delete-dialog-header"><h3>Delete Thread</h3><button ng-click="$ctrl.close()"><i class="mdi mdi-close"></i></button></div><div class="thread-delete-dialog-body"><p>Are you sure you want to PERMENANTLY delete this thread?</p></div></md-dialog-content><md-dialog-actions class="thread-delete-dialog-actions"><button ng-click="$ctrl.delete()"><span>Delete</span></button> <button ng-click="$ctrl.close()"><span>Nevermind</span></button></md-dialog-actions></md-dialog>');
		$templateCache.put('public/app/pages/threads/dialogs/edit/edit.comment.html', '<md-dialog class="thread-delete-dialog"><md-dialog-content><div><div class="thread-delete-dialog-header"><h3>Edit Comment</h3><button ng-click="$ctrl.close()"><i class="mdi mdi-close"></i></button></div></div><div class="thread-dialog-edit"><div class="thread-edit-container"><edit-comment comment="$ctrl._item"></edit-comment></div></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/threads/dialogs/edit/edit.html', '<md-dialog class="thread-dialog"><md-dialog-content class="thread-dialog-content"><div class="thread-dialog-header"><h3>Edit Thread</h3><button ng-click="$ctrl.close()"><i class="mdi mdi-close"></i></button></div><div class="thread-dialog-edit"><edit-thread thread="$ctrl._item"></edit-thread></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/pages/threads/dialogs/search/search.html', '<md-dialog class="users-search-dialog"><md-dialog-content><div class="users-search-dialog-header"><h3>Find a thread</h3><button ng-click="$ctrl.close()" aria-label="close user search dialog"><i class="mdi mdi-close"></i></button></div><div class="users-search-body"><md-autocomplete md-search-text="$ctrl.search" md-items="item in $ctrl.items" md-search-text-change="$ctrl.doSearch($ctrl.search)" md-item-text="item.title" md-item-value="item._id" md-floating-label="search" md-selected-item-change="$ctrl.goToThread(item)" class="users-search-autocomplete"><md-item-template class="users-search-template"><span md-highlight-text="search">{{item.title}}</span></md-item-template></md-autocomplete></div></md-dialog-content></md-dialog>');
		$templateCache.put('public/app/components/forum/comments/create/comments.create.component.html', '<div class="forum-create-container"><form name="$ctrl.createComment" ng-submit="$ctrl.create($ctrl.createComment.$valid)" novalidate><div class="forum-form-wrapper" ng-class="{\'has-focus\': $ctrl.createComment.content.hasFocus, \'has-success\': $ctrl.createComment.content.$valid && $ctrl.createComment.content.$touched, \'has-error\': $ctrl.createComment.content.$error && $ctrl.createComment.content.$touched && !$ctrl.createComment.content.$valid, \'is-empty\': !$ctrl.createComment.content.$viewValue}"><label>Description</label> <textarea rows="7" cols="40" ng-model="$ctrl.data.content" name="content" ng-focus="$ctrl.createComment.content.hasFocus=true" ng-blur="$ctrl.createComment.content.hasFocus=false" required>\n\t\t\t</textarea></div><div class="forum-form-submit"><button type="submit" aria-label="submit create thread form" ng-class="{\'form-valid\': $ctrl.createComment.$valid}"><span>Create!</span></button></div></form></div>');
		$templateCache.put('public/app/components/forum/comments/edit/edit.html', '<div class="thread-edit-container"><form name="$ctrl.editComment" ng-submit="$ctrl.edit($ctrl.editComment.$valid)" novalidate class="edit-thread-form"><div class="forum-form-wrapper" ng-class="{\'has-focus\': $ctrl.editComment.content.hasFocus, \'has-success\': $ctrl.editComment.content.$valid, \'has-error\': $ctrl.editComment.content.$error && $ctrl.editComment.content.$touched && !$ctrl.editComment.content.$valid, \'is-empty\': !$ctrl.editComment.content.$viewValue}"><label>Content</label> <textarea name="content" ng-model="$ctrl.comment.content" ng-focus="$ctrl.editComment.content.hasFocus=true" ng-blur="$ctrl.editComment.content.hasFocus=false" rows="7" cols="40" required></textarea></div><div class="forum-form-submit"><button type="submit" ng-class="{\'form-valid\': $ctrl.editComment.$valid}"><span>Edit</span></button></div></form></div>');
		$templateCache.put('public/app/components/forum/comments/list/comments.list.component.html', '<div class="forum-list-component-container"><div ng-repeat="item in $ctrl.comments" class="forum-single-repeat comment-list-repeat"><single-comment comment="item"></single-comment></div><div ng-if="!$ctrl.comments.length" class="forum-list-no-items"><p>It doesn\'t look like there is anything here</p><span>You should create a <span>new comment!</span></span></div><md-button class="md-fab forum-create-button" ng-click="$ctrl.openCreateComment()" ng-if="!$ctrl.hideCreate"><i class="mdi mdi-pencil"></i></md-button></div>');
		$templateCache.put('public/app/components/forum/comments/single/comments.single.component.html', '<div class="forum-single-component comment-single-component"><div class="forum-single-container comment-single-container"><div class="forum-single-header"><img class="forum-creator-image" ng-class="{\'is-online\': $ctrl.comment.creator.loggedIn}" ng-src="{{$ctrl.comment.creator.picture}}"><div class="forum-created-info"><h4 ui-sref="app.profile.overview({userId: $ctrl.comment.creator._id})">{{$ctrl.comment.creator.username}}</h4><p am-time-ago="$ctrl.comment.created"></p></div><div class="forum-score-container below-mobile"><span class="mdi mdi-chevron-up" ng-class="{\'liked\': $ctrl.comment.liked}" ng-click="$ctrl.like($ctrl.comment)"></span> <span ng-class="{\'positive\': $ctrl.comment.score >= 1, \'negative\': $ctrl.comment.score <= -1}">{{$ctrl.comment.score}}</span> <span class="mdi mdi-chevron-down" ng-class="{\'disliked\': $ctrl.comment.disliked}" ng-click="$ctrl.dislike($ctrl.comment)"></span></div></div><div class="forum-single-content comment-single-content"><p>{{$ctrl.comment.content}}</p></div></div><div class="forum-single-info"><div class="left"><div class="forum-single-info-text"><button><span>{{$ctrl.comment.saves.length}}</span><p>Save<span ng-if="$ctrl.comment.saves.length > 1 || $ctrl.comment.saves.length == 0">s</span></p></button></div></div><div class="right"><div class="forum-single-info-text"><button ng-click="$ctrl.toggleSave($ctrl.comment)"><i class="mdi mdi-heart-outline" ng-class="{\'saved\': $ctrl.comment.saved}"></i></button></div><div class="forum-single-info-item" ng-if="$ctrl.moderator || $ctrl.currentUser == $ctrl.comment.creator._id"><button ng-click="$ctrl.openEditComment($ctrl.comment)"><i class="mdi mdi-pencil"></i></button></div><div class="forum-single-info-item" ng-if="$ctrl.moderator || $ctrl.currentUser == $ctrl.comment.creator._id"><button ng-click="$ctrl.openDeleteComment($ctrl.comment)"><i class="mdi mdi-delete"></i></button></div></div></div></div>');
		$templateCache.put('public/app/components/forum/streams/create/stream.create.component.html', '<div class="forum-create-container"><form name="$ctrl.createStream" ng-submit="$ctrl.create($ctrl.createStream.$valid)" novalidate><div class="forum-form-wrapper" ng-class="{\'has-focus\': $ctrl.createStream.name.hasFocus, \'has-success\': $ctrl.createStream.name.$valid, \'has-error\': $ctrl.createStream.name.$error && $ctrl.createStream.name.$touched && !$ctrl.createStream.name.$valid, \'is-empty\': !$ctrl.createStream.name.$viewValue}"><label>Name</label> <input type="text" name="name" ng-model="$ctrl.data.name" required ng-focus="$ctrl.createStream.name.hasFocus=true" ng-blur="$ctrl.createStream.name.hasFocus=false"></div><div class="forum-form-wrapper" ng-class="{\'has-focus\': $ctrl.createStream.description.hasFocus, \'has-success\': $ctrl.createStream.description.$valid, \'has-error\': $ctrl.createStream.description.$error && $ctrl.createStream.description.$touched && !$ctrl.createStream.description.$valid, \'is-empty\': !$ctrl.createStream.description.$viewValue}"><label>Description</label> <textarea rows="7" cols="40" ng-model="$ctrl.data.description" name="description" ng-focus="$ctrl.createStream.description.hasFocus=true" ng-blur="$ctrl.createStream.description.hasFocus=false" required>\n\t\t\t</textarea></div><div class="forum-form-submit"><button type="submit" aria-label="submit create stream form" ng-class="{\'form-valid\': $ctrl.createStream.$valid}"><span>Create!</span></button></div></form></div>');
		$templateCache.put('public/app/components/forum/streams/list/streams.list.component.html', '<div class="forum-list-component-container"><div class="forum-list-view"><div class="forum-list-list"><div ng-repeat="item in $ctrl.streams | orderBy: $ctrl.rowFilter" class="forum-single-repeat"><single-stream stream="item"></single-stream></div></div><div class="forum-side-bar above-tablet" ng-if="!$ctrl.hideTrending && $ctrl.streams.length"><div class="forum-trending-list"><div class="forum-trending-header"><h4>Trending</h4></div><div ng-repeat=\'item in $ctrl.streams | orderBy: "-subscribers.length" | limitTo: "15"\' class="forum-trending-repeat"><trending-stream stream="item" class="forum-trending-component-container"></trending-stream></div></div></div></div><div ng-if="!$ctrl.streams.length && !$ctrl.hideNoItems" class="forum-list-no-items"><p>It doesn\'t look like there is anything here</p><span>You should create a <span>new stream!</span></span></div><md-button class="md-fab forum-create-button" ng-click="$ctrl.openCreateStream()" ng-if="!$ctrl.hideCreate"><i class="mdi mdi-pencil"></i></md-button></div>');
		$templateCache.put('public/app/components/forum/streams/single/streams.single.component.html', '<div class="forum-single-component"><div class="forum-single-container stream-single-container" ui-sref="app.singleStream({streamId: $ctrl.stream._id})"><div class="forum-single-left"><img ng-src="{{$ctrl.stream.picture}}"></div><div class="forum-single-content"><h3>{{$ctrl.stream.name}}</h3><p>{{$ctrl.stream.description}}</p></div></div><div class="forum-single-info"><div class="left"><div class="stream-single-info-text"><span ng-class="{\'subscribed\': $ctrl.stream.subscribed}">{{$ctrl.stream.subscribers.length}}</span><p>Subscriber<span ng-if="$ctrl.stream.subscribers.length > 1 || $ctrl.stream.subscribers.length == 0">s</span></p></div><div class="stream-single-info-text"><span class="stream-info-data">{{$ctrl.stream.threads.length}}</span><p>Thread<span ng-if="$ctrl.stream.threads.length > 1 || $ctrl.stream.threads.length == 0">s</span></p></div></div><div class="right"><div><button ng-click="$ctrl.toggleSubscribe($ctrl.stream)"><i class="mdi mdi-star-outline" ng-class="{\'subscribed\': $ctrl.stream.subscribed}"></i></button></div></div></div></div>');
		$templateCache.put('public/app/components/forum/streams/trending/streams.trending.component.html', '<div class="forum-single-trending-component"><div class="forum-single-trending"><div><p>{{$ctrl.stream.name}}</p></div><div><div><span>{{$ctrl.stream.subscribers.length}} Subscriber<span ng-if="$ctrl.stream.subscribers.length > 1 || $ctrl.stream.subscribers.length == 0">s</span></span></div><div><i class="mdi mdi-star-outline" ng-class="{\'subscribed\': $ctrl.stream.subscribed}" ng-click="$ctrl.toggleSubscribe($ctrl.stream)"></i></div></div></div></div>');
		$templateCache.put('public/app/components/forum/threads/edit/edit.html', '<div class="thread-edit-container"><form name="$ctrl.editThread" class="edit-thread-form" ng-submit="$ctrl.edit($ctrl.editThread.$valid)"><div class="forum-form-wrapper" ng-class="{\'has-focus\': $ctrl.editThread.title.hasFocus, \'has-success\': $ctrl.editThread.title.$valid && $ctrl.editThread.title.$touched, \'has-error\': $ctrl.editThread.title.$error && $ctrl.editThread.title.$touched && !$ctrl.editThread.title.$valid, \'is-empty\': !$ctrl.editThread.title.$viewValue}"><label>Title</label> <input ng-model="$ctrl.thread.title" name="title" ng-focus="$ctrl.editThread.title.hasFocus=true" ng-blur="$ctrl.editThread.title.hasFocus=false"></div><div class="forum-form-wrapper" ng-class="{\'has-focus\': $ctrl.editThread.content.hasFocus, \'has-success\': $ctrl.editThread.content.$valid && $ctrl.editThread.content.$touched, \'has-error\': $ctrl.editThread.content.$error && $ctrl.editThread.content.$touched && !$ctrl.editThread.content.$valid, \'is-empty\': !$ctrl.editThread.content.$viewValue}"><label>Content</label> <textarea ng-model="$ctrl.thread.content" rows="7" cols="40" name="content" ng-focus="$ctrl.editThread.content.hasFocus=true" ng-blur="$ctrl.editThread.content.hasFocus=false"></textarea></div><div class="forum-form-wrapper" ng-if="$ctrl.thread.link" ng-class="{\'has-focus\': $ctrl.editThread.link.hasFocus, \'has-success\': $ctrl.editThread.link.$valid && $ctrl.editThread.link.$touched, \'has-error\': $ctrl.editThread.link.$error && $ctrl.editThread.link.$touched && !$ctrl.editThread.link.$valid, \'is-empty\': !$ctrl.editThread.link.$viewValue}"><label>Link</label> <input ng-model="$ctrl.thread.link" name="link" ng-focus="$ctrl.editThread.link.hasFocus=true" ng-blur="$ctrl.editThread.link.hasFocus=false"></div><div class="forum-form-submit"><button type="submit" ng-class="{\'form-valid\': $ctrl.editThread.$valid}"><span>Edit</span></button></div></form></div>');
		$templateCache.put('public/app/components/forum/threads/create/threads.create.component.html', '<div class="forum-create-container"><form name="$ctrl.createThread" ng-submit="$ctrl.create($ctrl.createThread.$valid)" novalidate><div class="forum-form-wrapper" ng-class="{\'has-focus\': $ctrl.createThread.title.hasFocus, \'has-success\': $ctrl.createThread.title.$valid, \'has-error\': $ctrl.createThread.title.$error && $ctrl.createThread.title.$touched && !$ctrl.createThread.title.$valid, \'is-empty\': !$ctrl.createThread.title.$viewValue}"><label>Name</label> <input type="text" name="title" ng-model="$ctrl.data.title" required ng-focus="$ctrl.createThread.title.hasFocus=true" ng-blur="$ctrl.createThread.title.hasFocus=false"></div><div class="forum-form-wrapper" ng-class="{\'has-focus\': $ctrl.createThread.content.hasFocus, \'has-success\': $ctrl.createThread.content.$valid && $ctrl.createThread.content.$touched, \'has-error\': $ctrl.createThread.content.$error && $ctrl.createThread.content.$touched && !$ctrl.createThread.content.$valid, \'is-empty\': !$ctrl.createThread.content.$viewValue}"><label>Description</label> <textarea rows="7" cols="40" ng-model="$ctrl.data.content" name="content" ng-focus="$ctrl.createThread.content.hasFocus=true" ng-blur="$ctrl.createThread.content.hasFocus=false">\n\t\t\t</textarea></div><div class="forum-form-wrapper forum-link-input" ng-class="{\'has-focus\': $ctrl.createThread.link.hasFocus, \'has-success\': $ctrl.createThread.link.$valid && $ctrl.createThread.content.$touched, \'has-error\': $ctrl.createThread.link.$error && $ctrl.createThread.link.$touched && !$ctrl.createThread.link.$valid, \'is-empty\': !$ctrl.createThread.link.$viewValue}" ng-if="$ctrl.hasLink"><label>Link</label> <input type="text" name="link" ng-model="$ctrl.data.link" ng-focus="$ctrl.createThread.link.hasFocus=true" ng-blur="$ctrl.createThread.link.hasFocus=false"></div><div class="forum-form-check"><md-checkbox ng-model="$ctrl.link" md-true-value="hasLink" ng-change="$ctrl.makeLink()">Should this be a link?</md-checkbox></div><div class="forum-form-submit"><button type="submit" aria-label="submit create thread form" ng-class="{\'form-valid\': $ctrl.createThread.$valid}"><span>Create!</span></button></div></form></div>');
		$templateCache.put('public/app/components/forum/threads/single/threads.single.component.html', '<div class="forum-single-component"><div class="forum-single-thread-container"><div class="forum-single-header"><img class="forum-creator-image" ng-class="{\'is-online\': $ctrl.thread.creator.loggedIn}" ng-src="{{$ctrl.thread.creator.picture}}"><div class="forum-created-info"><h4 ui-sref="app.profile.overview({userId: $ctrl.thread.creator._id})">{{$ctrl.thread.creator.username}}</h4><p am-time-ago="$ctrl.thread.created"></p></div><div class="forum-score-container below-mobile"><span class="mdi mdi-chevron-up" ng-class="{\'liked\': $ctrl.thread.liked}" ng-click="$ctrl.like($ctrl.thread)"></span> <span ng-class="{\'positive\': $ctrl.thread.score >= 1, \'negative\': $ctrl.thread.score <= -1}">{{$ctrl.thread.score}}</span> <span class="mdi mdi-chevron-down" ng-class="{\'disliked\': $ctrl.thread.disliked}" ng-click="$ctrl.unlike($ctrl.thread)"></span></div></div><div class="forum-single-container thread-single-container"><div class="forum-score-container above-mobile"><span class="mdi mdi-chevron-up" ng-class="{\'liked\': $ctrl.thread.liked}" ng-click="$ctrl.like($ctrl.thread)"></span> <span ng-class="{\'positive\': $ctrl.thread.score >= 1, \'negative\': $ctrl.thread.score <= -1}">{{$ctrl.thread.score}}</span> <span class="mdi mdi-chevron-down" ng-class="{\'disliked\': $ctrl.thread.disliked}" ng-click="$ctrl.unlike($ctrl.thread)"></span></div><div class="forum-single-content"><h3 ng-if="!$ctrl.thread.link">{{$ctrl.thread.title}}</h3><h3 ng-if="$ctrl.thread.link"><a target="_blank" href="{{$ctrl.thread.link}}">{{$ctrl.thread.title}}</a></h3><p>{{$ctrl.thread.content}}</p></div></div></div><div class="forum-single-info"><div class="left"><div class="forum-single-info-text"><button ui-sref="app.singleThread({streamId: $ctrl.streamId, threadId: $ctrl.thread._id})"><span>{{$ctrl.thread.comments.length}}</span> <i class="mdi mdi-comment-outline mobile"></i><p class="above-mobile">Comment<span ng-if="$ctrl.thread.comments.length > 1 || $ctrl.thread.comments.length == 0">s</span></p></button></div><div class="forum-single-info-text"><button><span>{{$ctrl.thread.views}}</span> <i class="mobile mdi mdi-eye"></i><p class="above-mobile">View<span ng-if="$ctrl.thread.views > 1 || $ctrl.thread.views == 0">s</span></p></button></div><div class="forum-single-info-text"><button><span>{{$ctrl.thread.saves.length}}</span> <i class="mobile mdi mdi-heart-outline"></i><p class="above-mobile">Save<span ng-if="$ctrl.thread.saves.length > 1 || $ctrl.thread.saves.length == 0">s</span></p></button></div></div><div class="right"><div class="forum-single-info-text"><button ng-click="$ctrl.toggleSave($ctrl.thread)"><i class="mdi mdi-heart-outline" ng-class="{\'saved\': $ctrl.thread.saved}"></i></button></div><div class="forum-single-ino-text" ng-if="$ctrl.moderator || $ctrl.currentUser == $ctrl.thread.creator._id"><button ng-click="$ctrl.openEditThread($ctrl.thread)"><i class="mdi mdi-pencil"></i></button></div><div class="forum-single-info-text" ng-if="$ctrl.moderator || $ctrl.currentUser == $ctrl.thread.creator._id"><button ng-click="$ctrl.openDeleteThread($ctrl.thread)"><i class="mdi mdi-delete"></i></button></div></div></div></div>');
		$templateCache.put('public/app/components/forum/threads/list/threads.list.component.html', '<div class="forum-list-component-container"><div class="forum-list-view"><div class="forum-list-list"><div ng-repeat="item in $ctrl.threads | orderBy: $ctrl.rowFilter" class="forum-single-repeat"><single-thread thread="item" class="forum-single-repeat"></single-thread></div></div></div><div ng-if="!$ctrl.threads.length && !$ctrl.hideNoItems" class="forum-list-no-items"><p>It doesn\'t look like there is anything here</p><span>You should create a <span>new comment!</span></span></div><md-button class="md-fab forum-create-button" ng-click="$ctrl.openCreateThread()" ng-if="!$ctrl.hideCreate"><i class="mdi mdi-pencil"></i></md-button></div>');
	}

	exports.default = appRun;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _signup = __webpack_require__(123);

	var _signup2 = _interopRequireDefault(_signup);

	var _login = __webpack_require__(122);

	var _login2 = _interopRequireDefault(_login);

	var _profileUpdate = __webpack_require__(124);

	var _profileUpdate2 = _interopRequireDefault(_profileUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var authComponents = _angular2.default.module('auth.components', []);
	authComponents.component('signupForm', _signup2.default);
	authComponents.component('loginForm', _login2.default);
	authComponents.component('updateProfile', _profileUpdate2.default);

	exports.default = authComponents;

/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginCtrl = function () {
		function LoginCtrl($state, $mdDialog, Auth, Toast, Storage, $rootScope) {
			'ngInject';

			_classCallCheck(this, LoginCtrl);

			this._Auth = Auth;
			this._Toast = Toast;
			this._Storage = Storage;
			this._$state = $state;
			this._$dialog = $mdDialog;
			this._$rootScope = $rootScope;
			this.data = {
				email: '',
				password: ''
			};

			this.checkRemember();
		}

		_createClass(LoginCtrl, [{
			key: 'checkRemember',
			value: function checkRemember() {
				var storedEmail = this._Storage.get('userEmail');

				if (storedEmail) {
					this.data.email = atob(storedEmail);
					this.isRemembered = true;
				} else {
					this.data.email = '';
				}
			}
		}, {
			key: 'login',
			value: function login(isValid) {
				var _this = this;

				this.isLoading = true;

				if (isValid) {
					if (typeof this.remember !== 'undefined') {
						var rememberEmail = btoa(this.data.email);
						this._Storage.set('userEmail', rememberEmail);
					}

					if (typeof this.forget !== 'undefined') {
						this._Storage.remove('userEmail');
					}

					this._Auth.login(this.data).then(function (response) {
						if (response.data.success) {
							_this.postLogin(response);
							_this._Toast.success('Welcome back ' + response.data.res.record.username);
						} else {
							_this._Toast.error(response.data.res.message);
						}
					});
				} else {
					this._Toast.error('hmm, form issue!');
				}
			}
		}, {
			key: 'postLogin',
			value: function postLogin(response) {
				var user = response.data.res.record;
				var serializedUser = angular.toJson(user);
				this._Storage.set('user', serializedUser);
				this._Storage.set('opinion-token', response.data.res.token);
				//this._Websocket.online(response.data.res.record._id);
				this._$state.go('app.home', {}, { reload: true });
			}
		}, {
			key: 'openPasswordReset',
			value: function openPasswordReset() {
				this._$dialog.show({
					controller: 'PasswordResetController',
					controllerAs: '$ctrl',
					templateUrl: './app/pages/auth/reset/reset.html'
				});
			}
		}]);

		return LoginCtrl;
	}();

	var loginForm = {
		scope: {},
		controller: LoginCtrl,
		templateUrl: './app/components/auth/login/login.component.html'
	};

	exports.default = loginForm;

/***/ },
/* 123 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SignupFormCtrl = function () {
		function SignupFormCtrl($state, Auth, Toast, Storage, $rootScope) {
			'ngInject';

			_classCallCheck(this, SignupFormCtrl);

			this.data = {
				name: '',
				username: '',
				email: '',
				password: ''
			};

			this._state = $state;
			this._Auth = Auth;
			this._Toast = Toast;
			this._Storage = Storage;
			this._$rootScope = $rootScope;
			//this._Websocket = Websocket;
		}

		_createClass(SignupFormCtrl, [{
			key: 'signup',
			value: function signup(isValid) {
				var _this = this;

				if (isValid) {
					this._Auth.signup(this.data).then(function (response) {
						if (response.data.success) {
							_this._Toast.success('Welcome to Opinionated! ' + response.data.res.record.username);
							_this.postSignup(response);
						} else {
							_this._Toast.error('boo, but still yay');
						}
					});
				} else {
					this._Toast.error('hmm, form issue!');
				}
			}
		}, {
			key: 'postSignup',
			value: function postSignup(response) {
				var serialized = angular.toJson(response.data.res.record);
				this._Storage.set('user', serialized);
				this._Storage.set('opinion-token', response.data.res.token);
				//this._Websocket.online(response.data.res.record._id);
				this._state.go('app.updateProfile', { userId: response.data.res.record._id }, { reload: true });
			}
		}]);

		return SignupFormCtrl;
	}();

	var signupForm = {
		scope: {},
		controller: SignupFormCtrl,
		templateUrl: './app/components/auth/signup/signup.component.html'
	};

	exports.default = signupForm;

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var updateProfileCtrl = function () {
		function updateProfileCtrl(Auth, Toast, $state, $rootScope, Upload) {
			'ngInject';

			_classCallCheck(this, updateProfileCtrl);

			this._Auth = Auth;
			this._Toast = Toast;
			this._$state = $state;
			this._$rootScope = $rootScope;
			this._Upload = Upload;
			this.user = this._Auth.getUser();
			this.data = {
				gender: '' || this.user.gender,
				phone: '' || this.user.phone,
				occupation: '' || this.user.occupation,
				interests: '' || this.user.interests,
				bio: '' || this.user.bio
			};
		}

		_createClass(updateProfileCtrl, [{
			key: 'updateProfile',
			value: function updateProfile(isValid) {
				var _this = this;

				if (isValid) {
					this._Auth.updateProfile(this.user._id, this.data).then(function (response) {

						_this._Toast.success('You have updated your profile!');
						_this._$rootScope.$broadcast('profileUpdated');
						_this._$state.go("app.profile.overview", { userId: _this.user._id }, { reload: true });
					});
				}
			}
		}, {
			key: 'uploadImage',
			value: function uploadImage(file) {
				var _this2 = this;

				if (file) {
					this._Upload.upload({
						url: '/users/uploadPicture/' + this.user._id,
						file: file
					}).progress(function (evt) {
						this.progressPercentage = parseInt(100 * evt.loaded / evt.total);
					}).success(function (data, status, headers, config) {
						_this2._Toast.success('Your photo has been uploaded');
						_this2.uploaded = true;
					});
				}
			}
		}]);

		return updateProfileCtrl;
	}();

	var updateProfile = {
		scope: {},
		bindings: {
			user: '<'
		},
		controller: updateProfileCtrl,
		templateUrl: './app/components/auth/updateProfile/update.profile.html'
	};

	exports.default = updateProfile;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _chatsList = __webpack_require__(126);

	var _chatsList2 = _interopRequireDefault(_chatsList);

	var _chatsSingle = __webpack_require__(128);

	var _chatsSingle2 = _interopRequireDefault(_chatsSingle);

	var _chatsMessages = __webpack_require__(127);

	var _chatsMessages2 = _interopRequireDefault(_chatsMessages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var chatComponents = _angular2.default.module('chats.components', []);
	chatComponents.component('chatsList', _chatsList2.default);
	chatComponents.component('singleChat', _chatsSingle2.default);
	chatComponents.component('chatMessages', _chatsMessages2.default);

	exports.default = chatComponents;

/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsListCtrl = function chatsListCtrl($rootScope, $state) {
		'ngInject';

		var _this = this;

		_classCallCheck(this, chatsListCtrl);

		this._$state = $state;
		this._$rootScope = $rootScope;

		this._$rootScope.$on('hideChats', function () {
			_this.hideChats = true;
		});

		this._$rootScope.$on('showChats', function () {
			_this.hideChats = false;
		});
	};

	var listComponent = {
		scope: {},
		bindings: {
			chats: '<'
		},
		controller: chatsListCtrl,
		templateUrl: './app/components/chats/list/list.html'
	};

	exports.default = listComponent;

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsMessagesCtrl = function () {
		function chatsMessagesCtrl(Chat, Auth, $timeout, $stateParams, $state, $rootScope) {
			'ngInject';

			_classCallCheck(this, chatsMessagesCtrl);

			this._Chat = Chat;
			this._Auth = Auth;
			this._$timeout = $timeout;
			this._$stateParams = $stateParams;
			this._$rootScope = $rootScope;
			this._$state = $state;
			this.chatId = this._$stateParams.chatId;
			this.userId = this._Auth.getUser()._id;
			this.data = {
				message: '',
				creator: this.userId
			};

			if (this.chatId && document.documentElement.clientWidth < 1300) {
				this._$rootScope.$broadcast('hideChats');
			}
		}

		_createClass(chatsMessagesCtrl, [{
			key: 'scrollToBottom',
			value: function scrollToBottom() {
				this._$timeout(function () {
					var scroller = document.getElementById('scrollContainer');
					scroller.scrollTop = scroller.scrollHeight;
				}, 0, false);
			}
		}, {
			key: 'sendMessage',
			value: function sendMessage(isValid) {
				var _this = this;

				if (isValid) {
					this._Chat.message(this.chatId, this.data).then(function (response) {
						_this._$rootScope.$broadcast('newMessage');
						_this.scrollToBottom();
						_this.resetForm();
					});
				}
			}
		}, {
			key: 'resetForm',
			value: function resetForm() {
				this.chatForm.$setUntouched();
				this.chatForm.$setPristine();
				this.data.message = "";
			}
		}]);

		return chatsMessagesCtrl;
	}();

	var chatMessages = {
		scope: {},
		bindings: {
			messages: '=',
			chat: '<'
		},
		controller: chatsMessagesCtrl,
		templateUrl: './app/components/chats/messages/messages.html'
	};

	exports.default = chatMessages;

/***/ },
/* 128 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsSingleCtrl = function () {
		function chatsSingleCtrl(Chat, $rootScope, $location, $state, Auth, $mdDialog) {
			'ngInject';

			_classCallCheck(this, chatsSingleCtrl);

			this._Chat = Chat;
			this._$rootScope = $rootScope;
			this._$location = $location;
			this._$state = $state;
			this._Auth = Auth;
			this._$dialog = $mdDialog;
			this.currentUser = this._Auth.getUser()._id;

			if (this._$state.current.name == 'app.chats.inbox' || this._$state.current.name == 'app.chats.saved') {
				this.hideRemoved = true;
			}
		}

		_createClass(chatsSingleCtrl, [{
			key: 'goToChat',
			value: function goToChat(item) {

				if (this._$state.current.name == 'app.chats.inbox') {
					this._$state.go('app.chats.inbox.messages', { chatId: item._id });
				} else if (this._$state.current.name == 'app.chats.saved') {
					this._$state.go('app.chats.saved.messages', { chatId: item._id });
				} else if (this._$state.current.name == 'app.chats.trash') {
					this._$state.go('app.chats.trash.messages', { chatId: item._id });
				}
			}
		}, {
			key: 'toggleSave',
			value: function toggleSave(item) {
				if (!item.saved) {
					this._Chat.save(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				} else {
					this._Chat.unsave(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				}
			}
		}, {
			key: 'toggleRemove',
			value: function toggleRemove(item) {
				if (!item.isDeleted) {
					this._Chat.remove(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				} else {
					this._Chat.unremove(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				}
			}
		}]);

		return chatsSingleCtrl;
	}();

	var singleChat = {
		scope: {},
		bindings: {
			chat: '<'
		},
		controller: chatsSingleCtrl,
		templateUrl: './app/components/chats/single/single.html'
	};

	exports.default = singleChat;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(152);

	__webpack_require__(121);

	__webpack_require__(135);

	__webpack_require__(148);

	__webpack_require__(125);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['shared.components', 'auth.components', 'forum.components', 'profile.components', 'chats.components'];

	var componentModule = _angular2.default.module('app.components', requires);

	exports.default = componentModule;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _commentsCreate = __webpack_require__(131);

	var _commentsCreate2 = _interopRequireDefault(_commentsCreate);

	var _commentsList = __webpack_require__(133);

	var _commentsList2 = _interopRequireDefault(_commentsList);

	var _commentsSingle = __webpack_require__(134);

	var _commentsSingle2 = _interopRequireDefault(_commentsSingle);

	var _editComment = __webpack_require__(132);

	var _editComment2 = _interopRequireDefault(_editComment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var commentComponents = _angular2.default.module('comments.components', []);
	commentComponents.component('createComment', _commentsCreate2.default);
	commentComponents.component('commentsList', _commentsList2.default);
	commentComponents.component('singleComment', _commentsSingle2.default);
	commentComponents.component('editComment', _editComment2.default);

	exports.default = commentComponents;

/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var createCommentCtrl = function () {
		function createCommentCtrl(Comment, Toast, $stateParams, $rootScope) {
			'ngInject';

			_classCallCheck(this, createCommentCtrl);

			this._Comment = Comment;
			this._Toast = Toast;
			this.threadId = $stateParams.threadId;
			this._$rootScope = $rootScope;
			this.data = {
				content: '',
				thread: this.threadId
			};
		}

		_createClass(createCommentCtrl, [{
			key: 'create',
			value: function create(isValid) {
				var _this = this;

				if (isValid) {
					this._Comment.create(this.data).then(function (response) {
						if (response.data.success) {
							_this._Toast.success('You created a new comment');
							_this._$rootScope.$broadcast('commentCreated');
							_this.clearForm();
						} else {
							_this._Toast.error(response.data.res.message);
						}
					});
				} else {
					this._Toast.error('Your form is not valid');
				}
			}
		}, {
			key: 'clearForm',
			value: function clearForm() {
				this.createComment.$setPristine();
				this.createComment.$setUntouched();
				this.data.content = '';
			}
		}]);

		return createCommentCtrl;
	}();

	var createComment = {
		scope: {},
		templateUrl: './app/components/forum/comments/create/comments.create.component.html',
		controller: createCommentCtrl
	};

	exports.default = createComment;

/***/ },
/* 132 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var editCommentCtrl = function () {
		function editCommentCtrl(Comment, $mdDialog) {
			'ngInject';

			_classCallCheck(this, editCommentCtrl);

			this._$dialog = $mdDialog;
			this._Comment = Comment;
		}

		_createClass(editCommentCtrl, [{
			key: 'edit',
			value: function edit(isValid) {
				var _this = this;

				if (isValid) {

					this.data = {
						content: this.comment.content
					};

					this._Comment.modify(this.comment._id, this.data).then(function (response) {
						_this._$dialog.hide();
					});
				}
			}
		}]);

		return editCommentCtrl;
	}();

	var editComment = {
		scope: {},
		bindings: {
			comment: '='
		},
		controller: editCommentCtrl,
		templateUrl: './app/components/forum/comments/edit/edit.html'
	};

	exports.default = editComment;

/***/ },
/* 133 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var commentsListCtrl = function () {
		function commentsListCtrl($mdDialog, $state) {
			'ngInject';

			_classCallCheck(this, commentsListCtrl);

			this._$dialog = $mdDialog;
			this._$state = $state;

			if (this._$state.current.name == 'app.profile.comments' || this._$state.current.name == 'app.profile.saved') {
				this.hideCreate = true;
			}
		}

		_createClass(commentsListCtrl, [{
			key: 'openCreateComment',
			value: function openCreateComment() {
				this._$dialog.show({
					templateUrl: './app/pages/threads/dialogs/create/create.comment.html',
					controller: 'CommentsCreateController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true
				});
			}
		}]);

		return commentsListCtrl;
	}();

	var commmentsList = {
		scope: {},
		bindings: {
			comments: '<',
			isProfile: '<'
		},
		controller: commentsListCtrl,
		templateUrl: './app/components/forum/comments/list/comments.list.component.html'
	};

	exports.default = commmentsList;

/***/ },
/* 134 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var commentsSingleCtrl = function () {
		function commentsSingleCtrl(Auth, Comment, Thread, $stateParams, $state, $mdDialog) {
			'ngInject';

			_classCallCheck(this, commentsSingleCtrl);

			this._Auth = Auth;
			this._Comment = Comment;
			this._Thread = Thread;
			this._$state = $state;
			this._isLoggedIn = this._Auth.isLoggedIn();
			this._$stateParams = $stateParams;
			this._$dialog = $mdDialog;
			this._threadId = $stateParams.threadId;

			if (this._isLoggedIn) {
				this.currentUser = this._Auth.getUser()._id;
			}

			if (this._threadId) {
				console.log(this.threadId);
				this.getThread();
			}
		}

		_createClass(commentsSingleCtrl, [{
			key: 'getThread',
			value: function getThread() {
				var _this = this;

				this._Thread.single(this._threadId).then(function (response) {
					response.data.res.record.stream.moderators.forEach(function (moderator) {
						if (_this.currentUser == moderator) {
							_this.moderator = true;
						}
					});
				});
			}
		}, {
			key: 'like',
			value: function like(item) {
				this._Comment.like(item._id).then(function (response) {
					angular.extend(item, response.data.res.record);
				});
			}
		}, {
			key: 'dislike',
			value: function dislike(item) {
				this._Comment.dislike(item._id).then(function (response) {
					angular.extend(item, response.data.res.record);
				});
			}
		}, {
			key: 'toggleSave',
			value: function toggleSave(item) {
				if (!item.saved) {
					this._Comment.save(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				} else {
					this._Comment.unsave(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				}
			}
		}, {
			key: 'openEditComment',
			value: function openEditComment(item) {
				this._$dialog.show({
					templateUrl: './app/pages/threads/dialogs/edit/edit.comment.html',
					controller: 'EditCommentController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true,
					locals: {
						item: item
					}
				});
			}
		}, {
			key: 'openDeleteComment',
			value: function openDeleteComment(item) {
				this._$dialog.show({
					templateUrl: './app/pages/threads/dialogs/delete/delete.comment.html',
					controller: 'DeleteCommentController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true,
					locals: {
						item: item
					}
				});
			}
		}]);

		return commentsSingleCtrl;
	}();

	var singleComment = {
		scope: {},
		bindings: {
			comment: '<'
		},
		controller: commentsSingleCtrl,
		templateUrl: './app/components/forum/comments/single/comments.single.component.html'
	};

	exports.default = singleComment;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(139);

	__webpack_require__(145);

	__webpack_require__(130);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['streams.components', 'threads.components', 'comments.components'];

	var forumComponents = _angular2.default.module('forum.components', requires);

	exports.default = forumComponents;

/***/ },
/* 136 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var createStreamCtrl = function () {
		function createStreamCtrl(Stream, Toast, $rootScope) {
			'ngInject';

			_classCallCheck(this, createStreamCtrl);

			this._Stream = Stream;
			this._Toast = Toast;
			this._$rootScope = $rootScope;
			this.data = {
				name: '',
				description: ''
			};
		}

		_createClass(createStreamCtrl, [{
			key: 'create',
			value: function create(isValid) {
				var _this = this;

				if (isValid) {
					this._Stream.create(this.data).then(function (response) {
						_this._Toast.success('You just created a Stream: ' + response.data.res.record.name);
						_this._$rootScope.$broadcast('streamCreated');
					});
				} else {
					this._Toast.error('Hmm... Your form isn\'t valid');
				}
			}
		}]);

		return createStreamCtrl;
	}();

	var createStream = {
		scope: {},
		controller: createStreamCtrl,
		templateUrl: './app/components/forum/streams/create/stream.create.component.html'
	};

	exports.default = createStream;

/***/ },
/* 137 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListStreamCtrl = function () {
		function ListStreamCtrl($mdDialog, $rootScope, $state) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, ListStreamCtrl);

			this._$dialog = $mdDialog;
			this._$state = $state;
			this._$rootScope = $rootScope;

			if (this._$state.current.name == 'app.subscribedStreams') {
				this.hideTrending = true;
				this.hideCreate = true;
			}

			$rootScope.$on('streamByThreads', function () {
				if (_this.rowFilter == '-threads.length') {
					_this.rowFilter = 'threads.length';
				} else {
					_this.rowFilter = '-threads.length';
				}
			});

			$rootScope.$on('streamBySubscribers', function () {
				if (_this.rowFilter == 'subscribers.length') {
					_this.rowFilter = 'subscribers.length';
				} else {
					_this.rowFilter = '-subscribers.length';
				}
			});

			$rootScope.$on('streamByDate', function () {
				if (_this.rowFilter == 'created') {
					_this.rowFilter = '-created';
				} else {
					_this.rowFilter = 'created';
				}
			});
		}

		_createClass(ListStreamCtrl, [{
			key: 'openCreateStream',
			value: function openCreateStream() {
				this._$dialog.show({
					templateUrl: './app/pages/streams/dialogs/create/create.html',
					controller: 'StreamsCreateController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true
				});
			}
		}]);

		return ListStreamCtrl;
	}();

	var listStream = {
		scope: {},
		bindings: {
			streams: '='
		},
		controller: ListStreamCtrl,
		templateUrl: './app/components/forum/streams/list/streams.list.component.html'
	};

	exports.default = listStream;

/***/ },
/* 138 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var singleStreamCtrl = function () {
		function singleStreamCtrl(Stream) {
			'ngInject';

			_classCallCheck(this, singleStreamCtrl);

			this._Stream = Stream;
		}

		_createClass(singleStreamCtrl, [{
			key: 'toggleSubscribe',
			value: function toggleSubscribe(item) {
				if (!item.subscribed) {
					this._Stream.subscribe(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				} else {
					this._Stream.unsubscribe(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				}
			}
		}]);

		return singleStreamCtrl;
	}();

	var singleStream = {
		scope: {},
		bindings: {
			stream: '='
		},
		controller: singleStreamCtrl,
		templateUrl: './app/components/forum/streams/single/streams.single.component.html'
	};

	exports.default = singleStream;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _streamsList = __webpack_require__(137);

	var _streamsList2 = _interopRequireDefault(_streamsList);

	var _streamsSingle = __webpack_require__(138);

	var _streamsSingle2 = _interopRequireDefault(_streamsSingle);

	var _streamCreate = __webpack_require__(136);

	var _streamCreate2 = _interopRequireDefault(_streamCreate);

	var _streamsTrending = __webpack_require__(140);

	var _streamsTrending2 = _interopRequireDefault(_streamsTrending);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var streamComponents = _angular2.default.module('streams.components', []);
	streamComponents.component('streamsList', _streamsList2.default);
	streamComponents.component('singleStream', _streamsSingle2.default);
	streamComponents.component('createStream', _streamCreate2.default);
	streamComponents.component('trendingStream', _streamsTrending2.default);

	exports.default = streamComponents;

/***/ },
/* 140 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var streamTrendingCtrl = function () {
		function streamTrendingCtrl(Stream) {
			'ngInject';

			_classCallCheck(this, streamTrendingCtrl);

			this._Stream = Stream;
		}

		_createClass(streamTrendingCtrl, [{
			key: 'toggleSubscribe',
			value: function toggleSubscribe(item) {
				if (!item.subscribed) {
					this._Stream.subscribe(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				} else {
					this._Stream.unsubscribe(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				}
			}
		}]);

		return streamTrendingCtrl;
	}();

	var trendingStream = {
		scope: {},
		bindings: {
			stream: '<'
		},
		controller: streamTrendingCtrl,
		templateUrl: './app/components/forum/streams/trending/streams.trending.component.html'
	};

	exports.default = trendingStream;

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var threadCreateCtrl = function () {
		function threadCreateCtrl(Toast, Thread, $stateParams, $rootScope) {
			'ngInject';

			_classCallCheck(this, threadCreateCtrl);

			this._Toast = Toast;
			this._Thread = Thread;
			this._$rootScope = $rootScope;
			this._$stateParams = $stateParams;
			this.streamId = this._$stateParams.streamId;

			this.data = {
				title: '',
				content: '',
				stream: this.streamId,
				link: ''
			};
		}

		_createClass(threadCreateCtrl, [{
			key: 'create',
			value: function create(isValid) {
				var _this = this;

				if (isValid) {
					if (this._$stateParams.streamId) {
						this.data.stream = this._$stateParams.streamId;
					}

					this._Thread.create(this.data).then(function (response) {
						_this._Toast.success('You have just posted a new thread ' + response.data.res.record.title);
						_this._$rootScope.$broadcast('threadCreated');
					});
				} else {
					this._Toast.error('Hmm.. your form is not valid');
				}
			}
		}, {
			key: 'makeLink',
			value: function makeLink() {
				this.hasLink = !this.hasLink;
			}
		}]);

		return threadCreateCtrl;
	}();

	var createThread = {
		scope: {},
		bindings: {
			streamId: '<'
		},
		controller: threadCreateCtrl,
		templateUrl: './app/components/forum/threads/create/threads.create.component.html'
	};

	exports.default = createThread;

/***/ },
/* 142 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var editThreadCtrl = function () {
		function editThreadCtrl(Thread, $mdDialog, $rootScope) {
			'ngInject';

			_classCallCheck(this, editThreadCtrl);

			this._$dialog = $mdDialog;
			this._$rootScope = $rootScope;
			this._Thread = Thread;
		}

		_createClass(editThreadCtrl, [{
			key: 'edit',
			value: function edit(isValid) {
				var _this = this;

				if (isValid) {
					this.data = {
						title: this.thread.title,
						content: this.thread.content
					};

					if (this.thread.link) {
						this.data.link = this.thread.link;
					}

					this._Thread.modify(this.thread._id, this.data).then(function (response) {
						_this._$rootScope.$broadcast('threadEdited');
						_this._$dialog.hide();
					});
				}
			}
		}]);

		return editThreadCtrl;
	}();

	var editThread = {
		scope: {},
		bindings: {
			thread: '='
		},
		controller: editThreadCtrl,
		templateUrl: './app/components/forum/threads/edit/edit.html'
	};

	exports.default = editThread;

/***/ },
/* 143 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var threadListController = function () {
		function threadListController($stateParams, $mdDialog, $rootScope, $state) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, threadListController);

			this._$stateParams = $stateParams;
			this._$dialog = $mdDialog;
			this._$rootScope = $rootScope;
			this._$state = $state;

			if (this._$state.current.name == 'app.home' || this._$state.current.name == 'app.profile.threads' || this._$state.current.name == 'app.profile.saved') {
				this.hideCreate = true;
				this.hideSidebar = true;
			}

			if (this._$state.current.name == 'app.home') {
				this.hideNoItems = true;
			}

			this.streamId = $stateParams.streamId;

			$rootScope.$on('threadByScore', function () {
				if (_this.rowFilter == '-score') {
					_this.rowFilter = 'score';
				} else {
					_this.rowFilter = '-score';
				}
			});

			$rootScope.$on('threadBySaves', function () {
				if (_this.rowFilter == '-saves.length') {
					_this.rowFilter = 'saves.length';
				} else {
					_this.rowFilter = '-saves.length';
				}
			});

			$rootScope.$on('threadByDate', function () {
				if (_this.rowFilter == '-created') {
					_this.rowFilter = 'created';
				} else {
					_this.rowFilter = '-created';
				}
			});

			$rootScope.$on('threadByComments', function () {
				if (_this.rowFilter == '-comments.length') {
					_this.rowFilter = 'comments.length';
				} else {
					_this.rowFilter = '-comments.length';
				}
			});
		}

		_createClass(threadListController, [{
			key: 'openCreateThread',
			value: function openCreateThread() {
				this._$dialog.show({
					templateUrl: './app/pages/threads/dialogs/create/create.html',
					controller: 'ThreadsCreateController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true
				});
			}
		}]);

		return threadListController;
	}();

	var threadsList = {
		transclude: true,
		bindings: {
			threads: '<',
			stream: '<'
		},
		controller: threadListController,
		templateUrl: './app/components/forum/threads/list/threads.list.component.html'
	};

	exports.default = threadsList;

/***/ },
/* 144 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SingleThreadCtrl = function () {
		function SingleThreadCtrl(Auth, Thread, $stateParams, $state, $mdDialog, $rootScope) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, SingleThreadCtrl);

			this._$stateParams = $stateParams;
			this.streamId = this._$stateParams.streamId;
			this._$state = $state;
			this._$dialog = $mdDialog;
			this._$rootScope = $rootScope;

			this._Thread = Thread;
			this._Auth = Auth;
			this._isLoggedIn = this._Auth.isLoggedIn();

			this._$rootScope.$on('isModerator', function () {
				_this.moderator = true;
			});

			if (this._isLoggedIn) {
				this.currentUser = this._Auth.getUser()._id;
			}
		}

		_createClass(SingleThreadCtrl, [{
			key: 'toggleSave',
			value: function toggleSave(item) {
				if (!item.saved) {
					this._Thread.save(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				} else {
					this._Thread.unsave(item._id).then(function (response) {
						angular.extend(item, response.data.res.record);
					});
				}
			}
		}, {
			key: 'like',
			value: function like(item) {
				this._Thread.like(item._id).then(function (response) {
					angular.extend(item, response.data.res.record);
				});
			}
		}, {
			key: 'unlike',
			value: function unlike(item) {
				this._Thread.unlike(item._id).then(function (response) {
					angular.extend(item, response.data.res.record);
				});
			}
		}, {
			key: 'delete',
			value: function _delete(item) {
				var _this2 = this;

				this._Thread.remove(item._id).then(function (response) {
					_this2._$state.reload();
				});
			}
		}, {
			key: 'openEditThread',
			value: function openEditThread(item) {
				this._$dialog.show({
					templateUrl: './app/pages/threads/dialogs/edit/edit.html',
					controller: 'EditThreadDialogController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true,
					locals: {
						item: item
					}
				});
			}
		}, {
			key: 'openDeleteThread',
			value: function openDeleteThread(item) {
				this._$dialog.show({
					templateUrl: './app/pages/threads/dialogs/delete/delete.html',
					controller: 'DeleteThreadDialogController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true,
					locals: {
						item: item
					}
				});
			}
		}]);

		return SingleThreadCtrl;
	}();

	var singleThread = {
		bindings: {
			thread: '<'
		},
		controller: SingleThreadCtrl,
		templateUrl: './app/components/forum/threads/single/threads.single.component.html'
	};

	exports.default = singleThread;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _threadsList = __webpack_require__(143);

	var _threadsList2 = _interopRequireDefault(_threadsList);

	var _threadsSingle = __webpack_require__(144);

	var _threadsSingle2 = _interopRequireDefault(_threadsSingle);

	var _threadsCreate = __webpack_require__(141);

	var _threadsCreate2 = _interopRequireDefault(_threadsCreate);

	var _editThread = __webpack_require__(142);

	var _editThread2 = _interopRequireDefault(_editThread);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var threadComponents = _angular2.default.module('threads.components', []);
	threadComponents.component('threadList', _threadsList2.default);
	threadComponents.component('singleThread', _threadsSingle2.default);
	threadComponents.component('createThread', _threadsCreate2.default);
	threadComponents.component('editThread', _editThread2.default);

	exports.default = threadComponents;

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var headerCtrl = function () {
		function headerCtrl(Auth, User, Chat, Toast, $rootScope, $stateParams, $mdDialog) {
			'ngInject';

			_classCallCheck(this, headerCtrl);

			this._Auth = Auth;
			this._User = User;
			this._Chat = Chat;
			this._Toast = Toast;
			this._$rootScope = $rootScope;
			this._$stateParams = $stateParams;
			this._$dialog = $mdDialog;
			this.userId = $stateParams.userId;
			//this._Websocket = Websocket;
			this._isLoggedIn = this._Auth.isLoggedIn();
			if (this._isLoggedIn) {
				this.currentUser = this._Auth.getUser();
			}

			this.checkUserFollowing();
		}

		_createClass(headerCtrl, [{
			key: 'checkUserFollowing',
			value: function checkUserFollowing() {
				var _this = this;

				this._User.single(this.userId).then(function (response) {
					_this.user = response.data.res.record;
					_this.alreadyFollowing = response.data.res.alreadyFollowing;
				});
			}
		}, {
			key: 'follow',
			value: function follow(item) {
				var _this2 = this;

				this._User.follow(item._id).then(function (response) {
					//this._Websocket.follow(item._id);
					_this2._$rootScope.$broadcast('userFollowed');
					_this2.checkUserFollowing();
				});
			}
		}, {
			key: 'unfollow',
			value: function unfollow(item) {
				var _this3 = this;

				this._User.unfollow(item._id).then(function (response) {
					//this._Websocket.unfollow(item._id);
					_this3._$rootScope.$broadcast('userUnfollowed');
					_this3.checkUserFollowing();
				});
			}
		}, {
			key: 'message',
			value: function message(item) {
				var _this4 = this;

				var data = {
					participants: [this.userId, this.currentUser._id]
				};

				this._Chat.create(data).then(function (response) {
					//this._Websocket.messaged(item._id);
					_this4._$dialog.show({
						templateUrl: './app/pages/profile/dialogs/message/message.html',
						controller: 'ProfileMessageController',
						controllerAs: '$ctrl',
						clickOutsideToClose: true,
						locals: {
							message: response.data.res.record,
							user: _this4.user
						}
					});
				});
			}
		}, {
			key: 'openEditProfile',
			value: function openEditProfile(item) {
				this._$dialog.show({
					templateUrl: './app/pages/profile/dialogs/edit/profile.edit.html',
					controller: 'ProfileEditController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true,
					locals: {
						user: this.user
					}
				});
			}
		}, {
			key: 'resetPassword',
			value: function resetPassword() {
				this._$dialog.show({
					templateUrl: './app/pages/profile/dialogs/reset/reset.html',
					controller: 'ProfileResetController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true,
					locals: {
						user: this.user
					}
				});
			}
		}]);

		return headerCtrl;
	}();

	var headerComponent = {
		scope: {},
		bindings: {
			user: '<'
		},
		controller: headerCtrl,
		templateUrl: './app/components/profile/header/profile.header.component.html'
	};

	exports.default = headerComponent;

/***/ },
/* 147 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var overviewCtrl = function overviewCtrl() {
		'ngInject';

		_classCallCheck(this, overviewCtrl);
	};

	var overviewComponent = {
		scope: {},
		bindings: {
			user: '<'
		},
		controller: overviewCtrl,
		templateUrl: './app/components/profile/overview/profile.overview.component.html'
	};

	exports.default = overviewComponent;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _profileHeader = __webpack_require__(146);

	var _profileHeader2 = _interopRequireDefault(_profileHeader);

	var _profileOverview = __webpack_require__(147);

	var _profileOverview2 = _interopRequireDefault(_profileOverview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var profileComponents = _angular2.default.module('profile.components', []);
	profileComponents.component('profileHeader', _profileHeader2.default);
	profileComponents.component('profileOverview', _profileOverview2.default);

	exports.default = profileComponents;

/***/ },
/* 149 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var messagesCtrl = function () {
		function messagesCtrl(Auth, Chat, $rootScope) {
			var _this = this;

			_classCallCheck(this, messagesCtrl);

			this._Auth = Auth;
			this._Chat = Chat;

			this._$rootScope = $rootScope;

			this.User = this._Auth.getUser();
			this.chats = [];
			this.messageCount;

			this.$onInit = function () {
				if (_this.User) {
					_this.updateChats();
				}
			};

			this._$rootScope.$on('newChatMessage', function (event, data) {
				data.participants.forEach(function (participant) {
					if (_this.user._id == participant._id) {
						_this.updateChats();
					}
				});
			});
		}

		_createClass(messagesCtrl, [{
			key: 'updateChats',
			value: function updateChats() {
				var _this2 = this;

				this._Chat.findUnread(this.User._id).then(function (response) {
					_this2.chats = response.data.res.records, _this2.messageCount = response.data.res.unread;
				});
			}
		}, {
			key: 'doChatAction',
			value: function doChatAction(item) {
				var _this3 = this;

				this._Chat.markRead(item._id).then(function (response) {
					_this3.messageCount -= 1;
					angular.extend(item, response.data.res.record);
					_this3.updateChats();
					_this3._$state.go("app.chats.inbox", { reload: true });
				});
			}
		}]);

		return messagesCtrl;
	}();

	var messagesComponent = {
		controller: messagesCtrl,
		templateUrl: './app/components/shared/messages/messages.html'
	};

	exports.default = messagesComponent;

/***/ },
/* 150 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var navCtrl = function () {
		function navCtrl(Auth, Storage, Stream, User, $mdSidenav, $state, $rootScope, $mdDialog, $location, Chat) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, navCtrl);

			this._$sidenav = $mdSidenav;
			this._Auth = Auth;
			this._Storage = Storage;
			this._User = User;
			this._Stream = Stream;
			this._Chat = Chat;
			this._$state = $state;
			this._$rootScope = $rootScope;
			this._$location = $location;
			this._$dialog = $mdDialog;
			//this._Websocket = Websocket;
			this.storedUser = this._Auth.getUser();
			this.isLoggedIn = this._Auth.isLoggedIn();

			if (this.isLoggedIn) {
				this.getUserInfo();
			}

			this._$rootScope.$on('$stateChangeStart', function () {
				_this._$sidenav('user-menu').close();
			});

			this._$rootScope.$on('streamCreated', function () {
				_this._$dialog.hide();
			});

			this._$rootScope.$on('unauthedRequest', function () {
				_this._$dialog.show({
					templateUrl: './app/pages/auth/dialogs/403.dialog.html',
					controller: 'AuthUnauthedController',
					controllerAs: "$ctrl",
					clickOutsideToClose: true
				});
			});

			this.getStreams();
		}

		_createClass(navCtrl, [{
			key: 'openUserMenu',
			value: function openUserMenu() {
				this._$sidenav('user-menu').toggle();
			}
		}, {
			key: 'getUserInfo',
			value: function getUserInfo() {
				var _this2 = this;

				this._User.single(this.storedUser._id).then(function (response) {
					_this2.user = response.data.res.record;
				});
			}
		}, {
			key: 'getStreams',
			value: function getStreams(options) {
				var _this3 = this;

				options = options || {};

				if (this.isLoggedIn) {
					options.subscribed = true;

					this._Stream.get(options).then(function (response) {
						_this3.streams = response.data.res.records;
					});
				} else {
					options.unsubscribed = true;
					this._Stream.get(options).then(function (response) {
						_this3.streams = response.data.res.records;
					});
				}
			}
		}, {
			key: 'openCreateStream',
			value: function openCreateStream() {
				this._$sidenav('user-menu').close();
				this._$dialog.show({
					templateUrl: './app/pages/streams/dialogs/create/create.html',
					controller: 'StreamsCreateController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true
				});
			}
		}, {
			key: 'openCreateThread',
			value: function openCreateThread() {
				this._$sidenav("user-menu").close();
				this._$dialog.show({
					templateUrl: './app/pages/threads/dialogs/create/create.anywhere.html',
					controller: 'CreateThreadAnywhereController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true
				});
			}
		}, {
			key: 'openUsersSearch',
			value: function openUsersSearch() {
				this._$sidenav('user-menu').close();
				this._$dialog.show({
					templateUrl: './app/pages/profile/dialogs/search.html',
					controller: 'UsersSearchController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true
				});
			}
		}, {
			key: 'openStreamSearch',
			value: function openStreamSearch() {
				this._$sidenav('user-menu').close();
				this._$dialog.show({
					templateUrl: './app/pages/streams/dialogs/search/search.html',
					controller: 'StreamsSearchController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true
				});
			}
		}, {
			key: 'openThreadSearch',
			value: function openThreadSearch() {
				this._$sidenav('user-menu').close();
				this._$dialog.show({
					templateUrl: './app/pages/threads/dialogs/search/search.html',
					controller: 'ThreadsSearchController',
					controllerAs: '$ctrl',
					clickOutsideToClose: true
				});
			}
		}, {
			key: 'logout',
			value: function logout() {
				this._Storage.remove('user');
				this._Storage.remove('opinion-token');
				//this._Websocket.logout(this.user._id);
				this._$state.go('app.home', {}, { reload: true });
				this._$sidenav('user-menu').close();
			}
		}]);

		return navCtrl;
	}();

	var appNav = {
		controller: navCtrl,
		templateUrl: './app/components/shared/nav/nav.html'
	};

	exports.default = appNav;

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var notificationCtrl = function () {
		function notificationCtrl($rootScope, $location, Auth, User) {
			var _this = this;

			_classCallCheck(this, notificationCtrl);

			this._$rootScope = $rootScope;
			this._$location = $location;
			this._Auth = Auth;
			this._User = User;
			this._isLoggedIn = this._Auth.isLoggedIn();
			this.storedUser = this._Auth.getUser();

			this.notificationCount = 0;
			this.notifications = [];

			this.$onInit = function () {
				if (_this._isLoggedIn) {
					_this.updateNotifications();
				}
			};

			this._$rootScope.$on('newNotification', function (event, data) {
				if (_this.user._id == data.userId) {
					_this.updateNotifications();
				}
			});
		}

		_createClass(notificationCtrl, [{
			key: 'markRead',
			value: function markRead(item) {
				var _this2 = this;

				var record = this._User.notificationsRead(item._id).then(function (response) {
					if (response.data.res.notifications) {
						response.data.res.notifications.map(function (item) {
							item.display = _this2.NotificationText(item);

							if (item.thread) {
								item.href = 'app.singleThread({threadId: item.thread._id, streamId: item.thread.stream})';
							}

							if (item.user) {
								item.href = 'app.profile.overview({userId: item.user._id})';
							}
						});
					}

					_this2.notifications = response.data.res.notifications;
					_this2.notificationCount = response.data.res.notifications.length;
				});
			}
		}, {
			key: 'markAsRead',
			value: function markAsRead() {
				var _this3 = this;

				this._User.markRead(this.storedUser._id, this.notifications).then(function (response) {
					_this3.updateNotifications();
				});
			}
		}, {
			key: 'notificationAction',
			value: function notificationAction(item) {
				if (item.thread) {
					this._$location.url(item.thread.stream + '/' + item.thread._id);
				}

				if (item.user) {
					this._$location.url('profile/' + item.actor._id + '/overview');
				}

				if (item.thread && item.user) {
					this._$location.url(item.thread.stream + '/' + item.thread._id);
				}
			}
		}, {
			key: 'updateNotifications',
			value: function updateNotifications() {
				var _this4 = this;

				this._User.notifications().then(function (response) {
					if (response.data.res.notifications) {
						response.data.res.notifications.map(function (item) {
							item.display = _this4.NotificationText(item);
						});
					}

					_this4.notifications = response.data.res.notifications;
					_this4.notificationCount = response.data.res.notifications ? response.data.res.notifications.length : 0;
				});
			}
		}, {
			key: 'NotificationText',
			value: function NotificationText(obj) {
				if (!obj) {
					return { text: '' };
				}

				var msg = '';
				var actor = obj.actor;

				switch (obj.notificationType) {
					case 'liked':
						msg = actor.name + ' has liked a post';
						break;

					case 'comment':
						msg = actor.name + ' has commented on a post';
						break;

					case 'followed':
						msg = actor.name + ' is now following you';
						break;

					case 'saved':
						msg = actor.name + ' has saved a thread';

					case 'feed':
						msg = actor.name + ' just created a new thread';
						break;

					case 'mention':
						msg = actor.name + ' has just mentioned you in a thread';
						break;
				}

				return {
					text: msg
				};
			}
		}]);

		return notificationCtrl;
	}();

	var notificationsComponent = {
		controller: notificationCtrl,
		templateUrl: './app/components/shared/notifications/notifications.html'
	};

	exports.default = notificationsComponent;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _nav = __webpack_require__(150);

	var _nav2 = _interopRequireDefault(_nav);

	var _notifications = __webpack_require__(151);

	var _notifications2 = _interopRequireDefault(_notifications);

	var _messages = __webpack_require__(149);

	var _messages2 = _interopRequireDefault(_messages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sharedComponents = _angular2.default.module('shared.components', []);
	sharedComponents.component('appNav', _nav2.default);
	sharedComponents.component('notifications', _notifications2.default);
	sharedComponents.component('messages', _messages2.default);

	exports.default = sharedComponents;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _storage = __webpack_require__(155);

	var _storage2 = _interopRequireDefault(_storage);

	var _toasts = __webpack_require__(156);

	var _toasts2 = _interopRequireDefault(_toasts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configModule = _angular2.default.module('app.config', []);
	configModule.service('Storage', _storage2.default);
	configModule.service('Toast', _toasts2.default);

	exports.default = configModule;

/***/ },
/* 154 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function authInterceptor(Storage, $rootScope) {
		'ngInject';

		return {
			request: function request(config) {
				config.headers.Authorization = "Bearer " + Storage.get('opinion-token');
				return config;
			},

			responseError: function responseError(response) {
				if (response.status == '401' || response.status == '403') {
					Storage.remove('opinion-token');
					$rootScope.$broadcast('unauthedRequest');
				}

				if (response.status == '404') {
					$state.go('app.home');
				}
			}
		};
	}

	exports.default = authInterceptor;

/***/ },
/* 155 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Storage = function () {
		function Storage() {
			'ngInject';

			_classCallCheck(this, Storage);
		}

		_createClass(Storage, [{
			key: 'get',
			value: function get(item) {
				return localStorage.getItem(item);
			}
		}, {
			key: 'set',
			value: function set(item, val) {
				return localStorage.setItem(item, val);
			}
		}, {
			key: 'remove',
			value: function remove(item) {
				return localStorage.removeItem(item);
			}
		}]);

		return Storage;
	}();

	exports.default = Storage;

/***/ },
/* 156 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Toast = function () {
		function Toast($mdToast) {
			'ngInject';

			_classCallCheck(this, Toast);

			this._Toast = $mdToast;
		}

		_createClass(Toast, [{
			key: 'success',
			value: function success(message) {
				var toast = this._Toast.simple().content(message).action('OK').highlightAction(false).position('bottom right').theme('success-toast');
				this._Toast.show(toast);
			}
		}, {
			key: 'error',
			value: function error(message) {
				var toast = this._Toast.simple().content(message).action('OK').highlightAction(false).position('bottom right').theme('error-toast');
				this._Toast.show(toast);
			}
		}]);

		return Toast;
	}();

	exports.default = Toast;

/***/ },
/* 157 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function authConfig($stateProvider) {
		'ngInject';

		$stateProvider.state('app.signup', {
			url: '/signup',
			templateUrl: './app/pages/auth/signup/signup.html'
		});

		$stateProvider.state('app.login', {
			url: '/login',
			templateUrl: './app/pages/auth/login/login.html'
		});

		$stateProvider.state('app.updateProfile', {
			url: '/:userId/update-profile',
			templateUrl: './app/pages/auth/profileInfo/update-profile.html',
			controller: 'UpdateProfileController',
			controllerAs: '$ctrl'
		});
	}

	exports.default = authConfig;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _auth = __webpack_require__(157);

	var _auth2 = _interopRequireDefault(_auth);

	var _auth3 = __webpack_require__(159);

	var _auth4 = _interopRequireDefault(_auth3);

	var _passwordReset = __webpack_require__(163);

	var _passwordReset2 = _interopRequireDefault(_passwordReset);

	var _passwordMatch = __webpack_require__(161);

	var _passwordMatch2 = _interopRequireDefault(_passwordMatch);

	var _updateProfile = __webpack_require__(162);

	var _updateProfile2 = _interopRequireDefault(_updateProfile);

	var _dialog = __webpack_require__(160);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var authModule = _angular2.default.module('auth', []);
	authModule.config(_auth2.default);
	authModule.service('Auth', _auth4.default);
	authModule.controller('PasswordResetController', _passwordReset2.default);
	authModule.directive('compareTo', _passwordMatch2.default);
	authModule.controller('UpdateProfileController', _updateProfile2.default);
	authModule.controller('AuthUnauthedController', _dialog2.default);

	exports.default = authModule;

/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Auth = function () {
		function Auth($http, Storage) {
			'ngInject';

			_classCallCheck(this, Auth);

			this._$http = $http;
			this._Storage = Storage;
		}

		_createClass(Auth, [{
			key: 'signup',
			value: function signup(credentials) {
				return this._$http({
					url: '/users',
					method: 'POST',
					data: credentials
				});
			}
		}, {
			key: 'login',
			value: function login(credentials) {
				return this._$http({
					url: '/users/authenticate',
					method: 'POST',
					data: credentials
				});
			}
		}, {
			key: 'forgot',
			value: function forgot(data) {
				return this._$http({
					url: '/users/forgot',
					method: 'POST',
					data: data
				});
			}
		}, {
			key: 'reset',
			value: function reset(data) {
				return this._$http({
					url: '/users/reset',
					method: 'POST',
					data: data
				});
			}
		}, {
			key: 'updateProfile',
			value: function updateProfile(id, data) {
				return this._$http({
					url: '/users/' + id + '/updateProfile',
					method: 'POST',
					data: data
				});
			}
		}, {
			key: 'isLoggedIn',
			value: function isLoggedIn() {
				return this._Storage.get('opinion-token');
			}
		}, {
			key: 'getUser',
			value: function getUser() {
				var serialized = this._Storage.get('user');

				if (serialized) {
					return angular.fromJson(serialized);
				} else {
					return;
				}
			}
		}]);

		return Auth;
	}();

	exports.default = Auth;

/***/ },
/* 160 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var authUnauthedCtrl = function () {
		function authUnauthedCtrl($mdDialog, $rootScope) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, authUnauthedCtrl);

			this._$dialog = $mdDialog;
			this._$rootScope = $rootScope;

			this._$rootScope.$on('loggedIn', function () {
				_this._$dialog.hide();
			});

			this._$rootScope.$on('signedUp', function () {
				_this._$dialog.hide();
			});
		}

		_createClass(authUnauthedCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}]);

		return authUnauthedCtrl;
	}();

	exports.default = authUnauthedCtrl;

/***/ },
/* 161 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function passwordMatch() {
		'ngInject';

		return {
			require: 'ngModel',
			scope: {
				otherModelValue: "=compareTo"
			},

			link: function link(scope, element, attributes, ngModel) {
				ngModel.$validators.compareTo = function (modelValue) {
					return modelValue == scope.otherModelValue;
				};

				scope.$watch("otherModelValue", function () {
					ngModel.$validate();
				});
			}
		};
	}

	exports.default = passwordMatch;

/***/ },
/* 162 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var updateProfileCtrl = function () {
		function updateProfileCtrl($stateParams, Auth, Toast, Storage, $state) {
			'ngInject';

			_classCallCheck(this, updateProfileCtrl);

			this._$stateParams = $stateParams;
			this._Auth = Auth;
			this._Toast = Toast;
			this._Storage = Storage;
			this._$state = $state;
			this.userId = $stateParams.userId;
			this.user = this._Auth.getUser();
		}

		_createClass(updateProfileCtrl, [{
			key: 'skip',
			value: function skip() {
				this._$state.go('app.profile.overview', { userId: this.userId });
			}
		}]);

		return updateProfileCtrl;
	}();

	exports.default = updateProfileCtrl;

/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var passwordReset = function () {
		function passwordReset($state, $mdDialog, Auth, Toast) {
			'ngInject';

			_classCallCheck(this, passwordReset);

			this._$state = $state;
			this._$dialog = $mdDialog;
			this._Auth = Auth;
			this._Toast = Toast;

			this.data = {
				email: '',
				token: '',
				password: ''
			};
		}

		_createClass(passwordReset, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}, {
			key: 'generateReset',
			value: function generateReset() {
				var _this = this;

				this._Auth.forgot(this.data).then(function (response) {
					if (response) {
						_this.tokenSent = true;
						_this._Toast.success('Great! Check your email for futher instructions');
					} else {
						_this._Toast.error(response.data.res.message);
					}
				});
			}
		}, {
			key: 'attemptReset',
			value: function attemptReset() {
				var _this2 = this;

				this._Auth.reset(this.data).then(function (response) {
					if (response) {
						_this2._Toast.success('Hooray! Now you can login');
						_this2._$dialog.hide();
					} else {
						_this2._Toast.error(response.data.res.error);
					}
				});
			}
		}]);

		return passwordReset;
	}();

	exports.default = passwordReset;

/***/ },
/* 164 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function chatsConfig($stateProvider) {
		'ngInject';

		$stateProvider.state('app.chats', {
			templateUrl: './app/pages/chats/chats.tmpl.html',
			abstract: true
		});

		$stateProvider.state('app.chats.inbox', {
			url: '/inbox',
			templateUrl: './app/pages/chats/inbox/inbox.html',
			controller: 'ChatsInboxController',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.chats.inbox.messages', {
			url: '/:chatId/messages',
			templateUrl: './app/pages/chats/messages/messages.html',
			controller: 'ChatsMessagesController',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.chats.saved', {
			url: '/saved',
			templateUrl: './app/pages/chats/saved/saved.html',
			controller: 'ChatsSavedController',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.chats.saved.messages', {
			url: '/:chatId/messages',
			templateUrl: './app/pages/chats/messages/messages.html',
			controller: 'ChatsMessagesController',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.chats.trash', {
			url: '/trash',
			templateUrl: './app/pages/chats/trash/trash.html',
			controller: 'ChatsTrashController',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.chats.trash.messages', {
			url: '/:chatId/messages',
			templateUrl: './app/pages/chats/messages/messages.html',
			controller: 'ChatsMessagesController',
			controllerAs: '$ctrl'
		});
	}

	exports.default = chatsConfig;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _chats = __webpack_require__(166);

	var _chats2 = _interopRequireDefault(_chats);

	var _chats3 = __webpack_require__(164);

	var _chats4 = _interopRequireDefault(_chats3);

	var _chatsInbox = __webpack_require__(167);

	var _chatsInbox2 = _interopRequireDefault(_chatsInbox);

	var _chatsMessages = __webpack_require__(168);

	var _chatsMessages2 = _interopRequireDefault(_chatsMessages);

	var _chatsSaved = __webpack_require__(169);

	var _chatsSaved2 = _interopRequireDefault(_chatsSaved);

	var _chatsTrash = __webpack_require__(170);

	var _chatsTrash2 = _interopRequireDefault(_chatsTrash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var chatsModule = _angular2.default.module('chats', []);
	chatsModule.config(_chats4.default);
	chatsModule.service('Chat', _chats2.default);
	chatsModule.controller('ChatsMessagesController', _chatsMessages2.default);
	chatsModule.controller('ChatsInboxController', _chatsInbox2.default);
	chatsModule.controller("ChatsSavedController", _chatsSaved2.default);
	chatsModule.controller('ChatsTrashController', _chatsTrash2.default);

	exports.default = chatsModule;

/***/ },
/* 166 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsService = function () {
		function chatsService($http) {
			'ngInject';

			_classCallCheck(this, chatsService);

			this._$http = $http;
		}

		_createClass(chatsService, [{
			key: 'create',
			value: function create(data) {
				return this._$http({
					url: '/chats/',
					method: 'POST',
					data: data
				});
			}
		}, {
			key: 'list',
			value: function list(options) {
				return this._$http({
					url: '/chats/',
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						page: options.page
					}
				});
			}
		}, {
			key: 'markRead',
			value: function markRead(id) {
				return this._$http({
					url: '/chats/markRead/' + id,
					method: 'GET'
				});
			}
		}, {
			key: 'findUnread',
			value: function findUnread(id) {
				return this._$http({
					url: '/chats/' + id + '/unread',
					method: 'GET'
				});
			}
		}, {
			key: 'get',
			value: function get(id) {
				return this._$http({
					url: '/chats/' + id,
					method: 'GET'
				});
			}
		}, {
			key: 'message',
			value: function message(id, data) {
				return this._$http({
					url: '/chats/' + id + '/message',
					method: 'POST',
					data: data
				});
			}
		}, {
			key: 'save',
			value: function save(id) {
				return this._$http({
					url: '/chats/' + id + '/save',
					method: 'POST'
				});
			}
		}, {
			key: 'unsave',
			value: function unsave(id) {
				return this._$http({
					url: '/chats/' + id + '/unsave',
					method: 'POST'
				});
			}
		}, {
			key: 'getSaved',
			value: function getSaved(id, options) {
				return this._$http({
					url: '/chats/' + id + '/saved',
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						page: options.page
					}
				});
			}
		}, {
			key: 'remove',
			value: function remove(id) {
				return this._$http({
					url: '/chats/' + id + '/remove',
					method: 'POST'
				});
			}
		}, {
			key: 'unremove',
			value: function unremove(id) {
				return this._$http({
					url: '/chats/' + id + '/unremove',
					method: 'POST'
				});
			}
		}, {
			key: 'getRemoved',
			value: function getRemoved(id, options) {
				return this._$http({
					url: '/chats/' + id + '/removed',
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						page: options.page
					}
				});
			}
		}]);

		return chatsService;
	}();

	exports.default = chatsService;

/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsInboxCtrl = function () {
		function chatsInboxCtrl(Chat) {
			'ngInject';

			_classCallCheck(this, chatsInboxCtrl);

			this._Chat = Chat;
			this.chats = [];
			this.getChats();
			this.lastUpdated = 0;
			this.chatsPage = 0;
		}

		_createClass(chatsInboxCtrl, [{
			key: 'getChats',
			value: function getChats(options) {
				var _this = this;

				options = options || {};
				options.timestamp = this.lastUpdated;
				options.page = this.chatsPage;

				this._Chat.list(options).then(function (response) {
					if (response.data.res.records) {

						if (!options.append) {
							_this.chats = response.data.res.records.concat(_this.chats);
						} else {
							_this.chats = _this.chats.concat(response.data.res.records);
						}

						_this.lastUpdated = Date.now();
						_this.noMoreChats = !response.data.res.morePages;
					}
				});
			}
		}, {
			key: 'loadMore',
			value: function loadMore() {
				this.chatsPage++;
				this.lastUpdated = 0;
				this.getChats({ append: true });
			}
		}]);

		return chatsInboxCtrl;
	}();

	exports.default = chatsInboxCtrl;

/***/ },
/* 168 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsMessagesCtrl = function () {
		function chatsMessagesCtrl(Auth, Chat, $state, $stateParams, $rootScope) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, chatsMessagesCtrl);

			this._Auth = Auth;
			this._Chat = Chat;
			this._$state = $state;
			this._$stateParams = $stateParams;
			this._$rootScope = $rootScope;

			this.chatId = $stateParams.chatId;
			this.currentUser = this._Auth.getUser();
			this.messages = [];
			this.getChat();

			this._$rootScope.$on('newMessage', function () {
				_this.updateMessages({
					append: true
				});
			});
		}

		_createClass(chatsMessagesCtrl, [{
			key: 'getChat',
			value: function getChat() {
				var _this2 = this;

				this._Chat.get(this.chatId).then(function (response) {
					console.log(response);
					_this2.chat = response.data.res.chat;
					_this2.messages = response.data.res.record.messages;
				});
			}
		}, {
			key: 'updateMessages',
			value: function updateMessages(options) {
				var _this3 = this;

				options = options || {};

				this._Chat.get(this.chatId).then(function (response) {
					if (!options.append) {
						_this3.messages = response.data.res.record.messages.concat(_this3.messages);
					} else {
						_this3.messages = _this3.messages.concat(response.data.res.record.messages[0]);
					}
				});
			}
		}, {
			key: 'closeMessage',
			value: function closeMessage() {
				this._$rootScope.$broadcast('showChats');
				this._$state.go('app.chats.inbox');
			}
		}]);

		return chatsMessagesCtrl;
	}();

	exports.default = chatsMessagesCtrl;

/***/ },
/* 169 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ChatsSavedCtrl = function () {
		function ChatsSavedCtrl(Chat, Auth) {
			'ngInject';

			_classCallCheck(this, ChatsSavedCtrl);

			this._Chat = Chat;
			this._Auth = Auth;
			this.chats = [];
			this.lastUpdated = 0;
			this.chatsPage = 0;
			this.currentUser = this._Auth.getUser()._id;
			this.getChats();
		}

		_createClass(ChatsSavedCtrl, [{
			key: 'getChats',
			value: function getChats(options) {
				var _this = this;

				options = options || {};
				options.timestamp = this.lastUpdated;
				options.page = this.chatsPage;

				this._Chat.getSaved(this.currentUser, options).then(function (response) {
					if (response.data.res.records) {
						if (!options.append) {
							_this.chats = response.data.res.records.concat(_this.chats);
						} else {
							_this.chats = _this.chats.concat(response.data.res.records);
						}

						_this.lastUpdated = Date.now();
						_this.noMoreChats = !response.data.res.morePages;
					} else {
						_this.noMoreChats = true;
					}
				});
			}
		}, {
			key: 'loadMore',
			value: function loadMore() {
				this.chatsPage++;
				this.lastUpdated = 0;
				this.getChats({ append: true });
			}
		}]);

		return ChatsSavedCtrl;
	}();

	exports.default = ChatsSavedCtrl;

/***/ },
/* 170 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsTrashCtrl = function () {
		function chatsTrashCtrl(Chat, Auth) {
			'ngInject';

			_classCallCheck(this, chatsTrashCtrl);

			this.chatsPages = 0;
			this.lastUpdated = 0;
			this._Chat = Chat;
			this._Auth = Auth;
			this.chats = [];
			this.currentUser = this._Auth.getUser()._id;
			this.getChats();
		}

		_createClass(chatsTrashCtrl, [{
			key: 'getChats',
			value: function getChats(options) {
				var _this = this;

				options = options || {};
				options.timestamp = this.lastUpdated;
				options.page = this.chatsPages;

				this._Chat.getRemoved(this.currentUser, options).then(function (response) {
					if (response.data.res.records) {
						if (!options.append) {
							_this.chats = response.data.res.records.concat(_this.chats);
						} else {
							_this.chats = _this.chats.concat(response.data.res.records);
						}

						_this.lastUpdated = Date.now();
						_this.noMoreChats = !response.data.res.morePages;
					} else {
						_this.noMoreChats = true;
					}
				});
			}
		}, {
			key: 'loadMore',
			value: function loadMore() {
				this.chatsPages++;
				this.lastUpdated = 0;
				this.getChats({ append: true });
			}
		}]);

		return chatsTrashCtrl;
	}();

	exports.default = chatsTrashCtrl;

/***/ },
/* 171 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function homeConfig($stateProvider) {
		'ngInject';

		$stateProvider.state('app.home', {
			url: '/',
			controller: 'HomeCtrl',
			controllerAs: '$ctrl',
			templateUrl: './app/pages/home/home.html'
		});
	}

	exports.default = homeConfig;

/***/ },
/* 172 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeCtrl = function () {
		function HomeCtrl(Thread, Auth) {
			'ngInject';

			_classCallCheck(this, HomeCtrl);

			this._Thread = Thread;
			this._Auth = Auth;
			this._isLoggedIn = this._Auth.isLoggedIn();
			this.getHome();
			this.threads = [];
			this.lastUpdated = 0;
			this.homeSearch = '';
			this.homePage = 0;
		}

		_createClass(HomeCtrl, [{
			key: 'getHome',
			value: function getHome(options) {
				var _this = this;

				options = options || {};
				options.timestamp = this.lastUpdated;
				options.filter = this.homeSearch;
				options.page = this.homePage;

				if (this._isLoggedIn) {
					this._Thread.authedHome(options).then(function (response) {
						if (!options.append) {
							_this.threads = response.data.res.records.concat(_this.threads);
						} else {
							_this.threads = _this.threads.concat(response.data.res.records);
						}

						_this.lastUpdated = Date.now();
						_this.noMoreThreads = !response.data.res.morePages;
					});
				} else {
					this._Thread.unHome(options).then(function (response) {

						if (_this.homeSearch) {
							_this.threads = [];
						}

						if (!options.append) {
							_this.threads = response.data.res.records.concat(_this.threads);
						} else {
							_this.threads = _this.threads.concat(response.data.res.records);
						}

						_this.lastUpdated = Date.now();
						_this.noMoreThreads = !response.data.res.morePages;
					});
				}
			}
		}]);

		return HomeCtrl;
	}();

	exports.default = HomeCtrl;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _home = __webpack_require__(171);

	var _home2 = _interopRequireDefault(_home);

	var _home3 = __webpack_require__(172);

	var _home4 = _interopRequireDefault(_home3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var homeModule = _angular2.default.module('home', []);
	homeModule.config(_home2.default);
	homeModule.controller('HomeCtrl', _home4.default);

	exports.default = homeModule;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(173);

	__webpack_require__(158);

	__webpack_require__(192);

	__webpack_require__(207);

	__webpack_require__(165);

	__webpack_require__(183);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['auth', 'streams', 'threads', 'chats', 'home', 'profile'];

	var pagesModule = _angular2.default.module('app.pages', requires);

	exports.default = pagesModule;

/***/ },
/* 175 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var activityCtrl = function () {
		function activityCtrl(User, $stateParams) {
			'ngInject';

			_classCallCheck(this, activityCtrl);

			this._User = User;
			this._$stateParams = $stateParams;
			this.userId = this._$stateParams.userId;
			this.activities = [];
			this.lastUpdated = 0;
			this.newActivitiesCount = 0;
			this.getActivities();
		}

		_createClass(activityCtrl, [{
			key: 'getActivities',
			value: function getActivities() {
				var _this = this;

				this._User.activity(this.userId).then(function (response) {
					_this.activities = response.data.res.records;
				});
			}
		}]);

		return activityCtrl;
	}();

	exports.default = activityCtrl;

/***/ },
/* 176 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProfileCommentsCtrl = function () {
		function ProfileCommentsCtrl(Comment, $stateParams, $timeout, $rootScope) {
			'ngInject';

			_classCallCheck(this, ProfileCommentsCtrl);

			this._Comment = Comment;
			this._$stateParams = $stateParams;
			this._userId = this._$stateParams.userId;
			this._$timeout = $timeout;
			this._$rootScope = $rootScope;
			this.comments = [];

			this.lastUpdated = 0;
			this.commentsPage = 0;

			this.getComments();
		}

		_createClass(ProfileCommentsCtrl, [{
			key: 'getComments',
			value: function getComments(options) {
				var _this = this;

				options = options || {};
				options.timestamp = this.lastUpdated;
				options.page = this.commentsPage;

				this._Comment.userComments(this._userId, options).then(function (response) {

					if (!options.append) {
						_this.comments = response.data.res.records.concat(_this.comments);
					} else {
						_this.comments = _this.comments.concat(response.data.res.records);
					}

					_this.lastUpdated = Date.now();
					_this.noMoreComments = !response.data.res.morePages;
				});
			}
		}, {
			key: 'loadMore',
			value: function loadMore() {
				this.commentsPage++;
				this.lastUpdated = 0;
				this.getComments({
					append: true
				});
			}
		}]);

		return ProfileCommentsCtrl;
	}();

	exports.default = ProfileCommentsCtrl;

/***/ },
/* 177 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var profileEditCtrl = function () {
		function profileEditCtrl($mdDialog, user, $rootScope, $state) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, profileEditCtrl);

			this._$dialog = $mdDialog;
			this._$rootScope = $rootScope;
			this._$state = $state;
			this.user = user;

			this._$rootScope.$on('profileUpdated', function () {
				_this._$dialog.hide();
			});
		}

		_createClass(profileEditCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}]);

		return profileEditCtrl;
	}();

	exports.default = profileEditCtrl;

/***/ },
/* 178 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProfileMessageCtrl = function () {
		function ProfileMessageCtrl(Chat, Toast, Auth, $mdDialog, message, user) {
			'ngInject';

			_classCallCheck(this, ProfileMessageCtrl);

			this._Chat = Chat;
			this._Toast = Toast;
			this._Auth = Auth;
			this._$dialog = $mdDialog;
			this._message = message;
			this.user = user;
			this.data = {
				message: '',
				creator: this._Auth.getUser()._Id,
				chatId: this._message._id

			};
		}

		_createClass(ProfileMessageCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}, {
			key: 'sendMessage',
			value: function sendMessage(isValid) {
				var _this = this;

				if (isValid) {
					this._Chat.message(this._message._id, this.data).then(function (response) {
						_this._Toast.success('chat sent to ' + _this.user.username);
						_this._$dialog.hide();
					});
				}
			}
		}]);

		return ProfileMessageCtrl;
	}();

	exports.default = ProfileMessageCtrl;

/***/ },
/* 179 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var profileResetCtrl = function () {
		function profileResetCtrl(User, Toast, $mdDialog, user) {
			'ngInject';

			_classCallCheck(this, profileResetCtrl);

			this._User = User;
			this._Toast = Toast;
			this._$dialog = $mdDialog;
			this.user = user;

			this.data = {
				password: '',
				newPassword: '',
				confirm: ''
			};
		}

		_createClass(profileResetCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}, {
			key: 'resetPassword',
			value: function resetPassword(isValid) {
				var _this = this;

				if (isValid) {
					this._User.profileReset(this.user._id, this.data).then(function (response) {
						_this.resetForm();
						_this._Toast.success('You have just reset your password, ' + response.data.res.record.username);
						_this._$dialog.hide();
					});
				} else {
					this._Toast.error("Hmm, your form is not valid");
				}
			}
		}, {
			key: 'resetForm',
			value: function resetForm() {
				this.resetPasswordForm.$setUntouched();
				this.resetPasswordForm.$setPristine();
			}
		}]);

		return profileResetCtrl;
	}();

	exports.default = profileResetCtrl;

/***/ },
/* 180 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UsersSearchCtrl = function () {
		function UsersSearchCtrl(User, $location, $timeout, $mdDialog) {
			'ngInject';

			_classCallCheck(this, UsersSearchCtrl);

			this._User = User;
			this._$location = $location;
			this._$timeout = $timeout;
			this._$dialog = $mdDialog;
			this.search = '';
		}

		_createClass(UsersSearchCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}, {
			key: 'doSearch',
			value: function doSearch(val) {
				var _this = this;

				this._User.search(val).then(function (response) {
					_this.items = response.data.res.records;
				});
			}
		}, {
			key: 'goToUser',
			value: function goToUser(item) {
				this._$dialog.hide();
				this._$location.url('/profile/' + item._id + '/overview');
			}
		}, {
			key: 'clearSearch',
			value: function clearSearch() {
				var _this2 = this;

				this._$timeout(function () {
					_this2.search = '';
				}, 500);
			}
		}]);

		return UsersSearchCtrl;
	}();

	exports.default = UsersSearchCtrl;

/***/ },
/* 181 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function profileConfig($stateProvider) {
		'ngInject';

		$stateProvider.state('app.profile', {
			url: '/profile/:userId',
			templateUrl: './app/pages/profile/profile.tmpl.html',
			controller: 'ProfileController',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.profile.overview', {
			url: '/overview',
			templateUrl: './app/pages/profile/overview/overview.html'
		});

		$stateProvider.state('app.profile.threads', {
			url: '/threads',
			templateUrl: './app/pages/profile/threads/threads.html',
			controller: 'ProfileThreadsController',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.profile.comments', {
			url: '/comments',
			templateUrl: './app/pages/profile/comments/comments.html',
			controller: 'ProfileCommentsController',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.profile.saved', {
			url: '/saved',
			templateUrl: '/app/pages/profile/saved/saved.html',
			controller: 'ProfileSavedController',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.profile.activity', {
			url: '/activity',
			templateUrl: './app/pages/profile/activity/activity.html',
			controller: 'ProfileActivityController',
			controllerAs: '$ctrl'
		});
	}

	exports.default = profileConfig;

/***/ },
/* 182 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var profileCtrl = function () {
		function profileCtrl(User, Auth, Thread, $stateParams, $state, $rootScope) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, profileCtrl);

			this._User = User;
			this._Auth = Auth;
			this._Thread = Thread;
			this._$stateParams = $stateParams;
			this._$rootScope = $rootScope;
			this._userId = $stateParams.userId;
			this._$state = $state;
			this.currentState = this._$state.current.name;

			this.currentUser = this._Auth.getUser();
			this.getUser();

			this._$rootScope.$on('userFollowed', function () {
				_this.getUser();
			});

			this._$rootScope.$on('userUnfollowed', function () {
				_this.getUser();
			});

			this._$rootScope.$on('profileUpdated', function () {
				_this.getUser();
			});
		}

		_createClass(profileCtrl, [{
			key: 'getUser',
			value: function getUser() {
				var _this2 = this;

				this._User.single(this._userId).then(function (response) {
					_this2.user = response.data.res.record;
					_this2.followers = response.data.res.followers;
					_this2.alreadyFollowing = response.data.res.alreadyFollowing;
				});
			}
		}]);

		return profileCtrl;
	}();

	exports.default = profileCtrl;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _users = __webpack_require__(186);

	var _users2 = _interopRequireDefault(_users);

	var _profile = __webpack_require__(181);

	var _profile2 = _interopRequireDefault(_profile);

	var _profile3 = __webpack_require__(182);

	var _profile4 = _interopRequireDefault(_profile3);

	var _profileThreads = __webpack_require__(185);

	var _profileThreads2 = _interopRequireDefault(_profileThreads);

	var _profileComments = __webpack_require__(176);

	var _profileComments2 = _interopRequireDefault(_profileComments);

	var _profileSaved = __webpack_require__(184);

	var _profileSaved2 = _interopRequireDefault(_profileSaved);

	var _profileActivity = __webpack_require__(175);

	var _profileActivity2 = _interopRequireDefault(_profileActivity);

	var _usersSearch = __webpack_require__(180);

	var _usersSearch2 = _interopRequireDefault(_usersSearch);

	var _profileMessage = __webpack_require__(178);

	var _profileMessage2 = _interopRequireDefault(_profileMessage);

	var _profileEdit = __webpack_require__(177);

	var _profileEdit2 = _interopRequireDefault(_profileEdit);

	var _profileReset = __webpack_require__(179);

	var _profileReset2 = _interopRequireDefault(_profileReset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var profileModule = _angular2.default.module('profile', []);
	profileModule.config(_profile2.default);
	profileModule.service('User', _users2.default);
	profileModule.controller('ProfileController', _profile4.default);
	profileModule.controller('ProfileThreadsController', _profileThreads2.default);
	profileModule.controller('ProfileCommentsController', _profileComments2.default);
	profileModule.controller('ProfileSavedController', _profileSaved2.default);
	profileModule.controller('ProfileActivityController', _profileActivity2.default);
	profileModule.controller('UsersSearchController', _usersSearch2.default);
	profileModule.controller('ProfileMessageController', _profileMessage2.default);
	profileModule.controller('ProfileEditController', _profileEdit2.default);
	profileModule.controller('ProfileResetController', _profileReset2.default);

	exports.default = profileModule;

/***/ },
/* 184 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProfileSavedCtrl = function () {
		function ProfileSavedCtrl(Thread, Comment, $stateParams) {
			'ngInject';

			_classCallCheck(this, ProfileSavedCtrl);

			this._Thread = Thread;
			this._Comment = Comment;
			this._$stateParams = $stateParams;
			this._userId = this._$stateParams.userId;

			this.lastThreadUpdated = 0;
			this.threadSearch = '';
			this.threadPage = 0;

			this.lastCommentUpdated = 0;
			this.commentsSearch = '';
			this.commentPage = 0;

			this.threads = [];
			this.comments = [];

			this.getThreads();
			this.getComments();
		}

		_createClass(ProfileSavedCtrl, [{
			key: 'getThreads',
			value: function getThreads(options) {
				var _this = this;

				options = options || {};
				options.timestamp = this.lastThreadUpdated;
				options.page = this.threadPage;
				options.filter = this.threadSearch;

				this._Thread.userSaved(this._userId, options).then(function (response) {
					if (_this.threadSearch) {
						_this.threads = [];
					}

					if (!options.append) {
						_this.threads = response.data.res.records.concat(_this.threads);
					} else {
						_this.threads = _this.threads.concat(response.data.res.records);
					}

					_this.lastThreadUpdated = Date.now();
					_this.noMoreThreads = !response.data.res.morePages;
				});
			}
		}, {
			key: 'getComments',
			value: function getComments(options) {
				var _this2 = this;

				options = options || {};
				options.timestamp = this.lastCommentUpdated;
				options.page = this.commentPage;
				options.filter = this.commentsSearch;

				this._Comment.userSaved(this._userId, options).then(function (response) {
					if (_this2.commentsSearch) {
						_this2.comments = [];
					}

					if (!options.append) {
						_this2.comments = response.data.res.records.concat(_this2.comments);
					} else {
						_this2.comments = _this2.comments.concat(response.data.res.records);
					}

					_this2.lastCommentUpdated = Date.now();
					_this2.noMoreComments = !response.data.res.morePages;
				});
			}
		}]);

		return ProfileSavedCtrl;
	}();

	exports.default = ProfileSavedCtrl;

/***/ },
/* 185 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProfileThreadsCtrl = function () {
		function ProfileThreadsCtrl(Thread, User, $stateParams, $timeout, $rootScope) {
			'ngInject';

			_classCallCheck(this, ProfileThreadsCtrl);

			this._Thread = Thread;
			this._User = User;
			this._$stateParams = $stateParams;
			this._$rootScope = $rootScope;
			this._userId = $stateParams.userId;
			this._$timeout = $timeout;
			this.threads = [];

			this.lastUpdated = 0;
			this.threadPage = 0;
			this.getThreads();
		}

		_createClass(ProfileThreadsCtrl, [{
			key: 'getThreads',
			value: function getThreads(options) {
				var _this = this;

				options = options || {};
				options.timestamp = this.lastUpdated;
				options.page = this.threadPage;

				this._Thread.userThreads(this._userId, options).then(function (response) {

					if (!options.append) {
						_this.threads = response.data.res.records.concat(_this.threads);
					} else {
						_this.threads = _this.threads.concat(response.data.res.records);
					}

					_this.lastUpdated = Date.now();
					_this.noMoreThreads = !response.data.res.morePages;
				});
			}
		}, {
			key: 'loadMore',
			value: function loadMore() {
				this.threadPage++;
				this.lastUpdated = 0;
				this.getThreads({
					append: true
				});
			}
		}]);

		return ProfileThreadsCtrl;
	}();

	exports.default = ProfileThreadsCtrl;

/***/ },
/* 186 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UsersService = function () {
		function UsersService($http) {
			'ngInject';

			_classCallCheck(this, UsersService);

			this._$http = $http;
		}

		_createClass(UsersService, [{
			key: 'single',
			value: function single(id) {
				return this._$http({
					url: '/users/' + id,
					method: 'GET'
				});
			}
		}, {
			key: 'search',
			value: function search(keyword) {
				return this._$http({
					url: '/users/search/' + keyword,
					method: 'GET'
				});
			}
		}, {
			key: 'follow',
			value: function follow(id) {
				return this._$http({
					url: '/users/' + id + '/follow',
					method: 'POST'
				});
			}
		}, {
			key: 'unfollow',
			value: function unfollow(id) {
				return this._$http({
					url: '/users/' + id + '/unfollow',
					method: 'POST'
				});
			}
		}, {
			key: 'activity',
			value: function activity(id) {
				return this._$http({
					url: '/activity/feed/' + id,
					method: 'GET'
				});
			}
		}, {
			key: 'notifications',
			value: function notifications() {
				return this._$http({
					url: '/users/notifications',
					method: 'GET'
				});
			}
		}, {
			key: 'markRead',
			value: function markRead(id, data) {
				return this._$http({
					url: '/users/notifications/' + id,
					method: 'POST',
					data: data
				});
			}
		}, {
			key: 'profileReset',
			value: function profileReset(id, data) {
				return this._$http({
					url: '/users/' + id + '/profileReset',
					method: 'POST',
					data: data
				});
			}
		}]);

		return UsersService;
	}();

	exports.default = UsersService;

/***/ },
/* 187 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StreamsCreateCtrl = function () {
		function StreamsCreateCtrl($mdDialog) {
			'ngInject';

			_classCallCheck(this, StreamsCreateCtrl);

			this._$dialog = $mdDialog;
		}

		_createClass(StreamsCreateCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}]);

		return StreamsCreateCtrl;
	}();

	exports.default = StreamsCreateCtrl;

/***/ },
/* 188 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StreamsSearchCtrl = function () {
		function StreamsSearchCtrl(Stream, $location, $timeout, $mdDialog) {
			'ngInject';

			_classCallCheck(this, StreamsSearchCtrl);

			this._Stream = Stream;
			this._$location = $location;
			this._$timeout = $timeout;
			this._$dialog = $mdDialog;
			this.search = '';
		}

		_createClass(StreamsSearchCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}, {
			key: 'doSearch',
			value: function doSearch(val) {
				var _this = this;

				this._Stream.search(val).then(function (response) {
					_this.items = response.data.res.records;
				});
			}
		}, {
			key: 'goToStream',
			value: function goToStream(item) {
				this._$dialog.hide();
				this._$location.url('streams/' + item._id);
			}
		}, {
			key: 'clearSearch',
			value: function clearSearch() {
				var _this2 = this;

				this._$timeout(function () {
					_this2.search = '';
				}, 500);
			}
		}]);

		return StreamsSearchCtrl;
	}();

	exports.default = StreamsSearchCtrl;

/***/ },
/* 189 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StreamsListCtrl = function () {
		function StreamsListCtrl(Stream, $timeout, $rootScope, $mdDialog) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, StreamsListCtrl);

			this._Stream = Stream;
			this._$timeout = $timeout;
			this._$rootScope = $rootScope;
			this._$dialog = $mdDialog;
			this.streams = [];
			this.streamsSearch = '';
			this.streamPage = 0;
			this.lastUpdated = 0;
			this.getStreams();
			this.getCount();
			this._$rootScope.$on('streamCreated', function () {
				_this._$dialog.hide();
				_this.getStreams({
					append: true
				});
			});
		}

		_createClass(StreamsListCtrl, [{
			key: 'getStreams',
			value: function getStreams(options) {
				var _this2 = this;

				options = options || {};
				options.filter = this.streamsSearch, options.timestamp = this.lastUpdated;
				options.page = this.streamPage;

				this._Stream.get(options).then(function (response) {

					if (_this2.streamsSearch) {
						_this2.streams = [];
					}

					if (!options.append) {
						_this2.streams = response.data.res.records.concat(_this2.streams);
					} else {
						_this2.streams = _this2.streams.concat(response.data.res.records);
					}

					if (response.data.res.morePages == false) {
						_this2.noMoreStreams = true;
					}

					_this2.lastUpdated = Date.now();
				});
			}
		}, {
			key: 'getCount',
			value: function getCount() {
				var _this3 = this;

				this._Stream.count().then(function (response) {
					_this3.streamCount = response.data.res.streamCount;
				});
			}
		}, {
			key: 'loadMore',
			value: function loadMore() {
				this.streamPage++;
				this.lastUpdated = 0;
				this.getStreams({ append: true });
			}
		}, {
			key: 'search',
			value: function search(newValue, oldValue) {
				var _this4 = this;

				var streamsSearchTimeout = void 0;

				if (newValue !== oldValue) {
					this.streams = [];
				}

				this._$timeout.cancel(streamsSearchTimeout);

				streamsSearchTimeout = this._$timeout(function () {
					if (!newValue) {
						if (_this4.streamsSearchEnabled) {
							_this4.lastUpdated = 0;
							_this4.getStreams();
						}
					} else {
						_this4.getStreams();
					}

					_this4.streamsSearchEnabled = _this4.streamsSearch !== '';
				}, 500);
			}
		}, {
			key: 'byThreads',
			value: function byThreads() {
				this._$rootScope.$broadcast('streamByThreads');
			}
		}, {
			key: 'bySubscribers',
			value: function bySubscribers() {
				this._$rootScope.$broadcast('streamBySubscribers');
			}
		}, {
			key: 'byDate',
			value: function byDate() {
				this._$rootScope.$broadcast('streamByDate');
			}
		}]);

		return StreamsListCtrl;
	}();

	exports.default = StreamsListCtrl;

/***/ },
/* 190 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var singleStreamCtrl = function () {
		function singleStreamCtrl(Auth, Stream, Thread, $stateParams, $mdDialog, $rootScope, $timeout, Upload, Toast) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, singleStreamCtrl);

			this._Stream = Stream;
			this._Thread = Thread;
			this._Auth = Auth;
			this._isLoggedIn = this._Auth.isLoggedIn();
			this._$rootScope = $rootScope;
			this._$dialog = $mdDialog;
			this._$timeout = $timeout;
			this._Upload = Upload;
			this._Toast = Toast;
			this.streamId = $stateParams.streamId;
			this.threads = [];
			this.threadsSearch = '';
			this.threadPage = 0;
			this.lastUpdated = 0;
			this.getStream();
			this.getThreads();

			if (this._isLoggedIn) {
				this.currentUser = this._Auth.getUser()._id;
			}

			this._$rootScope.$on('threadCreated', function () {
				_this._$dialog.hide();
				_this.getThreads({
					append: true
				});
			});
		}

		_createClass(singleStreamCtrl, [{
			key: 'getStream',
			value: function getStream() {
				var _this2 = this;

				this._Stream.single(this.streamId).then(function (response) {
					_this2.stream = response.data.res.record;

					_this2.stream.moderators.forEach(function (moderator) {
						if (_this2.currentUser == moderator._id) {
							_this2.moderator = true;
							_this2._$rootScope.$broadcast('isModerator');
						}
					});
				});
			}
		}, {
			key: 'getThreads',
			value: function getThreads(options) {
				var _this3 = this;

				options = options || {};
				options.filter = this.threadsSearch;
				options.timestamp = this.lastUpdated;
				options.page = this.threadPage;

				this._Thread.get(this.streamId, options).then(function (response) {

					if (_this3.threadsSearch) {
						_this3.threads = [];
					}

					if (!options.append) {
						_this3.threads = response.data.res.records.concat(_this3.threads);
					} else {
						_this3.threads = _this3.threads.concat(response.data.res.records);
					}

					_this3.noMoreThreads = !response.data.res.morePages;
					_this3.lastUpdated = Date.now();
				});
			}
		}, {
			key: 'uploadImage',
			value: function uploadImage(file) {
				var _this4 = this;

				if (file) {
					this._Upload.upload({
						url: '/streams/uploadImage/' + this.streamId,
						file: file
					}).then(function (response) {
						_this4._Toast.success('You have just uploaded an image for your stream');
					}, function (evt) {
						var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
						console.log(_this4.progressPercentage);
					});
				}
			}
		}, {
			key: 'loadMore',
			value: function loadMore() {
				this.threadPage++;
				this.lastUpdated = 0;
				this.getThreads({
					append: true
				});
			}
		}, {
			key: 'search',
			value: function search(newValue, oldValue) {
				var _this5 = this;

				var threadsSearchTimeout;

				if (newValue !== oldValue) {
					this.threads = [];
				}

				this._$timeout.cancel(threadsSearchTimeout);
				threadsSearchTimeout = this._$timeout(function () {
					if (!newValue) {
						if (_this5.threadsSearchEnabled) {
							_this5.lastUpdated = 0;
							_this5.getThreads();
						}
					} else {
						_this5.getThreads();
					}

					_this5.threadsSearchEnabled = _this5.threadsSearch !== '';
				}, 500);
			}
		}, {
			key: 'byScore',
			value: function byScore() {
				this._$rootScope.$broadcast('threadByScore');
			}
		}, {
			key: 'byComments',
			value: function byComments() {
				this._$rootScope.$broadcast('threadByComments');
			}
		}, {
			key: 'bySaves',
			value: function bySaves() {
				this._$rootScope.$broadcast('threadBySaves');
			}
		}, {
			key: 'byDate',
			value: function byDate() {
				this._$rootScope.$broadcast('threadByDate');
			}
		}]);

		return singleStreamCtrl;
	}();

	exports.default = singleStreamCtrl;

/***/ },
/* 191 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function streamsConfig($stateProvider) {
		'ngInject';

		$stateProvider.state('app.streamsList', {
			url: '/streams',
			templateUrl: './app/pages/streams/list/list.html',
			controller: 'StreamsListCtrl',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.singleStream', {
			url: '/streams/:streamId',
			templateUrl: './app/pages/streams/single/single.html',
			controller: 'StreamsSingleCtrl',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.trendingStreams', {
			url: '/trending',
			templateUrl: './app/pages/streams/trending/trending.html',
			controller: 'TrendingStreamsCtrl',
			controllerAs: '$ctrl'
		});

		$stateProvider.state('app.subscribedStreams', {
			url: '/subscribed',
			templateUrl: './app/pages/streams/subscribed/subscribed.html',
			controller: 'SubscribedStreamsCtrl',
			controllerAs: "$ctrl"
		});
	}

	exports.default = streamsConfig;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _streams = __webpack_require__(191);

	var _streams2 = _interopRequireDefault(_streams);

	var _streams3 = __webpack_require__(193);

	var _streams4 = _interopRequireDefault(_streams3);

	var _streamsList = __webpack_require__(189);

	var _streamsList2 = _interopRequireDefault(_streamsList);

	var _streamsSingle = __webpack_require__(190);

	var _streamsSingle2 = _interopRequireDefault(_streamsSingle);

	var _trendingStreams = __webpack_require__(195);

	var _trendingStreams2 = _interopRequireDefault(_trendingStreams);

	var _subscribedStreams = __webpack_require__(194);

	var _subscribedStreams2 = _interopRequireDefault(_subscribedStreams);

	var _streamsCreate = __webpack_require__(187);

	var _streamsCreate2 = _interopRequireDefault(_streamsCreate);

	var _streamsSearch = __webpack_require__(188);

	var _streamsSearch2 = _interopRequireDefault(_streamsSearch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var streamsModule = _angular2.default.module('streams', []);
	streamsModule.config(_streams2.default);
	streamsModule.service('Stream', _streams4.default);
	streamsModule.controller('StreamsListCtrl', _streamsList2.default);
	streamsModule.controller('StreamsSingleCtrl', _streamsSingle2.default);
	streamsModule.controller('TrendingStreamsCtrl', _trendingStreams2.default);
	streamsModule.controller('SubscribedStreamsCtrl', _subscribedStreams2.default);
	streamsModule.controller('StreamsCreateController', _streamsCreate2.default);
	streamsModule.controller('StreamsSearchController', _streamsSearch2.default);

	exports.default = streamsModule;

/***/ },
/* 193 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StreamService = function () {
		function StreamService($http) {
			'ngInject';

			_classCallCheck(this, StreamService);

			this._$http = $http;
		}

		_createClass(StreamService, [{
			key: 'create',
			value: function create(credentials) {
				return this._$http({
					url: '/streams',
					method: 'POST',
					data: credentials
				});
			}
		}, {
			key: 'get',
			value: function get(options) {
				return this._$http({
					url: '/streams',
					method: 'GET',
					params: {
						subscribed: options.subscribed,
						unsubscribed: options.unsubscribed,
						timestamp: options.timestamp,
						filter: options.filter
					}
				});
			}
		}, {
			key: 'count',
			value: function count() {
				return this._$http({
					url: '/streams/count',
					method: 'GET'
				});
			}
		}, {
			key: 'search',
			value: function search(keyword) {
				return this._$http({
					url: '/streams/search/' + keyword,
					method: 'GET'
				});
			}
		}, {
			key: 'single',
			value: function single(id) {
				return this._$http({
					url: '/streams/' + id,
					method: 'GET'
				});
			}
		}, {
			key: 'subscribe',
			value: function subscribe(id) {
				return this._$http({
					url: '/streams/' + id + '/subscribe',
					method: 'POST'
				});
			}
		}, {
			key: 'unsubscribe',
			value: function unsubscribe(id) {
				return this._$http({
					url: '/streams/' + id + '/unsubscribe',
					method: 'POST'
				});
			}
		}]);

		return StreamService;
	}();

	exports.default = StreamService;

/***/ },
/* 194 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var subscribedStreamsCtrl = function () {
		function subscribedStreamsCtrl(Stream) {
			'ngInject';

			_classCallCheck(this, subscribedStreamsCtrl);

			this._Stream = Stream;
			this.lastUpdated = 0;
			this.streamPage = 0;
			this.streams = [];
			this.getStreams();
		}

		_createClass(subscribedStreamsCtrl, [{
			key: 'getStreams',
			value: function getStreams(options) {
				var _this = this;

				options = options || {};
				options.timestamp = this.lastUpdated;
				options.page = this.streamPage;
				options.subscribed = true;

				this._Stream.get(options).then(function (response) {

					if (!options.append) {
						_this.streams = response.data.res.records.concat(_this.streams);
					} else {
						_this.streams = _this.streams.concat(response.data.res.records);
					}

					_this.lastUpdated = Date.now();
					_this.noMoreStreams = !response.data.res.morePages;
				});
			}
		}]);

		return subscribedStreamsCtrl;
	}();

	exports.default = subscribedStreamsCtrl;

/***/ },
/* 195 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TrendingStreamCtrl = function () {
		function TrendingStreamCtrl(Stream) {
			'ngInject';

			_classCallCheck(this, TrendingStreamCtrl);

			this._Stream = Stream;
			this.lastUpdated = 0;
			this.streamPage = 0;
			this.streamSearch = '';
			this.streams = [];
			this.getStreams();
		}

		_createClass(TrendingStreamCtrl, [{
			key: 'getStreams',
			value: function getStreams(options) {
				var _this = this;

				options = options || {};
				options.timestamp = this.lastUpdated;
				options.filter = this.streamSearch;
				options.page = this.streamPage;

				this._Stream.get(options).then(function (response) {
					if (_this.streamSearch) {
						_this.streams = [];
					}

					if (!options.append) {
						_this.streams = response.data.res.records.concat(_this.streams);
					} else {
						_this.streams = _this.streams.concat(response.data.res.records);
					}

					_this.lastUpdated = Date.now();
					_this.noMoreStreams = !response.data.res.morePages;
				});
			}
		}, {
			key: 'loadMore',
			value: function loadMore() {
				this.streamPage++;
				this.lastUpdated = 0;
				this.getStreams({
					append: true
				});
			}
		}]);

		return TrendingStreamCtrl;
	}();

	exports.default = TrendingStreamCtrl;

/***/ },
/* 196 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var commentsService = function () {
		function commentsService($http) {
			'ngInject';

			_classCallCheck(this, commentsService);

			this._$http = $http;
		}

		_createClass(commentsService, [{
			key: 'create',
			value: function create(credentials) {
				return this._$http({
					url: '/comments',
					method: 'POST',
					data: credentials
				});
			}
		}, {
			key: 'single',
			value: function single(id) {
				return this._$http({
					url: '/comments/' + id,
					method: 'GET'
				});
			}
		}, {
			key: 'get',
			value: function get(id, options) {
				return this._$http({
					url: '/comments/threads/' + id,
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						filter: options.filter,
						page: options.page
					}
				});
			}
		}, {
			key: 'userComments',
			value: function userComments(id, options) {
				return this._$http({
					url: '/comments/user/' + id,
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						filter: options.filter,
						page: options.page
					}
				});
			}
		}, {
			key: 'userSaved',
			value: function userSaved(id, options) {
				return this._$http({
					url: '/comments/saved/' + id,
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						filter: options.filter,
						page: options.page
					}
				});
			}
		}, {
			key: 'like',
			value: function like(id) {
				return this._$http({
					url: '/comments/' + id + '/like',
					method: 'POST'
				});
			}
		}, {
			key: 'dislike',
			value: function dislike(id) {
				return this._$http({
					url: '/comments/' + id + '/dislike',
					method: 'POST'
				});
			}
		}, {
			key: 'save',
			value: function save(id) {
				return this._$http({
					url: '/comments/' + id + '/save',
					method: 'POST'
				});
			}
		}, {
			key: 'unsave',
			value: function unsave(id) {
				return this._$http({
					url: '/comments/' + id + '/unsave',
					method: 'POST'
				});
			}
		}, {
			key: 'modify',
			value: function modify(id, data) {
				return this._$http({
					url: '/comments/' + id + '/modify',
					method: 'POST',
					data: data
				});
			}
		}, {
			key: 'remove',
			value: function remove(id) {
				return this._$http({
					url: '/comments/' + id + '/remove',
					method: 'DELETE'
				});
			}
		}]);

		return commentsService;
	}();

	exports.default = commentsService;

/***/ },
/* 197 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var createCommentsCtrl = function () {
		function createCommentsCtrl($mdDialog) {
			'ngInject';

			_classCallCheck(this, createCommentsCtrl);

			this._$dialog = $mdDialog;
		}

		_createClass(createCommentsCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}]);

		return createCommentsCtrl;
	}();

	exports.default = createCommentsCtrl;

/***/ },
/* 198 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var createThreadAnywhereCtrl = function () {
		function createThreadAnywhereCtrl($mdDialog, Thread, Stream, Toast) {
			'ngInject';

			_classCallCheck(this, createThreadAnywhereCtrl);

			this._$dialog = $mdDialog;
			this._Thread = Thread;
			this._Stream = Stream;
			this._Toast = Toast;
			this.getStreams();

			this.data = {
				title: '',
				content: '',
				link: '',
				stream: ''
			};
		}

		_createClass(createThreadAnywhereCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}, {
			key: 'getStreams',
			value: function getStreams(options) {
				var _this = this;

				options = options || {};

				this._Stream.get(options).then(function (response) {
					_this.streams = response.data.res.records;
				});
			}
		}, {
			key: 'create',
			value: function create(isValid) {
				var _this2 = this;

				if (isValid) {
					this._Thread.create(this.data).then(function (response) {
						if (response.data.success) {
							_this2._Toast.success('You have just created a thread: ' + response.data.res.record.title);
							_this2.close();
						} else {
							_this2._Toast.error(response.data.res.message);
						}
					});
				} else {
					this._Toast.error('There seems to be an error with your form');
				}
			}
		}, {
			key: 'makeLink',
			value: function makeLink() {
				this.hasLink = !this.hasLink;
			}
		}]);

		return createThreadAnywhereCtrl;
	}();

	exports.default = createThreadAnywhereCtrl;

/***/ },
/* 199 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var threadsCreateCtrl = function () {
		function threadsCreateCtrl($mdDialog) {
			'ngInject';

			_classCallCheck(this, threadsCreateCtrl);

			this._$dialog = $mdDialog;
		}

		_createClass(threadsCreateCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}]);

		return threadsCreateCtrl;
	}();

	exports.default = threadsCreateCtrl;

/***/ },
/* 200 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var deleteCommentCtrl = function () {
		function deleteCommentCtrl(Comment, $state, $mdDialog, item) {
			'ngInject';

			_classCallCheck(this, deleteCommentCtrl);

			this._$dialog = $mdDialog;
			this._$state = $state;
			this._Comment = Comment;
			this._item = item;
		}

		_createClass(deleteCommentCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}, {
			key: 'delete',
			value: function _delete() {
				var _this = this;

				this._Comment.remove(this._item._id).then(function (response) {
					_this._$dialog.hide();
					_this._$state.reload();
				});
			}
		}]);

		return deleteCommentCtrl;
	}();

	exports.default = deleteCommentCtrl;

/***/ },
/* 201 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DeleteThreadCtrl = function () {
		function DeleteThreadCtrl(Thread, $state, $mdDialog, item) {
			'ngInject';

			_classCallCheck(this, DeleteThreadCtrl);

			this._$dialog = $mdDialog;
			this._$state = $state;
			this._Thread = Thread;
			this._item = item;
		}

		_createClass(DeleteThreadCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}, {
			key: 'delete',
			value: function _delete() {
				var _this = this;

				this._Thread.remove(this._item._id).then(function (response) {
					_this._$dialog.hide();
					_this._$state.reload();
				});
			}
		}]);

		return DeleteThreadCtrl;
	}();

	exports.default = DeleteThreadCtrl;

/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var editCommentCtrl = function () {
		function editCommentCtrl(Comment, $mdDialog, item) {
			'ngInject';

			_classCallCheck(this, editCommentCtrl);

			this._$dialog = $mdDialog;
			this._Comment = Comment;
			this._item = item;
			this.getComment();
		}

		_createClass(editCommentCtrl, [{
			key: 'getComment',
			value: function getComment() {
				var _this = this;

				this._Comment.single(this._item._id).then(function (response) {
					_this.comment = response.data.res.record;
				});
			}
		}, {
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}]);

		return editCommentCtrl;
	}();

	exports.default = editCommentCtrl;

/***/ },
/* 203 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var editThread = function () {
		function editThread(Thread, $mdDialog, item) {
			'ngInject';

			_classCallCheck(this, editThread);

			this._Thread = Thread;
			this._$dialog = $mdDialog;
			this._item = item;
			this.getThread();
		}

		_createClass(editThread, [{
			key: 'getThread',
			value: function getThread() {
				var _this = this;

				this._Thread.single(this._item._id).then(function (response) {
					_this.thread = response.data.res.record;
				});
			}
		}, {
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}]);

		return editThread;
	}();

	exports.default = editThread;

/***/ },
/* 204 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ThreadsSearchCtrl = function () {
		function ThreadsSearchCtrl(Thread, $location, $timeout, $mdDialog) {
			'ngInject';

			_classCallCheck(this, ThreadsSearchCtrl);

			this._Thread = Thread;
			this._$location = $location;
			this._$timeout = $timeout;
			this._$dialog = $mdDialog;
			this.search = '';
		}

		_createClass(ThreadsSearchCtrl, [{
			key: 'close',
			value: function close() {
				this._$dialog.hide();
			}
		}, {
			key: 'doSearch',
			value: function doSearch(val) {
				var _this = this;

				this._Thread.search(val).then(function (response) {
					_this.items = response.data.res.records;
				});
			}
		}, {
			key: 'goToThread',
			value: function goToThread(item) {
				this._$dialog.hide();
				this._$location.url(item.stream + '/' + item._id);
			}
		}, {
			key: 'clearSearch',
			value: function clearSearch() {
				var _this2 = this;

				this._$timeout(function () {
					_this2.search = '';
				}, 500);
			}
		}]);

		return ThreadsSearchCtrl;
	}();

	exports.default = ThreadsSearchCtrl;

/***/ },
/* 205 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var threadsSingleCtrl = function () {
		function threadsSingleCtrl(Thread, Comment, $stateParams, $rootScope, $mdDialog, $timeout) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, threadsSingleCtrl);

			this._Thread = Thread;
			this._Comment = Comment;
			this._$rootScope = $rootScope;
			this._$dialog = $mdDialog;
			this._$timeout = $timeout;
			this.streamId = $stateParams.streamId;
			this.threadId = $stateParams.threadId;
			this.comments = [];
			this.commentPage = 0;
			this.commentsSearch = '';
			this.lastUpdated = 0;
			this.getThread();
			this.getComments();

			this._$rootScope.$on('commentCreated', function () {
				_this._$dialog.hide();
				_this.getComments({
					append: true
				});
			});
		}

		_createClass(threadsSingleCtrl, [{
			key: 'getThread',
			value: function getThread() {
				var _this2 = this;

				this._Thread.single(this.threadId).then(function (response) {
					_this2.thread = response.data.res.record;
				});
			}
		}, {
			key: 'getComments',
			value: function getComments(options) {
				var _this3 = this;

				options = options || {};
				options.filter = this.commentsSearch;
				options.timestamp = this.lastUpdated;
				options.page = this.commentPage;

				this._Comment.get(this.threadId, options).then(function (response) {
					if (_this3.commentsSearch) {
						_this3.comments = [];
					}

					if (!options.append) {
						_this3.comments = response.data.res.records.concat(_this3.comments);
					} else {
						_this3.comments = _this3.comments.concat(response.data.res.records);
					}

					_this3.noMoreComments = !response.data.res.morePages;
					_this3.lastUpdated = Date.now();
				});
			}
		}, {
			key: 'loadMore',
			value: function loadMore() {
				this.commentPage++;
				this.lastUpdated = 0;
				this.getComments({
					append: true
				});
			}
		}, {
			key: 'search',
			value: function search(newValue, oldValue) {
				var _this4 = this;

				var commentsSearchTimeout;

				if (newValue != oldValue) {
					this.comments = [];
				}

				this._$timeout.cancel(commentsSearchTimeout);
				commentsSearchTimeout = this._$timeout(function () {
					if (!newValue) {
						if (_this4.commentsSearchEnabled) {
							_this4.lastUpdated = 0;
							_this4.getComments();
						}
					} else {
						_this4.getComments();
					}

					_this4.commentsSearchEnabled = _this4.commentsSearch !== '';
				}, 500);
			}
		}]);

		return threadsSingleCtrl;
	}();

	exports.default = threadsSingleCtrl;

/***/ },
/* 206 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function threadsConfig($stateProvider) {
		'ngInject';

		$stateProvider.state('app.singleThread', {
			url: '/:streamId/:threadId',
			templateUrl: './app/pages/threads/single/single.html',
			controller: 'threadsSingleCtrl',
			controllerAs: '$ctrl'
		});
	}

	exports.default = threadsConfig;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _threads = __webpack_require__(206);

	var _threads2 = _interopRequireDefault(_threads);

	var _threads3 = __webpack_require__(208);

	var _threads4 = _interopRequireDefault(_threads3);

	var _comments = __webpack_require__(196);

	var _comments2 = _interopRequireDefault(_comments);

	var _threadsSingle = __webpack_require__(205);

	var _threadsSingle2 = _interopRequireDefault(_threadsSingle);

	var _editThreadDialog = __webpack_require__(203);

	var _editThreadDialog2 = _interopRequireDefault(_editThreadDialog);

	var _deleteThreadDialog = __webpack_require__(201);

	var _deleteThreadDialog2 = _interopRequireDefault(_deleteThreadDialog);

	var _editComment = __webpack_require__(202);

	var _editComment2 = _interopRequireDefault(_editComment);

	var _deleteComment = __webpack_require__(200);

	var _deleteComment2 = _interopRequireDefault(_deleteComment);

	var _threadsCreate = __webpack_require__(199);

	var _threadsCreate2 = _interopRequireDefault(_threadsCreate);

	var _commentsCreate = __webpack_require__(197);

	var _commentsCreate2 = _interopRequireDefault(_commentsCreate);

	var _createAnywhere = __webpack_require__(198);

	var _createAnywhere2 = _interopRequireDefault(_createAnywhere);

	var _threadsSearch = __webpack_require__(204);

	var _threadsSearch2 = _interopRequireDefault(_threadsSearch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var threadsModule = _angular2.default.module('threads', []);
	threadsModule.config(_threads2.default);
	threadsModule.service('Thread', _threads4.default);
	threadsModule.service('Comment', _comments2.default);
	threadsModule.controller('threadsSingleCtrl', _threadsSingle2.default);
	threadsModule.controller('EditThreadDialogController', _editThreadDialog2.default);
	threadsModule.controller('DeleteThreadDialogController', _deleteThreadDialog2.default);
	threadsModule.controller('DeleteCommentController', _deleteComment2.default);
	threadsModule.controller('EditCommentController', _editComment2.default);
	threadsModule.controller('ThreadsCreateController', _threadsCreate2.default);
	threadsModule.controller('CommentsCreateController', _commentsCreate2.default);
	threadsModule.controller('CreateThreadAnywhereController', _createAnywhere2.default);
	threadsModule.controller('ThreadsSearchController', _threadsSearch2.default);

	exports.default = threadsModule;

/***/ },
/* 208 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var threadService = function () {
		function threadService($http) {
			'ngInject';

			_classCallCheck(this, threadService);

			this._$http = $http;
		}

		_createClass(threadService, [{
			key: 'create',
			value: function create(data) {
				return this._$http({
					url: '/threads',
					method: 'POST',
					data: data
				});
			}
		}, {
			key: 'get',
			value: function get(id, options) {
				return this._$http({
					url: '/threads/' + id + '/threads',
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						filter: options.filter,
						page: options.page
					}
				});
			}
		}, {
			key: 'search',
			value: function search(keyword) {
				return this._$http({
					url: '/threads/search/' + keyword,
					method: 'GET'
				});
			}
		}, {
			key: 'unHome',
			value: function unHome(options) {
				return this._$http({
					url: '/threads/unauthHome',
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						filter: options.filter,
						page: options.page
					}
				});
			}
		}, {
			key: 'authedHome',
			value: function authedHome(options) {
				return this._$http({
					url: '/threads/authedHome',
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						filter: options.filter,
						page: options.page
					}
				});
			}
		}, {
			key: 'userThreads',
			value: function userThreads(id, options) {
				return this._$http({
					url: '/threads/user/' + id,
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						filter: options.filter,
						page: options.page
					}
				});
			}
		}, {
			key: 'userSaved',
			value: function userSaved(id, options) {
				return this._$http({
					url: '/threads/saved/' + id,
					method: 'GET',
					params: {
						timestamp: options.timestamp,
						filter: options.filter,
						page: options.page
					}
				});
			}
		}, {
			key: 'single',
			value: function single(id) {
				return this._$http({
					url: './threads/' + id,
					method: 'GET'
				});
			}
		}, {
			key: 'save',
			value: function save(id) {
				return this._$http({
					url: '/threads/' + id + '/save',
					method: 'POST'
				});
			}
		}, {
			key: 'unsave',
			value: function unsave(id) {
				return this._$http({
					url: '/threads/' + id + '/unsave',
					method: 'POST'
				});
			}
		}, {
			key: 'like',
			value: function like(id) {
				return this._$http({
					url: '/threads/' + id + '/like',
					method: 'POST'
				});
			}
		}, {
			key: 'unlike',
			value: function unlike(id) {
				return this._$http({
					url: '/threads/' + id + '/dislike',
					method: 'POST'
				});
			}
		}, {
			key: 'modify',
			value: function modify(id, data) {
				return this._$http({
					url: '/threads/' + id + '/modify',
					method: 'POST',
					data: data
				});
			}
		}, {
			key: 'remove',
			value: function remove(id) {
				return this._$http({
					url: '/threads/' + id + '/remove',
					method: 'DELETE'
				});
			}
		}]);

		return threadService;
	}();

	exports.default = threadService;

/***/ }
]);