"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[70987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Iglu Core",date:"2021-03-26",sidebar_position:120},o=void 0,s={unversionedId:"pipeline-components-and-applications/iglu/common-architecture/iglu-core/index",id:"pipeline-components-and-applications/iglu/common-architecture/iglu-core/index",title:"Iglu Core",description:"Iglu is designed to be not dependent on any particular programming language or platform. But there's growing set of applications beside clients and registries using different concepts originated from Iglu. To have consistent data structures and behavior among different applications, we're developing Iglu core libraries for different languages.",source:"@site/docs/pipeline-components-and-applications/iglu/common-architecture/iglu-core/index.md",sourceDirName:"pipeline-components-and-applications/iglu/common-architecture/iglu-core",slug:"/pipeline-components-and-applications/iglu/common-architecture/iglu-core/",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/iglu-core/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/common-architecture/iglu-core/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:120,frontMatter:{title:"Iglu Core",date:"2021-03-26",sidebar_position:120},sidebar:"defaultSidebar",previous:{title:"Self describing JSONs",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/"},next:{title:"Schema Resolution",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/schema-resolution/"}},l={},c=[{value:"Basic data structures",id:"basic-data-structures",level:2},{value:"SchemaKey",id:"schemakey",level:3},{value:"SchemaMap",id:"schemamap",level:3},{value:"SchemaVer",id:"schemaver",level:3},{value:"SchemaCriterion",id:"schemacriterion",level:3},{value:"Implementations",id:"implementations",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Iglu is designed to be not dependent on any particular programming language or platform. But there's growing set of applications beside clients and registries using different concepts originated from Iglu. To have consistent data structures and behavior among different applications, we're developing Iglu core libraries for different languages."),(0,i.kt)("h2",{id:"basic-data-structures"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-core#basic-data-structures"}),"Basic data structures"),(0,i.kt)("p",null,"All languages have their own unique features and particular Iglu Core implementation may or may not use these features. One common rule for all Iglu core implementations is to minimize dependencies. Ideally Iglu core should have no external dependencies. Another rule is to implement the required basic data structures (in form of classes, structs, ADTs or any other appropriate form) and functions."),(0,i.kt)("h3",{id:"schemakey"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-core#schemakey"}),"SchemaKey"),(0,i.kt)("p",null,"This data structure contains information about Self-describing datum, such as Snowplow unstructured event or context."),(0,i.kt)("p",null,"It also should have related\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"parse"),"\xa0functions, which can parse\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaKey"),"\xa0from most common representation - Iglu URI (string with form of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"iglu:com.acme/someschema/format/1-0-0"),") and Iglu path (same, but without\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"iglu:"),"\xa0protocol part). Reverse\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"asString"),"\xa0function required as well."),(0,i.kt)("p",null,"This also can include appropriate regular expressions to extract and validate schema key. Function for parsing\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaKey"),"\xa0from JSON Schemas is optional if there's no default JSON library like in JavaScript, but can be included within some interface."),(0,i.kt)("p",null,"More information can be found in\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},"Self-describing JSON Schemas"),"\xa0and\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/"},"Self-describing JSONs"),"\xa0wiki pages."),(0,i.kt)("h3",{id:"schemamap"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-core#schemamap"}),"SchemaMap"),(0,i.kt)("p",null,"This is almost isomorphic entity to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaKey"),", which also contains same information: vendor, name, format and version. But unlike\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaKey"),"\xa0it supposed to be attached only to Schemas instead of datums. In schemas same information usually has different representation and also version is always\xa0",(0,i.kt)("em",{parentName:"p"},"full"),"\xa0opposed to datum's possibly\xa0",(0,i.kt)("em",{parentName:"p"},"partial"),"."),(0,i.kt)("h3",{id:"schemaver"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-core#schemaver"}),"SchemaVer"),(0,i.kt)("p",null,"This is a part of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaKey"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaMap"),"\xa0with information about semantic Schema version, basically triplet of MODEL, REVISION, ADDITION."),(0,i.kt)("p",null,"Like,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaKey"),"\xa0it should contain\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"parse"),"\xa0function with regular expressions as well as\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"asString"),"\xa0method."),(0,i.kt)("p",null,"It can either\xa0",(0,i.kt)("em",{parentName:"p"},"full"),"\xa0(e.g.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"1-2-0"),") or\xa0",(0,i.kt)("em",{parentName:"p"},"partial"),"\xa0(e.g.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"1-?-?"),") suited for schema inference."),(0,i.kt)("p",null,"More information can be found in dedicated wiki page:\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/schemaver/"},"SchemaVer"),"."),(0,i.kt)("h3",{id:"schemacriterion"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/Iglu-core#schemacriterion"}),"SchemaCriterion"),(0,i.kt)("p",null,"Last core data structure is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaCriterion"),"\xa0which is a default way to filter Self-describing entities. Basically it represent\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaKey"),"\xa0divided into six parts, where last three (MODEL, REVISION, ADDITION)\xa0",(0,i.kt)("em",{parentName:"p"},"can"),"\xa0be unfilled, thus one can match all entities regardless parts which remain unfilled."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SchemaCriterion"),"\xa0also must contain regular expression,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"parse"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"asString"),"\xa0(unfilled parts replaced with asterisks) functions. One other required function is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"matches"),"\xa0which accepts\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaCriterion"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaKey"),"\xa0and returning boolean value indicating if key was matched. Bear in mind that criterions matching versions like\xa0",(0,i.kt)("inlineCode",{parentName:"p"},".../*-1-*"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},".../*-*-0"),"\xa0are absolutely valid, they're useful if want to match all initial Schemas."),(0,i.kt)("h2",{id:"implementations"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-core#implementations"}),"Implementations"),(0,i.kt)("p",null,"Currently we have only\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/wiki/Scala-Iglu-Core"},"Scala Iglu Core"),"\xa0which can be considered as reference implementation. Among described above data structures it includes type classes and container classes to improve type-safety. These type classes and containers are completely optional in other implementations."))}m.isMDXComponent=!0}}]);