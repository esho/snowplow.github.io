"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[2387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(r),d=a,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Iglu Repositories",date:"2021-03-26",sidebar_position:20},o=void 0,l={unversionedId:"pipeline-components-and-applications/iglu/iglu-repositories/index",id:"pipeline-components-and-applications/iglu/iglu-repositories/index",title:"Iglu Repositories",description:"An Iglu repository acts as a store of data schemas (currently JSON Schemas only). Hosting JSON Schemas in an Iglu repository allows you to use those schemas in Iglu-capable systems such as\xa0Snowplow.",source:"@site/docs/pipeline-components-and-applications/iglu/iglu-repositories/index.md",sourceDirName:"pipeline-components-and-applications/iglu/iglu-repositories",slug:"/pipeline-components-and-applications/iglu/iglu-repositories/",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/iglu-repositories/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:20,frontMatter:{title:"Iglu Repositories",date:"2021-03-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Igluctl (0.4.0)",permalink:"/docs/pipeline-components-and-applications/iglu/igluctl-2/previous-versions/igluctl-0-4-0/"},next:{title:"Iglu Central",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/"}},s={},p=[{value:"Technical architecture",id:"technical-architecture",level:2},{value:"Available Iglu repositories",id:"available-iglu-repositories",level:2},{value:"Iglu Central",id:"iglu-central",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An Iglu repository acts as a store of data schemas (currently JSON Schemas only). Hosting JSON Schemas in an Iglu repository allows you to use those schemas in Iglu-capable systems such as\xa0Snowplow."),(0,a.kt)("h2",{id:"technical-architecture"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-repositories#technical-architecture"}),"Technical architecture"),(0,a.kt)("p",null,"So far we support two types of Iglu repository:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Remote repositories"),"\xa0- essentially websites containing schemas which an Iglu client can query over HTTP"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Embedded repositories"),"\xa0- which are embedded in a piece of software (typically alongside an Iglu client)")),(0,a.kt)("p",null,"In this diagram we show an Iglu client resolving a schema from Iglu Central, one embedded repository and a further two remote HTTP repositories:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iglu-repos-img",src:r(38926).Z,width:"458",height:"382"})),(0,a.kt)("h2",{id:"available-iglu-repositories"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-repositories#available-iglu-repositories"}),"Available Iglu repositories"),(0,a.kt)("p",null,'We currently have two Iglu "repo" technologies available for deploying your Iglu repository - follow the links to find out more:'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Repository")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Category")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Status")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Iglu Server"),(0,a.kt)("td",{parentName:"tr",align:null},"Remote"),(0,a.kt)("td",{parentName:"tr",align:null},"An Iglu repository server structured as a RESTful API"),(0,a.kt)("td",{parentName:"tr",align:null},"Production-ready")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Static repo"),(0,a.kt)("td",{parentName:"tr",align:null},"Remote"),(0,a.kt)("td",{parentName:"tr",align:null},"An Iglu repository server structured as a static website"),(0,a.kt)("td",{parentName:"tr",align:null},"Production-ready")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JVM-embedded repo"),(0,a.kt)("td",{parentName:"tr",align:null},"Embedded"),(0,a.kt)("td",{parentName:"tr",align:null},"An Iglu repository embedded in a Java or Scala application"),(0,a.kt)("td",{parentName:"tr",align:null},"Production-ready")))),(0,a.kt)("h2",{id:"iglu-central"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-repositories#iglu-central"}),"Iglu Central"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://iglucentral.com/"},"Iglu Central"),"\xa0is a public repository of JSON Schemas hosted by\xa0",(0,a.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/"},"Snowplow Analytics"),". For more information on its technical architecture, see\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-central-setup/"},"Iglu Central"),"."))}c.isMDXComponent=!0},38926:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/iglu-repos-82e5f47255a46f97fe0b46b8abe90934.png"}}]);