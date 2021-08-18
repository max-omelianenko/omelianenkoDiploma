"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateOmelianenkoDiploma"]("main",{

/***/ "./src/modules/callBackBtnServices.js":
/*!********************************************!*\
  !*** ./src/modules/callBackBtnServices.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar callBackBtnServices = function callBackBtnServices() {\n  var callbackBtn = document.querySelector('.button-services'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay');\n\n  var fadeIn = function fadeIn(el, speed) {\n    var step = 1 / speed;\n    var interval = setInterval(function () {\n      if (el.style.opacity >= 1) {\n        clearInterval(interval);\n      }\n\n      el.style.opacity = +el.style.opacity + step;\n    }, speed / 1000);\n  };\n\n  callbackBtn.addEventListener('click', function () {\n    fadeIn(modalCallback, 50);\n    modalCallback.style.display = 'block';\n    modalOverlay.style.display = 'block';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callBackBtnServices);\n\n//# sourceURL=webpack://OmelianenkoDiploma/./src/modules/callBackBtnServices.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("503e17bb5f6393819181")
/******/ })();
/******/ 
/******/ }
);