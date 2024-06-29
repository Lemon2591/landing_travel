"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 9935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sitemap_xml),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/sitemap.xml.js

const Sitemap = ()=>{};
const getServerSideProps = async ({ res  })=>{
    const baseUrl = {
        development: "https://culturalvn.com",
        production: "https://culturalvn.com"
    }["production"];
    external_fs_default().readdir(__dirname, function(err, files) {
        // handling error
        if (err) {
            return err;
        }
        // listing all files using forEach
        files.forEach(function(file) {
        // Do whatever you want to do with the file
        });
    });
    let staticPages = [
        "travel",
        "food",
        "culture"
    ].map((staticPagePath)=>{
        return `${baseUrl}/${staticPagePath}`;
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
/* harmony default export */ const sitemap_xml = (Sitemap);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9935));
module.exports = __webpack_exports__;

})();