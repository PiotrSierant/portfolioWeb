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
  var allTextInHero = document.querySelectorAll('#hero p:last-child');
  allTextInHero.forEach(function (element) {
    console.log('Hello world');
    element.classList.remove();
    element.classList.add('animate__animated', 'animate__shakeY');
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3577d27d0dbb64a6c6a6"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jODdlMGFjZjgxOWJlYmM2M2Y3ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNlLFNBQVNDLFVBQVQsR0FBc0I7RUFDakMsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtFQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQUYsR0FBRyxDQUFDSSxTQUFKLENBQWNELE1BQWQsQ0FBcUIsUUFBckI7RUFDQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCRCxNQUFqQixDQUF3QixRQUF4QjtBQUNIO0FBRUQsSUFBTUUsVUFBVSxHQUFHQyxVQUFVLENBQUNDLFdBQUQsRUFBYyxJQUFkLENBQTdCOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7RUFDbkIsSUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGdCQUFULENBQTBCLFNBQTFCLENBQXRCO0VBQ0FELGFBQWEsQ0FBQ0UsT0FBZCxDQUFzQixVQUFDQyxPQUFELEVBQWE7SUFDL0JBLE9BQU8sQ0FBQ1AsU0FBUixDQUFrQlEsR0FBbEIsQ0FBc0IsbUJBQXRCLEVBQTJDLHFCQUEzQztFQUNILENBRkQ7QUFHSDs7QUFDRCxJQUFNQyxTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FBN0I7O0FBQ0EsU0FBU0EsZ0JBQVQsR0FBNEI7RUFDeEIsSUFBTVAsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGdCQUFULENBQTBCLG9CQUExQixDQUF0QjtFQUNBRCxhQUFhLENBQUNFLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRCxFQUFhO0lBQy9CZCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0lBQ0FhLE9BQU8sQ0FBQ1AsU0FBUixDQUFrQlksTUFBbEI7SUFDQUwsT0FBTyxDQUFDUCxTQUFSLENBQWtCUSxHQUFsQixDQUFzQixtQkFBdEIsRUFBMkMsaUJBQTNDO0VBQ0gsQ0FKRDtBQUtIOzs7Ozs7OztVQ3pCRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUZ1bmMvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiO1xyXG5cclxuY29uc29sZS5sb2coJ2R6aWHFgmEnKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmNvbnN0IHJ1YmJlckJhbmQgPSBzZXRUaW1lb3V0KGFuaW1hdGVIZXJvLCAyMDAwKVxyXG5mdW5jdGlvbiBhbmltYXRlSGVybygpIHtcclxuICAgIGNvbnN0IGFsbFRleHRJbkhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaGVybyBwJyk7XHJcbiAgICBhbGxUZXh0SW5IZXJvLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX3J1YmJlckJhbmQnKTtcclxuICAgIH0pXHJcbn1cclxuY29uc3Qgc2hha2VCYW5kID0gc2V0SW50ZXJ2YWwoYW5pbWF0ZUhlcm9TaGFrZSwgNDAwMClcclxuZnVuY3Rpb24gYW5pbWF0ZUhlcm9TaGFrZSgpIHtcclxuICAgIGNvbnN0IGFsbFRleHRJbkhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaGVybyBwOmxhc3QtY2hpbGQnKTtcclxuICAgIGFsbFRleHRJbkhlcm8uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyB3b3JsZCcpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fc2hha2VZJyk7XHJcbiAgICB9KVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjM1NzdkMjdkMGRiYjY0YTZjNmE2XCI7IH0iXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIm1lbnVUb2dnbGUiLCJuYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlIiwiY2xhc3NMaXN0IiwicnViYmVyQmFuZCIsInNldFRpbWVvdXQiLCJhbmltYXRlSGVybyIsImFsbFRleHRJbkhlcm8iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGQiLCJzaGFrZUJhbmQiLCJzZXRJbnRlcnZhbCIsImFuaW1hdGVIZXJvU2hha2UiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9