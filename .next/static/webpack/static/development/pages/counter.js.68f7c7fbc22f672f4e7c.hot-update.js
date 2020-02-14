webpackHotUpdate("static/development/pages/counter.js",{

/***/ "./pages/counter.js":
/*!**************************!*\
  !*** ./pages/counter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
var _jsxFileName = "/Users/morgantatums/codefellows/401/labs/lab32/pages/counter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Counter() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Current Count: ", count), __jsx("button", {
    onClick: function onClick() {
      return setCount(count + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Add"), __jsx("button", {
    onClick: function onClick() {
      return setCount(count + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Add")));
}

/***/ })

})
//# sourceMappingURL=counter.js.68f7c7fbc22f672f4e7c.hot-update.js.map