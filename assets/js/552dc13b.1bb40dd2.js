"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[87e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Event fingerprint enrichment",date:"2020-02-14",sidebar_position:5},o=void 0,l={unversionedId:"enriching-your-data/available-enrichments/event-fingerprint-enrichment/index",id:"enriching-your-data/available-enrichments/event-fingerprint-enrichment/index",title:"Event fingerprint enrichment",description:"This enrichment computes the fingerprint of an event using the query string parameters.",source:"@site/docs/enriching-your-data/available-enrichments/event-fingerprint-enrichment/index.md",sourceDirName:"enriching-your-data/available-enrichments/event-fingerprint-enrichment",slug:"/enriching-your-data/available-enrichments/event-fingerprint-enrichment/",permalink:"/docs/enriching-your-data/available-enrichments/event-fingerprint-enrichment/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/enriching-your-data/available-enrichments/event-fingerprint-enrichment/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:5,frontMatter:{title:"Event fingerprint enrichment",date:"2020-02-14",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Campaign attribution enrichment",permalink:"/docs/enriching-your-data/available-enrichments/campaign-attribution-enrichment/"},next:{title:"Cookie extractor enrichment",permalink:"/docs/enriching-your-data/available-enrichments/cookie-extractor-enrichment/"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This enrichment computes the fingerprint of an event using the query string parameters."),(0,i.kt)("p",null,"Both the key and the value of all query string parameters are used to compute the fingerprint, except for the fields specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"excludeParameters"),"."),(0,i.kt)("p",null,"This is helpful when de-duplicating events."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/event_fingerprint_config/jsonschema/1-0-1"},"Schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/event_fingerprint_enrichment.json"},"Example"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hashAlgorithm")," determines the algorithm that should be used to calculate the hash. Supported hashing algorithms are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/MD5"},"MD5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SHA-1"},"SHA1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SHA-2"},"SHA256")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SHA-2"},"SHA384")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SHA-2"},"SHA512"))),(0,i.kt)("p",null,"The example configuration below would use all the parameters to compute the hash\xa0",(0,i.kt)("strong",{parentName:"p"},"except"),"\xa0the event ID (",(0,i.kt)("inlineCode",{parentName:"p"},"eid"),") and the device sent timestamp (",(0,i.kt)("inlineCode",{parentName:"p"},"stm"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    "parameters": {\n      "excludeParameters": [\n        "eid",\n        "stm"\n      ],\n      "hashAlgorithm": "MD5"\n    }\n')),(0,i.kt)("p",null,"Removing ",(0,i.kt)("inlineCode",{parentName:"p"},"stm"),"\xa0can be a good idea because in the scenario where tracker doesn't receive an acknowledgement after sending an event once and retries, the two copies of the event will have different\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"stm"),"s, whereas they are the same event."),(0,i.kt)("p",null,"Similarly, not much is gained by including the event ID in the hash given that this field is field is already used for de-duplication."),(0,i.kt)("h2",{id:"input"},"Input"),(0,i.kt)("p",null,"Query string parameters."),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"This enrichment will populate the field\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint")," of the atomic event."))}u.isMDXComponent=!0}}]);