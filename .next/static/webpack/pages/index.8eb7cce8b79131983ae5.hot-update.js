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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CategoryBoxs\": function() { return /* binding */ CategoryBoxs; }\n/* harmony export */ });\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/component/categoryBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar CategoryBox = function CategoryBox(_ref) {\n  _s();\n\n  var detail = _ref.detail;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    boxShadow: \"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset\",\n    p: [5, 10],\n    borderRadius: \"lg\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n      w: \"100%\",\n      alignItems: \"unset\",\n      spacing: \"20px\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n        fontSize: \"xl\",\n        fontWeight: \"500\",\n        children: detail.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Collapse, {\n        startingHeight: 35,\n        \"in\": show,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.List, {\n          children: detail.subCategory.map(function (el) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Icon, {\n                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaCheck,\n                color: \"green.500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                children: el.subTitle\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 19\n              }, _this)]\n            }, el, true, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n        onClick: function onClick() {\n          return setShow(!show);\n        },\n        children: show ? \"Less\" : \"Show more\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CategoryBox, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n\n_c = CategoryBox;\nfunction CategoryBoxs() {\n  _s2();\n\n  var _this2 = this;\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      categoryData = _useState2[0],\n      setCategoryData = _useState2[1];\n\n  var getDatas = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var data;\n      return _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_6__.db, \"categories\"));\n\n            case 2:\n              data = _context.sent;\n              data.forEach(function (el) {\n                setCategoryData(function (categoryData) {\n                  return [].concat((0,_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(categoryData), [el.data()]);\n                });\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getDatas() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    getDatas();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.SimpleGrid, {\n    columns: [1, 3],\n    gap: [6, 8],\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n      onClick: function onClick() {\n        console.log(categoryData);\n      },\n      children: \"console\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), categoryData && categoryData.map(function (el) {\n      console.log(\"el->\", el);\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CategoryBox, {\n        detail: el\n      }, el.title, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 18\n      }, _this2);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(CategoryBoxs, \"AgpCcAGdwhA7aUwJaPipC4+8sDU=\");\n\n_c2 = CategoryBoxs;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CategoryBox\");\n$RefreshReg$(_c2, \"CategoryBoxs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NhdGVnb3J5Qm94LnRzeD9mZTQxIl0sIm5hbWVzIjpbIkNhdGVnb3J5Qm94IiwiZGV0YWlsIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInRpdGxlIiwic3ViQ2F0ZWdvcnkiLCJtYXAiLCJlbCIsIkZhQ2hlY2siLCJzdWJUaXRsZSIsIkNhdGVnb3J5Qm94cyIsImNhdGVnb3J5RGF0YSIsInNldENhdGVnb3J5RGF0YSIsImdldERhdGFzIiwiZ2V0RG9jcyIsImNvbGxlY3Rpb24iLCJkYiIsImRhdGEiLCJmb3JFYWNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQjtBQUFBOztBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7O0FBQUEsa0JBQ2ZDLCtDQUFRLENBQUMsS0FBRCxDQURPO0FBQUEsTUFDaENDLElBRGdDO0FBQUEsTUFDMUJDLE9BRDBCOztBQUV2QyxzQkFDRSw4REFBQyxrREFBRDtBQUNFLGtCQUFjLEVBQUUsUUFEbEI7QUFFRSxjQUFVLEVBQUUsUUFGZDtBQUdFLGFBQVMsRUFDUCwySEFKSjtBQU1FLEtBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLENBTkw7QUFPRSxnQkFBWSxFQUFFLElBUGhCO0FBQUEsMkJBU0UsOERBQUMsb0RBQUQ7QUFBUSxPQUFDLEVBQUMsTUFBVjtBQUFpQixnQkFBVSxFQUFFLE9BQTdCO0FBQXNDLGFBQU8sRUFBRSxNQUEvQztBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQVEsRUFBRSxJQUFoQjtBQUFzQixrQkFBVSxFQUFFLEtBQWxDO0FBQUEsa0JBQ0dILE1BQU0sQ0FBQ0k7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSw4REFBQyxzREFBRDtBQUFVLHNCQUFjLEVBQUUsRUFBMUI7QUFBOEIsY0FBSUYsSUFBbEM7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFBLG9CQUNHRixNQUFNLENBQUNLLFdBQVAsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNDLEVBQUQsRUFBYTtBQUNuQyxnQ0FDRSw4REFBQyxvREFBRDtBQUFBLHNDQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUUsRUFBRUMsbURBQVY7QUFBbUIscUJBQUssRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBQSwwQkFBT0QsRUFBRSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSxlQUFhRixFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFNRCxXQVBBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWdCRSw4REFBQyxvREFBRDtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNSixPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFiO0FBQUEsU0FBakI7QUFBQSxrQkFDR0EsSUFBSSxHQUFHLE1BQUgsR0FBWTtBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQWxDRDs7R0FBTUgsVzs7S0FBQUEsVztBQW9DQyxTQUFTVyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQUEsbUJBQ1dULCtDQUFRLENBQU0sRUFBTixDQURuQjtBQUFBLE1BQ3RCVSxZQURzQjtBQUFBLE1BQ1JDLGVBRFE7O0FBRzdCLE1BQU1DLFFBQVE7QUFBQSwwVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNJQywyREFBTyxDQUFDQyw4REFBVSxDQUFDQyxtREFBRCxFQUFLLFlBQUwsQ0FBWCxDQURYOztBQUFBO0FBQ1RDLGtCQURTO0FBRWZBLGtCQUFJLENBQUNDLE9BQUwsQ0FBYSxVQUFDWCxFQUFELEVBQVE7QUFDbkJLLCtCQUFlLENBQUMsVUFBQ0QsWUFBRDtBQUFBLGlNQUEyQkEsWUFBM0IsSUFBeUNKLEVBQUUsQ0FBQ1UsSUFBSCxFQUF6QztBQUFBLGlCQUFELENBQWY7QUFDRCxlQUZEOztBQUZlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJKLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFPQU0sa0RBQVMsQ0FBQyxZQUFNO0FBQ2ROLFlBQVE7QUFDVCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBWSxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFyQjtBQUE2QixPQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFsQztBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JPLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVixZQUFaO0FBQ0QsT0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBUUdBLFlBQVksSUFDWEEsWUFBWSxDQUFDTCxHQUFiLENBQWlCLFVBQUNDLEVBQUQsRUFBYTtBQUM1QmEsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQmQsRUFBcEI7QUFDQSwwQkFBTyw4REFBQyxXQUFEO0FBQTRCLGNBQU0sRUFBRUE7QUFBcEMsU0FBa0JBLEVBQUUsQ0FBQ0gsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNELEtBSEQsQ0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7SUE5QmVNLFk7O01BQUFBLFkiLCJmaWxlIjoiLi9jb21wb25lbnQvY2F0ZWdvcnlCb3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRmxleCxcbiAgU2ltcGxlR3JpZCxcbiAgVGV4dCxcbiAgQ29sbGFwc2UsXG4gIEJ1dHRvbixcbiAgTGlzdCxcbiAgSWNvbixcbiAgVlN0YWNrLFxuICBIU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBkb2MsIGdldERvYywgZ2V0RG9jcywgY29sbGVjdGlvbiB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZS9jbGllbnRBcHBcIjtcblxuY29uc3QgQ2F0ZWdvcnlCb3ggPSAoeyBkZXRhaWwgfTogYW55KSA9PiB7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XG4gICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgYm94U2hhZG93PXtcbiAgICAgICAgXCJyZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDEycHggMjhweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMnB4IDRweCAwcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMHB4IDBweCAwcHggMXB4IGluc2V0XCJcbiAgICAgIH1cbiAgICAgIHA9e1s1LCAxMF19XG4gICAgICBib3JkZXJSYWRpdXM9e1wibGdcIn1cbiAgICA+XG4gICAgICA8VlN0YWNrIHc9XCIxMDAlXCIgYWxpZ25JdGVtcz17XCJ1bnNldFwifSBzcGFjaW5nPXtcIjIwcHhcIn0+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPXtcInhsXCJ9IGZvbnRXZWlnaHQ9e1wiNTAwXCJ9PlxuICAgICAgICAgIHtkZXRhaWwudGl0bGV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPENvbGxhcHNlIHN0YXJ0aW5nSGVpZ2h0PXszNX0gaW49e3Nob3d9PlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAge2RldGFpbC5zdWJDYXRlZ29yeS5tYXAoKGVsOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8SFN0YWNrIGtleT17ZWx9PlxuICAgICAgICAgICAgICAgICAgPEljb24gYXM9e0ZhQ2hlY2t9IGNvbG9yPVwiZ3JlZW4uNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PntlbC5zdWJUaXRsZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9PlxuICAgICAgICAgIHtzaG93ID8gXCJMZXNzXCIgOiBcIlNob3cgbW9yZVwifVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yeUJveHMoKSB7XG4gIGNvbnN0IFtjYXRlZ29yeURhdGEsIHNldENhdGVnb3J5RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcblxuICBjb25zdCBnZXREYXRhcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcImNhdGVnb3JpZXNcIikpO1xuICAgIGRhdGEuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHNldENhdGVnb3J5RGF0YSgoY2F0ZWdvcnlEYXRhOiBhbnkpID0+IFsuLi5jYXRlZ29yeURhdGEsIGVsLmRhdGEoKV0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsIDNdfSBnYXA9e1s2LCA4XX0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeURhdGEpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBjb25zb2xlXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtjYXRlZ29yeURhdGEgJiZcbiAgICAgICAgY2F0ZWdvcnlEYXRhLm1hcCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWwtPlwiLCBlbCk7XG4gICAgICAgICAgcmV0dXJuIDxDYXRlZ29yeUJveCBrZXk9e2VsLnRpdGxlfSBkZXRhaWw9e2VsfSAvPjtcbiAgICAgICAgfSl9XG4gICAgPC9TaW1wbGVHcmlkPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/categoryBox.tsx\n");

/***/ })

});