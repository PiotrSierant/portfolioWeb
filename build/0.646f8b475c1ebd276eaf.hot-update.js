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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Ginger;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n/* Responsive Typography */\nhtml {\n  font-size: 16px;\n}\n\n@media screen and (min-width: 320px) {\n  html {\n    font-size: calc(16px + 6 * (100vw - 320px) / 680);\n  }\n}\n@media screen and (min-width: 1000px) {\n  html {\n    font-size: 22px;\n  }\n}\n/* finish responsive typography */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Teko\", sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #111;\n}\n\n/* logo */\n.header {\n  min-height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  display: inline-block;\n  font-size: 30px;\n  font-family: Ginger;\n  margin-left: 2rem;\n  color: whitesmoke;\n  transition: 0.5s color ease-in-out;\n}\n.logo:hover {\n  color: #0d8d00;\n}\n\n/* Menu */\n.fullPageMenu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #111;\n  transition: 0.5s;\n}\n\n.fullPageMenu.active {\n  top: -100%;\n}\n\n.fullPageMenu .banner {\n  position: relative;\n  width: 600px;\n  height: 100%;\n}\n\n.fullPageMenu .banner img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.fullPageMenu .nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.fullPageMenu .nav ul {\n  position: relative;\n}\n\n.fullPageMenu .nav ul li {\n  position: relative;\n  list-style: none;\n  padding: 0 20px;\n  margin: 5px 0;\n  overflow: hidden;\n  display: table;\n}\n\n.fullPageMenu .nav ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #0d8d00;\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\n\n.fullPageMenu .nav ul li:hover:before {\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(1);\n  transform-origin: top;\n}\n\n.fullPageMenu .nav ul li a {\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  font-size: 4em;\n  font-weight: 700;\n  line-height: 1em;\n  display: inline-block;\n  text-transform: uppercase;\n  transition: 0.5s ease-in-out;\n}\n\n.fullPageMenu .nav ul li a::before {\n  content: attr(data-text);\n  position: absolute;\n  bottom: -100%;\n  left: 0;\n  color: #fff;\n}\n\n.fullPageMenu .nav ul li:hover a {\n  transform: translateY(-100%);\n  color: #fff;\n}\n\n.menuIcon {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 40px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: 10px;\n}\n\n.menuIcon.active {\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 40px;\n  background-repeat: no-repeat;\n  background-position: 10px;\n}\n\n@media (max-width: 991px) {\n  .banner {\n    display: none;\n  }\n}\n/* finish menu */\n/* hero section */\n.hero {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: whitesmoke;\n  flex-direction: column;\n  height: calc(100vh - 200px);\n  flex-flow: column nowrap;\n  margin: 0 2rem;\n}\n.hero div {\n  font-family: Ginger;\n  width: 100%;\n  font-size: 2.5rem;\n  line-height: 2.5rem;\n}\n.hero div span {\n  font-family: Ginger;\n  color: #0d8d00;\n}\n.hero p {\n  font-size: 1.5rem;\n}\n\n@media screen and (min-width: 500px) {\n  .hero {\n    margin: 0 2rem;\n  }\n  .hero div {\n    width: 100%;\n    font-size: 3rem;\n    line-height: 3rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .hero div:nth-child(1) {\n    transform: translateX(-2rem);\n  }\n  .hero div:nth-child(2) {\n    transform: translateX(3rem);\n  }\n  .hero div:nth-child(3) {\n    display: flex;\n    flex-direction: row;\n    transform: translateX(3rem);\n  }\n  .hero div:nth-child(3) span {\n    margin-left: 20px;\n  }\n  .hero div span {\n    color: #0d8d00;\n  }\n  .hero p {\n    font-size: 2rem;\n    position: relative;\n  }\n  .hero p::before {\n    content: \"\";\n    position: absolute;\n    width: 100px;\n    height: 2px;\n    background-color: white;\n    left: -100px;\n    top: calc(50% - 2px);\n  }\n}", "",{"version":3,"sources":["webpack://./scss/main.scss"],"names":[],"mappings":"AAEA;EACE,mBAAA;EACA,4CAAA;AACF;AACA,0BAAA;AACA;EACE,eAAA;AACF;;AACA;EACE;IACE,iDAAA;EAEF;AACF;AAAA;EACE;IACE,eAAA;EAEF;AACF;AAAA,iCAAA;AACA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;EACA,+BAAA;AAEF;;AAAA;EACE,iBAAA;EACA,sBAAA;AAGF;;AADA,SAAA;AACA;EACE,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAIF;;AAFA;EACE,qBAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kCAAA;AAKF;AAJE;EACE,cAAA;AAMJ;;AAHA,SAAA;AACA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;AAMF;;AAJA;EACE,UAAA;AAOF;;AALA;EACE,kBAAA;EACA,YAAA;EACA,YAAA;AAQF;;AANA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AASF;;AAPA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAUF;;AARA;EACE,kBAAA;AAWF;;AATA;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;AAYF;;AAVA;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,sCAAA;EACA,oBAAA;EACA,wBAAA;AAaF;;AAXA;EACE,sCAAA;EACA,oBAAA;EACA,qBAAA;AAcF;;AAZA;EACE,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,4BAAA;AAeF;;AAbA;EACE,wBAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;AAgBF;;AAdA;EACE,4BAAA;EACA,WAAA;AAiBF;;AAfA;EACE,eAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,mDAAA;EACA,qBAAA;EACA,eAAA;EACA,4BAAA;EACA,yBAAA;AAkBF;;AAhBA;EACE,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,mDAAA;EACA,qBAAA;EACA,4BAAA;EACA,yBAAA;AAmBF;;AAjBA;EACE;IACE,aAAA;EAoBF;AACF;AAlBA,gBAAA;AACA,iBAAA;AACA;EACE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,iBAAA;EACA,sBAAA;EACA,2BAAA;EACA,wBAAA;EACA,cAAA;AAoBF;AAnBE;EACE,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;AAqBJ;AApBI;EACE,mBAAA;EACA,cAAA;AAsBN;AAnBE;EACE,iBAAA;AAqBJ;;AAjBA;EACE;IACE,cAAA;EAoBF;EAlBE;IACE,WAAA;IACA,eAAA;IACA,iBAAA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;EAoBJ;EAnBI;IACE,4BAAA;EAqBN;EAnBI;IACE,2BAAA;EAqBN;EAnBI;IACE,aAAA;IACA,mBAAA;IACA,2BAAA;EAqBN;EApBM;IACE,iBAAA;EAsBR;EAnBI;IACE,cAAA;EAqBN;EAlBE;IACE,eAAA;IACA,kBAAA;EAoBJ;EAnBI;IACE,WAAA;IACA,kBAAA;IACA,YAAA;IACA,WAAA;IACA,uBAAA;IACA,YAAA;IACA,oBAAA;EAqBN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');\r\n@font-face {\r\n  font-family: Ginger;\r\n  src: url('/font/Ginger.woff');\r\n}\r\n/* Responsive Typography */\r\nhtml {\r\n  font-size: 16px;\r\n}\r\n@media screen and (min-width: 320px) {\r\n  html {\r\n    font-size: calc(16px + 6 * ((100vw - 320px) / 680));\r\n  }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  html {\r\n    font-size: 22px;\r\n  }\r\n}\r\n/* finish responsive typography */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Teko', sans-serif;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: #111;\r\n}\r\n/* logo */\r\n.header {\r\n  min-height: 100px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.logo {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-family: Ginger;\r\n  margin-left: 2rem;\r\n  color: whitesmoke;\r\n  transition: .5s color ease-in-out;\r\n  &:hover {\r\n    color: #0d8d00;\r\n  }\r\n}\r\n/* Menu */\r\n.fullPageMenu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #111;\r\n  transition: 0.5s;\r\n}\r\n.fullPageMenu.active {\r\n  top: -100%;\r\n}\r\n.fullPageMenu .banner {\r\n  position: relative;\r\n  width: 600px;\r\n  height: 100%;\r\n}\r\n.fullPageMenu .banner img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.fullPageMenu .nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n.fullPageMenu .nav ul {\r\n  position: relative;\r\n}\r\n.fullPageMenu .nav ul li {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 0 20px;\r\n  margin: 5px 0;\r\n  overflow: hidden;\r\n  display: table;\r\n}\r\n.fullPageMenu .nav ul li:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #0d8d00;\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(0);\r\n  transform-origin: bottom;\r\n}\r\n.fullPageMenu .nav ul li:hover:before {\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(1);\r\n  transform-origin: top;\r\n}\r\n.fullPageMenu .nav ul li a {\r\n  position: relative;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 4em;\r\n  font-weight: 700;\r\n  line-height: 1em;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fullPageMenu .nav ul li a::before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  bottom: -100%;\r\n  left: 0;\r\n  color: #fff;\r\n}\r\n.fullPageMenu .nav ul li:hover a {\r\n  transform: translateY(-100%);\r\n  color: #fff;\r\n}\r\n.menuIcon {\r\n  position: fixed;\r\n  top: 20px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: url(../images/close.svg);\r\n  background-size: 40px;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n}\r\n.menuIcon.active {\r\n  top: 20px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: url(../images/open.svg);\r\n  background-size: 40px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n}\r\n@media(max-width:991px) {\r\n  .banner {\r\n    display: none;\r\n  }\r\n}\r\n/* finish menu */\r\n/* hero section */\r\n.hero {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  color: whitesmoke;\r\n  flex-direction: column;\r\n  height: calc(100vh - 200px);\r\n  flex-flow: column nowrap;\r\n  margin: 0 2rem;\r\n  div {\r\n    font-family: Ginger;\r\n    width: 100%;\r\n    font-size: 2.5rem;\r\n    line-height: 2.5rem;\r\n    span {\r\n      font-family: Ginger;\r\n      color: #0d8d00;\r\n    }\r\n  }\r\n  p {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px){\r\n  .hero {\r\n    margin: 0 2rem;\r\n\r\n    div {\r\n      width: 100%;\r\n      font-size: 3rem;\r\n      line-height: 3rem;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      &:nth-child(1) {\r\n        transform: translateX(-2rem);\r\n      }\r\n      &:nth-child(2) {\r\n        transform: translateX(3rem);\r\n      }\r\n      &:nth-child(3) {\r\n        display: flex;\r\n        flex-direction: row;\r\n        transform: translateX(3rem);\r\n        span {\r\n          margin-left: 20px;\r\n        }\r\n      }\r\n      span {\r\n        color: #0d8d00;\r\n      }\r\n    }\r\n    p {\r\n      font-size: 2rem;\r\n      position: relative;\r\n      &::before {\r\n        content: '';\r\n        position: absolute;\r\n        width: 100px;\r\n        height: 2px;\r\n        background-color: white;\r\n        left: -100px;\r\n        top: calc(50% - 2px);\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "069245a78622ba213556"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sVUFBVSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFB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eUZ1bmMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvZm9udC9HaW5nZXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvb3Blbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrbzp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbi8qIFJlc3BvbnNpdmUgVHlwb2dyYXBoeSAqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgNiAqICgxMDB2dyAtIDMyMHB4KSAvIDY4MCk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG59XFxuLyogZmluaXNoIHJlc3BvbnNpdmUgdHlwb2dyYXBoeSAqL1xcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlRla29cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXG59XFxuXFxuLyogbG9nbyAqL1xcbi5oZWFkZXIge1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGNvbG9yIGVhc2UtaW4tb3V0O1xcbn1cXG4ubG9nbzpob3ZlciB7XFxuICBjb2xvcjogIzBkOGQwMDtcXG59XFxuXFxuLyogTWVudSAqL1xcbi5mdWxsUGFnZU1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxMTE7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51LmFjdGl2ZSB7XFxuICB0b3A6IC0xMDAlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzBkOGQwMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlcjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmhvdmVyIGEge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubWVudUljb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXG59XFxuXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5iYW5uZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4vKiBmaW5pc2ggbWVudSAqL1xcbi8qIGhlcm8gc2VjdGlvbiAqL1xcbi5oZXJvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgbWFyZ2luOiAwIDJyZW07XFxufVxcbi5oZXJvIGRpdiB7XFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxufVxcbi5oZXJvIGRpdiBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxuICBjb2xvcjogIzBkOGQwMDtcXG59XFxuLmhlcm8gcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcXG4gIC5oZXJvIHtcXG4gICAgbWFyZ2luOiAwIDJyZW07XFxuICB9XFxuICAuaGVybyBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuaGVybyBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcXG4gIH1cXG4gIC5oZXJvIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3JlbSk7XFxuICB9XFxuICAuaGVybyBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNyZW0pO1xcbiAgfVxcbiAgLmhlcm8gZGl2Om50aC1jaGlsZCgzKSBzcGFuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICB9XFxuICAuaGVybyBkaXYgc3BhbiB7XFxuICAgIGNvbG9yOiAjMGQ4ZDAwO1xcbiAgfVxcbiAgLmhlcm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgLmhlcm8gcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGxlZnQ6IC0xMDBweDtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Njc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtB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QTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7RUFxQk47RUFwQk07SUFDRSxpQkFBQTtFQXNCUjtFQW5CSTtJQUNFLGNBQUE7RUFxQk47RUFsQkU7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFvQko7RUFuQkk7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VBcUJOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gIHNyYzogdXJsKCcvZm9udC9HaW5nZXIud29mZicpO1xcclxcbn1cXHJcXG4vKiBSZXNwb25zaXZlIFR5cG9ncmFwaHkgKi9cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDYgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogZmluaXNoIHJlc3BvbnNpdmUgdHlwb2dyYXBoeSAqL1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1Rla28nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG59XFxyXFxuLyogbG9nbyAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgbWluLWhlaWdodDogMTAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICB0cmFuc2l0aW9uOiAuNXMgY29sb3IgZWFzZS1pbi1vdXQ7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICMwZDhkMDA7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIE1lbnUgKi9cXHJcXG4uZnVsbFBhZ2VNZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTExO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudS5hY3RpdmUge1xcclxcbiAgdG9wOiAtMTAwJTtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAuYmFubmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAuYmFubmVyIGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICMwZDhkMDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXI6YmVmb3JlIHtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiA0ZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogLTEwMCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlciBhIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLm1lbnVJY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2Nsb3NlLnN2Zyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXHJcXG59XFxyXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9vcGVuLnN2Zyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXHJcXG59XFxyXFxuQG1lZGlhKG1heC13aWR0aDo5OTFweCkge1xcclxcbiAgLmJhbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIGZpbmlzaCBtZW51ICovXFxyXFxuLyogaGVybyBzZWN0aW9uICovXFxyXFxuLmhlcm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBtYXJnaW46IDAgMnJlbTtcXHJcXG4gIGRpdiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gICAgICBjb2xvcjogIzBkOGQwMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XFxyXFxuICAuaGVybyB7XFxyXFxuICAgIG1hcmdpbjogMCAycmVtO1xcclxcblxcclxcbiAgICBkaXYge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3JlbSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNyZW0pO1xcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICBzcGFuIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjMGQ4ZDAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBwIHtcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBsZWZ0OiAtMTAwcHg7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIwNjkyNDVhNzg2MjJiYTIxMzU1NlwiOyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9