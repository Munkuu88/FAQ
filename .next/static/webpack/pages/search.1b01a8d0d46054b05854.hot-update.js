/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./component/questionAnswer.tsx":
/*!**************************************!*\
  !*** ./component/questionAnswer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuestionAnswer\": function() { return /* binding */ QuestionAnswer; }\n/* harmony export */ });\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/component/questionAnswer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar LocationModal = function LocationModal(_ref) {\n  var open = _ref.open,\n      setOpen = _ref.setOpen,\n      location = _ref.location;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Modal, {\n      isOpen: open,\n      onClose: function onClose() {\n        return setOpen(false);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalOverlay, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalContent, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalHeader, {\n          alignItems: \"center\",\n          children: [\"\\u0425\\u043E\\u043B\\u0431\\u043E\\u043E \\u0431\\u0430\\u0440\\u0438\\u0445 \\u0433\\u0430\\u0437\\u0430\\u0440 \\u0431\\u043E\\u043B\\u043E\\u043D \\u043C\\u044D\\u0434\\u044D\\u044D\\u043B\\u044D\\u043B \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalCloseButton, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 47\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {\n          children: location\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalFooter, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n            onClick: function onClick() {\n              return setOpen(false);\n            },\n            children: \"\\u0411\\u0443\\u0446\\u0430\\u0445\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = LocationModal;\n\nvar QuestionAnswerDetail = function QuestionAnswerDetail(_ref2) {\n  var question = _ref2.question,\n      answers = _ref2.answers,\n      setOpen = _ref2.setOpen,\n      open = _ref2.open,\n      setLocation = _ref2.setLocation,\n      place = _ref2.place;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionItem, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionButton, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n          flex: \"1\",\n          textAlign: \"left\",\n          children: question\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionIcon, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionPanel, {\n      pb: 4,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.List, {\n        children: answers.map(function (el, ind) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ListItem, {\n            py: \"10px\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                children: \"-\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                children: el\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 17\n            }, _this)\n          }, ind, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        justifyContent: \"space-between\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n          onClick: function onClick() {\n            setOpen(true), setLocation(place);\n          },\n          children: \"\\u0425\\u043E\\u043B\\u0431\\u043E\\u0433\\u0434\\u043E\\u0445 \\u0433\\u0430\\u0437\\u0430\\u0440\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = QuestionAnswerDetail;\nfunction QuestionAnswer(_ref3) {\n  _s();\n\n  var _this2 = this;\n\n  var sortGetData = _ref3.sortGetData;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      questionsData = _useState[0],\n      setQuestionsData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      location = _useState3[0],\n      setLocation = _useState3[1];\n\n  var getDatas = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var data;\n      return _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, \"questions\"));\n\n            case 2:\n              data = _context.sent;\n              data.forEach(function (el) {\n                return setQuestionsData(el.data().data);\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getDatas() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    getDatas();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Accordion, {\n      allowToggle: true,\n      w: \"100%\",\n      defaultIndex: [1],\n      children: sortGetData && sortGetData.map(function (el) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(QuestionAnswerDetail, {\n          question: el.question,\n          answers: el.answer,\n          setOpen: setOpen,\n          open: open,\n          setLocation: setLocation,\n          place: el.location\n        }, el.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 15\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(LocationModal, {\n      open: open,\n      setOpen: setOpen,\n      location: location\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(QuestionAnswer, \"f/awgM0FobeXKzn0vAREpiwdv+k=\");\n\n_c3 = QuestionAnswer;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"LocationModal\");\n$RefreshReg$(_c2, \"QuestionAnswerDetail\");\n$RefreshReg$(_c3, \"QuestionAnswer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3F1ZXN0aW9uQW5zd2VyLnRzeD9hZThlIl0sIm5hbWVzIjpbIkxvY2F0aW9uTW9kYWwiLCJvcGVuIiwic2V0T3BlbiIsImxvY2F0aW9uIiwiUXVlc3Rpb25BbnN3ZXJEZXRhaWwiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJzZXRMb2NhdGlvbiIsInBsYWNlIiwibWFwIiwiZWwiLCJpbmQiLCJRdWVzdGlvbkFuc3dlciIsInNvcnRHZXREYXRhIiwidXNlU3RhdGUiLCJxdWVzdGlvbnNEYXRhIiwic2V0UXVlc3Rpb25zRGF0YSIsImdldERhdGFzIiwiZ2V0RG9jcyIsImNvbGxlY3Rpb24iLCJkYiIsImRhdGEiLCJmb3JFYWNoIiwidXNlRWZmZWN0IiwiYW5zd2VyIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0JBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQXNDO0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTdCQyxPQUE2QixRQUE3QkEsT0FBNkI7QUFBQSxNQUFwQkMsUUFBb0IsUUFBcEJBLFFBQW9CO0FBQzFELHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBTyxZQUFNLEVBQUVGLElBQWY7QUFBcUIsYUFBTyxFQUFFO0FBQUEsZUFBTUMsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLE9BQTlCO0FBQUEsOEJBQ0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFhLG9CQUFVLEVBQUUsUUFBekI7QUFBQSx5TkFDb0MsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsdURBQUQ7QUFBQSxvQkFBWUM7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QUFBO0FBQUEsWUFqQkY7QUFBQSxrQkFERjtBQXFCRDs7R0FsQ2VTLGM7O01BQUFBLGMiLCJmaWxlIjoiLi9jb21wb25lbnQvcXVlc3Rpb25BbnN3ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25CdXR0b24sXG4gIEJveCxcbiAgQWNjb3JkaW9uSWNvbixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBIU3RhY2ssXG4gIEljb24sXG4gIFRleHQsXG4gIEJ1dHRvbixcbiAgTW9kYWwsXG4gIEZsZXgsXG4gIE1vZGFsT3ZlcmxheSxcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxCb2R5LFxuICBNb2RhbENsb3NlQnV0dG9uLFxuICBNb2RhbEZvb3Rlcixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NsaWVudEFwcFwiO1xuaW1wb3J0IHsgRmFDaGVjayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgTG9jYXRpb25Nb2RhbCA9ICh7IG9wZW4sIHNldE9wZW4sIGxvY2F0aW9uIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW9kYWwgaXNPcGVuPXtvcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0+XG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICA8TW9kYWxIZWFkZXIgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICDQpdC+0LvQsdC+0L4g0LHQsNGA0LjRhSDQs9Cw0LfQsNGAINCx0L7Qu9C+0L0g0LzRjdC00Y3RjdC70Y3QuyA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgPE1vZGFsQm9keT57bG9jYXRpb259PC9Nb2RhbEJvZHk+XG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0+0JHRg9GG0LDRhTwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFF1ZXN0aW9uQW5zd2VyRGV0YWlsID0gKHtcbiAgcXVlc3Rpb24sXG4gIGFuc3dlcnMsXG4gIHNldE9wZW4sXG4gIG9wZW4sXG4gIHNldExvY2F0aW9uLFxuICBwbGFjZSxcbn06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBY2NvcmRpb25JdGVtPlxuICAgICAgPGgyPlxuICAgICAgICA8QWNjb3JkaW9uQnV0dG9uPlxuICAgICAgICAgIDxCb3ggZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICB7cXVlc3Rpb259XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEFjY29yZGlvbkljb24gLz5cbiAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XG4gICAgICA8L2gyPlxuICAgICAgPEFjY29yZGlvblBhbmVsIHBiPXs0fT5cbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge2Fuc3dlcnMubWFwKChlbDogc3RyaW5nLCBpbmQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aW5kfSBweT1cIjEwcHhcIj5cbiAgICAgICAgICAgICAgICA8SFN0YWNrPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+LTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PntlbH08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0+XG4gICAgICAgICAgPEJveCAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0T3Blbih0cnVlKSwgc2V0TG9jYXRpb24ocGxhY2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDQpdC+0LvQsdC+0LPQtNC+0YUg0LPQsNC30LDRgFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBRdWVzdGlvbkFuc3dlcih7IHNvcnRHZXREYXRhIH06IGFueSkge1xuICBjb25zdCBbcXVlc3Rpb25zRGF0YSwgc2V0UXVlc3Rpb25zRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBnZXREYXRhcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInF1ZXN0aW9uc1wiKSk7XG4gICAgZGF0YS5mb3JFYWNoKChlbCkgPT4gc2V0UXVlc3Rpb25zRGF0YShlbC5kYXRhKCkuZGF0YSkpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERhdGFzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QWNjb3JkaW9uIGFsbG93VG9nZ2xlIHc9e1wiMTAwJVwifSBkZWZhdWx0SW5kZXg9e1sxXX0+XG4gICAgICAgIHtzb3J0R2V0RGF0YSAmJlxuICAgICAgICAgIHNvcnRHZXREYXRhLm1hcCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFF1ZXN0aW9uQW5zd2VyRGV0YWlsXG4gICAgICAgICAgICAgICAga2V5PXtlbC5pZH1cbiAgICAgICAgICAgICAgICBxdWVzdGlvbj17ZWwucXVlc3Rpb259XG4gICAgICAgICAgICAgICAgYW5zd2Vycz17ZWwuYW5zd2VyfVxuICAgICAgICAgICAgICAgIHNldE9wZW49e3NldE9wZW59XG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbj17c2V0TG9jYXRpb259XG4gICAgICAgICAgICAgICAgcGxhY2U9e2VsLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgPExvY2F0aW9uTW9kYWwgb3Blbj17b3Blbn0gc2V0T3Blbj17c2V0T3Blbn0gbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/questionAnswer.tsx\n");

/***/ })

});