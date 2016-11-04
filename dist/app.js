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

	__webpack_require__(121);

	__webpack_require__(138);

	var _app = __webpack_require__(157);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(159);

	var _app4 = _interopRequireDefault(_app3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = [_angularUiRouter2.default, 'ngMaterial', 'ngAnimate', 'angularMoment', 'app.config', 'app.pages', 'app.components'];

	window.app = _angular2.default.module('app', requires);

	_angular2.default.module('app').config(_app2.default);
	//angular.module('app').run(appRun);
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configModule = _angular2.default.module('app.config', []);
	configModule.service('Storage', _storage2.default);
	configModule.service('Toast', _toasts2.default);

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(122);

	__webpack_require__(125);

	__webpack_require__(128);

	__webpack_require__(133);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['home', 'auth', 'streams', 'threads'];

	var pagesModule = _angular2.default.module('app.pages', requires);

	exports.default = pagesModule;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _home = __webpack_require__(123);

	var _home2 = _interopRequireDefault(_home);

	var _home3 = __webpack_require__(124);

	var _home4 = _interopRequireDefault(_home3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var homeModule = _angular2.default.module('home', []);
	homeModule.config(_home2.default);
	homeModule.controller('HomeCtrl', _home4.default);

	exports.default = homeModule;

/***/ },
/* 123 */
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
/* 124 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeCtrl = function HomeCtrl() {
		_classCallCheck(this, HomeCtrl);
	};

	exports.default = HomeCtrl;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _auth = __webpack_require__(126);

	var _auth2 = _interopRequireDefault(_auth);

	var _auth3 = __webpack_require__(127);

	var _auth4 = _interopRequireDefault(_auth3);

	var _passwordReset = __webpack_require__(160);

	var _passwordReset2 = _interopRequireDefault(_passwordReset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var authModule = _angular2.default.module('auth', []);
	authModule.config(_auth2.default);
	authModule.service('Auth', _auth4.default);
	authModule.controller('PasswordResetController', _passwordReset2.default);

	exports.default = authModule;

/***/ },
/* 126 */
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
	}

	exports.default = authConfig;

