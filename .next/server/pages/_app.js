(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./src/app/components/Navbar.tsx



// a header component that displays the title of the app and the current topic name
const Navbar = ()=>{
    const ReloadApp = ()=>{
        window.location.reload();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full fixed bg-white h-16 min-h-16 bg-transparent flex ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-full w-[50px] grid place-content-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full  h-full grid place-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(bi_namespaceObject.BiHomeSmile, {
                        onClick: ()=>ReloadApp(),
                        className: "text-3xl cursor-pointer hover:text-blue-400"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-full w-[50px] grid place-content-center ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full h-full grid place-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineReload, {
                        onClick: ()=>ReloadApp(),
                        className: "text-3xl cursor-pointer hover:text-blue-400"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/app/components/Layout.tsx



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            children
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4405));
module.exports = __webpack_exports__;

})();