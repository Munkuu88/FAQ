(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5006:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./theme/index.ts
var theme = __webpack_require__(3836);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/react-icons/cg/index.esm.js
var index_esm = __webpack_require__(471);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(5434);
;// CONCATENATED MODULE: ./layout/footer.tsx







const details = [{
  name: " БАЙГАЛЬ ЭХ ЛИЦЕЙ АХЛАХ СУРГУУЛЬ ",
  link: "/"
}, {
  name: "ЭКОЛОГИЙН БОЛОВСРОЛЫН ТӨВ",
  link: "/"
}, {
  name: " ДОТООД ДҮРЭМ ЖУРАМ",
  link: "/"
}, {
  name: " ЗАХИРГААНЫ ЗӨВЛӨЛИЙН МЭДЭЭЛЭЛ",
  link: "/"
}, {
  name: "АЖЛЫН БАЙР"
}];
const contacts = [{
  icon: md_index_esm/* MdLocationPin */.vcr,
  text: "Их сургуулийн гудамж - 1, Бага тойруу, Сүхбаатар дүүрэг, Улаанбаатар"
}, {
  icon: md_index_esm/* MdPhone */.IXo,
  text: "75754400, 77307730-1163"
}, {
  icon: md_index_esm/* MdEmail */.ixJ,
  text: "news@num.edu.mn"
}];
function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
    justifyContent: "center",
    pt: ["50px", "30px"],
    pb: ["100px", "30px"],
    borderTop: "1px solid gray",
    bg: "#153a75",
    color: "white",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
      w: "100%",
      maxW: theme/* maxWidth */.k,
      columns: [1, 3],
      gap: [8, 4],
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          h: "fit-content",
          cursor: "pointer",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            bg: "url(https://www.num.edu.mn/img/logo.png)",
            bgPos: "center",
            bgSize: "cover",
            boxSize: "60px"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            fontWeight: "bold",
            fontSize: "lg",
            children: "MUIS - FAQ"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
        w: "100%",
        alignItems: "unset",
        spacing: "15px",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "lg",
          fontWeight: "500",
          children: "\u0425\u043E\u043B\u0431\u043E\u043E\u0441\u0443\u0443\u0434"
        }), details.map((el, ind) => {
          return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `${el.link}`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
              cursor: "pointer",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                as: index_esm/* CgDetailsMore */.bRw
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                fontSize: "sm",
                children: el.name
              })]
            })
          }, ind);
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
        w: "100%",
        alignItems: "unset",
        spacing: "15px",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "lg",
          fontWeight: "500",
          children: "\u0425\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u0445"
        }), contacts.map((el, ind) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
              as: el.icon
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: "sm",
              children: el.text
            })]
          }, ind);
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./layout/header.tsx





const header_details = [{
  text: "Асуулт нэмэх",
  link: "/addQuestion"
}, {
  text: "Хайх",
  link: "/search"
}];
function Header() {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    w: "100%",
    pos: "fixed",
    borderBottom: "1px solid black",
    zIndex: "1",
    bg: "#1b4587",
    color: "white",
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      justifyContent: "center",
      py: "20px",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        justifyContent: "space-between",
        w: "100%",
        maxW: theme/* maxWidth */.k,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            cursor: "pointer",
            bg: "url(https://www.num.edu.mn/img/logo.png)",
            bgPos: "center",
            bgSize: "cover",
            boxSize: "50px"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
          spacing: "20px",
          children: header_details.map(el => {
            return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `${el.link}`,
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                textTransform: "uppercase",
                fontWeight: "bold",
                cursor: "pointer",
                children: el.text
              }, el.link)
            }, el.link);
          })
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./layout/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Layout({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    flexDir: "column",
    minH: "100vh",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      w: "100%",
      h: "75px"
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      flexGrow: 1
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}
;// CONCATENATED MODULE: ./pages/_app.tsx


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp(AppProps) {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Layout, _app_objectSpread({}, AppProps))
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 3836:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ maxWidth; }
/* harmony export */ });
const maxWidth = ["95%", "95%", "90%", "90%", "1300px"];


/***/ }),

/***/ 3426:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [599,139], function() { return __webpack_exec__(5006); });
module.exports = __webpack_exports__;

})();