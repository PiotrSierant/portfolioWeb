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

function closeMenu() {}

var nav = document.querySelector('nav');
var li = nav.querySelectorAll('li');
li.forEach(function (element) {
  element.addEventListener('click', function () {
    console.log('działa');
  });
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "348a811dde637654d3f4"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsVUFBTixDQUFpQkMsRUFBakIsS0FBd0IsVUFBM0IsRUFBdUM7SUFDbkNoRCxRQUFRLENBQUNpQixlQUFULENBQXlCZ0MsS0FBekIsQ0FBK0JDLFdBQS9CLENBQTJDLFdBQTNDLEVBQXdELFNBQXhEO0VBQ0g7O0VBQ0QsSUFBSUosS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxFQUFqQixLQUF3QixRQUE1QixFQUFzQztJQUNsQ2hELFFBQVEsQ0FBQ2lCLGVBQVQsQ0FBeUJnQyxLQUF6QixDQUErQkMsV0FBL0IsQ0FBMkMsV0FBM0MsRUFBd0QsU0FBeEQ7RUFDSDs7RUFDRCxJQUFJSixLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLEVBQWpCLEtBQXdCLFFBQTVCLEVBQXNDO0lBQ2xDaEQsUUFBUSxDQUFDaUIsZUFBVCxDQUF5QmdDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQyxXQUEzQyxFQUF3RCxTQUF4RDtFQUNIOztFQUNELElBQUlKLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsRUFBakIsS0FBd0IsVUFBNUIsRUFBd0M7SUFDcENoRCxRQUFRLENBQUNpQixlQUFULENBQXlCZ0MsS0FBekIsQ0FBK0JDLFdBQS9CLENBQTJDLFdBQTNDLEVBQXdELFNBQXhEO0VBQ0g7QUFDSjs7QUFDRFQsUUFBUSxDQUFDL0IsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNtQyxXQUFuQztBQUNBSCxNQUFNLENBQUNoQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ21DLFdBQWpDO0FBQ0FGLFFBQVEsQ0FBQ2pDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DbUMsV0FBbkM7QUFDQUQsTUFBTSxDQUFDbEMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNtQyxXQUFqQzs7Ozs7Ozs7VUN6R0EscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlGdW5jLy4vanMvYXBwLmpzIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjsgLyogaW1wb3J0IGNzcyBzdHlsZSAqL1xyXG5cclxuLyogTWVudSB0b2dnbGUgKi9cclxuZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlTWVudSgpIHt9XHJcblxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKVxyXG5jb25zdCBsaSA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG5saS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2R6aWHFgmEnKVxyXG4gICAgfSlcclxufSlcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVUb2dnbGUpO1xyXG5cclxuLyogU2Nyb2xsIGRvd24gPT4gaGVhZGVyIHN0eWxlICovXHJcbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtzY3JvbGxOYXZiYXIoKX07XHJcbmNvbnN0IHNjcm9sbE5hdmJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA0MCkge1xyXG4gICAgICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQmFja2dyb3VuZFNjcm9sbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJCYWNrZ3JvdW5kU2Nyb2xsXCIpO1xyXG4gICAgfVxyXG59XHJcbi8qIGFuaW1hdGUgaGVybyB0ZXh0ICovXHJcbnNldFRpbWVvdXQoYW5pbWF0ZUhlcm8sIDApO1xyXG5mdW5jdGlvbiBhbmltYXRlSGVybygpIHtcclxuICAgIGNvbnN0IG1pZGRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybycpO1xyXG4gICAgbWlkZGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19ydWJiZXJCYW5kJylcclxufVxyXG5zZXRUaW1lb3V0KGFuaW1hdGVIZXJvU2hha2UsIDMwMDApO1xyXG5mdW5jdGlvbiBhbmltYXRlSGVyb1NoYWtlKCkge1xyXG4gICAgY29uc3QgbGFzdFRleHRJbkhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybyBwOmxhc3QtY2hpbGQnKTtcclxuICAgIGxhc3RUZXh0SW5IZXJvLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2ZsaXBJblknKTtcclxufVxyXG5cclxuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZVwiKTtcclxuY29uc3QgdG9nZ2xlID0gcGFnZS5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1pbnB1dFwiKTtcclxuY29uc3QgdG9nZ2xlSWNvbiA9IHBhZ2UucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtaWNvblwiKTtcclxuLyogc2V0IHRoZW1lIGFuZCBsb2NhbFN0b3JhZ2Ugb24gcGFnZSBsb2FkICovXHJcbnNldENoZWNrZWRTdGF0ZSgpO1xyXG5mdW5jdGlvbiBzZXRDaGVja2VkU3RhdGUoKSB7XHJcbiAgICAvKiBjaGVja3MgaWYgbG9jYWxTdG9yYWdlIGhhcyBhIFwiY2hlY2tlZFwiIHZhbHVlIHNldCBhdCBhbGwgKi9cclxuICAgIGlmICghKGxvY2FsU3RvcmFnZS5jaGVja2VkID09PSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgLyogaWYgaXQgZG9lcywgaXQgc2V0cyB0aGUgc3RhdGUgb2YgdGhlIHRvZ2dsZSBhY2NvcmRpbmdseSAqL1xyXG4gICAgICAgIHRvZ2dsZS5jaGVja2VkID0gaXNUcnVlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hlY2tlZFwiKSk7XHJcbiAgICAgICAgLyogYWZ0ZXIgc2V0dGluZyB0aGUgdG9nZ2xlIHN0YXRlLCB0aGUgdGhlbWUgaXMgYWRqdXN0ZWQgYWNjb3JkaW5nIHRvIHRoZSBjaGVja2VkIHN0YXRlICovXHJcbiAgICAgICAgdG9nZ2xlVGhlbWUoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcclxuICAgIC8qIFRvZ2dsZSB0aGVtZSBiYXNlZCBvbiBzdGF0ZSBvZiBjaGVja2JveCAqL1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgcGFnZS5jbGFzc0xpc3QucmVwbGFjZShcImxpZ2h0XCIsIFwiZGFya1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFnZS5jbGFzc0xpc3QucmVwbGFjZShcImRhcmtcIiwgXCJsaWdodFwiKTtcclxuICAgIH1cclxuICAgIC8qIHJlcGxhY2UgaWNvbnMgb24gcGFnZSAqL1xyXG4gICAgdG9nZ2xlSWNvblRoZW1lKCk7XHJcbiAgICAvKiBzZXQgdGhlIHZhbHVlIG9mIHRoZSBcImNoZWNrZWRcIiBrZXkgaW4gbG9jYWxTdG9yYWdlICovXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrZWRcIiwgdG9nZ2xlLmNoZWNrZWQpO1xyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZUljb25UaGVtZSgpIHtcclxuICAgIC8qIFJlcGxhY2UgaWNvbnMgbm90IGFibGUgdG8gYmUgdGFyZ2V0ZWQgYnkgY3NzIHZhcmlhYmxlcyAqL1xyXG4gICAgaWYgKHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlnaHRcIikpIHtcclxuICAgICAgICB0b2dnbGVJY29uLnNyYyA9IFwicHVibGljL2ltYWdlcy9tb29uLnN2Z1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2dnbGVJY29uLnNyYyA9IFwicHVibGljL2ltYWdlcy9zdW4uc3ZnXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNUcnVlKHZhbHVlKSB7XHJcbiAgICAvKiBjb252ZXJ0IHN0cmluZyB0byBib29sZWFuICovXHJcbiAgICByZXR1cm4gdmFsdWUgPT09IFwidHJ1ZVwiO1xyXG59XHJcbi8qIFRvZ2dsZSB0aGVtZSBhbnkgdGltZSB0aGUgc3RhdGUgb2YgdGhlIGNoZWNrYm94IGNoYW5nZXMgKi9cclxudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdG9nZ2xlVGhlbWUpO1xyXG5cclxuY29uc3QgZGFya3BpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFya3BpbmsnKTtcclxuY29uc3QgeWVsbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3llbGxvdycpO1xyXG5jb25zdCBkYXJrYmx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXJrYmx1ZScpO1xyXG5jb25zdCB0dXJrdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHVya3VzJyk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDb2xvcihldmVudCkge1xyXG4gICAgaWYoZXZlbnQuc3JjRWxlbWVudC5pZCA9PT0gJ2RhcmtwaW5rJykge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgJyNDODU2NkInKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5zcmNFbGVtZW50LmlkID09PSAneWVsbG93Jykge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgJyNGNkRBNzAnKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5zcmNFbGVtZW50LmlkID09PSAndHVya3VzJykge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgJyM0Q0RCQTYnKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5zcmNFbGVtZW50LmlkID09PSAnZGFya2JsdWUnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnknLCAnIzY2NjFBQicpO1xyXG4gICAgfVxyXG59XHJcbmRhcmtwaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQ29sb3IpXHJcbnllbGxvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG5kYXJrYmx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG50dXJrdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDb2xvcikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMzQ4YTgxMWRkZTYzNzY1NGQzZjRcIjsgfSJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwibmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsImNsb3NlTWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJsaSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib25zY3JvbGwiLCJzY3JvbGxOYXZiYXIiLCJuYXZCYXIiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJhZGQiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZUhlcm8iLCJtaWRkbGVUZXh0IiwiYW5pbWF0ZUhlcm9TaGFrZSIsImxhc3RUZXh0SW5IZXJvIiwicGFnZSIsInRvZ2dsZUljb24iLCJzZXRDaGVja2VkU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwiaXNUcnVlIiwiZ2V0SXRlbSIsInRvZ2dsZVRoZW1lIiwicmVwbGFjZSIsInRvZ2dsZUljb25UaGVtZSIsInNldEl0ZW0iLCJjb250YWlucyIsInNyYyIsInZhbHVlIiwiZGFya3BpbmsiLCJ5ZWxsb3ciLCJkYXJrYmx1ZSIsInR1cmt1cyIsImNoYW5nZUNvbG9yIiwiZXZlbnQiLCJzcmNFbGVtZW50IiwiaWQiLCJzdHlsZSIsInNldFByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==