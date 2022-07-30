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
  var allTextInHero = document.querySelectorAll('#hero');
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
/******/ 	__webpack_require__.h = function() { return "f3f4d7a85e99e133a2ef"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ODhkYWY4NmYxZTA5OWRlY2Y3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNlLFNBQVNDLFVBQVQsR0FBc0I7RUFDakMsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtFQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQUYsR0FBRyxDQUFDSSxTQUFKLENBQWNELE1BQWQsQ0FBcUIsUUFBckI7RUFDQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCRCxNQUFqQixDQUF3QixRQUF4QjtBQUNIO0FBRUQsSUFBTUUsVUFBVSxHQUFHQyxVQUFVLENBQUNDLFdBQUQsRUFBYyxDQUFkLENBQTdCOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7RUFDbkIsSUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGdCQUFULENBQTBCLE9BQTFCLENBQXRCO0VBQ0FELGFBQWEsQ0FBQ0UsT0FBZCxDQUFzQixVQUFDQyxPQUFELEVBQWE7SUFDL0JBLE9BQU8sQ0FBQ1AsU0FBUixDQUFrQlEsR0FBbEIsQ0FBc0IsbUJBQXRCLEVBQTJDLHFCQUEzQztFQUNILENBRkQ7QUFHSDs7QUFDRCxJQUFNQyxTQUFTLEdBQUdQLFVBQVUsQ0FBQ1EsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FBNUI7O0FBQ0EsU0FBU0EsZ0JBQVQsR0FBNEI7RUFDeEIsSUFBTUMsY0FBYyxHQUFHZCxRQUFRLENBQUNlLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXZCO0VBQ0FELGNBQWMsQ0FBQ1gsU0FBZixDQUF5QlEsR0FBekIsQ0FBNkIsbUJBQTdCLEVBQWtELGlCQUFsRDtBQUNIOzs7Ozs7OztVQ3JCRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUZ1bmMvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiO1xyXG5cclxuY29uc29sZS5sb2coJ2R6aWHFgmEnKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmNvbnN0IHJ1YmJlckJhbmQgPSBzZXRUaW1lb3V0KGFuaW1hdGVIZXJvLCAwKVxyXG5mdW5jdGlvbiBhbmltYXRlSGVybygpIHtcclxuICAgIGNvbnN0IGFsbFRleHRJbkhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaGVybycpO1xyXG4gICAgYWxsVGV4dEluSGVyby5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19ydWJiZXJCYW5kJyk7XHJcbiAgICB9KVxyXG59XHJcbmNvbnN0IHNoYWtlQmFuZCA9IHNldFRpbWVvdXQoYW5pbWF0ZUhlcm9TaGFrZSwgMzAwMClcclxuZnVuY3Rpb24gYW5pbWF0ZUhlcm9TaGFrZSgpIHtcclxuICAgIGNvbnN0IGxhc3RUZXh0SW5IZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm8gcDpsYXN0LWNoaWxkJyk7XHJcbiAgICBsYXN0VGV4dEluSGVyby5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19zaGFrZVknKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJmM2Y0ZDdhODVlOTllMTMzYTJlZlwiOyB9Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtZW51VG9nZ2xlIiwibmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsInJ1YmJlckJhbmQiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZUhlcm8iLCJhbGxUZXh0SW5IZXJvIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkIiwic2hha2VCYW5kIiwiYW5pbWF0ZUhlcm9TaGFrZSIsImxhc3RUZXh0SW5IZXJvIiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=