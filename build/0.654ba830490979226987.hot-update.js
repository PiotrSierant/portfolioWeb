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
}
var rubberBand = setTimeout(animateHero, 0);

function animateHero() {
  var middleText = document.querySelector('#hero');
  middleText.classList.add('animate__animated', 'animate__backInDown');
}

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
/******/ 	__webpack_require__.h = function() { return "822ae392d529ac00e69d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NTRiYTgzMDQ5MDk3OTIyNjk4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0VBQ2pDLElBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVo7RUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0VBQ0FGLEdBQUcsQ0FBQ0ksU0FBSixDQUFjRCxNQUFkLENBQXFCLFFBQXJCO0VBQ0FBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkQsTUFBakIsQ0FBd0IsUUFBeEI7QUFDSDtBQUVELElBQU1FLFVBQVUsR0FBR0MsVUFBVSxDQUFDQyxXQUFELEVBQWMsQ0FBZCxDQUE3Qjs7QUFDQSxTQUFTQSxXQUFULEdBQXVCO0VBQ25CLElBQU1DLFVBQVUsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLE9BQXZCLENBQW5CO0VBQ0FELFVBQVUsQ0FBQ0osU0FBWCxDQUFxQk0sR0FBckIsQ0FBeUIsbUJBQXpCLEVBQThDLHFCQUE5QztBQUNIOztBQUNELElBQU1DLFNBQVMsR0FBR0wsVUFBVSxDQUFDTSxnQkFBRCxFQUFtQixJQUFuQixDQUE1Qjs7QUFDQSxTQUFTQSxnQkFBVCxHQUE0QjtFQUN4QixJQUFNQyxjQUFjLEdBQUdaLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixvQkFBdkIsQ0FBdkI7RUFDQUksY0FBYyxDQUFDVCxTQUFmLENBQXlCTSxHQUF6QixDQUE2QixtQkFBN0IsRUFBa0QsaUJBQWxEO0FBQ0g7Ozs7Ozs7O1VDbEJELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL015RnVuYy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9NeUZ1bmMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmNvbnN0IHJ1YmJlckJhbmQgPSBzZXRUaW1lb3V0KGFuaW1hdGVIZXJvLCAwKVxyXG5mdW5jdGlvbiBhbmltYXRlSGVybygpIHtcclxuICAgIGNvbnN0IG1pZGRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybycpO1xyXG4gICAgbWlkZGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19iYWNrSW5Eb3duJylcclxufVxyXG5jb25zdCBzaGFrZUJhbmQgPSBzZXRUaW1lb3V0KGFuaW1hdGVIZXJvU2hha2UsIDMwMDApXHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvU2hha2UoKSB7XHJcbiAgICBjb25zdCBsYXN0VGV4dEluSGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvIHA6bGFzdC1jaGlsZCcpO1xyXG4gICAgbGFzdFRleHRJbkhlcm8uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fc2hha2VZJyk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiODIyYWUzOTJkNTI5YWMwMGU2OWRcIjsgfSJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwibmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsInJ1YmJlckJhbmQiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZUhlcm8iLCJtaWRkbGVUZXh0IiwicXVlcnlTZWxlY3RvciIsImFkZCIsInNoYWtlQmFuZCIsImFuaW1hdGVIZXJvU2hha2UiLCJsYXN0VGV4dEluSGVybyJdLCJzb3VyY2VSb290IjoiIn0=