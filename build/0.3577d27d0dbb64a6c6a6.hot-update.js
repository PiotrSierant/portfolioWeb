"use strict";
self["webpackHotUpdateMyFunc"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ menuToggle; }
/* harmony export */ });
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

console.log('działa');
function menuToggle() {
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("toggle");
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
}
var rubberBand = setTimeout(animateHero, 2000);

function animateHero() {
  var allTextInHero = document.querySelectorAll('#hero p');
  allTextInHero.forEach(function (element) {
    element.classList.add('animate__animated', 'animate__rubberBand');
  });
}

var shakeBand = setInterval(animateHeroShake, 4000);

function animateHeroShake() {
  var allTextInHero = document.querySelector('#hero p:last-child');
  allTextInHero.classList.remove();
  allTextInHero.classList.add('animate__animated', 'animate__shakeY');
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "dd9013117bef408cf074"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNTc3ZDI3ZDBkYmI2NGE2YzZhNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNlLFNBQVNDLFVBQVQsR0FBc0I7RUFDakMsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtFQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQUYsR0FBRyxDQUFDSSxTQUFKLENBQWNELE1BQWQsQ0FBcUIsUUFBckI7RUFDQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCRCxNQUFqQixDQUF3QixRQUF4QjtBQUNIO0FBRUQsSUFBTUUsVUFBVSxHQUFHQyxVQUFVLENBQUNDLFdBQUQsRUFBYyxJQUFkLENBQTdCOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7RUFDbkIsSUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGdCQUFULENBQTBCLFNBQTFCLENBQXRCO0VBQ0FELGFBQWEsQ0FBQ0UsT0FBZCxDQUFzQixVQUFDQyxPQUFELEVBQWE7SUFDL0JBLE9BQU8sQ0FBQ1AsU0FBUixDQUFrQlEsR0FBbEIsQ0FBc0IsbUJBQXRCLEVBQTJDLHFCQUEzQztFQUNILENBRkQ7QUFHSDs7QUFDRCxJQUFNQyxTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FBN0I7O0FBQ0EsU0FBU0EsZ0JBQVQsR0FBNEI7RUFDeEIsSUFBTVAsYUFBYSxHQUFHUCxRQUFRLENBQUNlLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXRCO0VBQ0FSLGFBQWEsQ0FBQ0osU0FBZCxDQUF3QmEsTUFBeEI7RUFDQVQsYUFBYSxDQUFDSixTQUFkLENBQXdCUSxHQUF4QixDQUE0QixtQkFBNUIsRUFBaUQsaUJBQWpEO0FBQ0g7Ozs7Ozs7O1VDdEJELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL015RnVuYy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9NeUZ1bmMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XHJcblxyXG5jb25zb2xlLmxvZygnZHppYcWCYScpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuY29uc3QgcnViYmVyQmFuZCA9IHNldFRpbWVvdXQoYW5pbWF0ZUhlcm8sIDIwMDApXHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvKCkge1xyXG4gICAgY29uc3QgYWxsVGV4dEluSGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNoZXJvIHAnKTtcclxuICAgIGFsbFRleHRJbkhlcm8uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fcnViYmVyQmFuZCcpO1xyXG4gICAgfSlcclxufVxyXG5jb25zdCBzaGFrZUJhbmQgPSBzZXRJbnRlcnZhbChhbmltYXRlSGVyb1NoYWtlLCA0MDAwKVxyXG5mdW5jdGlvbiBhbmltYXRlSGVyb1NoYWtlKCkge1xyXG4gICAgY29uc3QgYWxsVGV4dEluSGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvIHA6bGFzdC1jaGlsZCcpO1xyXG4gICAgYWxsVGV4dEluSGVyby5jbGFzc0xpc3QucmVtb3ZlKCk7XHJcbiAgICBhbGxUZXh0SW5IZXJvLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX3NoYWtlWScpO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImRkOTAxMzExN2JlZjQwOGNmMDc0XCI7IH0iXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIm1lbnVUb2dnbGUiLCJuYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlIiwiY2xhc3NMaXN0IiwicnViYmVyQmFuZCIsInNldFRpbWVvdXQiLCJhbmltYXRlSGVybyIsImFsbFRleHRJbkhlcm8iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGQiLCJzaGFrZUJhbmQiLCJzZXRJbnRlcnZhbCIsImFuaW1hdGVIZXJvU2hha2UiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==