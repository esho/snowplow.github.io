"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[79191],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),h=r,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={title:"YAUAA enrichment",date:"2020-02-14",sidebar_position:8},o=void 0,l={unversionedId:"enriching-your-data/available-enrichments/yauaa-enrichment/index",id:"enriching-your-data/available-enrichments/yauaa-enrichment/index",title:"YAUAA enrichment",description:"YAUAA (Yet Another User Agent Analyzer) enrichment is a powerful user agent parser and analyzer.",source:"@site/docs/enriching-your-data/available-enrichments/yauaa-enrichment/index.md",sourceDirName:"enriching-your-data/available-enrichments/yauaa-enrichment",slug:"/enriching-your-data/available-enrichments/yauaa-enrichment/",permalink:"/docs/enriching-your-data/available-enrichments/yauaa-enrichment/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/enriching-your-data/available-enrichments/yauaa-enrichment/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:8,frontMatter:{title:"YAUAA enrichment",date:"2020-02-14",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"HTTP header extractor enrichment",permalink:"/docs/enriching-your-data/available-enrichments/http-header-extractor-enrichment/"},next:{title:"IP Lookup enrichment",permalink:"/docs/enriching-your-data/available-enrichments/ip-lookup-enrichment/"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"YAUAA (Yet Another User Agent Analyzer) enrichment is a powerful user agent parser and analyzer."),(0,r.kt)("p",null,"It uses ",(0,r.kt)("a",{parentName:"p",href:"https://yauaa.basjes.nl/"},"YAUAA API")," to parse and analyze the user agent string of an HTTP request and extract as many relevant information as possible about the user's device and browser, like for instance the device class (Phone, Tablet, etc.)."),(0,r.kt)("table",{class:"has-fixed-layout"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("strong",null,"YAUAA parsing relies entirely on in-memory ",(0,r.kt)("em",null,"HashMap"),"s and require roughly 400 MB of RAM (see "),(0,r.kt)("a",{href:"https://yauaa.basjes.nl/README-MemoryUsage.html"},"here"),(0,r.kt)("strong",null,"). Additional memory is also needed if caching is enabled (by default)."))))),(0,r.kt)("p",null,"There is no interaction with an external system."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.enrichments/yauaa_enrichment_config/jsonschema/1-0-0"},"Schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/yauaa_enrichment_config.json"},"Example"))),(0,r.kt)("p",null,"Only one parameter can be set in the configuration : ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheSize"),". This field determines the number of already parsed user agents that are kept in memory for faster processing. If set to 0, caching is disabled. If not set, a default size is used for the cache (10000)."),(0,r.kt)("h2",{id:"input"},"Input"),(0,r.kt)("p",null,"This enrichment uses the field ",(0,r.kt)("inlineCode",{parentName:"p"},"useragent"),"."),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("p",null,"This enrichment adds a new derived context to the enriched event with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/nl.basjes/yauaa_context/jsonschema/1-0-1"},"this schema")," (since enrich 1.4.0)."),(0,r.kt)("p",null,"If a field can't be figured out by the algorithm, it won't be in the output. But some fields can have value\xa0",(0,r.kt)("em",{parentName:"p"},"UNKNOWN"),"."),(0,r.kt)("p",null,"The only field that will always be present is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"deviceClass"),"."),(0,r.kt)("p",null,"Here is an example of a derived context attached by this enrichment for a page visited with a Samsung Galaxy S9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema":"iglu:com.snowplowanalytics.snowplow/yauaa_context/jsonschema/1-0-1",\n    "data": {\n        "deviceClass":"Phone",\n        "deviceName":"Samsung SM-G960F",\n        "deviceBrand":"Samsung",\n        "operatingSystemClass":"Mobile",\n        "operatingSystemName":"Android",\n        "operatingSystemVersion":"8.0.0",\n        "operatingSystemNameVersion":"Android 8.0.0",\n        "operatingSystemVersionBuild":"R16NW",\n        "layoutEngineClass":"Browser",\n        "layoutEngineName":"Blink",\n        "layoutEngineVersion":"62.0",\n        "layoutEngineVersionMajor":"62",\n        "layoutEngineNameVersion":"Blink 62.0",\n        "layoutEngineNameVersionMajor":"Blink 62",\n        "agentClass":"Browser",\n        "agentName":"Chrome",\n        "agentVersion":"62.0.3202.84",\n        "agentVersionMajor":"62",\n        "agentNameVersion":"Chrome 62.0.3202.84",\n        "agentNameVersionMajor":"Chrome 62"\n   }\n}\n')),(0,r.kt)("p",null,"The full output possiblities generated by the YAUAA algorithm can be found\xa0",(0,r.kt)("a",{parentName:"p",href:"https://yauaa.basjes.nl/README-Output.html"},"here"),"."))}p.isMDXComponent=!0}}]);