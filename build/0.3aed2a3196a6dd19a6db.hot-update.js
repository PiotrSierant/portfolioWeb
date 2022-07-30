"use strict";
self["webpackHotUpdateMyFunc"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ menuToggle; }
/* harmony export */ });
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

function menuToggle() {
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("toggle");
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
} // const rubberBand = setTimeout(animateHero, 0)
// function animateHero() {
//     const allTextInHero = document.querySelector('#hero p:first-child');
//     allTextInHero.classList.add('animate__animated', 'animate__rubberBand');
// }

var shakeBand = setTimeout(animateHeroShake, 3000);

function animateHeroShake() {
  var lastTextInHero = document.querySelector('#hero p:last-child');
  lastTextInHero.classList.add('animate__animated', 'animate__shakeY');
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ccc72c08776c25491cd6"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYWVkMmEzMTk2YTZkZDE5YTZkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0VBQ2pDLElBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVo7RUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0VBQ0FGLEdBQUcsQ0FBQ0ksU0FBSixDQUFjRCxNQUFkLENBQXFCLFFBQXJCO0VBQ0FBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkQsTUFBakIsQ0FBd0IsUUFBeEI7QUFDSCxFQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUUsU0FBUyxHQUFHQyxVQUFVLENBQUNDLGdCQUFELEVBQW1CLElBQW5CLENBQTVCOztBQUNBLFNBQVNBLGdCQUFULEdBQTRCO0VBQ3hCLElBQU1DLGNBQWMsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLG9CQUF2QixDQUF2QjtFQUNBRCxjQUFjLENBQUNKLFNBQWYsQ0FBeUJNLEdBQXpCLENBQTZCLG1CQUE3QixFQUFrRCxpQkFBbEQ7QUFDSDs7Ozs7Ozs7VUNsQkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlGdW5jLy4vanMvYXBwLmpzIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuLy8gY29uc3QgcnViYmVyQmFuZCA9IHNldFRpbWVvdXQoYW5pbWF0ZUhlcm8sIDApXHJcbi8vIGZ1bmN0aW9uIGFuaW1hdGVIZXJvKCkge1xyXG4vLyAgICAgY29uc3QgYWxsVGV4dEluSGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvIHA6Zmlyc3QtY2hpbGQnKTtcclxuLy8gICAgIGFsbFRleHRJbkhlcm8uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fcnViYmVyQmFuZCcpO1xyXG4vLyB9XHJcbmNvbnN0IHNoYWtlQmFuZCA9IHNldFRpbWVvdXQoYW5pbWF0ZUhlcm9TaGFrZSwgMzAwMClcclxuZnVuY3Rpb24gYW5pbWF0ZUhlcm9TaGFrZSgpIHtcclxuICAgIGNvbnN0IGxhc3RUZXh0SW5IZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm8gcDpsYXN0LWNoaWxkJyk7XHJcbiAgICBsYXN0VGV4dEluSGVyby5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19zaGFrZVknKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJjY2M3MmMwODc3NmMyNTQ5MWNkNlwiOyB9Il0sIm5hbWVzIjpbIm1lbnVUb2dnbGUiLCJuYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlIiwiY2xhc3NMaXN0Iiwic2hha2VCYW5kIiwic2V0VGltZW91dCIsImFuaW1hdGVIZXJvU2hha2UiLCJsYXN0VGV4dEluSGVybyIsInF1ZXJ5U2VsZWN0b3IiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9