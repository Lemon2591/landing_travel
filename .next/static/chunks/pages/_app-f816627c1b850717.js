(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7090:function(e){var t,n;n=function(e,t,n){"use strict";if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in et=e.lazySizesConfig||e.lazysizesConfig||{},n)t in et||(et[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:et,noSupport:!0};var r,a,i,o,l,c,s,u,f,d,h,p,v,m,g,x,y,b,j,C,_,z,N,w,O,E,M,A,P,L,T,k,S,R,H,B,I,F,D,W,U,V,q,K,$,Z,X,G,Y,J,Q,ee,et,en=t.documentElement,er=e.HTMLPictureElement,ea="addEventListener",ei="getAttribute",eo=e[ea].bind(e),el=e.setTimeout,ec=e.requestAnimationFrame||el,es=e.requestIdleCallback,eu=/^picture$/i,ef=["load","error","lazyincluded","_lazyloaded"],ed={},eh=Array.prototype.forEach,ep=function(e,t){return ed[t]||(ed[t]=RegExp("(\\s|^)"+t+"(\\s|$)")),ed[t].test(e[ei]("class")||"")&&ed[t]},ev=function(e,t){ep(e,t)||e.setAttribute("class",(e[ei]("class")||"").trim()+" "+t)},em=function(e,t){var n;(n=ep(e,t))&&e.setAttribute("class",(e[ei]("class")||"").replace(n," "))},eg=function(e,t,n){var r=n?ea:"removeEventListener";n&&eg(e,t),ef.forEach(function(n){e[r](n,t)})},ex=function(e,n,r,a,i){var o=t.createEvent("Event");return r||(r={}),r.instance=ee,o.initEvent(n,!a,!i),o.detail=r,e.dispatchEvent(o),o},ey=function(t,n){var r;!er&&(r=e.picturefill||et.pf)?(n&&n.src&&!t[ei]("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},eb=function(e,t){return(getComputedStyle(e,null)||{})[t]},ej=function(e,t,n){for(n=n||e.offsetWidth;n<et.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},eC=(h=[],p=d=[],v=function(){var e=p;for(p=d.length?h:d,u=!0,f=!1;e.length;)e.shift()();u=!1},(m=function(e,n){u&&!n?e.apply(this,arguments):(p.push(e),f||(f=!0,(t.hidden?el:ec)(v)))})._lsFlush=v,m),e_=function(e,t){return t?function(){eC(e)}:function(){var t=this,n=arguments;eC(function(){e.apply(t,n)})}},ez=function(e){var t,r,a=function(){t=null,e()},i=function(){var e=n.now()-r;e<99?el(i,99-e):(es||a)(a)};return function(){r=n.now(),t||(t=el(i,99))}},eN=(M=/^img$/i,A=/^iframe$/i,P="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),L=0,T=0,k=-1,S=function(e){T--,e&&!(T<0)&&e.target||(T=0)},R=function(e){return null==E&&(E="hidden"==eb(t.body,"visibility")),E||!("hidden"==eb(e.parentNode,"visibility")&&"hidden"==eb(e,"visibility"))},H=function(e,n){var r,a=e,i=R(e);for(z-=n,O+=n,N-=n,w+=n;i&&(a=a.offsetParent)&&a!=t.body&&a!=en;)(i=(eb(a,"opacity")||1)>0)&&"visible"!=eb(a,"overflow")&&(i=w>(r=a.getBoundingClientRect()).left&&N<r.right&&O>r.top-1&&z<r.bottom+1);return i},r=B=function(){var e,n,r,a,i,o,l,c,s,u,f,d,h=ee.elements;if((b=et.loadMode)&&T<8&&(e=h.length)){for(n=0,k++;n<e;n++)if(h[n]&&!h[n]._lazyRace){if(!P||ee.prematureUnveil&&ee.prematureUnveil(h[n])){K(h[n]);continue}if((c=h[n][ei]("data-expand"))&&(o=1*c)||(o=L),u||(u=!et.expand||et.expand<1?en.clientHeight>500&&en.clientWidth>500?500:370:et.expand,ee._defEx=u,f=u*et.expFactor,d=et.hFac,E=null,L<f&&T<1&&k>2&&b>2&&!t.hidden?(L=f,k=0):L=b>1&&k>1&&T<6?u:0),s!==o&&(C=innerWidth+o*d,_=innerHeight+o,l=-1*o,s=o),(O=(r=h[n].getBoundingClientRect()).bottom)>=l&&(z=r.top)<=_&&(w=r.right)>=l*d&&(N=r.left)<=C&&(O||w||N||z)&&(et.loadHidden||R(h[n]))&&(x&&T<3&&!c&&(b<3||k<4)||H(h[n],o))){if(K(h[n]),i=!0,T>9)break}else!i&&x&&!a&&T<4&&k<4&&b>2&&(g[0]||et.preloadAfterLoad)&&(g[0]||!c&&(O||w||N||z||"auto"!=h[n][ei](et.sizesAttr)))&&(a=g[0]||h[n])}a&&!i&&K(a)}},i=0,o=et.throttleDelay,l=et.ricTimeout,c=function(){a=!1,i=n.now(),r()},s=es&&l>49?function(){es(c,{timeout:l}),l!==et.ricTimeout&&(l=et.ricTimeout)}:e_(function(){el(c)},!0),I=function(e){var t;(e=!0===e)&&(l=33),a||(a=!0,(t=o-(n.now()-i))<0&&(t=0),e||t<9?s():el(s,t))},D=e_(F=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}S(e),ev(t,et.loadedClass),em(t,et.loadingClass),eg(t,W),ex(t,"lazyloaded")}),W=function(e){D({target:e.target})},U=function(e,t){var n=e.getAttribute("data-load-mode")||et.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},V=function(e){var t,n=e[ei](et.srcsetAttr);(t=et.customMedia[e[ei]("data-media")||e[ei]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},q=e_(function(e,t,n,r,a){var i,o,l,c,s,u;!(s=ex(e,"lazybeforeunveil",t)).defaultPrevented&&(r&&(n?ev(e,et.autosizesClass):e.setAttribute("sizes",r)),o=e[ei](et.srcsetAttr),i=e[ei](et.srcAttr),a&&(c=(l=e.parentNode)&&eu.test(l.nodeName||"")),u=t.firesLoad||"src"in e&&(o||i||c),s={target:e},ev(e,et.loadingClass),u&&(clearTimeout(y),y=el(S,2500),eg(e,W,!0)),c&&eh.call(l.getElementsByTagName("source"),V),o?e.setAttribute("srcset",o):i&&!c&&(A.test(e.nodeName)?U(e,i):e.src=i),a&&(o||c)&&ey(e,{src:i})),e._lazyRace&&delete e._lazyRace,em(e,et.lazyClass),eC(function(){var t=e.complete&&e.naturalWidth>1;(!u||t)&&(t&&ev(e,et.fastLoadedClass),F(s),e._lazyCache=!0,el(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&T--},!0)}),K=function(e){if(!e._lazyRace){var t,n=M.test(e.nodeName),r=n&&(e[ei](et.sizesAttr)||e[ei]("sizes")),a="auto"==r;(a||!x)&&n&&(e[ei]("src")||e.srcset)&&!e.complete&&!ep(e,et.errorClass)&&ep(e,et.lazyClass)||(t=ex(e,"lazyunveilread").detail,a&&ew.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,T++,q(e,t,a,r,n))}},$=ez(function(){et.loadMode=3,I()}),Z=function(){3==et.loadMode&&(et.loadMode=2),$()},X=function(){if(!x){if(n.now()-j<999){el(X,999);return}x=!0,et.loadMode=3,I(),eo("scroll",Z,!0)}},{_:function(){j=n.now(),ee.elements=t.getElementsByClassName(et.lazyClass),g=t.getElementsByClassName(et.lazyClass+" "+et.preloadClass),eo("scroll",I,!0),eo("resize",I,!0),eo("pageshow",function(e){if(e.persisted){var n=t.querySelectorAll("."+et.loadingClass);n.length&&n.forEach&&ec(function(){n.forEach(function(e){e.complete&&K(e)})})}}),e.MutationObserver?new MutationObserver(I).observe(en,{childList:!0,subtree:!0,attributes:!0}):(en[ea]("DOMNodeInserted",I,!0),en[ea]("DOMAttrModified",I,!0),setInterval(I,999)),eo("hashchange",I,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[ea](e,I,!0)}),/d$|^c/.test(t.readyState)?X():(eo("load",X),t[ea]("DOMContentLoaded",I),el(X,2e4)),ee.elements.length?(B(),eC._lsFlush()):I()},checkElems:I,unveil:K,_aLSL:Z}),ew=(Y=e_(function(e,t,n,r){var a,i,o;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),eu.test(t.nodeName||""))for(i=0,o=(a=t.getElementsByTagName("source")).length;i<o;i++)a[i].setAttribute("sizes",r);n.detail.dataAttr||ey(e,n.detail)}),J=function(e,t,n){var r,a=e.parentNode;a&&(n=ej(e,a,n),!(r=ex(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented&&(n=r.detail.width)&&n!==e._lazysizesWidth&&Y(e,a,r,n))},{_:function(){G=t.getElementsByClassName(et.autosizesClass),eo("resize",Q)},checkElems:Q=ez(function(){var e,t=G.length;if(t)for(e=0;e<t;e++)J(G[e])}),updateElem:J}),eO=function(){!eO.i&&t.getElementsByClassName&&(eO.i=!0,ew._(),eN._())};return el(function(){et.init&&eO()}),ee={cfg:et,autoSizer:ew,loader:eN,init:eO,uP:ey,aC:ev,rC:em,hC:ep,fire:ex,gW:ej,rAF:eC}}(t="undefined"!=typeof window?window:{},t.document,Date),t.lazySizes=n,e.exports&&(e.exports=n)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9212)}])},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return o},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return u}});let a="refresh",i="navigate",o="restore",l="server-patch",c="prefetch",s="fast-refresh",u="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(8754),a=r._(n(7294)),i=n(4532),o=n(3353),l=n(1410),c=n(9064),s=n(370),u=n(9955),f=n(4224),d=n(508),h=n(1516),p=n(4266),v=n(3991),m=new Set;function g(e,t,n,r,a,i){if(!i&&!(0,o.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+a;if(m.has(i))return;m.add(i)}let l=i?e.prefetch(t,a):e.prefetch(t,n,r);Promise.resolve(l).catch(e=>{})}function x(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let y=a.default.forwardRef(function(e,t){let n,r;let{href:l,as:m,children:y,prefetch:b=null,passHref:j,replace:C,shallow:_,scroll:z,locale:N,onClick:w,onMouseEnter:O,onTouchStart:E,legacyBehavior:M=!1,...A}=e;n=y,M&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let P=!1!==b,L=null===b?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,T=a.default.useContext(u.RouterContext),k=a.default.useContext(f.AppRouterContext),S=null!=T?T:k,R=!T,{href:H,as:B}=a.default.useMemo(()=>{if(!T){let e=x(l);return{href:e,as:m?x(m):e}}let[e,t]=(0,i.resolveHref)(T,l,!0);return{href:e,as:m?(0,i.resolveHref)(T,m):t||e}},[T,l,m]),I=a.default.useRef(H),F=a.default.useRef(B);M&&(r=a.default.Children.only(n));let D=M?r&&"object"==typeof r&&r.ref:t,[W,U,V]=(0,d.useIntersection)({rootMargin:"200px"}),q=a.default.useCallback(e=>{(F.current!==B||I.current!==H)&&(V(),F.current=B,I.current=H),W(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[B,D,H,V,W]);a.default.useEffect(()=>{S&&U&&P&&g(S,H,B,{locale:N},{kind:L},R)},[B,H,U,N,P,null==T?void 0:T.locale,S,R,L]);let K={ref:q,onClick(e){M||"function"!=typeof w||w(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,i,l,c,s,u,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,o.isLocalURL)(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:l,locale:s,scroll:c}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};u?a.default.startTransition(p):p()}(e,S,H,B,C,_,z,N,R,P)},onMouseEnter(e){M||"function"!=typeof O||O(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(P||!R)&&g(S,H,B,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:L},R)},onTouchStart(e){M||"function"!=typeof E||E(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(P||!R)&&g(S,H,B,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:L},R)}};if((0,c.isAbsoluteUrl)(B))K.href=B;else if(!M||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==N?N:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,h.getDomainLocale)(B,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);K.href=t||(0,p.addBasePath)((0,s.addLocale)(B,e,null==T?void 0:T.defaultLocale))}return M?a.default.cloneElement(r,K):a.default.createElement("a",{...A,...K},n)}),b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(7294),a=n(29),i="function"==typeof IntersectionObserver,o=new Map,l=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,s=c||!i,[u,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(i){if(s||u)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:a,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=o.get(r)))return t;let a=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:a},l.push(n),o.set(n,t),t}(n);return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),o.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=(0,a.requestIdleCallback)(()=>f(!0));return()=>(0,a.cancelIdleCallback)(e)}},[s,n,t,u,d.current]);let p=(0,r.useCallback)(()=>{f(!1)},[]);return[h,u,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8043:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),a=n(7294),i=n(9008),o=n.n(i);let l=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("footer",{className:"footer",children:(0,r.jsx)("div",{className:"footer-bottom",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("p",{className:"copyright",children:["\xa9 2024 ",(0,r.jsx)("a",{href:"",children:"culturalvn.com"}),". All rights reserved"]})})})})});var c=n(1664),s=n.n(c),u=n(9826),f=n(1163);let d=()=>{let[e,t]=(0,a.useState)(!1),n=(0,f.useRouter)(),i=[{content:"Home",href:"/"},{content:"Destinations",href:"/travel"},{content:"Food",href:"/food"},{content:"Culture",href:""}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{className:"header_des md:block fixed bg-[#fff] left-[0] right-[0] hidden","data-header":!0,style:{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",zIndex:10},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("nav",{className:"header_des_container max-w-[1250px] flex justify-between py-[15px] items-center","data-navbar":!0,children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)("a",{href:"",children:(0,r.jsx)("img",{src:"https://static.tacdn.com/img2/brand_refresh/special/pride_month_Tripadvisor_lockup_horizontal_secondary.svg",alt:"",className:"w-[100px]"})})}),(0,r.jsx)("ul",{className:"flex justify-center",children:null==i?void 0:i.map((e,t)=>(0,r.jsx)("li",{className:"mx-[25px] py-[5px] ".concat((null==n?void 0:n.pathname)===(null==e?void 0:e.href)?"active_nav":""," hover_nav"),children:(0,r.jsx)(s(),{href:null==e?void 0:e.href,className:"font-[600] text-[#121212] text-[16px] ",children:null==e?void 0:e.content})},t))}),(0,r.jsxs)("ul",{className:"flex items-center",children:[(0,r.jsx)("li",{className:"mx-[5px] cursor-pointer",children:(0,r.jsx)("i",{className:"text-[20px] ",children:(0,r.jsx)(u.Wjh,{})})}),(0,r.jsx)("li",{className:"mx-[5px] cursor-pointer",children:(0,r.jsx)("i",{className:"text-[20px]",children:(0,r.jsx)(u.Bpw,{})})}),(0,r.jsx)("li",{className:"mx-[5px] cursor-pointer",children:(0,r.jsx)("i",{className:"text-[20px] ",children:(0,r.jsx)(u.bCe,{})})})]})]})})}),(0,r.jsxs)("header",{className:"md:hidden block",children:[(0,r.jsxs)("nav",{className:"flex justify-between py-[15px] items-center px-[15px]",children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)("a",{href:"",children:(0,r.jsx)("img",{src:"https://static.tacdn.com/img2/brand_refresh/special/pride_month_Tripadvisor_lockup_horizontal_secondary.svg",alt:"",className:"w-[100px]"})})}),(0,r.jsx)("div",{className:"cursor-pointer",onClick:()=>t(!0),children:(0,r.jsx)("i",{className:"text-[24px]",children:(0,r.jsx)(u.qTj,{})})})]}),(0,r.jsx)("nav",{className:"relative ",children:(0,r.jsxs)("div",{className:"fixed z-50 bg-[#fff] top-[0] left-[0] right-[0] bottom-[0] scroll_bar ".concat(e?"list_nav_mb":"list_nav_mb_hidden"),children:[(0,r.jsx)("div",{className:"absolute top-[20px] left-[20px] cursor-pointer",onClick:()=>t(!1),children:(0,r.jsx)("i",{className:"text-[24px]",children:(0,r.jsx)(u.oHP,{})})}),(0,r.jsx)("div",{children:(0,r.jsx)("ul",{className:"mt-[80px]",children:null==i?void 0:i.map((e,a)=>(0,r.jsx)("li",{className:"mx-[25px] my-[25px] text-center",children:(0,r.jsx)(s(),{onClick:()=>t(!1),href:null==e?void 0:e.href,className:"font-[600] text-[#121212] py-[10px] text-[16px] hover_nav ".concat((null==n?void 0:n.pathname)===(null==e?void 0:e.href)?"active_nav":""),children:null==e?void 0:e.content})},a))})})]})})]})]})},h=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("meta",{charSet:"UTF-8",lang:"vi"}),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/assets/img/home/favicon.png"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/assets/img/home/favicon.ico"}),(0,r.jsx)("link",{rel:"icon",href:"/assets/img/home/favicon.png"}),(0,r.jsx)("link",{rel:"icon",href:"/assets/img/home/favicon.ico",sizes:"any"}),(0,r.jsx)("title",{children:"LemonDev"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(d,{}),t,(0,r.jsx)(l,{})]})]})};var p=a.memo(h)},9212:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(2052),n(8250),n(1939),n(4043),n(1046),n(6132),n(9279),n(3497);var a=n(8043);n(7090),t.default=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(t,{...n})})})}},3497:function(){},9279:function(){},8250:function(){},1939:function(){},1046:function(){},4043:function(){},2052:function(){},6132:function(){},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)},9826:function(e,t,n){"use strict";n.d(t,{ow5:function(){return d},s5I:function(){return h},pHD:function(){return p},wod:function(){return v},kyg:function(){return m},oHP:function(){return g},Zju:function(){return x},Wjh:function(){return y},Bpw:function(){return b},qTj:function(){return j},RB5:function(){return C},bCe:function(){return _}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){var r,a,i;r=e,a=t,i=n[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return t=>r.createElement(f,l({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,s({key:n},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var n,{attr:a,size:i,title:c}=e,u=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,o),f=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,e=>t(e)):t(a)}function d(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M112 880c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V460H112v420zm768-696H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v176h800V216c0-17.7-14.3-32-32-32z"},child:[]}]})(e)}function h(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"},child:[]}]})(e)}function p(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"},child:[]}]})(e)}function v(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"},child:[]}]})(e)}function m(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function g(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(e)}function x(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"},child:[]}]})(e)}function y(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"},child:[]}]})(e)}function b(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"},child:[]}]})(e)}function j(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function C(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"},child:[]}]})(e)}function _(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M818 800 498.11 333.745l.546.437L787.084 0h-96.385L455.738 272 269.15 0H16.367l298.648 435.31-.036-.037L0 800h96.385l261.222-302.618L565.217 800zM230.96 72.727l448.827 654.546h-76.38L154.217 72.727z",transform:"translate(103 112)"},child:[]}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);