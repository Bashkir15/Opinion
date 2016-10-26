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

	__webpack_require__(120);

	__webpack_require__(138);

	var _app = __webpack_require__(151);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = [_angularUiRouter2.default, 'ngMaterial', 'angularMoment', 'app.config', 'app.pages', 'app.components'];

	window.app = _angular2.default.module('app', requires);

	_angular2.default.module('app').config(_app2.default);
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

	var _jwtService = __webpack_require__(119);

	var _jwtService2 = _interopRequireDefault(_jwtService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configModule = _angular2.default.module('app.config', []);
	configModule.service('Storage', _jwtService2.default);

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
			_classCallCheck(this, Storage);

			this.title = 'localStorage';
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(121);

	__webpack_require__(124);

	__webpack_require__(129);

	__webpack_require__(135);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['home', 'auth', 'streams', 'threads'];

	var pagesModule = _angular2.default.module("app.pages", requires);

	exports.default = pagesModule;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _home = __webpack_require__(122);

	var _home2 = _interopRequireDefault(_home);

	var _home3 = __webpack_require__(123);

	var _home4 = _interopRequireDefault(_home3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var homeModule = _angular2.default.module('home', []);
	homeModule.config(_home2.default);
	homeModule.controller('HomeCtrl', _home4.default);

	exports.default = homeModule;

/***/ },
/* 122 */
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
/* 123 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeCtrl = function HomeCtrl() {
		_classCallCheck(this, HomeCtrl);

		this.title = 'home';
	};

	exports.default = HomeCtrl;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _auth = __webpack_require__(125);

	var _auth2 = _interopRequireDefault(_auth);

	var _auth3 = __webpack_require__(126);

	var _auth4 = _interopRequireDefault(_auth3);

	var _signup = __webpack_require__(127);

	var _signup2 = _interopRequireDefault(_signup);

	var _login = __webpack_require__(128);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var authModule = _angular2.default.module('auth', []);
	authModule.config(_auth2.default);
	authModule.service('authService', _auth4.default);
	authModule.controller('signupCtrl', _signup2.default);
	authModule.controller('loginCtrl', _login2.default);

	exports.default = authModule;

/***/ },
/* 125 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function authConfig($stateProvider, $urlRouterProvider) {
		'ngInject';

		$stateProvider.state('app.auth', {
			abstract: true,
			templateUrl: './app/pages/auth/auth.html'
		});

		$stateProvider.state('app.auth.signup', {
			url: '/signup',
			controller: 'signupCtrl',
			controllerAs: '$ctrl',
			templateUrl: './app/pages/auth/signup/signup.html'
		});

		$stateProvider.state('app.auth.login', {
			url: '/login',
			controller: 'loginCtrl',
			controllerAs: '$ctrl',
			templateUrl: './app/pages/auth/login/login.html'
		});
	}

	exports.default = authConfig;

/***/ },
/* 126 */
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
				var _this = this;

				return this._$http({
					url: '/users/authenticate',
					method: 'POST',
					data: credentials
				}).then(function (response) {
					var user = response.data.res.record;
					var serializedUser = angular.toJson(user);
					_this._Storage.set('user', serializedUser);
					_this._Storage.set('opinion-token', response.data.res.token);
				});
			}
		}, {
			key: 'test',
			value: function test() {
				return this._$http({
					url: '/users',
					method: 'GET'
				}).then(function (response) {
					console.log(response.data.res.stuff);
				});
			}
		}]);

		return Auth;
	}();

	exports.default = Auth;

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var signupCtrl = function signupCtrl() {
		_classCallCheck(this, signupCtrl);

		this.title = 'signup';
	};

	exports.default = signupCtrl;

