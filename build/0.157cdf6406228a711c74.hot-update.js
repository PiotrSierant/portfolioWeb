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
    logo.src = "public/images/logo_darkpink.svg";
  }

  if (event.srcElement.id === 'yellow') {
    document.documentElement.style.setProperty('--primary', '#F6DA70');
    logo.src = "public/images/logo_yellow.svg";
  }

  if (event.srcElement.id === 'turkus') {
    document.documentElement.style.setProperty('--primary', '#4CDBA6');
    logo.src = "public/images/logo_turkus.svg";
  }

  if (event.srcElement.id === 'darkblue') {
    document.documentElement.style.setProperty('--primary', '#6661AB');
    logo.src = "public/images/logo_darkblue.svg";
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
/******/ 	__webpack_require__.h = function() { return "a14ee0907441d15116a5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUMzR0EscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlGdW5jLy4vanMvYXBwLmpzIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjsgLyogaW1wb3J0IGNzcyBzdHlsZSAqL1xyXG5pbXBvcnQgcGFydHkgZnJvbSBcInBhcnR5LWpzXCI7XHJcbi8qIE1lbnUgdG9nZ2xlICovXHJcbmZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JylcclxuY29uc3QgbGkgPSBuYXYucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcclxubGkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVUb2dnbGUpfSlcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVUb2dnbGUpO1xyXG5cclxuLyogU2Nyb2xsIGRvd24gPT4gaGVhZGVyIHN0eWxlICovXHJcbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtzY3JvbGxOYXZiYXIoKX07XHJcbmNvbnN0IHNjcm9sbE5hdmJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA0MCkge1xyXG4gICAgICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQmFja2dyb3VuZFNjcm9sbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJCYWNrZ3JvdW5kU2Nyb2xsXCIpO1xyXG4gICAgfVxyXG59XHJcbi8qIGFuaW1hdGUgaGVybyB0ZXh0ICovXHJcbnNldFRpbWVvdXQoYW5pbWF0ZUhlcm8sIDApO1xyXG5mdW5jdGlvbiBhbmltYXRlSGVybygpIHtcclxuICAgIGNvbnN0IG1pZGRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybycpO1xyXG4gICAgbWlkZGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19ydWJiZXJCYW5kJylcclxufVxyXG5zZXRUaW1lb3V0KGFuaW1hdGVIZXJvU2hha2UsIDMwMDApO1xyXG5mdW5jdGlvbiBhbmltYXRlSGVyb1NoYWtlKCkge1xyXG4gICAgY29uc3QgbGFzdFRleHRJbkhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybyBwOmxhc3QtY2hpbGQnKTtcclxuICAgIGxhc3RUZXh0SW5IZXJvLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2ZsaXBJblknKTtcclxufVxyXG5cclxuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZVwiKTtcclxuY29uc3QgdG9nZ2xlID0gcGFnZS5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1pbnB1dFwiKTtcclxuY29uc3QgdG9nZ2xlSWNvbiA9IHBhZ2UucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtaWNvblwiKTtcclxuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJylcclxuLyogc2V0IHRoZW1lIGFuZCBsb2NhbFN0b3JhZ2Ugb24gcGFnZSBsb2FkICovXHJcbnNldENoZWNrZWRTdGF0ZSgpO1xyXG5mdW5jdGlvbiBzZXRDaGVja2VkU3RhdGUoKSB7XHJcbiAgICAvKiBjaGVja3MgaWYgbG9jYWxTdG9yYWdlIGhhcyBhIFwiY2hlY2tlZFwiIHZhbHVlIHNldCBhdCBhbGwgKi9cclxuICAgIGlmICghKGxvY2FsU3RvcmFnZS5jaGVja2VkID09PSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgLyogaWYgaXQgZG9lcywgaXQgc2V0cyB0aGUgc3RhdGUgb2YgdGhlIHRvZ2dsZSBhY2NvcmRpbmdseSAqL1xyXG4gICAgICAgIHRvZ2dsZS5jaGVja2VkID0gaXNUcnVlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hlY2tlZFwiKSk7XHJcbiAgICAgICAgLyogYWZ0ZXIgc2V0dGluZyB0aGUgdG9nZ2xlIHN0YXRlLCB0aGUgdGhlbWUgaXMgYWRqdXN0ZWQgYWNjb3JkaW5nIHRvIHRoZSBjaGVja2VkIHN0YXRlICovXHJcbiAgICAgICAgdG9nZ2xlVGhlbWUoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcclxuICAgIC8qIFRvZ2dsZSB0aGVtZSBiYXNlZCBvbiBzdGF0ZSBvZiBjaGVja2JveCAqL1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgcGFnZS5jbGFzc0xpc3QucmVwbGFjZShcImxpZ2h0XCIsIFwiZGFya1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFnZS5jbGFzc0xpc3QucmVwbGFjZShcImRhcmtcIiwgXCJsaWdodFwiKTtcclxuICAgIH1cclxuICAgIC8qIHJlcGxhY2UgaWNvbnMgb24gcGFnZSAqL1xyXG4gICAgdG9nZ2xlSWNvblRoZW1lKCk7XHJcbiAgICAvKiBzZXQgdGhlIHZhbHVlIG9mIHRoZSBcImNoZWNrZWRcIiBrZXkgaW4gbG9jYWxTdG9yYWdlICovXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrZWRcIiwgdG9nZ2xlLmNoZWNrZWQpO1xyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZUljb25UaGVtZSgpIHtcclxuICAgIC8qIFJlcGxhY2UgaWNvbnMgbm90IGFibGUgdG8gYmUgdGFyZ2V0ZWQgYnkgY3NzIHZhcmlhYmxlcyAqL1xyXG4gICAgaWYgKHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlnaHRcIikpIHtcclxuICAgICAgICB0b2dnbGVJY29uLnNyYyA9IFwicHVibGljL2ltYWdlcy9tb29uLnN2Z1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2dnbGVJY29uLnNyYyA9IFwicHVibGljL2ltYWdlcy9zdW4uc3ZnXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNUcnVlKHZhbHVlKSB7XHJcbiAgICAvKiBjb252ZXJ0IHN0cmluZyB0byBib29sZWFuICovXHJcbiAgICByZXR1cm4gdmFsdWUgPT09IFwidHJ1ZVwiO1xyXG59XHJcbi8qIFRvZ2dsZSB0aGVtZSBhbnkgdGltZSB0aGUgc3RhdGUgb2YgdGhlIGNoZWNrYm94IGNoYW5nZXMgKi9cclxudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdG9nZ2xlVGhlbWUpO1xyXG5cclxuY29uc3QgZGFya3BpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFya3BpbmsnKTtcclxuY29uc3QgeWVsbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3llbGxvdycpO1xyXG5jb25zdCBkYXJrYmx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXJrYmx1ZScpO1xyXG5jb25zdCB0dXJrdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHVya3VzJyk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDb2xvcihldmVudCkge1xyXG4gICAgaWYoZXZlbnQuc3JjRWxlbWVudC5pZCA9PT0gJ2RhcmtwaW5rJykge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgJyNDODU2NkInKTtcclxuICAgICAgICBsb2dvLnNyYyA9IFwicHVibGljL2ltYWdlcy9sb2dvX2RhcmtwaW5rLnN2Z1wiO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQuaWQgPT09ICd5ZWxsb3cnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnknLCAnI0Y2REE3MCcpO1xyXG4gICAgICAgIGxvZ28uc3JjID0gXCJwdWJsaWMvaW1hZ2VzL2xvZ29feWVsbG93LnN2Z1wiO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQuaWQgPT09ICd0dXJrdXMnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnknLCAnIzRDREJBNicpO1xyXG4gICAgICAgIGxvZ28uc3JjID0gXCJwdWJsaWMvaW1hZ2VzL2xvZ29fdHVya3VzLnN2Z1wiO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQuaWQgPT09ICdkYXJrYmx1ZScpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsICcjNjY2MUFCJyk7XHJcbiAgICAgICAgbG9nby5zcmMgPSBcInB1YmxpYy9pbWFnZXMvbG9nb19kYXJrYmx1ZS5zdmdcIjtcclxuICAgIH1cclxuICAgIHBhcnR5LmNvbmZldHRpKHRoaXMpO1xyXG59XHJcbmRhcmtwaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQ29sb3IpXHJcbnllbGxvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG5kYXJrYmx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG50dXJrdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDb2xvcilcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImExNGVlMDkwNzQ0MWQxNTExNmE1XCI7IH0iXSwibmFtZXMiOlsicGFydHkiLCJtZW51VG9nZ2xlIiwibmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJsaSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInNjcm9sbE5hdmJhciIsIm5hdkJhciIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImFkZCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJhbmltYXRlSGVybyIsIm1pZGRsZVRleHQiLCJhbmltYXRlSGVyb1NoYWtlIiwibGFzdFRleHRJbkhlcm8iLCJwYWdlIiwidG9nZ2xlSWNvbiIsImxvZ28iLCJzZXRDaGVja2VkU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwiaXNUcnVlIiwiZ2V0SXRlbSIsInRvZ2dsZVRoZW1lIiwicmVwbGFjZSIsInRvZ2dsZUljb25UaGVtZSIsInNldEl0ZW0iLCJjb250YWlucyIsInNyYyIsInZhbHVlIiwiZGFya3BpbmsiLCJ5ZWxsb3ciLCJkYXJrYmx1ZSIsInR1cmt1cyIsImNoYW5nZUNvbG9yIiwiZXZlbnQiLCJzcmNFbGVtZW50IiwiaWQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY29uZmV0dGkiXSwic291cmNlUm9vdCI6IiJ9