"use strict";
exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 7181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9746);
/* harmony import */ var _MetaSeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8693);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_ai__WEBPACK_IMPORTED_MODULE_2__]);
react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const AllPost = (props)=>{
    const dataSeo = {
        description: "Discover the highlights of Vietnam through the country's official tourism website. Plan your trip with advice on Vietnam's best destinations, what to do in Vietnam, visas for Vietnam, where to go in Vietnam, and much more.",
        image: props?.data?.thumbnail,
        title: "Visit Vietnam: The Official Tourism Website of Vietnam",
        domain: "https://culturalvn.com",
        keywords: "vietnam tourism, vietnam travel, vietnam website"
    };
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const list_filter = [
        {
            id: 1,
            name: "All",
            value: "all"
        },
        {
            id: 1,
            name: "Ha Giang",
            value: "ha-giang"
        },
        {
            id: 2,
            name: "Ha Noi",
            value: "ha-noi"
        },
        {
            id: 3,
            name: "TP. Ho Chi Minh",
            value: "ho-chi-minh"
        },
        {
            id: 4,
            name: "Da Nang",
            value: "da-nang"
        },
        {
            id: 5,
            name: "Ha Long",
            value: "ha-long"
        }
    ];
    const getData = async (page = 1, limit = 9)=>{
        setLoading(true);
        try {
            const data_res = await (0,_util_helper__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(`/api/get-list-post?page=${page}&limit=${limit}`);
            setData(data_res?.data);
        } catch (error) {
            return error;
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            await getData();
        })();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetaSeo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                ...dataSeo
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "all_post",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-[#292929] img_post h-[200px] md:h-[400px]"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "all_post_containe container md:mt-10",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                                        onClick: ()=>router?.push(`/travel?location=${val?.value}`),
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
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineSearch, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                placeholder: "Looking for location..."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "btn_search",
                                                children: "Search"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " max-w-[1250px] m-auto  ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " w-[100%] lg:flex ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "lg:w-[80%] lg:pr-[8px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative cursor-pointer overflow-hidden rounded-[8px]",
                                                onClick: ()=>router?.push(`/travel/${props?.data[0]?.slug}?category=${props?.data[0]?.category.id}`),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "rounded-[8px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: props?.data[0]?.thumbnail,
                                                            alt: props?.data[0]?.slug,
                                                            className: "w-[100%] xl:h-[500px] object-cover"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "absolute lg:bottom-[20px] bottom-[10px] left-[10px] lg:left-[20px] lg:w-[90%] w-[95%] lg:px-[15px] lg:py-[10px] rounded-[10px]  px-[10px] py-[5px]",
                                                        style: {
                                                            backgroundColor: "rgba(0,0,0, .5)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "post_tag"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "post_title lg:!my-[10px] !my-[5px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "lg:!text-[26px] lg:!leading-[36px]  !text-[16px] !leading-[20px] max-h-[40px] lg:max-h-[78px]  overflow-hidden",
                                                                    children: props?.data[0]?.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "post_content_details",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "By"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "lg:text-[14px] text-[12px]",
                                                                                    children: "Cultural Viet Nam"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "lg:mr-[15px] mr-[10px]",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillCalendar, {})
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "lg:text-[14px] text-[12px]",
                                                                                    children: moment__WEBPACK_IMPORTED_MODULE_4___default()(props?.data[0]?.createdAt).format("ll")
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            className: "lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "lg:mr-[15px] mr-[10px]",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineEye, {})
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "lg:text-[14px] text-[12px]",
                                                                                    children: props?.data[0]?.view
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "lg:w-[20%] lg:pl-[8px] ",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "all-post-right lg:block flex lg:mt-[0] mt-5",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "cursor-pointer lg:mb-[20px]  lg:w-[100%] w-[50%] pr-[10px] lg:pr-[0]",
                                                        onClick: ()=>router?.push(`/travel/${props?.data[1]?.slug}?category=${props?.data[1]?.category.id}`),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "overflow-hidden pb-[5px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: props?.data[1]?.thumbnail,
                                                                    alt: props?.data[1]?.slug,
                                                                    className: "rounded-[8px] h-[100px] md:h-[200px] object-cover w-[100%] lg:h-[165px]"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "css_text_all_post my-[5px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "text-[16px] leading-[20px] font-semibold",
                                                                    children: props?.data[1]?.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center ",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-[14px] font-semibold text-[#e53935] mr-5",
                                                                        children: props?.data[1]?.category?.category_name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-[12px]",
                                                                        children: props?.data[1]?.createdAt && moment__WEBPACK_IMPORTED_MODULE_4___default()(props?.data[1]?.createdAt).format("ll")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "cursor-pointer lg:w-[100%] w-[50%] pl-[10px] lg:pl-[0]",
                                                        onClick: ()=>router?.push(`/travel/${props?.data[2]?.slug}?category=${props?.data[2]?.category.id}`),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "overflow-hidden pb-[5px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: props?.data[2]?.thumbnail,
                                                                    alt: props?.data[2]?.slug,
                                                                    className: "rounded-[8px] h-[100px] md:h-[200px] object-cover w-[100%] lg:h-[165px]"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "css_text_all_post my-[5px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "text-[16px] leading-[20px] font-semibold",
                                                                    children: props?.data[2]?.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center ",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-[14px] font-semibold text-[#e53935] mr-5",
                                                                        children: props?.data[2]?.category?.category_name
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "text-[12px]",
                                                                        children: [
                                                                            " ",
                                                                            props?.data[2]?.createdAt && moment__WEBPACK_IMPORTED_MODULE_4___default()(props?.data[2]?.createdAt).format("ll")
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "divider"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " max-w-[1250px] m-auto lg:flex block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:w-[80%] lg:pr-[8px] w-[100%]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[100%] flex flex-wrap justify-start ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                                active: true,
                                                loading: loading,
                                                children: data?.data?.map((val)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "cursor-pointer md:w-[50%] lg:w-[33.33%] px-[8px] py-[10px] w-[100%]",
                                                        onClick: ()=>router?.push(`/travel/${val?.slug}?category=${val?.category.id}`),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "overflow-hidden  pb-[5px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: val?.thumbnail,
                                                                    alt: val?.slug,
                                                                    className: "rounded-[8px] lg:h-[180px] object-cover w-[100%] md:h-[350px] h-[220px]"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "css_text_all_post my-[5px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "text-[16px] leading-[20px] font-semibold",
                                                                    children: val?.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center ",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-[14px] font-semibold text-[#e53935] mr-5",
                                                                        children: val?.category?.category_name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-[12px]",
                                                                        children: moment__WEBPACK_IMPORTED_MODULE_4___default()(val.createdAt).format("ll")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, val?.id);
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[20%] pl-[8px]"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "all_post_pagination my-[50px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "all_post_pagination_items",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
                                        defaultCurrent: data?.page,
                                        total: data?.total,
                                        onChange: (e)=>getData(e, 9)
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchApi = async (url)=>{
    try {
        const res = await fetch(`${"https://api.culturalvn.com"}${url}`, {
            headers: {
                "Content-Type": "application/json",
                key_w: `${"3J9EBJFE3"}`
            }
        });
        const obj = await res.json();
        if (!obj || obj.statusCode !== 200) {
            return {
                data: obj?.data
            };
        }
        return {
            data: obj?.data
        };
    // will be passed to the page component as props
    } catch (error) {
        return error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchApi);


/***/ })

};
;