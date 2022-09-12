"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[22937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Analytics SDK - JavaScript",date:"2021-10-18",sidebar_position:200},o=void 0,s={unversionedId:"modeling-your-data/analytics-sdk/analytics-sdk-javascript/index",id:"modeling-your-data/analytics-sdk/analytics-sdk-javascript/index",title:"Analytics SDK - JavaScript",description:"Overview",source:"@site/docs/modeling-your-data/analytics-sdk/analytics-sdk-javascript/index.md",sourceDirName:"modeling-your-data/analytics-sdk/analytics-sdk-javascript",slug:"/modeling-your-data/analytics-sdk/analytics-sdk-javascript/",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-javascript/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/modeling-your-data/analytics-sdk/analytics-sdk-javascript/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:200,frontMatter:{title:"Analytics SDK - JavaScript",date:"2021-10-18",sidebar_position:200},sidebar:"defaultSidebar",previous:{title:"Analytics SDK - Scala",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-scala/"},next:{title:"Analytics SDK - Go",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-go/"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Example",id:"example",level:3},{value:"API",id:"api",level:2},{value:"<code>transform(event: string): Event</code>",id:"transformevent-string-event",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-js-analytics-sdk"},"Snowplow JavaScript and TypeScript Analytics SDK")," lets you work with ",(0,r.kt)("a",{parentName:"p",href:"/docs/understanding-your-pipeline/canonical-event/"},"Snowplow enriched events")," in your JavaScript event processing, data modeling and machine-learning jobs. You can use this SDK with ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/functions/"},"Google Cloud Functions"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/appengine"},"Google App Engine")," and other JavaScript-compatible frameworks."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Install using your preferred package manager, such as npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install --save snowplow-analytics-sdk\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-js-analytics-sdk"}),(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-js-analytics-sdk"},"Snowplow JavaScript and TypeScript Analytics SDK")," provides you an API to parse an enriched event from it's TSV-string form to a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," string."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"To consume in an AWS lambda you would do something like this in your ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const { transform } = require('snowplow-analytics-sdk');\n\nmodule.exports.handler = (input) => {\n  let event = transform(\n    new Buffer(input.Records[0].kinesis.data, 'base64').toString('utf8'),\n  );\n\n  // ...\n};\n")),(0,r.kt)("p",null,"Or in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { transform } from 'snowplow-analytics-sdk';\n\nexport function handler(input: any) {\n  let event = transform(\n    new Buffer(input.Records[0].kinesis.data, 'base64').toString('utf8'),\n  );\n\n  // ...\n}\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"transformevent-string-event"},(0,r.kt)("inlineCode",{parentName:"h3"},"transform(event: string): Event")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event: string")," - TSV string containing event data.")),(0,r.kt)("p",null,"Returns decoded ",(0,r.kt)("a",{parentName:"p",href:"/docs/understanding-your-pipeline/canonical-event/"},"Snowplow enriched event"),"."))}d.isMDXComponent=!0}}]);