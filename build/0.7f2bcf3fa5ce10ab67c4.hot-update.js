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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(38), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(39), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Ginger;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n/* colors - pastel */\n:root {\n  --pastel-aqua: #58CFEE;\n  --pastel-blue: #65A7E6;\n  --pastel-darkblue: #6661AB;\n  --pastel-pink: #F7979F;\n  --pastel-darkpink: #C8566B;\n  --pastel-lightyellow: #F2D48F;\n  --pastel-yellow: #F6DA70;\n  --pastel-orange: #E78963;\n  --pastel-lightviolet: #9D75BF;\n  --pastel-violet: #8D5ED4;\n  --pastel-turkus: #4CDBA6;\n  --pastel-lightnav: #F7E9DE;\n  --primary: var(--pastel-lightviolet);\n  /* light */\n  --light-background: #EEEDF0;\n  --pastel-text-light: #17181F;\n  --scroll-nav-light: rgba(247, 233, 222, 0.3);\n  --webkit-scroll-light: #17181F;\n  --webkit-scroll-light-hover: #555;\n  /* dark */\n  --dark-background: #17181F;\n  --pastel-text-dark: #F5F8F3;\n  --scroll-nav-dark: rgba(0,0,0,0.3);\n  --webkit-scroll-dark: var(--pastel-lightnav);\n  --webkit-scroll-dark-hover: #a6a6a6;\n}\n\n/* light mode */\n.light {\n  --webkit-scroll: var(--webkit-scroll-light);\n  --webkit-scroll-hover: var(--webkit-scroll-light-hover);\n  --background: var(--light-background);\n  --scroll-nav: var(--scroll-nav-light);\n  --scroll-nav-bottom: var(--primary);\n  --primary-color: var(--primary);\n  --nav-color-link: var(--pastel-text-light);\n  --logo: var(--pastel-text-light);\n  --font-color: var(--pastel-text-light);\n  --close: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  --open: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  --last-paragraph-in-hero: 200;\n  transition: background-color 1s ease-in-out;\n}\n\n/* dark mode */\n.dark {\n  --webkit-scroll: var(--webkit-scroll-dark);\n  --webkit-scroll-hover: var(--webkit-scroll-dark-hover);\n  --background: var(--dark-background);\n  --scroll-nav: var(--scroll-nav-dark);\n  --scroll-nav-bottom:var(--primary);\n  --primary-color: var(--primary);\n  --nav-color-link: var(--pastel-text-dark);\n  --logo: var(--pastel-text-dark);\n  --font-color: var(--pastel-text-dark);\n  --close: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  --open: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  --last-paragraph-in-hero: 100;\n  transition: all 1s ease-in-out;\n}\n\n/* Responsive Typography */\nhtml {\n  font-size: 16px;\n  overflow-x: hidden;\n}\n\n@media screen and (min-width: 320px) {\n  html {\n    font-size: calc(16px + 6 * (100vw - 320px) / 680);\n  }\n}\n@media screen and (min-width: 1000px) {\n  html {\n    font-size: 22px;\n  }\n}\n@media screen and (min-width: 1366px) {\n  html {\n    font-size: 25px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  html {\n    font-size: 30px;\n  }\n}\n/* Track */\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--webkit-scroll);\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: var(--webkit-scroll-hover);\n}\n\n/* finish responsive typography */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: unset;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: var(--background);\n}\n\n.container {\n  min-width: 320px;\n  max-width: 1340px;\n  width: 100%;\n  padding: 0 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n/* logo */\n.header {\n  box-sizing: content-box;\n  min-height: 80px;\n  width: 100%;\n  position: sticky;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 99;\n  transition: 0.5s background-color ease-in-out;\n}\n\n.headerBackgroundScroll {\n  background-color: var(--scroll-nav);\n  border-bottom: 1px solid var(--scroll-nav-bottom);\n}\n\n.logo {\n  display: inline-block;\n  font-size: 30px;\n  font-family: Ginger;\n  margin-left: 2rem;\n  color: var(--logo);\n  transition: 0.5s color ease-in-out;\n}\n.logo:hover {\n  color: var(--primary-color);\n}\n\n/* Menu */\n.fullPageMenu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--background);\n  transition: 0.5s;\n  z-index: 999;\n}\n\n.fullPageMenu.active {\n  top: -100%;\n}\n\n.fullPageMenu .banner {\n  position: relative;\n  width: 600px;\n  height: 100%;\n}\n\n.fullPageMenu .banner img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.fullPageMenu .nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.fullPageMenu .nav ul {\n  position: relative;\n}\n\n.fullPageMenu .nav ul li {\n  position: relative;\n  list-style: none;\n  padding: 0 20px;\n  margin: 5px 0;\n  overflow: hidden;\n  display: table;\n}\n\n.fullPageMenu .nav ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--primary-color);\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\n\n.fullPageMenu .nav ul li:hover:before {\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(1);\n  transform-origin: top;\n}\n\n.fullPageMenu .nav ul li a {\n  position: relative;\n  color: var(--nav-color-link);\n  text-decoration: none;\n  font-size: 3em;\n  font-weight: 700;\n  line-height: 1em;\n  display: inline-block;\n  text-transform: uppercase;\n  transition: 0.5s ease-in-out;\n}\n\n.fullPageMenu .nav ul li a::before {\n  content: attr(data-text);\n  position: absolute;\n  bottom: -100%;\n  left: 0;\n  color: var(--nav-color-link);\n}\n\n.fullPageMenu .nav ul li:hover a {\n  transform: translateY(-100%);\n  color: var(--nav-color-link);\n}\n\n.menuIcon {\n  position: fixed;\n  top: 10px;\n  right: 2rem;\n  width: 60px;\n  height: 60px;\n  background: var(--close);\n  background-size: 40px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: 10px;\n  z-index: 9999;\n}\n\n.menuIcon.active {\n  top: 10px;\n  right: 2rem;\n  width: 60px;\n  height: 60px;\n  background: var(--open);\n  background-size: 40px;\n  background-repeat: no-repeat;\n  background-position: 10px;\n  z-index: 9999;\n}\n\n/* finish menu */\n/* hero section */\n.hero {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--font-color);\n  flex-direction: column;\n  flex-flow: column nowrap;\n  min-height: auto;\n  margin-top: 4rem;\n  height: auto;\n}\n.hero p {\n  font-family: Ginger;\n  font-size: 2.5rem;\n}\n.hero p span {\n  font-family: Ginger;\n  color: var(--primary-color);\n}\n.hero p:last-of-type {\n  font-family: unset;\n  font-size: 1rem;\n  font-weight: var(--last-paragraph-in-hero);\n}\n\n.change__colors {\n  position: fixed;\n  left: 2rem;\n  bottom: 1rem;\n  width: 100%;\n}\n.change__colors ul {\n  margin: 0;\n  padding: 0.3rem;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  list-style-type: none;\n  overflow: hidden;\n  transition: all 2s ease-in-out;\n}\n.change__colors ul:hover {\n  width: 100%;\n}\n.change__colors ul:hover::before {\n  position: absolute;\n  content: \"Change color\";\n  left: 0.5rem;\n  top: -40%;\n  font-size: 0.6rem;\n  color: var(--font-color);\n}\n.change__colors li {\n  display: block;\n  margin-left: 0.5rem;\n  margin-top: 0.5rem;\n  float: left;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background-color: gray;\n  transform: translateY(-0.5rem);\n}\n.change__colors li:nth-child(1) {\n  margin-left: 0;\n  background-color: var(--pastel-darkpink);\n}\n.change__colors li:nth-child(2) {\n  background-color: var(--pastel-yellow);\n}\n.change__colors li:nth-child(3) {\n  background-color: var(--pastel-darkblue);\n}\n.change__colors li:nth-child(4) {\n  background-color: var(--pastel-turkus);\n}\n\n.toggle {\n  position: fixed;\n  right: 2rem;\n  bottom: 1rem;\n  user-select: none;\n  z-index: 999999;\n}\n\n.toggle-icon {\n  width: 28px;\n  user-select: none;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  user-select: none;\n}\n\n.toggle-label {\n  cursor: pointer;\n  transition: all 0.3s ease;\n  user-select: none;\n}\n\n.toggle-icon:hover {\n  transform: scale(1.1);\n}\n\n.about {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 5rem;\n}\n.about .container {\n  display: flex;\n  align-items: center;\n}\n.about h2 {\n  color: var(--font-color);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n.about .about__line {\n  margin-top: 0.3rem;\n  width: 80%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.about .about__desc {\n  text-align: justify;\n  margin-top: 2rem;\n  line-height: 2rem;\n  color: var(--font-color);\n  border: 1px solid red;\n}\n.about .about__desc span {\n  font-family: Ginger;\n  color: var(--primary);\n}\n\n@media screen and (min-width: 500px) {\n  .fullPageMenu .nav ul li a {\n    font-size: 4em;\n  }\n  .hero p {\n    font-size: 3rem;\n    justify-content: center;\n    margin-top: 0;\n  }\n  .hero p:last-of-type {\n    position: relative;\n  }\n  .hero p:last-of-type::before {\n    content: \"\";\n    position: absolute;\n    width: 30px;\n    height: 1px;\n    background-color: var(--font-color);\n    left: -40px;\n    top: calc(50% - 2px);\n  }\n  .hero p:last-of-type::after {\n    content: \"\";\n    position: absolute;\n    width: 30px;\n    height: 1px;\n    background-color: var(--font-color);\n    right: -40px;\n    top: calc(50% - 2px);\n  }\n  .hero .container {\n    align-items: center;\n  }\n  .hero .container p:nth-child(1) {\n    transform: translateX(-4rem);\n  }\n  .hero .container p:nth-child(3) {\n    transform: translateX(6rem);\n  }\n}\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@-moz-keyframes pulse {\n  0% {\n    -moz-transform: scale(1);\n    transform: scale(1);\n  }\n  50% {\n    -moz-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    -moz-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@media screen and (min-width: 670px) {\n  .hero {\n    margin-top: 0;\n  }\n  .hero p {\n    font-size: 4rem;\n  }\n  .hero .container {\n    align-items: center;\n  }\n  .hero .container p:nth-child(1) {\n    transform: translateX(-6rem);\n  }\n  .hero .container p:nth-child(3) {\n    transform: translateX(8rem);\n  }\n  .about__desc {\n    text-align: center;\n    padding: 0 1rem;\n  }\n}\n@media (max-width: 991px) {\n  .banner {\n    display: none;\n  }\n}\n@media screen and (min-width: 991px) {\n  .fullPageMenu .nav ul li a {\n    font-size: 5em;\n  }\n  .hero {\n    margin-top: 0;\n  }\n  .hero .container {\n    align-items: center;\n  }\n  .hero .container p:nth-child(1) {\n    transform: translateX(-8rem);\n  }\n  .hero .container p:nth-child(3) {\n    transform: translateX(10rem);\n  }\n}\n@media screen and (min-width: 1024px) {\n  .hero {\n    height: calc(100vh - 80px);\n    justify-content: center;\n    align-items: center;\n  }\n  .hero p {\n    font-size: 5rem;\n  }\n  .hero {\n    margin-top: 0;\n  }\n  .about {\n    margin-top: 1rem;\n  }\n}\n@media screen and (min-width: 1600px) {\n  .hero {\n    margin-top: 0;\n  }\n  .hero p {\n    line-height: 4.5rem;\n  }\n}\n@media screen and (min-width: 1900px) {\n  .hero p {\n    font-size: 5.7rem;\n    line-height: 5rem;\n  }\n  .hero {\n    margin-top: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./scss/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');\r\n@font-face {\r\n  font-family: Ginger;\r\n  src: url('/font/Ginger.woff');\r\n}\r\n/* colors - pastel */\r\n:root {\r\n  --pastel-aqua: #58CFEE;\r\n  --pastel-blue: #65A7E6;\r\n  --pastel-darkblue: #6661AB;\r\n  --pastel-pink: #F7979F;\r\n  --pastel-darkpink: #C8566B;\r\n  --pastel-lightyellow: #F2D48F;\r\n  --pastel-yellow: #F6DA70;\r\n  --pastel-orange: #E78963;\r\n  --pastel-lightviolet: #9D75BF;\r\n  --pastel-violet: #8D5ED4;\r\n  --pastel-turkus: #4CDBA6;\r\n  --pastel-lightnav: #F7E9DE;\r\n\r\n  --primary: var(--pastel-lightviolet);\r\n  /* light */\r\n  --light-background: #EEEDF0;\r\n  --pastel-text-light: #17181F;\r\n  --scroll-nav-light: rgba(247, 233, 222, 0.3);\r\n  --webkit-scroll-light:  #17181F;\r\n  --webkit-scroll-light-hover: #555;\r\n\r\n  /* dark */\r\n  --dark-background:  #17181F;\r\n  --pastel-text-dark: #F5F8F3;\r\n  --scroll-nav-dark: rgba(0,0,0,0.3);\r\n  --webkit-scroll-dark: var(--pastel-lightnav);\r\n  --webkit-scroll-dark-hover: #a6a6a6;\r\n}\r\n\r\n/* light mode */\r\n.light {\r\n  --webkit-scroll: var(--webkit-scroll-light);\r\n  --webkit-scroll-hover: var(--webkit-scroll-light-hover);\r\n  --background: var(--light-background);\r\n  --scroll-nav: var(--scroll-nav-light);\r\n  --scroll-nav-bottom: var(--primary);\r\n  --primary-color: var(--primary);\r\n  --nav-color-link: var(--pastel-text-light);\r\n  --logo: var(--pastel-text-light);\r\n  --font-color: var(--pastel-text-light);\r\n  --close: url(../public/images/closeLightMode.svg);\r\n  --open: url(../public/images/openLightMode.svg);\r\n  --last-paragraph-in-hero: 200;\r\n  transition: background-color 1s ease-in-out;\r\n}\r\n/* dark mode */\r\n.dark {\r\n  --webkit-scroll: var(--webkit-scroll-dark);\r\n  --webkit-scroll-hover: var(--webkit-scroll-dark-hover);\r\n  --background: var(--dark-background);\r\n  --scroll-nav: var(--scroll-nav-dark);\r\n  --scroll-nav-bottom:var(--primary);\r\n  --primary-color: var(--primary);\r\n  --nav-color-link: var(--pastel-text-dark);\r\n  --logo: var(--pastel-text-dark);\r\n  --font-color: var(--pastel-text-dark);\r\n  --close: url(../public/images/close.svg);\r\n  --open: url(../public/images/open.svg);\r\n  --last-paragraph-in-hero: 100;\r\n  transition: all 1s ease-in-out;\r\n}\r\n/* Responsive Typography */\r\nhtml {\r\n  font-size: 16px;\r\n  overflow-x: hidden;\r\n}\r\n@media screen and (min-width: 320px) {\r\n  html {\r\n    font-size: calc(16px + 6 * ((100vw - 320px) / 680));\r\n  }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  html {\r\n    font-size: 22px;\r\n  }\r\n}\r\n@media screen and (min-width: 1366px) {\r\n  html {\r\n    font-size: 25px;\r\n  }\r\n}\r\n@media screen and (min-width: 1600px) {\r\n  html {\r\n    font-size: 30px;\r\n  }\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 10px;\r\n}\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--webkit-scroll);\r\n  border-radius: 10px;\r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: var(--webkit-scroll-hover);\r\n}\r\n/* finish responsive typography */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: unset;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: var(--background);\r\n}\r\n.container {\r\n  min-width: 320px;\r\n  max-width: 1340px;\r\n  width: 100%;\r\n  padding: 0 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n}\r\n/* logo */\r\n.header {\r\n  box-sizing: content-box;\r\n  min-height: 80px;\r\n  width: 100%;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  z-index: 99;\r\n  transition: .5s background-color ease-in-out;\r\n}\r\n.headerBackgroundScroll {\r\n   background-color: var(--scroll-nav);\r\n   border-bottom: 1px solid var(--scroll-nav-bottom);\r\n}\r\n.logo {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-family: Ginger;\r\n  margin-left: 2rem;\r\n  color: var(--logo);\r\n  transition: .5s color ease-in-out;\r\n  &:hover {\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n/* Menu */\r\n.fullPageMenu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: var(--background);\r\n  transition: 0.5s;\r\n  z-index: 999;\r\n}\r\n.fullPageMenu.active {\r\n  top: -100%;\r\n}\r\n.fullPageMenu .banner {\r\n  position: relative;\r\n  width: 600px;\r\n  height: 100%;\r\n}\r\n.fullPageMenu .banner img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.fullPageMenu .nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n.fullPageMenu .nav ul {\r\n  position: relative;\r\n}\r\n.fullPageMenu .nav ul li {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 0 20px;\r\n  margin: 5px 0;\r\n  overflow: hidden;\r\n  display: table;\r\n}\r\n.fullPageMenu .nav ul li:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--primary-color);\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(0);\r\n  transform-origin: bottom;\r\n}\r\n.fullPageMenu .nav ul li:hover:before {\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(1);\r\n  transform-origin: top;\r\n}\r\n.fullPageMenu .nav ul li a {\r\n  position: relative;\r\n  color: var(--nav-color-link);\r\n  text-decoration: none;\r\n  font-size: 3em;\r\n  font-weight: 700;\r\n  line-height: 1em;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fullPageMenu .nav ul li a::before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  bottom: -100%;\r\n  left: 0;\r\n  color: var(--nav-color-link);\r\n}\r\n.fullPageMenu .nav ul li:hover a {\r\n  transform: translateY(-100%);\r\n  color: var(--nav-color-link);\r\n}\r\n.menuIcon {\r\n  position: fixed;\r\n  top: 10px;\r\n  right: 2rem;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: var(--close);\r\n  background-size: 40px;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n  z-index: 9999;\r\n}\r\n.menuIcon.active {\r\n  top: 10px;\r\n  right: 2rem;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: var(--open);\r\n  background-size: 40px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n  z-index: 9999;\r\n}\r\n\r\n/* finish menu */\r\n/* hero section */\r\n.hero {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n  flex-direction: column;\r\n  flex-flow: column nowrap;\r\n  min-height: auto;\r\n  margin-top: 4rem;\r\n  height: auto;\r\n  p {\r\n    font-family: Ginger;\r\n    font-size: 2.5rem;\r\n    span {\r\n      font-family: Ginger;\r\n      color: var(--primary-color);\r\n    }\r\n  &:last-of-type {\r\n    font-family: unset;\r\n    font-size: 1rem;\r\n    font-weight: var(--last-paragraph-in-hero);\r\n    }\r\n  }\r\n}\r\n.change__colors {\r\n  position: fixed;\r\n  left: 2rem;\r\n  bottom: 1rem;\r\n  width: 100%;\r\n  ul {\r\n    margin: 0;\r\n    padding: .3rem;\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n    overflow: hidden;\r\n    transition: all 2s ease-in-out;\r\n  }\r\n  ul:hover {\r\n    width: 100%;\r\n  }\r\n  ul:hover::before {\r\n    position: absolute;\r\n    content: 'Change color';\r\n    left: .5rem;\r\n    top: -40%;\r\n    font-size: .6rem;\r\n    color: var(--font-color);\r\n  }\r\n  li {\r\n    display: block;\r\n    margin-left: .5rem;\r\n    margin-top: .5rem;\r\n    float: left;\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    background-color: gray;\r\n    transform: translateY(-0.5rem);\r\n  }\r\n  li:nth-child(1) {\r\n    margin-left: 0;\r\n    background-color: var(--pastel-darkpink);\r\n  }\r\n  li:nth-child(2) {\r\n    background-color: var(--pastel-yellow);\r\n  }\r\n  li:nth-child(3) {\r\n    background-color: var(--pastel-darkblue);\r\n  }\r\n  li:nth-child(4) {\r\n    background-color: var(--pastel-turkus);\r\n  }\r\n\r\n}\r\n.toggle {\r\n  position: fixed;\r\n  right: 2rem;\r\n  bottom: 1rem;\r\n  user-select: none;\r\n  z-index: 999999;\r\n}\r\n.toggle-icon {\r\n  width: 28px;\r\n  user-select: none;\r\n  transition: all .4s ease-in-out;\r\n}\r\n.toggle-input {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n  user-select: none;\r\n}\r\n.toggle-label {\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  user-select: none;\r\n}\r\n.toggle-icon:hover {\r\n  transform: scale(1.1);\r\n}\r\n.about {\r\n  height: 100vh;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  margin-top: 5rem;\r\n  .container {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  h2 {\r\n    color: var(--font-color);\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    font-size: .8rem;\r\n  }\r\n  .about__line {\r\n    margin-top: .3rem;\r\n    width: 80%;\r\n    height: 2px;\r\n    background-color: var(--font-color);\r\n  }\r\n  .about__desc {\r\n    text-align: justify;\r\n    margin-top: 2rem;\r\n    line-height: 2rem;\r\n    color: var(--font-color);\r\n    border: 1px solid red;\r\n    span {\r\n      font-family: Ginger;\r\n      color: var(--primary);\r\n    }\r\n  }\r\n}\r\n@media screen and (min-width: 500px){\r\n  .fullPageMenu .nav ul li a {\r\n    font-size: 4em;\r\n  }\r\n  .hero p {\r\n    font-size: 3rem;\r\n    justify-content: center;\r\n    margin-top: 0;\r\n\r\n    &:last-of-type{\r\n      position: relative;\r\n      &::before {\r\n        content: '';\r\n        position: absolute;\r\n        width: 30px;\r\n        height: 1px;\r\n        background-color: var(--font-color);\r\n        left: -40px;\r\n        top: calc(50% - 2px);\r\n      }\r\n      &::after {\r\n        content: '';\r\n        position: absolute;\r\n        width: 30px;\r\n        height: 1px;\r\n        background-color: var(--font-color);\r\n        right: -40px;\r\n        top: calc(50% - 2px);\r\n      }\r\n    }\r\n  }\r\n  .hero .container {\r\n    align-items: center;\r\n    p:nth-child(1) {\r\n      transform: translateX(-4rem);\r\n    }\r\n    p:nth-child(3) {\r\n      transform: translateX(6rem);\r\n    }\r\n  }\r\n}\r\n@-webkit-keyframes pulse {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale(1.5);\r\n    transform: scale(1.5);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@-moz-keyframes pulse {\r\n  0% {\r\n    -moz-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    -moz-transform: scale(1.5);\r\n    transform: scale(1.5);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n@media screen and (min-width: 670px) {\r\n  .hero {\r\n    margin-top: 0;\r\n  }\r\n  .hero p {\r\n    font-size: 4rem;\r\n  }\r\n  .hero .container {\r\n    align-items: center;\r\n\r\n    p:nth-child(1) {\r\n      transform: translateX(-6rem);\r\n    }\r\n\r\n    p:nth-child(3) {\r\n      transform: translateX(8rem);\r\n    }\r\n  }\r\n  .about__desc {\r\n    text-align: center;\r\n    padding: 0 1rem;\r\n  }\r\n}\r\n@media(max-width:991px) {\r\n  .banner {\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (min-width: 991px) {\r\n  .fullPageMenu .nav ul li a {\r\n    font-size: 5em;\r\n  }\r\n  .hero {\r\n    margin-top: 0;\r\n  }\r\n  .hero .container {\r\n    align-items: center;\r\n    p:nth-child(1) {\r\n      transform: translateX(-8rem);\r\n    }\r\n    p:nth-child(3) {\r\n      transform: translateX(10rem);\r\n    }\r\n  }\r\n}\r\n@media screen and (min-width: 1024px){\r\n  .hero {\r\n    height: calc(100vh - 80px);\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .hero p {\r\n    font-size: 5rem;\r\n  }\r\n  .hero {\r\n    margin-top: 0;\r\n  }\r\n  .about {\r\n    margin-top: 1rem;\r\n  }\r\n}\r\n@media screen and (min-width: 1600px){\r\n  .hero {\r\n    margin-top: 0;\r\n  }\r\n  .hero p {\r\n    line-height: 4.5rem;\r\n  }\r\n}\r\n@media screen and (min-width: 1900px){\r\n  .hero p {\r\n    font-size: 5.7rem;\r\n    line-height: 5rem;\r\n  }\r\n  .hero {\r\n    margin-top: 0;\r\n  }\r\n}"],"sourceRoot":""}]);
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

/***/ 38:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4deea48f41d8846811b6.svg";

/***/ }),

