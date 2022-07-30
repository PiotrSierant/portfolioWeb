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
  var allTextInHero = document.querySelectorAll('#hero:first-of-type');
  allTextInHero.classList.add('animate__animated', 'animate__rubberBand');
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
/******/ 	__webpack_require__.h = function() { return "404b89f3984326fd4611"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNjgwM2NmMjkwYjU1YzBhYjRkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNlLFNBQVNDLFVBQVQsR0FBc0I7RUFDakMsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtFQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQUYsR0FBRyxDQUFDSSxTQUFKLENBQWNELE1BQWQsQ0FBcUIsUUFBckI7RUFDQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCRCxNQUFqQixDQUF3QixRQUF4QjtBQUNIO0FBRUQsSUFBTUUsVUFBVSxHQUFHQyxVQUFVLENBQUNDLFdBQUQsRUFBYyxDQUFkLENBQTdCOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7RUFDbkIsSUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGdCQUFULENBQTBCLHFCQUExQixDQUF0QjtFQUNBRCxhQUFhLENBQUNKLFNBQWQsQ0FBd0JNLEdBQXhCLENBQTRCLG1CQUE1QixFQUFpRCxxQkFBakQ7QUFDSDs7QUFDRCxJQUFNQyxTQUFTLEdBQUdMLFVBQVUsQ0FBQ00sZ0JBQUQsRUFBbUIsSUFBbkIsQ0FBNUI7O0FBQ0EsU0FBU0EsZ0JBQVQsR0FBNEI7RUFDeEIsSUFBTUMsY0FBYyxHQUFHWixRQUFRLENBQUNhLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXZCO0VBQ0FELGNBQWMsQ0FBQ1QsU0FBZixDQUF5Qk0sR0FBekIsQ0FBNkIsbUJBQTdCLEVBQWtELGlCQUFsRDtBQUNIOzs7Ozs7OztVQ25CRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUZ1bmMvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiO1xyXG5cclxuY29uc29sZS5sb2coJ2R6aWHFgmEnKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmNvbnN0IHJ1YmJlckJhbmQgPSBzZXRUaW1lb3V0KGFuaW1hdGVIZXJvLCAwKVxyXG5mdW5jdGlvbiBhbmltYXRlSGVybygpIHtcclxuICAgIGNvbnN0IGFsbFRleHRJbkhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaGVybzpmaXJzdC1vZi10eXBlJyk7XHJcbiAgICBhbGxUZXh0SW5IZXJvLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX3J1YmJlckJhbmQnKTtcclxufVxyXG5jb25zdCBzaGFrZUJhbmQgPSBzZXRUaW1lb3V0KGFuaW1hdGVIZXJvU2hha2UsIDMwMDApXHJcbmZ1bmN0aW9uIGFuaW1hdGVIZXJvU2hha2UoKSB7XHJcbiAgICBjb25zdCBsYXN0VGV4dEluSGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvIHA6bGFzdC1jaGlsZCcpO1xyXG4gICAgbGFzdFRleHRJbkhlcm8uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fc2hha2VZJyk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNDA0Yjg5ZjM5ODQzMjZmZDQ2MTFcIjsgfSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibWVudVRvZ2dsZSIsIm5hdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2dnbGUiLCJjbGFzc0xpc3QiLCJydWJiZXJCYW5kIiwic2V0VGltZW91dCIsImFuaW1hdGVIZXJvIiwiYWxsVGV4dEluSGVybyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGQiLCJzaGFrZUJhbmQiLCJhbmltYXRlSGVyb1NoYWtlIiwibGFzdFRleHRJbkhlcm8iLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==