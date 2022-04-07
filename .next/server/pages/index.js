/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./component/categoryBox.tsx":
/*!***********************************!*\
  !*** ./component/categoryBox.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CategoryBoxs\": function() { return /* binding */ CategoryBoxs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/component/categoryBox.tsx\";\n\n\n\n\n\n\n\nconst CategoryBox = ({\n  detail\n}) => {\n  const {\n    0: show,\n    1: setShow\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    boxShadow: \"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset\",\n    p: [5, 10],\n    borderRadius: \"lg\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {\n      w: \"100%\",\n      alignItems: \"unset\",\n      spacing: \"20px\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n        fontSize: \"xl\",\n        fontWeight: \"500\",\n        children: detail.category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {\n        startingHeight: 80,\n        in: show,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {\n          children: detail.subCategory.map(el => {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n              href: `search/${el.link}`,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n                cursor: \"pointer\",\n                alignItems: \"center\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCheck,\n                  color: \"green.500\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 21\n                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                  children: el.text\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 21\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 19\n              }, undefined)\n            }, el.link, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 17\n            }, undefined);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        onClick: () => setShow(!show),\n        children: show ? \"Less\" : \"Show more\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, undefined);\n};\n\nfunction CategoryBoxs() {\n  const {\n    0: categoryData,\n    1: setCategoryData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, \"categories\"), snapshot => setCategoryData(snapshot.docs.map(doc => doc.data())));\n  }, []);\n  categoryData.sort((a, b) => a.category > b.category ? 1 : -1);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n    columns: [1, 3],\n    gap: [6, 8],\n    children: categoryData && categoryData.map(el => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoryBox, {\n        detail: el\n      }, el.category, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 18\n      }, this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3VyY2UtY29kZS8uL2NvbXBvbmVudC9jYXRlZ29yeUJveC50c3g/ZmU0MSJdLCJuYW1lcyI6WyJDYXRlZ29yeUJveCIsImRldGFpbCIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJjYXRlZ29yeSIsInN1YkNhdGVnb3J5IiwibWFwIiwiZWwiLCJsaW5rIiwiRmFDaGVjayIsInRleHQiLCJDYXRlZ29yeUJveHMiLCJjYXRlZ29yeURhdGEiLCJzZXRDYXRlZ29yeURhdGEiLCJ1c2VFZmZlY3QiLCJvblNuYXBzaG90IiwiY29sbGVjdGlvbiIsImRiIiwic25hcHNob3QiLCJkb2NzIiwiZG9jIiwiZGF0YSIsInNvcnQiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFxQjtBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUVBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQ0Usa0JBQWMsRUFBRSxRQURsQjtBQUVFLGNBQVUsRUFBRSxRQUZkO0FBR0UsYUFBUyxFQUNQLDJIQUpKO0FBTUUsS0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FOTDtBQU9FLGdCQUFZLEVBQUUsSUFQaEI7QUFBQSwyQkFTRSw4REFBQyxvREFBRDtBQUFRLE9BQUMsRUFBQyxNQUFWO0FBQWlCLGdCQUFVLEVBQUUsT0FBN0I7QUFBc0MsYUFBTyxFQUFFLE1BQS9DO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBUSxFQUFFLElBQWhCO0FBQXNCLGtCQUFVLEVBQUUsS0FBbEM7QUFBQSxrQkFDR0gsTUFBTSxDQUFDSTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQyxzREFBRDtBQUFVLHNCQUFjLEVBQUUsRUFBMUI7QUFBOEIsVUFBRSxFQUFFSCxJQUFsQztBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQUEsb0JBQ0dELE1BQU0sQ0FBQ0ssV0FBUCxDQUFtQkMsR0FBbkIsQ0FBd0JDLEVBQUQsSUFBYTtBQUNuQyxnQ0FDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUcsVUFBU0EsRUFBRSxDQUFDQyxJQUFLLEVBQTlCO0FBQUEscUNBQ0UsOERBQUMsb0RBQUQ7QUFBUSxzQkFBTSxFQUFFLFNBQWhCO0FBQTJCLDBCQUFVLEVBQUUsUUFBdkM7QUFBQSx3Q0FDRSw4REFBQyxrREFBRDtBQUFNLG9CQUFFLEVBQUVDLG1EQUFWO0FBQW1CLHVCQUFLLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQUEsNEJBQU9GLEVBQUUsQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQXNDSCxFQUFFLENBQUNDLElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFRRCxXQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFrQkUsOERBQUMsb0RBQUQ7QUFBUSxlQUFPLEVBQUUsTUFBTU4sT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBOUI7QUFBQSxrQkFDR0EsSUFBSSxHQUFHLE1BQUgsR0FBWTtBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQ0QsQ0FyQ0Q7O0FBdUNPLFNBQVNVLFlBQVQsR0FBd0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDViwrQ0FBUSxDQUFNLEVBQU4sQ0FBaEQ7QUFFQVcsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RDLGtFQUFVLENBQUNDLDhEQUFVLENBQUNDLG1EQUFELEVBQUssWUFBTCxDQUFYLEVBQWdDQyxRQUFELElBQ3ZDTCxlQUFlLENBQUNLLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjYixHQUFkLENBQW1CYyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUEzQixDQUFELENBRFAsQ0FBVjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQVQsY0FBWSxDQUFDVSxJQUFiLENBQWtCLENBQUNDLENBQUQsRUFBU0MsQ0FBVCxLQUFxQkQsQ0FBQyxDQUFDbkIsUUFBRixHQUFhb0IsQ0FBQyxDQUFDcEIsUUFBZixHQUEwQixDQUExQixHQUE4QixDQUFDLENBQXRFO0FBRUEsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBWSxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFyQjtBQUE2QixPQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFsQztBQUFBLGNBQ0dRLFlBQVksSUFDWEEsWUFBWSxDQUFDTixHQUFiLENBQWtCQyxFQUFELElBQWE7QUFDNUIsMEJBQU8sOERBQUMsV0FBRDtBQUErQixjQUFNLEVBQUVBO0FBQXZDLFNBQWtCQSxFQUFFLENBQUNILFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNELEtBRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRCIsImZpbGUiOiIuL2NvbXBvbmVudC9jYXRlZ29yeUJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGbGV4LFxuICBTaW1wbGVHcmlkLFxuICBUZXh0LFxuICBDb2xsYXBzZSxcbiAgQnV0dG9uLFxuICBMaXN0LFxuICBJY29uLFxuICBWU3RhY2ssXG4gIEhTdGFjayxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIG9uU25hcHNob3QgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZS9jbGllbnRBcHBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQ2F0ZWdvcnlCb3ggPSAoeyBkZXRhaWwgfTogYW55KSA9PiB7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICBib3hTaGFkb3c9e1xuICAgICAgICBcInJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMTJweCAyOHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAycHggNHB4IDBweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSAwcHggMHB4IDBweCAxcHggaW5zZXRcIlxuICAgICAgfVxuICAgICAgcD17WzUsIDEwXX1cbiAgICAgIGJvcmRlclJhZGl1cz17XCJsZ1wifVxuICAgID5cbiAgICAgIDxWU3RhY2sgdz1cIjEwMCVcIiBhbGlnbkl0ZW1zPXtcInVuc2V0XCJ9IHNwYWNpbmc9e1wiMjBweFwifT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9e1wieGxcIn0gZm9udFdlaWdodD17XCI1MDBcIn0+XG4gICAgICAgICAge2RldGFpbC5jYXRlZ29yeX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Q29sbGFwc2Ugc3RhcnRpbmdIZWlnaHQ9ezgwfSBpbj17c2hvd30+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICB7ZGV0YWlsLnN1YkNhdGVnb3J5Lm1hcCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BzZWFyY2gvJHtlbC5saW5rfWB9IGtleT17ZWwubGlua30+XG4gICAgICAgICAgICAgICAgICA8SFN0YWNrIGN1cnNvcj17XCJwb2ludGVyXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17RmFDaGVja30gY29sb3I9XCJncmVlbi41MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dD57ZWwudGV4dH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9PlxuICAgICAgICAgIHtzaG93ID8gXCJMZXNzXCIgOiBcIlNob3cgbW9yZVwifVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yeUJveHMoKSB7XG4gIGNvbnN0IFtjYXRlZ29yeURhdGEsIHNldENhdGVnb3J5RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9uU25hcHNob3QoY29sbGVjdGlvbihkYiwgXCJjYXRlZ29yaWVzXCIpLCAoc25hcHNob3QpID0+XG4gICAgICBzZXRDYXRlZ29yeURhdGEoc25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSkpXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIGNhdGVnb3J5RGF0YS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gKGEuY2F0ZWdvcnkgPiBiLmNhdGVnb3J5ID8gMSA6IC0xKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXtbMSwgM119IGdhcD17WzYsIDhdfT5cbiAgICAgIHtjYXRlZ29yeURhdGEgJiZcbiAgICAgICAgY2F0ZWdvcnlEYXRhLm1hcCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8Q2F0ZWdvcnlCb3gga2V5PXtlbC5jYXRlZ29yeX0gZGV0YWlsPXtlbH0gLz47XG4gICAgICAgIH0pfVxuICAgIDwvU2ltcGxlR3JpZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/categoryBox.tsx\n");

