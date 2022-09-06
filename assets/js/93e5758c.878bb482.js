"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[67888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Iglu",date:"2020-10-22",sidebar_position:90},o=void 0,s={unversionedId:"pipeline-components-and-applications/iglu/index",id:"pipeline-components-and-applications/iglu/index",title:"Iglu",description:"Overview",source:"@site/docs/pipeline-components-and-applications/iglu/index.md",sourceDirName:"pipeline-components-and-applications/iglu",slug:"/pipeline-components-and-applications/iglu/",permalink:"/docs/pipeline-components-and-applications/iglu/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:90,frontMatter:{title:"Iglu",date:"2020-10-22",sidebar_position:90},sidebar:"defaultSidebar",previous:{title:"Common configuration",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/emr-etl-runner/common-configuration/"},next:{title:"Iglu Common Architecture",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Iglu explained",id:"iglu-explained",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Iglu"),"\xa0is a machine-readable, open-source schema registry for\xa0",(0,i.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON schema"),"\xa0and Thrift schema from the team at\xa0",(0,i.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/"},"Snowplow Analytics"),". A schema registry is like\xa0",(0,i.kt)("em",{parentName:"p"},"npm"),"\xa0or\xa0",(0,i.kt)("em",{parentName:"p"},"Maven"),"\xa0or\xa0",(0,i.kt)("em",{parentName:"p"},"git"),"\xa0but holds data schemas instead of software or code."),(0,i.kt)("p",null,"Iglu consists of three key technical aspects:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/"},"common architecture"),"\xa0that informs all aspects of Iglu"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/"},"Iglu registries"),"\xa0that can host a set of\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},"self-describing JSON schemas")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/iglu-clients/"},"Iglu clients"),"\xa0that can resolve schemas from one or more Iglu registries")),(0,i.kt)("h2",{id:"iglu-explained"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Iglu-registry#iglu-explained"}),"Iglu explained"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Iglu"),"\xa0is built on a set of technical design decisions. It is this set of design decisions that allow Iglu clients and registries to interoperate. Please review the following design documents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},(0,i.kt)("strong",{parentName:"a"},"Self-describing JSON schema")),"\xa0- simple extensions to JSON schema which semantically identify and version a given JSON schema"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/"},(0,i.kt)("strong",{parentName:"a"},"Self-describing JSON")),"\xa0- a standardized JSON format which co-locates a reference to the instance's JSON schema alongside the instance's data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/schemaver/"},(0,i.kt)("strong",{parentName:"a"},"SchemaVer")),"\xa0- how we semantically version schemas -\xa0",(0,i.kt)("em",{parentName:"li"},"Schema resolution"),"\xa0- our public algorithm for how we determine in which order we check Iglu registries for a given schema")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Iglu clients"),"\xa0are used for interacting with Iglu server repos and for resolving schemas in embedded and remote Iglu schema registries."),(0,i.kt)("p",null,"In the below diagram we show an Iglu client resolving a schema from Iglu Central, one embedded registry and a further two remote HTTP registries:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Iglu client",src:n(88561).Z,width:"413",height:"382"})),(0,i.kt)("p",null,"An\xa0",(0,i.kt)("strong",{parentName:"p"},"Iglu registry"),"\xa0acts as a store of data schemas. Hosting JSON schemas in an Iglu registry allows you to use those schemas in Iglu-capable systems such as\xa0Snowplow."),(0,i.kt)("p",null,"So far we support two types of Iglu registry:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Remote registries"),"\xa0- essentially websites containing schemas which an Iglu client can query over HTTP"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Embedded registries"),"\xa0- which are embedded in a piece of software (typically alongside an Iglu client)")),(0,i.kt)("p",null,"In the below diagram we show an Iglu client resolving a schema from Iglu Central, one embedded registry and a further two remote HTTP registries:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Iglu repositories",src:n(43409).Z,width:"458",height:"382"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Iglu Central"),"\xa0(",(0,i.kt)("a",{parentName:"p",href:"http://iglucentral.com/"},"http://iglucentral.com"),") is a public registry of JSON schemas hosted by\xa0",(0,i.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/"},"Snowplow Analytics"),"."),(0,i.kt)("p",null,"Under the covers, Iglu Central is built and run as a\xa0",(0,i.kt)("strong",{parentName:"p"},"static Iglu registry"),", hosted on Amazon S3."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A\xa0",(0,i.kt)("strong",{parentName:"p"},"static repo"),"\xa0is simply an Iglu registry server structured as a static website.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Iglu Central",src:n(80667).Z,width:"466",height:"520"})),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("strong",{parentName:"p"},"deployment process"),"\xa0for Iglu Central is documented on\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-central-setup/"},"this wiki"),"\xa0in case a user wants to setup a public mirror or private instance of Iglu Central."))}m.isMDXComponent=!0},80667:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/iglu-central-c0427b712c8c80ad53d1a8a2b7e6871d.png"},88561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/iglu-clients-2a639a6f765d5146f869eb947a42f15c.png"},43409:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/iglu-repos-82e5f47255a46f97fe0b46b8abe90934.png"}}]);