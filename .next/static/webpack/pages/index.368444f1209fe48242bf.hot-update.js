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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CategoryBoxs\": function() { return /* binding */ CategoryBoxs; }\n/* harmony export */ });\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/component/categoryBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar CategoryBox = function CategoryBox(_ref) {\n  _s();\n\n  var detail = _ref.detail;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    boxShadow: \"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset\",\n    p: [5, 10],\n    borderRadius: \"lg\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n      w: \"100%\",\n      alignItems: \"unset\",\n      spacing: \"20px\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n        fontSize: \"xl\",\n        fontWeight: \"500\",\n        children: detail.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Collapse, {\n        startingHeight: 35,\n        \"in\": show,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.List, {\n          children: detail.subCategory.map(function (el) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCheck,\n                color: \"green.500\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                children: el.subTitle\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 19\n              }, _this)]\n            }, el, true, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n        onClick: function onClick() {\n          return setShow(!show);\n        },\n        children: show ? \"Less\" : \"Show more\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CategoryBox, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n\n_c = CategoryBox;\nfunction CategoryBoxs() {\n  _s2();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      categoryData = _useState2[0],\n      setCategoryData = _useState2[1];\n\n  var getDatas = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var data;\n      return _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__.db, \"categories\"));\n\n            case 2:\n              data = _context.sent;\n              // data.forEach((el) => {\n              setCategoryData(data.docs.forEach(function (el) {\n                return el.data();\n              })); // });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getDatas() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  console.log(\"All data\", categoryData);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    getDatas();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.SimpleGrid, {\n    columns: [1, 3],\n    gap: [6, 8],\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n      onClick: function onClick() {\n        console.log(categoryData);\n      },\n      children: \"console\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(CategoryBoxs, \"AgpCcAGdwhA7aUwJaPipC4+8sDU=\");\n\n_c2 = CategoryBoxs;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CategoryBox\");\n$RefreshReg$(_c2, \"CategoryBoxs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NhdGVnb3J5Qm94LnRzeD9mZTQxIl0sIm5hbWVzIjpbIkNhdGVnb3J5Qm94IiwiZGV0YWlsIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInRpdGxlIiwic3ViQ2F0ZWdvcnkiLCJtYXAiLCJlbCIsIkZhQ2hlY2siLCJzdWJUaXRsZSIsIkNhdGVnb3J5Qm94cyIsImNhdGVnb3J5RGF0YSIsInNldENhdGVnb3J5RGF0YSIsImdldERhdGFzIiwiZ2V0RG9jcyIsImNvbGxlY3Rpb24iLCJkYiIsImRhdGEiLCJkb2NzIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjs7QUFBQSxrQkFDZkMsK0NBQVEsQ0FBQyxLQUFELENBRE87QUFBQSxNQUNoQ0MsSUFEZ0M7QUFBQSxNQUMxQkMsT0FEMEI7O0FBRXZDLHNCQUNFLDhEQUFDLGtEQUFEO0FBQ0Usa0JBQWMsRUFBRSxRQURsQjtBQUVFLGNBQVUsRUFBRSxRQUZkO0FBR0UsYUFBUyxFQUNQLDJIQUpKO0FBTUUsS0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FOTDtBQU9FLGdCQUFZLEVBQUUsSUFQaEI7QUFBQSwyQkFTRSw4REFBQyxvREFBRDtBQUFRLE9BQUMsRUFBQyxNQUFWO0FBQWlCLGdCQUFVLEVBQUUsT0FBN0I7QUFBc0MsYUFBTyxFQUFFLE1BQS9DO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBUSxFQUFFLElBQWhCO0FBQXNCLGtCQUFVLEVBQUUsS0FBbEM7QUFBQSxrQkFDR0gsTUFBTSxDQUFDSTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLHNEQUFEO0FBQVUsc0JBQWMsRUFBRSxFQUExQjtBQUE4QixjQUFJRixJQUFsQztBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQUEsb0JBQ0dGLE1BQU0sQ0FBQ0ssV0FBUCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsRUFBRCxFQUFhO0FBQ25DLGdDQUNFLDhEQUFDLG9EQUFEO0FBQUEsc0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBRSxFQUFFQyxtREFBVjtBQUFtQixxQkFBSyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRSw4REFBQyxrREFBRDtBQUFBLDBCQUFPRCxFQUFFLENBQUNFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBLGVBQWFGLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQU1ELFdBUEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBZ0JFLDhEQUFDLG9EQUFEO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1KLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxTQUFqQjtBQUFBLGtCQUNHQSxJQUFJLEdBQUcsTUFBSCxHQUFZO0FBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBbENEOztHQUFNSCxXOztLQUFBQSxXO0FBb0NDLFNBQVNXLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxtQkFDV1QsK0NBQVEsQ0FBTSxFQUFOLENBRG5CO0FBQUEsTUFDdEJVLFlBRHNCO0FBQUEsTUFDUkMsZUFEUTs7QUFHN0IsTUFBTUMsUUFBUTtBQUFBLDBVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0lDLDJEQUFPLENBQUNDLDhEQUFVLENBQUNDLG1EQUFELEVBQUssWUFBTCxDQUFYLENBRFg7O0FBQUE7QUFDVEMsa0JBRFM7QUFFZjtBQUNBTCw2QkFBZSxDQUFDSyxJQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBVixDQUFrQixVQUFDWixFQUFEO0FBQUEsdUJBQVFBLEVBQUUsQ0FBQ1UsSUFBSCxFQUFSO0FBQUEsZUFBbEIsQ0FBRCxDQUFmLENBSGUsQ0FJZjs7QUFKZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSSixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBT0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JWLFlBQXhCO0FBRUFXLGtEQUFTLENBQUMsWUFBTTtBQUNkVCxZQUFRO0FBQ1QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFLDhEQUFDLHdEQUFEO0FBQVksV0FBTyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBckI7QUFBNkIsT0FBRyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBbEM7QUFBQSwyQkFDRSw4REFBQyxvREFBRDtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiTyxlQUFPLENBQUNDLEdBQVIsQ0FBWVYsWUFBWjtBQUNELE9BSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0lBaENlRCxZOztNQUFBQSxZIiwiZmlsZSI6Ii4vY29tcG9uZW50L2NhdGVnb3J5Qm94LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZsZXgsXG4gIFNpbXBsZUdyaWQsXG4gIFRleHQsXG4gIENvbGxhcHNlLFxuICBCdXR0b24sXG4gIExpc3QsXG4gIEljb24sXG4gIFZTdGFjayxcbiAgSFN0YWNrLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgZG9jLCBnZXREb2MsIGdldERvY3MsIGNvbGxlY3Rpb24gfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2UvY2xpZW50QXBwXCI7XG5cbmNvbnN0IENhdGVnb3J5Qm94ID0gKHsgZGV0YWlsIH06IGFueSkgPT4ge1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxuICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgIGJveFNoYWRvdz17XG4gICAgICAgIFwicmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxMnB4IDI4cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDJweCA0cHggMHB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDBweCAwcHggMHB4IDFweCBpbnNldFwiXG4gICAgICB9XG4gICAgICBwPXtbNSwgMTBdfVxuICAgICAgYm9yZGVyUmFkaXVzPXtcImxnXCJ9XG4gICAgPlxuICAgICAgPFZTdGFjayB3PVwiMTAwJVwiIGFsaWduSXRlbXM9e1widW5zZXRcIn0gc3BhY2luZz17XCIyMHB4XCJ9PlxuICAgICAgICA8VGV4dCBmb250U2l6ZT17XCJ4bFwifSBmb250V2VpZ2h0PXtcIjUwMFwifT5cbiAgICAgICAgICB7ZGV0YWlsLnRpdGxlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxDb2xsYXBzZSBzdGFydGluZ0hlaWdodD17MzV9IGluPXtzaG93fT5cbiAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgIHtkZXRhaWwuc3ViQ2F0ZWdvcnkubWFwKChlbDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEhTdGFjayBrZXk9e2VsfT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtGYUNoZWNrfSBjb2xvcj1cImdyZWVuLjUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dD57ZWwuc3ViVGl0bGV9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfT5cbiAgICAgICAgICB7c2hvdyA/IFwiTGVzc1wiIDogXCJTaG93IG1vcmVcIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcnlCb3hzKCkge1xuICBjb25zdCBbY2F0ZWdvcnlEYXRhLCBzZXRDYXRlZ29yeURhdGFdID0gdXNlU3RhdGU8YW55PihbXSk7XG5cbiAgY29uc3QgZ2V0RGF0YXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJjYXRlZ29yaWVzXCIpKTtcbiAgICAvLyBkYXRhLmZvckVhY2goKGVsKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnlEYXRhKGRhdGEuZG9jcy5mb3JFYWNoKChlbCkgPT4gZWwuZGF0YSgpKSk7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coXCJBbGwgZGF0YVwiLCBjYXRlZ29yeURhdGEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsIDNdfSBnYXA9e1s2LCA4XX0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeURhdGEpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBjb25zb2xlXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHsvKiB7Y2F0ZWdvcnlEYXRhICYmXG4gICAgICAgIGNhdGVnb3J5RGF0YS5tYXAoKGVsOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVsLT5cIiwgZWwpO1xuICAgICAgICAgIHJldHVybiA8Q2F0ZWdvcnlCb3gga2V5PXtlbC50aXRsZX0gZGV0YWlsPXtlbH0gLz47XG4gICAgICAgIH0pfSAqL31cbiAgICA8L1NpbXBsZUdyaWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/categoryBox.tsx\n");

/***/ })

});