/***/ }),

/***/ "./domain/index.tsx":
/*!**************************!*\
  !*** ./domain/index.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomePage\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_categoryBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/categoryBox */ \"./component/categoryBox.tsx\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./theme/index.ts\");\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/domain/index.tsx\";\n\n\n\nfunction HomePage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n    justifyContent: \"center\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {\n      alignItems: \"unset\",\n      maxW: _theme__WEBPACK_IMPORTED_MODULE_3__.maxWidth,\n      w: \"100%\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_categoryBox__WEBPACK_IMPORTED_MODULE_2__.CategoryBoxs, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3VyY2UtY29kZS8uL2RvbWFpbi9pbmRleC50c3g/MTQ0YSJdLCJuYW1lcyI6WyJIb21lUGFnZSIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULEdBQW9CO0FBQ3pCLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQWMsRUFBRSxRQUF0QjtBQUFBLDJCQUNFLDhEQUFDLG9EQUFEO0FBQVEsZ0JBQVUsRUFBRSxPQUFwQjtBQUE2QixVQUFJLEVBQUVDLDRDQUFuQztBQUE2QyxPQUFDLEVBQUMsTUFBL0M7QUFBQSw2QkFDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EIiwiZmlsZSI6Ii4vZG9tYWluL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBDYXRlZ29yeUJveHMgfSBmcm9tIFwiLi4vY29tcG9uZW50L2NhdGVnb3J5Qm94XCI7XG5pbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gXCIuLi90aGVtZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9PlxuICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPXtcInVuc2V0XCJ9IG1heFc9e21heFdpZHRofSB3PVwiMTAwJVwiPlxuICAgICAgICA8Q2F0ZWdvcnlCb3hzIC8+XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./domain/index.tsx\n");

