"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{8693:function(e,l,t){t.d(l,{Z:function(){return s}});var a=t(5893),i=t(9008),n=t.n(i);function s(e){let l="https://culturalvn.com",{url:t,type:i,title:s,description:o,image:d,domain:c,card:r,keywords:p,dataSchema:m}=e;t||(t=l),i||(i="website"),s||(s="Visit Vietnam: The Official Tourism Website of Vietnam"),o||(o="Discover the highlights of Vietnam through the country's official tourism website. Plan your trip with advice on Vietnam's best destinations, what to do in Vietnam, visas for Vietnam, where to go in Vietnam, and much more."),d||(d="".concat(l,"/assets/img/static/image_a.jpg")),c||(c="https://culturalvn.com"),r||(r="summary_large_image"),p||(p="vietnam tourism, vietnam travel, vietnam website"),m||(m={mainEntityOfPage:"https://culturalvn.com",idUrl:"https://culturalvn.com",articleSection:"Travel",datePublished:"",dateModified:""});let x={"@context":"http://schema.org","@type":"NewsArticle",mainEntityOfPage:"".concat(m.mainEntityOfPage,"/#WebPage"),"@id":"".concat(m.idUrl,"/#NewsArticle"),headline:s,name:s,description:o,articleSection:m.articleSection,inLanguage:"vi,en",url:t,image:{"@context":"http://schema.org","@type":"ImageObject",url:d,caption:s,width:"1200",height:"630"},isPartOf:{"@type":"CollectionPage","@id":m.idUrl,name:m.articleSection,abstract:s,publisher:{"@id":"".concat(l,"/#Organization")}},author:{"@context":"http://schema.org","@type":"Person","@id":"".concat(l,"#Person"),name:"Cultural Viet Nam",url:l,worksFor:{"@id":"".concat(l,"/#Organization")}},datePublished:null==m?void 0:m.datePublished,dateModified:null==m?void 0:m.dateModified,publisher:{"@id":"".concat(l,"/#Organization")},keywords:null==p?void 0:p.split(",")},v={"@context":"http://schema.org","@type":["Organization","NewsMediaOrganization"],name:s,url:l,"@id":{"@id":"".concat(l,"/#Organization")},slogan:s,image:d,logo:"".concat(l,"/assets/img/favicon/favicon.ico"),email:"",telephone:"",additionalType:"",sameAs:["https://www.facebook.com/profile.php?id=61561475609297"],address:{"@type":"PostalAddress",streetAddress:"",addressLocality:"",addressRegion:"H\xe0 Nội",addressCountry:"VN",postalCode:"100000"},contactPoint:[{"@type":"ContactPoint",telephone:"",contactOption:"TollFree",contactType:"customer service",areaServed:""}]};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:s}),(0,a.jsx)("meta",{name:"description",content:o}),(0,a.jsx)("meta",{name:"news_keywords",content:p}),(0,a.jsx)("meta",{property:"og:url",content:t}),(0,a.jsx)("meta",{property:"og:type",content:i}),(0,a.jsx)("meta",{property:"og:title",content:s}),(0,a.jsx)("meta",{property:"og:description",content:o}),(0,a.jsx)("meta",{property:"og:image",content:d}),(0,a.jsx)("meta",{property:"keywords",content:p}),(0,a.jsx)("meta",{name:"twitter:card",content:r}),(0,a.jsx)("meta",{property:"twitter:domain",content:c}),(0,a.jsx)("meta",{property:"twitter:url",content:t}),(0,a.jsx)("meta",{name:"twitter:title",content:s}),(0,a.jsx)("meta",{name:"twitter:description",content:o}),(0,a.jsx)("meta",{name:"twitter:image",content:d}),(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(x)}}),(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}})]})})}},7393:function(e,l,t){t.r(l),t.d(l,{default:function(){return u}});var a=t(5893),i=t(7294),n=t(9826),s=t(2466),o=t(7519),d=t(381),c=t.n(d),r=t(1163),p=t(3454);let m=async e=>{try{let l=await fetch("".concat("https://api.culturalvn.com").concat(e),{headers:{"Content-Type":"application/json",key:"".concat(p.env.keyEB)}}),t=await l.json();return t&&t.statusCode,{data:null==t?void 0:t.data}}catch(e){return e}};var x=t(8693);let v=e=>{var l,t,d,p,v,u,h,g,j,N,f,y,w,b,_,k,C,V,P,O,S,A,T,E,H,M,z,L;let F={description:"Discover the highlights of Vietnam through the country's official tourism website. Plan your trip with advice on Vietnam's best destinations, what to do in Vietnam, visas for Vietnam, where to go in Vietnam, and much more.",image:null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.thumbnail,title:"Visit Vietnam: The Official Tourism Website of Vietnam",domain:"https://culturalvn.com",keywords:"vietnam tourism, vietnam travel, vietnam website",dataSchema:{mainEntityOfPage:null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(d=t.post)||void 0===d?void 0:d.url,idUrl:null==e?void 0:null===(p=e.data)||void 0===p?void 0:null===(v=p.post)||void 0===v?void 0:v.url,articleSection:null==e?void 0:null===(u=e.data)||void 0===u?void 0:null===(h=u.post)||void 0===h?void 0:null===(g=h.category)||void 0===g?void 0:g.category_name}},[Z,U]=(0,i.useState)({}),[B,D]=(0,i.useState)(!1),I=(0,r.useRouter)(),R=[{id:1,name:"All",value:"all"},{id:1,name:"Ha Giang",value:"ha-giang"},{id:2,name:"Ha Noi",value:"ha-noi"},{id:3,name:"TP. Ho Chi Minh",value:"ho-chi-minh"},{id:4,name:"Da Nang",value:"da-nang"},{id:5,name:"Ha Long",value:"ha-long"}],W=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;D(!0);try{let t=await m("/api/get-list-post?page=".concat(e,"&limit=").concat(l));U(null==t?void 0:t.data)}catch(e){return e}finally{D(!1)}};return(0,i.useEffect)(()=>{(async()=>{await W()})()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Z,{...F}),(0,a.jsxs)("div",{className:"all_post",children:[(0,a.jsx)("div",{className:"bg-[#292929] img_post h-[200px] md:h-[400px]"}),(0,a.jsxs)("div",{className:"all_post_containe container md:mt-10",children:[(0,a.jsxs)("div",{className:"all_post_filter w-[100%] pb-[30px] lg:flex",children:[(0,a.jsxs)("div",{className:"all_post_filter_items flex lg:w-[70%] items-center my-[10px]",children:[(0,a.jsx)("span",{className:"mr-[10px]",children:"Filter:"}),(0,a.jsx)("ul",{children:null==R?void 0:R.map((e,l)=>(0,a.jsx)("li",{className:"my-[5px] lg:my-[0]",onClick:()=>{var l;return null==I?void 0:I.push("/".concat(null==I?void 0:null===(l=I.pathname)||void 0===l?void 0:l.replace("/",""),"?location=").concat(null==e?void 0:e.value))},children:null==e?void 0:e.name},l))})]}),(0,a.jsxs)("div",{className:"all_post_filter_search lg:w-[30%] my-[10px]",children:[(0,a.jsx)("i",{className:"mr-2",children:(0,a.jsx)(n.RB5,{})}),(0,a.jsx)("input",{type:"text",placeholder:"Looking for location..."}),(0,a.jsx)("button",{className:"btn_search",children:"Search"})]})]}),(0,a.jsx)("div",{className:" max-w-[1250px] m-auto  ",children:(0,a.jsxs)("div",{className:" w-[100%] lg:flex ",children:[(0,a.jsx)("div",{className:"lg:w-[80%] lg:pr-[8px]",children:(0,a.jsxs)("div",{className:"relative cursor-pointer overflow-hidden rounded-[8px]",onClick:()=>{var l,t;return null==I?void 0:I.push("/".concat(null==I?void 0:null===(l=I.pathname)||void 0===l?void 0:l.replace("/",""),"/").concat(null===(t=null==e?void 0:e.data[0])||void 0===t?void 0:t.slug))},children:[(0,a.jsx)("div",{className:"rounded-[8px]",children:(0,a.jsx)("img",{src:null===(j=null==e?void 0:e.data[0])||void 0===j?void 0:j.thumbnail,alt:null===(N=null==e?void 0:e.data[0])||void 0===N?void 0:N.slug,className:"w-[100%] xl:h-[500px] object-cover"})}),(0,a.jsxs)("div",{className:"absolute lg:bottom-[20px] bottom-[10px] left-[10px] lg:left-[20px] lg:w-[90%] w-[95%] lg:px-[15px] lg:py-[10px] rounded-[10px]  px-[10px] py-[5px]",style:{backgroundColor:"rgba(0,0,0, .5)"},children:[(0,a.jsx)("div",{className:"post_tag"}),(0,a.jsx)("div",{className:"post_title lg:!my-[10px] !my-[5px]",children:(0,a.jsx)("h6",{className:"lg:!text-[26px] lg:!leading-[36px]  !text-[16px] !leading-[20px] max-h-[40px] lg:max-h-[78px]  overflow-hidden",children:null===(f=null==e?void 0:e.data[0])||void 0===f?void 0:f.title})}),(0,a.jsx)("div",{className:"post_content_details",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{className:"lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]",children:[(0,a.jsx)("span",{children:"By"}),(0,a.jsx)("p",{className:"lg:text-[14px] text-[12px]",children:"Cultural Viet Nam"})]}),(0,a.jsxs)("li",{className:"lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]",children:[(0,a.jsx)("i",{className:"lg:mr-[15px] mr-[10px]",children:(0,a.jsx)(n.ow5,{})}),(0,a.jsx)("p",{className:"lg:text-[14px] text-[12px]",children:c()(null===(y=null==e?void 0:e.data[0])||void 0===y?void 0:y.createdAt).format("ll")})]}),(0,a.jsxs)("li",{className:"lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]",children:[(0,a.jsx)("i",{className:"lg:mr-[15px] mr-[10px]",children:(0,a.jsx)(n.Zju,{})}),(0,a.jsx)("p",{className:"lg:text-[14px] text-[12px]",children:null===(w=null==e?void 0:e.data[0])||void 0===w?void 0:w.view})]})]})})]})]})}),(0,a.jsx)("div",{className:"lg:w-[20%] lg:pl-[8px] ",children:(0,a.jsxs)("div",{className:"all-post-right lg:block flex lg:mt-[0] mt-5",children:[(0,a.jsxs)("div",{className:"cursor-pointer lg:mb-[20px]  lg:w-[100%] w-[50%] pr-[10px] lg:pr-[0]",onClick:()=>{var l,t;return null==I?void 0:I.push("/".concat(null==I?void 0:null===(l=I.pathname)||void 0===l?void 0:l.replace("/",""),"/").concat(null===(t=null==e?void 0:e.data[1])||void 0===t?void 0:t.slug))},children:[(0,a.jsx)("div",{className:"overflow-hidden pb-[5px]",children:(0,a.jsx)("img",{src:null===(b=null==e?void 0:e.data[1])||void 0===b?void 0:b.thumbnail,alt:null===(_=null==e?void 0:e.data[1])||void 0===_?void 0:_.slug,className:"rounded-[8px] h-[100px] md:h-[200px] object-cover w-[100%] lg:h-[165px]"})}),(0,a.jsx)("div",{className:"css_text_all_post my-[5px]",children:(0,a.jsx)("h6",{className:"text-[16px] leading-[20px] font-semibold",children:null===(k=null==e?void 0:e.data[1])||void 0===k?void 0:k.title})}),(0,a.jsxs)("div",{className:"flex items-center ",children:[(0,a.jsx)("p",{className:"text-[14px] font-semibold text-[#e53935] mr-5",children:null===(C=null==e?void 0:e.data[1])||void 0===C?void 0:null===(V=C.category)||void 0===V?void 0:V.category_name}),(0,a.jsx)("span",{className:"text-[12px]",children:(null===(P=null==e?void 0:e.data[1])||void 0===P?void 0:P.createdAt)&&c()(null===(O=null==e?void 0:e.data[1])||void 0===O?void 0:O.createdAt).format("ll")})]})]}),(0,a.jsxs)("div",{className:"cursor-pointer lg:w-[100%] w-[50%] pl-[10px] lg:pl-[0]",onClick:()=>{var l,t;return null==I?void 0:I.push("/".concat(null==I?void 0:null===(l=I.pathname)||void 0===l?void 0:l.replace("/",""),"/").concat(null===(t=null==e?void 0:e.data[2])||void 0===t?void 0:t.slug))},children:[(0,a.jsx)("div",{className:"overflow-hidden pb-[5px]",children:(0,a.jsx)("img",{src:null===(S=null==e?void 0:e.data[2])||void 0===S?void 0:S.thumbnail,alt:null===(A=null==e?void 0:e.data[2])||void 0===A?void 0:A.slug,className:"rounded-[8px] h-[100px] md:h-[200px] object-cover w-[100%] lg:h-[165px]"})}),(0,a.jsx)("div",{className:"css_text_all_post my-[5px]",children:(0,a.jsx)("h6",{className:"text-[16px] leading-[20px] font-semibold",children:null===(T=null==e?void 0:e.data[2])||void 0===T?void 0:T.title})}),(0,a.jsxs)("div",{className:"flex items-center ",children:[(0,a.jsx)("p",{className:"text-[14px] font-semibold text-[#e53935] mr-5",children:null===(E=null==e?void 0:e.data[2])||void 0===E?void 0:null===(H=E.category)||void 0===H?void 0:H.category_name}),(0,a.jsxs)("span",{className:"text-[12px]",children:[" ",(null===(M=null==e?void 0:e.data[2])||void 0===M?void 0:M.createdAt)&&c()(null===(z=null==e?void 0:e.data[2])||void 0===z?void 0:z.createdAt).format("ll")]})]})]})]})})]})}),(0,a.jsx)("span",{className:"divider"}),(0,a.jsxs)("div",{className:" max-w-[1250px] m-auto lg:flex block",children:[(0,a.jsx)("div",{className:"lg:w-[80%] lg:pr-[8px] w-[100%]",children:(0,a.jsx)("div",{className:"w-[100%] flex flex-wrap justify-start ",children:(0,a.jsx)(s.Z,{active:!0,loading:B,children:null==Z?void 0:null===(L=Z.data)||void 0===L?void 0:L.map(e=>{var l;return(0,a.jsxs)("div",{className:"cursor-pointer md:w-[50%] lg:w-[33.33%] px-[8px] py-[10px] w-[100%]",onClick:()=>{var l;return null==I?void 0:I.push("/".concat(null==e?void 0:null===(l=e.category)||void 0===l?void 0:l.slug,"/").concat(null==e?void 0:e.slug))},children:[(0,a.jsx)("div",{className:"overflow-hidden  pb-[5px]",children:(0,a.jsx)("img",{src:null==e?void 0:e.thumbnail,alt:null==e?void 0:e.slug,className:"rounded-[8px] lg:h-[180px] object-cover w-[100%] md:h-[350px] h-[220px]"})}),(0,a.jsx)("div",{className:"css_text_all_post my-[5px]",children:(0,a.jsx)("h6",{className:"text-[16px] leading-[20px] font-semibold",children:null==e?void 0:e.title})}),(0,a.jsxs)("div",{className:"flex items-center ",children:[(0,a.jsx)("p",{className:"text-[14px] font-semibold text-[#e53935] mr-5",children:null==e?void 0:null===(l=e.category)||void 0===l?void 0:l.category_name}),(0,a.jsx)("span",{className:"text-[12px]",children:c()(e.createdAt).format("ll")})]})]},null==e?void 0:e.id)})})})}),(0,a.jsx)("div",{className:"w-[20%] pl-[8px]"})]}),(0,a.jsx)("div",{className:"all_post_pagination my-[50px]",children:(0,a.jsx)("div",{className:"all_post_pagination_items",children:(0,a.jsx)(o.Z,{defaultCurrent:null==Z?void 0:Z.page,total:null==Z?void 0:Z.total,onChange:e=>W(e,9)})})})]})]})]})};var u=v}}]);