/***/ 36:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0a196385d46b42faccc8.svg";

/***/ }),

/***/ 39:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5359bd7507b1f6038da9.svg";

/***/ }),

/***/ 37:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ca26afe1ea8e6b61bc3.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "25dad678ead82750df04"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLFVBQVUsS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLFlBQVksV0FBVyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUss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VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxFQUFFLElBQUk7VUFDTjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsSUFBSTtVQUNKO1VBQ0E7VUFDQSxFQUFFO1VBQ0Y7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0Esc0NBQXNDO1VBQ3RDO1VBQ0E7VUFDQSxFQUFFO1VBQ0Y7O1VBRUE7O1VBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUZ1bmMvLi9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9NeUZ1bmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL015RnVuYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jLy4vc2Nzcy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly9NeUZ1bmMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2ZvbnQvR2luZ2VyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9wdWJsaWMvaW1hZ2VzL2Nsb3NlTGlnaHRNb2RlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3B1YmxpYy9pbWFnZXMvb3BlbkxpZ2h0TW9kZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9wdWJsaWMvaW1hZ2VzL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL3B1YmxpYy9pbWFnZXMvb3Blbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbi8qIGNvbG9ycyAtIHBhc3RlbCAqL1xcbjpyb290IHtcXG4gIC0tcGFzdGVsLWFxdWE6ICM1OENGRUU7XFxuICAtLXBhc3RlbC1ibHVlOiAjNjVBN0U2O1xcbiAgLS1wYXN0ZWwtZGFya2JsdWU6ICM2NjYxQUI7XFxuICAtLXBhc3RlbC1waW5rOiAjRjc5NzlGO1xcbiAgLS1wYXN0ZWwtZGFya3Bpbms6ICNDODU2NkI7XFxuICAtLXBhc3RlbC1saWdodHllbGxvdzogI0YyRDQ4RjtcXG4gIC0tcGFzdGVsLXllbGxvdzogI0Y2REE3MDtcXG4gIC0tcGFzdGVsLW9yYW5nZTogI0U3ODk2MztcXG4gIC0tcGFzdGVsLWxpZ2h0dmlvbGV0OiAjOUQ3NUJGO1xcbiAgLS1wYXN0ZWwtdmlvbGV0OiAjOEQ1RUQ0O1xcbiAgLS1wYXN0ZWwtdHVya3VzOiAjNENEQkE2O1xcbiAgLS1wYXN0ZWwtbGlnaHRuYXY6ICNGN0U5REU7XFxuICAtLXByaW1hcnk6IHZhcigtLXBhc3RlbC1saWdodHZpb2xldCk7XFxuICAvKiBsaWdodCAqL1xcbiAgLS1saWdodC1iYWNrZ3JvdW5kOiAjRUVFREYwO1xcbiAgLS1wYXN0ZWwtdGV4dC1saWdodDogIzE3MTgxRjtcXG4gIC0tc2Nyb2xsLW5hdi1saWdodDogcmdiYSgyNDcsIDIzMywgMjIyLCAwLjMpO1xcbiAgLS13ZWJraXQtc2Nyb2xsLWxpZ2h0OiAjMTcxODFGO1xcbiAgLS13ZWJraXQtc2Nyb2xsLWxpZ2h0LWhvdmVyOiAjNTU1O1xcbiAgLyogZGFyayAqL1xcbiAgLS1kYXJrLWJhY2tncm91bmQ6ICMxNzE4MUY7XFxuICAtLXBhc3RlbC10ZXh0LWRhcms6ICNGNUY4RjM7XFxuICAtLXNjcm9sbC1uYXYtZGFyazogcmdiYSgwLDAsMCwwLjMpO1xcbiAgLS13ZWJraXQtc2Nyb2xsLWRhcms6IHZhcigtLXBhc3RlbC1saWdodG5hdik7XFxuICAtLXdlYmtpdC1zY3JvbGwtZGFyay1ob3ZlcjogI2E2YTZhNjtcXG59XFxuXFxuLyogbGlnaHQgbW9kZSAqL1xcbi5saWdodCB7XFxuICAtLXdlYmtpdC1zY3JvbGw6IHZhcigtLXdlYmtpdC1zY3JvbGwtbGlnaHQpO1xcbiAgLS13ZWJraXQtc2Nyb2xsLWhvdmVyOiB2YXIoLS13ZWJraXQtc2Nyb2xsLWxpZ2h0LWhvdmVyKTtcXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxuICAtLXNjcm9sbC1uYXY6IHZhcigtLXNjcm9sbC1uYXYtbGlnaHQpO1xcbiAgLS1zY3JvbGwtbmF2LWJvdHRvbTogdmFyKC0tcHJpbWFyeSk7XFxuICAtLXByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgLS1uYXYtY29sb3ItbGluazogdmFyKC0tcGFzdGVsLXRleHQtbGlnaHQpO1xcbiAgLS1sb2dvOiB2YXIoLS1wYXN0ZWwtdGV4dC1saWdodCk7XFxuICAtLWZvbnQtY29sb3I6IHZhcigtLXBhc3RlbC10ZXh0LWxpZ2h0KTtcXG4gIC0tY2xvc2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAtLW9wZW46IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAtLWxhc3QtcGFyYWdyYXBoLWluLWhlcm86IDIwMDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIGRhcmsgbW9kZSAqL1xcbi5kYXJrIHtcXG4gIC0td2Via2l0LXNjcm9sbDogdmFyKC0td2Via2l0LXNjcm9sbC1kYXJrKTtcXG4gIC0td2Via2l0LXNjcm9sbC1ob3ZlcjogdmFyKC0td2Via2l0LXNjcm9sbC1kYXJrLWhvdmVyKTtcXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcXG4gIC0tc2Nyb2xsLW5hdjogdmFyKC0tc2Nyb2xsLW5hdi1kYXJrKTtcXG4gIC0tc2Nyb2xsLW5hdi1ib3R0b206dmFyKC0tcHJpbWFyeSk7XFxuICAtLXByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgLS1uYXYtY29sb3ItbGluazogdmFyKC0tcGFzdGVsLXRleHQtZGFyayk7XFxuICAtLWxvZ286IHZhcigtLXBhc3RlbC10ZXh0LWRhcmspO1xcbiAgLS1mb250LWNvbG9yOiB2YXIoLS1wYXN0ZWwtdGV4dC1kYXJrKTtcXG4gIC0tY2xvc2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAtLW9wZW46IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAtLWxhc3QtcGFyYWdyYXBoLWluLWhlcm86IDEwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogUmVzcG9uc2l2ZSBUeXBvZ3JhcGh5ICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE2cHggKyA2ICogKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gIH1cXG59XFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDVweDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13ZWJraXQtc2Nyb2xsKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2Via2l0LXNjcm9sbC1ob3Zlcik7XFxufVxcblxcbi8qIGZpbmlzaCByZXNwb25zaXZlIHR5cG9ncmFwaHkgKi9cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdW5zZXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDMyMHB4O1xcbiAgbWF4LXdpZHRoOiAxMzQwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogbG9nbyAqL1xcbi5oZWFkZXIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogOTk7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5oZWFkZXJCYWNrZ3JvdW5kU2Nyb2xsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbC1uYXYpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNjcm9sbC1uYXYtYm90dG9tKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWxvZ28pO1xcbiAgdHJhbnNpdGlvbjogMC41cyBjb2xvciBlYXNlLWluLW91dDtcXG59XFxuLmxvZ286aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuLmZ1bGxQYWdlTWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51LmFjdGl2ZSB7XFxuICB0b3A6IC0xMDAlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXI6YmVmb3JlIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB2YXIoLS1uYXYtY29sb3ItbGluayk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBjb2xvcjogdmFyKC0tbmF2LWNvbG9yLWxpbmspO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXIgYSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgY29sb3I6IHZhcigtLW5hdi1jb2xvci1saW5rKTtcXG59XFxuXFxuLm1lbnVJY29uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbG9zZSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcbi5tZW51SWNvbi5hY3RpdmUge1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDJyZW07XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW9wZW4pO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4vKiBmaW5pc2ggbWVudSAqL1xcbi8qIGhlcm8gc2VjdGlvbiAqL1xcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIG1pbi1oZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uaGVybyBwIHtcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLmhlcm8gcCBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcbi5oZXJvIHA6bGFzdC1vZi10eXBlIHtcXG4gIGZvbnQtZmFtaWx5OiB1bnNldDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYXN0LXBhcmFncmFwaC1pbi1oZXJvKTtcXG59XFxuXFxuLmNoYW5nZV9fY29sb3JzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDJyZW07XFxuICBib3R0b206IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNoYW5nZV9fY29sb3JzIHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcXG59XFxuLmNoYW5nZV9fY29sb3JzIHVsOmhvdmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY2hhbmdlX19jb2xvcnMgdWw6aG92ZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiQ2hhbmdlIGNvbG9yXFxcIjtcXG4gIGxlZnQ6IDAuNXJlbTtcXG4gIHRvcDogLTQwJTtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG4uY2hhbmdlX19jb2xvcnMgbGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XFxufVxcbi5jaGFuZ2VfX2NvbG9ycyBsaTpudGgtY2hpbGQoMSkge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXN0ZWwtZGFya3BpbmspO1xcbn1cXG4uY2hhbmdlX19jb2xvcnMgbGk6bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RlbC15ZWxsb3cpO1xcbn1cXG4uY2hhbmdlX19jb2xvcnMgbGk6bnRoLWNoaWxkKDMpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RlbC1kYXJrYmx1ZSk7XFxufVxcbi5jaGFuZ2VfX2NvbG9ycyBsaTpudGgtY2hpbGQoNCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFzdGVsLXR1cmt1cyk7XFxufVxcblxcbi50b2dnbGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDJyZW07XFxuICBib3R0b206IDFyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHotaW5kZXg6IDk5OTk5OTtcXG59XFxuXFxuLnRvZ2dsZS1pY29uIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZS1pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9nZ2xlLWxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZS1pY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuLmFib3V0IC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hYm91dCBoMiB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4uYWJvdXQgLmFib3V0X19saW5lIHtcXG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG4uYWJvdXQgLmFib3V0X19kZXNjIHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcbi5hYm91dCAuYWJvdXRfX2Rlc2Mgc3BhbiB7XFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gIH1cXG4gIC5oZXJvIHAge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbiAgLmhlcm8gcDpsYXN0LW9mLXR5cGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAuaGVybyBwOmxhc3Qtb2YtdHlwZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgbGVmdDogLTQwcHg7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAycHgpO1xcbiAgfVxcbiAgLmhlcm8gcDpsYXN0LW9mLXR5cGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgcmlnaHQ6IC00MHB4O1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXG4gIH1cXG4gIC5oZXJvIC5jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmhlcm8gLmNvbnRhaW5lciBwOm50aC1jaGlsZCgxKSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHJlbSk7XFxuICB9XFxuICAuaGVybyAuY29udGFpbmVyIHA6bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZyZW0pO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuQC1tb3ota2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY3MHB4KSB7XFxuICAuaGVybyB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICAuaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbiAgLmhlcm8gLmNvbnRhaW5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuaGVybyAuY29udGFpbmVyIHA6bnRoLWNoaWxkKDEpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cmVtKTtcXG4gIH1cXG4gIC5oZXJvIC5jb250YWluZXIgcDpudGgtY2hpbGQoMykge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHJlbSk7XFxuICB9XFxuICAuYWJvdXRfX2Rlc2Mge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuYmFubmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcXG4gIC5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhIHtcXG4gICAgZm9udC1zaXplOiA1ZW07XFxuICB9XFxuICAuaGVybyB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICAuaGVybyAuY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5oZXJvIC5jb250YWluZXIgcDpudGgtY2hpbGQoMSkge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLThyZW0pO1xcbiAgfVxcbiAgLmhlcm8gLmNvbnRhaW5lciBwOm50aC1jaGlsZCgzKSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHJlbSk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLmhlcm8ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgfVxcbiAgLmhlcm8ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbiAgLmFib3V0IHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XFxuICAuaGVybyB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICAuaGVybyBwIHtcXG4gICAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkwMHB4KSB7XFxuICAuaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiA1LjdyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiA1cmVtO1xcbiAgfVxcbiAgLmhlcm8ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zY3NzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7QUFDRjtBQUNBLG9CQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Es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QkY7RUF2QkE7SUFDRSxtQkFBQTtFQXlCRjtFQXhCRTtJQUNFLDRCQUFBO0VBMEJKO0VBeEJFO0lBQ0UsNEJBQUE7RUEwQko7QUFDRjtBQXZCQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBeUJGO0VBdkJBO0lBQ0UsZUFBQTtFQXlCRjtFQXZCQTtJQUNFLGFBQUE7RUF5QkY7RUF2QkE7SUFDRSxnQkFBQTtFQXlCRjtBQUNGO0FBdkJBO0VBQ0U7SUFDRSxhQUFBO0VBeUJGO0VBdkJBO0lBQ0UsbUJBQUE7RUF5QkY7QUFDRjtBQXZCQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQXlCRjtFQXZCQTtJQUNFLGFBQUE7RUF5QkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gIHNyYzogdXJsKCcvZm9udC9HaW5nZXIud29mZicpO1xcclxcbn1cXHJcXG4vKiBjb2xvcnMgLSBwYXN0ZWwgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAtLXBhc3RlbC1hcXVhOiAjNThDRkVFO1xcclxcbiAgLS1wYXN0ZWwtYmx1ZTogIzY1QTdFNjtcXHJcXG4gIC0tcGFzdGVsLWRhcmtibHVlOiAjNjY2MUFCO1xcclxcbiAgLS1wYXN0ZWwtcGluazogI0Y3OTc5RjtcXHJcXG4gIC0tcGFzdGVsLWRhcmtwaW5rOiAjQzg1NjZCO1xcclxcbiAgLS1wYXN0ZWwtbGlnaHR5ZWxsb3c6ICNGMkQ0OEY7XFxyXFxuICAtLXBhc3RlbC15ZWxsb3c6ICNGNkRBNzA7XFxyXFxuICAtLXBhc3RlbC1vcmFuZ2U6ICNFNzg5NjM7XFxyXFxuICAtLXBhc3RlbC1saWdodHZpb2xldDogIzlENzVCRjtcXHJcXG4gIC0tcGFzdGVsLXZpb2xldDogIzhENUVENDtcXHJcXG4gIC0tcGFzdGVsLXR1cmt1czogIzRDREJBNjtcXHJcXG4gIC0tcGFzdGVsLWxpZ2h0bmF2OiAjRjdFOURFO1xcclxcblxcclxcbiAgLS1wcmltYXJ5OiB2YXIoLS1wYXN0ZWwtbGlnaHR2aW9sZXQpO1xcclxcbiAgLyogbGlnaHQgKi9cXHJcXG4gIC0tbGlnaHQtYmFja2dyb3VuZDogI0VFRURGMDtcXHJcXG4gIC0tcGFzdGVsLXRleHQtbGlnaHQ6ICMxNzE4MUY7XFxyXFxuICAtLXNjcm9sbC1uYXYtbGlnaHQ6IHJnYmEoMjQ3LCAyMzMsIDIyMiwgMC4zKTtcXHJcXG4gIC0td2Via2l0LXNjcm9sbC1saWdodDogICMxNzE4MUY7XFxyXFxuICAtLXdlYmtpdC1zY3JvbGwtbGlnaHQtaG92ZXI6ICM1NTU7XFxyXFxuXFxyXFxuICAvKiBkYXJrICovXFxyXFxuICAtLWRhcmstYmFja2dyb3VuZDogICMxNzE4MUY7XFxyXFxuICAtLXBhc3RlbC10ZXh0LWRhcms6ICNGNUY4RjM7XFxyXFxuICAtLXNjcm9sbC1uYXYtZGFyazogcmdiYSgwLDAsMCwwLjMpO1xcclxcbiAgLS13ZWJraXQtc2Nyb2xsLWRhcms6IHZhcigtLXBhc3RlbC1saWdodG5hdik7XFxyXFxuICAtLXdlYmtpdC1zY3JvbGwtZGFyay1ob3ZlcjogI2E2YTZhNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogbGlnaHQgbW9kZSAqL1xcclxcbi5saWdodCB7XFxyXFxuICAtLXdlYmtpdC1zY3JvbGw6IHZhcigtLXdlYmtpdC1zY3JvbGwtbGlnaHQpO1xcclxcbiAgLS13ZWJraXQtc2Nyb2xsLWhvdmVyOiB2YXIoLS13ZWJraXQtc2Nyb2xsLWxpZ2h0LWhvdmVyKTtcXHJcXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxyXFxuICAtLXNjcm9sbC1uYXY6IHZhcigtLXNjcm9sbC1uYXYtbGlnaHQpO1xcclxcbiAgLS1zY3JvbGwtbmF2LWJvdHRvbTogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAtLXByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgLS1uYXYtY29sb3ItbGluazogdmFyKC0tcGFzdGVsLXRleHQtbGlnaHQpO1xcclxcbiAgLS1sb2dvOiB2YXIoLS1wYXN0ZWwtdGV4dC1saWdodCk7XFxyXFxuICAtLWZvbnQtY29sb3I6IHZhcigtLXBhc3RlbC10ZXh0LWxpZ2h0KTtcXHJcXG4gIC0tY2xvc2U6IHVybCguLi9wdWJsaWMvaW1hZ2VzL2Nsb3NlTGlnaHRNb2RlLnN2Zyk7XFxyXFxuICAtLW9wZW46IHVybCguLi9wdWJsaWMvaW1hZ2VzL29wZW5MaWdodE1vZGUuc3ZnKTtcXHJcXG4gIC0tbGFzdC1wYXJhZ3JhcGgtaW4taGVybzogMjAwO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLyogZGFyayBtb2RlICovXFxyXFxuLmRhcmsge1xcclxcbiAgLS13ZWJraXQtc2Nyb2xsOiB2YXIoLS13ZWJraXQtc2Nyb2xsLWRhcmspO1xcclxcbiAgLS13ZWJraXQtc2Nyb2xsLWhvdmVyOiB2YXIoLS13ZWJraXQtc2Nyb2xsLWRhcmstaG92ZXIpO1xcclxcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xcclxcbiAgLS1zY3JvbGwtbmF2OiB2YXIoLS1zY3JvbGwtbmF2LWRhcmspO1xcclxcbiAgLS1zY3JvbGwtbmF2LWJvdHRvbTp2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAtLW5hdi1jb2xvci1saW5rOiB2YXIoLS1wYXN0ZWwtdGV4dC1kYXJrKTtcXHJcXG4gIC0tbG9nbzogdmFyKC0tcGFzdGVsLXRleHQtZGFyayk7XFxyXFxuICAtLWZvbnQtY29sb3I6IHZhcigtLXBhc3RlbC10ZXh0LWRhcmspO1xcclxcbiAgLS1jbG9zZTogdXJsKC4uL3B1YmxpYy9pbWFnZXMvY2xvc2Uuc3ZnKTtcXHJcXG4gIC0tb3BlbjogdXJsKC4uL3B1YmxpYy9pbWFnZXMvb3Blbi5zdmcpO1xcclxcbiAgLS1sYXN0LXBhcmFncmFwaC1pbi1oZXJvOiAxMDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi8qIFJlc3BvbnNpdmUgVHlwb2dyYXBoeSAqL1xcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgNiAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogVHJhY2sgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDVweDtcXHJcXG59XFxyXFxuLyogSGFuZGxlICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13ZWJraXQtc2Nyb2xsKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0td2Via2l0LXNjcm9sbC1ob3Zlcik7XFxyXFxufVxcclxcbi8qIGZpbmlzaCByZXNwb25zaXZlIHR5cG9ncmFwaHkgKi9cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdW5zZXQ7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtaW4td2lkdGg6IDMyMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxMzQwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLyogbG9nbyAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICB0cmFuc2l0aW9uOiAuNXMgYmFja2dyb3VuZC1jb2xvciBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmhlYWRlckJhY2tncm91bmRTY3JvbGwge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbC1uYXYpO1xcclxcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zY3JvbGwtbmF2LWJvdHRvbSk7XFxyXFxufVxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1sb2dvKTtcXHJcXG4gIHRyYW5zaXRpb246IC41cyBjb2xvciBlYXNlLWluLW91dDtcXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIE1lbnUgKi9cXHJcXG4uZnVsbFBhZ2VNZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUuYWN0aXZlIHtcXHJcXG4gIHRvcDogLTEwMCU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY29sb3I6IHZhcigtLW5hdi1jb2xvci1saW5rKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0xMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uYXYtY29sb3ItbGluayk7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlciBhIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxuICBjb2xvcjogdmFyKC0tbmF2LWNvbG9yLWxpbmspO1xcclxcbn1cXHJcXG4ubWVudUljb24ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsb3NlKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogMnJlbTtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tb3Blbik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbi8qIGZpbmlzaCBtZW51ICovXFxyXFxuLyogaGVybyBzZWN0aW9uICovXFxyXFxuLmhlcm8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgbWluLWhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxyXFxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICB9XFxyXFxuICAmOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB1bnNldDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogdmFyKC0tbGFzdC1wYXJhZ3JhcGgtaW4taGVybyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLmNoYW5nZV9fY29sb3JzIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDJyZW07XFxyXFxuICBib3R0b206IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHVsIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAuM3JlbTtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIHVsOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICB1bDpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAnQ2hhbmdlIGNvbG9yJztcXHJcXG4gICAgbGVmdDogLjVyZW07XFxyXFxuICAgIHRvcDogLTQwJTtcXHJcXG4gICAgZm9udC1zaXplOiAuNnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgbGkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xcclxcbiAgfVxcclxcbiAgbGk6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RlbC1kYXJrcGluayk7XFxyXFxuICB9XFxyXFxuICBsaTpudGgtY2hpbGQoMikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXN0ZWwteWVsbG93KTtcXHJcXG4gIH1cXHJcXG4gIGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RlbC1kYXJrYmx1ZSk7XFxyXFxuICB9XFxyXFxuICBsaTpudGgtY2hpbGQoNCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXN0ZWwtdHVya3VzKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuLnRvZ2dsZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICByaWdodDogMnJlbTtcXHJcXG4gIGJvdHRvbTogMXJlbTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgei1pbmRleDogOTk5OTk5O1xcclxcbn1cXHJcXG4udG9nZ2xlLWljb24ge1xcclxcbiAgd2lkdGg6IDI4cHg7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi50b2dnbGUtaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLnRvZ2dsZS1sYWJlbCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi50b2dnbGUtaWNvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcbi5hYm91dCB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIGgyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgfVxcclxcbiAgLmFib3V0X19saW5lIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogLjNyZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIC5hYm91dF9fZGVzYyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xcclxcbiAgLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcclxcbiAgICBmb250LXNpemU6IDRlbTtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIHAge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcblxcclxcbiAgICAmOmxhc3Qtb2YtdHlwZXtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICAgICAgbGVmdDogLTQwcHg7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgICAgICByaWdodDogLTQwcHg7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5oZXJvIC5jb250YWluZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cmVtKTtcXHJcXG4gICAgfVxcclxcbiAgICBwOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZyZW0pO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALW1vei1rZXlmcmFtZXMgcHVsc2Uge1xcclxcbiAgMCUge1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjcwcHgpIHtcXHJcXG4gIC5oZXJvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIHAge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICB9XFxyXFxuICAuaGVybyAuY29udGFpbmVyIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcDpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnJlbSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcDpudGgtY2hpbGQoMykge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cmVtKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLmFib3V0X19kZXNjIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYShtYXgtd2lkdGg6OTkxcHgpIHtcXHJcXG4gIC5iYW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xcclxcbiAgLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcclxcbiAgICBmb250LXNpemU6IDVlbTtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIC5jb250YWluZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04cmVtKTtcXHJcXG4gICAgfVxcclxcbiAgICBwOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcmVtKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xcclxcbiAgLmhlcm8ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuaGVybyBwIHtcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgfVxcclxcbiAgLmhlcm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgfVxcclxcbiAgLmFib3V0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KXtcXHJcXG4gIC5oZXJvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIHAge1xcclxcbiAgICBsaW5lLWhlaWdodDogNC41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTAwcHgpe1xcclxcbiAgLmhlcm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNS43cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIyNWRhZDY3OGVhZDgyNzUwZGYwNFwiOyB9IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCB8fCB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlTXlGdW5jXCJdID0gZnVuY3Rpb24oY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpIHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSBmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==