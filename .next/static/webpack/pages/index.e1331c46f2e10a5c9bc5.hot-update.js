/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/categoryBox.tsx":
/*!***********************************!*\
  !*** ./component/categoryBox.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CategoryBoxs\": function() { return /* binding */ CategoryBoxs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/component/categoryBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar CategoryBox = function CategoryBox(_ref) {\n  _s();\n\n  var detail = _ref.detail;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    boxShadow: \"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset\",\n    p: [5, 10],\n    borderRadius: \"lg\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n      w: \"100%\",\n      alignItems: \"unset\",\n      spacing: \"20px\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n        fontSize: \"xl\",\n        fontWeight: \"500\",\n        children: detail.category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Collapse, {\n        startingHeight: 80,\n        \"in\": show,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.List, {\n          children: detail.subCategory.map(function (el) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"search/\".concat(el.link),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n                cursor: \"pointer\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCheck,\n                  color: \"green.500\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                  children: el.text\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 21\n                }, _this)]\n              }, el.link, true, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n        onClick: function onClick() {\n          return setShow(!show);\n        },\n        children: show ? \"Less\" : \"Show more\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CategoryBox, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n\n_c = CategoryBox;\nfunction CategoryBoxs() {\n  _s2();\n\n  var _this2 = this;\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      categoryData = _useState2[0],\n      setCategoryData = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, \"categories\"), function (snapshot) {\n      return setCategoryData(snapshot.docs.map(function (doc) {\n        return doc.data();\n      }));\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {\n    columns: [1, 3],\n    gap: [6, 8],\n    children: categoryData && categoryData.map(function (el, ind) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoryBox, {\n        detail: el\n      }, ind, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 18\n      }, _this2);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(CategoryBoxs, \"AgpCcAGdwhA7aUwJaPipC4+8sDU=\");\n\n_c2 = CategoryBoxs;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CategoryBox\");\n$RefreshReg$(_c2, \"CategoryBoxs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NhdGVnb3J5Qm94LnRzeD9mZTQxIl0sIm5hbWVzIjpbIkNhdGVnb3J5Qm94IiwiZGV0YWlsIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImNhdGVnb3J5Iiwic3ViQ2F0ZWdvcnkiLCJtYXAiLCJlbCIsImxpbmsiLCJGYUNoZWNrIiwidGV4dCIsIkNhdGVnb3J5Qm94cyIsImNhdGVnb3J5RGF0YSIsInNldENhdGVnb3J5RGF0YSIsInVzZUVmZmVjdCIsIm9uU25hcHNob3QiLCJjb2xsZWN0aW9uIiwiZGIiLCJzbmFwc2hvdCIsImRvY3MiLCJkb2MiLCJkYXRhIiwiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjs7QUFBQSxrQkFDZkMsK0NBQVEsQ0FBQyxLQUFELENBRE87QUFBQSxNQUNoQ0MsSUFEZ0M7QUFBQSxNQUMxQkMsT0FEMEI7O0FBR3ZDLHNCQUNFLDhEQUFDLGtEQUFEO0FBQ0Usa0JBQWMsRUFBRSxRQURsQjtBQUVFLGNBQVUsRUFBRSxRQUZkO0FBR0UsYUFBUyxFQUNQLDJIQUpKO0FBTUUsS0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FOTDtBQU9FLGdCQUFZLEVBQUUsSUFQaEI7QUFBQSwyQkFTRSw4REFBQyxvREFBRDtBQUFRLE9BQUMsRUFBQyxNQUFWO0FBQWlCLGdCQUFVLEVBQUUsT0FBN0I7QUFBc0MsYUFBTyxFQUFFLE1BQS9DO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBUSxFQUFFLElBQWhCO0FBQXNCLGtCQUFVLEVBQUUsS0FBbEM7QUFBQSxrQkFDR0gsTUFBTSxDQUFDSTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLHNEQUFEO0FBQVUsc0JBQWMsRUFBRSxFQUExQjtBQUE4QixjQUFJRixJQUFsQztBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQUEsb0JBQ0dGLE1BQU0sQ0FBQ0ssV0FBUCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsRUFBRCxFQUFhO0FBQ25DLGdDQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksbUJBQVlBLEVBQUUsQ0FBQ0MsSUFBZixDQUFWO0FBQUEscUNBQ0UsOERBQUMsb0RBQUQ7QUFBc0Isc0JBQU0sRUFBRSxTQUE5QjtBQUFBLHdDQUNFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUUsRUFBRUMsbURBQVY7QUFBbUIsdUJBQUssRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBQSw0QkFBT0YsRUFBRSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQSxpQkFBYUgsRUFBRSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVFELFdBVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBa0JFLDhEQUFDLG9EQUFEO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1MLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxTQUFqQjtBQUFBLGtCQUNHQSxJQUFJLEdBQUcsTUFBSCxHQUFZO0FBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBckNEOztHQUFNSCxXOztLQUFBQSxXO0FBdUNDLFNBQVNZLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxtQkFDV1YsK0NBQVEsQ0FBTSxFQUFOLENBRG5CO0FBQUEsTUFDdEJXLFlBRHNCO0FBQUEsTUFDUkMsZUFEUTs7QUFHN0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxrRUFBVSxDQUFDQyw4REFBVSxDQUFDQyxtREFBRCxFQUFLLFlBQUwsQ0FBWCxFQUErQixVQUFDQyxRQUFEO0FBQUEsYUFDdkNMLGVBQWUsQ0FBQ0ssUUFBUSxDQUFDQyxJQUFULENBQWNiLEdBQWQsQ0FBa0IsVUFBQ2MsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsT0FBbEIsQ0FBRCxDQUR3QjtBQUFBLEtBQS9CLENBQVY7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBWSxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFyQjtBQUE2QixPQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFsQztBQUFBLGNBQ0dULFlBQVksSUFDWEEsWUFBWSxDQUFDTixHQUFiLENBQWlCLFVBQUNDLEVBQUQsRUFBVWUsR0FBVixFQUEwQjtBQUN6QywwQkFBTyw4REFBQyxXQUFEO0FBQXVCLGNBQU0sRUFBRWY7QUFBL0IsU0FBa0JlLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDRCxLQUZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0lBakJlWCxZOztNQUFBQSxZIiwiZmlsZSI6Ii4vY29tcG9uZW50L2NhdGVnb3J5Qm94LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZsZXgsXG4gIFNpbXBsZUdyaWQsXG4gIFRleHQsXG4gIENvbGxhcHNlLFxuICBCdXR0b24sXG4gIExpc3QsXG4gIEljb24sXG4gIFZTdGFjayxcbiAgSFN0YWNrLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgb25TbmFwc2hvdCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NsaWVudEFwcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBDYXRlZ29yeUJveCA9ICh7IGRldGFpbCB9OiBhbnkpID0+IHtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxuICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgIGJveFNoYWRvdz17XG4gICAgICAgIFwicmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxMnB4IDI4cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDJweCA0cHggMHB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDBweCAwcHggMHB4IDFweCBpbnNldFwiXG4gICAgICB9XG4gICAgICBwPXtbNSwgMTBdfVxuICAgICAgYm9yZGVyUmFkaXVzPXtcImxnXCJ9XG4gICAgPlxuICAgICAgPFZTdGFjayB3PVwiMTAwJVwiIGFsaWduSXRlbXM9e1widW5zZXRcIn0gc3BhY2luZz17XCIyMHB4XCJ9PlxuICAgICAgICA8VGV4dCBmb250U2l6ZT17XCJ4bFwifSBmb250V2VpZ2h0PXtcIjUwMFwifT5cbiAgICAgICAgICB7ZGV0YWlsLmNhdGVnb3J5fVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxDb2xsYXBzZSBzdGFydGluZ0hlaWdodD17ODB9IGluPXtzaG93fT5cbiAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgIHtkZXRhaWwuc3ViQ2F0ZWdvcnkubWFwKChlbDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YHNlYXJjaC8ke2VsLmxpbmt9YH0+XG4gICAgICAgICAgICAgICAgICA8SFN0YWNrIGtleT17ZWwubGlua30gY3Vyc29yPXtcInBvaW50ZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtGYUNoZWNrfSBjb2xvcj1cImdyZWVuLjUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PntlbC50ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX0+XG4gICAgICAgICAge3Nob3cgPyBcIkxlc3NcIiA6IFwiU2hvdyBtb3JlXCJ9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGVnb3J5Qm94cygpIHtcbiAgY29uc3QgW2NhdGVnb3J5RGF0YSwgc2V0Q2F0ZWdvcnlEYXRhXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25TbmFwc2hvdChjb2xsZWN0aW9uKGRiLCBcImNhdGVnb3JpZXNcIiksIChzbmFwc2hvdCkgPT5cbiAgICAgIHNldENhdGVnb3J5RGF0YShzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBkb2MuZGF0YSgpKSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXtbMSwgM119IGdhcD17WzYsIDhdfT5cbiAgICAgIHtjYXRlZ29yeURhdGEgJiZcbiAgICAgICAgY2F0ZWdvcnlEYXRhLm1hcCgoZWw6IGFueSwgaW5kOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gPENhdGVnb3J5Qm94IGtleT17aW5kfSBkZXRhaWw9e2VsfSAvPjtcbiAgICAgICAgfSl9XG4gICAgPC9TaW1wbGVHcmlkPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/categoryBox.tsx\n");

/***/ })

});