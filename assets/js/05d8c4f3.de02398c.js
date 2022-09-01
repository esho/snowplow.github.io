"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[77599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=c,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function u(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:c,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),c=(r(67294),r(3905)),o=r(41481);const a={title:"Enhanced Ecommerce",date:"2021-04-07",sidebar_position:7e3},l=void 0,i={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/enhanced-ecommerce/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/enhanced-ecommerce/index",title:"Enhanced Ecommerce",description:"Installation",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/enhanced-ecommerce/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/enhanced-ecommerce",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/enhanced-ecommerce/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/enhanced-ecommerce/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/enhanced-ecommerce/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:7e3,frontMatter:{title:"Enhanced Ecommerce",date:"2021-04-07",sidebar_position:7e3},sidebar:"tutorialSidebar",previous:{title:"Ecommerce",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ecommerce/"},next:{title:"Error Tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/error-tracking/"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Functions",id:"functions",level:3},{value:"Context",id:"context",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(o.ZP,{mdxType:"Block5966"}),(0,c.kt)("h2",{id:"installation"},"Installation"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"npm install @snowplow/browser-plugin-enhanced-ecommerce")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"yarn add @snowplow/browser-plugin-enhanced-ecommerce")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"pnpm add @snowplow/browser-plugin-enhanced-ecommerce"))),(0,c.kt)("h2",{id:"initialization"},"Initialization"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newTracker, trackPageView } from '@snowplow/browser-tracker';\nimport { EnhancedEcommercePlugin, trackEnhancedEcommerceAction } from '@snowplow/browser-plugin-enhanced-ecommerce';\n\nnewTracker('sp1', '{{collector_url}}', { \n   appId: 'my-app-id', \n   plugins: [ EnhancedEcommercePlugin() ],\n});\n")),(0,c.kt)("h3",{id:"functions"},"Functions"),(0,c.kt)("table",{class:"has-fixed-layout"},(0,c.kt)("tbody",null,(0,c.kt)("tr",null,(0,c.kt)("td",null,(0,c.kt)("code",null,"trackEnhancedEcommerceAction")),(0,c.kt)("td",null,(0,c.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#trackEnhancedEcommerceAction"},"Documentation"))),(0,c.kt)("tr",null,(0,c.kt)("td",null,(0,c.kt)("code",null,"addEnhancedEcommerceActionContext")),(0,c.kt)("td",null,(0,c.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#addEnhancedEcommerceActionContext"},"Documentation"))),(0,c.kt)("tr",null,(0,c.kt)("td",null,(0,c.kt)("code",null,"addEnhancedEcommerceImpressionContext")),(0,c.kt)("td",null,(0,c.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#addEnhancedEcommerceImpressionContext"},"Documentation"))),(0,c.kt)("tr",null,(0,c.kt)("td",null,(0,c.kt)("code",null,"addEnhancedEcommerceProductContext")),(0,c.kt)("td",null,(0,c.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#addEnhancedEcommerceProductContext"},"Documentation"))),(0,c.kt)("tr",null,(0,c.kt)("td",null,(0,c.kt)("code",null,"addEnhancedEcommercePromoContext")),(0,c.kt)("td",null,(0,c.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#addEnhancedEcommercePromoContext"},"Documentation"))))),(0,c.kt)("h3",{id:"context"},"Context"),(0,c.kt)("p",null,"This plugin does not add any additional data to context of an event."))}m.isMDXComponent=!0},41481:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(87462),c=(r(67294),r(3905));const o={toc:[]};function a(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/snowplow/snowplow-javascript-tracker?include_prereleases&sort=semver&style=flat",alt:null}))))}a.isMDXComponent=!0}}]);