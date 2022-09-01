"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[84128],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:e},p),{},{components:n})):o.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88495:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Introduction",slug:"/",sidebar_position:-1},i=void 0,l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Hi! Welcome to Snowplow, the world\u2019s largest developer-first engine for collecting behavioral data.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:-1,frontMatter:{title:"Introduction",slug:"/",sidebar_position:-1},sidebar:"tutorialSidebar",next:{title:"Getting started on Snowplow BDP",permalink:"/docs/getting-started-with-snowplow-bdp/"}},s={},c=[{value:"Why Data Creation?",id:"why-data-creation",level:3},{value:"Why Snowplow?",id:"why-snowplow",level:3}],p={toc:c};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hi! Welcome to Snowplow, the world\u2019s largest developer-first engine for collecting behavioral data.  "),(0,r.kt)("p",null,"We are the leader in ",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/what-is-data-creation/?utm_source=docs&utm_content=introduction"},"Data Creation"),". Thousands of organizations of all sizes around the world generate, enhance, and model behavioral data with Snowplow to fuel ",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/advanced-analytics/?utm_source=docs&utm_content=introduction"},"advanced analytics"),", ",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/ai-ml/?utm_source=docs&utm_content=introduction"},"AI/ML initiatives"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/composable-cdp/?utm_source=docs&utm_content=landing-page"},"composable CDPs"),"."),(0,r.kt)("h3",{id:"why-data-creation"},"Why Data Creation?"),(0,r.kt)("p",null,"Have you found yourself relying on \u201cdata exhaust\u201d \u2014 data from arbitrary tools, hard to get into your data warehouse, in inconvenient format, not fit for your use cases? The solution is to deliberately design and collect clean, structured, rich and unopinionated behavioral data using Snowplow."),(0,r.kt)("h3",{id:"why-snowplow"},"Why Snowplow?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfd4\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Rock solid architecture")," capable of processing billions of events per day."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udee0\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Over ",(0,r.kt)("a",{parentName:"strong",href:"/docs/collecting-data/collecting-from-own-applications/"},"20 SDKs"))," to collect data from web, mobile, server-side, and other sources."),(0,r.kt)("li",{parentName:"ul"},"\u2705 A unique approach based on ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"schemas and validation"))," ensures your data is as clean as possible."),(0,r.kt)("li",{parentName:"ul"},"\ud83e\ude84 ",(0,r.kt)("strong",{parentName:"li"},"Over ",(0,r.kt)("a",{parentName:"strong",href:"/docs/enriching-your-data/available-enrichments/"},"15 enrichments"))," to get the most out of your data."),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfed Send data to ",(0,r.kt)("strong",{parentName:"li"},"popular warehouses and streams")," \u2014 Snowplow fits nicely within the ",(0,r.kt)("a",{parentName:"li",href:"https://snowplowanalytics.com/blog/2021/05/12/modern-data-stack/?utm_source=docs&utm_content=landing-page"},"Modern Data Stack"),".")))}d.isMDXComponent=!0}}]);