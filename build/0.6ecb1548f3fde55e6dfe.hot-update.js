"use strict";
self["webpackHotUpdateMyFunc"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var party_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var party_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(party_js__WEBPACK_IMPORTED_MODULE_1__);

/* import css style */


/* Menu toggle */

function menuToggle() {
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("toggle");
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
}

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
var logo = document.querySelector('.logo');
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
    logo.src = "public/images/logo.svg";
  } else {
    toggleIcon.src = "public/images/sun.svg";
    logo.src = "public/images/logo_dark.svg";
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

  party_js__WEBPACK_IMPORTED_MODULE_1___default().confetti(this);
}

darkpink.addEventListener('click', changeColor);
yellow.addEventListener('click', changeColor);
darkblue.addEventListener('click', changeColor);
turkus.addEventListener('click', changeColor);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "938b1a686ca1a4a11fed"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TXlGdW5jL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiOyAvKiBpbXBvcnQgY3NzIHN0eWxlICovXHJcbmltcG9ydCBwYXJ0eSBmcm9tIFwicGFydHktanNcIjtcclxuLyogTWVudSB0b2dnbGUgKi9cclxuZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKVxyXG5jb25zdCBsaSA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG5saS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVRvZ2dsZSl9KVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudVRvZ2dsZSk7XHJcblxyXG4vKiBTY3JvbGwgZG93biA9PiBoZWFkZXIgc3R5bGUgKi9cclxud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge3Njcm9sbE5hdmJhcigpfTtcclxuY29uc3Qgc2Nyb2xsTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDQwKSB7XHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJCYWNrZ3JvdW5kU2Nyb2xsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlckJhY2tncm91bmRTY3JvbGxcIik7XHJcbiAgICB9XHJcbn1cclxuLyogYW5pbWF0ZSBoZXJvIHRleHQgKi9cclxuc2V0VGltZW91dChhbmltYXRlSGVybywgMCk7XHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvKCkge1xyXG4gICAgY29uc3QgbWlkZGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvJyk7XHJcbiAgICBtaWRkbGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX3J1YmJlckJhbmQnKVxyXG59XHJcbnNldFRpbWVvdXQoYW5pbWF0ZUhlcm9TaGFrZSwgMzAwMCk7XHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvU2hha2UoKSB7XHJcbiAgICBjb25zdCBsYXN0VGV4dEluSGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvIHA6bGFzdC1jaGlsZCcpO1xyXG4gICAgbGFzdFRleHRJbkhlcm8uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fZmxpcEluWScpO1xyXG59XHJcblxyXG5jb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlXCIpO1xyXG5jb25zdCB0b2dnbGUgPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLWlucHV0XCIpO1xyXG5jb25zdCB0b2dnbGVJY29uID0gcGFnZS5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1pY29uXCIpO1xyXG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKVxyXG4vKiBzZXQgdGhlbWUgYW5kIGxvY2FsU3RvcmFnZSBvbiBwYWdlIGxvYWQgKi9cclxuc2V0Q2hlY2tlZFN0YXRlKCk7XHJcbmZ1bmN0aW9uIHNldENoZWNrZWRTdGF0ZSgpIHtcclxuICAgIC8qIGNoZWNrcyBpZiBsb2NhbFN0b3JhZ2UgaGFzIGEgXCJjaGVja2VkXCIgdmFsdWUgc2V0IGF0IGFsbCAqL1xyXG4gICAgaWYgKCEobG9jYWxTdG9yYWdlLmNoZWNrZWQgPT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAvKiBpZiBpdCBkb2VzLCBpdCBzZXRzIHRoZSBzdGF0ZSBvZiB0aGUgdG9nZ2xlIGFjY29yZGluZ2x5ICovXHJcbiAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBpc1RydWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGVja2VkXCIpKTtcclxuICAgICAgICAvKiBhZnRlciBzZXR0aW5nIHRoZSB0b2dnbGUgc3RhdGUsIHRoZSB0aGVtZSBpcyBhZGp1c3RlZCBhY2NvcmRpbmcgdG8gdGhlIGNoZWNrZWQgc3RhdGUgKi9cclxuICAgICAgICB0b2dnbGVUaGVtZSgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xyXG4gICAgLyogVG9nZ2xlIHRoZW1lIGJhc2VkIG9uIHN0YXRlIG9mIGNoZWNrYm94ICovXHJcbiAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgICBwYWdlLmNsYXNzTGlzdC5yZXBsYWNlKFwibGlnaHRcIiwgXCJkYXJrXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYWdlLmNsYXNzTGlzdC5yZXBsYWNlKFwiZGFya1wiLCBcImxpZ2h0XCIpO1xyXG4gICAgfVxyXG4gICAgLyogcmVwbGFjZSBpY29ucyBvbiBwYWdlICovXHJcbiAgICB0b2dnbGVJY29uVGhlbWUoKTtcclxuICAgIC8qIHNldCB0aGUgdmFsdWUgb2YgdGhlIFwiY2hlY2tlZFwiIGtleSBpbiBsb2NhbFN0b3JhZ2UgKi9cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tlZFwiLCB0b2dnbGUuY2hlY2tlZCk7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlSWNvblRoZW1lKCkge1xyXG4gICAgLyogUmVwbGFjZSBpY29ucyBub3QgYWJsZSB0byBiZSB0YXJnZXRlZCBieSBjc3MgdmFyaWFibGVzICovXHJcbiAgICBpZiAocGFnZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsaWdodFwiKSkge1xyXG4gICAgICAgIHRvZ2dsZUljb24uc3JjID0gXCJwdWJsaWMvaW1hZ2VzL21vb24uc3ZnXCI7XHJcbiAgICAgICAgbG9nby5zcmMgPSBcInB1YmxpYy9pbWFnZXMvbG9nby5zdmdcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9nZ2xlSWNvbi5zcmMgPSBcInB1YmxpYy9pbWFnZXMvc3VuLnN2Z1wiO1xyXG4gICAgICAgIGxvZ28uc3JjID0gXCJwdWJsaWMvaW1hZ2VzL2xvZ29fZGFyay5zdmdcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpc1RydWUodmFsdWUpIHtcclxuICAgIC8qIGNvbnZlcnQgc3RyaW5nIHRvIGJvb2xlYW4gKi9cclxuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJ0cnVlXCI7XHJcbn1cclxuLyogVG9nZ2xlIHRoZW1lIGFueSB0aW1lIHRoZSBzdGF0ZSBvZiB0aGUgY2hlY2tib3ggY2hhbmdlcyAqL1xyXG50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0b2dnbGVUaGVtZSk7XHJcblxyXG5jb25zdCBkYXJrcGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXJrcGluaycpO1xyXG5jb25zdCB5ZWxsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeWVsbG93Jyk7XHJcbmNvbnN0IGRhcmtibHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhcmtibHVlJyk7XHJcbmNvbnN0IHR1cmt1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0dXJrdXMnKTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNvbG9yKGV2ZW50KSB7XHJcbiAgICBpZihldmVudC5zcmNFbGVtZW50LmlkID09PSAnZGFya3BpbmsnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnknLCAnI0M4NTY2QicpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQuaWQgPT09ICd5ZWxsb3cnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnknLCAnI0Y2REE3MCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQuaWQgPT09ICd0dXJrdXMnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnknLCAnIzRDREJBNicpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQuaWQgPT09ICdkYXJrYmx1ZScpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsICcjNjY2MUFCJyk7XHJcbiAgICB9XHJcbiAgICBwYXJ0eS5jb25mZXR0aSh0aGlzKTtcclxufVxyXG5kYXJrcGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG55ZWxsb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDb2xvcilcclxuZGFya2JsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDb2xvcilcclxudHVya3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQ29sb3IpXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI5MzhiMWE2ODZjYTFhNGExMWZlZFwiOyB9Il0sIm5hbWVzIjpbInBhcnR5IiwibWVudVRvZ2dsZSIsIm5hdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2dnbGUiLCJjbGFzc0xpc3QiLCJxdWVyeVNlbGVjdG9yIiwibGkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwib25zY3JvbGwiLCJzY3JvbGxOYXZiYXIiLCJuYXZCYXIiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJhZGQiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZUhlcm8iLCJtaWRkbGVUZXh0IiwiYW5pbWF0ZUhlcm9TaGFrZSIsImxhc3RUZXh0SW5IZXJvIiwicGFnZSIsInRvZ2dsZUljb24iLCJsb2dvIiwic2V0Q2hlY2tlZFN0YXRlIiwibG9jYWxTdG9yYWdlIiwiY2hlY2tlZCIsInVuZGVmaW5lZCIsImlzVHJ1ZSIsImdldEl0ZW0iLCJ0b2dnbGVUaGVtZSIsInJlcGxhY2UiLCJ0b2dnbGVJY29uVGhlbWUiLCJzZXRJdGVtIiwiY29udGFpbnMiLCJzcmMiLCJ2YWx1ZSIsImRhcmtwaW5rIiwieWVsbG93IiwiZGFya2JsdWUiLCJ0dXJrdXMiLCJjaGFuZ2VDb2xvciIsImV2ZW50Iiwic3JjRWxlbWVudCIsImlkIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNvbmZldHRpIl0sInNvdXJjZVJvb3QiOiIifQ==