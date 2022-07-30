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
var rubberBand = setTimeout(animateHero, 0);

function animateHero() {
  var allTextInHero = document.querySelector('#hero');
  allTextInHero.forEach(function (element) {
    element.classList.add('animate__animated', 'animate__rubberBand');
  });
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
/******/ 	__webpack_require__.h = function() { return "bdefbd3879c51f5f2378"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mM2Y0ZDdhODVlOTllMTMzYTJlZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNlLFNBQVNDLFVBQVQsR0FBc0I7RUFDakMsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtFQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQUYsR0FBRyxDQUFDSSxTQUFKLENBQWNELE1BQWQsQ0FBcUIsUUFBckI7RUFDQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCRCxNQUFqQixDQUF3QixRQUF4QjtBQUNIO0FBRUQsSUFBTUUsVUFBVSxHQUFHQyxVQUFVLENBQUNDLFdBQUQsRUFBYyxDQUFkLENBQTdCOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7RUFDbkIsSUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBdEI7RUFDQUQsYUFBYSxDQUFDRSxPQUFkLENBQXNCLFVBQUNDLE9BQUQsRUFBYTtJQUMvQkEsT0FBTyxDQUFDUCxTQUFSLENBQWtCUSxHQUFsQixDQUFzQixtQkFBdEIsRUFBMkMscUJBQTNDO0VBQ0gsQ0FGRDtBQUdIOztBQUNELElBQU1DLFNBQVMsR0FBR1AsVUFBVSxDQUFDUSxnQkFBRCxFQUFtQixJQUFuQixDQUE1Qjs7QUFDQSxTQUFTQSxnQkFBVCxHQUE0QjtFQUN4QixJQUFNQyxjQUFjLEdBQUdkLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixvQkFBdkIsQ0FBdkI7RUFDQU0sY0FBYyxDQUFDWCxTQUFmLENBQXlCUSxHQUF6QixDQUE2QixtQkFBN0IsRUFBa0QsaUJBQWxEO0FBQ0g7Ozs7Ozs7O1VDckJELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL015RnVuYy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9NeUZ1bmMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XHJcblxyXG5jb25zb2xlLmxvZygnZHppYcWCYScpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuY29uc3QgcnViYmVyQmFuZCA9IHNldFRpbWVvdXQoYW5pbWF0ZUhlcm8sIDApXHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvKCkge1xyXG4gICAgY29uc3QgYWxsVGV4dEluSGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvJyk7XHJcbiAgICBhbGxUZXh0SW5IZXJvLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX3J1YmJlckJhbmQnKTtcclxuICAgIH0pXHJcbn1cclxuY29uc3Qgc2hha2VCYW5kID0gc2V0VGltZW91dChhbmltYXRlSGVyb1NoYWtlLCAzMDAwKVxyXG5mdW5jdGlvbiBhbmltYXRlSGVyb1NoYWtlKCkge1xyXG4gICAgY29uc3QgbGFzdFRleHRJbkhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybyBwOmxhc3QtY2hpbGQnKTtcclxuICAgIGxhc3RUZXh0SW5IZXJvLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX3NoYWtlWScpO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImJkZWZiZDM4NzljNTFmNWYyMzc4XCI7IH0iXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIm1lbnVUb2dnbGUiLCJuYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlIiwiY2xhc3NMaXN0IiwicnViYmVyQmFuZCIsInNldFRpbWVvdXQiLCJhbmltYXRlSGVybyIsImFsbFRleHRJbkhlcm8iLCJxdWVyeVNlbGVjdG9yIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGQiLCJzaGFrZUJhbmQiLCJhbmltYXRlSGVyb1NoYWtlIiwibGFzdFRleHRJbkhlcm8iXSwic291cmNlUm9vdCI6IiJ9