/***/ },
/* 127 */
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
				}).then(function (response) {
					console.log(response);
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _streams = __webpack_require__(129);

	var _streams2 = _interopRequireDefault(_streams);

	var _streams3 = __webpack_require__(130);

	var _streams4 = _interopRequireDefault(_streams3);

	var _streamsList = __webpack_require__(131);

	var _streamsList2 = _interopRequireDefault(_streamsList);

	var _streamsSingle = __webpack_require__(132);

	var _streamsSingle2 = _interopRequireDefault(_streamsSingle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var streamsModule = _angular2.default.module('streams', []);
	streamsModule.config(_streams2.default);
	streamsModule.service('Stream', _streams4.default);
	streamsModule.controller('StreamsListCtrl', _streamsList2.default);
	streamsModule.controller('StreamsSingleCtrl', _streamsSingle2.default);

	exports.default = streamsModule;

/***/ },
/* 129 */
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
	}

	exports.default = streamsConfig;

/***/ },
/* 130 */
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
/* 131 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StreamsListCtrl = function () {
		function StreamsListCtrl(Stream, $timeout, $rootScope) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, StreamsListCtrl);

			this._Stream = Stream;
			this._$timeout = $timeout;
			this._$rootScope = $rootScope;
			this.streams = [];
			this.streamsSearch = '';
			this.lastUpdated = 0;
			this.getStreams();
			this._$rootScope.$on('streamCreated', function () {
				_this.showCreate = !_this.showCreate;
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

				this._Stream.get(options).success(function (response) {

					if (_this2.streamsSearch) {
						_this2.streams = [];
					}

					if (!options.append) {
						_this2.streams = response.res.records.concat(_this2.streams);
					} else {
						_this2.streams = _this2.streams.concat(response.res.records);
					}

					console.log(_this2.streams);
					_this2.lastUpdated = Date.now();
				});
			}
		}, {
			key: 'search',
			value: function search(newValue, oldValue) {
				var _this3 = this;

				var streamsSearchTimeout;

				if (!newValue !== oldValue) {
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
		}]);

		return StreamsListCtrl;
	}();

	exports.default = StreamsListCtrl;

/***/ },
/* 132 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var singleStreamCtrl = function () {
		function singleStreamCtrl(Stream, Thread, $stateParams, $rootScope) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, singleStreamCtrl);

			this._Stream = Stream;
			this._Thread = Thread;
			this._$rootScope = $rootScope;
			this.streamId = $stateParams.streamId;
			this.threads = [];
			this.threadsSearch = '';
			this.lastUpdated = 0;
			this.getStream();
			this.getThreads();

			this._$rootScope.$on('threadCreated', function () {
				_this.showCreate = !_this.showCreate;
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
				});
			}
		}, {
			key: 'getThreads',
			value: function getThreads(options) {
				var _this3 = this;

				options = options || {};
				options.filter = this.threadsSearch;
				options.timestamp = this.lastUpdated;

				this._Thread.get(this.streamId, options).then(function (response) {
					if (_this3.threadsSearch) {
						_this3.threads = [];
					}

					if (!options.append) {
						_this3.threads = response.data.res.records.concat(_this3.threads);
					} else {
						_this3.threads = _this3.threads.concat(response.data.res.records);
					}

					_this3.lastUpdated = Date.now();
				});
			}
		}]);

		return singleStreamCtrl;
	}();

	exports.default = singleStreamCtrl;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _threads = __webpack_require__(134);

	var _threads2 = _interopRequireDefault(_threads);

	var _threads3 = __webpack_require__(135);

	var _threads4 = _interopRequireDefault(_threads3);

	var _comments = __webpack_require__(136);

	var _comments2 = _interopRequireDefault(_comments);

	var _threadsSingle = __webpack_require__(137);

	var _threadsSingle2 = _interopRequireDefault(_threadsSingle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var threadsModule = _angular2.default.module('threads', []);
	threadsModule.config(_threads2.default);
	threadsModule.service('Thread', _threads4.default);
	threadsModule.service('Comment', _comments2.default);
	threadsModule.controller('threadsSingleCtrl', _threadsSingle2.default);

	exports.default = threadsModule;

/***/ },
/* 134 */
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
/* 135 */
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
						filter: options.filter
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
		}]);

		return threadService;
	}();

	exports.default = threadService;

/***/ },
/* 136 */
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
			key: 'get',
			value: function get(id, options) {
				return this._$http({
					url: '/comments/' + id,
					method: 'GET'
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
		}]);

		return commentsService;
	}();

	exports.default = commentsService;

