"use strict";
self["webpackHotUpdateMyFunc"](0,Array(23).concat([
/* 23 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

/* import css style */

/* Menu toggle */

function menuToggle() {
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("toggle");
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
}

function closeMenu() {}

var nav = document.querySelector('nav');
var li = nav.querySelectorAll('li');
li.forEach(function (element) {
  element.addEventListener('click', menuToggle);
});
document.querySelector("#toggle").addEventListener("click", menuToggle);
/* Scroll down => header style */

window.onscroll = function () {
  scrollNavbar();
};

var scrollNavbar = function scrollNavbar() {
  var navBar = document.querySelector(".header");

  if (document.documentElement.scrollTop > 40) {
    navBar.classList.add("headerBackgroundScroll");
  } else {
    navBar.classList.remove("headerBackgroundScroll");
  }
};
/* animate hero text */


setTimeout(animateHero, 0);

function animateHero() {
  var middleText = document.querySelector('#hero');
  middleText.classList.add('animate__animated', 'animate__rubberBand');
}

setTimeout(animateHeroShake, 3000);

function animateHeroShake() {
  var lastTextInHero = document.querySelector('#hero p:last-child');
  lastTextInHero.classList.add('animate__animated', 'animate__flipInY');
}

var page = document.querySelector(".page");
var toggle = page.querySelector(".toggle-input");
var toggleIcon = page.querySelector(".toggle-icon");
/* set theme and localStorage on page load */

setCheckedState();

function setCheckedState() {
  /* checks if localStorage has a "checked" value set at all */
  if (!(localStorage.checked === undefined)) {
    /* if it does, it sets the state of the toggle accordingly */
    toggle.checked = isTrue(localStorage.getItem("checked"));
    /* after setting the toggle state, the theme is adjusted according to the checked state */

    toggleTheme();
  }
}

function toggleTheme() {
  /* Toggle theme based on state of checkbox */
  if (toggle.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }
  /* replace icons on page */


  toggleIconTheme();
  /* set the value of the "checked" key in localStorage */

  localStorage.setItem("checked", toggle.checked);
}

function toggleIconTheme() {
  /* Replace icons not able to be targeted by css variables */
  if (page.classList.contains("light")) {
    toggleIcon.src = "public/images/moon.svg";
  } else {
    toggleIcon.src = "public/images/sun.svg";
  }
}

function isTrue(value) {
  /* convert string to boolean */
  return value === "true";
}
/* Toggle theme any time the state of the checkbox changes */


toggle.addEventListener("change", toggleTheme);
var darkpink = document.querySelector('#darkpink');
var yellow = document.querySelector('#yellow');
var darkblue = document.querySelector('#darkblue');
var turkus = document.querySelector('#turkus');

function changeColor(event) {
  if (event.srcElement.id === 'darkpink') {
    document.documentElement.style.setProperty('--primary', '#C8566B');
  }

  if (event.srcElement.id === 'yellow') {
    document.documentElement.style.setProperty('--primary', '#F6DA70');
  }

  if (event.srcElement.id === 'turkus') {
    document.documentElement.style.setProperty('--primary', '#4CDBA6');
  }

  if (event.srcElement.id === 'darkblue') {
    document.documentElement.style.setProperty('--primary', '#6661AB');
  }
}

darkpink.addEventListener('click', changeColor);
yellow.addEventListener('click', changeColor);
darkblue.addEventListener('click', changeColor);
turkus.addEventListener('click', changeColor);

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 26 */
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 27 */
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 28 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 29 */
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 30 */
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 31 */
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Ginger;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n/* colors - pastel */\n:root {\n  --pastel-aqua: #58CFEE;\n  --pastel-blue: #65A7E6;\n  --pastel-darkblue: #6661AB;\n  --pastel-pink: #F7979F;\n  --pastel-darkpink: #C8566B;\n  --pastel-lightyellow: #F2D48F;\n  --pastel-yellow: #F6DA70;\n  --pastel-orange: #E78963;\n  --pastel-lightviolet: #9D75BF;\n  --pastel-violet: #8D5ED4;\n  --pastel-turkus: #4CDBA6;\n  --pastel-lightnav: #F7E9DE;\n  --primary: var(--pastel-lightviolet);\n  /* light */\n  --light-background: #EEEDF0;\n  --pastel-text-light: #17181F;\n  --scroll-nav-light: rgba(255, 255, 255, 0.5);\n  --webkit-scroll-light: #17181F;\n  --webkit-scroll-light-hover: #555;\n  /* dark */\n  --dark-background: #17181F;\n  --pastel-text-dark: #F5F8F3;\n  --scroll-nav-dark: rgba(0,0,0,0.3);\n  --webkit-scroll-dark: var(--pastel-lightnav);\n  --webkit-scroll-dark-hover: #a6a6a6;\n}\n\n/* light mode */\n.light {\n  --webkit-scroll: var(--webkit-scroll-light);\n  --webkit-scroll-hover: var(--webkit-scroll-light-hover);\n  --background: var(--light-background);\n  --scroll-nav: var(--scroll-nav-light);\n  --scroll-nav-bottom: var(--primary);\n  --primary-color: var(--primary);\n  --nav-color-link: var(--pastel-text-light);\n  --font-color: var(--pastel-text-light);\n  --close: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  --open: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  --last-paragraph-in-hero: 200;\n  transition: background-color 1s ease-in-out;\n}\n\n/* dark mode */\n.dark {\n  --webkit-scroll: var(--webkit-scroll-dark);\n  --webkit-scroll-hover: var(--webkit-scroll-dark-hover);\n  --background: var(--dark-background);\n  --scroll-nav: var(--scroll-nav-dark);\n  --scroll-nav-bottom:var(--primary);\n  --primary-color: var(--primary);\n  --nav-color-link: var(--pastel-text-dark);\n  --font-color: var(--pastel-text-dark);\n  --close: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  --open: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  --last-paragraph-in-hero: 100;\n  transition: all 1s ease-in-out;\n}\n\n/* Responsive Typography */\nhtml {\n  font-size: 16px;\n  overflow-x: hidden;\n}\n\n@media screen and (min-width: 320px) {\n  html {\n    font-size: calc(16px + 6 * (100vw - 320px) / 680);\n  }\n}\n@media screen and (min-width: 1000px) {\n  html {\n    font-size: 22px;\n  }\n}\n@media screen and (min-width: 1366px) {\n  html {\n    font-size: 25px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  html {\n    font-size: 30px;\n  }\n}\n/* Track */\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--webkit-scroll);\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: var(--webkit-scroll-hover);\n}\n\n/* finish responsive typography */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: unset;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: var(--background);\n}\n\n.container {\n  min-width: 320px;\n  max-width: 1340px;\n  width: 100%;\n  padding: 0 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n/* logo */\n.header {\n  box-sizing: content-box;\n  min-height: 80px;\n  width: 100%;\n  position: sticky;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 99;\n  transition: 0.5s background-color ease-in-out;\n}\n\n.headerBackgroundScroll {\n  background-color: var(--scroll-nav);\n  border-bottom: 1px solid var(--scroll-nav-bottom);\n}\n\n.logo {\n  display: inline-block;\n  font-size: 30px;\n  font-family: Ginger;\n  margin-left: 2rem;\n  color: var(--primary);\n  transition: 0.5s color ease-in-out;\n}\n\n/* Menu */\n.fullPageMenu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--background);\n  transition: 0.5s;\n  z-index: 999;\n}\n\n.fullPageMenu.active {\n  top: -100%;\n}\n\n.fullPageMenu .banner {\n  position: relative;\n  width: 600px;\n  height: 100%;\n}\n\n.fullPageMenu .banner img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.fullPageMenu .nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.fullPageMenu .nav ul {\n  position: relative;\n}\n\n.fullPageMenu .nav ul li {\n  position: relative;\n  list-style: none;\n  padding: 0 20px;\n  margin: 5px 0;\n  overflow: hidden;\n  display: table;\n}\n\n.fullPageMenu .nav ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--primary-color);\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\n\n.fullPageMenu .nav ul li:hover:before {\n  transition: transform 0.5s ease-in-out;\n  transform: scaleY(1);\n  transform-origin: top;\n}\n\n.fullPageMenu .nav ul li a {\n  position: relative;\n  color: var(--nav-color-link);\n  text-decoration: none;\n  font-size: 3em;\n  font-weight: 700;\n  line-height: 1em;\n  display: inline-block;\n  text-transform: uppercase;\n  transition: 0.5s ease-in-out;\n}\n\n.fullPageMenu .nav ul li a::before {\n  content: attr(data-text);\n  position: absolute;\n  bottom: -100%;\n  left: 0;\n  color: var(--nav-color-link);\n}\n\n.fullPageMenu .nav ul li:hover a {\n  transform: translateY(-100%);\n  color: var(--nav-color-link);\n}\n\n.menuIcon {\n  position: fixed;\n  top: 10px;\n  right: 2rem;\n  width: 60px;\n  height: 60px;\n  background: var(--close);\n  background-size: 40px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: 10px;\n  z-index: 9999;\n}\n\n.menuIcon.active {\n  top: 10px;\n  right: 2rem;\n  width: 60px;\n  height: 60px;\n  background: var(--open);\n  background-size: 40px;\n  background-repeat: no-repeat;\n  background-position: 10px;\n  z-index: 9999;\n}\n\n/* finish menu */\n/* hero section */\n.hero {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--font-color);\n  flex-direction: column;\n  flex-flow: column nowrap;\n  min-height: auto;\n  margin-top: 4rem;\n  height: auto;\n}\n.hero p {\n  font-family: Ginger;\n  font-size: 2.5rem;\n}\n.hero p span {\n  font-family: Ginger;\n  color: var(--primary-color);\n}\n.hero p:last-of-type {\n  font-family: unset;\n  font-size: 1rem;\n  font-weight: var(--last-paragraph-in-hero);\n}\n\n.change__colors {\n  position: fixed;\n  left: 2rem;\n  bottom: 1rem;\n  width: 100%;\n}\n.change__colors ul {\n  margin: 0;\n  padding: 0.3rem;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  list-style-type: none;\n  overflow: hidden;\n  transition: all 1s ease-in-out;\n}\n.change__colors ul:hover {\n  width: 100%;\n  transition: all 1s ease-in-out;\n}\n.change__colors ul:hover::before {\n  position: absolute;\n  content: \"Change color\";\n  left: 0.5rem;\n  top: -40%;\n  font-size: 0.6rem;\n  color: var(--font-color);\n}\n.change__colors li {\n  display: block;\n  margin-left: 0.5rem;\n  margin-top: 0.5rem;\n  float: left;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background-color: gray;\n  transform: translateY(-0.5rem);\n  transition: all 1s ease-in-out;\n}\n.change__colors li:nth-child(1) {\n  margin-left: 0;\n  background-color: var(--pastel-darkpink);\n}\n.change__colors li:nth-child(2) {\n  background-color: var(--pastel-yellow);\n}\n.change__colors li:nth-child(3) {\n  background-color: var(--pastel-darkblue);\n}\n.change__colors li:nth-child(4) {\n  background-color: var(--pastel-turkus);\n}\n\n.toggle {\n  position: fixed;\n  right: 2rem;\n  bottom: 1rem;\n  user-select: none;\n  z-index: 999999;\n}\n\n.toggle-icon {\n  width: 28px;\n  user-select: none;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  user-select: none;\n}\n\n.toggle-label {\n  cursor: pointer;\n  transition: all 0.3s ease;\n  user-select: none;\n}\n\n.toggle-icon:hover {\n  transform: scale(1.1);\n}\n\n.section {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n}\n.section .container {\n  display: flex;\n  align-items: center;\n}\n.section h2 {\n  color: var(--font-color);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n.section .line {\n  margin-top: 0.3rem;\n  width: 80%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.section .about__desc {\n  text-align: justify;\n  margin-top: 2rem;\n  line-height: 2rem;\n  color: var(--font-color);\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n}\n.section .about__desc span {\n  font-family: Ginger;\n  color: var(--primary);\n}\n.section .button {\n  padding: 0.5rem 2rem;\n  border-radius: 1000px;\n  outline: none;\n  border: 2px solid var(--primary);\n  background-color: unset;\n  color: var(--font-color);\n  font-weight: 700;\n  transition: background-color 0.5s ease-in-out;\n  cursor: pointer;\n}\n.section .button:hover {\n  background-color: var(--primary);\n}\n\n.skill {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.skill .line {\n  margin-bottom: 2rem;\n}\n\n.m-scroll {\n  display: flex;\n  position: relative;\n  height: 5rem;\n  width: 100%;\n  overflow: hidden;\n  z-index: 1;\n}\n.m-scroll__title {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  white-space: nowrap;\n  transition: all 1s ease;\n}\n.m-scroll__title > .m-scroll__title-right {\n  display: flex;\n  animation: scrollTextToRight 33s infinite linear;\n}\n.m-scroll__title > .m-scroll__title-right h2 {\n  font-family: Ginger;\n  font-weight: 200;\n}\n.m-scroll__title > .m-scroll__title-left {\n  display: flex;\n  animation: scrollTextToLeft 33s infinite linear;\n}\n.m-scroll__title > .m-scroll__title-left h2 {\n  font-weight: 400;\n}\n.m-scroll__title h2 {\n  margin: 0;\n  color: var(--font-color);\n  font-size: 5rem;\n  transition: all 2s ease;\n  text-transform: uppercase;\n  cursor: default;\n}\n.m-scroll__title h2 span {\n  margin-left: 2rem;\n}\n.m-scroll__title h2 span:hover {\n  color: var(--primary);\n  transition: color 0.3s ease-in-out;\n}\n\n@keyframes scrollTextToLeft {\n  from {\n    transform: translateX(0%);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n@keyframes scrollTextToRight {\n  from {\n    transform: translateX(-50%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n.section .container .project {\n  display: flex;\n  align-items: center;\n  width: 80%;\n  gap: 1rem;\n  color: var(--font-color);\n  transition: all 0.5s ease-in-out;\n}\n.section .container .project:hover {\n  transition: all 0.5s ease-in-out;\n  transform: translateX(1rem);\n}\n.section .container .project .project__number {\n  font-size: 1rem;\n  align-self: flex-start;\n  font-family: Ginger;\n}\n.section .container .project .project__name {\n  font-size: 2rem;\n  font-family: Ginger;\n  padding: 1rem 0;\n  word-break: break-word;\n}\n\n/* Media start */\n@media screen and (min-width: 500px) {\n  .fullPageMenu .nav ul li a {\n    font-size: 4em;\n  }\n  .hero p {\n    font-size: 3rem;\n    justify-content: center;\n    margin-top: 0;\n  }\n  .hero p:last-of-type {\n    position: relative;\n  }\n  .hero p:last-of-type::before {\n    content: \"\";\n    position: absolute;\n    width: 30px;\n    height: 1px;\n    background-color: var(--font-color);\n    left: -40px;\n    top: calc(50% - 2px);\n  }\n  .hero p:last-of-type::after {\n    content: \"\";\n    position: absolute;\n    width: 30px;\n    height: 1px;\n    background-color: var(--font-color);\n    right: -40px;\n    top: calc(50% - 2px);\n  }\n  .hero .container {\n    align-items: center;\n  }\n  .hero .container p:nth-child(1) {\n    transform: translateX(-4rem);\n  }\n  .hero .container p:nth-child(3) {\n    transform: translateX(6rem);\n  }\n}\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@-moz-keyframes pulse {\n  0% {\n    -moz-transform: scale(1);\n    transform: scale(1);\n  }\n  50% {\n    -moz-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    -moz-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@media screen and (min-width: 670px) {\n  .hero {\n    margin-top: 0;\n  }\n  .hero p {\n    font-size: 4rem;\n  }\n  .hero .container {\n    align-items: center;\n  }\n  .hero .container p:nth-child(1) {\n    transform: translateX(-6rem);\n  }\n  .hero .container p:nth-child(3) {\n    transform: translateX(8rem);\n  }\n  .section .about__desc {\n    text-align: center;\n    padding: 0 2rem;\n  }\n  .section .container .project .project__name {\n    font-size: 3rem;\n  }\n}\n@media (max-width: 991px) {\n  .banner {\n    display: none;\n  }\n}\n@media screen and (min-width: 991px) {\n  .fullPageMenu .nav ul li a {\n    font-size: 5em;\n  }\n  .hero {\n    margin-top: 0;\n  }\n  .hero .container {\n    align-items: center;\n  }\n  .hero .container p:nth-child(1) {\n    transform: translateX(-8rem);\n  }\n  .hero .container p:nth-child(3) {\n    transform: translateX(10rem);\n  }\n}\n@media screen and (min-width: 1024px) {\n  .hero {\n    height: calc(100vh - 80px);\n    justify-content: center;\n    align-items: center;\n  }\n  .hero p {\n    font-size: 5rem;\n  }\n  .hero {\n    margin-top: 0;\n  }\n  .section {\n    margin-top: 1rem;\n  }\n}\n@media screen and (min-width: 1366px) {\n  .section .about__desc {\n    text-align: center;\n    padding: 0 1rem;\n  }\n}\n@media screen and (min-width: 1600px) {\n  .hero {\n    margin-top: 0;\n  }\n  .hero p {\n    line-height: 4.5rem;\n  }\n  .section .about__desc {\n    text-align: center;\n    padding: 0;\n  }\n}\n@media screen and (min-width: 1900px) {\n  .hero p {\n    font-size: 5.7rem;\n    line-height: 5rem;\n  }\n  .hero {\n    margin-top: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./scss/main.scss"],"names":[],"mappings":"AAEA;EACE,mBAAA;EACA,4CAAA;AACF;AACA,oBAAA;AACA;EACE,sBAAA;EACA,sBAAA;EACA,0BAAA;EACA,sBAAA;EACA,0BAAA;EACA,6BAAA;EACA,wBAAA;EACA,wBAAA;EACA,6BAAA;EACA,wBAAA;EACA,wBAAA;EACA,0BAAA;EAEA,oCAAA;EACA,UAAA;EACA,2BAAA;EACA,4BAAA;EACA,4CAAA;EACA,8BAAA;EACA,iCAAA;EAEA,SAAA;EACA,0BAAA;EACA,2BAAA;EACA,kCAAA;EACA,4CAAA;EACA,mCAAA;AADF;;AAIA,eAAA;AACA;EACE,2CAAA;EACA,uDAAA;EACA,qCAAA;EACA,qCAAA;EACA,mCAAA;EACA,+BAAA;EACA,0CAAA;EACA,sCAAA;EACA,gDAAA;EACA,+CAAA;EACA,6BAAA;EACA,2CAAA;AADF;;AAGA,cAAA;AACA;EACE,0CAAA;EACA,sDAAA;EACA,oCAAA;EACA,oCAAA;EACA,kCAAA;EACA,+BAAA;EACA,yCAAA;EACA,qCAAA;EACA,gDAAA;EACA,+CAAA;EACA,6BAAA;EACA,8BAAA;AAAF;;AAEA,0BAAA;AACA;EACE,eAAA;EACA,kBAAA;AACF;;AACA;EACE;IACE,iDAAA;EAEF;AACF;AAAA;EACE;IACE,eAAA;EAEF;AACF;AAAA;EACE;IACE,eAAA;EAEF;AACF;AAAA;EACE;IACE,eAAA;EAEF;AACF;AAAA,UAAA;AACA;EACE,8BAAA;EACA,mBAAA;AAEF;;AAAA;EACE,UAAA;AAGF;;AADA,WAAA;AACA;EACE,gCAAA;EACA,mBAAA;AAIF;;AAFA,oBAAA;AACA;EACE,sCAAA;AAKF;;AAHA,iCAAA;AACA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;EACA,kCAAA;AAMF;;AAJA;EACE,qBAAA;EACA,YAAA;AAOF;;AALA;EACE,iBAAA;EACA,mCAAA;AAQF;;AANA;EACE,gBAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,sBAAA;AASF;;AAPA,SAAA;AACA;EACE,uBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,6CAAA;AAUF;;AARA;EACG,mCAAA;EACA,iDAAA;AAWH;;AATA;EACE,qBAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,qBAAA;EACA,kCAAA;AAYF;;AAVA,SAAA;AACA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,6BAAA;EACA,gBAAA;EACA,YAAA;AAaF;;AAXA;EACE,UAAA;AAcF;;AAZA;EACE,kBAAA;EACA,YAAA;EACA,YAAA;AAeF;;AAbA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAgBF;;AAdA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAiBF;;AAfA;EACE,kBAAA;AAkBF;;AAhBA;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;AAmBF;;AAjBA;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;EACA,sCAAA;EACA,oBAAA;EACA,wBAAA;AAoBF;;AAlBA;EACE,sCAAA;EACA,oBAAA;EACA,qBAAA;AAqBF;;AAnBA;EACE,kBAAA;EACA,4BAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,4BAAA;AAsBF;;AApBA;EACE,wBAAA;EACA,kBAAA;EACA,aAAA;EACA,OAAA;EACA,4BAAA;AAuBF;;AArBA;EACE,4BAAA;EACA,4BAAA;AAwBF;;AAtBA;EACE,eAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,qBAAA;EACA,eAAA;EACA,4BAAA;EACA,yBAAA;EACA,aAAA;AAyBF;;AAvBA;EACE,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,qBAAA;EACA,4BAAA;EACA,yBAAA;EACA,aAAA;AA0BF;;AAvBA,gBAAA;AACA,iBAAA;AACA;EACE,kBAAA;EACA,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,wBAAA;EACA,sBAAA;EACA,wBAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;AA0BF;AAzBE;EACE,mBAAA;EACA,iBAAA;AA2BJ;AA1BI;EACE,mBAAA;EACA,2BAAA;AA4BN;AA1BE;EACE,kBAAA;EACA,eAAA;EACA,0CAAA;AA4BJ;;AAxBA;EACE,eAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;AA2BF;AA1BE;EACE,SAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,gBAAA;EACA,8BAAA;AA4BJ;AA1BE;EACE,WAAA;EACA,8BAAA;AA4BJ;AA1BE;EACE,kBAAA;EACA,uBAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,wBAAA;AA4BJ;AA1BE;EACE,cAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,8BAAA;EACA,8BAAA;AA4BJ;AA1BE;EACE,cAAA;EACA,wCAAA;AA4BJ;AA1BE;EACE,sCAAA;AA4BJ;AA1BE;EACE,wCAAA;AA4BJ;AA1BE;EACE,sCAAA;AA4BJ;;AAxBA;EACE,eAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;AA2BF;;AAzBA;EACE,WAAA;EACA,iBAAA;EACA,gCAAA;AA4BF;;AA1BA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,iBAAA;AA6BF;;AA3BA;EACE,eAAA;EACA,yBAAA;EACA,iBAAA;AA8BF;;AA5BA;EACE,qBAAA;AA+BF;;AA7BA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;AAgCF;AA/BE;EACE,aAAA;EACA,mBAAA;AAiCJ;AA/BE;EACE,wBAAA;EACA,yBAAA;EACA,gBAAA;EACA,iBAAA;AAiCJ;AA/BE;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,mCAAA;AAiCJ;AA/BE;EACE,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,wBAAA;EACA,iBAAA;EACA,mBAAA;AAiCJ;AAhCI;EACE,mBAAA;EACA,qBAAA;AAkCN;AA/BE;EACE,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,gCAAA;EACA,uBAAA;EACA,wBAAA;EACA,gBAAA;EACA,6CAAA;EACA,eAAA;AAiCJ;AAhCI;EACE,gCAAA;AAkCN;;AA9BA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;AAiCF;AAhCE;EACE,mBAAA;AAkCJ;;AA9BA;EACE,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;AAiCF;AAhCE;EACE,aAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AAkCJ;AAjCI;EACE,aAAA;EACA,gDAAA;AAmCN;AAlCM;EACE,mBAAA;EACA,gBAAA;AAoCR;AAjCI;EACE,aAAA;EACA,+CAAA;AAmCN;AAlCM;EACE,gBAAA;AAoCR;AAjCI;EACE,SAAA;EACA,wBAAA;EACA,eAAA;EACA,uBAAA;EACA,yBAAA;EACA,eAAA;AAmCN;AAlCM;EACE,iBAAA;AAoCR;AAlCM;EACE,qBAAA;EACA,kCAAA;AAoCR;;AA9BA;EACE;IAAS,yBAAA;EAkCT;EAjCA;IAAK,2BAAA;EAoCL;AACF;AAnCA;EACE;IAAS,2BAAA;EAsCT;EArCA;IAAK,wBAAA;EAwCL;AACF;AArCI;EACE,aAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;EACA,wBAAA;EACA,gCAAA;AAuCN;AArCM;EACE,gCAAA;EACA,2BAAA;AAuCR;AArCM;EACE,eAAA;EACA,sBAAA;EACA,mBAAA;AAuCR;AApCM;EACE,eAAA;EACA,mBAAA;EACA,eAAA;EACA,sBAAA;AAsCR;;AA/BA,gBAAA;AACA;EACE;IACE,cAAA;EAkCF;EAhCA;IACE,eAAA;IACA,uBAAA;IACA,aAAA;EAkCF;EAhCE;IACE,kBAAA;EAkCJ;EAjCI;IACE,WAAA;IACA,kBAAA;IACA,WAAA;IACA,WAAA;IACA,mCAAA;IACA,WAAA;IACA,oBAAA;EAmCN;EAjCI;IACE,WAAA;IACA,kBAAA;IACA,WAAA;IACA,WAAA;IACA,mCAAA;IACA,YAAA;IACA,oBAAA;EAmCN;EA/BA;IACE,mBAAA;EAiCF;EAhCE;IACE,4BAAA;EAkCJ;EAhCE;IACE,2BAAA;EAkCJ;AACF;AA/BA;EACE;IACE,2BAAA;IACA,mBAAA;EAiCF;EA9BA;IACE,6BAAA;IACA,qBAAA;EAgCF;EA7BA;IACE,2BAAA;IACA,mBAAA;EA+BF;AACF;AA5BA;EACE;IACE,wBAAA;IACA,mBAAA;EA8BF;EA3BA;IACE,0BAAA;IACA,qBAAA;EA6BF;EA1BA;IACE,wBAAA;IACA,mBAAA;EA4BF;AACF;AA1BA;EACE;IACE,aAAA;EA4BF;EA1BA;IACE,eAAA;EA4BF;EA1BA;IACE,mBAAA;EA4BF;EA1BE;IACE,4BAAA;EA4BJ;EAzBE;IACE,2BAAA;EA2BJ;EAvBE;IACE,kBAAA;IACA,eAAA;EAyBJ;EAtBA;IACE,eAAA;EAwBF;AACF;AAtBA;EACE;IACE,aAAA;EAwBF;AACF;AAtBA;EACE;IACE,cAAA;EAwBF;EAtBA;IACE,aAAA;EAwBF;EAtBA;IACE,mBAAA;EAwBF;EAvBE;IACE,4BAAA;EAyBJ;EAvBE;IACE,4BAAA;EAyBJ;AACF;AAtBA;EACE;IACE,0BAAA;IACA,uBAAA;IACA,mBAAA;EAwBF;EAtBA;IACE,eAAA;EAwBF;EAtBA;IACE,aAAA;EAwBF;EAtBA;IACE,gBAAA;EAwBF;AACF;AAtBA;EAEI;IACE,kBAAA;IACA,eAAA;EAuBJ;AACF;AApBA;EACE;IACE,aAAA;EAsBF;EApBA;IACE,mBAAA;EAsBF;EAnBE;IACE,kBAAA;IACA,UAAA;EAqBJ;AACF;AAlBA;EACE;IACE,iBAAA;IACA,iBAAA;EAoBF;EAlBA;IACE,aAAA;EAoBF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');\r\n@font-face {\r\n  font-family: Ginger;\r\n  src: url('/font/Ginger.woff');\r\n}\r\n/* colors - pastel */\r\n:root {\r\n  --pastel-aqua: #58CFEE;\r\n  --pastel-blue: #65A7E6;\r\n  --pastel-darkblue: #6661AB;\r\n  --pastel-pink: #F7979F;\r\n  --pastel-darkpink: #C8566B;\r\n  --pastel-lightyellow: #F2D48F;\r\n  --pastel-yellow: #F6DA70;\r\n  --pastel-orange: #E78963;\r\n  --pastel-lightviolet: #9D75BF;\r\n  --pastel-violet: #8D5ED4;\r\n  --pastel-turkus: #4CDBA6;\r\n  --pastel-lightnav: #F7E9DE;\r\n\r\n  --primary: var(--pastel-lightviolet);\r\n  /* light */\r\n  --light-background: #EEEDF0;\r\n  --pastel-text-light: #17181F;\r\n  --scroll-nav-light: rgba(255, 255, 255, 0.5);\r\n  --webkit-scroll-light:  #17181F;\r\n  --webkit-scroll-light-hover: #555;\r\n\r\n  /* dark */\r\n  --dark-background:  #17181F;\r\n  --pastel-text-dark: #F5F8F3;\r\n  --scroll-nav-dark: rgba(0,0,0,0.3);\r\n  --webkit-scroll-dark: var(--pastel-lightnav);\r\n  --webkit-scroll-dark-hover: #a6a6a6;\r\n}\r\n\r\n/* light mode */\r\n.light {\r\n  --webkit-scroll: var(--webkit-scroll-light);\r\n  --webkit-scroll-hover: var(--webkit-scroll-light-hover);\r\n  --background: var(--light-background);\r\n  --scroll-nav: var(--scroll-nav-light);\r\n  --scroll-nav-bottom: var(--primary);\r\n  --primary-color: var(--primary);\r\n  --nav-color-link: var(--pastel-text-light);\r\n  --font-color: var(--pastel-text-light);\r\n  --close: url(../public/images/closeLightMode.svg);\r\n  --open: url(../public/images/openLightMode.svg);\r\n  --last-paragraph-in-hero: 200;\r\n  transition: background-color 1s ease-in-out;\r\n}\r\n/* dark mode */\r\n.dark {\r\n  --webkit-scroll: var(--webkit-scroll-dark);\r\n  --webkit-scroll-hover: var(--webkit-scroll-dark-hover);\r\n  --background: var(--dark-background);\r\n  --scroll-nav: var(--scroll-nav-dark);\r\n  --scroll-nav-bottom:var(--primary);\r\n  --primary-color: var(--primary);\r\n  --nav-color-link: var(--pastel-text-dark);\r\n  --font-color: var(--pastel-text-dark);\r\n  --close: url(../public/images/close.svg);\r\n  --open: url(../public/images/open.svg);\r\n  --last-paragraph-in-hero: 100;\r\n  transition: all 1s ease-in-out;\r\n}\r\n/* Responsive Typography */\r\nhtml {\r\n  font-size: 16px;\r\n  overflow-x: hidden;\r\n}\r\n@media screen and (min-width: 320px) {\r\n  html {\r\n    font-size: calc(16px + 6 * ((100vw - 320px) / 680));\r\n  }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  html {\r\n    font-size: 22px;\r\n  }\r\n}\r\n@media screen and (min-width: 1366px) {\r\n  html {\r\n    font-size: 25px;\r\n  }\r\n}\r\n@media screen and (min-width: 1600px) {\r\n  html {\r\n    font-size: 30px;\r\n  }\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 10px;\r\n}\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--webkit-scroll);\r\n  border-radius: 10px;\r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: var(--webkit-scroll-hover);\r\n}\r\n/* finish responsive typography */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: unset;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: var(--background);\r\n}\r\n.container {\r\n  min-width: 320px;\r\n  max-width: 1340px;\r\n  width: 100%;\r\n  padding: 0 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n}\r\n/* logo */\r\n.header {\r\n  box-sizing: content-box;\r\n  min-height: 80px;\r\n  width: 100%;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  z-index: 99;\r\n  transition: .5s background-color ease-in-out;\r\n}\r\n.headerBackgroundScroll {\r\n   background-color: var(--scroll-nav);\r\n   border-bottom: 1px solid var(--scroll-nav-bottom);\r\n}\r\n.logo {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-family: Ginger;\r\n  margin-left: 2rem;\r\n  color: var(--primary);\r\n  transition: .5s color ease-in-out;\r\n}\r\n/* Menu */\r\n.fullPageMenu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: var(--background);\r\n  transition: 0.5s;\r\n  z-index: 999;\r\n}\r\n.fullPageMenu.active {\r\n  top: -100%;\r\n}\r\n.fullPageMenu .banner {\r\n  position: relative;\r\n  width: 600px;\r\n  height: 100%;\r\n}\r\n.fullPageMenu .banner img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.fullPageMenu .nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n.fullPageMenu .nav ul {\r\n  position: relative;\r\n}\r\n.fullPageMenu .nav ul li {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 0 20px;\r\n  margin: 5px 0;\r\n  overflow: hidden;\r\n  display: table;\r\n}\r\n.fullPageMenu .nav ul li:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--primary-color);\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(0);\r\n  transform-origin: bottom;\r\n}\r\n.fullPageMenu .nav ul li:hover:before {\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: scaleY(1);\r\n  transform-origin: top;\r\n}\r\n.fullPageMenu .nav ul li a {\r\n  position: relative;\r\n  color: var(--nav-color-link);\r\n  text-decoration: none;\r\n  font-size: 3em;\r\n  font-weight: 700;\r\n  line-height: 1em;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fullPageMenu .nav ul li a::before {\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  bottom: -100%;\r\n  left: 0;\r\n  color: var(--nav-color-link);\r\n}\r\n.fullPageMenu .nav ul li:hover a {\r\n  transform: translateY(-100%);\r\n  color: var(--nav-color-link);\r\n}\r\n.menuIcon {\r\n  position: fixed;\r\n  top: 10px;\r\n  right: 2rem;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: var(--close);\r\n  background-size: 40px;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n  z-index: 9999;\r\n}\r\n.menuIcon.active {\r\n  top: 10px;\r\n  right: 2rem;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: var(--open);\r\n  background-size: 40px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px;\r\n  z-index: 9999;\r\n}\r\n\r\n/* finish menu */\r\n/* hero section */\r\n.hero {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n  flex-direction: column;\r\n  flex-flow: column nowrap;\r\n  min-height: auto;\r\n  margin-top: 4rem;\r\n  height: auto;\r\n  p {\r\n    font-family: Ginger;\r\n    font-size: 2.5rem;\r\n    span {\r\n      font-family: Ginger;\r\n      color: var(--primary-color);\r\n    }\r\n  &:last-of-type {\r\n    font-family: unset;\r\n    font-size: 1rem;\r\n    font-weight: var(--last-paragraph-in-hero);\r\n    }\r\n  }\r\n}\r\n.change__colors {\r\n  position: fixed;\r\n  left: 2rem;\r\n  bottom: 1rem;\r\n  width: 100%;\r\n  ul {\r\n    margin: 0;\r\n    padding: .3rem;\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n    overflow: hidden;\r\n    transition: all 1s ease-in-out;\r\n  }\r\n  ul:hover {\r\n    width: 100%;\r\n    transition: all 1s ease-in-out;\r\n  }\r\n  ul:hover::before {\r\n    position: absolute;\r\n    content: 'Change color';\r\n    left: .5rem;\r\n    top: -40%;\r\n    font-size: .6rem;\r\n    color: var(--font-color);\r\n  }\r\n  li {\r\n    display: block;\r\n    margin-left: .5rem;\r\n    margin-top: .5rem;\r\n    float: left;\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    background-color: gray;\r\n    transform: translateY(-0.5rem);\r\n    transition: all 1s ease-in-out;\r\n  }\r\n  li:nth-child(1) {\r\n    margin-left: 0;\r\n    background-color: var(--pastel-darkpink);\r\n  }\r\n  li:nth-child(2) {\r\n    background-color: var(--pastel-yellow);\r\n  }\r\n  li:nth-child(3) {\r\n    background-color: var(--pastel-darkblue);\r\n  }\r\n  li:nth-child(4) {\r\n    background-color: var(--pastel-turkus);\r\n  }\r\n\r\n}\r\n.toggle {\r\n  position: fixed;\r\n  right: 2rem;\r\n  bottom: 1rem;\r\n  user-select: none;\r\n  z-index: 999999;\r\n}\r\n.toggle-icon {\r\n  width: 28px;\r\n  user-select: none;\r\n  transition: all .4s ease-in-out;\r\n}\r\n.toggle-input {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n  user-select: none;\r\n}\r\n.toggle-label {\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  user-select: none;\r\n}\r\n.toggle-icon:hover {\r\n  transform: scale(1.1);\r\n}\r\n.section {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  margin-top: 5rem;\r\n  margin-bottom: 5rem;\r\n  .container {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  h2 {\r\n    color: var(--font-color);\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    font-size: .8rem;\r\n  }\r\n  .line {\r\n    margin-top: .3rem;\r\n    width: 80%;\r\n    height: 2px;\r\n    background-color: var(--font-color);\r\n  }\r\n  .about__desc {\r\n    text-align: justify;\r\n    margin-top: 2rem;\r\n    line-height: 2rem;\r\n    color: var(--font-color);\r\n    font-size: 1.5rem;\r\n    margin-bottom: 2rem;\r\n    span {\r\n      font-family: Ginger;\r\n      color: var(--primary);\r\n    }\r\n  }\r\n  .button {\r\n    padding: .5rem 2rem;\r\n    border-radius: 1000px;\r\n    outline: none;\r\n    border: 2px solid var(--primary);\r\n    background-color: unset;\r\n    color: var(--font-color);\r\n    font-weight: 700;\r\n    transition: background-color .5s ease-in-out;\r\n    cursor: pointer;\r\n    &:hover {\r\n      background-color: var(--primary);\r\n    }\r\n  }\r\n}\r\n.skill {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  .line {\r\n    margin-bottom: 2rem;\r\n  }\r\n}\r\n\r\n.m-scroll {\r\n  display: flex;\r\n  position: relative;\r\n  height: 5rem;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n  &__title {\r\n    display: flex;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    width: 100%;\r\n    height: 100%;\r\n    white-space: nowrap;\r\n    transition: all 1s ease;\r\n    & > .m-scroll__title-right {\r\n      display: flex;\r\n      animation: scrollTextToRight 33s infinite linear;\r\n      h2 {\r\n        font-family: Ginger;\r\n        font-weight: 200;\r\n      }\r\n    }\r\n    & > .m-scroll__title-left {\r\n      display: flex;\r\n      animation: scrollTextToLeft 33s infinite linear;\r\n      h2 {\r\n        font-weight: 400;\r\n      }\r\n    }\r\n    h2 {\r\n      margin: 0;\r\n      color: var(--font-color);\r\n      font-size: 5rem;\r\n      transition: all 2s ease;\r\n      text-transform: uppercase;\r\n      cursor: default;\r\n      span {\r\n        margin-left: 2rem;\r\n      }\r\n      span:hover {\r\n        color: var(--primary);\r\n        transition: color .3s ease-in-out;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes scrollTextToLeft {\r\n  from   { transform: translateX(0%); }\r\n  to { transform: translateX(-50%); }\r\n}\r\n@keyframes scrollTextToRight {\r\n  from   { transform: translateX(-50%); }\r\n  to { transform: translateX(0); }\r\n}\r\n.section {\r\n  .container {\r\n    .project {\r\n      display: flex;\r\n      align-items: center;\r\n      width: 80%;\r\n      gap: 1rem;\r\n      color: var(--font-color);\r\n      transition: all .5s ease-in-out;\r\n\r\n      &:hover {\r\n        transition: all .5s ease-in-out;\r\n        transform: translateX(1rem);\r\n      }\r\n      .project__number {\r\n        font-size: 1rem;\r\n        align-self: flex-start;\r\n        font-family: Ginger;\r\n      }\r\n\r\n      .project__name {\r\n        font-size: 2rem;\r\n        font-family: Ginger;\r\n        padding: 1rem 0;\r\n        word-break: break-word;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n\r\n/* Media start */\r\n@media screen and (min-width: 500px){\r\n  .fullPageMenu .nav ul li a {\r\n    font-size: 4em;\r\n  }\r\n  .hero p {\r\n    font-size: 3rem;\r\n    justify-content: center;\r\n    margin-top: 0;\r\n\r\n    &:last-of-type{\r\n      position: relative;\r\n      &::before {\r\n        content: '';\r\n        position: absolute;\r\n        width: 30px;\r\n        height: 1px;\r\n        background-color: var(--font-color);\r\n        left: -40px;\r\n        top: calc(50% - 2px);\r\n      }\r\n      &::after {\r\n        content: '';\r\n        position: absolute;\r\n        width: 30px;\r\n        height: 1px;\r\n        background-color: var(--font-color);\r\n        right: -40px;\r\n        top: calc(50% - 2px);\r\n      }\r\n    }\r\n  }\r\n  .hero .container {\r\n    align-items: center;\r\n    p:nth-child(1) {\r\n      transform: translateX(-4rem);\r\n    }\r\n    p:nth-child(3) {\r\n      transform: translateX(6rem);\r\n    }\r\n  }\r\n}\r\n@-webkit-keyframes pulse {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale(1.5);\r\n    transform: scale(1.5);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@-moz-keyframes pulse {\r\n  0% {\r\n    -moz-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    -moz-transform: scale(1.5);\r\n    transform: scale(1.5);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n@media screen and (min-width: 670px) {\r\n  .hero {\r\n    margin-top: 0;\r\n  }\r\n  .hero p {\r\n    font-size: 4rem;\r\n  }\r\n  .hero .container {\r\n    align-items: center;\r\n\r\n    p:nth-child(1) {\r\n      transform: translateX(-6rem);\r\n    }\r\n\r\n    p:nth-child(3) {\r\n      transform: translateX(8rem);\r\n    }\r\n  }\r\n  .section {\r\n    .about__desc {\r\n      text-align: center;\r\n      padding: 0 2rem;\r\n    }\r\n  }\r\n  .section .container .project .project__name {\r\n    font-size: 3rem;\r\n  }\r\n}\r\n@media(max-width:991px) {\r\n  .banner {\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (min-width: 991px) {\r\n  .fullPageMenu .nav ul li a {\r\n    font-size: 5em;\r\n  }\r\n  .hero {\r\n    margin-top: 0;\r\n  }\r\n  .hero .container {\r\n    align-items: center;\r\n    p:nth-child(1) {\r\n      transform: translateX(-8rem);\r\n    }\r\n    p:nth-child(3) {\r\n      transform: translateX(10rem);\r\n    }\r\n  }\r\n}\r\n@media screen and (min-width: 1024px){\r\n  .hero {\r\n    height: calc(100vh - 80px);\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .hero p {\r\n    font-size: 5rem;\r\n  }\r\n  .hero {\r\n    margin-top: 0;\r\n  }\r\n  .section {\r\n    margin-top: 1rem;\r\n  }\r\n}\r\n@media screen and (min-width: 1366px) {\r\n  .section {\r\n    .about__desc {\r\n      text-align: center;\r\n      padding: 0 1rem;\r\n    }\r\n  }\r\n}\r\n@media screen and (min-width: 1600px){\r\n  .hero {\r\n    margin-top: 0;\r\n  }\r\n  .hero p {\r\n    line-height: 4.5rem;\r\n  }\r\n  .section {\r\n    .about__desc {\r\n      text-align: center;\r\n      padding: 0;\r\n    }\r\n  }\r\n}\r\n@media screen and (min-width: 1900px){\r\n  .hero p {\r\n    font-size: 5.7rem;\r\n    line-height: 5rem;\r\n  }\r\n  .hero {\r\n    margin-top: 0;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b988dc3e9cadb5c2fa89.woff";

/***/ }),
/* 36 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0a196385d46b42faccc8.svg";

/***/ }),
/* 37 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ca26afe1ea8e6b61bc3.svg";

/***/ }),
/* 38 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4deea48f41d8846811b6.svg";

/***/ }),
/* 39 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5359bd7507b1f6038da9.svg";

/***/ })
]),
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d42c23a9e911421f3ed8"; }
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
/******/ /* webpack/runtime/nonce */
/******/ !function() {
/******/ 	__webpack_require__.nc = undefined;
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sWUFBWSxXQUFXLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sWUFBWSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSx1R0FBdUcsTUFBTSxNQUFNLE1BQU0sTUFB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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRjs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLG1CQUFtQiwyQkFBMkI7VUFDOUM7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEtBQUs7VUFDTDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0Esa0JBQWtCLGNBQWM7VUFDaEM7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBLGNBQWMsTUFBTTtVQUNwQjtVQUNBO1VBQ0E7VUFDQSxLQUFLO1VBQ0w7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLGNBQWMsYUFBYTtVQUMzQjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VB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Ly9NeUZ1bmMvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jLy4vc2Nzcy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly9NeUZ1bmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9NeUZ1bmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL015RnVuYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL015RnVuYy8uL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL015RnVuYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL015RnVuYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9NeUZ1bmMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9NeUZ1bmMvd2VicGFjay9ydW50aW1lL25vbmNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7IC8qIGltcG9ydCBjc3Mgc3R5bGUgKi9cclxuXHJcbi8qIE1lbnUgdG9nZ2xlICovXHJcbmZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufVxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoKSB7fVxyXG5cclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JylcclxuY29uc3QgbGkgPSBuYXYucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcclxubGkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVUb2dnbGUpfSlcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVUb2dnbGUpO1xyXG5cclxuLyogU2Nyb2xsIGRvd24gPT4gaGVhZGVyIHN0eWxlICovXHJcbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtzY3JvbGxOYXZiYXIoKX07XHJcbmNvbnN0IHNjcm9sbE5hdmJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA0MCkge1xyXG4gICAgICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQmFja2dyb3VuZFNjcm9sbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJCYWNrZ3JvdW5kU2Nyb2xsXCIpO1xyXG4gICAgfVxyXG59XHJcbi8qIGFuaW1hdGUgaGVybyB0ZXh0ICovXHJcbnNldFRpbWVvdXQoYW5pbWF0ZUhlcm8sIDApO1xyXG5mdW5jdGlvbiBhbmltYXRlSGVybygpIHtcclxuICAgIGNvbnN0IG1pZGRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybycpO1xyXG4gICAgbWlkZGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19ydWJiZXJCYW5kJylcclxufVxyXG5zZXRUaW1lb3V0KGFuaW1hdGVIZXJvU2hha2UsIDMwMDApO1xyXG5mdW5jdGlvbiBhbmltYXRlSGVyb1NoYWtlKCkge1xyXG4gICAgY29uc3QgbGFzdFRleHRJbkhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybyBwOmxhc3QtY2hpbGQnKTtcclxuICAgIGxhc3RUZXh0SW5IZXJvLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2ZsaXBJblknKTtcclxufVxyXG5cclxuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZVwiKTtcclxuY29uc3QgdG9nZ2xlID0gcGFnZS5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1pbnB1dFwiKTtcclxuY29uc3QgdG9nZ2xlSWNvbiA9IHBhZ2UucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtaWNvblwiKTtcclxuLyogc2V0IHRoZW1lIGFuZCBsb2NhbFN0b3JhZ2Ugb24gcGFnZSBsb2FkICovXHJcbnNldENoZWNrZWRTdGF0ZSgpO1xyXG5mdW5jdGlvbiBzZXRDaGVja2VkU3RhdGUoKSB7XHJcbiAgICAvKiBjaGVja3MgaWYgbG9jYWxTdG9yYWdlIGhhcyBhIFwiY2hlY2tlZFwiIHZhbHVlIHNldCBhdCBhbGwgKi9cclxuICAgIGlmICghKGxvY2FsU3RvcmFnZS5jaGVja2VkID09PSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgLyogaWYgaXQgZG9lcywgaXQgc2V0cyB0aGUgc3RhdGUgb2YgdGhlIHRvZ2dsZSBhY2NvcmRpbmdseSAqL1xyXG4gICAgICAgIHRvZ2dsZS5jaGVja2VkID0gaXNUcnVlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hlY2tlZFwiKSk7XHJcbiAgICAgICAgLyogYWZ0ZXIgc2V0dGluZyB0aGUgdG9nZ2xlIHN0YXRlLCB0aGUgdGhlbWUgaXMgYWRqdXN0ZWQgYWNjb3JkaW5nIHRvIHRoZSBjaGVja2VkIHN0YXRlICovXHJcbiAgICAgICAgdG9nZ2xlVGhlbWUoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcclxuICAgIC8qIFRvZ2dsZSB0aGVtZSBiYXNlZCBvbiBzdGF0ZSBvZiBjaGVja2JveCAqL1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgcGFnZS5jbGFzc0xpc3QucmVwbGFjZShcImxpZ2h0XCIsIFwiZGFya1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFnZS5jbGFzc0xpc3QucmVwbGFjZShcImRhcmtcIiwgXCJsaWdodFwiKTtcclxuICAgIH1cclxuICAgIC8qIHJlcGxhY2UgaWNvbnMgb24gcGFnZSAqL1xyXG4gICAgdG9nZ2xlSWNvblRoZW1lKCk7XHJcbiAgICAvKiBzZXQgdGhlIHZhbHVlIG9mIHRoZSBcImNoZWNrZWRcIiBrZXkgaW4gbG9jYWxTdG9yYWdlICovXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrZWRcIiwgdG9nZ2xlLmNoZWNrZWQpO1xyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZUljb25UaGVtZSgpIHtcclxuICAgIC8qIFJlcGxhY2UgaWNvbnMgbm90IGFibGUgdG8gYmUgdGFyZ2V0ZWQgYnkgY3NzIHZhcmlhYmxlcyAqL1xyXG4gICAgaWYgKHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlnaHRcIikpIHtcclxuICAgICAgICB0b2dnbGVJY29uLnNyYyA9IFwicHVibGljL2ltYWdlcy9tb29uLnN2Z1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2dnbGVJY29uLnNyYyA9IFwicHVibGljL2ltYWdlcy9zdW4uc3ZnXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNUcnVlKHZhbHVlKSB7XHJcbiAgICAvKiBjb252ZXJ0IHN0cmluZyB0byBib29sZWFuICovXHJcbiAgICByZXR1cm4gdmFsdWUgPT09IFwidHJ1ZVwiO1xyXG59XHJcbi8qIFRvZ2dsZSB0aGVtZSBhbnkgdGltZSB0aGUgc3RhdGUgb2YgdGhlIGNoZWNrYm94IGNoYW5nZXMgKi9cclxudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdG9nZ2xlVGhlbWUpO1xyXG5cclxuY29uc3QgZGFya3BpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFya3BpbmsnKTtcclxuY29uc3QgeWVsbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3llbGxvdycpO1xyXG5jb25zdCBkYXJrYmx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXJrYmx1ZScpO1xyXG5jb25zdCB0dXJrdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHVya3VzJyk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDb2xvcihldmVudCkge1xyXG4gICAgaWYoZXZlbnQuc3JjRWxlbWVudC5pZCA9PT0gJ2RhcmtwaW5rJykge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgJyNDODU2NkInKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5zcmNFbGVtZW50LmlkID09PSAneWVsbG93Jykge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgJyNGNkRBNzAnKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5zcmNFbGVtZW50LmlkID09PSAndHVya3VzJykge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgJyM0Q0RCQTYnKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5zcmNFbGVtZW50LmlkID09PSAnZGFya2JsdWUnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnknLCAnIzY2NjFBQicpO1xyXG4gICAgfVxyXG59XHJcbmRhcmtwaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQ29sb3IpXHJcbnllbGxvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG5kYXJrYmx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG50dXJrdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDb2xvcikiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvZm9udC9HaW5nZXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3B1YmxpYy9pbWFnZXMvY2xvc2VMaWdodE1vZGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vcHVibGljL2ltYWdlcy9vcGVuTGlnaHRNb2RlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3B1YmxpYy9pbWFnZXMvY2xvc2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vcHVibGljL2ltYWdlcy9vcGVuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrbzp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuLyogY29sb3JzIC0gcGFzdGVsICovXFxuOnJvb3Qge1xcbiAgLS1wYXN0ZWwtYXF1YTogIzU4Q0ZFRTtcXG4gIC0tcGFzdGVsLWJsdWU6ICM2NUE3RTY7XFxuICAtLXBhc3RlbC1kYXJrYmx1ZTogIzY2NjFBQjtcXG4gIC0tcGFzdGVsLXBpbms6ICNGNzk3OUY7XFxuICAtLXBhc3RlbC1kYXJrcGluazogI0M4NTY2QjtcXG4gIC0tcGFzdGVsLWxpZ2h0eWVsbG93OiAjRjJENDhGO1xcbiAgLS1wYXN0ZWwteWVsbG93OiAjRjZEQTcwO1xcbiAgLS1wYXN0ZWwtb3JhbmdlOiAjRTc4OTYzO1xcbiAgLS1wYXN0ZWwtbGlnaHR2aW9sZXQ6ICM5RDc1QkY7XFxuICAtLXBhc3RlbC12aW9sZXQ6ICM4RDVFRDQ7XFxuICAtLXBhc3RlbC10dXJrdXM6ICM0Q0RCQTY7XFxuICAtLXBhc3RlbC1saWdodG5hdjogI0Y3RTlERTtcXG4gIC0tcHJpbWFyeTogdmFyKC0tcGFzdGVsLWxpZ2h0dmlvbGV0KTtcXG4gIC8qIGxpZ2h0ICovXFxuICAtLWxpZ2h0LWJhY2tncm91bmQ6ICNFRUVERjA7XFxuICAtLXBhc3RlbC10ZXh0LWxpZ2h0OiAjMTcxODFGO1xcbiAgLS1zY3JvbGwtbmF2LWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAtLXdlYmtpdC1zY3JvbGwtbGlnaHQ6ICMxNzE4MUY7XFxuICAtLXdlYmtpdC1zY3JvbGwtbGlnaHQtaG92ZXI6ICM1NTU7XFxuICAvKiBkYXJrICovXFxuICAtLWRhcmstYmFja2dyb3VuZDogIzE3MTgxRjtcXG4gIC0tcGFzdGVsLXRleHQtZGFyazogI0Y1RjhGMztcXG4gIC0tc2Nyb2xsLW5hdi1kYXJrOiByZ2JhKDAsMCwwLDAuMyk7XFxuICAtLXdlYmtpdC1zY3JvbGwtZGFyazogdmFyKC0tcGFzdGVsLWxpZ2h0bmF2KTtcXG4gIC0td2Via2l0LXNjcm9sbC1kYXJrLWhvdmVyOiAjYTZhNmE2O1xcbn1cXG5cXG4vKiBsaWdodCBtb2RlICovXFxuLmxpZ2h0IHtcXG4gIC0td2Via2l0LXNjcm9sbDogdmFyKC0td2Via2l0LXNjcm9sbC1saWdodCk7XFxuICAtLXdlYmtpdC1zY3JvbGwtaG92ZXI6IHZhcigtLXdlYmtpdC1zY3JvbGwtbGlnaHQtaG92ZXIpO1xcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG4gIC0tc2Nyb2xsLW5hdjogdmFyKC0tc2Nyb2xsLW5hdi1saWdodCk7XFxuICAtLXNjcm9sbC1uYXYtYm90dG9tOiB2YXIoLS1wcmltYXJ5KTtcXG4gIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAtLW5hdi1jb2xvci1saW5rOiB2YXIoLS1wYXN0ZWwtdGV4dC1saWdodCk7XFxuICAtLWZvbnQtY29sb3I6IHZhcigtLXBhc3RlbC10ZXh0LWxpZ2h0KTtcXG4gIC0tY2xvc2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAtLW9wZW46IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAtLWxhc3QtcGFyYWdyYXBoLWluLWhlcm86IDIwMDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIGRhcmsgbW9kZSAqL1xcbi5kYXJrIHtcXG4gIC0td2Via2l0LXNjcm9sbDogdmFyKC0td2Via2l0LXNjcm9sbC1kYXJrKTtcXG4gIC0td2Via2l0LXNjcm9sbC1ob3ZlcjogdmFyKC0td2Via2l0LXNjcm9sbC1kYXJrLWhvdmVyKTtcXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcXG4gIC0tc2Nyb2xsLW5hdjogdmFyKC0tc2Nyb2xsLW5hdi1kYXJrKTtcXG4gIC0tc2Nyb2xsLW5hdi1ib3R0b206dmFyKC0tcHJpbWFyeSk7XFxuICAtLXByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgLS1uYXYtY29sb3ItbGluazogdmFyKC0tcGFzdGVsLXRleHQtZGFyayk7XFxuICAtLWZvbnQtY29sb3I6IHZhcigtLXBhc3RlbC10ZXh0LWRhcmspO1xcbiAgLS1jbG9zZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIC0tb3BlbjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIC0tbGFzdC1wYXJhZ3JhcGgtaW4taGVybzogMTAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIFR5cG9ncmFwaHkgKi9cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDYgKiAoMTAwdncgLSAzMjBweCkgLyA2ODApO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcbn1cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNXB4O1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdlYmtpdC1zY3JvbGwpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13ZWJraXQtc2Nyb2xsLWhvdmVyKTtcXG59XFxuXFxuLyogZmluaXNoIHJlc3BvbnNpdmUgdHlwb2dyYXBoeSAqL1xcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB1bnNldDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxuICBtYXgtd2lkdGg6IDEzNDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBsb2dvICovXFxuLmhlYWRlciB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRyYW5zaXRpb246IDAuNXMgYmFja2dyb3VuZC1jb2xvciBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhlYWRlckJhY2tncm91bmRTY3JvbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Nyb2xsLW5hdik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2Nyb2xsLW5hdi1ib3R0b20pO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGNvbG9yIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKiBNZW51ICovXFxuLmZ1bGxQYWdlTWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51LmFjdGl2ZSB7XFxuICB0b3A6IC0xMDAlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5iYW5uZXIgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXI6YmVmb3JlIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB2YXIoLS1uYXYtY29sb3ItbGluayk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaSBhOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBjb2xvcjogdmFyKC0tbmF2LWNvbG9yLWxpbmspO1xcbn1cXG5cXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGk6aG92ZXIgYSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgY29sb3I6IHZhcigtLW5hdi1jb2xvci1saW5rKTtcXG59XFxuXFxuLm1lbnVJY29uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbG9zZSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcbi5tZW51SWNvbi5hY3RpdmUge1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDJyZW07XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW9wZW4pO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4vKiBmaW5pc2ggbWVudSAqL1xcbi8qIGhlcm8gc2VjdGlvbiAqL1xcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIG1pbi1oZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uaGVybyBwIHtcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLmhlcm8gcCBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcbi5oZXJvIHA6bGFzdC1vZi10eXBlIHtcXG4gIGZvbnQtZmFtaWx5OiB1bnNldDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYXN0LXBhcmFncmFwaC1pbi1oZXJvKTtcXG59XFxuXFxuLmNoYW5nZV9fY29sb3JzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDJyZW07XFxuICBib3R0b206IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNoYW5nZV9fY29sb3JzIHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG59XFxuLmNoYW5nZV9fY29sb3JzIHVsOmhvdmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbn1cXG4uY2hhbmdlX19jb2xvcnMgdWw6aG92ZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiQ2hhbmdlIGNvbG9yXFxcIjtcXG4gIGxlZnQ6IDAuNXJlbTtcXG4gIHRvcDogLTQwJTtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG4uY2hhbmdlX19jb2xvcnMgbGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5jaGFuZ2VfX2NvbG9ycyBsaTpudGgtY2hpbGQoMSkge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXN0ZWwtZGFya3BpbmspO1xcbn1cXG4uY2hhbmdlX19jb2xvcnMgbGk6bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RlbC15ZWxsb3cpO1xcbn1cXG4uY2hhbmdlX19jb2xvcnMgbGk6bnRoLWNoaWxkKDMpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhc3RlbC1kYXJrYmx1ZSk7XFxufVxcbi5jaGFuZ2VfX2NvbG9ycyBsaTpudGgtY2hpbGQoNCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFzdGVsLXR1cmt1cyk7XFxufVxcblxcbi50b2dnbGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDJyZW07XFxuICBib3R0b206IDFyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHotaW5kZXg6IDk5OTk5OTtcXG59XFxuXFxuLnRvZ2dsZS1pY29uIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZS1pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9nZ2xlLWxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZS1pY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG4uc2VjdGlvbiAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2VjdGlvbiBoMiB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4uc2VjdGlvbiAubGluZSB7XFxuICBtYXJnaW4tdG9wOiAwLjNyZW07XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuLnNlY3Rpb24gLmFib3V0X19kZXNjIHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5zZWN0aW9uIC5hYm91dF9fZGVzYyBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcbi5zZWN0aW9uIC5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZWN0aW9uIC5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5za2lsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNraWxsIC5saW5lIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5tLXNjcm9sbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMTtcXG59XFxuLm0tc2Nyb2xsX190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG59XFxuLm0tc2Nyb2xsX190aXRsZSA+IC5tLXNjcm9sbF9fdGl0bGUtcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFuaW1hdGlvbjogc2Nyb2xsVGV4dFRvUmlnaHQgMzNzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuLm0tc2Nyb2xsX190aXRsZSA+IC5tLXNjcm9sbF9fdGl0bGUtcmlnaHQgaDIge1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcbi5tLXNjcm9sbF9fdGl0bGUgPiAubS1zY3JvbGxfX3RpdGxlLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFuaW1hdGlvbjogc2Nyb2xsVGV4dFRvTGVmdCAzM3MgaW5maW5pdGUgbGluZWFyO1xcbn1cXG4ubS1zY3JvbGxfX3RpdGxlID4gLm0tc2Nyb2xsX190aXRsZS1sZWZ0IGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tLXNjcm9sbF9fdGl0bGUgaDIge1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2U7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4ubS1zY3JvbGxfX3RpdGxlIGgyIHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbi5tLXNjcm9sbF9fdGl0bGUgaDIgc3Bhbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjcm9sbFRleHRUb0xlZnQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzY3JvbGxUZXh0VG9SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbi5zZWN0aW9uIC5jb250YWluZXIgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgZ2FwOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zZWN0aW9uIC5jb250YWluZXIgLnByb2plY3Q6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XFxufVxcbi5zZWN0aW9uIC5jb250YWluZXIgLnByb2plY3QgLnByb2plY3RfX251bWJlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXG59XFxuLnNlY3Rpb24gLmNvbnRhaW5lciAucHJvamVjdCAucHJvamVjdF9fbmFtZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG59XFxuXFxuLyogTWVkaWEgc3RhcnQgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gIH1cXG4gIC5oZXJvIHAge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbiAgLmhlcm8gcDpsYXN0LW9mLXR5cGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAuaGVybyBwOmxhc3Qtb2YtdHlwZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgbGVmdDogLTQwcHg7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAycHgpO1xcbiAgfVxcbiAgLmhlcm8gcDpsYXN0LW9mLXR5cGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgcmlnaHQ6IC00MHB4O1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXG4gIH1cXG4gIC5oZXJvIC5jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmhlcm8gLmNvbnRhaW5lciBwOm50aC1jaGlsZCgxKSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHJlbSk7XFxuICB9XFxuICAuaGVybyAuY29udGFpbmVyIHA6bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZyZW0pO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuQC1tb3ota2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY3MHB4KSB7XFxuICAuaGVybyB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICAuaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbiAgLmhlcm8gLmNvbnRhaW5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuaGVybyAuY29udGFpbmVyIHA6bnRoLWNoaWxkKDEpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cmVtKTtcXG4gIH1cXG4gIC5oZXJvIC5jb250YWluZXIgcDpudGgtY2hpbGQoMykge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHJlbSk7XFxuICB9XFxuICAuc2VjdGlvbiAuYWJvdXRfX2Rlc2Mge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gIH1cXG4gIC5zZWN0aW9uIC5jb250YWluZXIgLnByb2plY3QgLnByb2plY3RfX25hbWUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmJhbm5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XFxuICAuZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkgYSB7XFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgfVxcbiAgLmhlcm8ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbiAgLmhlcm8gLmNvbnRhaW5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuaGVybyAuY29udGFpbmVyIHA6bnRoLWNoaWxkKDEpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04cmVtKTtcXG4gIH1cXG4gIC5oZXJvIC5jb250YWluZXIgcDpudGgtY2hpbGQoMykge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTByZW0pO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5oZXJvIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmhlcm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gIH1cXG4gIC5oZXJvIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG4gIC5zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XFxuICAuc2VjdGlvbiAuYWJvdXRfX2Rlc2Mge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XFxuICAuaGVybyB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICAuaGVybyBwIHtcXG4gICAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcXG4gIH1cXG4gIC5zZWN0aW9uIC5hYm91dF9fZGVzYyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkwMHB4KSB7XFxuICAuaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiA1LjdyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiA1cmVtO1xcbiAgfVxcbiAgLmhlcm8ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zY3NzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7QUFDRjtBQUNBLG9CQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFFQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBRUEsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUNBQUE7QUFERjs7QUFJQSxlQUFBO0FBQ0E7RUFDRSwyQ0FBQTtFQUNBLHVEQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSwrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkNBQUE7QUFERjs7QUFHQSxj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SUFDQSxVQUFBO0VBcUJKO0FBQ0Y7QUFsQkE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUFvQkY7RUFsQkE7SUFDRSxhQUFBO0VBb0JGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrbzp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxyXFxuICBzcmM6IHVybCgnL2ZvbnQvR2luZ2VyLndvZmYnKTtcXHJcXG59XFxyXFxuLyogY29sb3JzIC0gcGFzdGVsICovXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wYXN0ZWwtYXF1YTogIzU4Q0ZFRTtcXHJcXG4gIC0tcGFzdGVsLWJsdWU6ICM2NUE3RTY7XFxyXFxuICAtLXBhc3RlbC1kYXJrYmx1ZTogIzY2NjFBQjtcXHJcXG4gIC0tcGFzdGVsLXBpbms6ICNGNzk3OUY7XFxyXFxuICAtLXBhc3RlbC1kYXJrcGluazogI0M4NTY2QjtcXHJcXG4gIC0tcGFzdGVsLWxpZ2h0eWVsbG93OiAjRjJENDhGO1xcclxcbiAgLS1wYXN0ZWwteWVsbG93OiAjRjZEQTcwO1xcclxcbiAgLS1wYXN0ZWwtb3JhbmdlOiAjRTc4OTYzO1xcclxcbiAgLS1wYXN0ZWwtbGlnaHR2aW9sZXQ6ICM5RDc1QkY7XFxyXFxuICAtLXBhc3RlbC12aW9sZXQ6ICM4RDVFRDQ7XFxyXFxuICAtLXBhc3RlbC10dXJrdXM6ICM0Q0RCQTY7XFxyXFxuICAtLXBhc3RlbC1saWdodG5hdjogI0Y3RTlERTtcXHJcXG5cXHJcXG4gIC0tcHJpbWFyeTogdmFyKC0tcGFzdGVsLWxpZ2h0dmlvbGV0KTtcXHJcXG4gIC8qIGxpZ2h0ICovXFxyXFxuICAtLWxpZ2h0LWJhY2tncm91bmQ6ICNFRUVERjA7XFxyXFxuICAtLXBhc3RlbC10ZXh0LWxpZ2h0OiAjMTcxODFGO1xcclxcbiAgLS1zY3JvbGwtbmF2LWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAtLXdlYmtpdC1zY3JvbGwtbGlnaHQ6ICAjMTcxODFGO1xcclxcbiAgLS13ZWJraXQtc2Nyb2xsLWxpZ2h0LWhvdmVyOiAjNTU1O1xcclxcblxcclxcbiAgLyogZGFyayAqL1xcclxcbiAgLS1kYXJrLWJhY2tncm91bmQ6ICAjMTcxODFGO1xcclxcbiAgLS1wYXN0ZWwtdGV4dC1kYXJrOiAjRjVGOEYzO1xcclxcbiAgLS1zY3JvbGwtbmF2LWRhcms6IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIC0td2Via2l0LXNjcm9sbC1kYXJrOiB2YXIoLS1wYXN0ZWwtbGlnaHRuYXYpO1xcclxcbiAgLS13ZWJraXQtc2Nyb2xsLWRhcmstaG92ZXI6ICNhNmE2YTY7XFxyXFxufVxcclxcblxcclxcbi8qIGxpZ2h0IG1vZGUgKi9cXHJcXG4ubGlnaHQge1xcclxcbiAgLS13ZWJraXQtc2Nyb2xsOiB2YXIoLS13ZWJraXQtc2Nyb2xsLWxpZ2h0KTtcXHJcXG4gIC0td2Via2l0LXNjcm9sbC1ob3ZlcjogdmFyKC0td2Via2l0LXNjcm9sbC1saWdodC1ob3Zlcik7XFxyXFxuICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcclxcbiAgLS1zY3JvbGwtbmF2OiB2YXIoLS1zY3JvbGwtbmF2LWxpZ2h0KTtcXHJcXG4gIC0tc2Nyb2xsLW5hdi1ib3R0b206IHZhcigtLXByaW1hcnkpO1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIC0tbmF2LWNvbG9yLWxpbms6IHZhcigtLXBhc3RlbC10ZXh0LWxpZ2h0KTtcXHJcXG4gIC0tZm9udC1jb2xvcjogdmFyKC0tcGFzdGVsLXRleHQtbGlnaHQpO1xcclxcbiAgLS1jbG9zZTogdXJsKC4uL3B1YmxpYy9pbWFnZXMvY2xvc2VMaWdodE1vZGUuc3ZnKTtcXHJcXG4gIC0tb3BlbjogdXJsKC4uL3B1YmxpYy9pbWFnZXMvb3BlbkxpZ2h0TW9kZS5zdmcpO1xcclxcbiAgLS1sYXN0LXBhcmFncmFwaC1pbi1oZXJvOiAyMDA7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4vKiBkYXJrIG1vZGUgKi9cXHJcXG4uZGFyayB7XFxyXFxuICAtLXdlYmtpdC1zY3JvbGw6IHZhcigtLXdlYmtpdC1zY3JvbGwtZGFyayk7XFxyXFxuICAtLXdlYmtpdC1zY3JvbGwtaG92ZXI6IHZhcigtLXdlYmtpdC1zY3JvbGwtZGFyay1ob3Zlcik7XFxyXFxuICAtLWJhY2tncm91bmQ6IHZhcigtLWRhcmstYmFja2dyb3VuZCk7XFxyXFxuICAtLXNjcm9sbC1uYXY6IHZhcigtLXNjcm9sbC1uYXYtZGFyayk7XFxyXFxuICAtLXNjcm9sbC1uYXYtYm90dG9tOnZhcigtLXByaW1hcnkpO1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIC0tbmF2LWNvbG9yLWxpbms6IHZhcigtLXBhc3RlbC10ZXh0LWRhcmspO1xcclxcbiAgLS1mb250LWNvbG9yOiB2YXIoLS1wYXN0ZWwtdGV4dC1kYXJrKTtcXHJcXG4gIC0tY2xvc2U6IHVybCguLi9wdWJsaWMvaW1hZ2VzL2Nsb3NlLnN2Zyk7XFxyXFxuICAtLW9wZW46IHVybCguLi9wdWJsaWMvaW1hZ2VzL29wZW4uc3ZnKTtcXHJcXG4gIC0tbGFzdC1wYXJhZ3JhcGgtaW4taGVybzogMTAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4vKiBSZXNwb25zaXZlIFR5cG9ncmFwaHkgKi9cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDYgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIFRyYWNrICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA1cHg7XFxyXFxufVxcclxcbi8qIEhhbmRsZSAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0td2Via2l0LXNjcm9sbCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdlYmtpdC1zY3JvbGwtaG92ZXIpO1xcclxcbn1cXHJcXG4vKiBmaW5pc2ggcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5ICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWluLXdpZHRoOiAzMjBweDtcXHJcXG4gIG1heC13aWR0aDogMTM0MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi8qIGxvZ28gKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgbWluLWhlaWdodDogODBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgdHJhbnNpdGlvbjogLjVzIGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5oZWFkZXJCYWNrZ3JvdW5kU2Nyb2xsIHtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JvbGwtbmF2KTtcXHJcXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2Nyb2xsLW5hdi1ib3R0b20pO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LWZhbWlseTogR2luZ2VyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICB0cmFuc2l0aW9uOiAuNXMgY29sb3IgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi8qIE1lbnUgKi9cXHJcXG4uZnVsbFBhZ2VNZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUuYWN0aXZlIHtcXHJcXG4gIHRvcDogLTEwMCU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLmJhbm5lciBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uZnVsbFBhZ2VNZW51IC5uYXYgdWwgbGkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY29sb3I6IHZhcigtLW5hdi1jb2xvci1saW5rKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0xMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uYXYtY29sb3ItbGluayk7XFxyXFxufVxcclxcbi5mdWxsUGFnZU1lbnUgLm5hdiB1bCBsaTpob3ZlciBhIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxuICBjb2xvcjogdmFyKC0tbmF2LWNvbG9yLWxpbmspO1xcclxcbn1cXHJcXG4ubWVudUljb24ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsb3NlKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuLm1lbnVJY29uLmFjdGl2ZSB7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogMnJlbTtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tb3Blbik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbi8qIGZpbmlzaCBtZW51ICovXFxyXFxuLyogaGVybyBzZWN0aW9uICovXFxyXFxuLmhlcm8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgbWluLWhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxyXFxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICB9XFxyXFxuICAmOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB1bnNldDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogdmFyKC0tbGFzdC1wYXJhZ3JhcGgtaW4taGVybyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLmNoYW5nZV9fY29sb3JzIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDJyZW07XFxyXFxuICBib3R0b206IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHVsIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAuM3JlbTtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIHVsOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIHVsOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6ICdDaGFuZ2UgY29sb3InO1xcclxcbiAgICBsZWZ0OiAuNXJlbTtcXHJcXG4gICAgdG9wOiAtNDAlO1xcclxcbiAgICBmb250LXNpemU6IC42cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIGxpOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXN0ZWwtZGFya3BpbmspO1xcclxcbiAgfVxcclxcbiAgbGk6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFzdGVsLXllbGxvdyk7XFxyXFxuICB9XFxyXFxuICBsaTpudGgtY2hpbGQoMykge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXN0ZWwtZGFya2JsdWUpO1xcclxcbiAgfVxcclxcbiAgbGk6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFzdGVsLXR1cmt1cyk7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcbi50b2dnbGUge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcmlnaHQ6IDJyZW07XFxyXFxuICBib3R0b206IDFyZW07XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDk5OTk5OTtcXHJcXG59XFxyXFxuLnRvZ2dsZS1pY29uIHtcXHJcXG4gIHdpZHRoOiAyOHB4O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4udG9nZ2xlLWlucHV0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi50b2dnbGUtbGFiZWwge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4udG9nZ2xlLWljb246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIGgyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgfVxcclxcbiAgLmxpbmUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAuM3JlbTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgLmFib3V0X19kZXNjIHtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBHaW5nZXI7XFxyXFxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNraWxsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgLmxpbmUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubS1zY3JvbGwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcclxcbiAgICAmID4gLm0tc2Nyb2xsX190aXRsZS1yaWdodCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbmltYXRpb246IHNjcm9sbFRleHRUb1JpZ2h0IDMzcyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICAgICAgaDIge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYgPiAubS1zY3JvbGxfX3RpdGxlLWxlZnQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYW5pbWF0aW9uOiBzY3JvbGxUZXh0VG9MZWZ0IDMzcyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICAgICAgaDIge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgaDIge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlO1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgICAgfVxcclxcbiAgICAgIHNwYW46aG92ZXIge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNjcm9sbFRleHRUb0xlZnQge1xcclxcbiAgZnJvbSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTsgfVxcclxcbiAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBzY3JvbGxUZXh0VG9SaWdodCB7XFxyXFxuICBmcm9tICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXHJcXG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxyXFxufVxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICAucHJvamVjdCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLnByb2plY3RfX251bWJlciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnByb2plY3RfX25hbWUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IEdpbmdlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE1lZGlhIHN0YXJ0ICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xcclxcbiAgLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcclxcbiAgICBmb250LXNpemU6IDRlbTtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIHAge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcblxcclxcbiAgICAmOmxhc3Qtb2YtdHlwZXtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICAgICAgbGVmdDogLTQwcHg7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgICAgICByaWdodDogLTQwcHg7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5oZXJvIC5jb250YWluZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cmVtKTtcXHJcXG4gICAgfVxcclxcbiAgICBwOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZyZW0pO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALW1vei1rZXlmcmFtZXMgcHVsc2Uge1xcclxcbiAgMCUge1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjcwcHgpIHtcXHJcXG4gIC5oZXJvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIHAge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICB9XFxyXFxuICAuaGVybyAuY29udGFpbmVyIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcDpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnJlbSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcDpudGgtY2hpbGQoMykge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cmVtKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLnNlY3Rpb24ge1xcclxcbiAgICAuYWJvdXRfX2Rlc2Mge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5zZWN0aW9uIC5jb250YWluZXIgLnByb2plY3QgLnByb2plY3RfX25hbWUge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYShtYXgtd2lkdGg6OTkxcHgpIHtcXHJcXG4gIC5iYW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xcclxcbiAgLmZ1bGxQYWdlTWVudSAubmF2IHVsIGxpIGEge1xcclxcbiAgICBmb250LXNpemU6IDVlbTtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIC5jb250YWluZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04cmVtKTtcXHJcXG4gICAgfVxcclxcbiAgICBwOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcmVtKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xcclxcbiAgLmhlcm8ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuaGVybyBwIHtcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgfVxcclxcbiAgLmhlcm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgfVxcclxcbiAgLnNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcXHJcXG4gIC5zZWN0aW9uIHtcXHJcXG4gICAgLmFib3V0X19kZXNjIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCl7XFxyXFxuICAuaGVybyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICB9XFxyXFxuICAuaGVybyBwIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5zZWN0aW9uIHtcXHJcXG4gICAgLmFib3V0X19kZXNjIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTAwcHgpe1xcclxcbiAgLmhlcm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNS43cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5oZXJvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImQ0MmMyM2E5ZTkxMTQyMWYzZWQ4XCI7IH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wIHx8IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuXHRjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0ID0gdXBkYXRlZE1vZHVsZXNMaXN0O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVNeUZ1bmNcIl0gPSBmdW5jdGlvbihjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0IWN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF1cblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiXSwibmFtZXMiOlsibWVudVRvZ2dsZSIsIm5hdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2dnbGUiLCJjbGFzc0xpc3QiLCJjbG9zZU1lbnUiLCJxdWVyeVNlbGVjdG9yIiwibGkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwib25zY3JvbGwiLCJzY3JvbGxOYXZiYXIiLCJuYXZCYXIiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJhZGQiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZUhlcm8iLCJtaWRkbGVUZXh0IiwiYW5pbWF0ZUhlcm9TaGFrZSIsImxhc3RUZXh0SW5IZXJvIiwicGFnZSIsInRvZ2dsZUljb24iLCJzZXRDaGVja2VkU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwiaXNUcnVlIiwiZ2V0SXRlbSIsInRvZ2dsZVRoZW1lIiwicmVwbGFjZSIsInRvZ2dsZUljb25UaGVtZSIsInNldEl0ZW0iLCJjb250YWlucyIsInNyYyIsInZhbHVlIiwiZGFya3BpbmsiLCJ5ZWxsb3ciLCJkYXJrYmx1ZSIsInR1cmt1cyIsImNoYW5nZUNvbG9yIiwiZXZlbnQiLCJzcmNFbGVtZW50IiwiaWQiLCJzdHlsZSIsInNldFByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==