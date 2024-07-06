"use strict";
exports.id = 693;
exports.ids = [693];
exports.modules = {

/***/ 8693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MetaSeo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


function MetaSeo(props) {
    const urlSeo = "https://culturalvn.com";
    let { url , type , title , description , image , domain , card , keywords , dataSchema  } = props;
    if (!url) {
        url = urlSeo;
    }
    if (!type) {
        type = "website";
    }
    if (!title) {
        title = "Visit Vietnam: The Official Tourism Website of Vietnam";
    }
    if (!description) {
        description = "Discover the highlights of Vietnam through the country's official tourism website. Plan your trip with advice on Vietnam's best destinations, what to do in Vietnam, visas for Vietnam, where to go in Vietnam, and much more.";
    }
    if (!image) {
        image = `${urlSeo}/assets/img/static/image_a.jpg`;
    }
    if (!domain) {
        domain = "https://culturalvn.com";
    }
    if (!card) {
        card = "summary_large_image";
    }
    if (!keywords) {
        keywords = "vietnam tourism, vietnam travel, vietnam website";
    }
    if (!dataSchema) {
        const data = {
            mainEntityOfPage: "https://culturalvn.com",
            idUrl: "https://culturalvn.com",
            articleSection: "Travel",
            datePublished: "",
            dateModified: ""
        };
        dataSchema = data;
    }
    const schema = {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        mainEntityOfPage: `${dataSchema.mainEntityOfPage}/#WebPage`,
        "@id": `${dataSchema.idUrl}/#NewsArticle`,
        headline: title,
        name: title,
        description: description,
        articleSection: dataSchema.articleSection,
        inLanguage: "vi,en",
        url: url,
        image: {
            "@context": "http://schema.org",
            "@type": "ImageObject",
            url: image,
            caption: title,
            width: "1200",
            height: "630"
        },
        isPartOf: {
            "@type": "CollectionPage",
            "@id": dataSchema.idUrl,
            name: dataSchema.articleSection,
            abstract: title,
            publisher: {
                "@id": `${urlSeo}/#Organization`
            }
        },
        author: {
            "@context": "http://schema.org",
            "@type": "Person",
            "@id": `${urlSeo}#Person`,
            name: "Cultural Viet Nam",
            url: urlSeo,
            worksFor: {
                "@id": `${urlSeo}/#Organization`
            }
        },
        datePublished: dataSchema?.datePublished,
        dateModified: dataSchema?.dateModified,
        publisher: {
            "@id": `${urlSeo}/#Organization`
        },
        keywords: keywords?.split(",")
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "news_keywords",
                    content: keywords
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:url",
                    content: url
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:type",
                    content: type
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:title",
                    content: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:description",
                    content: description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: image
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "keywords",
                    content: keywords
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:card",
                    content: card
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "twitter:domain",
                    content: domain
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "twitter:url",
                    content: url
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:title",
                    content: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:description",
                    content: description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:image",
                    content: image
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(schema)
                    }
                })
            ]
        })
    });
}


/***/ })

};
;