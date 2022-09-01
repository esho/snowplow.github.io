"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[12535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=a,p=h["".concat(c,".").concat(m)]||h[m]||u[m]||i;return n?r.createElement(p,o(o({ref:t},d),{},{components:n})):r.createElement(p,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),a=n(86010),i=n(53438),o=n(39960),l=n(13919),c=n(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function h(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function m(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(h,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",u),title:o},o))}function p(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:n}=e;const a=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:a,title:n.label,description:null==o?void 0:o.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{items:t,className:n}=e;return r.createElement("section",{className:(0,a.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},34769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=n(87462),a=(n(67294),n(3905)),i=n(6085),o=n(52991),l=n(53438);const c={title:"Available enrichments",date:"2020-02-15",sidebar_position:20},s=void 0,d={unversionedId:"enriching-your-data/available-enrichments/index",id:"enriching-your-data/available-enrichments/index",title:"Available enrichments",description:"",source:"@site/docs/enriching-your-data/available-enrichments/index.md",sourceDirName:"enriching-your-data/available-enrichments",slug:"/enriching-your-data/available-enrichments/",permalink:"/docs/enriching-your-data/available-enrichments/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/enriching-your-data/available-enrichments/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:20,frontMatter:{title:"Available enrichments",date:"2020-02-15",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Managing enrichments in the console",permalink:"/docs/enriching-your-data/configuring-enrichments/"},next:{title:"IAB enrichment",permalink:"/docs/enriching-your-data/available-enrichments/iab-enrichment/"}},u={},h=[],m={toc:h};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{mdxType:"Block1303"}),(0,a.kt)(o.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0},6085:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Snowplow offers a large number of enrichments that can be used to enhance your event data. An enrichment either updates or populates fields of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/atomic/jsonschema/1-0-0"},"atomic")," event or adds a ",(0,a.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/"},"self-describing")," context to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-scala-analytics-sdk/blob/2.1.0/src/main/scala/com.snowplowanalytics.snowplow.analytics.scalasdk/Event.scala#L165"},"derived_contexts"),"."),(0,a.kt)("p",null,"The order of enrichments is hard-coded and cannot be changed, below table lists available enrichments in order they are executed."),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,"Enrichment")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/iab-enrichment/"},"IAB")),(0,a.kt)("td",null,"Use the IAB/ABC International Spiders and Bots List to determine whether an event was produced by a user or a robot/spider based on its' IP address and user agent.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"User Agent utils"),(0,a.kt)("td",null,"Deprecated - please consider switching to YAUAA.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/ua-parser-enrichment/"},"UA parser")),(0,a.kt)("td",null,"Parse the useragent and attach detailed useragent information to each event.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/currency-conversion-enrichment/"},"Currency conversion")),(0,a.kt)("td",null,"Convert the values of all transactions to a specified base currency using Open Exchange Rates. To use it, you need an Open Exchange Rates account.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/referrer-parser-enrichment/"},"Referer parser")),(0,a.kt)("td",null,"Extracts attribution data from referer URLs.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/campaign-attribution-enrichment/","data-type":"docs","data-id":"421"},"Campaign attribution")),(0,a.kt)("td",null,"Choose which querystring parameters will be used to generate the marketing campaign fields.",(0,a.kt)("em",null," If you do not enable the campaign_attribution enrichment, those fields will not be populated."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/event-fingerprint-enrichment/"},"Event fingerprint")),(0,a.kt)("td",null,"Generate a fingerprint for the event using a hash of client-set fields. Helpful for deduplicating events.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/cookie-extractor-enrichment/","data-type":"docs","data-id":"426"},"Cookie extractor")),(0,a.kt)("td",null,"Specify cookies that you want to extract if found.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/http-header-extractor-enrichment/"},"HTTP Header extractor")),(0,a.kt)("td",null,"Specify headers that you want to extract via a regex pattern, if found each extracted header will be attached to your event.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Weather Enrichment"),(0,a.kt)("td",null,"Unavailable since Enrich 1.4.x.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/yauaa-enrichment/"},"YAUAA")),(0,a.kt)("td",null,"Parse and analyze the user agent string of an event and extract as many relevant attributes as possible using YAUAA API.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/ip-lookup-enrichment/","data-type":"docs","data-id":"416"},"IP lookups")),(0,a.kt)("td",null,"Lookup useful data based on a user's IP address using the MaxMind database.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{"data-type":"docs","data-id":"419",href:"/docs/enriching-your-data/available-enrichments/custom-javascript-enrichment/"},"JavaScript")),(0,a.kt)("td",null,"Write a JavaScript function which is executed for each event.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/custom-sql-enrichment/"},"SQL Query")),(0,a.kt)("td",null,"Perform dimension widening on a Snowplow event via your own internal relational database.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/custom-api-request-enrichment/","data-type":"docs","data-id":"431"},"API Request")),(0,a.kt)("td",null,"Perform dimension widening on a Snowplow event via your own or third-party proprietary http(s) API.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/ip-anonymization-enrichment/","data-type":"docs","data-id":"424"},"IP anonymization")),(0,a.kt)("td",null,'Anonymize the IP addresses found in the user_ipaddress field by replacing a certain number of octets with "x"s.')),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment/"},"PII Pseudonymization")),(0,a.kt)("td",null,"Better protect the privacy rights of data subjects by psuedoanonymizing collected data.")))))}o.isMDXComponent=!0}}]);