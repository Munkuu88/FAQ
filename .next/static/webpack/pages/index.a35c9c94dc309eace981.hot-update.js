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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CategoryBoxs\": function() { return /* binding */ CategoryBoxs; }\n/* harmony export */ });\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/component/categoryBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar CategoryBox = function CategoryBox(_ref) {\n  _s();\n\n  var detail = _ref.detail;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    boxShadow: \"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset\",\n    p: [5, 10],\n    borderRadius: \"lg\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n      w: \"100%\",\n      alignItems: \"unset\",\n      spacing: \"20px\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n        fontSize: \"xl\",\n        fontWeight: \"500\",\n        children: detail.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Collapse, {\n        startingHeight: 35,\n        \"in\": show,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.List, {\n          children: detail.subCategory.map(function (el) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCheck,\n                color: \"green.500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                children: el.subTitle\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 19\n              }, _this)]\n            }, el, true, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n        onClick: function onClick() {\n          return setShow(!show);\n        },\n        children: show ? \"Less\" : \"Show more\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CategoryBox, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n\n_c = CategoryBox;\nfunction CategoryBoxs() {\n  _s2();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      categoryData = _useState2[0],\n      setCategoryData = _useState2[1];\n\n  var getDatas = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var data;\n      return _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__.db, \"categories\"));\n\n            case 2:\n              data = _context.sent;\n              // data.forEach((el) => {\n              setCategoryData(data.data()); // });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getDatas() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  console.log(\"All data\", categoryData);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    getDatas();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.SimpleGrid, {\n    columns: [1, 3],\n    gap: [6, 8],\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n      onClick: function onClick() {\n        console.log(categoryData);\n      },\n      children: \"console\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(CategoryBoxs, \"AgpCcAGdwhA7aUwJaPipC4+8sDU=\");\n\n_c2 = CategoryBoxs;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CategoryBox\");\n$RefreshReg$(_c2, \"CategoryBoxs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NhdGVnb3J5Qm94LnRzeD9mZTQxIl0sIm5hbWVzIjpbIkNhdGVnb3J5Qm94IiwiZGV0YWlsIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInRpdGxlIiwic3ViQ2F0ZWdvcnkiLCJtYXAiLCJlbCIsIkZhQ2hlY2siLCJzdWJUaXRsZSIsIkNhdGVnb3J5Qm94cyIsImNhdGVnb3J5RGF0YSIsInNldENhdGVnb3J5RGF0YSIsImdldERhdGFzIiwiZ2V0RG9jcyIsImNvbGxlY3Rpb24iLCJkYiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQjtBQUFBOztBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7O0FBQUEsa0JBQ2ZDLCtDQUFRLENBQUMsS0FBRCxDQURPO0FBQUEsTUFDaENDLElBRGdDO0FBQUEsTUFDMUJDLE9BRDBCOztBQUV2QyxzQkFDRSw4REFBQyxrREFBRDtBQUNFLGtCQUFjLEVBQUUsUUFEbEI7QUFFRSxjQUFVLEVBQUUsUUFGZDtBQUdFLGFBQVMsRUFDUCwySEFKSjtBQU1FLEtBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLENBTkw7QUFPRSxnQkFBWSxFQUFFLElBUGhCO0FBQUEsMkJBU0UsOERBQUMsb0RBQUQ7QUFBUSxPQUFDLEVBQUMsTUFBVjtBQUFpQixnQkFBVSxFQUFFLE9BQTdCO0FBQXNDLGFBQU8sRUFBRSxNQUEvQztBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQVEsRUFBRSxJQUFoQjtBQUFzQixrQkFBVSxFQUFFLEtBQWxDO0FBQUEsa0JBQ0dILE1BQU0sQ0FBQ0k7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSw4REFBQyxzREFBRDtBQUFVLHNCQUFjLEVBQUUsRUFBMUI7QUFBOEIsY0FBSUYsSUFBbEM7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFBLG9CQUNHRixNQUFNLENBQUNLLFdBQVAsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNDLEVBQUQsRUFBYTtBQUNuQyxnQ0FDRSw4REFBQyxvREFBRDtBQUFBLHNDQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUUsRUFBRUMsbURBQVY7QUFBbUIscUJBQUssRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBQSwwQkFBT0QsRUFBRSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSxlQUFhRixFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFNRCxXQVBBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWdCRSw4REFBQyxvREFBRDtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNSixPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFiO0FBQUEsU0FBakI7QUFBQSxrQkFDR0EsSUFBSSxHQUFHLE1BQUgsR0FBWTtBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQWxDRDs7R0FBTUgsVzs7S0FBQUEsVztBQW9DQyxTQUFTVyxZQUFULEdBQXdCO0FBQUE7O0FBQUEsbUJBQ1dULCtDQUFRLENBQU0sRUFBTixDQURuQjtBQUFBLE1BQ3RCVSxZQURzQjtBQUFBLE1BQ1JDLGVBRFE7O0FBRzdCLE1BQU1DLFFBQVE7QUFBQSwwVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNJQywyREFBTyxDQUFDQyw4REFBVSxDQUFDQyxtREFBRCxFQUFLLFlBQUwsQ0FBWCxDQURYOztBQUFBO0FBQ1RDLGtCQURTO0FBRWY7QUFDQUwsNkJBQWUsQ0FBQ0ssSUFBSSxDQUFDQSxJQUFMLEVBQUQsQ0FBZixDQUhlLENBSWY7O0FBSmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkosUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQU9BSyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCUixZQUF4QjtBQUVBUyxrREFBUyxDQUFDLFlBQU07QUFDZFAsWUFBUTtBQUNULEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyx3REFBRDtBQUFZLFdBQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQXJCO0FBQTZCLE9BQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWxDO0FBQUEsMkJBQ0UsOERBQUMsb0RBQUQ7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYkssZUFBTyxDQUFDQyxHQUFSLENBQVlSLFlBQVo7QUFDRCxPQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztJQWhDZUQsWTs7TUFBQUEsWSIsImZpbGUiOiIuL2NvbXBvbmVudC9jYXRlZ29yeUJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGbGV4LFxuICBTaW1wbGVHcmlkLFxuICBUZXh0LFxuICBDb2xsYXBzZSxcbiAgQnV0dG9uLFxuICBMaXN0LFxuICBJY29uLFxuICBWU3RhY2ssXG4gIEhTdGFjayxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IGRvYywgZ2V0RG9jLCBnZXREb2NzLCBjb2xsZWN0aW9uIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFDaGVjayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NsaWVudEFwcFwiO1xuXG5jb25zdCBDYXRlZ29yeUJveCA9ICh7IGRldGFpbCB9OiBhbnkpID0+IHtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICBib3hTaGFkb3c9e1xuICAgICAgICBcInJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMTJweCAyOHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAycHggNHB4IDBweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSAwcHggMHB4IDBweCAxcHggaW5zZXRcIlxuICAgICAgfVxuICAgICAgcD17WzUsIDEwXX1cbiAgICAgIGJvcmRlclJhZGl1cz17XCJsZ1wifVxuICAgID5cbiAgICAgIDxWU3RhY2sgdz1cIjEwMCVcIiBhbGlnbkl0ZW1zPXtcInVuc2V0XCJ9IHNwYWNpbmc9e1wiMjBweFwifT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9e1wieGxcIn0gZm9udFdlaWdodD17XCI1MDBcIn0+XG4gICAgICAgICAge2RldGFpbC50aXRsZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Q29sbGFwc2Ugc3RhcnRpbmdIZWlnaHQ9ezM1fSBpbj17c2hvd30+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICB7ZGV0YWlsLnN1YkNhdGVnb3J5Lm1hcCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxIU3RhY2sga2V5PXtlbH0+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBhcz17RmFDaGVja30gY29sb3I9XCJncmVlbi41MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+e2VsLnN1YlRpdGxlfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX0+XG4gICAgICAgICAge3Nob3cgPyBcIkxlc3NcIiA6IFwiU2hvdyBtb3JlXCJ9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGVnb3J5Qm94cygpIHtcbiAgY29uc3QgW2NhdGVnb3J5RGF0YSwgc2V0Q2F0ZWdvcnlEYXRhXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gIGNvbnN0IGdldERhdGFzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwiY2F0ZWdvcmllc1wiKSk7XG4gICAgLy8gZGF0YS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIHNldENhdGVnb3J5RGF0YShkYXRhLmRhdGEoKSk7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coXCJBbGwgZGF0YVwiLCBjYXRlZ29yeURhdGEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsIDNdfSBnYXA9e1s2LCA4XX0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeURhdGEpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBjb25zb2xlXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHsvKiB7Y2F0ZWdvcnlEYXRhICYmXG4gICAgICAgIGNhdGVnb3J5RGF0YS5tYXAoKGVsOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVsLT5cIiwgZWwpO1xuICAgICAgICAgIHJldHVybiA8Q2F0ZWdvcnlCb3gga2V5PXtlbC50aXRsZX0gZGV0YWlsPXtlbH0gLz47XG4gICAgICAgIH0pfSAqL31cbiAgICA8L1NpbXBsZUdyaWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/categoryBox.tsx\n");

/***/ })

});