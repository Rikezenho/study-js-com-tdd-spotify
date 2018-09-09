(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/albums.js":
/*!***********************!*\
  !*** ./src/albums.js ***!
  \***********************/
/*! exports provided: getAlbum, getAlbums, getAlbumTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbum", function() { return getAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return getAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbumTracks", function() { return getAlbumTracks; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* global fetch */


var getAlbum = function getAlbum(id) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums/").concat(id), {
    headers: _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]
  }).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};
var getAlbums = function getAlbums(ids) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums?ids=").concat(ids), {
    headers: _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]
  }).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};
var getAlbumTracks = function getAlbumTracks(id) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums/").concat(id, "/tracks"), {
    headers: _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]
  }).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: HEADERS, API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS", function() { return HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var HEADERS = {
  Authorization: "Bearer BQDZYRRnE7eSi8yoQISOmFv-yB1Tqxnt4UOpx6OaS_Px0tsculaOL8VKkzzc9i8Dc3eDKgVMpRwA0lUQMBV670JoZuVkgELXvx_tIkZBkykSmUPbb66C5quCIkTx9bxIJEx_oyiYR5Xmi8mIfCHD5XQvOaLPiru4h9ajVp0JaIRz3ZRWBRjNLeGlkKi3ZnJkpVA8-ww84UuCtzE2Ehk_73jOYRheqw3KqRaCnEqqhu6Ka_Sq84xnPHHm0KB6hJLbdGNDzkFJIReeq9w5mw"
};
var API_URL = "https://api.spotify.com/v1";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/search.js");
/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albums */ "./src/albums.js");


module.exports = {
  search: _search__WEBPACK_IMPORTED_MODULE_0__["search"],
  searchArtists: _search__WEBPACK_IMPORTED_MODULE_0__["searchArtists"],
  searchAlbums: _search__WEBPACK_IMPORTED_MODULE_0__["searchAlbums"],
  searchPlaylists: _search__WEBPACK_IMPORTED_MODULE_0__["searchPlaylists"],
  getAlbum: _albums__WEBPACK_IMPORTED_MODULE_1__["getAlbum"],
  getAlbums: _albums__WEBPACK_IMPORTED_MODULE_1__["getAlbums"],
  getAlbumTracks: _albums__WEBPACK_IMPORTED_MODULE_1__["getAlbumTracks"]
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: search, searchArtists, searchAlbums, searchTracks, searchPlaylists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchArtists", function() { return searchArtists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAlbums", function() { return searchAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTracks", function() { return searchTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPlaylists", function() { return searchPlaylists; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* global fetch */


var search = function search(query, type) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/search?q=").concat(query, "&type=").concat(type), {
    headers: _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]
  }).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};
var searchArtists = function searchArtists(query) {
  return search(query, "artist");
};
var searchAlbums = function searchAlbums(query) {
  return search(query, "album");
};
var searchTracks = function searchTracks(query) {
  return search(query, "track");
};
var searchPlaylists = function searchPlaylists(query) {
  return search(query, "playlist");
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return toJSON; });
var toJSON = function toJSON(data) {
  return data.json();
};

/***/ })

/******/ });
});
//# sourceMappingURL=spotify-wrapper.umd.js.map