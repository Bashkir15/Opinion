webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(3);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _angularMaterial = __webpack_require__(4);

	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

	__webpack_require__(10);

	__webpack_require__(118);

	__webpack_require__(122);

	__webpack_require__(168);

	var _app = __webpack_require__(198);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(200);

	var _app4 = _interopRequireDefault(_app3);

	var _app5 = __webpack_require__(202);

	var _app6 = _interopRequireDefault(_app5);

	var _app7 = __webpack_require__(201);

	var _app8 = _interopRequireDefault(_app7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = [_angularUiRouter2.default, 'ngMaterial', 'ngAnimate', 'angularMoment', 'app.config', 'app.pages', 'app.components'];

	window.app = _angular2.default.module('app', requires);

	_angular2.default.module('app').config(_app2.default);
	_angular2.default.module('app').controller('AppController', _app6.default);
	_angular2.default.module("app").service('Websocket', _app8.default);
	_angular2.default.bootstrap(document, ['app']);

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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _storage = __webpack_require__(119);

	var _storage2 = _interopRequireDefault(_storage);

	var _toasts = __webpack_require__(120);

	var _toasts2 = _interopRequireDefault(_toasts);

	var _sockets = __webpack_require__(121);

	var _sockets2 = _interopRequireDefault(_sockets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configModule = _angular2.default.module('app.config', []);
	configModule.service('Storage', _storage2.default);
	configModule.service('Toast', _toasts2.default);
	configModule.service('Socket', _sockets2.default);

	exports.default = configModule;

/***/ },
/* 119 */
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
/* 120 */
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
/* 121 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var websockets = function () {
		function websockets() {
			'ngInject';

			_classCallCheck(this, websockets);

			this.conn = {};
			this.connect();
		}

		_createClass(websockets, [{
			key: 'connect',
			value: function connect() {
				var _this = this;

				var socket = window.io();
				socket.on('connect', function () {
					console.log('connected');
				});

				socket.on('disconnect', function () {
					_this.connect();
				});

				this.conn = socket;
			}
		}, {
			key: 'reconnect',
			value: function reconnect() {
				this.conn.close();
				this.connect();
			}
		}, {
			key: 'close',
			value: function close() {
				this.conn.close();
			}
		}]);

		return websockets;
	}();

	exports.default = websockets;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(123);

	__webpack_require__(126);

	__webpack_require__(132);

	__webpack_require__(140);

	__webpack_require__(151);

	__webpack_require__(158);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['home', 'auth', 'streams', 'threads', 'chats', 'profile'];

	var pagesModule = _angular2.default.module('app.pages', requires);

	exports.default = pagesModule;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _home = __webpack_require__(124);

	var _home2 = _interopRequireDefault(_home);

	var _home3 = __webpack_require__(125);

	var _home4 = _interopRequireDefault(_home3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var homeModule = _angular2.default.module('home', []);
	homeModule.config(_home2.default);
	homeModule.controller('HomeCtrl', _home4.default);

	exports.default = homeModule;

/***/ },
/* 124 */
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
/* 125 */
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
						console.log(response);

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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _auth = __webpack_require__(127);

	var _auth2 = _interopRequireDefault(_auth);

	var _auth3 = __webpack_require__(128);

	var _auth4 = _interopRequireDefault(_auth3);

	var _passwordReset = __webpack_require__(129);

	var _passwordReset2 = _interopRequireDefault(_passwordReset);

	var _passwordMatch = __webpack_require__(130);

	var _passwordMatch2 = _interopRequireDefault(_passwordMatch);

	var _updateProfile = __webpack_require__(131);

	var _updateProfile2 = _interopRequireDefault(_updateProfile);

	var _dialog = __webpack_require__(203);

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
/* 127 */
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
/* 128 */
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
/* 129 */
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
/* 130 */
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
/* 131 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var updateProfileCtrl = function updateProfileCtrl($stateParams, Auth, Toast, Storage) {
		'ngInject';

		_classCallCheck(this, updateProfileCtrl);

		this._$stateParams = $stateParams;
		this._Auth = Auth;
		this._Toast = Toast;
		this._Storage = Storage;
		this.userId = $stateParams.userId;
		this.user = this._Auth.getUser();
	};

	exports.default = updateProfileCtrl;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _streams = __webpack_require__(133);

	var _streams2 = _interopRequireDefault(_streams);

	var _streams3 = __webpack_require__(134);

	var _streams4 = _interopRequireDefault(_streams3);

	var _streamsList = __webpack_require__(135);

	var _streamsList2 = _interopRequireDefault(_streamsList);

	var _streamsSingle = __webpack_require__(136);

	var _streamsSingle2 = _interopRequireDefault(_streamsSingle);

	var _trendingStreams = __webpack_require__(137);

	var _trendingStreams2 = _interopRequireDefault(_trendingStreams);

	var _subscribedStreams = __webpack_require__(138);

	var _subscribedStreams2 = _interopRequireDefault(_subscribedStreams);

	var _streamsCreate = __webpack_require__(139);

	var _streamsCreate2 = _interopRequireDefault(_streamsCreate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var streamsModule = _angular2.default.module('streams', []);
	streamsModule.config(_streams2.default);
	streamsModule.service('Stream', _streams4.default);
	streamsModule.controller('StreamsListCtrl', _streamsList2.default);
	streamsModule.controller('StreamsSingleCtrl', _streamsSingle2.default);
	streamsModule.controller('TrendingStreamsCtrl', _trendingStreams2.default);
	streamsModule.controller('SubscribedStreamsCtrl', _subscribedStreams2.default);
	streamsModule.controller('StreamsCreateController', _streamsCreate2.default);

	exports.default = streamsModule;

/***/ },
/* 133 */
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
/* 134 */
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
/* 135 */
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

				this._Stream.get(options).success(function (response) {

					if (_this2.streamsSearch) {
						_this2.streams = [];
					}

					if (!options.append) {
						_this2.streams = response.res.records.concat(_this2.streams);
					} else {
						_this2.streams = _this2.streams.concat(response.res.records);
					}

					if (response.res.morePages == false) {
						_this2.noMoreStreams = true;
					}

					_this2.lastUpdated = Date.now();
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
				var _this3 = this;

				var streamsSearchTimeout;

				if (newValue !== oldValue) {
					this.streams = [];
				}

				this._$timeout.cancel(streamsSearchTimeout);

				streamsSearchTimeout = this._$timeout(function () {
					if (!newValue) {
						if (_this3.streamsSearchEnabled) {
							_this3.lastUpdated = 0;
							_this3.getStreams();
						}
					} else {
						_this3.getStreams();
					}

					_this3.streamsSearchEnabled = _this3.streamsSearch !== '';
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
/* 136 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var singleStreamCtrl = function () {
		function singleStreamCtrl(Auth, Stream, Thread, $stateParams, $mdDialog, $rootScope, $timeout) {
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
					console.log(response);

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
				var _this4 = this;

				var threadsSearchTimeout;

				if (newValue !== oldValue) {
					this.threads = [];
				}

				this._$timeout.cancel(threadsSearchTimeout);
				threadsSearchTimeout = this._$timeout(function () {
					if (!newValue) {
						if (_this4.threadsSearchEnabled) {
							_this4.lastUpdated = 0;
							_this4.getThreads();
						}
					} else {
						_this4.getThreads();
					}

					_this4.threadsSearchEnabled = _this4.threadsSearch !== '';
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
/* 137 */
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
/* 138 */
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
/* 139 */
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
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _threads = __webpack_require__(141);

	var _threads2 = _interopRequireDefault(_threads);

	var _threads3 = __webpack_require__(142);

	var _threads4 = _interopRequireDefault(_threads3);

	var _comments = __webpack_require__(143);

	var _comments2 = _interopRequireDefault(_comments);

	var _threadsSingle = __webpack_require__(144);

	var _threadsSingle2 = _interopRequireDefault(_threadsSingle);

	var _editThreadDialog = __webpack_require__(145);

	var _editThreadDialog2 = _interopRequireDefault(_editThreadDialog);

	var _deleteThreadDialog = __webpack_require__(146);

	var _deleteThreadDialog2 = _interopRequireDefault(_deleteThreadDialog);

	var _editComment = __webpack_require__(147);

	var _editComment2 = _interopRequireDefault(_editComment);

	var _deleteComment = __webpack_require__(148);

	var _deleteComment2 = _interopRequireDefault(_deleteComment);

	var _threadsCreate = __webpack_require__(149);

	var _threadsCreate2 = _interopRequireDefault(_threadsCreate);

	var _commentsCreate = __webpack_require__(150);

	var _commentsCreate2 = _interopRequireDefault(_commentsCreate);

	var _createAnywhere = __webpack_require__(205);

	var _createAnywhere2 = _interopRequireDefault(_createAnywhere);

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

	exports.default = threadsModule;

/***/ },
/* 141 */
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
/* 142 */
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

/***/ },
/* 143 */
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
/* 144 */
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
/* 145 */
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
/* 146 */
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
/* 147 */
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
/* 148 */
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
/* 149 */
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
/* 150 */
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
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _chats = __webpack_require__(152);

	var _chats2 = _interopRequireDefault(_chats);

	var _chats3 = __webpack_require__(153);

	var _chats4 = _interopRequireDefault(_chats3);

	var _chatsInbox = __webpack_require__(154);

	var _chatsInbox2 = _interopRequireDefault(_chatsInbox);

	var _chatsMessages = __webpack_require__(155);

	var _chatsMessages2 = _interopRequireDefault(_chatsMessages);

	var _chatsSaved = __webpack_require__(156);

	var _chatsSaved2 = _interopRequireDefault(_chatsSaved);

	var _chatsTrash = __webpack_require__(157);

	var _chatsTrash2 = _interopRequireDefault(_chatsTrash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var chatsModule = _angular2.default.module('chats', []);
	chatsModule.config(_chats4.default);
	chatsModule.service('Chat', _chats2.default);
	chatsModule.controller('ChatsInboxController', _chatsInbox2.default);
	chatsModule.controller('ChatsMessagesController', _chatsMessages2.default);
	chatsModule.controller("ChatsSavedController", _chatsSaved2.default);
	chatsModule.controller('ChatsTrashController', _chatsTrash2.default);
	exports.default = chatsModule;

/***/ },
/* 152 */
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
			value: function list() {
				return this._$http({
					url: '/chats/',
					method: 'GET'
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
			value: function getSaved(id) {
				return this._$http({
					url: '/chats/' + id + '/saved',
					method: 'GET'
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
			value: function getRemoved(id) {
				return this._$http({
					url: '/chats/' + id + '/removed',
					method: 'GET'
				});
			}
		}]);

		return chatsService;
	}();

	exports.default = chatsService;

/***/ },
/* 153 */
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
/* 154 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsInboxCtrl = function () {
		function chatsInboxCtrl(Chat) {
			_classCallCheck(this, chatsInboxCtrl);

			this._Chat = Chat;
			this.chats = [];
			this.getChats();
		}

		_createClass(chatsInboxCtrl, [{
			key: "getChats",
			value: function getChats() {
				var _this = this;

				this._Chat.list().then(function (response) {
					_this.chats = response.data.res.records;
					console.log(response);
				});
			}
		}]);

		return chatsInboxCtrl;
	}();

	exports.default = chatsInboxCtrl;

/***/ },
/* 155 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsMessagesCtrl = function () {
		function chatsMessagesCtrl(Auth, Chat, $state, $stateParams, $rootScope) {
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
/* 156 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ChatsSavedCtrl = function () {
		function ChatsSavedCtrl(Chat, Auth) {
			_classCallCheck(this, ChatsSavedCtrl);

			this._Chat = Chat;
			this._Auth = Auth;
			this.chats = [];
			this.currentUser = this._Auth.getUser()._id;
			this.getChats();
		}

		_createClass(ChatsSavedCtrl, [{
			key: "getChats",
			value: function getChats() {
				var _this = this;

				this._Chat.getSaved(this.currentUser).then(function (response) {
					_this.chats = response.data.res.records;
				});
			}
		}]);

		return ChatsSavedCtrl;
	}();

	exports.default = ChatsSavedCtrl;

/***/ },
/* 157 */
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

			this._Chat = Chat;
			this._Auth = Auth;
			this.currentUser = this._Auth.getUser()._id;
			this.getChats();
		}

		_createClass(chatsTrashCtrl, [{
			key: 'getChats',
			value: function getChats() {
				var _this = this;

				this._Chat.getRemoved(this.currentUser).then(function (response) {
					_this.chats = response.data.res.records;
				});
			}
		}]);

		return chatsTrashCtrl;
	}();

	exports.default = chatsTrashCtrl;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _users = __webpack_require__(159);

	var _users2 = _interopRequireDefault(_users);

	var _profile = __webpack_require__(160);

	var _profile2 = _interopRequireDefault(_profile);

	var _profile3 = __webpack_require__(161);

	var _profile4 = _interopRequireDefault(_profile3);

	var _profileThreads = __webpack_require__(162);

	var _profileThreads2 = _interopRequireDefault(_profileThreads);

	var _profileComments = __webpack_require__(163);

	var _profileComments2 = _interopRequireDefault(_profileComments);

	var _profileSaved = __webpack_require__(164);

	var _profileSaved2 = _interopRequireDefault(_profileSaved);

	var _profileActivity = __webpack_require__(165);

	var _profileActivity2 = _interopRequireDefault(_profileActivity);

	var _usersSearch = __webpack_require__(166);

	var _usersSearch2 = _interopRequireDefault(_usersSearch);

	var _profileMessage = __webpack_require__(167);

	var _profileMessage2 = _interopRequireDefault(_profileMessage);

	var _profileEdit = __webpack_require__(204);

	var _profileEdit2 = _interopRequireDefault(_profileEdit);

	var _profileReset = __webpack_require__(206);

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
/* 159 */
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
/* 160 */
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
/* 161 */
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
/* 162 */
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
/* 163 */
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
/* 164 */
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
/* 165 */
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
/* 166 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UsersSearchCtrl = function () {
		function UsersSearchCtrl(User, $location, $timeout) {
			'ngInject';

			_classCallCheck(this, UsersSearchCtrl);

			this._User = User;
			this._$location = $location;
			this._$timeout = $timeout;
			this.search = '';
		}

		_createClass(UsersSearchCtrl, [{
			key: 'doSearch',
			value: function doSearch(val) {
				this._User.search(val).then(function (response) {
					return response.data.res.items;
				});
			}
		}, {
			key: 'goToUser',
			value: function goToUser(item) {
				this._$location.url('/profile/' + item._id + '/overview');
			}
		}, {
			key: 'clearSearch',
			value: function clearSearch() {
				var _this = this;

				this._$timeout(function () {
					_this.search = '';
				}, 500);
			}
		}]);

		return UsersSearchCtrl;
	}();

	exports.default = UsersSearchCtrl;

/***/ },
/* 167 */
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
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(169);

	__webpack_require__(171);

	__webpack_require__(175);

	__webpack_require__(191);

	__webpack_require__(194);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['shared.components', 'auth.components', 'forum.components', 'profile.components', 'chats.components'];

	var componentModule = _angular2.default.module('app.components', requires);

	exports.default = componentModule;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _nav = __webpack_require__(170);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sharedComponents = _angular2.default.module('shared.components', []);
	sharedComponents.component('appNav', _nav2.default);

	exports.default = sharedComponents;

