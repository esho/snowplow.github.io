"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[59188],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>w});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),a=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},i=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=a(o),w=r,g=d["".concat(l,".").concat(w)]||d[w]||u[w]||p;return o?n.createElement(g,s(s({ref:t},i),{},{components:o})):n.createElement(g,s({ref:t},i))}));function w(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=o.length,s=new Array(p);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var a=2;a<p;a++)s[a]=o[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},75919:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>a});var n=o(87462),r=(o(67294),o(3905));const p={title:"Setup the collector (GCP)",date:"2020-02-27",sidebar_position:0},s=void 0,c={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/index",title:"Setup the collector (GCP)",description:"On a GCP pipeline, the Snowplow Stream Collector receives events sent over HTTP(S), and writes them a raw Pub/Sub topic. From there, the data is picked up and processed by the Snowplow validation and enrichment job.",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:0,frontMatter:{title:"Setup the collector (GCP)",date:"2020-02-27",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Setup Snowplow Open Source on GCP",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/"},next:{title:"Setup the Pub/Sub topics",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/setup-the-pub-sub-topics/"}},l={},a=[],i={toc:a};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On a GCP pipeline, the Snowplow Stream Collector receives events sent over HTTP(S), and writes them a raw Pub/Sub topic. From there, the data is picked up and processed by the Snowplow validation and enrichment job."),(0,r.kt)("p",null,"The main ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/stream-collector/"},"collector documentation")," describes the core concepts of how the collector works, and the configuration options when running it."),(0,r.kt)("p",null,"In this guide for GCP we are going to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setup the Pub/Sub topics required: A good topic for data that is successfully processed by the collector, and a bad one in case any data is not successfully processed."),(0,r.kt)("li",{parentName:"ol"},"Setup and run the collector application as a single instance VM (e.g. for a development environment)"),(0,r.kt)("li",{parentName:"ol"},"Setup and run the collector as an autoscaling group of instances behind a load balancer (recommended for production)")))}u.isMDXComponent=!0}}]);