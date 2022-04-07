/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "firebase_clientApp_ts-theme_index_ts";
exports.ids = ["firebase_clientApp_ts-theme_index_ts"];
exports.modules = {

/***/ "./firebase/clientApp.ts":
/*!*******************************!*\
  !*** ./firebase/clientApp.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": function() { return /* binding */ db; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst firebaseApp = {\n  apiKey: \"AIzaSyAdyuZVdOCRoCEW6lFLdd6jDmxXlqu0Vpo\",\n  databaseURL: \"https://faq-project-28b5b-default-rtdb.firebaseio.com\",\n  authDomain: \"faq-project-28b5b.firebaseapp.com\",\n  projectId: \"faq-project-28b5b\",\n  storageBucket: \"faq-project-28b5b.appspot.com\",\n  messagingSenderId: \"564305809793\",\n  appId: \"1:564305809793:web:b4a4acfe0d70e9c8d81880\",\n  measurementId: \"G-J9HJC96LQ1\"\n};\nconst firebase = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length === 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseApp) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(firebase);\n // apiKey: ,\n// authDomain: ,\n// projectId: ,\n// storageBucket: ,\n// messagingSenderId: ,\n// appId: \",//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3VyY2UtY29kZS8uL2ZpcmViYXNlL2NsaWVudEFwcC50cz81YzQ1Il0sIm5hbWVzIjpbImZpcmViYXNlQXBwIiwiYXBpS2V5IiwiZGF0YWJhc2VVUkwiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJnZXRBcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImdldEFwcCIsImRiIiwiZ2V0RmlyZXN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUc7QUFDbEJDLFFBQU0sRUFBRSx5Q0FEVTtBQUVsQkMsYUFBVyxFQUFFLHVEQUZLO0FBR2xCQyxZQUFVLEVBQUUsbUNBSE07QUFJbEJDLFdBQVMsRUFBRSxtQkFKTztBQUtsQkMsZUFBYSxFQUFFLCtCQUxHO0FBTWxCQyxtQkFBaUIsRUFBRSxjQU5EO0FBT2xCQyxPQUFLLEVBQUUsMkNBUFc7QUFRbEJDLGVBQWEsRUFBRTtBQVJHLENBQXBCO0FBV0EsTUFBTUMsUUFBUSxHQUFHQyxxREFBTyxHQUFHQyxNQUFWLEtBQXFCLENBQXJCLEdBQXlCQywyREFBYSxDQUFDWixXQUFELENBQXRDLEdBQXNEYSxvREFBTSxFQUE3RTtBQUVBLE1BQU1DLEVBQUUsR0FBR0MsZ0VBQVksQ0FBQ04sUUFBRCxDQUF2QjtDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2ZpcmViYXNlL2NsaWVudEFwcC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcHMsIGdldEFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgZmlyZWJhc2VBcHAgPSB7XG4gIGFwaUtleTogXCJBSXphU3lBZHl1WlZkT0NSb0NFVzZsRkxkZDZqRG14WGxxdTBWcG9cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9mYXEtcHJvamVjdC0yOGI1Yi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcbiAgYXV0aERvbWFpbjogXCJmYXEtcHJvamVjdC0yOGI1Yi5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcImZhcS1wcm9qZWN0LTI4YjViXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZmFxLXByb2plY3QtMjhiNWIuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTY0MzA1ODA5NzkzXCIsXG4gIGFwcElkOiBcIjE6NTY0MzA1ODA5NzkzOndlYjpiNGE0YWNmZTBkNzBlOWM4ZDgxODgwXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1KOUhKQzk2TFExXCIsXG59O1xuXG5jb25zdCBmaXJlYmFzZSA9IGdldEFwcHMoKS5sZW5ndGggPT09IDAgPyBpbml0aWFsaXplQXBwKGZpcmViYXNlQXBwKSA6IGdldEFwcCgpO1xuXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShmaXJlYmFzZSk7XG5cbmV4cG9ydCB7IGRiIH07XG5cbi8vIGFwaUtleTogLFxuLy8gYXV0aERvbWFpbjogLFxuLy8gcHJvamVjdElkOiAsXG4vLyBzdG9yYWdlQnVja2V0OiAsXG4vLyBtZXNzYWdpbmdTZW5kZXJJZDogLFxuLy8gYXBwSWQ6IFwiLFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/clientApp.ts\n");

/***/ }),

/***/ "./theme/index.ts":
/*!************************!*\
  !*** ./theme/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maxWidth\": function() { return /* binding */ maxWidth; }\n/* harmony export */ });\nconst maxWidth = [\"95%\", \"95%\", \"90%\", \"90%\", \"1300px\"];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3VyY2UtY29kZS8uL3RoZW1lL2luZGV4LnRzPzcxOTgiXSwibmFtZXMiOlsibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsUUFBN0IsQ0FBakIiLCJmaWxlIjoiLi90aGVtZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1heFdpZHRoID0gW1wiOTUlXCIsIFwiOTUlXCIsIFwiOTAlXCIsIFwiOTAlXCIsIFwiMTMwMHB4XCJdO1xuXG5leHBvcnQgeyBtYXhXaWR0aCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme/index.ts\n");

/***/ })

};
;