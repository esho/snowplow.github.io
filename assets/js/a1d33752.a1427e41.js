"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[96423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Currency conversion enrichment",date:"2020-02-14",sidebar_position:2},l=void 0,o={unversionedId:"enriching-your-data/available-enrichments/currency-conversion-enrichment/index",id:"enriching-your-data/available-enrichments/currency-conversion-enrichment/index",title:"Currency conversion enrichment",description:"This enrichment uses Open Exchange Rates to convert the currencies used in transactions. It requires an Open Exchange Rates.",source:"@site/docs/enriching-your-data/available-enrichments/currency-conversion-enrichment/index.md",sourceDirName:"enriching-your-data/available-enrichments/currency-conversion-enrichment",slug:"/enriching-your-data/available-enrichments/currency-conversion-enrichment/",permalink:"/docs/enriching-your-data/available-enrichments/currency-conversion-enrichment/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/enriching-your-data/available-enrichments/currency-conversion-enrichment/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:2,frontMatter:{title:"Currency conversion enrichment",date:"2020-02-14",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"UA parser enrichment",permalink:"/docs/enriching-your-data/available-enrichments/ua-parser-enrichment/"},next:{title:"Referer parser enrichment",permalink:"/docs/enriching-your-data/available-enrichments/referrer-parser-enrichment/"}},c={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This enrichment uses ",(0,a.kt)("a",{parentName:"p",href:"https://openexchangerates.org/"},"Open Exchange Rates")," to convert the currencies used in transactions. It requires an Open Exchange Rates."),(0,a.kt)("p",null,"When transactional data is collected in multiple currencies, it can be useful to convert it in the one that is used for reporting for instance. This could help to lower discrepancies when reporting revenue amounts across multiple currencies."),(0,a.kt)("p",null,"The conversion is done by the enrich job at processing time with Open Exchange Rates API so that it can be stored directly with the right currency in the database."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/currency_conversion_config/jsonschema/1-0-0"},"Schema")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/currency_conversion_config.json"},"Example"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Field")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"accountType")),(0,a.kt)("td",{parentName:"tr",align:null},"Level of Open Exchange Rates account. Must be \u201cdeveloper\u201d, \u201centerprise\u201d, or \u201cunlimited\u201d.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"apiKey")),(0,a.kt)("td",{parentName:"tr",align:null},"Open Exchange Rates API key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"baseCurrency")),(0,a.kt)("td",{parentName:"tr",align:null},"Currency to convert all transaction values to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rateAt")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines which exchange rate will be used. Currently only \u201cEOD","_","PRIOR\u201d is supported, meaning that the enrichment uses the exchange rate from the end of the previous day.")))),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("p",null,"This enrichment uses the following fields :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tr_currency")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tr_total")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tr_tax")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tr_shipping")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ti_currency")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ti_price"))),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"This enrichment updates the following fields of the atomic event :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"base_currency")),(0,a.kt)("td",{parentName:"tr",align:null},"Base currency code according to\xa0",(0,a.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/ISO_4217#Active_codes"},"ISO","_","4217"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tr_total_base")),(0,a.kt)("td",{parentName:"tr",align:null},"Total amount of transaction in base currency")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tr_tax_base")),(0,a.kt)("td",{parentName:"tr",align:null},"Tax applied in base currency")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tr_shipping_base")),(0,a.kt)("td",{parentName:"tr",align:null},"Shipping cost in base currency")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ti_price_base")),(0,a.kt)("td",{parentName:"tr",align:null},"Item price in base currency")))))}u.isMDXComponent=!0}}]);