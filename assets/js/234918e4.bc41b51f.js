"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[17],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return o?n.createElement(g,a(a({ref:t},p),{},{components:o})):n.createElement(g,a({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},30902:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const i={title:"Community & contributing",date:"2020-10-28",sidebar_position:140},a=void 0,l={unversionedId:"contributing/index",id:"contributing/index",title:"Community & contributing",description:"The Snowplow team works with the open source community to deliver Snowplow, the world's most powerful analytics platform. We are proud to be involved in developing, releasing and nurturing open source projects, helping to build and sustain communities (of analysts as well as coders) around them.",source:"@site/docs/contributing/index.md",sourceDirName:"contributing",slug:"/contributing/",permalink:"/docs/contributing/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/contributing/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:140,frontMatter:{title:"Community & contributing",date:"2020-10-28",sidebar_position:140},sidebar:"tutorialSidebar",previous:{title:"Right to be Forgotten Spark Application Setup Guide",permalink:"/docs/pipeline-components-and-applications/right-to-be-forgotten-spark-application/right-to-be-forgotten-spark-application-setup-guide/"},next:{title:"Contributor License Agreement",permalink:"/docs/contributing/contributor-license-agreement/"}},s={},u=[{value:"Contributing to Snowplow",id:"contributing-to-snowplow",level:2},{value:"Contributor License",id:"contributor-license",level:3},{value:"Join the conversation",id:"join-the-conversation",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Snowplow team works with the open source community to deliver Snowplow, the world's most powerful analytics platform. We are proud to be involved in developing, releasing and nurturing open source projects, helping to build and sustain communities (of analysts as well as coders) around them."),(0,r.kt)("h2",{id:"contributing-to-snowplow"},"Contributing to Snowplow"),(0,r.kt)("p",null,"Snowplow is open source software \u2014 we welcome contributors! Some things you might like to help out with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This documentation!"),(0,r.kt)("li",{parentName:"ul"},"Feature development"),(0,r.kt)("li",{parentName:"ul"},"Feature improvement"),(0,r.kt)("li",{parentName:"ul"},"Bugfixes"),(0,r.kt)("li",{parentName:"ul"},"Creating a new tracker"),(0,r.kt)("li",{parentName:"ul"},"Creating a new webhook")),(0,r.kt)("p",null,"We'd like to extend a huge thanks to everyone who has contributed patches, new code or provided helpful suggestions over the years."),(0,r.kt)("h3",{id:"contributor-license"},"Contributor License"),(0,r.kt)("p",null,"If you would like to contribute, we ask you to sign our Contributor License Agreement"),(0,r.kt)("p",null,"We have two different Contributor License Agreements (CLAs), depending on whether you are contributing in a personal or professional capacity. Both are based on the Apache Software Foundation's own CLAs, with modifications:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/forms/d/1J1FNYq9538ndzzcBdlCbxPo1yFiOY4mwalhDTSl1pgg/viewform"},"Individual Contributor License Agreement v1.0")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/forms/d/1ZUzz7lQJhs7oZqbkBL1bp0r048hAi7uIN6aLWCyZWWs/viewform"},"Software Grant and Corporate Contributor License Agreement v1.0"))),(0,r.kt)("p",null,"Please complete and sign the most appropriate CLA for you. For more information, see our dedicated page on our\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/contributing/contributor-license-agreement/"},"Contributor License Agreements"),"."),(0,r.kt)("h2",{id:"join-the-conversation"},"Join the conversation"),(0,r.kt)("p",null,"Have an idea for Snowplow? Found a bug? We encourage you to start a conversation on the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/"},"Snowplow Discourse"),"\xa0or to file a\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/issues/new"},"new issue on GitHub"),"\xa0before writing code. Announcing what you're working on (or even just your need or pain points) starts a collaborative process to identify general solutions and helps us all avoid duplicating effort."),(0,r.kt)("p",null,"Let's build Snowplow and grow our community, together."))}c.isMDXComponent=!0}}]);