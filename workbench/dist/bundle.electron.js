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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_electron__);



if (__WEBPACK_IMPORTED_MODULE_0__startup__["a" /* createWindow */] !== undefined) {
  __WEBPACK_IMPORTED_MODULE_1_electron__["app"].on('ready', __WEBPACK_IMPORTED_MODULE_0__startup__["a" /* createWindow */].bind(this, __WEBPACK_IMPORTED_MODULE_1_electron__["app"]));
} else {
  throw new Error('could not find createWindow function');
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export startup */
/* harmony export (immutable) */ __webpack_exports__["a"] = createWindow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(10);


const url = __webpack_require__(11);

const path = __webpack_require__(12);

let window;
function startup(configuration) {
  window = new __WEBPACK_IMPORTED_MODULE_0__window__["a" /* JukuWindow */](configuration);
}
function createWindow(app) {
  const configuration = {
    windowId: 0,
    appRoot: app,
    width: 800,
    height: 600,
    url: url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: `file:`,
      slashes: true
    })
  };
  startup(configuration);
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  }); //TODO: Get activate to work

  app.on('activate', () => {
    if (!window || window.isClosed) {
      window.reopen();
    }
  });
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);

class JukuWindow {
  constructor(config) {
    this.createWindow(config);
  }

  createWindow(config) {
    this._config = config;
    this.window = new __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"]({
      width: config.width,
      height: config.height
    });
    this._id = this.window.id;
    this.window.loadURL(config.url); // this.window.webContents.openDevTools();

    this.window.on('closed', () => this.close());
  }

  get config() {
    return this._config;
  }

  get id() {
    return this._id;
  }

  get isClosed() {
    return !!this.window;
  }

  close() {
    this.window = null;
  }

  reopen() {
    this.createWindow(this._config);
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = JukuWindow;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.electron.js.map