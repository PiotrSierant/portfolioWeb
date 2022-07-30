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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c564ded591c57408103f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMzQ5N2FkNzZiOWY1MTE5NTNiNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNlLFNBQVNDLFVBQVQsR0FBc0I7RUFDakMsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtFQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQUYsR0FBRyxDQUFDSSxTQUFKLENBQWNELE1BQWQsQ0FBcUIsUUFBckI7RUFDQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCRCxNQUFqQixDQUF3QixRQUF4QjtBQUNIO0FBRUQsSUFBTUUsVUFBVSxHQUFHQyxVQUFVLENBQUNDLFdBQUQsRUFBYyxJQUFkLENBQTdCOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7RUFDbkIsSUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGdCQUFULENBQTBCLFNBQTFCLENBQXRCO0VBQ0FELGFBQWEsQ0FBQ0UsT0FBZCxDQUFzQixVQUFDQyxPQUFELEVBQWE7SUFDL0JBLE9BQU8sQ0FBQ1AsU0FBUixDQUFrQlEsR0FBbEIsQ0FBc0IsbUJBQXRCLEVBQTJDLHFCQUEzQztFQUNILENBRkQ7QUFHSDs7Ozs7Ozs7VUNoQkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlGdW5jLy4vanMvYXBwLmpzIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcclxuXHJcbmNvbnNvbGUubG9nKCdkemlhxYJhJylcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5jb25zdCBydWJiZXJCYW5kID0gc2V0VGltZW91dChhbmltYXRlSGVybywgMjAwMClcclxuZnVuY3Rpb24gYW5pbWF0ZUhlcm8oKSB7XHJcbiAgICBjb25zdCBhbGxUZXh0SW5IZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2hlcm8gcCcpO1xyXG4gICAgYWxsVGV4dEluSGVyby5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19ydWJiZXJCYW5kJyk7XHJcbiAgICB9KVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImM1NjRkZWQ1OTFjNTc0MDgxMDNmXCI7IH0iXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIm1lbnVUb2dnbGUiLCJuYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlIiwiY2xhc3NMaXN0IiwicnViYmVyQmFuZCIsInNldFRpbWVvdXQiLCJhbmltYXRlSGVybyIsImFsbFRleHRJbkhlcm8iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9