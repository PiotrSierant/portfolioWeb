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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(35), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(36), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(37), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Ginger;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n/* Responsive Typography */\nhtml {\n  font-size: 16px;\n}\n\n@media screen and (min-width: 320px) {\n  html {\n    font-size: calc(16px + 6 * (100vw - 320px) / 680);\n  }\n}\n@media screen and (min-width: 1000px) {\n  html {\n    font-size: 22px;\n  }\n}\n/* finish responsive typography */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Teko\", sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #111;\n}\n\n/* logo */\n.header {\n  min-height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  display: inline-block;\n  font-size: 30px;\n  font-family: Ginger;\n  margin-left: 2rem;\n  color: whitesmoke;\n  transition: 0.5s color ease-in-out;\n}\n.logo:hover {\n  color: #0d8d00;\n}\n\n/* Menu */\n.fullPageMenu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #111;\n  transition: 0.5s;\n  z-index: 999;\n}\n\n.fullPageMenu.active {\n  top: -100%;\n}\n\n.fullPageMenu .banner {\n  position: relative;\n  width: 600px;\n  height: 100%;\n}\n\n.fullPageMenu .banner img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.fullPageMenu .nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.fullPageMenu .nav ul {\n  position: relative;\n}\n\n.fullPageMenu .nav ul li {\n  position: relative;\n  list-style: none;\n  padding: 0 20px;\n  margin: 5px 0;\n  overflow: hidden;\n  display: table;\n}\n\n.fullPageMenu .nav ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #0d8d00;\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\n\n.fullPageMenu .nav ul li:hover:before {\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(1);\n  transform-origin: top;\n}\n\n.fullPageMenu .nav ul li a {\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  font-size: 4em;\n  font-weight: 700;\n  line-height: 1em;\n  display: inline-block;\n  text-transform: uppercase;\n  transition: 0.5s ease-in-out;\n}\n\n.fullPageMenu .nav ul li a::before {\n  content: attr(data-text);\n  position: absolute;\n  bottom: -100%;\n  left: 0;\n  color: #fff;\n}\n\n.fullPageMenu .nav ul li:hover a {\n  transform: translateY(-100%);\n  color: #fff;\n}\n\n.menuIcon {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 40px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: 10px;\n  z-index: 9999;\n}\n\n.menuIcon.active {\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 40px;\n  background-repeat: no-repeat;\n  background-position: 10px;\n  z-index: 9999;\n}\n\n@media (max-width: 991px) {\n  .banner {\n    display: none;\n  }\n}\n/* finish menu */\n/* hero section */\n.hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: whitesmoke;\n  flex-direction: column;\n  height: calc(100vh - 200px);\n  flex-flow: column nowrap;\n  margin: 0 2rem;\n}\n\n@media screen and (min-width: 500px) {\n  .hero {\n    margin: 0 2rem;\n  }\n}", "",{"version":3,"sources":["webpack://./scss/main.scss"],"names":[],"mappings":"AAEA;EACE,mBAAA;EACA,4CAAA;AACF;AACA,0BAAA;AACA;EACE,eAAA;AACF;;AACA;EACE;IACE,iDAAA;EAEF;AACF;AAAA;EACE;IACE,eAAA;EAEF;AACF;AAAA,iCAAA;AACA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;EACA,+BAAA;AAEF;;AAAA;EACE,iBAAA;EACA,sBAAA;AAGF;;AADA,SAAA;AACA;EACE,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAIF;;AAFA;EACE,qBAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kCAAA;AAKF;AAJE;EACE,cAAA;AAMJ;;AAHA,SAAA;AACA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;AAMF;;AAJA;EACE,UAAA;AAOF;;AALA;EACE,kBAAA;EACA,YAAA;EACA,YAAA;AAQF;;AANA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AASF;;AAPA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAUF;;AARA;EACE,kBAAA;AAWF;;AATA;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;AAYF;;AAVA;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,sCAAA;EACA,oBAAA;EACA,wBAAA;AAaF;;AAXA;EACE,sCAAA;EACA,oBAAA;EACA,qBAAA;AAcF;;AAZA;EACE,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,4BAAA;AAeF;;AAbA;EACE,wBAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;AAgBF;;AAdA;EACE,4BAAA;EACA,WAAA;AAiBF;;AAfA;EACE,eAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,mDAAA;EACA,qBAAA;EACA,eAAA;EACA,4BAAA;EACA,yBAAA;EACA,aAAA;AAkBF;;AAhBA;EACE,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,mDAAA;EACA,qBAAA;EACA,4BAAA;EACA,yBAAA;EACA,aAAA;AAmBF;;AAjBA;EACE;IACE,aAAA;EAoBF;AACF;AAlBA,gBAAA;AACA,iBAAA;AACA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,sBAAA;EACA,2BAAA;EACA,wBAAA;EACA,cAAA;AAoBF;;AAhBA;EACE;IACE,cAAA;EAmBF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');\r\n@font-face {\r\n  font-family: Ginger;\r\n  src: url('/font/Ginger.woff');\r\n}\r\n/* Responsive Typography */\r\nhtml {\r\n  font-size: 16px;\r\n}\r\n@media screen and (min-width: 320px) {\r\n  html {\r\n    font-size: calc(16px + 6 * ((100vw - 320px) / 680));\r\n  }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  html {\r\n    font-size: 22px;\r\n  }\r\n}\r\n/* finish responsive typography */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Teko', sans-serif;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: #111;\r\n}\r\n/* logo */\r\n.header {\r\n  min-height: 100px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.logo {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-family: Ginger;\r\n  margin-left: 2rem;\r\n  color: whitesmoke;\r\n  transition: .5s color ease-in-out;\r\n  &:hover {\r\n    color: #0d8d00;\r\n  }\r\n}\r\n/* Menu */\r\n.fullPageMenu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #111;\r\n  transition: 0.5s;\r\n  z-index: 999;\r\n}\r\n.fullPageMenu.active {\r\n  top: -100%;\r\n}\r\n.fullPageMenu .banner {\r\n  position: relative;\r\n  width: 600px;\r\n  height: 100%;\r\n}\r\n.fullPageMenu .banner img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.fullPageMenu .nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n.fullPageMenu .nav ul {\r\n  position: relative;\r\n}\r\n.fullPageMenu .nav ul li {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 0 20px;\r\n  margin: 5px 0;\r\n  overflow: hidden;\r\n  display: table;\r\n}\r\n.fullPageMenu .nav ul li:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #0d8d00;\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(0);\r\n  transform-origin: bottom;\r\n}\r\n.fullPageMenu .nav ul li:hover:before {\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(1);\r\n  transform-origin: top;\r\n}\r\n.fullPageMenu .nav ul li a {\r\n  position: relative;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 4em;\r\n  font-weight: 700;\r\n  line-height: 1em;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fullPageMenu .nav ul li a::before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  bottom: -100%;\r\n  left: 0;\r\n  color: #fff;\r\n}\r\n.fullPageMenu .nav ul li:hover a {\r\n  transform: translateY(-100%);\r\n  color: #fff;\r\n}\r\n.menuIcon {\r\n  position: fixed;\r\n  top: 20px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: url(../images/close.svg);\r\n  background-size: 40px;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n  z-index: 9999;\r\n}\r\n.menuIcon.active {\r\n  top: 20px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: url(../images/open.svg);\r\n  background-size: 40px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n  z-index: 9999;\r\n}\r\n@media(max-width:991px) {\r\n  .banner {\r\n    display: none;\r\n  }\r\n}\r\n/* finish menu */\r\n/* hero section */\r\n.hero {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: whitesmoke;\r\n  flex-direction: column;\r\n  height: calc(100vh - 200px);\r\n  flex-flow: column nowrap;\r\n  margin: 0 2rem;\r\n\r\n}\r\n\r\n@media screen and (min-width: 500px){\r\n  .hero {\r\n    margin: 0 2rem;\r\n  }\r\n}\r\n\r\n//p {\r\n//  font-family: Ginger;\r\n//  width: 100%;\r\n//  font-size: 2.5rem;\r\n//  line-height: 2.5rem;\r\n//  span {\r\n//    font-family: Ginger;\r\n//    color: #0d8d00;\r\n//  }\r\n//}\r\n//p {\r\n//  font-size: 1.5rem;\r\n//}\r\n//p {\r\n//  font-size: 1.5rem;\r\n//  position: relative;\r\n//  &::before {\r\n//    content: '';\r\n//    position: absolute;\r\n//    width: 60px;\r\n//    height: 2px;\r\n//    background-color: white;\r\n//    left: -70px;\r\n//    top: calc(50% - 2px);\r\n//  }\r\n//  &::after {\r\n//    content: '';\r\n//    position: absolute;\r\n//    width: 60px;\r\n//    height: 2px;\r\n//    background-color: white;\r\n//    right: -70px;\r\n//    top: calc(50% - 2px);\r\n//  }\r\n//}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cb20b7fd220ab4ad1f93"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJCQUEyQixtQkFBbUIsc0JBQXNCLDZCQUE2QixzQkFBc0Isc0JBQXNCLGtDQUFrQyxzQkFBc0IsK0JBQStCLFNBQVMsa0JBQWtCLHNCQUFzQiw2QkFBNkIsc0JBQXNCLHNCQUFzQixrQ0FBa0MsdUJBQXVCLCtCQUErQixTQUFTLE9BQU8sbUJBQW1CO0FBQzkzVDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNoQnZDLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL015RnVuYy8uL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9mb250L0dpbmdlci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9vcGVuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuLyogUmVzcG9uc2l2ZSBUeXBvZ3JhcGh5ICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE2cHggKyA2ICogKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgfVxcbn1cXG4vKiBmaW5pc2ggcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5ICovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcbn1cXG5cXG4vKiBsb2dvICovXFxuLmhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgY29sb3IgZWFzZS1pbi1vdXQ7XFxufVxcbi5sb2dvOmhvdmVyIHtcXG4gIGNvbG9yOiAjMGQ4ZDAwO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuLmZ1bGxQYWdlTWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzExMTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUuYWN0aXZlIHtcXG4gIHRvcDogLTEwMCU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjMGQ4ZDAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmhvdmVyOmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGE6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMDAlO1xcbiAgbGVmdDogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXIgYSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tZW51SWNvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuYmFubmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLyogZmluaXNoIG1lbnUgKi9cXG4vKiBoZXJvIHNlY3Rpb24gKi9cXG4uaGVybyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgbWFyZ2luOiAwIDJyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuICAuaGVybyB7XFxuICAgIG1hcmdpbjogMCAycmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zY3NzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7QUFDRjtBQUNBLDBCQUFBO0FBQ0E7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGlEQUFBO0VBRUY7QUFDRjtBQUFBO0VBQ0U7SUFDRSxlQUFBO0VBRUY7QUFDRjtBQUFBLGlDQUFBO0FBQ0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFEQSxTQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQUtGO0FBSkU7RUFDRSxjQUFBO0FBTUo7O0FBSEEsU0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVNGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBVUY7O0FBUkE7RUFDRSxrQkFBQTtBQVdGOztBQVRBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWUY7O0FBVkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUFhRjs7QUFYQTtFQUNFLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQWNGOztBQVpBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQWVGOztBQWJBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQWdCRjs7QUFkQTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtBQWlCRjs7QUFmQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQWtCRjs7QUFoQkE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBbUJGOztBQWpCQTtFQUNFO0lBQ0UsYUFBQTtFQW9CRjtBQUNGO0FBbEJBLGdCQUFBO0FBQ0EsaUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBb0JGOztBQWhCQTtFQUNFO0lBQ0UsY0FBQTtFQW1CRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrbzp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxyXFxuICBzcmM6IHVybCgnL2ZvbnQvR2luZ2VyLndvZmYnKTtcXHJcXG59XFxyXFxuLyogUmVzcG9uc2l2ZSBUeXBvZ3JhcGh5ICovXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDE2cHggKyA2ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIGZpbmlzaCByZXNwb25zaXZlIHR5cG9ncmFwaHkgKi9cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdUZWtvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxufVxcclxcbi8qIGxvZ28gKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgdHJhbnNpdGlvbjogLjVzIGNvbG9yIGVhc2UtaW4tb3V0O1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjMGQ4ZDAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG4vKiBNZW51ICovXFxyXFxuLmZ1bGxQYWdlTWVudSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogIzExMTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUuYWN0aXZlIHtcXHJcXG4gIHRvcDogLTEwMCU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMGQ4ZDAwO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmhvdmVyOmJlZm9yZSB7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogNGVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0xMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXIgYSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5tZW51SWNvbiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9jbG9zZS5zdmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHg7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG4ubWVudUljb24uYWN0aXZlIHtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL29wZW4uc3ZnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuQG1lZGlhKG1heC13aWR0aDo5OTFweCkge1xcclxcbiAgLmJhbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIGZpbmlzaCBtZW51ICovXFxyXFxuLyogaGVybyBzZWN0aW9uICovXFxyXFxuLmhlcm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIG1hcmdpbjogMCAycmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XFxyXFxuICAuaGVybyB7XFxyXFxuICAgIG1hcmdpbjogMCAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vL3Age1xcclxcbi8vICBmb250LWZhbWlseTogR2luZ2VyO1xcclxcbi8vICB3aWR0aDogMTAwJTtcXHJcXG4vLyAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuLy8gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuLy8gIHNwYW4ge1xcclxcbi8vICAgIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxyXFxuLy8gICAgY29sb3I6ICMwZDhkMDA7XFxyXFxuLy8gIH1cXHJcXG4vL31cXHJcXG4vL3Age1xcclxcbi8vICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4vL31cXHJcXG4vL3Age1xcclxcbi8vICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4vLyAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbi8vICAmOjpiZWZvcmUge1xcclxcbi8vICAgIGNvbnRlbnQ6ICcnO1xcclxcbi8vICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4vLyAgICB3aWR0aDogNjBweDtcXHJcXG4vLyAgICBoZWlnaHQ6IDJweDtcXHJcXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4vLyAgICBsZWZ0OiAtNzBweDtcXHJcXG4vLyAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXHJcXG4vLyAgfVxcclxcbi8vICAmOjphZnRlciB7XFxyXFxuLy8gICAgY29udGVudDogJyc7XFxyXFxuLy8gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbi8vICAgIHdpZHRoOiA2MHB4O1xcclxcbi8vICAgIGhlaWdodDogMnB4O1xcclxcbi8vICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbi8vICAgIHJpZ2h0OiAtNzBweDtcXHJcXG4vLyAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXHJcXG4vLyAgfVxcclxcbi8vfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiY2IyMGI3ZmQyMjBhYjRhZDFmOTNcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==