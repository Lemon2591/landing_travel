"use strict";
(() => {
var exports = {};
exports.id = 874;
exports.ids = [874];
exports.modules = {

/***/ 1624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _util_keyInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8073);

const Sitemap = ()=>{};
const getServerSideProps = async ({ query , res , resolvedUrl  })=>{
    const baseUrl = {
        development: "https://culturalvn.com",
        production: "https://culturalvn.com"
    }["production"];
    const res_data = await fetch(`${process.env.API_SERVER_URL}/api/get-feature-post`, {
        headers: {
            "Content-Type": "application/json",
            key: _util_keyInstance__WEBPACK_IMPORTED_MODULE_0__/* .KEY */ .F,
            location: query?.location || "all",
            category: resolvedUrl?.replace("/", "")
        }
    });
    const obj = await res_data.json();
    if (!obj || obj.code !== 200) {
        return {
            notFound: true
        };
    }
    let staticPages = data.data.map((item)=>{
        return `${baseUrl}/food/${item.slug}`;
    });
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map((url)=>{
        return `
            <url>
              <loc>${(url || "").replace(".html", "")}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
    }).join("")}
    </urlset>
  `;
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sitemap);


/***/ }),

/***/ 8073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ KEY)
/* harmony export */ });
const KEY = "3J9EBJFE3";


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1624));
module.exports = __webpack_exports__;

})();