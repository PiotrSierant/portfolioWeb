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
  party_js__WEBPACK_IMPORTED_MODULE_1___default().confetti(this);
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
/******/ 	__webpack_require__.h = function() { return "a7c0c31db824e806d002"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuQzlDLFFBQVEsQ0FBQ2MsZUFBVCxDQUF5QmlDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQyxXQUEzQyxFQUF3RCxTQUF4RDtFQUNIOztFQUNELElBQUlKLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsRUFBakIsS0FBd0IsUUFBNUIsRUFBc0M7SUFDbEM5QyxRQUFRLENBQUNjLGVBQVQsQ0FBeUJpQyxLQUF6QixDQUErQkMsV0FBL0IsQ0FBMkMsV0FBM0MsRUFBd0QsU0FBeEQ7RUFDSDs7RUFDRCxJQUFJSixLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLEVBQWpCLEtBQXdCLFFBQTVCLEVBQXNDO0lBQ2xDOUMsUUFBUSxDQUFDYyxlQUFULENBQXlCaUMsS0FBekIsQ0FBK0JDLFdBQS9CLENBQTJDLFdBQTNDLEVBQXdELFNBQXhEO0VBQ0g7O0VBQ0QsSUFBSUosS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxFQUFqQixLQUF3QixVQUE1QixFQUF3QztJQUNwQzlDLFFBQVEsQ0FBQ2MsZUFBVCxDQUF5QmlDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQyxXQUEzQyxFQUF3RCxTQUF4RDtFQUNIOztFQUNEbkQsd0RBQUEsQ0FBZSxJQUFmO0FBQ0g7O0FBQ0QwQyxRQUFRLENBQUM5QixnQkFBVCxDQUEwQixPQUExQixFQUFtQ2tDLFdBQW5DO0FBQ0FILE1BQU0sQ0FBQy9CLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDa0MsV0FBakM7QUFDQUYsUUFBUSxDQUFDaEMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNrQyxXQUFuQztBQUNBRCxNQUFNLENBQUNqQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ2tDLFdBQWpDOzs7Ozs7OztVQ3ZHQSxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUZ1bmMvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiOyAvKiBpbXBvcnQgY3NzIHN0eWxlICovXHJcbmltcG9ydCBwYXJ0eSBmcm9tIFwicGFydHktanNcIjtcclxuLyogTWVudSB0b2dnbGUgKi9cclxuZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKVxyXG5jb25zdCBsaSA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG5saS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVRvZ2dsZSl9KVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudVRvZ2dsZSk7XHJcblxyXG4vKiBTY3JvbGwgZG93biA9PiBoZWFkZXIgc3R5bGUgKi9cclxud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge3Njcm9sbE5hdmJhcigpfTtcclxuY29uc3Qgc2Nyb2xsTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDQwKSB7XHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJCYWNrZ3JvdW5kU2Nyb2xsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlckJhY2tncm91bmRTY3JvbGxcIik7XHJcbiAgICB9XHJcbn1cclxuLyogYW5pbWF0ZSBoZXJvIHRleHQgKi9cclxuc2V0VGltZW91dChhbmltYXRlSGVybywgMCk7XHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvKCkge1xyXG4gICAgY29uc3QgbWlkZGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvJyk7XHJcbiAgICBtaWRkbGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX3J1YmJlckJhbmQnKVxyXG59XHJcbnNldFRpbWVvdXQoYW5pbWF0ZUhlcm9TaGFrZSwgMzAwMCk7XHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvU2hha2UoKSB7XHJcbiAgICBjb25zdCBsYXN0VGV4dEluSGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvIHA6bGFzdC1jaGlsZCcpO1xyXG4gICAgbGFzdFRleHRJbkhlcm8uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fZmxpcEluWScpO1xyXG59XHJcblxyXG5jb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlXCIpO1xyXG5jb25zdCB0b2dnbGUgPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLWlucHV0XCIpO1xyXG5jb25zdCB0b2dnbGVJY29uID0gcGFnZS5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1pY29uXCIpO1xyXG4vKiBzZXQgdGhlbWUgYW5kIGxvY2FsU3RvcmFnZSBvbiBwYWdlIGxvYWQgKi9cclxuc2V0Q2hlY2tlZFN0YXRlKCk7XHJcbmZ1bmN0aW9uIHNldENoZWNrZWRTdGF0ZSgpIHtcclxuICAgIC8qIGNoZWNrcyBpZiBsb2NhbFN0b3JhZ2UgaGFzIGEgXCJjaGVja2VkXCIgdmFsdWUgc2V0IGF0IGFsbCAqL1xyXG4gICAgaWYgKCEobG9jYWxTdG9yYWdlLmNoZWNrZWQgPT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAvKiBpZiBpdCBkb2VzLCBpdCBzZXRzIHRoZSBzdGF0ZSBvZiB0aGUgdG9nZ2xlIGFjY29yZGluZ2x5ICovXHJcbiAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBpc1RydWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGVja2VkXCIpKTtcclxuICAgICAgICAvKiBhZnRlciBzZXR0aW5nIHRoZSB0b2dnbGUgc3RhdGUsIHRoZSB0aGVtZSBpcyBhZGp1c3RlZCBhY2NvcmRpbmcgdG8gdGhlIGNoZWNrZWQgc3RhdGUgKi9cclxuICAgICAgICB0b2dnbGVUaGVtZSgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xyXG4gICAgLyogVG9nZ2xlIHRoZW1lIGJhc2VkIG9uIHN0YXRlIG9mIGNoZWNrYm94ICovXHJcbiAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgICBwYWdlLmNsYXNzTGlzdC5yZXBsYWNlKFwibGlnaHRcIiwgXCJkYXJrXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYWdlLmNsYXNzTGlzdC5yZXBsYWNlKFwiZGFya1wiLCBcImxpZ2h0XCIpO1xyXG4gICAgfVxyXG4gICAgLyogcmVwbGFjZSBpY29ucyBvbiBwYWdlICovXHJcbiAgICB0b2dnbGVJY29uVGhlbWUoKTtcclxuICAgIC8qIHNldCB0aGUgdmFsdWUgb2YgdGhlIFwiY2hlY2tlZFwiIGtleSBpbiBsb2NhbFN0b3JhZ2UgKi9cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tlZFwiLCB0b2dnbGUuY2hlY2tlZCk7XHJcbiAgICBwYXJ0eS5jb25mZXR0aSh0aGlzKTtcclxufVxyXG5mdW5jdGlvbiB0b2dnbGVJY29uVGhlbWUoKSB7XHJcbiAgICAvKiBSZXBsYWNlIGljb25zIG5vdCBhYmxlIHRvIGJlIHRhcmdldGVkIGJ5IGNzcyB2YXJpYWJsZXMgKi9cclxuICAgIGlmIChwYWdlLmNsYXNzTGlzdC5jb250YWlucyhcImxpZ2h0XCIpKSB7XHJcbiAgICAgICAgdG9nZ2xlSWNvbi5zcmMgPSBcInB1YmxpYy9pbWFnZXMvbW9vbi5zdmdcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9nZ2xlSWNvbi5zcmMgPSBcInB1YmxpYy9pbWFnZXMvc3VuLnN2Z1wiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzVHJ1ZSh2YWx1ZSkge1xyXG4gICAgLyogY29udmVydCBzdHJpbmcgdG8gYm9vbGVhbiAqL1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBcInRydWVcIjtcclxufVxyXG4vKiBUb2dnbGUgdGhlbWUgYW55IHRpbWUgdGhlIHN0YXRlIG9mIHRoZSBjaGVja2JveCBjaGFuZ2VzICovXHJcbnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRvZ2dsZVRoZW1lKTtcclxuXHJcbmNvbnN0IGRhcmtwaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhcmtwaW5rJyk7XHJcbmNvbnN0IHllbGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5ZWxsb3cnKTtcclxuY29uc3QgZGFya2JsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFya2JsdWUnKTtcclxuY29uc3QgdHVya3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R1cmt1cycpO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoZXZlbnQpIHtcclxuICAgIGlmKGV2ZW50LnNyY0VsZW1lbnQuaWQgPT09ICdkYXJrcGluaycpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsICcjQzg1NjZCJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5pZCA9PT0gJ3llbGxvdycpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsICcjRjZEQTcwJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5pZCA9PT0gJ3R1cmt1cycpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsICcjNENEQkE2Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5pZCA9PT0gJ2RhcmtibHVlJykge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgJyM2NjYxQUInKTtcclxuICAgIH1cclxuICAgIHBhcnR5LmNvbmZldHRpKHRoaXMpO1xyXG59XHJcbmRhcmtwaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQ29sb3IpXHJcbnllbGxvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG5kYXJrYmx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNvbG9yKVxyXG50dXJrdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDb2xvcilcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImE3YzBjMzFkYjgyNGU4MDZkMDAyXCI7IH0iXSwibmFtZXMiOlsicGFydHkiLCJtZW51VG9nZ2xlIiwibmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJsaSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInNjcm9sbE5hdmJhciIsIm5hdkJhciIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImFkZCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJhbmltYXRlSGVybyIsIm1pZGRsZVRleHQiLCJhbmltYXRlSGVyb1NoYWtlIiwibGFzdFRleHRJbkhlcm8iLCJwYWdlIiwidG9nZ2xlSWNvbiIsInNldENoZWNrZWRTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImNoZWNrZWQiLCJ1bmRlZmluZWQiLCJpc1RydWUiLCJnZXRJdGVtIiwidG9nZ2xlVGhlbWUiLCJyZXBsYWNlIiwidG9nZ2xlSWNvblRoZW1lIiwic2V0SXRlbSIsImNvbmZldHRpIiwiY29udGFpbnMiLCJzcmMiLCJ2YWx1ZSIsImRhcmtwaW5rIiwieWVsbG93IiwiZGFya2JsdWUiLCJ0dXJrdXMiLCJjaGFuZ2VDb2xvciIsImV2ZW50Iiwic3JjRWxlbWVudCIsImlkIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=