/***/ },
/* 128 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var loginCtrl = function loginCtrl() {
		_classCallCheck(this, loginCtrl);

		this.title = 'login';
	};

	exports.default = loginCtrl;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _streams = __webpack_require__(130);

	var _streams2 = _interopRequireDefault(_streams);

	var _streams3 = __webpack_require__(131);

	var _streams4 = _interopRequireDefault(_streams3);

	var _streamCreate = __webpack_require__(132);

	var _streamCreate2 = _interopRequireDefault(_streamCreate);

	var _streamList = __webpack_require__(133);

	var _streamList2 = _interopRequireDefault(_streamList);

	var _streamsSingle = __webpack_require__(134);

	var _streamsSingle2 = _interopRequireDefault(_streamsSingle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var streamsModule = _angular2.default.module('streams', []);
	streamsModule.config(_streams2.default);
	streamsModule.service('streamService', _streams4.default);
	streamsModule.controller('StreamCreateController', _streamCreate2.default);
	streamsModule.controller('StreamListController', _streamList2.default);
	streamsModule.controller('StreamSingleController', _streamsSingle2.default);

	exports.default = streamsModule;

/***/ },
/* 130 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function streamConfig($stateProvider) {
		'ngInject';

		$stateProvider.state('app.streamsCreate', {
			url: '/create-stream',
			controller: 'StreamCreateController',
			controllerAs: '$ctrl',
			templateUrl: './app/pages/streams/create/create.html'
		});

		$stateProvider.state('app.streamsList', {
			url: '/streams',
			controller: 'StreamListController',
			controllerAs: '$ctrl',
			templateUrl: './app/pages/streams/list/list.html'
		});

		$stateProvider.state('app.singleStream', {
			url: '/streams/:streamId',
			controller: 'StreamSingleController',
			controllerAs: '$ctrl',
			templateUrl: './app/pages/streams/single/single.html'
		});
	}

	exports.default = streamConfig;

/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Stream = function () {
		function Stream($http) {
			'ngInject';

			_classCallCheck(this, Stream);

			this._$http = $http;
		}

		_createClass(Stream, [{
			key: 'create',
			value: function create(credentials) {
				return this._$http({
					url: '/streams',
					method: 'POST',
					data: credentials
				}).then(function (response) {
					console.log(response);
				});
			}
		}, {
			key: 'get',
			value: function get() {
				return this._$http({
					url: '/streams',
					methods: 'GET'
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
		}]);

		return Stream;
	}();

	exports.default = Stream;

/***/ },
/* 132 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StreamCtrl = function StreamCtrl() {
		_classCallCheck(this, StreamCtrl);

		this.title = 'create a stream';
	};

	exports.default = StreamCtrl;

/***/ },
/* 133 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StreamListCtrl = function () {
		function StreamListCtrl(streamService) {
			'ngInject';

			_classCallCheck(this, StreamListCtrl);

			this._Stream = streamService;
			this.getStreams();
		}

		_createClass(StreamListCtrl, [{
			key: 'getStreams',
			value: function getStreams() {
				var _this = this;

				this._Stream.get().success(function (response) {
					_this.streams = response.res.records;
				});
			}
		}]);

		return StreamListCtrl;
	}();

	exports.default = StreamListCtrl;

/***/ },
/* 134 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var streamSingleCtrl = function () {
		function streamSingleCtrl(streamService, threadService, $state, $stateParams, $mdSidenav) {
			_classCallCheck(this, streamSingleCtrl);

			this._streamService = streamService;
			this._Threadservice = threadService;
			this.streamId = $stateParams.streamId;
			this._$sidenav = $mdSidenav;
			this.getStream();
			this.getThreads();
		}

		_createClass(streamSingleCtrl, [{
			key: 'getStream',
			value: function getStream() {
				var _this = this;

				this._streamService.single(this.streamId).then(function (response) {
					console.log(response);
					_this.stream = response.data.res.record;
				});
			}
		}, {
			key: 'getThreads',
			value: function getThreads() {
				var _this2 = this;

				this._Threadservice.get(this.streamId).then(function (response) {
					_this2.threads = response.data.res.records;
				});
			}
		}, {
			key: 'openCreate',
			value: function openCreate() {
				this._$sidenav('create-thread').toggle();
			}
		}]);

		return streamSingleCtrl;
	}();

	exports.default = streamSingleCtrl;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _threads = __webpack_require__(136);

	var _threads2 = _interopRequireDefault(_threads);

	var _thread = __webpack_require__(137);

	var _thread2 = _interopRequireDefault(_thread);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var threadsModule = _angular2.default.module('threads', []);
	threadsModule.config(_threads2.default);
	threadsModule.service('threadService', _thread2.default);

	exports.default = threadsModule;

/***/ },
/* 136 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function threadConfig($stateProvider) {
		'ngInject';

		$stateProvider.state('app.createThread', {
			url: '/create-thread',
			templateUrl: './app/pages/threads/create/create.html'
		});
	}

	exports.default = threadConfig;

/***/ },
/* 137 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var threadService = function () {
		function threadService($http) {
			_classCallCheck(this, threadService);

			this._$http = $http;
		}

		_createClass(threadService, [{
			key: 'create',
			value: function create(credentials) {
				return this._$http({
					url: '/threads',
					method: 'POST',
					data: credentials
				}).then(function (response) {
					console.log(response);
				});
			}
		}, {
			key: 'get',
			value: function get(id) {
				return this._$http({
					url: '/threads/' + id + '/threads',
					method: 'GET'
				});
			}
		}]);

		return threadService;
	}();

	exports.default = threadService;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _nav = __webpack_require__(139);

	var _nav2 = _interopRequireDefault(_nav);

	__webpack_require__(140);

	__webpack_require__(143);

	__webpack_require__(147);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requires = ['auth.components', 'stream.components', 'thread.components'];

	var componentModule = _angular2.default.module('app.components', requires);
	componentModule.component('appNav', _nav2.default);

	exports.default = componentModule;

/***/ },
/* 139 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var navCtrl = function navCtrl() {
		_classCallCheck(this, navCtrl);

		this.name = 'nav';
	};

	var appNav = {
		controller: navCtrl,
		templateUrl: './app/components/nav/nav.html'
	};

	exports.default = appNav;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _login = __webpack_require__(141);

	var _login2 = _interopRequireDefault(_login);

	var _signup = __webpack_require__(142);

	var _signup2 = _interopRequireDefault(_signup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var authComponents = _angular2.default.module('auth.components', []);
	authComponents.component('signupForm', _signup2.default);
	authComponents.component('loginForm', _login2.default);

	exports.default = authComponents;

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginFormCtrl = function () {
		function LoginFormCtrl(authService, Storage) {
			'ngInject';

			_classCallCheck(this, LoginFormCtrl);

			this.data = {
				email: '',
				password: ''
			};

			this._Storage = Storage;
			this._Auth = authService;
		}

		_createClass(LoginFormCtrl, [{
			key: 'login',
			value: function login(isValid) {
				if (isValid) {
					this._Auth.login(this.data).then(function (response) {
						alert('yay');
					}, function (err) {
						alert('boo, but still yay');
					});
				} else {
					alert('hmm, form issue!');
				}
			}
		}, {
			key: 'tester',
			value: function tester() {
				this._Auth.test().then(function (response) {
					alert('meow');
				}, function (err) {
					alert('blah');
				});
			}
		}]);

		return LoginFormCtrl;
	}();

	var loginForm = {
		scope: {},
		controller: LoginFormCtrl,
		templateUrl: './app/components/auth/login/login.component.html'
	};

	exports.default = loginForm;

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
		function SignupFormCtrl($state, authService) {
			'ngInject';

			_classCallCheck(this, SignupFormCtrl);

			this.data = {
				name: '',
				username: '',
				email: '',
				password: ''
			};

			this._state = $state;
			this._Auth = authService;
		}

		_createClass(SignupFormCtrl, [{
			key: 'signup',
			value: function signup(isValid) {
				var _this = this;

				if (isValid) {
					this._Auth.signup(this.data).then(function (response) {
						_this._state.go('app.auth.login');
					}, function (err) {
						alert('boo, but still yay');
					});
				} else {
					alert('hmm, form issue!');
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _streamCreate = __webpack_require__(144);

	var _streamCreate2 = _interopRequireDefault(_streamCreate);

	var _streamsList = __webpack_require__(145);

	var _streamsList2 = _interopRequireDefault(_streamsList);

	var _streamSingle = __webpack_require__(146);

	var _streamSingle2 = _interopRequireDefault(_streamSingle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var streamComponents = _angular2.default.module('stream.components', []);
	streamComponents.component('createStream', _streamCreate2.default);
	streamComponents.component('listStream', _streamsList2.default);
	streamComponents.component('singleStream', _streamSingle2.default);

	exports.default = streamComponents;

/***/ },
/* 144 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateStreamCtrl = function () {
		function CreateStreamCtrl(streamService) {
			'ngInject';

			_classCallCheck(this, CreateStreamCtrl);

			this.data = {
				name: '',
				description: ''
			};

			this._Stream = streamService;
		}

		_createClass(CreateStreamCtrl, [{
			key: 'create',
			value: function create(isValid) {
				if (isValid) {
					this._Stream.create(this.data).then(function (response) {
						alert('yay');
					}, function (err) {
						alert('boo');
					});
				}
			}
		}]);

		return CreateStreamCtrl;
	}();

	var createStream = {
		scope: {},
		controller: CreateStreamCtrl,
		templateUrl: './app/components/streams/create/create.stream.html'
	};

	exports.default = createStream;

/***/ },
/* 145 */
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
		templateUrl: './app/components/streams/list/streams.list.html'
	};

	exports.default = listStream;

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var singleStreamCtrl = function singleStreamCtrl() {
		_classCallCheck(this, singleStreamCtrl);
	};

	var singleStream = {
		scope: {},
		bindings: {
			stream: '='
		},
		controller: singleStreamCtrl,
		templateUrl: './app/components/streams/single/single.html'
	};

	exports.default = singleStream;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _threadsList = __webpack_require__(148);

	var _threadsList2 = _interopRequireDefault(_threadsList);

	var _threadsCreate = __webpack_require__(149);

	var _threadsCreate2 = _interopRequireDefault(_threadsCreate);

	var _threadSingle = __webpack_require__(150);

	var _threadSingle2 = _interopRequireDefault(_threadSingle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var threadComponent = _angular2.default.module('thread.components', []);
	threadComponent.component('threadList', _threadsList2.default);
	threadComponent.component('threadCreate', _threadsCreate2.default);
	threadComponent.component('singleThread', _threadSingle2.default);

	exports.default = threadComponent;

/***/ },
/* 148 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var threadListController = function threadListController(threadService, $stateParams) {
		_classCallCheck(this, threadListController);

		this._Thread = threadService;
		this.streamId = $stateParams.streamId;
	};

	var threadsList = {
		scope: {},
		bindings: {
			threads: '='
		},
		controller: threadListController,
		templateUrl: './app/components/threads/list/list.html'
	};

	exports.default = threadsList;

/***/ },
/* 149 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateThreadController = function () {
		function CreateThreadController(threadService, $mdToast, $stateParams) {
			'ngInject';

			_classCallCheck(this, CreateThreadController);

			this._Thread = threadService;
			this._$toast = $mdToast;
			this.data = {
				title: '',
				content: '',
				stream: $stateParams.streamId
			};
		}

		_createClass(CreateThreadController, [{
			key: 'create',
			value: function create(isValid) {
				if (isValid) {
					this._Thread.create(this.data).then(function (response) {
						alert('yay');
					}, function (err) {
						alert('awww');
					});
				}
			}
		}]);

		return CreateThreadController;
	}();

	var createThread = {
		scope: {},
		controller: CreateThreadController,
		templateUrl: './app/components/threads/create/create.html'
	};

	exports.default = createThread;

/***/ },
/* 150 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SingleThreadCtrl = function SingleThreadCtrl() {
		_classCallCheck(this, SingleThreadCtrl);
	};

	var singleThread = {
		scope: {},
		bindings: {
			thread: '='
		},
		controller: SingleThreadCtrl,
		templateUrl: './app/components/threads/single/single.html'
	};

	exports.default = singleThread;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _auth = __webpack_require__(152);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function appConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
		'ngInject';

		$httpProvider.interceptors.push(_auth2.default);
		//$locationProvider.html5Mode(true);


		$stateProvider.state('app', {
			abstract: true,
			templateUrl: './app/pages/app-layout.html'
		});

		$urlRouterProvider.otherwise("/");
	}

	exports.default = appConfig;

/***/ },
/* 152 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function authInterceptor($window, Storage) {
		'ngInject';

		return {
			request: function request(config) {
				config.headers.Authorization = 'Bearer ' + Storage.get('opinion-token');
				return config;
			},

			responseError: function responseError(response) {
				if (response.status == '401' || response.status == '403') {
					Storage.remove('opinion-token');
					$state.go('app.home');
					alert('unauthorized');
				}

				if (response.status == '404') {
					$state.go('app.home');
					alert('page not found');
				}
			}
		};
	}

	exports.default = authInterceptor;

/***/ }
]);