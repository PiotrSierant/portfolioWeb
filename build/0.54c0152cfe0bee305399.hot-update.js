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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Ginger;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n/* Responsive Typography */\nhtml {\n  font-size: 16px;\n}\n\n@media screen and (min-width: 320px) {\n  html {\n    font-size: calc(16px + 6 * (100vw - 320px) / 680);\n  }\n}\n@media screen and (min-width: 1000px) {\n  html {\n    font-size: 22px;\n  }\n}\n/* finish responsive typography */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #111;\n}\n\n.container {\n  min-width: 320px;\n  max-width: 1340px;\n  width: 100%;\n  padding: 0 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n/* logo */\n.header {\n  min-height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  display: inline-block;\n  font-size: 30px;\n  font-family: Ginger;\n  margin-left: 2rem;\n  color: whitesmoke;\n  transition: 0.5s color ease-in-out;\n}\n.logo:hover {\n  color: #0d8d00;\n}\n\n/* Menu */\n.fullPageMenu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #111;\n  transition: 0.5s;\n  z-index: 999;\n}\n\n.fullPageMenu.active {\n  top: -100%;\n}\n\n.fullPageMenu .banner {\n  position: relative;\n  width: 600px;\n  height: 100%;\n}\n\n.fullPageMenu .banner img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.fullPageMenu .nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.fullPageMenu .nav ul {\n  position: relative;\n}\n\n.fullPageMenu .nav ul li {\n  position: relative;\n  list-style: none;\n  padding: 0 20px;\n  margin: 5px 0;\n  overflow: hidden;\n  display: table;\n}\n\n.fullPageMenu .nav ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #0d8d00;\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\n\n.fullPageMenu .nav ul li:hover:before {\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(1);\n  transform-origin: top;\n}\n\n.fullPageMenu .nav ul li a {\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  font-size: 3em;\n  font-weight: 700;\n  line-height: 1em;\n  display: inline-block;\n  text-transform: uppercase;\n  transition: 0.5s ease-in-out;\n}\n\n.fullPageMenu .nav ul li a::before {\n  content: attr(data-text);\n  position: absolute;\n  bottom: -100%;\n  left: 0;\n  color: #fff;\n}\n\n.fullPageMenu .nav ul li:hover a {\n  transform: translateY(-100%);\n  color: #fff;\n}\n\n.menuIcon {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 40px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: 10px;\n  z-index: 9999;\n}\n\n.menuIcon.active {\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 40px;\n  background-repeat: no-repeat;\n  background-position: 10px;\n  z-index: 9999;\n}\n\n@media (max-width: 991px) {\n  .banner {\n    display: none;\n  }\n}\n@media screen and (min-width: 991px) {\n  .fullPageMenu .nav ul li a {\n    font-size: 5em;\n  }\n}\n/* finish menu */\n/* hero section */\n.hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: whitesmoke;\n  flex-direction: column;\n  flex-flow: column nowrap;\n  margin-top: 2rem;\n}\n.hero p {\n  font-family: Ginger;\n  font-size: 2.5rem;\n}\n.hero p span {\n  font-family: Ginger;\n  color: #0d8d00;\n}\n.hero p:last-of-type {\n  font-family: unset;\n  font-size: 1rem;\n  font-weight: 100;\n}\n\n@media screen and (min-width: 500px) {\n  .fullPageMenu .nav ul li a {\n    font-size: 4em;\n  }\n  .hero p {\n    font-size: 3rem;\n  }\n}", "",{"version":3,"sources":["webpack://./scss/main.scss"],"names":[],"mappings":"AAEA;EACE,mBAAA;EACA,4CAAA;AACF;AACA,0BAAA;AACA;EACE,eAAA;AACF;;AACA;EACE;IACE,iDAAA;EAEF;AACF;AAAA;EACE;IACE,eAAA;EAEF;AACF;AAAA,iCAAA;AACA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;EACA,kCAAA;AAEF;;AAAA;EACE,iBAAA;EACA,sBAAA;AAGF;;AADA;EACE,gBAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,sBAAA;AAIF;;AAFA,SAAA;AACA;EACE,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAKF;;AAHA;EACE,qBAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kCAAA;AAMF;AALE;EACE,cAAA;AAOJ;;AAJA,SAAA;AACA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;AAOF;;AALA;EACE,UAAA;AAQF;;AANA;EACE,kBAAA;EACA,YAAA;EACA,YAAA;AASF;;AAPA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAUF;;AARA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAWF;;AATA;EACE,kBAAA;AAYF;;AAVA;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;AAaF;;AAXA;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,sCAAA;EACA,oBAAA;EACA,wBAAA;AAcF;;AAZA;EACE,sCAAA;EACA,oBAAA;EACA,qBAAA;AAeF;;AAbA;EACE,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,4BAAA;AAgBF;;AAdA;EACE,wBAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,WAAA;AAiBF;;AAfA;EACE,4BAAA;EACA,WAAA;AAkBF;;AAhBA;EACE,eAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,mDAAA;EACA,qBAAA;EACA,eAAA;EACA,4BAAA;EACA,yBAAA;EACA,aAAA;AAmBF;;AAjBA;EACE,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,mDAAA;EACA,qBAAA;EACA,4BAAA;EACA,yBAAA;EACA,aAAA;AAoBF;;AAlBA;EACE;IACE,aAAA;EAqBF;AACF;AAnBA;EACE;IACE,cAAA;EAqBF;AACF;AAnBA,gBAAA;AACA,iBAAA;AACA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,sBAAA;EACA,wBAAA;EACA,gBAAA;AAqBF;AApBE;EACE,mBAAA;EACA,iBAAA;AAsBJ;AArBI;EACE,mBAAA;EACA,cAAA;AAuBN;AArBE;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;AAuBJ;;AAlBA;EACE;IACE,cAAA;EAqBF;EAnBA;IACE,eAAA;EAqBF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');\r\n@font-face {\r\n  font-family: Ginger;\r\n  src: url('/font/Ginger.woff');\r\n}\r\n/* Responsive Typography */\r\nhtml {\r\n  font-size: 16px;\r\n}\r\n@media screen and (min-width: 320px) {\r\n  html {\r\n    font-size: calc(16px + 6 * ((100vw - 320px) / 680));\r\n  }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  html {\r\n    font-size: 22px;\r\n  }\r\n}\r\n/* finish responsive typography */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: #111;\r\n}\r\n.container {\r\n  min-width: 320px;\r\n  max-width: 1340px;\r\n  width: 100%;\r\n  padding: 0 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n}\r\n/* logo */\r\n.header {\r\n  min-height: 100px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.logo {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-family: Ginger;\r\n  margin-left: 2rem;\r\n  color: whitesmoke;\r\n  transition: .5s color ease-in-out;\r\n  &:hover {\r\n    color: #0d8d00;\r\n  }\r\n}\r\n/* Menu */\r\n.fullPageMenu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #111;\r\n  transition: 0.5s;\r\n  z-index: 999;\r\n}\r\n.fullPageMenu.active {\r\n  top: -100%;\r\n}\r\n.fullPageMenu .banner {\r\n  position: relative;\r\n  width: 600px;\r\n  height: 100%;\r\n}\r\n.fullPageMenu .banner img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.fullPageMenu .nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n.fullPageMenu .nav ul {\r\n  position: relative;\r\n}\r\n.fullPageMenu .nav ul li {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 0 20px;\r\n  margin: 5px 0;\r\n  overflow: hidden;\r\n  display: table;\r\n}\r\n.fullPageMenu .nav ul li:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #0d8d00;\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(0);\r\n  transform-origin: bottom;\r\n}\r\n.fullPageMenu .nav ul li:hover:before {\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(1);\r\n  transform-origin: top;\r\n}\r\n.fullPageMenu .nav ul li a {\r\n  position: relative;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 3em;\r\n  font-weight: 700;\r\n  line-height: 1em;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fullPageMenu .nav ul li a::before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  bottom: -100%;\r\n  left: 0;\r\n  color: #fff;\r\n}\r\n.fullPageMenu .nav ul li:hover a {\r\n  transform: translateY(-100%);\r\n  color: #fff;\r\n}\r\n.menuIcon {\r\n  position: fixed;\r\n  top: 20px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: url(../images/close.svg);\r\n  background-size: 40px;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n  z-index: 9999;\r\n}\r\n.menuIcon.active {\r\n  top: 20px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: url(../images/open.svg);\r\n  background-size: 40px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n  z-index: 9999;\r\n}\r\n@media(max-width:991px) {\r\n  .banner {\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (min-width: 991px) {\r\n  .fullPageMenu .nav ul li a {\r\n    font-size: 5em;\r\n  }\r\n}\r\n/* finish menu */\r\n/* hero section */\r\n.hero {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: whitesmoke;\r\n  flex-direction: column;\r\n  flex-flow: column nowrap;\r\n  margin-top: 2rem;\r\n  p {\r\n    font-family: Ginger;\r\n    font-size: 2.5rem;\r\n    span {\r\n      font-family: Ginger;\r\n      color: #0d8d00;\r\n    }\r\n  &:last-of-type {\r\n    font-family: unset;\r\n    font-size: 1rem;\r\n    font-weight: 100;\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px){\r\n  .fullPageMenu .nav ul li a {\r\n    font-size: 4em;\r\n  }\r\n  .hero p {\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\n//p {\r\n//  font-family: Ginger;\r\n//  width: 100%;\r\n//  font-size: 2.5rem;\r\n//  line-height: 2.5rem;\r\n//  span {\r\n//    font-family: Ginger;\r\n//    color: #0d8d00;\r\n//  }\r\n//}\r\n//p {\r\n//  font-size: 1.5rem;\r\n//}\r\n//p {\r\n//  font-size: 1.5rem;\r\n//  position: relative;\r\n//  &::before {\r\n//    content: '';\r\n//    position: absolute;\r\n//    width: 60px;\r\n//    height: 2px;\r\n//    background-color: white;\r\n//    left: -70px;\r\n//    top: calc(50% - 2px);\r\n//  }\r\n//  &::after {\r\n//    content: '';\r\n//    position: absolute;\r\n//    width: 60px;\r\n//    height: 2px;\r\n//    background-color: white;\r\n//    right: -70px;\r\n//    top: calc(50% - 2px);\r\n//  }\r\n//}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a92526f41504ac59b54e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sVUFBVSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sdUdBQXVHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLHdFQUF3RSxJQUFJLElBQUksbUJBQW1CLGdCQUFnQiwwQkFBMEIsb0NBQW9DLEtBQUsseUNBQXlDLHNCQUFzQixLQUFLLDBDQUEwQyxZQUFZLDREQUE0RCxPQUFPLEtBQUssMkNBQTJDLFlBQVksd0JBQXdCLE9BQU8sS0FBSyw2Q0FBNkMsaUJBQWlCLGdCQUFnQiw2QkFBNkIseUNBQXlDLEtBQUssVUFBVSx3QkFBd0IsNkJBQTZCLEtBQUssZ0JBQWdCLHVCQUF1Qix3QkFBd0Isa0JBQWtCLHNCQUFzQixvQkFBb0IsOEJBQThCLDhCQUE4Qiw2QkFBNkIsS0FBSywyQkFBMkIsd0JBQXdCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssV0FBVyw0QkFBNEIsc0JBQXNCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdDQUF3QyxlQUFlLHVCQUF1QixPQUFPLEtBQUssaUNBQWlDLHNCQUFzQixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQix1QkFBdUIsdUJBQXVCLG1CQUFtQixLQUFLLDBCQUEwQixpQkFBaUIsS0FBSywyQkFBMkIseUJBQXlCLG1CQUFtQixtQkFBbUIsS0FBSywrQkFBK0IseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLHdCQUF3QixLQUFLLHdCQUF3QixvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0IsbUJBQW1CLHVCQUF1QixLQUFLLDJCQUEyQix5QkFBeUIsS0FBSyw4QkFBOEIseUJBQXlCLHVCQUF1QixzQkFBc0Isb0JBQW9CLHVCQUF1QixxQkFBcUIsS0FBSyxxQ0FBcUMsb0JBQW9CLHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQiwwQkFBMEIsNkNBQTZDLDJCQUEyQiwrQkFBK0IsS0FBSywyQ0FBMkMsNkNBQTZDLDJCQUEyQiw0QkFBNEIsS0FBSyxnQ0FBZ0MseUJBQXlCLGtCQUFrQiw0QkFBNEIscUJBQXFCLHVCQUF1Qix1QkFBdUIsNEJBQTRCLGdDQUFnQyxtQ0FBbUMsS0FBSyx3Q0FBd0MsK0JBQStCLHlCQUF5QixvQkFBb0IsY0FBYyxrQkFBa0IsS0FBSyxzQ0FBc0MsbUNBQW1DLGtCQUFrQixLQUFLLGVBQWUsc0JBQXNCLGdCQUFnQixrQkFBa0Isa0JBQWtCLG1CQUFtQiwyQ0FBMkMsNEJBQTRCLHNCQUFzQixtQ0FBbUMsZ0NBQWdDLG9CQUFvQixLQUFLLHNCQUFzQixnQkFBZ0Isa0JBQWtCLGtCQUFrQixtQkFBbUIsMENBQTBDLDRCQUE0QixtQ0FBbUMsZ0NBQWdDLG9CQUFvQixLQUFLLDZCQUE2QixlQUFlLHNCQUFzQixPQUFPLEtBQUssMENBQTBDLGtDQUFrQyx1QkFBdUIsT0FBTyxLQUFLLHNEQUFzRCxvQkFBb0IsOEJBQThCLDBCQUEwQix3QkFBd0IsNkJBQTZCLCtCQUErQix1QkFBdUIsU0FBUyw0QkFBNEIsMEJBQTBCLGNBQWMsOEJBQThCLHlCQUF5QixTQUFTLHNCQUFzQiwyQkFBMkIsd0JBQXdCLHlCQUF5QixTQUFTLE9BQU8sS0FBSyw2Q0FBNkMsa0NBQWtDLHVCQUF1QixPQUFPLGVBQWUsd0JBQXdCLE9BQU8sS0FBSyxhQUFhLDRCQUE0QixvQkFBb0IsMEJBQTBCLDRCQUE0QixjQUFjLDhCQUE4Qix5QkFBeUIsU0FBUyxPQUFPLFNBQVMsMEJBQTBCLE9BQU8sU0FBUywwQkFBMEIsMkJBQTJCLG1CQUFtQixzQkFBc0IsNkJBQTZCLHNCQUFzQixzQkFBc0Isa0NBQWtDLHNCQUFzQiwrQkFBK0IsU0FBUyxrQkFBa0Isc0JBQXNCLDZCQUE2QixzQkFBc0Isc0JBQXNCLGtDQUFrQyx1QkFBdUIsK0JBQStCLFNBQVMsT0FBTyxtQkFBbUI7QUFDcDNXO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQ2hCdkMscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlGdW5jLy4vc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vTXlGdW5jL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2ZvbnQvR2luZ2VyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2xvc2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL29wZW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuLyogUmVzcG9uc2l2ZSBUeXBvZ3JhcGh5ICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE2cHggKyA2ICogKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgfVxcbn1cXG4vKiBmaW5pc2ggcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5ICovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxuICBtYXgtd2lkdGg6IDEzNDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBsb2dvICovXFxuLmhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgY29sb3IgZWFzZS1pbi1vdXQ7XFxufVxcbi5sb2dvOmhvdmVyIHtcXG4gIGNvbG9yOiAjMGQ4ZDAwO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuLmZ1bGxQYWdlTWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzExMTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUuYWN0aXZlIHtcXG4gIHRvcDogLTEwMCU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjMGQ4ZDAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmhvdmVyOmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGE6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMDAlO1xcbiAgbGVmdDogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXIgYSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tZW51SWNvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuYmFubmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcXG4gIC5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhIHtcXG4gICAgZm9udC1zaXplOiA1ZW07XFxuICB9XFxufVxcbi8qIGZpbmlzaCBtZW51ICovXFxuLyogaGVybyBzZWN0aW9uICovXFxuLmhlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcbi5oZXJvIHAge1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG4uaGVybyBwIHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG4gIGNvbG9yOiAjMGQ4ZDAwO1xcbn1cXG4uaGVybyBwOmxhc3Qtb2YtdHlwZSB7XFxuICBmb250LWZhbWlseTogdW5zZXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gIH1cXG4gIC5oZXJvIHAge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Njc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtBQUNGO0FBQ0EsMEJBQUE7QUFDQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsaURBQUE7RUFFRjtBQUNGO0FBQUE7RUFDRTtJQUNFLGVBQUE7RUFFRjtBQUNGO0FBQUEsaUNBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUlGOztBQUZBLFNBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FBTUY7QUFMRTtFQUNFLGNBQUE7QUFPSjs7QUFKQSxTQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFPRjs7QUFMQTtFQUNFLFVBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFTRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFhRjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQWNGOztBQVpBO0VBQ0Usc0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBZUY7O0FBYkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBZ0JGOztBQWRBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQWlCRjs7QUFmQTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtBQWtCRjs7QUFoQkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFtQkY7O0FBakJBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQW9CRjs7QUFsQkE7RUFDRTtJQUNFLGFBQUE7RUFxQkY7QUFDRjtBQW5CQTtFQUNFO0lBQ0UsY0FBQTtFQXFCRjtBQUNGO0FBbkJBLGdCQUFBO0FBQ0EsaUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFxQkY7QUFwQkU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBc0JKO0FBckJJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBdUJOO0FBckJFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF1Qko7O0FBbEJBO0VBQ0U7SUFDRSxjQUFBO0VBcUJGO0VBbkJBO0lBQ0UsZUFBQTtFQXFCRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcclxcbiAgc3JjOiB1cmwoJy9mb250L0dpbmdlci53b2ZmJyk7XFxyXFxufVxcclxcbi8qIFJlc3BvbnNpdmUgVHlwb2dyYXBoeSAqL1xcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgNiAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4vKiBmaW5pc2ggcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5ICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDEzNDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4vKiBsb2dvICovXFxyXFxuLmhlYWRlciB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIHRyYW5zaXRpb246IC41cyBjb2xvciBlYXNlLWluLW91dDtcXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzBkOGQwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogTWVudSAqL1xcclxcbi5mdWxsUGFnZU1lbnUge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICMxMTE7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51LmFjdGl2ZSB7XFxyXFxuICB0b3A6IC0xMDAlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIgaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogIzBkOGQwMDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMWVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmhvdmVyIGEge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4ubWVudUljb24ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvY2xvc2Uuc3ZnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9vcGVuLnN2Zyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcbkBtZWRpYShtYXgtd2lkdGg6OTkxcHgpIHtcXHJcXG4gIC5iYW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xcclxcbiAgLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcclxcbiAgICBmb250LXNpemU6IDVlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogZmluaXNoIG1lbnUgKi9cXHJcXG4vKiBoZXJvIHNlY3Rpb24gKi9cXHJcXG4uaGVybyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIHAge1xcclxcbiAgICBmb250LWZhbWlseTogR2luZ2VyO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gICAgICBjb2xvcjogIzBkOGQwMDtcXHJcXG4gICAgfVxcclxcbiAgJjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBmb250LWZhbWlseTogdW5zZXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XFxyXFxuICAuZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcclxcbiAgfVxcclxcbiAgLmhlcm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy9wIHtcXHJcXG4vLyAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4vLyAgd2lkdGg6IDEwMCU7XFxyXFxuLy8gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbi8vICBsaW5lLWhlaWdodDogMi41cmVtO1xcclxcbi8vICBzcGFuIHtcXHJcXG4vLyAgICBmb250LWZhbWlseTogR2luZ2VyO1xcclxcbi8vICAgIGNvbG9yOiAjMGQ4ZDAwO1xcclxcbi8vICB9XFxyXFxuLy99XFxyXFxuLy9wIHtcXHJcXG4vLyAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuLy99XFxyXFxuLy9wIHtcXHJcXG4vLyAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuLy8gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4vLyAgJjo6YmVmb3JlIHtcXHJcXG4vLyAgICBjb250ZW50OiAnJztcXHJcXG4vLyAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuLy8gICAgd2lkdGg6IDYwcHg7XFxyXFxuLy8gICAgaGVpZ2h0OiAycHg7XFxyXFxuLy8gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuLy8gICAgbGVmdDogLTcwcHg7XFxyXFxuLy8gICAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XFxyXFxuLy8gIH1cXHJcXG4vLyAgJjo6YWZ0ZXIge1xcclxcbi8vICAgIGNvbnRlbnQ6ICcnO1xcclxcbi8vICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4vLyAgICB3aWR0aDogNjBweDtcXHJcXG4vLyAgICBoZWlnaHQ6IDJweDtcXHJcXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4vLyAgICByaWdodDogLTcwcHg7XFxyXFxuLy8gICAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XFxyXFxuLy8gIH1cXHJcXG4vL31cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImE5MjUyNmY0MTUwNGFjNTliNTRlXCI7IH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=