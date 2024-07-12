"use strict";
exports.id = 708;
exports.ids = [708];
exports.modules = {

/***/ 9708:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MetaSeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8693);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7425);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_ai__WEBPACK_IMPORTED_MODULE_4__]);
react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Search = ({ data  })=>{
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const list_filter = [
        {
            id: 1,
            name: "All",
            value: "all"
        },
        {
            id: 1,
            name: "Ha Giang",
            value: "ha giang"
        },
        {
            id: 2,
            name: "Ha Noi",
            value: "ha noi"
        },
        {
            id: 3,
            name: "TP. Ho Chi Minh",
            value: "ho chi minh"
        },
        {
            id: 4,
            name: "Da Nang",
            value: "da nang"
        },
        {
            id: 5,
            name: "Ha Long",
            value: "ha long"
        }
    ];
    const dataSeo = {
        description: "Find inspiration for your next holiday in Vietnam, with insider guides to the country's best destinations, must-try tours and favourite local dishes, from Vietnam Tourism Board.",
        image: data?.data.thumbnail,
        title: "Explore Vietnam: Many things in Viet Nam",
        domain: "https://culturalvn.com",
        keywords: "vietnam tourism, vietnam travel, vietnam website",
        dataSchema: {
            mainEntityOfPage: `https://culturalvn.com/${router?.pathname.replace("/", "")}`,
            idUrl: `https://culturalvn.com/${router?.pathname.replace("/", "")}`,
            articleSection: router?.pathname.replace("/", "")
        }
    };
    const onChangePage = (page, limit)=>{
        let path = "";
        if (router?.query?.location) {
            path = `/search?location=${router?.query?.location}&page=${page}&limit=${limit}`;
        } else {
            path = `/search?page=${page}&limit=${limit}`;
        }
        router.push(path);
    };
    const onSearch = ()=>{
        if (!search) {
            return router.push("/search");
        }
        router.push(`/search?location=${search}`);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router?.query?.location) {
            setSearch(router.query.location);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetaSeo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...dataSeo
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-[#292929] img_post h-[200px] md:h-[400px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "all_post_containe container md:mt-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "all_post_filter w-[100%] pb-[30px] lg:flex",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "all_post_filter_items flex lg:w-[70%] items-center my-[10px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mr-[10px]",
                                            children: "Filter:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: list_filter?.map((val, idx)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "my-[5px] lg:my-[0]",
                                                    onClick: ()=>router?.push(`/${router?.pathname?.replace("/", "")}?location=${val?.value}`),
                                                    children: val?.name
                                                }, idx);
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "all_post_filter_search lg:w-[30%] my-[10px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "mr-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineSearch, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            placeholder: "Looking for location...",
                                            value: search,
                                            onChange: (e)=>setSearch(e.target.value),
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter") {
                                                    onSearch();
                                                }
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "btn_search",
                                            onClick: onSearch,
                                            children: "Search"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-[1250px] m-auto md:flex block",
                        children: data?.data?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[100%] py-[25px] px-[25px] md:px[0]",
                            children: data?.data?.map((val, idx)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "block md:flex cursor-pointer mb-[20px] items-center",
                                    onClick: ()=>{
                                        router?.push(`/${val?.category?.slug}/${val?.slug}`);
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "md:w-[30%] w-[100%]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: val?.thumbnail,
                                                alt: val?.slug,
                                                className: "w-[100%] h-[200px] object-cover rounded-[5px]",
                                                loading: "lazy"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "md:w-[70%] w-[100%] md:pl-[15px] pl-[0] py-[10px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "css_text_all_post my-[5px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "text-[18px] leading-[20px] font-semibold",
                                                        children: val?.title
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "my-[10px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-[16px] leading-[20px] css_search_text ",
                                                        children: val?.des_seo
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-[14px] font-semibold text-[#e53935] mr-5",
                                                            children: "Travel"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-[12px]",
                                                            children: moment__WEBPACK_IMPORTED_MODULE_6___default()(val.createdAt).format("ll")
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, idx);
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center w-[100%] items-center py-[100px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Empty, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "all_post_pagination my-[50px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "all_post_pagination_items",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Pagination, {
                                current: data?.page,
                                total: data?.total,
                                onChange: (e)=>onChangePage(e, 10)
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;