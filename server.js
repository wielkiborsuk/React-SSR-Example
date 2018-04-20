/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = exports.Container = exports.SearchResults = undefined;

var _SearchResults = __webpack_require__(9);

var _SearchResults2 = _interopRequireDefault(_SearchResults);

var _Container = __webpack_require__(11);

var _Container2 = _interopRequireDefault(_Container);

var _Header = __webpack_require__(12);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SearchResults = _SearchResults2.default;
exports.Container = _Container2.default;
exports.Header = _Header2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(5);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(6);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

__webpack_require__(7);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

var _lib = __webpack_require__(13);

var _constants = __webpack_require__(16);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.use(_express2.default.static('dist'));

app.get('/', function (req, res, next) {
    var APP_TITLE = constants.APP_TITLE,
        BUNDLE_PATH = constants.BUNDLE_PATH,
        DEFAULT_LOCATION = constants.DEFAULT_LOCATION;

    var sheet = new _styledComponents.ServerStyleSheet();

    fetch('https://jobs.github.com/positions.json?description=javascript&location=' + DEFAULT_LOCATION).then(function (response) {
        return response.json();
    }).then(function (jsonData) {
        var markup = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(_App2.default, { data: jsonData })));
        var styles = sheet.getStyleTags();
        res.send((0, _lib.Html)(APP_TITLE, BUNDLE_PATH, jsonData, styles, markup));
    });
});

app.get('/about', function (req, res, next) {
    var APP_TITLE = constants.APP_TITLE,
        BUNDLE_PATH = constants.BUNDLE_PATH,
        DEFAULT_LOCATION = constants.DEFAULT_LOCATION;

    var sheet = new _styledComponents.ServerStyleSheet();
    var jsonData = {};

    var markup = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(
        BrowserRouter,
        null,
        _react2.default.createElement(_App2.default, { data: jsonData })
    )));
    var styles = sheet.getStyleTags();
    res.send((0, _lib.Html)(APP_TITLE, BUNDLE_PATH, jsonData, styles, markup));
});

app.listen(3000, function () {
    console.log('Server is listening on port: ' + constants.PORT);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'App' },
                _react2.default.createElement(
                    'p',
                    { className: 'title' },
                    'React SSR and Router v4 example.'
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Route,
                        { path: '/' },
                        _react2.default.createElement(
                            _components.Header,
                            null,
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Search results'
                            )
                        ),
                        _react2.default.createElement(_components.SearchResults, { queryData: this.props.data })
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHtmlParser = __webpack_require__(10);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchResults = function SearchResults(props) {
    return props.queryData.map(function (each) {
        return _react2.default.createElement(
            'div',
            { key: each.id, className: 'parent-container' },
            _react2.default.createElement(
                _components.Container,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'search-result' },
                    _react2.default.createElement(
                        _components.Header,
                        null,
                        _react2.default.createElement(
                            'h2',
                            { className: 'title' },
                            each.title
                        )
                    ),
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement(
                        'p',
                        { className: 'date' },
                        each.created_at
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'type' },
                        'Type: ',
                        each.type
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'description' },
                        'Job description: ',
                        (0, _reactHtmlParser2.default)(each.description)
                    )
                )
            )
        );
    });
};

exports.default = SearchResults;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    padding: 24px;\n    width: 100%;\n    height: 100%;\n    background-color: #fff2e6;\n'], ['\n    display: flex;\n    padding: 24px;\n    width: 100%;\n    height: 100%;\n    background-color: #fff2e6;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

exports.default = Container;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    font-family: \'Helvetica\';\n'], ['\n    font-family: \'Helvetica\';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.div(_templateObject);

exports.default = Header;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Html = undefined;

var _html = __webpack_require__(14);

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Html = _html2.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _serializeJavascript = __webpack_require__(15);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(title, bundle, data, styles, body) {
    return '\n    <!DOCTYPE html>\n    <html>\n        <head>\n            <title>' + title + '</title>\n            ' + styles + '\n            <script src="' + bundle + '" defer></script>\n            <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(data) + '</script>\n        </head>\n\n        <body>\n            <div id="app">' + body + '</div>\n        </body>\n    </html>\n';
};

exports.default = Html;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PORT = exports.PORT = process.env.PORT || 3000;
var APP_TITLE = exports.APP_TITLE = "React SSR & Router v4 Example";
var BUNDLE_PATH = exports.BUNDLE_PATH = "./bundle.js";
var DEFAULT_LOCATION = exports.DEFAULT_LOCATION = "London";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })
/******/ ]);