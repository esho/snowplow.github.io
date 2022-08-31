"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[94037],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77521:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Snowplow Plugin for getanalytics.io",date:"2020-08-10",sidebar_position:6e3},i=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/index",title:"Snowplow Plugin for getanalytics.io",description:"The Snowplow JavaScript Tracker can now be deployed directly into your web and node applications using the analytics and @analytics/snowplow NPM packages.",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/snowplow-plugin-for-analytics-npm-package/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:6e3,frontMatter:{title:"Snowplow Plugin for getanalytics.io",date:"2020-08-10",sidebar_position:6e3},sidebar:"tutorialSidebar",previous:{title:"Template for JavaScript Tracker v2",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v2/"},next:{title:"Node.js Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/"}},l={},p=[{value:"Quick Start",id:"quick-start",level:3},{value:"Full documentation",id:"full-documentation",level:3}],s={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Snowplow JavaScript Tracker can now be deployed directly into your web and node applications using the ",(0,r.kt)("inlineCode",{parentName:"p"},"analytics")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@analytics/snowplow")," NPM packages."),(0,r.kt)("p",null,"Recommendation"),(0,r.kt)("p",null,"Snowplow recommends using the official ",(0,r.kt)("inlineCode",{parentName:"p"},"[@snowplow/browser-tracker](/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[@snowplow/node-tracker](/docs/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/)")," instead of this package as you will receive updates faster and install a smaller dependency into your application, unless you wish to send your events to multiple providers which is where the @analytics packages are particularly useful."),(0,r.kt)("h3",{id:"quick-start"},"Quick Start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install analytics\nnpm install @analytics/snowplow\n")),(0,r.kt)("p",null,"Initialise the plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import Analytics from 'analytics'\nimport snowplowPlugin from '@analytics/snowplow'\n\nconst analytics = Analytics({\n  app: 'awesome-app',\n  plugins: [\n    // Minimal recommended configuration\n    snowplowPlugin({\n      name: 'snowplow',\n      collectorUrl: 'collector.mysite.com',\n      trackerSettings: {\n        appId: 'myApp',\n        contexts: {\n          webPage: true\n        }\n      }\n    })\n  ]\n})\n")),(0,r.kt)("p",null,"Then track a page view event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"analytics.page()\n")),(0,r.kt)("h3",{id:"full-documentation"},"Full documentation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getanalytics.io/plugins/snowplow/"},"Snowplow Plugin documentation")," (getanalytics.io)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getanalytics.io/"},"Analytics package documentation")," (getanalytics.io)"))}u.isMDXComponent=!0}}]);