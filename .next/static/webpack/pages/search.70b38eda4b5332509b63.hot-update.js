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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuestionAnswer\": function() { return /* binding */ QuestionAnswer; }\n/* harmony export */ });\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/component/questionAnswer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar LocationModal = function LocationModal(_ref) {\n  var open = _ref.open,\n      setOpen = _ref.setOpen,\n      location = _ref.location;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Modal, {\n      isOpen: open,\n      onClose: function onClose() {\n        return setOpen(false);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalOverlay, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalContent, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalHeader, {\n          children: \"\\u0425\\u043E\\u043B\\u0431\\u043E\\u043E \\u0431\\u0430\\u0440\\u0438\\u0445 \\u0433\\u0430\\u0437\\u0430\\u0440 \\u0431\\u043E\\u043B\\u043E\\u043D \\u043C\\u044D\\u0434\\u044D\\u044D\\u043B\\u044D\\u043B\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalCloseButton, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {\n          children: location\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = LocationModal;\n\nvar QuestionAnswerDetail = function QuestionAnswerDetail(_ref2) {\n  var question = _ref2.question,\n      answers = _ref2.answers,\n      setOpen = _ref2.setOpen,\n      open = _ref2.open,\n      setLocation = _ref2.setLocation,\n      place = _ref2.place;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionItem, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionButton, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n          flex: \"1\",\n          textAlign: \"left\",\n          children: question\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionIcon, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AccordionPanel, {\n      pb: 4,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.List, {\n        children: answers.map(function (el, ind) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ListItem, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                fill: \"green\",\n                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCheck\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                children: el\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 17\n            }, _this), \" \"]\n          }, ind, true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n        onClick: function onClick() {\n          setOpen(true), setLocation(place);\n        },\n        children: \"\\u0425\\u043E\\u043B\\u0431\\u043E\\u0433\\u0434\\u043E\\u0445 \\u0433\\u0430\\u0437\\u0430\\u0440\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = QuestionAnswerDetail;\nfunction QuestionAnswer(_ref3) {\n  _s();\n\n  var _this2 = this;\n\n  var sortGetData = _ref3.sortGetData;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      questionsData = _useState[0],\n      setQuestionsData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      location = _useState3[0],\n      setLocation = _useState3[1];\n\n  var getDatas = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var data;\n      return _Users_saihnaamunhuu_Documents_Faq_diplom_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, \"questions\"));\n\n            case 2:\n              data = _context.sent;\n              data.forEach(function (el) {\n                return setQuestionsData(el.data().data);\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getDatas() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    getDatas();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Accordion, {\n      allowToggle: true,\n      w: \"100%\",\n      defaultIndex: [1],\n      children: sortGetData && sortGetData.map(function (el) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(QuestionAnswerDetail, {\n          question: el.question,\n          answers: el.answer,\n          setOpen: setOpen,\n          open: open,\n          setLocation: setLocation,\n          place: el.location\n        }, el.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 15\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(LocationModal, {\n      open: open,\n      setOpen: setOpen,\n      location: location\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(QuestionAnswer, \"f/awgM0FobeXKzn0vAREpiwdv+k=\");\n\n_c3 = QuestionAnswer;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"LocationModal\");\n$RefreshReg$(_c2, \"QuestionAnswerDetail\");\n$RefreshReg$(_c3, \"QuestionAnswer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3F1ZXN0aW9uQW5zd2VyLnRzeD9hZThlIl0sIm5hbWVzIjpbIkxvY2F0aW9uTW9kYWwiLCJvcGVuIiwic2V0T3BlbiIsImxvY2F0aW9uIiwiUXVlc3Rpb25BbnN3ZXJEZXRhaWwiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJzZXRMb2NhdGlvbiIsInBsYWNlIiwibWFwIiwiZWwiLCJpbmQiLCJGYUNoZWNrIiwiUXVlc3Rpb25BbnN3ZXIiLCJzb3J0R2V0RGF0YSIsInVzZVN0YXRlIiwicXVlc3Rpb25zRGF0YSIsInNldFF1ZXN0aW9uc0RhdGEiLCJnZXREYXRhcyIsImdldERvY3MiLCJjb2xsZWN0aW9uIiwiZGIiLCJkYXRhIiwiZm9yRWFjaCIsInVzZUVmZmVjdCIsImFuc3dlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFzQztBQUFBLE1BQW5DQyxJQUFtQyxRQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsT0FBNkIsUUFBN0JBLE9BQTZCO0FBQUEsTUFBcEJDLFFBQW9CLFFBQXBCQSxRQUFvQjtBQUMxRCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLG1EQUFEO0FBQU8sWUFBTSxFQUFFRixJQUFmO0FBQXFCLGFBQU8sRUFBRTtBQUFBLGVBQU1DLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQSxPQUE5QjtBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsZ0NBQ0UsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UsOERBQUMsdURBQUQ7QUFBQSxvQkFBWUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBWUQsQ0FiRDs7S0FBTUgsYTs7QUFlTixJQUFNSSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLFFBT2xCO0FBQUEsTUFOVEMsUUFNUyxTQU5UQSxRQU1TO0FBQUEsTUFMVEMsT0FLUyxTQUxUQSxPQUtTO0FBQUEsTUFKVEosT0FJUyxTQUpUQSxPQUlTO0FBQUEsTUFIVEQsSUFHUyxTQUhUQSxJQUdTO0FBQUEsTUFGVE0sV0FFUyxTQUZUQSxXQUVTO0FBQUEsTUFEVEMsS0FDUyxTQURUQSxLQUNTO0FBQ1Qsc0JBQ0UsOERBQUMsMkRBQUQ7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLDhEQUFDLDZEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsaURBQUQ7QUFBSyxjQUFJLEVBQUMsR0FBVjtBQUFjLG1CQUFTLEVBQUMsTUFBeEI7QUFBQSxvQkFDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFTRSw4REFBQyw0REFBRDtBQUFnQixRQUFFLEVBQUUsQ0FBcEI7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFBLGtCQUNHQyxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxFQUFELEVBQWFDLEdBQWIsRUFBNkI7QUFDeEMsOEJBQ0UsOERBQUMsc0RBQUQ7QUFBQSxvQ0FDRSw4REFBQyxvREFBRDtBQUFBLHNDQUNFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBRSxPQUFaO0FBQXFCLGtCQUFFLEVBQUVDLG1EQUFPQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBQSwwQkFBT0Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUlZLEdBSlo7QUFBQSxhQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFRRCxTQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBYUUsOERBQUMsb0RBQUQ7QUFDRSxlQUFPLEVBQUUsbUJBQU07QUFDYlQsaUJBQU8sQ0FBQyxJQUFELENBQVAsRUFBZUssV0FBVyxDQUFDQyxLQUFELENBQTFCO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUNELENBekNEOztNQUFNSixvQjtBQTJDQyxTQUFTUyxjQUFULFFBQThDO0FBQUE7O0FBQUE7O0FBQUEsTUFBcEJDLFdBQW9CLFNBQXBCQSxXQUFvQjs7QUFBQSxrQkFDVEMsK0NBQVEsRUFEQztBQUFBLE1BQzVDQyxhQUQ0QztBQUFBLE1BQzdCQyxnQkFENkI7O0FBQUEsbUJBRTNCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGbUI7QUFBQSxNQUU1Q2QsSUFGNEM7QUFBQSxNQUV0Q0MsT0FGc0M7O0FBQUEsbUJBR25CYSwrQ0FBUSxDQUFDLEVBQUQsQ0FIVztBQUFBLE1BRzVDWixRQUg0QztBQUFBLE1BR2xDSSxXQUhrQzs7QUFLbkQsTUFBTVcsUUFBUTtBQUFBLDBVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0lDLDJEQUFPLENBQUNDLDhEQUFVLENBQUNDLG1EQUFELEVBQUssV0FBTCxDQUFYLENBRFg7O0FBQUE7QUFDVEMsa0JBRFM7QUFFZkEsa0JBQUksQ0FBQ0MsT0FBTCxDQUFhLFVBQUNiLEVBQUQ7QUFBQSx1QkFBUU8sZ0JBQWdCLENBQUNQLEVBQUUsQ0FBQ1ksSUFBSCxHQUFVQSxJQUFYLENBQXhCO0FBQUEsZUFBYjs7QUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSSixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBSUFNLGtEQUFTLENBQUMsWUFBTTtBQUNkTixZQUFRO0FBQ1QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsdURBQUQ7QUFBVyxpQkFBVyxNQUF0QjtBQUF1QixPQUFDLEVBQUUsTUFBMUI7QUFBa0Msa0JBQVksRUFBRSxDQUFDLENBQUQsQ0FBaEQ7QUFBQSxnQkFDR0osV0FBVyxJQUNWQSxXQUFXLENBQUNMLEdBQVosQ0FBZ0IsVUFBQ0MsRUFBRCxFQUFhO0FBQzNCLDRCQUNFLDhEQUFDLG9CQUFEO0FBRUUsa0JBQVEsRUFBRUEsRUFBRSxDQUFDTCxRQUZmO0FBR0UsaUJBQU8sRUFBRUssRUFBRSxDQUFDZSxNQUhkO0FBSUUsaUJBQU8sRUFBRXZCLE9BSlg7QUFLRSxjQUFJLEVBQUVELElBTFI7QUFNRSxxQkFBVyxFQUFFTSxXQU5mO0FBT0UsZUFBSyxFQUFFRyxFQUFFLENBQUNQO0FBUFosV0FDT08sRUFBRSxDQUFDZ0IsRUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBV0QsT0FaRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWlCRSw4REFBQyxhQUFEO0FBQWUsVUFBSSxFQUFFekIsSUFBckI7QUFBMkIsYUFBTyxFQUFFQyxPQUFwQztBQUE2QyxjQUFRLEVBQUVDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkY7QUFBQSxrQkFERjtBQXFCRDs7R0FsQ2VVLGM7O01BQUFBLGMiLCJmaWxlIjoiLi9jb21wb25lbnQvcXVlc3Rpb25BbnN3ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25CdXR0b24sXG4gIEJveCxcbiAgQWNjb3JkaW9uSWNvbixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBIU3RhY2ssXG4gIEljb24sXG4gIFRleHQsXG4gIEJ1dHRvbixcbiAgTW9kYWwsXG4gIHVzZURpc2Nsb3N1cmUsXG4gIE1vZGFsT3ZlcmxheSxcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxCb2R5LFxuICBNb2RhbENsb3NlQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2UvY2xpZW50QXBwXCI7XG5pbXBvcnQgeyBGYUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBMb2NhdGlvbk1vZGFsID0gKHsgb3Blbiwgc2V0T3BlbiwgbG9jYXRpb24gfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCBpc09wZW49e29wZW59IG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICAgIDxNb2RhbEhlYWRlcj7QpdC+0LvQsdC+0L4g0LHQsNGA0LjRhSDQs9Cw0LfQsNGAINCx0L7Qu9C+0L0g0LzRjdC00Y3RjdC70Y3QuzwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgICA8TW9kYWxCb2R5Pntsb2NhdGlvbn08L01vZGFsQm9keT5cbiAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgUXVlc3Rpb25BbnN3ZXJEZXRhaWwgPSAoe1xuICBxdWVzdGlvbixcbiAgYW5zd2VycyxcbiAgc2V0T3BlbixcbiAgb3BlbixcbiAgc2V0TG9jYXRpb24sXG4gIHBsYWNlLFxufTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICA8aDI+XG4gICAgICAgIDxBY2NvcmRpb25CdXR0b24+XG4gICAgICAgICAgPEJveCBmbGV4PVwiMVwiIHRleHRBbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgIHtxdWVzdGlvbn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxuICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cbiAgICAgIDwvaDI+XG4gICAgICA8QWNjb3JkaW9uUGFuZWwgcGI9ezR9PlxuICAgICAgICA8TGlzdD5cbiAgICAgICAgICB7YW5zd2Vycy5tYXAoKGVsOiBzdHJpbmcsIGluZDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpbmR9PlxuICAgICAgICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBmaWxsPXtcImdyZWVuXCJ9IGFzPXtGYUNoZWNrfSAvPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+e2VsfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0hTdGFjaz57XCIgXCJ9XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRPcGVuKHRydWUpLCBzZXRMb2NhdGlvbihwbGFjZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgINCl0L7Qu9Cx0L7Qs9C00L7RhSDQs9Cw0LfQsNGAXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUXVlc3Rpb25BbnN3ZXIoeyBzb3J0R2V0RGF0YSB9OiBhbnkpIHtcbiAgY29uc3QgW3F1ZXN0aW9uc0RhdGEsIHNldFF1ZXN0aW9uc0RhdGFdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZ2V0RGF0YXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJxdWVzdGlvbnNcIikpO1xuICAgIGRhdGEuZm9yRWFjaCgoZWwpID0+IHNldFF1ZXN0aW9uc0RhdGEoZWwuZGF0YSgpLmRhdGEpKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREYXRhcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFjY29yZGlvbiBhbGxvd1RvZ2dsZSB3PXtcIjEwMCVcIn0gZGVmYXVsdEluZGV4PXtbMV19PlxuICAgICAgICB7c29ydEdldERhdGEgJiZcbiAgICAgICAgICBzb3J0R2V0RGF0YS5tYXAoKGVsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxRdWVzdGlvbkFuc3dlckRldGFpbFxuICAgICAgICAgICAgICAgIGtleT17ZWwuaWR9XG4gICAgICAgICAgICAgICAgcXVlc3Rpb249e2VsLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgIGFuc3dlcnM9e2VsLmFuc3dlcn1cbiAgICAgICAgICAgICAgICBzZXRPcGVuPXtzZXRPcGVufVxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgc2V0TG9jYXRpb249e3NldExvY2F0aW9ufVxuICAgICAgICAgICAgICAgIHBsYWNlPXtlbC5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDxMb2NhdGlvbk1vZGFsIG9wZW49e29wZW59IHNldE9wZW49e3NldE9wZW59IGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/questionAnswer.tsx\n");

/***/ })

});