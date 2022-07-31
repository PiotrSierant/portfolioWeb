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
  middleText.classList.add('animate__animated', 'animate__rubberBand');
}

var shakeBand = setTimeout(animateHeroShake, 3000);

function animateHeroShake() {
  var lastTextInHero = document.querySelector('#hero p:last-child');
  lastTextInHero.classList.add('animate__animated', 'animate__flipInY');
} // background-color: rgba(0,0,0,0.3);
// border-bottom: 1px solid rgba(255,255,255, .3);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c2cf653d9b5057478aeb"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZmQ3OTU0NGU0ZmY5MzA0MWY4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0VBQ2pDLElBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVo7RUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0VBQ0FGLEdBQUcsQ0FBQ0ksU0FBSixDQUFjRCxNQUFkLENBQXFCLFFBQXJCO0VBQ0FBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkQsTUFBakIsQ0FBd0IsUUFBeEI7QUFDSDtBQUVELElBQU1FLFVBQVUsR0FBR0MsVUFBVSxDQUFDQyxXQUFELEVBQWMsQ0FBZCxDQUE3Qjs7QUFDQSxTQUFTQSxXQUFULEdBQXVCO0VBQ25CLElBQU1DLFVBQVUsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLE9BQXZCLENBQW5CO0VBQ0FELFVBQVUsQ0FBQ0osU0FBWCxDQUFxQk0sR0FBckIsQ0FBeUIsbUJBQXpCLEVBQThDLHFCQUE5QztBQUNIOztBQUNELElBQU1DLFNBQVMsR0FBR0wsVUFBVSxDQUFDTSxnQkFBRCxFQUFtQixJQUFuQixDQUE1Qjs7QUFDQSxTQUFTQSxnQkFBVCxHQUE0QjtFQUN4QixJQUFNQyxjQUFjLEdBQUdaLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixvQkFBdkIsQ0FBdkI7RUFDQUksY0FBYyxDQUFDVCxTQUFmLENBQXlCTSxHQUF6QixDQUE2QixtQkFBN0IsRUFBa0Qsa0JBQWxEO0FBQ0gsRUFDRDtBQUNBOzs7Ozs7OztVQ3BCQSxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUZ1bmMvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vTXlGdW5jL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5jb25zdCBydWJiZXJCYW5kID0gc2V0VGltZW91dChhbmltYXRlSGVybywgMClcclxuZnVuY3Rpb24gYW5pbWF0ZUhlcm8oKSB7XHJcbiAgICBjb25zdCBtaWRkbGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm8nKTtcclxuICAgIG1pZGRsZVRleHQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fcnViYmVyQmFuZCcpXHJcbn1cclxuY29uc3Qgc2hha2VCYW5kID0gc2V0VGltZW91dChhbmltYXRlSGVyb1NoYWtlLCAzMDAwKVxyXG5mdW5jdGlvbiBhbmltYXRlSGVyb1NoYWtlKCkge1xyXG4gICAgY29uc3QgbGFzdFRleHRJbkhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybyBwOmxhc3QtY2hpbGQnKTtcclxuICAgIGxhc3RUZXh0SW5IZXJvLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2ZsaXBJblknKTtcclxufVxyXG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XHJcbi8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LCAuMyk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImMyY2Y2NTNkOWI1MDU3NDc4YWViXCI7IH0iXSwibmFtZXMiOlsibWVudVRvZ2dsZSIsIm5hdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2dnbGUiLCJjbGFzc0xpc3QiLCJydWJiZXJCYW5kIiwic2V0VGltZW91dCIsImFuaW1hdGVIZXJvIiwibWlkZGxlVGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGQiLCJzaGFrZUJhbmQiLCJhbmltYXRlSGVyb1NoYWtlIiwibGFzdFRleHRJbkhlcm8iXSwic291cmNlUm9vdCI6IiJ9