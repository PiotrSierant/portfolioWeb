"use strict";
self["webpackHotUpdateonl_fer_s_12_es6_react_podstawy"](0,{

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(35), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(36), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Teko\", sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n}\n\n.fullPageMenu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #111;\n  transition: 0.5s;\n}\n\n.fullPageMenu.active {\n  top: -100%;\n}\n\n.fullPageMenu .banner {\n  position: relative;\n  width: 600px;\n  height: 100%;\n}\n\n.fullPageMenu .banner img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.fullPageMenu .nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.fullPageMenu .nav ul {\n  position: relative;\n}\n\n.fullPageMenu .nav ul li {\n  position: relative;\n  list-style: none;\n  padding: 0 20px;\n  margin: 5px 0;\n  overflow: hidden;\n  display: table;\n}\n\n.fullPageMenu .nav ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #0d8d00;\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\n\n.fullPageMenu .nav ul li:hover:before {\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(1);\n  transform-origin: top;\n}\n\n.fullPageMenu .nav ul li a {\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  font-size: 4em;\n  font-weight: 700;\n  line-height: 1em;\n  display: inline-block;\n  text-transform: uppercase;\n  transition: 0.5s ease-in-out;\n}\n\n.fullPageMenu .nav ul li a::before {\n  content: attr(data-text);\n  position: absolute;\n  bottom: -100%;\n  left: 0;\n  color: #fff;\n}\n\n.fullPageMenu .nav ul li:hover a {\n  transform: translateY(-100%);\n  color: #fff;\n}\n\n.menuIcon {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 40px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: 10px;\n}\n\n.menuIcon.active {\n  background: #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 40px;\n  background-repeat: no-repeat;\n  background-position: 10px;\n}\n\n@media (max-width: 991px) {\n  .banner {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./scss/main.scss"],"names":[],"mappings":"AAEA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;EACA,+BAAA;AACF;;AACA;EACE,iBAAA;AAEF;;AAAA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;AAGF;;AADA;EACE,UAAA;AAIF;;AAFA;EACE,kBAAA;EACA,YAAA;EACA,YAAA;AAKF;;AAHA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAMF;;AAJA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAOF;;AALA;EACE,kBAAA;AAQF;;AANA;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;AASF;;AAPA;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,sCAAA;EACA,oBAAA;EACA,wBAAA;AAUF;;AARA;EACE,sCAAA;EACA,oBAAA;EACA,qBAAA;AAWF;;AATA;EACE,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,4BAAA;AAYF;;AAVA;EACE,wBAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;AAaF;;AAXA;EACE,4BAAA;EACA,WAAA;AAcF;;AAZA;EACE,eAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,wDAAA;EACA,qBAAA;EACA,eAAA;EACA,4BAAA;EACA,yBAAA;AAeF;;AAZA;EACE,wDAAA;EACA,qBAAA;EACA,4BAAA;EACA,yBAAA;AAeF;;AAZA;EACE;IACE,aAAA;EAeF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Teko', sans-serif;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n.fullPageMenu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #111;\r\n  transition: 0.5s;\r\n}\r\n.fullPageMenu.active {\r\n  top: -100%;\r\n}\r\n.fullPageMenu .banner {\r\n  position: relative;\r\n  width: 600px;\r\n  height: 100%;\r\n}\r\n.fullPageMenu .banner img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.fullPageMenu .nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n.fullPageMenu .nav ul {\r\n  position: relative;\r\n}\r\n.fullPageMenu .nav ul li {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 0 20px;\r\n  margin: 5px 0;\r\n  overflow: hidden;\r\n  display: table;\r\n}\r\n.fullPageMenu .nav ul li:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #0d8d00;\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(0);\r\n  transform-origin: bottom;\r\n}\r\n.fullPageMenu .nav ul li:hover:before {\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(1);\r\n  transform-origin: top;\r\n}\r\n.fullPageMenu .nav ul li a {\r\n  position: relative;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 4em;\r\n  font-weight: 700;\r\n  line-height: 1em;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fullPageMenu .nav ul li a::before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  bottom: -100%;\r\n  left: 0;\r\n  color: #fff;\r\n}\r\n.fullPageMenu .nav ul li:hover a {\r\n  transform: translateY(-100%);\r\n  color: #fff;\r\n}\r\n.menuIcon {\r\n  position: fixed;\r\n  top: 20px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: #fff url(../images/close.png);\r\n  background-size: 40px;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n}\r\n\r\n.menuIcon.active {\r\n  background: #fff url(../images/open.png);\r\n  background-size: 40px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n}\r\n\r\n@media(max-width:991px) {\r\n  .banner {\r\n    display: none;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 35:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "008b33675c2ecd943328.png";

/***/ }),

