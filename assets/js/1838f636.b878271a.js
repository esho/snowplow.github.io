"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[23721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"Cookie extractor enrichment",date:"2020-02-14",sidebar_position:6},a=void 0,c={unversionedId:"enriching-your-data/available-enrichments/cookie-extractor-enrichment/index",id:"enriching-your-data/available-enrichments/cookie-extractor-enrichment/index",title:"Cookie extractor enrichment",description:"This enrichment can extract name/value pairs from a cookie set on the domain and attach them to the event as derived contexts.",source:"@site/docs/enriching-your-data/available-enrichments/cookie-extractor-enrichment/index.md",sourceDirName:"enriching-your-data/available-enrichments/cookie-extractor-enrichment",slug:"/enriching-your-data/available-enrichments/cookie-extractor-enrichment/",permalink:"/docs/enriching-your-data/available-enrichments/cookie-extractor-enrichment/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/enriching-your-data/available-enrichments/cookie-extractor-enrichment/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:6,frontMatter:{title:"Cookie extractor enrichment",date:"2020-02-14",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Event fingerprint enrichment",permalink:"/docs/enriching-your-data/available-enrichments/event-fingerprint-enrichment/"},next:{title:"HTTP header extractor enrichment",permalink:"/docs/enriching-your-data/available-enrichments/http-header-extractor-enrichment/"}},l={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This enrichment can extract name/value pairs from a cookie set on the domain and attach them to the event as derived contexts."),(0,o.kt)("p",null,"A powerful attribute of having Snowplow event collection on our own domain is the ability to capture values in first-party cookies set by other services such as ad servers or content management software (CMS)."),(0,o.kt)("p",null,"By capturing these cookie fields set by third parties on our domain and attaching them to the event we can potentially use the identifiers to better identify users of our site."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/cookie_extractor_config/jsonschema/1-0-0"},"Schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/cookie_extractor_config.json"},"Example"))),(0,o.kt)("p",null,"In the configuration we specify the list of cookie keys for which we want to extract the value and attach it to the event."),(0,o.kt)("p",null,"The example configuration is capturing Scala Stream Collector\u2019s own \u201csp\u201d cookie value but in practice we would probably want to extract other more valuable cookies available on the company domain."),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("p",null,"This enrichment uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cookie")," HTTP header."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"each")," key listed in the configuration, a context with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/org.ietf/http_cookie/jsonschema/1-0-0"},"this schema")," is added to the enriched event. Each context contains only one key/value pair."))}p.isMDXComponent=!0}}]);