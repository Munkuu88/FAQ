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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuestionAnswer\": function() { return /* binding */ QuestionAnswer; }\n/* harmony export */ });\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/component/questionAnswer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar LocationModal = function LocationModal(_ref) {\n  var open = _ref.open,\n      setOpen = _ref.setOpen;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Modal, {\n      isOpen: open,\n      onClose: function onClose() {\n        return setOpen(false);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalOverlay, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalContent, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalHeader, {\n          children: \"\\u0425\\u043E\\u043B\\u0431\\u043E\\u043E \\u0431\\u0430\\u0440\\u0438\\u0445 \\u0433\\u0430\\u0437\\u0430\\u0440 \\u0431\\u043E\\u043B\\u043E\\u043D \\u043C\\u044D\\u0434\\u044D\\u044D\\u043B\\u044D\\u043B\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalCloseButton, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = LocationModal;\n\nvar QuestionAnswerDetail = function QuestionAnswerDetail(_ref2) {\n  var question = _ref2.question,\n      answers = _ref2.answers,\n      setOpen = _ref2.setOpen,\n      open = _ref2.open;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionItem, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionButton, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n          flex: \"1\",\n          textAlign: \"left\",\n          children: question\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionIcon, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionPanel, {\n      pb: 4,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.List, {\n        children: answers.map(function (el, ind) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ListItem, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                fill: \"green\",\n                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCheck\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                children: el\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 17\n            }, _this), \" \"]\n          }, ind, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n        onClick: function onClick() {\n          return setOpen(true);\n        },\n        children: \"\\u0425\\u043E\\u043B\\u0431\\u043E\\u0433\\u0434\\u043E\\u0445 \\u0433\\u0430\\u0437\\u0430\\u0440\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = QuestionAnswerDetail;\nfunction QuestionAnswer(_ref3) {\n  _s();\n\n  var _this2 = this;\n\n  var sortGetData = _ref3.sortGetData;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      questionsData = _useState[0],\n      setQuestionsData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var getDatas = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var data;\n      return _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, \"questions\"));\n\n            case 2:\n              data = _context.sent;\n              data.forEach(function (el) {\n                return setQuestionsData(el.data().data);\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getDatas() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    getDatas();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Accordion, {\n      allowToggle: true,\n      w: \"100%\",\n      defaultIndex: [1],\n      children: sortGetData && sortGetData.map(function (el) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(QuestionAnswerDetail, {\n          question: el.question,\n          answers: el.answer,\n          setOpen: setOpen,\n          open: open\n        }, el.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 15\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(LocationModal, {\n      open: open,\n      setOpen: setOpen\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(QuestionAnswer, \"5fLALwNNP2lccKZLREBh9T4pnUM=\");\n\n_c3 = QuestionAnswer;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"LocationModal\");\n$RefreshReg$(_c2, \"QuestionAnswerDetail\");\n$RefreshReg$(_c3, \"QuestionAnswer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3F1ZXN0aW9uQW5zd2VyLnRzeD9hZThlIl0sIm5hbWVzIjpbIkxvY2F0aW9uTW9kYWwiLCJvcGVuIiwic2V0T3BlbiIsIlF1ZXN0aW9uQW5zd2VyRGV0YWlsIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwibWFwIiwiZWwiLCJpbmQiLCJGYUNoZWNrIiwiUXVlc3Rpb25BbnN3ZXIiLCJzb3J0R2V0RGF0YSIsInVzZVN0YXRlIiwicXVlc3Rpb25zRGF0YSIsInNldFF1ZXN0aW9uc0RhdGEiLCJnZXREYXRhcyIsImdldERvY3MiLCJjb2xsZWN0aW9uIiwiZGIiLCJkYXRhIiwiZm9yRWFjaCIsInVzZUVmZmVjdCIsImFuc3dlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUE0QjtBQUFBLE1BQXpCQyxJQUF5QixRQUF6QkEsSUFBeUI7QUFBQSxNQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQ2hELHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBTyxZQUFNLEVBQUVELElBQWY7QUFBcUIsYUFBTyxFQUFFO0FBQUEsZUFBTUMsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLE9BQTlCO0FBQUEsOEJBQ0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURG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QUNHSixXQUFXLElBQ1ZBLFdBQVcsQ0FBQ0wsR0FBWixDQUFnQixVQUFDQyxFQUFELEVBQWE7QUFDM0IsNEJBQ0UsOERBQUMsb0JBQUQ7QUFFRSxrQkFBUSxFQUFFQSxFQUFFLENBQUNILFFBRmY7QUFHRSxpQkFBTyxFQUFFRyxFQUFFLENBQUNlLE1BSGQ7QUFJRSxpQkFBTyxFQUFFcEIsT0FKWDtBQUtFLGNBQUksRUFBRUQ7QUFMUixXQUNPTSxFQUFFLENBQUNnQixFQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFTRCxPQVZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBZUUsOERBQUMsYUFBRDtBQUFlLFVBQUksRUFBRXRCLElBQXJCO0FBQTJCLGFBQU8sRUFBRUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUEsa0JBREY7QUFtQkQ7O0dBL0JlUSxjOztNQUFBQSxjIiwiZmlsZSI6Ii4vY29tcG9uZW50L3F1ZXN0aW9uQW5zd2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uQnV0dG9uLFxuICBCb3gsXG4gIEFjY29yZGlvbkljb24sXG4gIEFjY29yZGlvblBhbmVsLFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgSFN0YWNrLFxuICBJY29uLFxuICBUZXh0LFxuICBCdXR0b24sXG4gIE1vZGFsLFxuICB1c2VEaXNjbG9zdXJlLFxuICBNb2RhbE92ZXJsYXksXG4gIE1vZGFsQ29udGVudCxcbiAgTW9kYWxIZWFkZXIsXG4gIE1vZGFsQm9keSxcbiAgTW9kYWxDbG9zZUJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NsaWVudEFwcFwiO1xuaW1wb3J0IHsgRmFDaGVjayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgTG9jYXRpb25Nb2RhbCA9ICh7IG9wZW4sIHNldE9wZW4gfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCBpc09wZW49e29wZW59IG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICAgIDxNb2RhbEhlYWRlcj7QpdC+0LvQsdC+0L4g0LHQsNGA0LjRhSDQs9Cw0LfQsNGAINCx0L7Qu9C+0L0g0LzRjdC00Y3RjdC70Y3QuzwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgICA8TW9kYWxCb2R5PjwvTW9kYWxCb2R5PlxuICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBRdWVzdGlvbkFuc3dlckRldGFpbCA9ICh7IHF1ZXN0aW9uLCBhbnN3ZXJzLCBzZXRPcGVuLCBvcGVuIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBY2NvcmRpb25JdGVtPlxuICAgICAgPGgyPlxuICAgICAgICA8QWNjb3JkaW9uQnV0dG9uPlxuICAgICAgICAgIDxCb3ggZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICB7cXVlc3Rpb259XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEFjY29yZGlvbkljb24gLz5cbiAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XG4gICAgICA8L2gyPlxuICAgICAgPEFjY29yZGlvblBhbmVsIHBiPXs0fT5cbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge2Fuc3dlcnMubWFwKChlbDogc3RyaW5nLCBpbmQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aW5kfT5cbiAgICAgICAgICAgICAgICA8SFN0YWNrPlxuICAgICAgICAgICAgICAgICAgPEljb24gZmlsbD17XCJncmVlblwifSBhcz17RmFDaGVja30gLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PntlbH08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9IU3RhY2s+e1wiIFwifVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9PtCl0L7Qu9Cx0L7Qs9C00L7RhSDQs9Cw0LfQsNGAPC9CdXR0b24+XG4gICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBRdWVzdGlvbkFuc3dlcih7IHNvcnRHZXREYXRhIH06IGFueSkge1xuICBjb25zdCBbcXVlc3Rpb25zRGF0YSwgc2V0UXVlc3Rpb25zRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnZXREYXRhcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInF1ZXN0aW9uc1wiKSk7XG4gICAgZGF0YS5mb3JFYWNoKChlbCkgPT4gc2V0UXVlc3Rpb25zRGF0YShlbC5kYXRhKCkuZGF0YSkpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERhdGFzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QWNjb3JkaW9uIGFsbG93VG9nZ2xlIHc9e1wiMTAwJVwifSBkZWZhdWx0SW5kZXg9e1sxXX0+XG4gICAgICAgIHtzb3J0R2V0RGF0YSAmJlxuICAgICAgICAgIHNvcnRHZXREYXRhLm1hcCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFF1ZXN0aW9uQW5zd2VyRGV0YWlsXG4gICAgICAgICAgICAgICAga2V5PXtlbC5pZH1cbiAgICAgICAgICAgICAgICBxdWVzdGlvbj17ZWwucXVlc3Rpb259XG4gICAgICAgICAgICAgICAgYW5zd2Vycz17ZWwuYW5zd2VyfVxuICAgICAgICAgICAgICAgIHNldE9wZW49e3NldE9wZW59XG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDxMb2NhdGlvbk1vZGFsIG9wZW49e29wZW59IHNldE9wZW49e3NldE9wZW59IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/questionAnswer.tsx\n");

/***/ })

});