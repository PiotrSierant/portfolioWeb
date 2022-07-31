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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Ginger;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n/* Responsive Typography */\n.light {\n  --background: whitesmoke;\n}\n\n.dark {\n  --background: #111;\n}\n\n.toggle {\n  position: relative;\n  margin-bottom: 24px;\n  user-select: none;\n}\n\n.content:hover .toggle-icon {\n  animation: wiggle 1s linear;\n}\n\n.toggle-icon {\n  width: 28px;\n  user-select: none;\n}\n\n.toggle-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  user-select: none;\n}\n\n.toggle-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 3px solid var(--text-main);\n  padding: 4px;\n  border-radius: 50px;\n  width: 100px;\n  margin: 0 auto;\n  background-color: var(--text-bg);\n  transition: all 0.3s ease;\n  user-select: none;\n}\n\n.toggle-label:hover {\n  background-color: var(--shadow);\n}\n\n.toggle-label:active {\n  transform: scale(0.95);\n}\n\n.transparency {\n  opacity: 1;\n  transition: all 0.1s ease;\n}\n\n.transparency:hover {\n  opacity: 0.7;\n}\n\nhtml {\n  font-size: 16px;\n  overflow-x: hidden;\n}\n\n@media screen and (min-width: 320px) {\n  html {\n    font-size: calc(16px + 6 * (100vw - 320px) / 680);\n  }\n}\n@media screen and (min-width: 1000px) {\n  html {\n    font-size: 22px;\n  }\n}\n@media screen and (min-width: 1366px) {\n  html {\n    font-size: 25px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  html {\n    font-size: 30px;\n  }\n}\n/* Track */\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: whitesmoke;\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #a6a6a6;\n}\n\n/* finish responsive typography */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: unset;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: var(--background);\n}\n\n.container {\n  min-width: 320px;\n  max-width: 1340px;\n  width: 100%;\n  padding: 0 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n/* logo */\n.header {\n  box-sizing: content-box;\n  min-height: 80px;\n  width: 100%;\n  position: sticky;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 99;\n  transition: 0.5s background-color ease-in-out;\n}\n\n.headerBackgroundScroll {\n  background-color: rgba(0, 0, 0, 0.3);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.logo {\n  display: inline-block;\n  font-size: 30px;\n  font-family: Ginger;\n  margin-left: 2rem;\n  color: whitesmoke;\n  transition: 0.5s color ease-in-out;\n}\n.logo:hover {\n  color: #0d8d00;\n}\n\n/* Menu */\n.fullPageMenu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: --background;\n  transition: 0.5s;\n  z-index: 999;\n}\n\n.fullPageMenu.active {\n  top: -100%;\n}\n\n.fullPageMenu .banner {\n  position: relative;\n  width: 600px;\n  height: 100%;\n}\n\n.fullPageMenu .banner img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.fullPageMenu .nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.fullPageMenu .nav ul {\n  position: relative;\n}\n\n.fullPageMenu .nav ul li {\n  position: relative;\n  list-style: none;\n  padding: 0 20px;\n  margin: 5px 0;\n  overflow: hidden;\n  display: table;\n}\n\n.fullPageMenu .nav ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #0d8d00;\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\n\n.fullPageMenu .nav ul li:hover:before {\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(1);\n  transform-origin: top;\n}\n\n.fullPageMenu .nav ul li a {\n  position: relative;\n  color: whitesmoke;\n  text-decoration: none;\n  font-size: 3em;\n  font-weight: 700;\n  line-height: 1em;\n  display: inline-block;\n  text-transform: uppercase;\n  transition: 0.5s ease-in-out;\n}\n\n.fullPageMenu .nav ul li a::before {\n  content: attr(data-text);\n  position: absolute;\n  bottom: -100%;\n  left: 0;\n  color: whitesmoke;\n}\n\n.fullPageMenu .nav ul li:hover a {\n  transform: translateY(-100%);\n  color: whitesmoke;\n}\n\n.menuIcon {\n  position: fixed;\n  top: 10px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 40px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: 10px;\n  z-index: 9999;\n}\n\n.menuIcon.active {\n  top: 10px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 40px;\n  background-repeat: no-repeat;\n  background-position: 10px;\n  z-index: 9999;\n}\n\n/* finish menu */\n/* hero section */\n.hero {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: whitesmoke;\n  flex-direction: column;\n  flex-flow: column nowrap;\n  min-height: auto;\n  height: calc(100vh - 80px);\n}\n.hero p {\n  font-family: Ginger;\n  font-size: 2.5rem;\n}\n.hero p span {\n  font-family: Ginger;\n  color: #0d8d00;\n}\n.hero p:last-of-type {\n  font-family: unset;\n  font-size: 1rem;\n  font-weight: 100;\n}\n\n@media screen and (min-width: 500px) {\n  .fullPageMenu .nav ul li a {\n    font-size: 4em;\n  }\n  .hero p {\n    font-size: 3rem;\n  }\n  .hero p:last-of-type {\n    position: relative;\n  }\n  .hero p:last-of-type::before {\n    content: \"\";\n    position: absolute;\n    width: 30px;\n    height: 1px;\n    background-color: whitesmoke;\n    left: -40px;\n    top: calc(50% - 2px);\n  }\n  .hero p:last-of-type::after {\n    content: \"\";\n    position: absolute;\n    width: 30px;\n    height: 1px;\n    background-color: whitesmoke;\n    right: -40px;\n    top: calc(50% - 2px);\n  }\n  .hero .container {\n    align-items: center;\n  }\n  .hero .container p:nth-child(1) {\n    transform: translateX(-4rem);\n  }\n  .hero .container p:nth-child(3) {\n    transform: translateX(6rem);\n  }\n}\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@-moz-keyframes pulse {\n  0% {\n    -moz-transform: scale(1);\n    transform: scale(1);\n  }\n  50% {\n    -moz-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    -moz-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@media screen and (min-width: 670px) {\n  .hero p {\n    font-size: 4rem;\n  }\n  .hero .container {\n    align-items: center;\n  }\n  .hero .container p:nth-child(1) {\n    transform: translateX(-6rem);\n  }\n  .hero .container p:nth-child(3) {\n    transform: translateX(8rem);\n  }\n}\n@media (max-width: 991px) {\n  .banner {\n    display: none;\n  }\n}\n@media screen and (min-width: 991px) {\n  .fullPageMenu .nav ul li a {\n    font-size: 5em;\n  }\n  .hero .container {\n    align-items: center;\n  }\n  .hero .container p:nth-child(1) {\n    transform: translateX(-8rem);\n  }\n  .hero .container p:nth-child(3) {\n    transform: translateX(10rem);\n  }\n}\n@media screen and (min-width: 1024px) {\n  .hero p {\n    font-size: 5rem;\n  }\n}\n@media screen and (min-width: 1600px) {\n  .hero {\n    justify-content: center;\n  }\n  .hero p {\n    line-height: 4.5rem;\n  }\n}\n@media screen and (min-width: 1900px) {\n  .hero p {\n    font-size: 5.7rem;\n    line-height: 5rem;\n  }\n}\n.newSection {\n  height: 100vh;\n}", "",{"version":3,"sources":["webpack://./scss/main.scss","webpack://./scss/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"variables\";\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');\r\n@font-face {\r\n  font-family: Ginger;\r\n  src: url('/font/Ginger.woff');\r\n}\r\n/* Responsive Typography */\r\n.light {\r\n  --background: whitesmoke;\r\n  $scrollNav: rgba(0,0,0,0.3);\r\n  $scrollNavBottom: rgba(255,255,255, .3);\r\n  $navColorLink: #111;\r\n  $logo: #111;\r\n  $primaryColor: orangered;\r\n  $fontColor: #111;\r\n}\r\n.dark {\r\n  --background: #111;\r\n  $scrollNav: rgba(0,0,0,0.3);\r\n  $scrollNavBottom: rgba(255,255,255, .3);\r\n  $navColorLink: whitesmoke;\r\n  $logo: whitesmoke;\r\n  $primaryColor: #0d8d00;\r\n  $fontColor: whitesmoke;\r\n}\r\n\r\n.toggle {\r\n  position: relative;\r\n  margin-bottom: 24px;\r\n  user-select: none;\r\n}\r\n\r\n.content:hover .toggle-icon {\r\n  animation: wiggle 1s linear;\r\n}\r\n\r\n.toggle-icon {\r\n  width: 28px;\r\n  user-select: none;\r\n}\r\n\r\n.toggle-input {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n  user-select: none;\r\n}\r\n\r\n.toggle-label {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  border: 3px solid var(--text-main);\r\n  padding: 4px;\r\n  border-radius: 50px;\r\n  width: 100px;\r\n  margin: 0 auto;\r\n  background-color: var(--text-bg);\r\n  transition: all 0.3s ease;\r\n  user-select: none;\r\n}\r\n\r\n.toggle-label:hover {\r\n  background-color: var(--shadow);\r\n}\r\n\r\n.toggle-label:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.transparency {\r\n  opacity: 1;\r\n  transition: all 0.1s ease;\r\n}\r\n\r\n.transparency:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nhtml {\r\n  font-size: 16px;\r\n  overflow-x: hidden;\r\n}\r\n@media screen and (min-width: 320px) {\r\n  html {\r\n    font-size: calc(16px + 6 * ((100vw - 320px) / 680));\r\n  }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  html {\r\n    font-size: 22px;\r\n  }\r\n}\r\n@media screen and (min-width: 1366px) {\r\n  html {\r\n    font-size: 25px;\r\n  }\r\n}\r\n@media screen and (min-width: 1600px) {\r\n  html {\r\n    font-size: 30px;\r\n  }\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 10px;\r\n}\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: whitesmoke;\r\n  border-radius: 10px;\r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #a6a6a6;\r\n}\r\n/* finish responsive typography */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: unset;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: var(--background);\r\n}\r\n.container {\r\n  min-width: 320px;\r\n  max-width: 1340px;\r\n  width: 100%;\r\n  padding: 0 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n}\r\n/* logo */\r\n.header {\r\n  box-sizing: content-box;\r\n  min-height: 80px;\r\n  width: 100%;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  z-index: 99;\r\n  transition: .5s background-color ease-in-out;\r\n}\r\n.headerBackgroundScroll {\r\n   background-color: $scrollNav;\r\n   border-bottom: 1px solid $scrollNavBottom;\r\n}\r\n.logo {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-family: Ginger;\r\n  margin-left: 2rem;\r\n  color: $logo;\r\n  transition: .5s color ease-in-out;\r\n  &:hover {\r\n    color: $primaryColor;\r\n  }\r\n}\r\n/* Menu */\r\n.fullPageMenu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: --background;\r\n  transition: 0.5s;\r\n  z-index: 999;\r\n}\r\n.fullPageMenu.active {\r\n  top: -100%;\r\n}\r\n.fullPageMenu .banner {\r\n  position: relative;\r\n  width: 600px;\r\n  height: 100%;\r\n}\r\n.fullPageMenu .banner img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.fullPageMenu .nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n.fullPageMenu .nav ul {\r\n  position: relative;\r\n}\r\n.fullPageMenu .nav ul li {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 0 20px;\r\n  margin: 5px 0;\r\n  overflow: hidden;\r\n  display: table;\r\n}\r\n.fullPageMenu .nav ul li:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: $primaryColor;\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(0);\r\n  transform-origin: bottom;\r\n}\r\n.fullPageMenu .nav ul li:hover:before {\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(1);\r\n  transform-origin: top;\r\n}\r\n.fullPageMenu .nav ul li a {\r\n  position: relative;\r\n  color: $navColorLink;\r\n  text-decoration: none;\r\n  font-size: 3em;\r\n  font-weight: 700;\r\n  line-height: 1em;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fullPageMenu .nav ul li a::before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  bottom: -100%;\r\n  left: 0;\r\n  color: $navColorLink;\r\n}\r\n.fullPageMenu .nav ul li:hover a {\r\n  transform: translateY(-100%);\r\n  color: $navColorLink;\r\n}\r\n.menuIcon {\r\n  position: fixed;\r\n  top: 10px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: url(../images/close.svg);\r\n  background-size: 40px;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n  z-index: 9999;\r\n}\r\n.menuIcon.active {\r\n  top: 10px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: url(../images/open.svg);\r\n  background-size: 40px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n  z-index: 9999;\r\n}\r\n\r\n/* finish menu */\r\n/* hero section */\r\n.hero {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: $fontColor;\r\n  flex-direction: column;\r\n  flex-flow: column nowrap;\r\n  min-height: auto;\r\n  height: calc(100vh - 80px);\r\n  p {\r\n    font-family: Ginger;\r\n    font-size: 2.5rem;\r\n    span {\r\n      font-family: Ginger;\r\n      color: $primaryColor;\r\n    }\r\n  &:last-of-type {\r\n    font-family: unset;\r\n    font-size: 1rem;\r\n    font-weight: 100;\r\n    }\r\n  }\r\n}\r\n@media screen and (min-width: 500px){\r\n  .fullPageMenu .nav ul li a {\r\n    font-size: 4em;\r\n  }\r\n  .hero p {\r\n    font-size: 3rem;\r\n    &:last-of-type{\r\n      position: relative;\r\n      &::before {\r\n        content: '';\r\n        position: absolute;\r\n        width: 30px;\r\n        height: 1px;\r\n        background-color: $fontColor;\r\n        left: -40px;\r\n        top: calc(50% - 2px);\r\n      }\r\n      &::after {\r\n        content: '';\r\n        position: absolute;\r\n        width: 30px;\r\n        height: 1px;\r\n        background-color: $fontColor;\r\n        right: -40px;\r\n        top: calc(50% - 2px);\r\n      }\r\n    }\r\n  }\r\n  .hero .container {\r\n    align-items: center;\r\n    p:nth-child(1) {\r\n      transform: translateX(-4rem);\r\n    }\r\n    p:nth-child(3) {\r\n      transform: translateX(6rem);\r\n    }\r\n  }\r\n}\r\n@-webkit-keyframes pulse {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale(1.5);\r\n    transform: scale(1.5);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@-moz-keyframes pulse {\r\n  0% {\r\n    -moz-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    -moz-transform: scale(1.5);\r\n    transform: scale(1.5);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n@media screen and (min-width: 670px){\r\n  .hero p {\r\n    font-size: 4rem;\r\n  }\r\n  .hero .container {\r\n    align-items: center;\r\n    p:nth-child(1) {\r\n      transform: translateX(-6rem);\r\n    }\r\n    p:nth-child(3) {\r\n      transform: translateX(8rem);\r\n    }\r\n  }\r\n}\r\n@media(max-width:991px) {\r\n  .banner {\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (min-width: 991px) {\r\n  .fullPageMenu .nav ul li a {\r\n    font-size: 5em;\r\n  }\r\n  .hero .container {\r\n    align-items: center;\r\n    p:nth-child(1) {\r\n      transform: translateX(-8rem);\r\n    }\r\n    p:nth-child(3) {\r\n      transform: translateX(10rem);\r\n    }\r\n  }\r\n}\r\n@media screen and (min-width: 1024px){\r\n  .hero p {\r\n    font-size: 5rem;\r\n  }\r\n}\r\n@media screen and (min-width: 1600px){\r\n  .hero {\r\n    justify-content: center;\r\n  }\r\n  .hero p {\r\n    line-height: 4.5rem;\r\n  }\r\n}\r\n@media screen and (min-width: 1900px){\r\n  .hero p {\r\n    font-size: 5.7rem;\r\n    line-height: 5rem;\r\n  }\r\n}\r\n.newSection {\r\n  height: 100vh;\r\n}","//light mode\r\n$background: whitesmoke;\r\n//dark mode\r\n$background: #111;\r\n$scrollNav: rgba(0,0,0,0.3);\r\n$scrollNavBottom: rgba(255,255,255, .3);\r\n$navColorLink: whitesmoke;\r\n$logo: whitesmoke;\r\n$primaryColor: #0d8d00;\r\n$fontColor: whitesmoke;\r\n//change color"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 33:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 34:
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 32:
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      31,
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 35:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b988dc3e9cadb5c2fa89.woff";

/***/ }),

