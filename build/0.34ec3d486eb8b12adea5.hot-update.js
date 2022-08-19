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

function changeColor(event) {}

darkpink.addEventListener('click', changeColor);
yellow.addEventListener('click', changeColor);
darkblue.addEventListener('click', changeColor);
turkus.addEventListener('click', changeColor);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3246ac56edf90b26b204"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7O0FBQ0QsU0FBU00sZUFBVCxHQUEyQjtFQUN2QjtFQUNBLElBQUlWLElBQUksQ0FBQ2hCLFNBQUwsQ0FBZTRCLFFBQWYsQ0FBd0IsT0FBeEIsQ0FBSixFQUFzQztJQUNsQ1gsVUFBVSxDQUFDWSxHQUFYLEdBQWlCLHdCQUFqQjtFQUNILENBRkQsTUFFTztJQUNIWixVQUFVLENBQUNZLEdBQVgsR0FBaUIsdUJBQWpCO0VBQ0g7QUFDSjs7QUFDRCxTQUFTUCxNQUFULENBQWdCUSxLQUFoQixFQUF1QjtFQUNuQjtFQUNBLE9BQU9BLEtBQUssS0FBSyxNQUFqQjtBQUNIO0FBQ0Q7OztBQUNBL0IsTUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ3NCLFdBQWxDO0FBRUEsSUFBTU8sUUFBUSxHQUFHbEMsUUFBUSxDQUFDSSxhQUFULENBQXVCLFdBQXZCLENBQWpCO0FBQ0EsSUFBTStCLE1BQU0sR0FBR25DLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTWdDLFFBQVEsR0FBR3BDLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixXQUF2QixDQUFqQjtBQUNBLElBQU1pQyxNQUFNLEdBQUdyQyxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjs7QUFFQSxTQUFTa0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEIsQ0FFM0I7O0FBQ0RMLFFBQVEsQ0FBQzdCLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DaUMsV0FBbkM7QUFDQUgsTUFBTSxDQUFDOUIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNpQyxXQUFqQztBQUNBRixRQUFRLENBQUMvQixnQkFBVCxDQUEwQixPQUExQixFQUFtQ2lDLFdBQW5DO0FBQ0FELE1BQU0sQ0FBQ2hDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDaUMsV0FBakM7Ozs7Ozs7O1VDckZBLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL015RnVuYy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9NeUZ1bmMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7IC8qIGltcG9ydCBjc3Mgc3R5bGUgKi9cclxuXHJcbi8qIE1lbnUgdG9nZ2xlICovXHJcbmZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudVRvZ2dsZSk7XHJcblxyXG4vKiBTY3JvbGwgZG93biA9PiBoZWFkZXIgc3R5bGUgKi9cclxud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge3Njcm9sbE5hdmJhcigpfTtcclxuY29uc3Qgc2Nyb2xsTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDQwKSB7XHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJCYWNrZ3JvdW5kU2Nyb2xsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlckJhY2tncm91bmRTY3JvbGxcIik7XHJcbiAgICB9XHJcbn1cclxuLyogYW5pbWF0ZSBoZXJvIHRleHQgKi9cclxuc2V0VGltZW91dChhbmltYXRlSGVybywgMCk7XHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvKCkge1xyXG4gICAgY29uc3QgbWlkZGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvJyk7XHJcbiAgICBtaWRkbGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX3J1YmJlckJhbmQnKVxyXG59XHJcbnNldFRpbWVvdXQoYW5pbWF0ZUhlcm9TaGFrZSwgMzAwMCk7XHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvU2hha2UoKSB7XHJcbiAgICBjb25zdCBsYXN0VGV4dEluSGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvIHA6bGFzdC1jaGlsZCcpO1xyXG4gICAgbGFzdFRleHRJbkhlcm8uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fZmxpcEluWScpO1xyXG59XHJcblxyXG5jb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlXCIpO1xyXG5jb25zdCB0b2dnbGUgPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLWlucHV0XCIpO1xyXG5jb25zdCB0b2dnbGVJY29uID0gcGFnZS5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1pY29uXCIpO1xyXG4vKiBzZXQgdGhlbWUgYW5kIGxvY2FsU3RvcmFnZSBvbiBwYWdlIGxvYWQgKi9cclxuc2V0Q2hlY2tlZFN0YXRlKCk7XHJcbmZ1bmN0aW9uIHNldENoZWNrZWRTdGF0ZSgpIHtcclxuICAgIC8qIGNoZWNrcyBpZiBsb2NhbFN0b3JhZ2UgaGFzIGEgXCJjaGVja2VkXCIgdmFsdWUgc2V0IGF0IGFsbCAqL1xyXG4gICAgaWYgKCEobG9jYWxTdG9yYWdlLmNoZWNrZWQgPT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAvKiBpZiBpdCBkb2VzLCBpdCBzZXRzIHRoZSBzdGF0ZSBvZiB0aGUgdG9nZ2xlIGFjY29yZGluZ2x5ICovXHJcbiAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBpc1RydWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGVja2VkXCIpKTtcclxuICAgICAgICAvKiBhZnRlciBzZXR0aW5nIHRoZSB0b2dnbGUgc3RhdGUsIHRoZSB0aGVtZSBpcyBhZGp1c3RlZCBhY2NvcmRpbmcgdG8gdGhlIGNoZWNrZWQgc3RhdGUgKi9cclxuICAgICAgICB0b2dnbGVUaGVtZSgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xyXG4gICAgLyogVG9nZ2xlIHRoZW1lIGJhc2VkIG9uIHN0YXRlIG9mIGNoZWNrYm94ICovXHJcbiAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgICBwYWdlLmNsYXNzTGlzdC5yZXBsYWNlKFwibGlnaHRcIiwgXCJkYXJrXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYWdlLmNsYXNzTGlzdC5yZXBsYWNlKFwiZGFya1wiLCBcImxpZ2h0XCIpO1xyXG4gICAgfVxyXG4gICAgLyogcmVwbGFjZSBpY29ucyBvbiBwYWdlICovXHJcbiAgICB0b2dnbGVJY29uVGhlbWUoKTtcclxuICAgIC8qIHNldCB0aGUgdmFsdWUgb2YgdGhlIFwiY2hlY2tlZFwiIGtleSBpbiBsb2NhbFN0b3JhZ2UgKi9cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tlZFwiLCB0b2dnbGUuY2hlY2tlZCk7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlSWNvblRoZW1lKCkge1xyXG4gICAgLyogUmVwbGFjZSBpY29ucyBub3QgYWJsZSB0byBiZSB0YXJnZXRlZCBieSBjc3MgdmFyaWFibGVzICovXHJcbiAgICBpZiAocGFnZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsaWdodFwiKSkge1xyXG4gICAgICAgIHRvZ2dsZUljb24uc3JjID0gXCJwdWJsaWMvaW1hZ2VzL21vb24uc3ZnXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvZ2dsZUljb24uc3JjID0gXCJwdWJsaWMvaW1hZ2VzL3N1bi5zdmdcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpc1RydWUodmFsdWUpIHtcclxuICAgIC8qIGNvbnZlcnQgc3RyaW5nIHRvIGJvb2xlYW4gKi9cclxuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJ0cnVlXCI7XHJcbn1cclxuLyogVG9nZ2xlIHRoZW1lIGFueSB0aW1lIHRoZSBzdGF0ZSBvZiB0aGUgY2hlY2tib3ggY2hhbmdlcyAqL1xyXG50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0b2dnbGVUaGVtZSk7XHJcblxyXG5jb25zdCBkYXJrcGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXJrcGluaycpO1xyXG5jb25zdCB5ZWxsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeWVsbG93Jyk7XHJcbmNvbnN0IGRhcmtibHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhcmtibHVlJyk7XHJcbmNvbnN0IHR1cmt1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0dXJrdXMnKTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNvbG9yKGV2ZW50KSB7XHJcblxyXG59XHJcbmRhcmtwaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQ29sb3IpXHJcbnllbGxvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG5kYXJrYmx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG50dXJrdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDb2xvcikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMzI0NmFjNTZlZGY5MGIyNmIyMDRcIjsgfSJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwibmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwib25zY3JvbGwiLCJzY3JvbGxOYXZiYXIiLCJuYXZCYXIiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJhZGQiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZUhlcm8iLCJtaWRkbGVUZXh0IiwiYW5pbWF0ZUhlcm9TaGFrZSIsImxhc3RUZXh0SW5IZXJvIiwicGFnZSIsInRvZ2dsZUljb24iLCJzZXRDaGVja2VkU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwiaXNUcnVlIiwiZ2V0SXRlbSIsInRvZ2dsZVRoZW1lIiwicmVwbGFjZSIsInRvZ2dsZUljb25UaGVtZSIsInNldEl0ZW0iLCJjb250YWlucyIsInNyYyIsInZhbHVlIiwiZGFya3BpbmsiLCJ5ZWxsb3ciLCJkYXJrYmx1ZSIsInR1cmt1cyIsImNoYW5nZUNvbG9yIiwiZXZlbnQiXSwic291cmNlUm9vdCI6IiJ9