/***/ 36:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "86d7b020e5e75d9d5805.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "94270f6198dec47b4156"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ODdkNmQ0ZjEwN2M4OTAxMWUyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxpRUFBc0M7QUFDbEYsNENBQTRDLGlFQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhIQUE4SDtBQUM5SCw2R0FBNkcsSUFBSSxJQUFJLGtCQUFrQjtBQUN2SSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSw2Q0FBNkMsZUFBZSxjQUFjLDJCQUEyQixzQ0FBc0MsR0FBRyxVQUFVLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IscUJBQXFCLHFCQUFxQixHQUFHLDBCQUEwQixlQUFlLEdBQUcsMkJBQTJCLHVCQUF1QixpQkFBaUIsaUJBQWlCLEdBQUcsK0JBQStCLHVCQUF1QixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQixzQkFBc0IsR0FBRyx3QkFBd0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGlCQUFpQixxQkFBcUIsR0FBRywyQkFBMkIsdUJBQXVCLEdBQUcsOEJBQThCLHVCQUF1QixxQkFBcUIsb0JBQW9CLGtCQUFrQixxQkFBcUIsbUJBQW1CLEdBQUcscUNBQXFDLGtCQUFrQix1QkFBdUIsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsd0JBQXdCLDJDQUEyQyx5QkFBeUIsNkJBQTZCLEdBQUcsMkNBQTJDLDJDQUEyQyx5QkFBeUIsMEJBQTBCLEdBQUcsZ0NBQWdDLHVCQUF1QixnQkFBZ0IsMEJBQTBCLG1CQUFtQixxQkFBcUIscUJBQXFCLDBCQUEwQiw4QkFBOEIsaUNBQWlDLEdBQUcsd0NBQXdDLDZCQUE2Qix1QkFBdUIsa0JBQWtCLFlBQVksZ0JBQWdCLEdBQUcsc0NBQXNDLGlDQUFpQyxnQkFBZ0IsR0FBRyxlQUFlLG9CQUFvQixjQUFjLGdCQUFnQixnQkFBZ0IsaUJBQWlCLHFFQUFxRSwwQkFBMEIsb0JBQW9CLGlDQUFpQyw4QkFBOEIsR0FBRyxzQkFBc0IscUVBQXFFLDBCQUEwQixpQ0FBaUMsOEJBQThCLEdBQUcsK0JBQStCLGFBQWEsb0JBQW9CLEtBQUssR0FBRyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssK0dBQStHLHdFQUF3RSxJQUFJLElBQUksbUJBQW1CLE9BQU8saUJBQWlCLGdCQUFnQiw2QkFBNkIsc0NBQXNDLEtBQUssVUFBVSx3QkFBd0IsS0FBSyxtQkFBbUIsc0JBQXNCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHVCQUF1Qix1QkFBdUIsS0FBSywwQkFBMEIsaUJBQWlCLEtBQUssMkJBQTJCLHlCQUF5QixtQkFBbUIsbUJBQW1CLEtBQUssK0JBQStCLHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQix3QkFBd0IsS0FBSyx3QkFBd0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0JBQWtCLG1CQUFtQix1QkFBdUIsS0FBSywyQkFBMkIseUJBQXlCLEtBQUssOEJBQThCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLG9CQUFvQix1QkFBdUIscUJBQXFCLEtBQUsscUNBQXFDLG9CQUFvQix5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsMEJBQTBCLDZDQUE2QywyQkFBMkIsK0JBQStCLEtBQUssMkNBQTJDLDZDQUE2QywyQkFBMkIsNEJBQTRCLEtBQUssZ0NBQWdDLHlCQUF5QixrQkFBa0IsNEJBQTRCLHFCQUFxQix1QkFBdUIsdUJBQXVCLDRCQUE0QixnQ0FBZ0MsbUNBQW1DLEtBQUssd0NBQXdDLCtCQUErQix5QkFBeUIsb0JBQW9CLGNBQWMsa0JBQWtCLEtBQUssc0NBQXNDLG1DQUFtQyxrQkFBa0IsS0FBSyxlQUFlLHNCQUFzQixnQkFBZ0Isa0JBQWtCLGtCQUFrQixtQkFBbUIsZ0RBQWdELDRCQUE0QixzQkFBc0IsbUNBQW1DLGdDQUFnQyxLQUFLLDBCQUEwQiwrQ0FBK0MsNEJBQTRCLG1DQUFtQyxnQ0FBZ0MsS0FBSyxpQ0FBaUMsZUFBZSxzQkFBc0IsT0FBTyxLQUFLLG1CQUFtQjtBQUNqc007QUFDQSwrREFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkdkMscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzEyX2VzNl9yZWFjdF9wb2RzdGF3eS8uL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL29ubF9mZXJfc18xMl9lczZfcmVhY3RfcG9kc3Rhd3kvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2xvc2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL29wZW4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUZWtvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzExMTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUuYWN0aXZlIHtcXG4gIHRvcDogLTEwMCU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjMGQ4ZDAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmhvdmVyOmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGE6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMDAlO1xcbiAgbGVmdDogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXIgYSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tZW51SWNvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHg7XFxufVxcblxcbi5tZW51SWNvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmJhbm5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Njc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQVVGOztBQVJBO0VBQ0Usc0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBV0Y7O0FBVEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBWUY7O0FBVkE7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBYUY7O0FBWEE7RUFDRSw0QkFBQTtFQUNBLFdBQUE7QUFjRjs7QUFaQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBZUY7O0FBWkE7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQWVGOztBQVpBO0VBQ0U7SUFDRSxhQUFBO0VBZUY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVGVrbycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICMxMTE7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51LmFjdGl2ZSB7XFxyXFxuICB0b3A6IC0xMDAlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIgaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogIzBkOGQwMDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDRlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMWVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmhvdmVyIGEge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4ubWVudUljb24ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKC4uL2ltYWdlcy9jbG9zZS5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51SWNvbi5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoLi4vaW1hZ2VzL29wZW4ucG5nKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOjk5MXB4KSB7XFxyXFxuICAuYmFubmVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI5NDI3MGY2MTk4ZGVjNDdiNDE1NlwiOyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9