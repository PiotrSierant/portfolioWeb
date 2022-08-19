"use strict";
self["webpackHotUpdateMyFunc"](0,{

/***/ 23:
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

function changeColor(color) {
  console.log('zmieniam');
  document.documentElement.style.setProperty('--primary', color);
}

darkpink.addEventListener('click', changeColor('#C8566B'));
yellow.addEventListener('click', changeColor);
darkblue.addEventListener('click', changeColor);
turkus.addEventListener('click', changeColor);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5957e51dc5b766f7480d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsRUFBaUNpQyxXQUFqQzs7Ozs7Ozs7VUN0RkEscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlGdW5jLy4vanMvYXBwLmpzIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjsgLyogaW1wb3J0IGNzcyBzdHlsZSAqL1xyXG5cclxuLyogTWVudSB0b2dnbGUgKi9cclxuZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51VG9nZ2xlKTtcclxuXHJcbi8qIFNjcm9sbCBkb3duID0+IGhlYWRlciBzdHlsZSAqL1xyXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7c2Nyb2xsTmF2YmFyKCl9O1xyXG5jb25zdCBzY3JvbGxOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNDApIHtcclxuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcImhlYWRlckJhY2tncm91bmRTY3JvbGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyQmFja2dyb3VuZFNjcm9sbFwiKTtcclxuICAgIH1cclxufVxyXG4vKiBhbmltYXRlIGhlcm8gdGV4dCAqL1xyXG5zZXRUaW1lb3V0KGFuaW1hdGVIZXJvLCAwKTtcclxuZnVuY3Rpb24gYW5pbWF0ZUhlcm8oKSB7XHJcbiAgICBjb25zdCBtaWRkbGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm8nKTtcclxuICAgIG1pZGRsZVRleHQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fcnViYmVyQmFuZCcpXHJcbn1cclxuc2V0VGltZW91dChhbmltYXRlSGVyb1NoYWtlLCAzMDAwKTtcclxuZnVuY3Rpb24gYW5pbWF0ZUhlcm9TaGFrZSgpIHtcclxuICAgIGNvbnN0IGxhc3RUZXh0SW5IZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm8gcDpsYXN0LWNoaWxkJyk7XHJcbiAgICBsYXN0VGV4dEluSGVyby5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19mbGlwSW5ZJyk7XHJcbn1cclxuXHJcbmNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VcIik7XHJcbmNvbnN0IHRvZ2dsZSA9IHBhZ2UucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtaW5wdXRcIik7XHJcbmNvbnN0IHRvZ2dsZUljb24gPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLWljb25cIik7XHJcbi8qIHNldCB0aGVtZSBhbmQgbG9jYWxTdG9yYWdlIG9uIHBhZ2UgbG9hZCAqL1xyXG5zZXRDaGVja2VkU3RhdGUoKTtcclxuZnVuY3Rpb24gc2V0Q2hlY2tlZFN0YXRlKCkge1xyXG4gICAgLyogY2hlY2tzIGlmIGxvY2FsU3RvcmFnZSBoYXMgYSBcImNoZWNrZWRcIiB2YWx1ZSBzZXQgYXQgYWxsICovXHJcbiAgICBpZiAoIShsb2NhbFN0b3JhZ2UuY2hlY2tlZCA9PT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgIC8qIGlmIGl0IGRvZXMsIGl0IHNldHMgdGhlIHN0YXRlIG9mIHRoZSB0b2dnbGUgYWNjb3JkaW5nbHkgKi9cclxuICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGlzVHJ1ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoZWNrZWRcIikpO1xyXG4gICAgICAgIC8qIGFmdGVyIHNldHRpbmcgdGhlIHRvZ2dsZSBzdGF0ZSwgdGhlIHRoZW1lIGlzIGFkanVzdGVkIGFjY29yZGluZyB0byB0aGUgY2hlY2tlZCBzdGF0ZSAqL1xyXG4gICAgICAgIHRvZ2dsZVRoZW1lKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XHJcbiAgICAvKiBUb2dnbGUgdGhlbWUgYmFzZWQgb24gc3RhdGUgb2YgY2hlY2tib3ggKi9cclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgIHBhZ2UuY2xhc3NMaXN0LnJlcGxhY2UoXCJsaWdodFwiLCBcImRhcmtcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhZ2UuY2xhc3NMaXN0LnJlcGxhY2UoXCJkYXJrXCIsIFwibGlnaHRcIik7XHJcbiAgICB9XHJcbiAgICAvKiByZXBsYWNlIGljb25zIG9uIHBhZ2UgKi9cclxuICAgIHRvZ2dsZUljb25UaGVtZSgpO1xyXG4gICAgLyogc2V0IHRoZSB2YWx1ZSBvZiB0aGUgXCJjaGVja2VkXCIga2V5IGluIGxvY2FsU3RvcmFnZSAqL1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGVja2VkXCIsIHRvZ2dsZS5jaGVja2VkKTtcclxufVxyXG5mdW5jdGlvbiB0b2dnbGVJY29uVGhlbWUoKSB7XHJcbiAgICAvKiBSZXBsYWNlIGljb25zIG5vdCBhYmxlIHRvIGJlIHRhcmdldGVkIGJ5IGNzcyB2YXJpYWJsZXMgKi9cclxuICAgIGlmIChwYWdlLmNsYXNzTGlzdC5jb250YWlucyhcImxpZ2h0XCIpKSB7XHJcbiAgICAgICAgdG9nZ2xlSWNvbi5zcmMgPSBcInB1YmxpYy9pbWFnZXMvbW9vbi5zdmdcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9nZ2xlSWNvbi5zcmMgPSBcInB1YmxpYy9pbWFnZXMvc3VuLnN2Z1wiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzVHJ1ZSh2YWx1ZSkge1xyXG4gICAgLyogY29udmVydCBzdHJpbmcgdG8gYm9vbGVhbiAqL1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBcInRydWVcIjtcclxufVxyXG4vKiBUb2dnbGUgdGhlbWUgYW55IHRpbWUgdGhlIHN0YXRlIG9mIHRoZSBjaGVja2JveCBjaGFuZ2VzICovXHJcbnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRvZ2dsZVRoZW1lKTtcclxuXHJcbmNvbnN0IGRhcmtwaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhcmtwaW5rJyk7XHJcbmNvbnN0IHllbGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5ZWxsb3cnKTtcclxuY29uc3QgZGFya2JsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFya2JsdWUnKTtcclxuY29uc3QgdHVya3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R1cmt1cycpO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoY29sb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCd6bWllbmlhbScpXHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsIGNvbG9yKTtcclxufVxyXG5kYXJrcGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKCcjQzg1NjZCJykpXHJcbnllbGxvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG5kYXJrYmx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG50dXJrdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDb2xvcilcclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI1OTU3ZTUxZGM1Yjc2NmY3NDgwZFwiOyB9Il0sIm5hbWVzIjpbIm1lbnVUb2dnbGUiLCJuYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlIiwiY2xhc3NMaXN0IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInNjcm9sbE5hdmJhciIsIm5hdkJhciIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImFkZCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJhbmltYXRlSGVybyIsIm1pZGRsZVRleHQiLCJhbmltYXRlSGVyb1NoYWtlIiwibGFzdFRleHRJbkhlcm8iLCJwYWdlIiwidG9nZ2xlSWNvbiIsInNldENoZWNrZWRTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImNoZWNrZWQiLCJ1bmRlZmluZWQiLCJpc1RydWUiLCJnZXRJdGVtIiwidG9nZ2xlVGhlbWUiLCJyZXBsYWNlIiwidG9nZ2xlSWNvblRoZW1lIiwic2V0SXRlbSIsImNvbnRhaW5zIiwic3JjIiwidmFsdWUiLCJkYXJrcGluayIsInllbGxvdyIsImRhcmtibHVlIiwidHVya3VzIiwiY2hhbmdlQ29sb3IiLCJjb2xvciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsInNldFByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==