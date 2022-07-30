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
/******/ 	__webpack_require__.h = function() { return "2f62a341facc42cacef3"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZGVmYmQzODc5YzUxZjVmMjM3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNlLFNBQVNDLFVBQVQsR0FBc0I7RUFDakMsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtFQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQUYsR0FBRyxDQUFDSSxTQUFKLENBQWNELE1BQWQsQ0FBcUIsUUFBckI7RUFDQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCRCxNQUFqQixDQUF3QixRQUF4QjtBQUNIO0FBRUQsSUFBTUUsVUFBVSxHQUFHQyxVQUFVLENBQUNDLFdBQUQsRUFBYyxDQUFkLENBQTdCOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7RUFDbkIsSUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBdEI7RUFDQUQsYUFBYSxDQUFDSixTQUFkLENBQXdCTSxHQUF4QixDQUE0QixtQkFBNUIsRUFBaUQscUJBQWpEO0FBQ0g7O0FBQ0QsSUFBTUMsU0FBUyxHQUFHTCxVQUFVLENBQUNNLGdCQUFELEVBQW1CLElBQW5CLENBQTVCOztBQUNBLFNBQVNBLGdCQUFULEdBQTRCO0VBQ3hCLElBQU1DLGNBQWMsR0FBR1osUUFBUSxDQUFDUSxhQUFULENBQXVCLG9CQUF2QixDQUF2QjtFQUNBSSxjQUFjLENBQUNULFNBQWYsQ0FBeUJNLEdBQXpCLENBQTZCLG1CQUE3QixFQUFrRCxpQkFBbEQ7QUFDSDs7Ozs7Ozs7VUNuQkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlGdW5jLy4vanMvYXBwLmpzIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcclxuXHJcbmNvbnNvbGUubG9nKCdkemlhxYJhJylcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5jb25zdCBydWJiZXJCYW5kID0gc2V0VGltZW91dChhbmltYXRlSGVybywgMClcclxuZnVuY3Rpb24gYW5pbWF0ZUhlcm8oKSB7XHJcbiAgICBjb25zdCBhbGxUZXh0SW5IZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm8nKTtcclxuICAgIGFsbFRleHRJbkhlcm8uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fcnViYmVyQmFuZCcpO1xyXG59XHJcbmNvbnN0IHNoYWtlQmFuZCA9IHNldFRpbWVvdXQoYW5pbWF0ZUhlcm9TaGFrZSwgMzAwMClcclxuZnVuY3Rpb24gYW5pbWF0ZUhlcm9TaGFrZSgpIHtcclxuICAgIGNvbnN0IGxhc3RUZXh0SW5IZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm8gcDpsYXN0LWNoaWxkJyk7XHJcbiAgICBsYXN0VGV4dEluSGVyby5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19zaGFrZVknKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIyZjYyYTM0MWZhY2M0MmNhY2VmM1wiOyB9Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtZW51VG9nZ2xlIiwibmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsInJ1YmJlckJhbmQiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZUhlcm8iLCJhbGxUZXh0SW5IZXJvIiwicXVlcnlTZWxlY3RvciIsImFkZCIsInNoYWtlQmFuZCIsImFuaW1hdGVIZXJvU2hha2UiLCJsYXN0VGV4dEluSGVybyJdLCJzb3VyY2VSb290IjoiIn0=