/***/ },
/* 137 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var threadsSingleCtrl = function () {
		function threadsSingleCtrl(Thread, Comment, $stateParams, $rootScope) {
			'ngInject';

			var _this = this;

			_classCallCheck(this, threadsSingleCtrl);

			this._Thread = Thread;
			this._Comment = Comment;
			this._$rootScope = $rootScope;
			this.threadId = $stateParams.threadId;
			this.streamId = $stateParams.streamId;
			this.comments = [];
			this.getThread();
			this.getComments();

			this._$rootScope.$on('commentCreated', function () {
				_this.showCreate = !_this.showCreate;
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

				this._Comment.get(this.threadId, options).then(function (response) {
					console.log(response);

					if (!options.append) {
						_this3.comments = response.data.res.records.concat(_this3.comments);
					} else {
						_this3.comments = _this3.comments.concat(response.data.res.records);
					}
				});
			}
		}]);

		return threadsSingleCtrl;
	}();

	exports.default = threadsSingleCtrl;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(139);

	__webpack_require__(141);

	__webpack_require__(144);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['shared.components', 'auth.components', 'forum.components'];

	var componentModule = _angular2.default.module('app.components', requires);

	exports.default = componentModule;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _nav = __webpack_require__(140);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sharedComponents = _angular2.default.module('shared.components', []);
	sharedComponents.component('appNav', _nav2.default);

	exports.default = sharedComponents;

/***/ },
/* 140 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var navCtrl = function () {
		function navCtrl(Auth, $mdSidenav) {
			'ngInject';

			_classCallCheck(this, navCtrl);

			this._$sidenav = $mdSidenav;
			this._Auth = Auth;
			this.isLoggedIn = this._Auth.isLoggedIn();
			this.getUserInfo();
		}

		_createClass(navCtrl, [{
			key: 'openUserMenu',
			value: function openUserMenu() {
				this._$sidenav('user-menu').toggle();
			}
		}, {
			key: 'getUserInfo',
			value: function getUserInfo() {
				this.user = this._Auth.getUser();
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _signup = __webpack_require__(142);

	var _signup2 = _interopRequireDefault(_signup);

	var _login = __webpack_require__(143);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var authComponents = _angular2.default.module('auth.components', []);
	authComponents.component('signupForm', _signup2.default);
	authComponents.component('loginForm', _login2.default);

	exports.default = authComponents;

/***/ },
/* 142 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SignupFormCtrl = function () {
		function SignupFormCtrl($state, Auth, Toast) {
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
			this._Toaster = Toast;
		}

		_createClass(SignupFormCtrl, [{
			key: 'signup',
			value: function signup(isValid) {
				var _this = this;

				if (isValid) {
					this._Auth.signup(this.data).then(function (response) {
						_this._Toaster.success('Welcome to Opinionated!');
						_this._state.go('app.login');
					}, function (err) {
						_this._Toast.error('boo, but still yay');
					});
				} else {
					this._Toast('hmm, form issue!');
				}
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
/* 143 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginCtrl = function () {
		function LoginCtrl($state, $mdDialog, Auth, Toast, Storage) {
			'ngInject';

			_classCallCheck(this, LoginCtrl);

			this._Auth = Auth;
			this._Toast = Toast;
			this._Storage = Storage;
			this._$state = $state;
			this._$dialog = $mdDialog;
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
				this._$state.go('app.home');
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(145);

	__webpack_require__(149);

	__webpack_require__(153);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['streams.components', 'threads.components', 'comments.components'];

	var forumComponents = _angular2.default.module('forum.components', requires);

	exports.default = forumComponents;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _streamsList = __webpack_require__(146);

	var _streamsList2 = _interopRequireDefault(_streamsList);

	var _streamsSingle = __webpack_require__(147);

	var _streamsSingle2 = _interopRequireDefault(_streamsSingle);

	var _streamCreate = __webpack_require__(148);

	var _streamCreate2 = _interopRequireDefault(_streamCreate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var streamComponents = _angular2.default.module('streams.components', []);
	streamComponents.component('streamsList', _streamsList2.default);
	streamComponents.component('singleStream', _streamsSingle2.default);
	streamComponents.component('createStream', _streamCreate2.default);

	exports.default = streamComponents;

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListStreamCtrl = function ListStreamCtrl() {
		_classCallCheck(this, ListStreamCtrl);
	};

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
/* 147 */
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
/* 148 */
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
						_this._Toast.success('You just created a Stream: ');
						_this._$rootScope.$broadcast('streamCreated');
					});
				} else {
					this._Toast('Hmm... Your form isn\'t valid');
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
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _threadsList = __webpack_require__(150);

	var _threadsList2 = _interopRequireDefault(_threadsList);

	var _threadsSingle = __webpack_require__(151);

	var _threadsSingle2 = _interopRequireDefault(_threadsSingle);

	var _threadsCreate = __webpack_require__(152);

	var _threadsCreate2 = _interopRequireDefault(_threadsCreate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var threadComponents = _angular2.default.module('threads.components', []);
	threadComponents.component('threadList', _threadsList2.default);
	threadComponents.component('singleThread', _threadsSingle2.default);
	threadComponents.component('createThread', _threadsCreate2.default);

	exports.default = threadComponents;

/***/ },
/* 150 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var threadListController = function threadListController($stateParams) {
		_classCallCheck(this, threadListController);

		this.streamId = $stateParams.streamId;
	};

	var threadsList = {
		scope: {},
		bindings: {
			threads: '='
		},
		controller: threadListController,
		templateUrl: './app/components/forum/threads/list/threads.list.component.html'
	};

	exports.default = threadsList;

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SingleThreadCtrl = function () {
		function SingleThreadCtrl(Thread) {
			'ngInject';

			_classCallCheck(this, SingleThreadCtrl);

			this._Thread = Thread;
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
		}]);

		return SingleThreadCtrl;
	}();

	var singleThread = {
		scope: {},
		bindings: {
			thread: '='
		},
		controller: SingleThreadCtrl,
		templateUrl: './app/components/forum/threads/single/threads.single.component.html'
	};

	exports.default = singleThread;

/***/ },
/* 152 */
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

			this.data = {
				title: '',
				content: '',
				stream: ''
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
						_this._Toast.success('You have just posted a new thread');
						_this._$rootScope.$broadcast('threadCreated');
					});
				} else {
					this._Toast.error('Hmm.. your form is not valid');
				}
			}
		}]);

		return threadCreateCtrl;
	}();

	var createThread = {
		scope: {},
		controller: threadCreateCtrl,
		templateUrl: './app/components/forum/threads/create/threads.create.component.html'
	};

	exports.default = createThread;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _commentsCreate = __webpack_require__(154);

	var _commentsCreate2 = _interopRequireDefault(_commentsCreate);

	var _commentsList = __webpack_require__(155);

	var _commentsList2 = _interopRequireDefault(_commentsList);

	var _commentsSingle = __webpack_require__(156);

	var _commentsSingle2 = _interopRequireDefault(_commentsSingle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var commentComponents = _angular2.default.module('comments.components', []);
	commentComponents.component('createComment', _commentsCreate2.default);
	commentComponents.component('commentsList', _commentsList2.default);
	commentComponents.component('singleComment', _commentsSingle2.default);

	exports.default = commentComponents;

/***/ },
/* 154 */
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
/* 155 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var commentsListCtrl = function commentsListCtrl() {
		'ngInject';

		_classCallCheck(this, commentsListCtrl);
	};

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
/* 156 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var commentsSingleCtrl = function () {
		function commentsSingleCtrl(Comment) {
			'ngInject';

			_classCallCheck(this, commentsSingleCtrl);

			this._Comment = Comment;
		}

		_createClass(commentsSingleCtrl, [{
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
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _auth = __webpack_require__(158);

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
/* 158 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function authInterceptor(Storage) {
		'ngInject';

		return {
			request: function request(config) {
				config.headers.Authorization = "Bearer " + Storage.get('opinion-token');
				return config;
			},

			responseError: function responseError(response) {
				if (response.status == '401' || response.status == '403') {
					Storage.remove('opinion-token');
					$state.go('app.home');
				}

				if (response.status == '404') {
					$state.go('app.home');
				}
			}
		};
	}

	exports.default = authInterceptor;

/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function runAway($rootScope, $anchorScroll) {
		'ngInject';

		$rootScope.$on('$stateChangeStart', function () {
			$anchorScroll('nav');
		});
	}

	exports.default = runAway;

/***/ },
/* 160 */
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
						_this2.close();
					} else {
						_this2._Toast.error(response.data.res.error);
					}
				});
			}
		}]);

		return passwordReset;
	}();

	exports.default = passwordReset;

/***/ }
]);