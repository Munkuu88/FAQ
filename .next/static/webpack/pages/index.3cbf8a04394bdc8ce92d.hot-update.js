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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CategoryBoxs\": function() { return /* binding */ CategoryBoxs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/component/categoryBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar CategoryBox = function CategoryBox(_ref) {\n  _s();\n\n  var detail = _ref.detail;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    boxShadow: \"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset\",\n    p: [5, 10],\n    borderRadius: \"lg\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n      w: \"100%\",\n      alignItems: \"unset\",\n      spacing: \"20px\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n        fontSize: \"xl\",\n        fontWeight: \"500\",\n        children: detail.category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Collapse, {\n        startingHeight: 80,\n        \"in\": show,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.List, {\n          children: detail.subCategory.map(function (el) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"search/\".concat(el.link),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n                cursor: \"pointer\",\n                alignItems: \"center\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCheck,\n                  color: \"green.500\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                  children: el.text\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 19\n              }, _this)\n            }, el.link, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n        onClick: function onClick() {\n          return setShow(!show);\n        },\n        children: show ? \"Less\" : \"Show more\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CategoryBox, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n\n_c = CategoryBox;\nfunction CategoryBoxs() {\n  _s2();\n\n  var _this2 = this;\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      categoryData = _useState2[0],\n      setCategoryData = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, \"categories\"), function (snapshot) {\n      return setCategoryData(snapshot.docs.map(function (doc) {\n        return doc.data();\n      }));\n    });\n  }, []);\n  categoryData.sort(function (a, b) {\n    return a.category > b.category ? 1 : -1;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {\n    columns: [1, 3],\n    gap: [6, 8],\n    children: categoryData && categoryData.map(function (el) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoryBox, {\n        detail: el\n      }, el.category, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 18\n      }, _this2);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(CategoryBoxs, \"AgpCcAGdwhA7aUwJaPipC4+8sDU=\");\n\n_c2 = CategoryBoxs;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CategoryBox\");\n$RefreshReg$(_c2, \"CategoryBoxs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NhdGVnb3J5Qm94LnRzeD9mZTQxIl0sIm5hbWVzIjpbIkNhdGVnb3J5Qm94IiwiZGV0YWlsIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImNhdGVnb3J5Iiwic3ViQ2F0ZWdvcnkiLCJtYXAiLCJlbCIsImxpbmsiLCJGYUNoZWNrIiwidGV4dCIsIkNhdGVnb3J5Qm94cyIsImNhdGVnb3J5RGF0YSIsInNldENhdGVnb3J5RGF0YSIsInVzZUVmZmVjdCIsIm9uU25hcHNob3QiLCJjb2xsZWN0aW9uIiwiZGIiLCJzbmFwc2hvdCIsImRvY3MiLCJkb2MiLCJkYXRhIiwic29ydCIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjs7QUFBQSxrQkFDZkMsK0NBQVEsQ0FBQyxLQUFELENBRE87QUFBQSxNQUNoQ0MsSUFEZ0M7QUFBQSxNQUMxQkMsT0FEMEI7O0FBR3ZDLHNCQUNFLDhEQUFDLGtEQUFEO0FBQ0Usa0JBQWMsRUFBRSxRQURsQjtBQUVFLGNBQVUsRUFBRSxRQUZkO0FBR0UsYUFBUyxFQUNQLDJIQUpKO0FBTUUsS0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FOTDtBQU9FLGdCQUFZLEVBQUUsSUFQaEI7QUFBQSwyQkFTRSw4REFBQyxvREFBRDtBQUFRLE9BQUMsRUFBQyxNQUFWO0FBQWlCLGdCQUFVLEVBQUUsT0FBN0I7QUFBc0MsYUFBTyxFQUFFLE1BQS9DO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBUSxFQUFFLElBQWhCO0FBQXNCLGtCQUFVLEVBQUUsS0FBbEM7QUFBQSxrQkFDR0gsTUFBTSxDQUFDSTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLHNEQUFEO0FBQVUsc0JBQWMsRUFBRSxFQUExQjtBQUE4QixjQUFJRixJQUFsQztBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQUEsb0JBQ0dGLE1BQU0sQ0FBQ0ssV0FBUCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsRUFBRCxFQUFhO0FBQ25DLGdDQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksbUJBQVlBLEVBQUUsQ0FBQ0MsSUFBZixDQUFWO0FBQUEscUNBQ0UsOERBQUMsb0RBQUQ7QUFBUSxzQkFBTSxFQUFFLFNBQWhCO0FBQTJCLDBCQUFVLEVBQUUsUUFBdkM7QUFBQSx3Q0FDRSw4REFBQyxrREFBRDtBQUFNLG9CQUFFLEVBQUVDLG1EQUFWO0FBQW1CLHVCQUFLLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQUEsNEJBQU9GLEVBQUUsQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQXNDSCxFQUFFLENBQUNDLElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFRRCxXQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWtCRSw4REFBQyxvREFBRDtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNTCxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFiO0FBQUEsU0FBakI7QUFBQSxrQkFDR0EsSUFBSSxHQUFHLE1BQUgsR0FBWTtBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQXJDRDs7R0FBTUgsVzs7S0FBQUEsVztBQXVDQyxTQUFTWSxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQUEsbUJBQ1dWLCtDQUFRLENBQU0sRUFBTixDQURuQjtBQUFBLE1BQ3RCVyxZQURzQjtBQUFBLE1BQ1JDLGVBRFE7O0FBRzdCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsa0VBQVUsQ0FBQ0MsOERBQVUsQ0FBQ0MsbURBQUQsRUFBSyxZQUFMLENBQVgsRUFBK0IsVUFBQ0MsUUFBRDtBQUFBLGFBQ3ZDTCxlQUFlLENBQUNLLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjYixHQUFkLENBQWtCLFVBQUNjLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLE9BQWxCLENBQUQsQ0FEd0I7QUFBQSxLQUEvQixDQUFWO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BVCxjQUFZLENBQUNVLElBQWIsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFTQyxDQUFUO0FBQUEsV0FBcUJELENBQUMsQ0FBQ25CLFFBQUYsR0FBYW9CLENBQUMsQ0FBQ3BCLFFBQWYsR0FBMEIsQ0FBMUIsR0FBOEIsQ0FBQyxDQUFwRDtBQUFBLEdBQWxCO0FBRUEsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBWSxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFyQjtBQUE2QixPQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFsQztBQUFBLGNBQ0dRLFlBQVksSUFDWEEsWUFBWSxDQUFDTixHQUFiLENBQWlCLFVBQUNDLEVBQUQsRUFBYTtBQUM1QiwwQkFBTyw4REFBQyxXQUFEO0FBQStCLGNBQU0sRUFBRUE7QUFBdkMsU0FBa0JBLEVBQUUsQ0FBQ0gsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNELEtBRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7SUFuQmVPLFk7O01BQUFBLFkiLCJmaWxlIjoiLi9jb21wb25lbnQvY2F0ZWdvcnlCb3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRmxleCxcbiAgU2ltcGxlR3JpZCxcbiAgVGV4dCxcbiAgQ29sbGFwc2UsXG4gIEJ1dHRvbixcbiAgTGlzdCxcbiAgSWNvbixcbiAgVlN0YWNrLFxuICBIU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBvblNuYXBzaG90IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFDaGVjayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2UvY2xpZW50QXBwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IENhdGVnb3J5Qm94ID0gKHsgZGV0YWlsIH06IGFueSkgPT4ge1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XG4gICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgYm94U2hhZG93PXtcbiAgICAgICAgXCJyZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDEycHggMjhweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMnB4IDRweCAwcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMHB4IDBweCAwcHggMXB4IGluc2V0XCJcbiAgICAgIH1cbiAgICAgIHA9e1s1LCAxMF19XG4gICAgICBib3JkZXJSYWRpdXM9e1wibGdcIn1cbiAgICA+XG4gICAgICA8VlN0YWNrIHc9XCIxMDAlXCIgYWxpZ25JdGVtcz17XCJ1bnNldFwifSBzcGFjaW5nPXtcIjIwcHhcIn0+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPXtcInhsXCJ9IGZvbnRXZWlnaHQ9e1wiNTAwXCJ9PlxuICAgICAgICAgIHtkZXRhaWwuY2F0ZWdvcnl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPENvbGxhcHNlIHN0YXJ0aW5nSGVpZ2h0PXs4MH0gaW49e3Nob3d9PlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAge2RldGFpbC5zdWJDYXRlZ29yeS5tYXAoKGVsOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgc2VhcmNoLyR7ZWwubGlua31gfSBrZXk9e2VsLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgPEhTdGFjayBjdXJzb3I9e1wicG9pbnRlclwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gYXM9e0ZhQ2hlY2t9IGNvbG9yPVwiZ3JlZW4uNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2VsLnRleHR9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfT5cbiAgICAgICAgICB7c2hvdyA/IFwiTGVzc1wiIDogXCJTaG93IG1vcmVcIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcnlCb3hzKCkge1xuICBjb25zdCBbY2F0ZWdvcnlEYXRhLCBzZXRDYXRlZ29yeURhdGFdID0gdXNlU3RhdGU8YW55PihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvblNuYXBzaG90KGNvbGxlY3Rpb24oZGIsIFwiY2F0ZWdvcmllc1wiKSwgKHNuYXBzaG90KSA9PlxuICAgICAgc2V0Q2F0ZWdvcnlEYXRhKHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IGRvYy5kYXRhKCkpKVxuICAgICk7XG4gIH0sIFtdKTtcblxuICBjYXRlZ29yeURhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IChhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiAtMSkpO1xuXG4gIHJldHVybiAoXG4gICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsIDNdfSBnYXA9e1s2LCA4XX0+XG4gICAgICB7Y2F0ZWdvcnlEYXRhICYmXG4gICAgICAgIGNhdGVnb3J5RGF0YS5tYXAoKGVsOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPENhdGVnb3J5Qm94IGtleT17ZWwuY2F0ZWdvcnl9IGRldGFpbD17ZWx9IC8+O1xuICAgICAgICB9KX1cbiAgICA8L1NpbXBsZUdyaWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/categoryBox.tsx\n");

/***/ })

});