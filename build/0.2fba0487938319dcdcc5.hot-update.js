"use strict";
self["webpackHotUpdateMyFunc"](0,{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(37), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(35), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(36), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Ginger;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n/* Responsive Typography */\nhtml {\n  font-size: 16px;\n}\n\n@media screen and (min-width: 320px) {\n  html {\n    font-size: calc(16px + 6 * (100vw - 320px) / 680);\n  }\n}\n@media screen and (min-width: 1000px) {\n  html {\n    font-size: 22px;\n  }\n}\n/* finish responsive typography */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Teko\", sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #333;\n}\n\n.header {\n  min-height: 100px;\n}\n\n.logo, .logo span {\n  font-size: 2rem;\n  font-family: Ginger;\n  color: whitesmoke;\n}\n\n.logo {\n  margin-left: 2rem;\n  margin-top: 20px;\n}\n\n/* Menu */\n.fullPageMenu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #111;\n  transition: 0.5s;\n}\n\n.fullPageMenu.active {\n  top: -100%;\n}\n\n.fullPageMenu .banner {\n  position: relative;\n  width: 600px;\n  height: 100%;\n}\n\n.fullPageMenu .banner img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.fullPageMenu .nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.fullPageMenu .nav ul {\n  position: relative;\n}\n\n.fullPageMenu .nav ul li {\n  position: relative;\n  list-style: none;\n  padding: 0 20px;\n  margin: 5px 0;\n  overflow: hidden;\n  display: table;\n}\n\n.fullPageMenu .nav ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #0d8d00;\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\n\n.fullPageMenu .nav ul li:hover:before {\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(1);\n  transform-origin: top;\n}\n\n.fullPageMenu .nav ul li a {\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  font-size: 4em;\n  font-weight: 700;\n  line-height: 1em;\n  display: inline-block;\n  text-transform: uppercase;\n  transition: 0.5s ease-in-out;\n}\n\n.fullPageMenu .nav ul li a::before {\n  content: attr(data-text);\n  position: absolute;\n  bottom: -100%;\n  left: 0;\n  color: #fff;\n}\n\n.fullPageMenu .nav ul li:hover a {\n  transform: translateY(-100%);\n  color: #fff;\n}\n\n.menuIcon {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 40px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: 10px;\n}\n\n.menuIcon.active {\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 40px;\n  background-repeat: no-repeat;\n  background-position: 10px;\n}\n\n@media (max-width: 991px) {\n  .banner {\n    display: none;\n  }\n}\n/* finish menu */", "",{"version":3,"sources":["webpack://./scss/main.scss"],"names":[],"mappings":"AAEA;EACE,mBAAA;EACA,4CAAA;AACF;AACA,0BAAA;AACA;EACE,eAAA;AACF;;AACA;EACE;IACE,iDAAA;EAEF;AACF;AAAA;EACE;IACE,eAAA;EAEF;AACF;AAAA,iCAAA;AACA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;EACA,+BAAA;AAEF;;AAAA;EACE,iBAAA;EACA,sBAAA;AAGF;;AADA;EACE,iBAAA;AAIF;;AAFA;EACE,eAAA;EACA,mBAAA;EACA,iBAAA;AAKF;;AAHA;EACE,iBAAA;EACA,gBAAA;AAMF;;AAJA,SAAA;AACA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;AAOF;;AALA;EACE,UAAA;AAQF;;AANA;EACE,kBAAA;EACA,YAAA;EACA,YAAA;AASF;;AAPA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAUF;;AARA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAWF;;AATA;EACE,kBAAA;AAYF;;AAVA;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;AAaF;;AAXA;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,sCAAA;EACA,oBAAA;EACA,wBAAA;AAcF;;AAZA;EACE,sCAAA;EACA,oBAAA;EACA,qBAAA;AAeF;;AAbA;EACE,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,4BAAA;AAgBF;;AAdA;EACE,wBAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;AAiBF;;AAfA;EACE,4BAAA;EACA,WAAA;AAkBF;;AAhBA;EACE,eAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,mDAAA;EACA,qBAAA;EACA,eAAA;EACA,4BAAA;EACA,yBAAA;AAmBF;;AAjBA;EACE,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,mDAAA;EACA,qBAAA;EACA,4BAAA;EACA,yBAAA;AAoBF;;AAlBA;EACE;IACE,aAAA;EAqBF;AACF;AAnBA,gBAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');\r\n@font-face {\r\n  font-family: Ginger;\r\n  src: url('/font/Ginger.woff');\r\n}\r\n/* Responsive Typography */\r\nhtml {\r\n  font-size: 16px;\r\n}\r\n@media screen and (min-width: 320px) {\r\n  html {\r\n    font-size: calc(16px + 6 * ((100vw - 320px) / 680));\r\n  }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  html {\r\n    font-size: 22px;\r\n  }\r\n}\r\n/* finish responsive typography */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Teko', sans-serif;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: #333;\r\n}\r\n.header {\r\n  min-height: 100px;\r\n}\r\n.logo, .logo span {\r\n  font-size: 2rem;\r\n  font-family: Ginger;\r\n  color: whitesmoke;\r\n}\r\n.logo {\r\n  margin-left: 2rem;\r\n  margin-top: 20px;\r\n}\r\n/* Menu */\r\n.fullPageMenu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #111;\r\n  transition: 0.5s;\r\n}\r\n.fullPageMenu.active {\r\n  top: -100%;\r\n}\r\n.fullPageMenu .banner {\r\n  position: relative;\r\n  width: 600px;\r\n  height: 100%;\r\n}\r\n.fullPageMenu .banner img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.fullPageMenu .nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n.fullPageMenu .nav ul {\r\n  position: relative;\r\n}\r\n.fullPageMenu .nav ul li {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 0 20px;\r\n  margin: 5px 0;\r\n  overflow: hidden;\r\n  display: table;\r\n}\r\n.fullPageMenu .nav ul li:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #0d8d00;\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(0);\r\n  transform-origin: bottom;\r\n}\r\n.fullPageMenu .nav ul li:hover:before {\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(1);\r\n  transform-origin: top;\r\n}\r\n.fullPageMenu .nav ul li a {\r\n  position: relative;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 4em;\r\n  font-weight: 700;\r\n  line-height: 1em;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fullPageMenu .nav ul li a::before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  bottom: -100%;\r\n  left: 0;\r\n  color: #fff;\r\n}\r\n.fullPageMenu .nav ul li:hover a {\r\n  transform: translateY(-100%);\r\n  color: #fff;\r\n}\r\n.menuIcon {\r\n  position: fixed;\r\n  top: 20px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: url(../images/close.svg);\r\n  background-size: 40px;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n}\r\n.menuIcon.active {\r\n  top: 20px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: url(../images/open.svg);\r\n  background-size: 40px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n}\r\n@media(max-width:991px) {\r\n  .banner {\r\n    display: none;\r\n  }\r\n}\r\n/* finish menu */\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "148b5004b57554af4183"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBNkMsMkJBQTJCLCtCQUErQixLQUFLLDJDQUEyQyw2Q0FBNkMsMkJBQTJCLDRCQUE0QixLQUFLLGdDQUFnQyx5QkFBeUIsa0JBQWtCLDRCQUE0QixxQkFBcUIsdUJBQXVCLHVCQUF1Qiw0QkFBNEIsZ0NBQWdDLG1DQUFtQyxLQUFLLHdDQUF3QywrQkFBK0IseUJBQXlCLG9CQUFvQixjQUFjLGtCQUFrQixLQUFLLHNDQUFzQyxtQ0FBbUMsa0JBQWtCLEtBQUssZUFBZSxzQkFBc0IsZ0JBQWdCLGtCQUFrQixrQkFBa0IsbUJBQW1CLDJDQUEyQyw0QkFBNEIsc0JBQXNCLG1DQUFtQyxnQ0FBZ0MsS0FBSyxzQkFBc0IsZ0JBQWdCLGtCQUFrQixrQkFBa0IsbUJBQW1CLDBDQUEwQyw0QkFBNEIsbUNBQW1DLGdDQUFnQyxLQUFLLDZCQUE2QixlQUFlLHNCQUFzQixPQUFPLEtBQUssZ0RBQWdEO0FBQzk0UDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNoQnZDLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL015RnVuYy8uL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9mb250L0dpbmdlci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9vcGVuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuLyogUmVzcG9uc2l2ZSBUeXBvZ3JhcGh5ICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE2cHggKyA2ICogKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgfVxcbn1cXG4vKiBmaW5pc2ggcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5ICovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ubG9nbywgLmxvZ28gc3BhbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLyogTWVudSAqL1xcbi5mdWxsUGFnZU1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxMTE7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51LmFjdGl2ZSB7XFxuICB0b3A6IC0xMDAlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzBkOGQwMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlcjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmhvdmVyIGEge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubWVudUljb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXG59XFxuXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5iYW5uZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4vKiBmaW5pc2ggbWVudSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Njc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtBQUNGO0FBQ0EsMEJBQUE7QUFDQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsaURBQUE7RUFFRjtBQUNGO0FBQUE7RUFDRTtJQUNFLGVBQUE7RUFFRjtBQUNGO0FBQUEsaUNBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkEsU0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLFVBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFTRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFhRjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQWNGOztBQVpBO0VBQ0Usc0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBZUY7O0FBYkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBZ0JGOztBQWRBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQWlCRjs7QUFmQTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtBQWtCRjs7QUFoQkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQW1CRjs7QUFqQkE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFvQkY7O0FBbEJBO0VBQ0U7SUFDRSxhQUFBO0VBcUJGO0FBQ0Y7QUFuQkEsZ0JBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gIHNyYzogdXJsKCcvZm9udC9HaW5nZXIud29mZicpO1xcclxcbn1cXHJcXG4vKiBSZXNwb25zaXZlIFR5cG9ncmFwaHkgKi9cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDYgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogZmluaXNoIHJlc3BvbnNpdmUgdHlwb2dyYXBoeSAqL1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1Rla28nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuLmxvZ28sIC5sb2dvIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcbi8qIE1lbnUgKi9cXHJcXG4uZnVsbFBhZ2VNZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTExO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudS5hY3RpdmUge1xcclxcbiAgdG9wOiAtMTAwJTtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAuYmFubmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAuYmFubmVyIGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICMwZDhkMDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXI6YmVmb3JlIHtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiA0ZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogLTEwMCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlciBhIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLm1lbnVJY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2Nsb3NlLnN2Zyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXHJcXG59XFxyXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9vcGVuLnN2Zyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXHJcXG59XFxyXFxuQG1lZGlhKG1heC13aWR0aDo5OTFweCkge1xcclxcbiAgLmJhbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIGZpbmlzaCBtZW51ICovXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxNDhiNTAwNGI1NzU1NGFmNDE4M1wiOyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9