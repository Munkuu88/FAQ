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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CategoryBoxs\": function() { return /* binding */ CategoryBoxs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/component/categoryBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar CategoryBox = function CategoryBox(_ref) {\n  _s();\n\n  var detail = _ref.detail;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    boxShadow: \"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset\",\n    p: [5, 10],\n    borderRadius: \"lg\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n      w: \"100%\",\n      alignItems: \"unset\",\n      spacing: \"20px\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n        fontSize: \"xl\",\n        fontWeight: \"500\",\n        children: detail.category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Collapse, {\n        startingHeight: 80,\n        \"in\": show,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.List, {\n          children: detail.subCategory.map(function (el) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCheck,\n                color: \"green.500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                children: el.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 19\n              }, _this)]\n            }, el, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n        onClick: function onClick() {\n          return setShow(!show);\n        },\n        children: show ? \"Less\" : \"Show more\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CategoryBox, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n\n_c = CategoryBox;\nfunction CategoryBoxs() {\n  _s2();\n\n  var _this2 = this;\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      categoryData = _useState2[0],\n      setCategoryData = _useState2[1]; // const getDatas = async () => {\n  //   const data = await getDocs(collection(db, \"categories\"));\n  //   data.forEach((el) => {\n  //     setCategoryData((categoryData: any) => [...categoryData, el.data()]);\n  //   });\n  // };\n\n\n  console.log(categoryData);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, \"categories\"), function (snapshot) {\n      return setCategoryData(snapshot.docs.map(function (doc) {\n        return doc.data();\n      }));\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n    columns: [1, 3],\n    gap: [6, 8],\n    children: categoryData && categoryData.map(function (el, ind) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoryBox, {\n        detail: el\n      }, el.category.slice(0, 1), false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 18\n      }, _this2);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(CategoryBoxs, \"AgpCcAGdwhA7aUwJaPipC4+8sDU=\");\n\n_c2 = CategoryBoxs;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CategoryBox\");\n$RefreshReg$(_c2, \"CategoryBoxs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NhdGVnb3J5Qm94LnRzeD9mZTQxIl0sIm5hbWVzIjpbIkNhdGVnb3J5Qm94IiwiZGV0YWlsIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImNhdGVnb3J5Iiwic3ViQ2F0ZWdvcnkiLCJtYXAiLCJlbCIsIkZhQ2hlY2siLCJ0ZXh0IiwiQ2F0ZWdvcnlCb3hzIiwiY2F0ZWdvcnlEYXRhIiwic2V0Q2F0ZWdvcnlEYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm9uU25hcHNob3QiLCJjb2xsZWN0aW9uIiwiZGIiLCJzbmFwc2hvdCIsImRvY3MiLCJkb2MiLCJkYXRhIiwiaW5kIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQU9BO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQjtBQUFBOztBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7O0FBQUEsa0JBQ2ZDLCtDQUFRLENBQUMsS0FBRCxDQURPO0FBQUEsTUFDaENDLElBRGdDO0FBQUEsTUFDMUJDLE9BRDBCOztBQUV2QyxzQkFDRSw4REFBQyxrREFBRDtBQUNFLGtCQUFjLEVBQUUsUUFEbEI7QUFFRSxjQUFVLEVBQUUsUUFGZDtBQUdFLGFBQVMsRUFDUCwySEFKSjtBQU1FLEtBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLENBTkw7QUFPRSxnQkFBWSxFQUFFLElBUGhCO0FBQUEsMkJBU0UsOERBQUMsb0RBQUQ7QUFBUSxPQUFDLEVBQUMsTUFBVjtBQUFpQixnQkFBVSxFQUFFLE9BQTdCO0FBQXNDLGFBQU8sRUFBRSxNQUEvQztBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQVEsRUFBRSxJQUFoQjtBQUFzQixrQkFBVSxFQUFFLEtBQWxDO0FBQUEsa0JBQ0dILE1BQU0sQ0FBQ0k7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSw4REFBQyxzREFBRDtBQUFVLHNCQUFjLEVBQUUsRUFBMUI7QUFBOEIsY0FBSUYsSUFBbEM7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFBLG9CQUNHRixNQUFNLENBQUNLLFdBQVAsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNDLEVBQUQsRUFBYTtBQUNuQyxnQ0FDRSw4REFBQyxvREFBRDtBQUFBLHNDQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUUsRUFBRUMsbURBQVY7QUFBbUIscUJBQUssRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBQSwwQkFBT0QsRUFBRSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSxlQUFhRixFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFNRCxXQVBBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWdCRSw4REFBQyxvREFBRDtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNSixPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFiO0FBQUEsU0FBakI7QUFBQSxrQkFDR0EsSUFBSSxHQUFHLE1BQUgsR0FBWTtBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQWxDRDs7R0FBTUgsVzs7S0FBQUEsVztBQW9DQyxTQUFTVyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQUEsbUJBQ1dULCtDQUFRLENBQU0sRUFBTixDQURuQjtBQUFBLE1BQ3RCVSxZQURzQjtBQUFBLE1BQ1JDLGVBRFEsa0JBRzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxZQUFaO0FBRUFJLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxrRUFBVSxDQUFDQyw4REFBVSxDQUFDQyxtREFBRCxFQUFLLFlBQUwsQ0FBWCxFQUErQixVQUFDQyxRQUFEO0FBQUEsYUFDdkNQLGVBQWUsQ0FBQ08sUUFBUSxDQUFDQyxJQUFULENBQWNkLEdBQWQsQ0FBa0IsVUFBQ2UsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsT0FBbEIsQ0FBRCxDQUR3QjtBQUFBLEtBQS9CLENBQVY7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBWSxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFyQjtBQUE2QixPQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFsQztBQUFBLGNBQ0dYLFlBQVksSUFDWEEsWUFBWSxDQUFDTCxHQUFiLENBQWlCLFVBQUNDLEVBQUQsRUFBVWdCLEdBQVYsRUFBa0I7QUFDakMsMEJBQU8sOERBQUMsV0FBRDtBQUEyQyxjQUFNLEVBQUVoQjtBQUFuRCxTQUFrQkEsRUFBRSxDQUFDSCxRQUFILENBQVlvQixLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDRCxLQUZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0lBMUJlZCxZOztNQUFBQSxZIiwiZmlsZSI6Ii4vY29tcG9uZW50L2NhdGVnb3J5Qm94LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZsZXgsXG4gIFNpbXBsZUdyaWQsXG4gIFRleHQsXG4gIENvbGxhcHNlLFxuICBCdXR0b24sXG4gIExpc3QsXG4gIEljb24sXG4gIFZTdGFjayxcbiAgSFN0YWNrLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHtcbiAgZG9jLFxuICBnZXREb2MsXG4gIGdldERvY3MsXG4gIGNvbGxlY3Rpb24sXG4gIG9uU25hcHNob3QsXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NsaWVudEFwcFwiO1xuXG5jb25zdCBDYXRlZ29yeUJveCA9ICh7IGRldGFpbCB9OiBhbnkpID0+IHtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICBib3hTaGFkb3c9e1xuICAgICAgICBcInJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMTJweCAyOHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAycHggNHB4IDBweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSAwcHggMHB4IDBweCAxcHggaW5zZXRcIlxuICAgICAgfVxuICAgICAgcD17WzUsIDEwXX1cbiAgICAgIGJvcmRlclJhZGl1cz17XCJsZ1wifVxuICAgID5cbiAgICAgIDxWU3RhY2sgdz1cIjEwMCVcIiBhbGlnbkl0ZW1zPXtcInVuc2V0XCJ9IHNwYWNpbmc9e1wiMjBweFwifT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9e1wieGxcIn0gZm9udFdlaWdodD17XCI1MDBcIn0+XG4gICAgICAgICAge2RldGFpbC5jYXRlZ29yeX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Q29sbGFwc2Ugc3RhcnRpbmdIZWlnaHQ9ezgwfSBpbj17c2hvd30+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICB7ZGV0YWlsLnN1YkNhdGVnb3J5Lm1hcCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxIU3RhY2sga2V5PXtlbH0+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBhcz17RmFDaGVja30gY29sb3I9XCJncmVlbi41MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+e2VsLnRleHR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfT5cbiAgICAgICAgICB7c2hvdyA/IFwiTGVzc1wiIDogXCJTaG93IG1vcmVcIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcnlCb3hzKCkge1xuICBjb25zdCBbY2F0ZWdvcnlEYXRhLCBzZXRDYXRlZ29yeURhdGFdID0gdXNlU3RhdGU8YW55PihbXSk7XG5cbiAgLy8gY29uc3QgZ2V0RGF0YXMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJjYXRlZ29yaWVzXCIpKTtcbiAgLy8gICBkYXRhLmZvckVhY2goKGVsKSA9PiB7XG4gIC8vICAgICBzZXRDYXRlZ29yeURhdGEoKGNhdGVnb3J5RGF0YTogYW55KSA9PiBbLi4uY2F0ZWdvcnlEYXRhLCBlbC5kYXRhKCldKTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICBjb25zb2xlLmxvZyhjYXRlZ29yeURhdGEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25TbmFwc2hvdChjb2xsZWN0aW9uKGRiLCBcImNhdGVnb3JpZXNcIiksIChzbmFwc2hvdCkgPT5cbiAgICAgIHNldENhdGVnb3J5RGF0YShzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBkb2MuZGF0YSgpKSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXtbMSwgM119IGdhcD17WzYsIDhdfT5cbiAgICAgIHtjYXRlZ29yeURhdGEgJiZcbiAgICAgICAgY2F0ZWdvcnlEYXRhLm1hcCgoZWw6IGFueSwgaW5kKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxDYXRlZ29yeUJveCBrZXk9e2VsLmNhdGVnb3J5LnNsaWNlKDAsIDEpfSBkZXRhaWw9e2VsfSAvPjtcbiAgICAgICAgfSl9XG4gICAgPC9TaW1wbGVHcmlkPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/categoryBox.tsx\n");

/***/ })

});