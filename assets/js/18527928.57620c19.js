"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[66054],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},k=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=s(t),m=n,d=k["".concat(c,".").concat(m)]||k[m]||u[m]||i;return t?a.createElement(d,o(o({ref:r},p),{},{components:t})):a.createElement(d,o({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=k;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},95257:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const i={title:"Installing the tracker from npm",date:"2021-03-31",sidebar_position:-10},o=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracker-setup/installing-the-tracker-from-npm/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracker-setup/installing-the-tracker-from-npm/index",title:"Installing the tracker from npm",description:"Getting started with sending events using the Browser Tracker will be familiar for anyone who is used to installing npm packages into their web apps and is designed to work with frameworks such as React, Angular and Vue.",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracker-setup/installing-the-tracker-from-npm/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracker-setup/installing-the-tracker-from-npm",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracker-setup/installing-the-tracker-from-npm/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracker-setup/installing-the-tracker-from-npm/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracker-setup/installing-the-tracker-from-npm/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:-10,frontMatter:{title:"Installing the tracker from npm",date:"2021-03-31",sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"Tracker Setup",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracker-setup/"},next:{title:"Initialization options",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracker-setup/initialization-options/"}},c={},s=[{value:"Using Plugins",id:"using-plugins",level:2}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Getting started with sending events using the Browser Tracker will be familiar for anyone who is used to installing npm packages into their web apps and is designed to work with frameworks such as React, Angular and Vue."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install the ",(0,n.kt)("inlineCode",{parentName:"p"},"@snowplow/browser-tracker")," package using your preferred package manager"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"npm install @snowplow/browser-tracker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn add @snowplow/browser-tracker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pnpm add @snowplow/browser-tracker")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can then import this library into your application"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newTracker, trackPageView } from '@snowplow/browser-tracker';\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure an instance of the tracker by calling ",(0,n.kt)("inlineCode",{parentName:"li"},"newTracker(...)")," with your desired properties. This will create a module level instance of your tracker. You don't need to keep a reference to it.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"newTracker('sp1', '{{collector_url}}', { \n  appId: 'my-app-id', \n  plugins: [ ],\n});\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Then you can use the track methods to send some events. You can send a Page View event to all initialised trackers with just:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"trackPageView();\n")),(0,n.kt)("h2",{id:"using-plugins"},"Using Plugins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can extend the tracker by installing plugins. Lets say you wanted to use the Form Tracking plugin, you first need to install the package:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"npm install @snowplow/browser-plugin-form-tracking")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn add @snowplow/browser-plugin-form-tracking")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pnpm add @snowplow/browser-plugin-form-tracking")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can then import the form tracking library:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { FormTrackingPlugin, enableFormTracking } from '@snowplow/browser-plugin-form-tracking';\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update your tracker initialization code so the tracker knows this plugin exists:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"newTracker('sp1', '{{collector_url}}', { \n  appId: 'my-app-id', \n  plugins: [ FormTrackingPlugin() ],\n});\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"And then use the new functions which this plugin includes:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"enableFormTracking();\n")),(0,n.kt)("p",null,"There are lots of plugins already available! You can find them all ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/tree/master/plugins"},"here")," and also search for them on ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs.com"),"."))}u.isMDXComponent=!0}}]);