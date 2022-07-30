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
  var middleText = document.querySelector('#middleText');
  middleText.classList.add();
  var lastTextInHero = document.querySelector('#hero p:last-child');
  lastTextInHero.classList.add('animate__animated', 'animate__shakeY');
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9c74984f89ef8d93874b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MDBjZjUwZDE1NGQ3MjE5YTNhNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0VBQ2pDLElBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVo7RUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0VBQ0FGLEdBQUcsQ0FBQ0ksU0FBSixDQUFjRCxNQUFkLENBQXFCLFFBQXJCO0VBQ0FBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkQsTUFBakIsQ0FBd0IsUUFBeEI7QUFDSCxFQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUUsU0FBUyxHQUFHQyxVQUFVLENBQUNDLGdCQUFELEVBQW1CLElBQW5CLENBQTVCOztBQUNBLFNBQVNBLGdCQUFULEdBQTRCO0VBQ3hCLElBQU1DLFVBQVUsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLGFBQXZCLENBQW5CO0VBQ0FELFVBQVUsQ0FBQ0osU0FBWCxDQUFxQk0sR0FBckI7RUFDQSxJQUFNQyxjQUFjLEdBQUdWLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixvQkFBdkIsQ0FBdkI7RUFDQUUsY0FBYyxDQUFDUCxTQUFmLENBQXlCTSxHQUF6QixDQUE2QixtQkFBN0IsRUFBa0QsaUJBQWxEO0FBQ0g7Ozs7Ozs7O1VDcEJELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL015RnVuYy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9NeUZ1bmMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbi8vIGNvbnN0IHJ1YmJlckJhbmQgPSBzZXRUaW1lb3V0KGFuaW1hdGVIZXJvLCAwKVxyXG4vLyBmdW5jdGlvbiBhbmltYXRlSGVybygpIHtcclxuLy8gICAgIGNvbnN0IGFsbFRleHRJbkhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybyBwOmZpcnN0LWNoaWxkJyk7XHJcbi8vICAgICBhbGxUZXh0SW5IZXJvLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX3J1YmJlckJhbmQnKTtcclxuLy8gfVxyXG5jb25zdCBzaGFrZUJhbmQgPSBzZXRUaW1lb3V0KGFuaW1hdGVIZXJvU2hha2UsIDMwMDApXHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvU2hha2UoKSB7XHJcbiAgICBjb25zdCBtaWRkbGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pZGRsZVRleHQnKTtcclxuICAgIG1pZGRsZVRleHQuY2xhc3NMaXN0LmFkZCgpXHJcbiAgICBjb25zdCBsYXN0VGV4dEluSGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvIHA6bGFzdC1jaGlsZCcpO1xyXG4gICAgbGFzdFRleHRJbkhlcm8uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fc2hha2VZJyk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOWM3NDk4NGY4OWVmOGQ5Mzg3NGJcIjsgfSJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwibmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsInNoYWtlQmFuZCIsInNldFRpbWVvdXQiLCJhbmltYXRlSGVyb1NoYWtlIiwibWlkZGxlVGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGQiLCJsYXN0VGV4dEluSGVybyJdLCJzb3VyY2VSb290IjoiIn0=