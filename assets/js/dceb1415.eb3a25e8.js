"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[41858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),k=n,u=m["".concat(i,".").concat(k)]||m[k]||d[k]||c;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),c=r(41481);const o={title:"Ecommerce",date:"2021-04-07",sidebar_position:6e3},l=void 0,i={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ecommerce/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ecommerce/index",title:"Ecommerce",description:"Installation",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ecommerce/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ecommerce",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ecommerce/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ecommerce/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ecommerce/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:6e3,frontMatter:{title:"Ecommerce",date:"2021-04-07",sidebar_position:6e3},sidebar:"defaultSidebar",previous:{title:"Debugger",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/debugger/"},next:{title:"Enhanced Ecommerce",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/enhanced-ecommerce/"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Functions",id:"functions",level:3},{value:"Context",id:"context",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.ZP,{mdxType:"Block5966"}),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"npm install @snowplow/browser-plugin-ecommerce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn add @snowplow/browser-plugin-ecommerce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pnpm add @snowplow/browser-plugin-ecommerce"))),(0,n.kt)("h2",{id:"initialization"},"Initialization"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newTracker, trackPageView } from '@snowplow/browser-tracker';\nimport { EcommercePlugin, addTrans, addItem, trackTrans } from '@snowplow/browser-plugin-ecommerce';\n\nnewTracker('sp1', '{{collector_url}}', { \n   appId: 'my-app-id', \n   plugins: [ EcommercePlugin() ],\n});\n")),(0,n.kt)("h3",{id:"functions"},"Functions"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,(0,n.kt)("code",null,"addTrans"))),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#addTrans"},"Documentation"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"addItem")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#addItem"},"Documentation"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"trackTrans")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#trackTrans"},"Documentation"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"trackAddToCart")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracking-events/#trackAddToCart_and_trackRemoveFromCart"},"Documenta"),(0,n.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#trackAddToCart_and_trackRemoveFromCart"},"t"),(0,n.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracking-events/#trackAddToCart_and_trackRemoveFromCart"},"ion"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"trackRemoveFromCart")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#trackAddToCart_and_trackRemoveFromCart"},"Documentation"))))),(0,n.kt)("h3",{id:"context"},"Context"),(0,n.kt)("p",null,"This plugin does not add any additional data to context of an event."))}m.isMDXComponent=!0},41481:(e,t,r)=>{r.d(t,{ZP:()=>o});var a=r(87462),n=(r(67294),r(3905));const c={toc:[]};function o(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/snowplow/snowplow-javascript-tracker?include_prereleases&sort=semver&style=flat",alt:null}))))}o.isMDXComponent=!0}}]);