/***/ },
/* 170 */
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
			this.isLoggedIn = this._Auth.isLoggedIn();
			this.getUserInfo();

			if (this.isLoggedIn) {
				this.updateNotifications();
				this.updateChats();
			}

			this.notificationCount = 0;
			this.notifications = [];

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

			this._$rootScope;

			this.getStreams();
		}

		_createClass(navCtrl, [{
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

				this._User.markRead(this.user._id, this.notifications).then(function (response) {
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
					this._$location.url('profile/' + item.user._id + '/overview');
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
					console.log(response);
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
			key: 'updateChats',
			value: function updateChats() {
				var _this5 = this;

				this._Chat.findUnread(this.user._id).then(function (response) {
					_this5.chats = response.data.res.records, _this5.messageCount = response.data.res.unread;
				});
			}
		}, {
			key: 'doChatAction',
			value: function doChatAction(item) {
				var _this6 = this;

				this._Chat.markRead(item._id).then(function (response) {
					_this6.messageCount -= 1;
					angular.extend(item, response.data.res.record);
					_this6._$state.go("app.chats.inbox", { reload: true });
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
		}, {
			key: 'openUserMenu',
			value: function openUserMenu() {
				this._$sidenav('user-menu').toggle();
			}
		}, {
			key: 'getUserInfo',
			value: function getUserInfo() {
				this.user = this._Auth.getUser();
				console.log(this.user);
			}
		}, {
			key: 'getStreams',
			value: function getStreams(options) {
				var _this7 = this;

				options = options || {};

				if (this.isLoggedIn) {
					options.subscribed = true;

					this._Stream.get(options).then(function (response) {
						_this7.streams = response.data.res.records;
					});
				} else {
					options.unsubscribed = true;
					this._Stream.get(options).then(function (response) {
						_this7.streams = response.data.res.records;
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
					controllerAs: '$ctrl'
				});
			}
		}, {
			key: 'logout',
			value: function logout() {
				this._Storage.remove('user');
				this._Storage.remove('opinion-token');
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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _signup = __webpack_require__(172);

	var _signup2 = _interopRequireDefault(_signup);

	var _login = __webpack_require__(173);

	var _login2 = _interopRequireDefault(_login);

	var _profileUpdate = __webpack_require__(174);

	var _profileUpdate2 = _interopRequireDefault(_profileUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var authComponents = _angular2.default.module('auth.components', []);
	authComponents.component('signupForm', _signup2.default);
	authComponents.component('loginForm', _login2.default);
	authComponents.component('updateProfile', _profileUpdate2.default);

	exports.default = authComponents;

/***/ },
/* 172 */
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
		}

		_createClass(SignupFormCtrl, [{
			key: 'signup',
			value: function signup(isValid) {
				var _this = this;

				if (isValid) {
					this._Auth.signup(this.data).then(function (response) {
						_this._Toast.success('Welcome to Opinionated! ' + response.data.res.record.username);
						_this.postSignup(response.data.res.record, response.data.res.token);
						_this._$rootScope.$broadcast('signedUp');
					}, function (err) {
						_this._Toast.error('boo, but still yay');
					});
				} else {
					this._Toast.error('hmm, form issue!');
				}
			}
		}, {
			key: 'postSignup',
			value: function postSignup(user, token) {
				var serialized = angular.toJson(user);
				this._Storage.set('user', serialized);
				this._Storage.set('opinion-token', token);
				this._state.go('app.updateProfile', { userId: user._id });
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
/* 173 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginCtrl = function () {
		function LoginCtrl($state, $mdDialog, Auth, Toast, Storage, Websocket, $rootScope) {
			'ngInject';

			_classCallCheck(this, LoginCtrl);

			this._Auth = Auth;
			this._Toast = Toast;
			this._Storage = Storage;
			this._$state = $state;
			this._$dialog = $mdDialog;
			this._Websocket = Websocket;
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
							_this._$rootScope.$broadcast('loggedIn');
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
				this._Websocket.online(response.data.res.record._id);
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
/* 174 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var updateProfileCtrl = function () {
		function updateProfileCtrl(Auth, Toast, $state, $rootScope) {
			'ngInject';

			_classCallCheck(this, updateProfileCtrl);

			this._Auth = Auth;
			this._Toast = Toast;
			this._$state = $state;
			this._$rootScope = $rootScope;
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
						_this._$state.go("app.profile.overview", { userId: _this.user._id });
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
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(176);

	__webpack_require__(181);

	__webpack_require__(186);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['streams.components', 'threads.components', 'comments.components'];

	var forumComponents = _angular2.default.module('forum.components', requires);

	exports.default = forumComponents;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _streamsList = __webpack_require__(177);

	var _streamsList2 = _interopRequireDefault(_streamsList);

	var _streamsSingle = __webpack_require__(178);

	var _streamsSingle2 = _interopRequireDefault(_streamsSingle);

	var _streamCreate = __webpack_require__(179);

	var _streamCreate2 = _interopRequireDefault(_streamCreate);

	var _streamsTrending = __webpack_require__(180);

	var _streamsTrending2 = _interopRequireDefault(_streamsTrending);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var streamComponents = _angular2.default.module('streams.components', []);
	streamComponents.component('streamsList', _streamsList2.default);
	streamComponents.component('singleStream', _streamsSingle2.default);
	streamComponents.component('createStream', _streamCreate2.default);
	streamComponents.component('trendingStream', _streamsTrending2.default);

	exports.default = streamComponents;

/***/ },
/* 177 */
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
/* 178 */
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
/* 179 */
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
/* 180 */
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
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _threadsList = __webpack_require__(182);

	var _threadsList2 = _interopRequireDefault(_threadsList);

	var _threadsSingle = __webpack_require__(183);

	var _threadsSingle2 = _interopRequireDefault(_threadsSingle);

	var _threadsCreate = __webpack_require__(184);

	var _threadsCreate2 = _interopRequireDefault(_threadsCreate);

	var _editThread = __webpack_require__(185);

	var _editThread2 = _interopRequireDefault(_editThread);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var threadComponents = _angular2.default.module('threads.components', []);
	threadComponents.component('threadList', _threadsList2.default);
	threadComponents.component('singleThread', _threadsSingle2.default);
	threadComponents.component('createThread', _threadsCreate2.default);
	threadComponents.component('editThread', _editThread2.default);

	exports.default = threadComponents;

/***/ },
/* 182 */
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
		scope: {},
		bindings: {
			threads: '<'
		},
		controller: threadListController,
		templateUrl: './app/components/forum/threads/list/threads.list.component.html'
	};

	exports.default = threadsList;

/***/ },
/* 183 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SingleThreadCtrl = function () {
		function SingleThreadCtrl(Auth, Thread, $stateParams, $state, $mdDialog) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, SingleThreadCtrl);

			this._$stateParams = $stateParams;
			this.streamId = this._$stateParams.streamId;
			this._$state = $state;
			this._$dialog = $mdDialog;

			this._Thread = Thread;
			this._Auth = Auth;
			this._isLoggedIn = this._Auth.isLoggedIn();

			if (this._isLoggedIn) {
				this.currentUser = this._Auth.getUser()._id;
			}

			if (this._$state.current.name == 'app.singleStream') {
				this.thread.stream.moderators.forEach(function (moderator) {
					if (_this.currentUser == moderator) {
						_this.moderator = true;
					}
				});
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
				console.log(item);
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
		scope: {},
		bindings: {
			thread: '<'
		},
		controller: SingleThreadCtrl,
		templateUrl: './app/components/forum/threads/single/threads.single.component.html'
	};

	exports.default = singleThread;

/***/ },
/* 184 */
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
/* 185 */
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
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _commentsCreate = __webpack_require__(187);

	var _commentsCreate2 = _interopRequireDefault(_commentsCreate);

	var _commentsList = __webpack_require__(188);

	var _commentsList2 = _interopRequireDefault(_commentsList);

	var _commentsSingle = __webpack_require__(189);

	var _commentsSingle2 = _interopRequireDefault(_commentsSingle);

	var _editComment = __webpack_require__(190);

	var _editComment2 = _interopRequireDefault(_editComment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var commentComponents = _angular2.default.module('comments.components', []);
	commentComponents.component('createComment', _commentsCreate2.default);
	commentComponents.component('commentsList', _commentsList2.default);
	commentComponents.component('singleComment', _commentsSingle2.default);
	commentComponents.component('editComment', _editComment2.default);

	exports.default = commentComponents;

/***/ },
/* 187 */
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
/* 188 */
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
			comments: '<'
		},
		controller: commentsListCtrl,
		templateUrl: './app/components/forum/comments/list/comments.list.component.html'
	};

	exports.default = commmentsList;

/***/ },
/* 189 */
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

			this.getThread();
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
/* 190 */
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
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _profileHeader = __webpack_require__(192);

	var _profileHeader2 = _interopRequireDefault(_profileHeader);

	var _profileOverview = __webpack_require__(193);

	var _profileOverview2 = _interopRequireDefault(_profileOverview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var profileComponents = _angular2.default.module('profile.components', []);
	profileComponents.component('profileHeader', _profileHeader2.default);
	profileComponents.component('profileOverview', _profileOverview2.default);

	exports.default = profileComponents;

/***/ },
/* 192 */
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
					_this2._$rootScope.$broadcast('userFollowed');
					_this2.checkUserFollowing();
				});
			}
		}, {
			key: 'unfollow',
			value: function unfollow(item) {
				var _this3 = this;

				this._User.unfollow(item._id).then(function (response) {
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
/* 193 */
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
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _chatsList = __webpack_require__(195);

	var _chatsList2 = _interopRequireDefault(_chatsList);

	var _chatsSingle = __webpack_require__(196);

	var _chatsSingle2 = _interopRequireDefault(_chatsSingle);

	var _chatsMessages = __webpack_require__(197);

	var _chatsMessages2 = _interopRequireDefault(_chatsMessages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var chatComponents = _angular2.default.module('chats.components', []);
	chatComponents.component('chatsList', _chatsList2.default);
	chatComponents.component('singleChat', _chatsSingle2.default);
	chatComponents.component('chatMessages', _chatsMessages2.default);

	exports.default = chatComponents;

/***/ },
/* 195 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsListCtrl = function chatsListCtrl($rootScope, $state, Auth) {
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
/* 196 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var chatsSingleCtrl = function () {
		function chatsSingleCtrl(Chat, $rootScope, $location, $state, Auth) {
			_classCallCheck(this, chatsSingleCtrl);

			this._Chat = Chat;
			this._$rootScope = $rootScope;
			this._$location = $location;
			this._$state = $state;
			this._Auth = Auth;
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
/* 197 */
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

			if (this._$state.current.name == 'app.chats.inbox.messages' || this._$state.current.name == 'app.chats.saved.messages' || this._$state.current.name == 'app.chats.trash.messages') {
				if (document.documentElement.clientWidth < 1300) {
					this._$rootScope.$broadcast('hideChats');
				}
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
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _auth = __webpack_require__(199);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function appConfig($stateProvider, $urlRouterProvider, $httpProvider) {
		'ngInject';

		$httpProvider.interceptors.push(_auth2.default);

		$stateProvider.state('app', {
			abstract: true,
			templateUrl: './app/pages/app-layout.html'
		});

		$urlRouterProvider.otherwise('/');
	}

	exports.default = appConfig;

/***/ },
/* 199 */
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
/* 200 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function runAway($rootScope) {
		var socket = io.connect('http://localhost:8000');

		socket.on('connect', function () {
			console.log('yay');
		});
	}

	exports.default = runAway;

/***/ },
/* 201 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function websockets() {
		var obj = {
			conn: {},
			connect: function connect() {
				var $this = this;
				var socket = new io.connect('http://localhost:8000');
				socket.on('connect', function () {
					console.log('connected');
				});

				socket.on('disconnect', function () {
					$this.connect();
				});

				this.conn = socket;
			},

			reconnect: function reconnect() {
				this.conn.close();
				this.connect();
			},

			close: function close() {
				this.conn.close();
			},

			online: function online(id) {
				this.conn.emit('online', { userId: id });
			}
		};

		obj.connect();
		return obj;
	}

	exports.default = websockets;

/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var appController = function appController($rootScope, $mdDialog) {
		'ngInject';

		_classCallCheck(this, appController);

		this._$rootScope = $rootScope;
		this._$dialog = $mdDialog;
	};

	exports.default = appController;

/***/ },
/* 203 */
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
/* 204 */
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
/* 205 */
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
/* 206 */
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

/***/ }
]);