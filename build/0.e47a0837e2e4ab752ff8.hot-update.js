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
} // const rubberBand = setTimeout(animateHero, 0)
// function animateHero() {
//     const allTextInHero = document.querySelectorAll('#hero p');
//     allTextInHero.forEach((element) => {
//         element.classList.add('animate__animated', 'animate__rubberBand');
//     })
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
/******/ 	__webpack_require__.h = function() { return "688daf86f1e099decf76"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNDdhMDgzN2UyZTRhYjc1MmZmOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNlLFNBQVNDLFVBQVQsR0FBc0I7RUFDakMsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtFQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQUYsR0FBRyxDQUFDSSxTQUFKLENBQWNELE1BQWQsQ0FBcUIsUUFBckI7RUFDQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCRCxNQUFqQixDQUF3QixRQUF4QjtBQUNILEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUUsU0FBUyxHQUFHQyxVQUFVLENBQUNDLGdCQUFELEVBQW1CLElBQW5CLENBQTVCOztBQUNBLFNBQVNBLGdCQUFULEdBQTRCO0VBQ3hCLElBQU1DLGNBQWMsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLG9CQUF2QixDQUF2QjtFQUNBRCxjQUFjLENBQUNKLFNBQWYsQ0FBeUJNLEdBQXpCLENBQTZCLG1CQUE3QixFQUFrRCxpQkFBbEQ7QUFDSDs7Ozs7Ozs7VUNyQkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlGdW5jLy4vanMvYXBwLmpzIiwid2VicGFjazovL015RnVuYy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcclxuXHJcbmNvbnNvbGUubG9nKCdkemlhxYJhJylcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG4vLyBjb25zdCBydWJiZXJCYW5kID0gc2V0VGltZW91dChhbmltYXRlSGVybywgMClcclxuLy8gZnVuY3Rpb24gYW5pbWF0ZUhlcm8oKSB7XHJcbi8vICAgICBjb25zdCBhbGxUZXh0SW5IZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2hlcm8gcCcpO1xyXG4vLyAgICAgYWxsVGV4dEluSGVyby5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbi8vICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19ydWJiZXJCYW5kJyk7XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcbmNvbnN0IHNoYWtlQmFuZCA9IHNldFRpbWVvdXQoYW5pbWF0ZUhlcm9TaGFrZSwgMzAwMClcclxuZnVuY3Rpb24gYW5pbWF0ZUhlcm9TaGFrZSgpIHtcclxuICAgIGNvbnN0IGxhc3RUZXh0SW5IZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm8gcDpsYXN0LWNoaWxkJyk7XHJcbiAgICBsYXN0VGV4dEluSGVyby5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19zaGFrZVknKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI2ODhkYWY4NmYxZTA5OWRlY2Y3NlwiOyB9Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtZW51VG9nZ2xlIiwibmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsImNsYXNzTGlzdCIsInNoYWtlQmFuZCIsInNldFRpbWVvdXQiLCJhbmltYXRlSGVyb1NoYWtlIiwibGFzdFRleHRJbkhlcm8iLCJxdWVyeVNlbGVjdG9yIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==