/***/ 36:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4deea48f41d8846811b6.svg";

/***/ }),

/***/ 37:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5359bd7507b1f6038da9.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b6b5ce7728908e13ca1f"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ !function() {
/******/ 	__webpack_require__.b = document.baseURI || self.location.href;
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 		0: 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	var currentUpdatedModulesList;
/******/ 	var waitingUpdateResolves = {};
/******/ 	function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 		currentUpdatedModulesList = updatedModulesList;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			waitingUpdateResolves[chunkId] = resolve;
/******/ 			// start update chunk loading
/******/ 			var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 			// create error before stack unwound to get useful stacktrace later
/******/ 			var error = new Error();
/******/ 			var loadingEnded = function(event) {
/******/ 				if(waitingUpdateResolves[chunkId]) {
/******/ 					waitingUpdateResolves[chunkId] = undefined
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realSrc = event && event.target && event.target.src;
/******/ 					error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 					error.name = 'ChunkLoadError';
/******/ 					error.type = errorType;
/******/ 					error.request = realSrc;
/******/ 					reject(error);
/******/ 				}
/******/ 			};
/******/ 			__webpack_require__.l(url, loadingEnded);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	self["webpackHotUpdateMyFunc"] = function(chunkId, moreModules, runtime) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				currentUpdate[moduleId] = moreModules[moduleId];
/******/ 				if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 			}
/******/ 		}
/******/ 		if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		if(waitingUpdateResolves[chunkId]) {
/******/ 			waitingUpdateResolves[chunkId]();
/******/ 			waitingUpdateResolves[chunkId] = undefined;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var currentUpdateChunks;
/******/ 	var currentUpdate;
/******/ 	var currentUpdateRemovedChunks;
/******/ 	var currentUpdateRuntime;
/******/ 	function applyHandler(options) {
/******/ 		if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 		currentUpdateChunks = undefined;
/******/ 		function getAffectedModuleEffects(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.map(function (id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				var module = __webpack_require__.c[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = __webpack_require__.c[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 			);
/******/ 		};
/******/ 	
/******/ 		for (var moduleId in currentUpdate) {
/******/ 			if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				var newModuleFactory = currentUpdate[moduleId];
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (newModuleFactory) {
/******/ 					result = getAffectedModuleEffects(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					return {
/******/ 						error: abortError
/******/ 					};
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = newModuleFactory;
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		currentUpdate = undefined;
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (var j = 0; j < outdatedModules.length; j++) {
/******/ 			var outdatedModuleId = outdatedModules[j];
/******/ 			var module = __webpack_require__.c[outdatedModuleId];
/******/ 			if (
/******/ 				module &&
/******/ 				(module.hot._selfAccepted || module.hot._main) &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!module.hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: outdatedModuleId,
/******/ 					require: module.hot._requireSelf,
/******/ 					errorHandler: module.hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		var moduleOutdatedDependencies;
/******/ 	
/******/ 		return {
/******/ 			dispose: function () {
/******/ 				currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 					delete installedChunks[chunkId];
/******/ 				});
/******/ 				currentUpdateRemovedChunks = undefined;
/******/ 	
/******/ 				var idx;
/******/ 				var queue = outdatedModules.slice();
/******/ 				while (queue.length > 0) {
/******/ 					var moduleId = queue.pop();
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (!module) continue;
/******/ 	
/******/ 					var data = {};
/******/ 	
/******/ 					// Call dispose handlers
/******/ 					var disposeHandlers = module.hot._disposeHandlers;
/******/ 					for (j = 0; j < disposeHandlers.length; j++) {
/******/ 						disposeHandlers[j].call(null, data);
/******/ 					}
/******/ 					__webpack_require__.hmrD[moduleId] = data;
/******/ 	
/******/ 					// disable module (this disables requires from this module)
/******/ 					module.hot.active = false;
/******/ 	
/******/ 					// remove module from cache
/******/ 					delete __webpack_require__.c[moduleId];
/******/ 	
/******/ 					// when disposing there is no need to call dispose handler
/******/ 					delete outdatedDependencies[moduleId];
/******/ 	
/******/ 					// remove "parents" references from all children
/******/ 					for (j = 0; j < module.children.length; j++) {
/******/ 						var child = __webpack_require__.c[module.children[j]];
/******/ 						if (!child) continue;
/******/ 						idx = child.parents.indexOf(moduleId);
/******/ 						if (idx >= 0) {
/******/ 							child.parents.splice(idx, 1);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// remove outdated dependency from module children
/******/ 				var dependency;
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								dependency = moduleOutdatedDependencies[j];
/******/ 								idx = module.children.indexOf(dependency);
/******/ 								if (idx >= 0) module.children.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 			apply: function (reportError) {
/******/ 				// insert new code
/******/ 				for (var updateModuleId in appliedUpdate) {
/******/ 					if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 						__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// run new runtime modules
/******/ 				for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 					currentUpdateRuntime[i](__webpack_require__);
/******/ 				}
/******/ 	
/******/ 				// call accept handlers
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						var module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							var callbacks = [];
/******/ 							var errorHandlers = [];
/******/ 							var dependenciesForCallbacks = [];
/******/ 							for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								var dependency = moduleOutdatedDependencies[j];
/******/ 								var acceptCallback =
/******/ 									module.hot._acceptedDependencies[dependency];
/******/ 								var errorHandler =
/******/ 									module.hot._acceptedErrorHandlers[dependency];
/******/ 								if (acceptCallback) {
/******/ 									if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 									callbacks.push(acceptCallback);
/******/ 									errorHandlers.push(errorHandler);
/******/ 									dependenciesForCallbacks.push(dependency);
/******/ 								}
/******/ 							}
/******/ 							for (var k = 0; k < callbacks.length; k++) {
/******/ 								try {
/******/ 									callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 								} catch (err) {
/******/ 									if (typeof errorHandlers[k] === "function") {
/******/ 										try {
/******/ 											errorHandlers[k](err, {
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k]
/******/ 											});
/******/ 										} catch (err2) {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-error-handler-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err2,
/******/ 													originalError: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err2);
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									} else {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// Load self accepted modules
/******/ 				for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 					var item = outdatedSelfAcceptedModules[o];
/******/ 					var moduleId = item.module;
/******/ 					try {
/******/ 						item.require(moduleId);
/******/ 					} catch (err) {
/******/ 						if (typeof item.errorHandler === "function") {
/******/ 							try {
/******/ 								item.errorHandler(err, {
/******/ 									moduleId: moduleId,
/******/ 									module: __webpack_require__.c[moduleId]
/******/ 								});
/******/ 							} catch (err2) {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-error-handler-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err2,
/******/ 										originalError: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err2);
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						} else {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "self-accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								reportError(err);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				return outdatedModules;
/******/ 			}
/******/ 		};
/******/ 	}
/******/ 	__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 		if (!currentUpdate) {
/******/ 			currentUpdate = {};
/******/ 			currentUpdateRuntime = [];
/******/ 			currentUpdateRemovedChunks = [];
/******/ 			applyHandlers.push(applyHandler);
/******/ 		}
/******/ 		if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 			currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		}
/******/ 	};
/******/ 	__webpack_require__.hmrC.jsonp = function (
/******/ 		chunkIds,
/******/ 		removedChunks,
/******/ 		removedModules,
/******/ 		promises,
/******/ 		applyHandlers,
/******/ 		updatedModulesList
/******/ 	) {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		currentUpdateChunks = {};
/******/ 		currentUpdateRemovedChunks = removedChunks;
/******/ 		currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 			obj[key] = false;
/******/ 			return obj;
/******/ 		}, {});
/******/ 		currentUpdateRuntime = [];
/******/ 		chunkIds.forEach(function (chunkId) {
/******/ 			if (
/******/ 				__webpack_require__.o(installedChunks, chunkId) &&
/******/ 				installedChunks[chunkId] !== undefined
/******/ 			) {
/******/ 				promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 				currentUpdateChunks[chunkId] = true;
/******/ 			} else {
/******/ 				currentUpdateChunks[chunkId] = false;
/******/ 			}
/******/ 		});
/******/ 		if (__webpack_require__.f) {
/******/ 			__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 				if (
/******/ 					currentUpdateChunks &&
/******/ 					__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 					!currentUpdateChunks[chunkId]
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.hmrM = function() {
/******/ 		if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 		return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 			if(response.status === 404) return; // no update available
/******/ 			if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 			return response.json();
/******/ 		});
/******/ 	};
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// no jsonp function
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxLQUFLLEtBQUssV0FBVyxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sV0FBVyxXQUFXLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FB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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLG1CQUFtQiwyQkFBMkI7VUFDOUM7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEtBQUs7VUFDTDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0Esa0JBQWtCLGNBQWM7VUFDaEM7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBLGNBQWMsTUFBTTtVQUNwQjtVQUNBO1VBQ0E7VUFDQSxLQUFLO1VBQ0w7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLGNBQWMsYUFBYTtVQUMzQjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBLGlCQUFpQiw0QkFBNEI7VUFDN0M7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLElBQUk7VUFDSjtVQUNBOztVQUVBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsSUFBSTtVQUNKOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTs7VUFFQTtVQUNBO1VBQ0EsZ0JBQWdCLDRCQUE0QjtVQUM1QztVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQSxnQkFBZ0IsNEJBQTRCO1VBQzVDO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLGtCQUFrQix1Q0FBdUM7VUFDekQ7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQSxtQkFBbUIsaUNBQWlDO1VBQ3BEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxzQkFBc0IsdUNBQXVDO1VBQzdEO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHNCQUFzQixzQkFBc0I7VUFDNUM7VUFDQTtVQUNBLFNBQVM7VUFDVDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsV0FBVztVQUNYLFdBQVc7VUFDWDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLFlBQVk7VUFDWjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxVQUFVO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsV0FBVztVQUNYO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0EsbUJBQW1CLHdDQUF3QztVQUMzRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLE1BQU07VUFDTjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsUUFBUTtVQUNSLFFBQVE7VUFDUjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxTQUFTO1VBQ1Q7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsT0FBTztVQUNQO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxRQUFRO1VBQ1I7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUUsSUFBSTtVQUNOO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxJQUFJO1VBQ0o7VUFDQTtVQUNBLEVBQUU7VUFDRjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQSxzQ0FBc0M7VUFDdEM7VUFDQTtVQUNBLEVBQUU7VUFDRjs7VUFFQTs7VUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL015RnVuYy8uL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL015RnVuYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9NeUZ1bmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9NeUZ1bmMvLi9zY3NzL21haW4uc2Nzcz80ZTUzIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vTXlGdW5jL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvZm9udC9HaW5nZXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvb3Blbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG4vKiBSZXNwb25zaXZlIFR5cG9ncmFwaHkgKi9cXG4ubGlnaHQge1xcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uZGFyayB7XFxuICAtLWJhY2tncm91bmQ6ICMxMTE7XFxufVxcblxcbi50b2dnbGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uY29udGVudDpob3ZlciAudG9nZ2xlLWljb24ge1xcbiAgYW5pbWF0aW9uOiB3aWdnbGUgMXMgbGluZWFyO1xcbn1cXG5cXG4udG9nZ2xlLWljb24ge1xcbiAgd2lkdGg6IDI4cHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZS1pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9nZ2xlLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0LW1haW4pO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1iZyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2dnbGUtbGFiZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLnRvZ2dsZS1sYWJlbDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLnRyYW5zcGFyZW5jeSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcXG59XFxuXFxuLnRyYW5zcGFyZW5jeTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgNiAqICgxMDB2dyAtIDMyMHB4KSAvIDY4MCk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9XFxufVxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2E2YTZhNjtcXG59XFxuXFxuLyogZmluaXNoIHJlc3BvbnNpdmUgdHlwb2dyYXBoeSAqL1xcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB1bnNldDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxuICBtYXgtd2lkdGg6IDEzNDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBsb2dvICovXFxuLmhlYWRlciB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRyYW5zaXRpb246IDAuNXMgYmFja2dyb3VuZC1jb2xvciBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhlYWRlckJhY2tncm91bmRTY3JvbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGNvbG9yIGVhc2UtaW4tb3V0O1xcbn1cXG4ubG9nbzpob3ZlciB7XFxuICBjb2xvcjogIzBkOGQwMDtcXG59XFxuXFxuLyogTWVudSAqL1xcbi5mdWxsUGFnZU1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IC0tYmFja2dyb3VuZDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUuYWN0aXZlIHtcXG4gIHRvcDogLTEwMCU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjMGQ4ZDAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmhvdmVyOmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGE6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMDAlO1xcbiAgbGVmdDogMDtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXIgYSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5tZW51SWNvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLyogZmluaXNoIG1lbnUgKi9cXG4vKiBoZXJvIHNlY3Rpb24gKi9cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgbWluLWhlaWdodDogYXV0bztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbn1cXG4uaGVybyBwIHtcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLmhlcm8gcCBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxuICBjb2xvcjogIzBkOGQwMDtcXG59XFxuLmhlcm8gcDpsYXN0LW9mLXR5cGUge1xcbiAgZm9udC1mYW1pbHk6IHVuc2V0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcXG4gIC5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhIHtcXG4gICAgZm9udC1zaXplOiA0ZW07XFxuICB9XFxuICAuaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbiAgLmhlcm8gcDpsYXN0LW9mLXR5cGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAuaGVybyBwOmxhc3Qtb2YtdHlwZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBsZWZ0OiAtNDBweDtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XFxuICB9XFxuICAuaGVybyBwOmxhc3Qtb2YtdHlwZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHJpZ2h0OiAtNDBweDtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XFxuICB9XFxuICAuaGVybyAuY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5oZXJvIC5jb250YWluZXIgcDpudGgtY2hpbGQoMSkge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRyZW0pO1xcbiAgfVxcbiAgLmhlcm8gLmNvbnRhaW5lciBwOm50aC1jaGlsZCgzKSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cmVtKTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkAtbW96LWtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NzBweCkge1xcbiAgLmhlcm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG4gIC5oZXJvIC5jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmhlcm8gLmNvbnRhaW5lciBwOm50aC1jaGlsZCgxKSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnJlbSk7XFxuICB9XFxuICAuaGVybyAuY29udGFpbmVyIHA6bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhyZW0pO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5iYW5uZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xcbiAgLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcbiAgICBmb250LXNpemU6IDVlbTtcXG4gIH1cXG4gIC5oZXJvIC5jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmhlcm8gLmNvbnRhaW5lciBwOm50aC1jaGlsZCgxKSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHJlbSk7XFxuICB9XFxuICAuaGVybyAuY29udGFpbmVyIHA6bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcmVtKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAuaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcXG4gIC5oZXJvIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuaGVybyBwIHtcXG4gICAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkwMHB4KSB7XFxuICAuaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiA1LjdyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiA1cmVtO1xcbiAgfVxcbn1cXG4ubmV3U2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc2Nzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0FBQUY7QUFFQSwwQkFBQTtBQUNBO0VBQ0Usd0JBQUE7QUFBRjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFjQTtFQUNFLDJCQUFBO0FBWEY7O0FBY0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFjQTtFQUNFLCtCQUFBO0FBWEY7O0FBY0E7RUFDRSxzQkFBQTtBQVhGOztBQWNBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FBWEY7O0FBY0E7RUFDRSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFhQTtFQUNFO0lBQ0UsaURBQUE7RUFWRjtBQUNGO0FBWUE7RUFDRTtJQUNFLGVBQUE7RUFWRjtBQUNGO0FBWUE7RUFDRTtJQUNFLGVBQUE7RUFWRjtBQUNGO0FBWUE7RUFDRTtJQUNFLGVBQUE7RUFWRjtBQUNGO0FBWUEsVUFBQTtBQUNBO0VB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QVJBO0lBQ0UsbUJBQUE7RUFVRjtBQUNGO0FBUkE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUFVRjtBQUNGO0FBUkE7RUFDRSxhQUFBO0FBVUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gIHNyYzogdXJsKCcvZm9udC9HaW5nZXIud29mZicpO1xcclxcbn1cXHJcXG4vKiBSZXNwb25zaXZlIFR5cG9ncmFwaHkgKi9cXHJcXG4ubGlnaHQge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcclxcbiAgJHNjcm9sbE5hdjogcmdiYSgwLDAsMCwwLjMpO1xcclxcbiAgJHNjcm9sbE5hdkJvdHRvbTogcmdiYSgyNTUsMjU1LDI1NSwgLjMpO1xcclxcbiAgJG5hdkNvbG9yTGluazogIzExMTtcXHJcXG4gICRsb2dvOiAjMTExO1xcclxcbiAgJHByaW1hcnlDb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgJGZvbnRDb2xvcjogIzExMTtcXHJcXG59XFxyXFxuLmRhcmsge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiAjMTExO1xcclxcbiAgJHNjcm9sbE5hdjogcmdiYSgwLDAsMCwwLjMpO1xcclxcbiAgJHNjcm9sbE5hdkJvdHRvbTogcmdiYSgyNTUsMjU1LDI1NSwgLjMpO1xcclxcbiAgJG5hdkNvbG9yTGluazogd2hpdGVzbW9rZTtcXHJcXG4gICRsb2dvOiB3aGl0ZXNtb2tlO1xcclxcbiAgJHByaW1hcnlDb2xvcjogIzBkOGQwMDtcXHJcXG4gICRmb250Q29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudDpob3ZlciAudG9nZ2xlLWljb24ge1xcclxcbiAgYW5pbWF0aW9uOiB3aWdnbGUgMXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLWljb24ge1xcclxcbiAgd2lkdGg6IDI4cHg7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS1pbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLWxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0LW1haW4pO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1iZyk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtbGFiZWw6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS1sYWJlbDphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zcGFyZW5jeSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zcGFyZW5jeTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgNiAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogVHJhY2sgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDVweDtcXHJcXG59XFxyXFxuLyogSGFuZGxlICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTZhNmE2O1xcclxcbn1cXHJcXG4vKiBmaW5pc2ggcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5ICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWluLXdpZHRoOiAzMjBweDtcXHJcXG4gIG1heC13aWR0aDogMTM0MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi8qIGxvZ28gKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgbWluLWhlaWdodDogODBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgdHJhbnNpdGlvbjogLjVzIGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5oZWFkZXJCYWNrZ3JvdW5kU2Nyb2xsIHtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nyb2xsTmF2O1xcclxcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkc2Nyb2xsTmF2Qm90dG9tO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICBjb2xvcjogJGxvZ287XFxyXFxuICB0cmFuc2l0aW9uOiAuNXMgY29sb3IgZWFzZS1pbi1vdXQ7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIE1lbnUgKi9cXHJcXG4uZnVsbFBhZ2VNZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAtLWJhY2tncm91bmQ7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51LmFjdGl2ZSB7XFxyXFxuICB0b3A6IC0xMDAlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIgaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY29sb3I6ICRuYXZDb2xvckxpbms7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMWVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBjb2xvcjogJG5hdkNvbG9yTGluaztcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpOmhvdmVyIGEge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gIGNvbG9yOiAkbmF2Q29sb3JMaW5rO1xcclxcbn1cXHJcXG4ubWVudUljb24ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvY2xvc2Uuc3ZnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9vcGVuLnN2Zyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbi8qIGZpbmlzaCBtZW51ICovXFxyXFxuLyogaGVybyBzZWN0aW9uICovXFxyXFxuLmhlcm8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAkZm9udENvbG9yO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIG1pbi1oZWlnaHQ6IGF1dG87XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXHJcXG4gIHAge1xcclxcbiAgICBmb250LWZhbWlseTogR2luZ2VyO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnlDb2xvcjtcXHJcXG4gICAgfVxcclxcbiAgJjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBmb250LWZhbWlseTogdW5zZXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XFxyXFxuICAuZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcclxcbiAgfVxcclxcbiAgLmhlcm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgJjpsYXN0LW9mLXR5cGV7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9udENvbG9yO1xcclxcbiAgICAgICAgbGVmdDogLTQwcHg7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvbnRDb2xvcjtcXHJcXG4gICAgICAgIHJpZ2h0OiAtNDBweDtcXHJcXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAycHgpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLmhlcm8gLmNvbnRhaW5lciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRyZW0pO1xcclxcbiAgICB9XFxyXFxuICAgIHA6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnJlbSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkAtbW96LWtleWZyYW1lcyBwdWxzZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NzBweCl7XFxyXFxuICAuaGVybyBwIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgfVxcclxcbiAgLmhlcm8gLmNvbnRhaW5lciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZyZW0pO1xcclxcbiAgICB9XFxyXFxuICAgIHA6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHJlbSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhKG1heC13aWR0aDo5OTFweCkge1xcclxcbiAgLmJhbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XFxyXFxuICAuZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcclxcbiAgfVxcclxcbiAgLmhlcm8gLmNvbnRhaW5lciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLThyZW0pO1xcclxcbiAgICB9XFxyXFxuICAgIHA6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTByZW0pO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XFxyXFxuICAuaGVybyBwIHtcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpe1xcclxcbiAgLmhlcm8ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIHAge1xcclxcbiAgICBsaW5lLWhlaWdodDogNC41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTAwcHgpe1xcclxcbiAgLmhlcm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNS43cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5ld1NlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XCIsXCIvL2xpZ2h0IG1vZGVcXHJcXG4kYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXHJcXG4vL2RhcmsgbW9kZVxcclxcbiRiYWNrZ3JvdW5kOiAjMTExO1xcclxcbiRzY3JvbGxOYXY6IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4kc2Nyb2xsTmF2Qm90dG9tOiByZ2JhKDI1NSwyNTUsMjU1LCAuMyk7XFxyXFxuJG5hdkNvbG9yTGluazogd2hpdGVzbW9rZTtcXHJcXG4kbG9nbzogd2hpdGVzbW9rZTtcXHJcXG4kcHJpbWFyeUNvbG9yOiAjMGQ4ZDAwO1xcclxcbiRmb250Q29sb3I6IHdoaXRlc21va2U7XFxyXFxuLy9jaGFuZ2UgY29sb3JcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImI2YjVjZTc3Mjg5MDhlMTNjYTFmXCI7IH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wIHx8IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuXHRjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0ID0gdXBkYXRlZE1vZHVsZXNMaXN0O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVNeUZ1bmNcIl0gPSBmdW5jdGlvbihjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0IWN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF1cblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9