/***/ }),

/***/ "./firebase/clientApp.ts":
/*!*******************************!*\
  !*** ./firebase/clientApp.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": function() { return /* binding */ db; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst firebaseApp = {\n  apiKey: \"AIzaSyAdyuZVdOCRoCEW6lFLdd6jDmxXlqu0Vpo\",\n  databaseURL: \"https://faq-project-28b5b-default-rtdb.firebaseio.com\",\n  authDomain: \"faq-project-28b5b.firebaseapp.com\",\n  projectId: \"faq-project-28b5b\",\n  storageBucket: \"faq-project-28b5b.appspot.com\",\n  messagingSenderId: \"564305809793\",\n  appId: \"1:564305809793:web:b4a4acfe0d70e9c8d81880\",\n  measurementId: \"G-J9HJC96LQ1\"\n};\nconst firebase = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length === 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseApp) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(firebase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3VyY2UtY29kZS8uL2ZpcmViYXNlL2NsaWVudEFwcC50cz81YzQ1Il0sIm5hbWVzIjpbImZpcmViYXNlQXBwIiwiYXBpS2V5IiwiZGF0YWJhc2VVUkwiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJnZXRBcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImdldEFwcCIsImRiIiwiZ2V0RmlyZXN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUc7QUFDbEJDLFFBQU0sRUFBRSx5Q0FEVTtBQUVsQkMsYUFBVyxFQUFFLHVEQUZLO0FBR2xCQyxZQUFVLEVBQUUsbUNBSE07QUFJbEJDLFdBQVMsRUFBRSxtQkFKTztBQUtsQkMsZUFBYSxFQUFFLCtCQUxHO0FBTWxCQyxtQkFBaUIsRUFBRSxjQU5EO0FBT2xCQyxPQUFLLEVBQUUsMkNBUFc7QUFRbEJDLGVBQWEsRUFBRTtBQVJHLENBQXBCO0FBV0EsTUFBTUMsUUFBUSxHQUFHQyxxREFBTyxHQUFHQyxNQUFWLEtBQXFCLENBQXJCLEdBQXlCQywyREFBYSxDQUFDWixXQUFELENBQXRDLEdBQXNEYSxvREFBTSxFQUE3RTtBQUVBLE1BQU1DLEVBQUUsR0FBR0MsZ0VBQVksQ0FBQ04sUUFBRCxDQUF2QiIsImZpbGUiOiIuL2ZpcmViYXNlL2NsaWVudEFwcC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcHMsIGdldEFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgZmlyZWJhc2VBcHAgPSB7XG4gIGFwaUtleTogXCJBSXphU3lBZHl1WlZkT0NSb0NFVzZsRkxkZDZqRG14WGxxdTBWcG9cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9mYXEtcHJvamVjdC0yOGI1Yi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcbiAgYXV0aERvbWFpbjogXCJmYXEtcHJvamVjdC0yOGI1Yi5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcImZhcS1wcm9qZWN0LTI4YjViXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZmFxLXByb2plY3QtMjhiNWIuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTY0MzA1ODA5NzkzXCIsXG4gIGFwcElkOiBcIjE6NTY0MzA1ODA5NzkzOndlYjpiNGE0YWNmZTBkNzBlOWM4ZDgxODgwXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1KOUhKQzk2TFExXCIsXG59O1xuXG5jb25zdCBmaXJlYmFzZSA9IGdldEFwcHMoKS5sZW5ndGggPT09IDAgPyBpbml0aWFsaXplQXBwKGZpcmViYXNlQXBwKSA6IGdldEFwcCgpO1xuXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShmaXJlYmFzZSk7XG5cbmV4cG9ydCB7IGRiIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/clientApp.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain */ \"./domain/index.tsx\");\n\nvar _jsxFileName = \"/Users/saihnaamunhuu/Documents/Faq-diplom/pages/index.tsx\";\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    py: \"60px\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_domain__WEBPACK_IMPORTED_MODULE_2__.HomePage, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3VyY2UtY29kZS8uL3BhZ2VzL2luZGV4LnRzeD9kYjc2Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNQSxJQUFjLEdBQUcsTUFBTTtBQUMzQixzQkFDRSw4REFBQyxpREFBRDtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQUEsMkJBQ0UsOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O0FBUUEsK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuLi9kb21haW5cIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBweT1cIjYwcHhcIj5cbiAgICAgIDxIb21lUGFnZSAvPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./theme/index.ts":
/*!************************!*\
  !*** ./theme/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maxWidth\": function() { return /* binding */ maxWidth; }\n/* harmony export */ });\nconst maxWidth = [\"95%\", \"95%\", \"90%\", \"90%\", \"1300px\"];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3VyY2UtY29kZS8uL3RoZW1lL2luZGV4LnRzPzcxOTgiXSwibmFtZXMiOlsibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsUUFBN0IsQ0FBakIiLCJmaWxlIjoiLi90aGVtZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1heFdpZHRoID0gW1wiOTUlXCIsIFwiOTUlXCIsIFwiOTAlXCIsIFwiOTAlXCIsIFwiMTMwMHB4XCJdO1xuXG5leHBvcnQgeyBtYXhXaWR0aCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme/index.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/firestore");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_lib_cjs_index_js","vendors-node_modules_react-icons_fa_index_esm_js"], function() { return __webpack_exec__("./pages/index.tsx"); });
module.exports = __webpack_exports__;

})();