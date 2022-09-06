"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[37298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Extending",date:"2020-04-13",sidebar_position:30},o=void 0,l={unversionedId:"managing-data-quality/snowplow-event-recovery/extending/index",id:"managing-data-quality/snowplow-event-recovery/extending/index",title:"Extending",description:"There are several extension points for this application:",source:"@site/docs/managing-data-quality/snowplow-event-recovery/extending/index.md",sourceDirName:"managing-data-quality/snowplow-event-recovery/extending",slug:"/managing-data-quality/snowplow-event-recovery/extending/",permalink:"/docs/managing-data-quality/snowplow-event-recovery/extending/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/snowplow-event-recovery/extending/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:30,frontMatter:{title:"Extending",date:"2020-04-13",sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"Testing",permalink:"/docs/managing-data-quality/snowplow-event-recovery/test/"},next:{title:"Monitoring",permalink:"/docs/managing-data-quality/snowplow-event-recovery/0-2-monitoring/"}},p={},s=[{value:"Steps",id:"steps",level:2},{value:"Conditions",id:"conditions",level:2},{value:"Bad Row types",id:"bad-row-types",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are several extension points for this application:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Steps"),(0,a.kt)("li",{parentName:"ul"},"Conditions"),(0,a.kt)("li",{parentName:"ul"},"Bad Row types")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("p",null,"By definition steps allow performing modifications on existing bad row data points' payloads. We defined a configuration DSL for Steps that is turned into actions with ",(0,a.kt)("inlineCode",{parentName:"p"},"Inspectable")," definitions. ",(0,a.kt)("inlineCode",{parentName:"p"},"Inspectable"),"s are data structures on which Steps can be performed. Therefore in order to add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Step"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"config.Step")," DSL structure for it has to be defined"),(0,a.kt)("li",{parentName:"ul"},"an implementation of action defined as per DSL has to be defined for ",(0,a.kt)("inlineCode",{parentName:"li"},"Inspectable"),".")),(0,a.kt)("p",null,"The latter can be described in form of ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," function that builds upon a recursive generic JSON-transforming structure."),(0,a.kt)("h2",{id:"conditions"},"Conditions"),(0,a.kt)("p",null,"Conditions are a lot like steps but as they are triggered earlier before ",(0,a.kt)("inlineCode",{parentName:"p"},"Inspectable"),"s are created. They do operate upon JSON data and need to implement behavior for basic JSON types. Therefore in order to add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Condition"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"config.Condition")," DSL structure for it has to be defined"),(0,a.kt)("li",{parentName:"ul"},"functions for performing ",(0,a.kt)("inlineCode",{parentName:"li"},"Condition")," application for basic/composite JSON types have to be defined")),(0,a.kt)("h2",{id:"bad-row-types"},"Bad Row types"),(0,a.kt)("p",null,"Once new recoverable Bad Row types are added they need to be turned into ",(0,a.kt)("inlineCode",{parentName:"p"},"Recoverable")," by supplying appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"Recoverable")," instances. If a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Payload")," format is added it has to be turned into ",(0,a.kt)("inlineCode",{parentName:"p"},"Inspectable")," as well."),(0,a.kt)("p",null,"It is important to note that we only represent recoverable bad rows as ",(0,a.kt)("inlineCode",{parentName:"p"},"Recoverable")," instances. Not all ",(0,a.kt)("inlineCode",{parentName:"p"},"BadRow"),"s are recoverable and we strongly believe in not representing invalid states as possible."))}c.isMDXComponent=!0}}]);