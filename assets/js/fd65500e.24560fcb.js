"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[69321],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34096:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Emitter",date:"2020-02-26",sidebar_position:50},i=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/unity-tracker/emitter/index",id:"collecting-data/collecting-from-own-applications/unity-tracker/emitter/index",title:"Emitter",description:"The Emitter object is responsible for sending and storing all events.",source:"@site/docs/collecting-data/collecting-from-own-applications/unity-tracker/emitter/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/unity-tracker/emitter",slug:"/collecting-data/collecting-from-own-applications/unity-tracker/emitter/",permalink:"/docs/collecting-data/collecting-from-own-applications/unity-tracker/emitter/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/unity-tracker/emitter/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:50,frontMatter:{title:"Emitter",date:"2020-02-26",sidebar_position:50},sidebar:"defaultSidebar",previous:{title:"Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/unity-tracker/tracker/"},next:{title:"Subject",permalink:"/docs/collecting-data/collecting-from-own-applications/unity-tracker/subject/"}},c={},p=[{value:"Constructor",id:"constructor",level:3}],s={toc:p};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Emitter object is responsible for sending and storing all events."),(0,a.kt)("p",null,"We have two emitters available currently:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SyncEmitter"),"\xa0: Slow blocking synchronous operation, useful for testing but should not be used in production."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AsyncEmitter"),"\xa0: Fully asynchronous operation which uses the ThreadPool to perform all of its operations.")),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Argument Name")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required?")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Default")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,a.kt)("td",{parentName:"tr",align:null},"The collector uri the emitter should use"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"protocol")),(0,a.kt)("td",{parentName:"tr",align:null},"The request Protocol (HTTP or HTTPS)"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"method")),(0,a.kt)("td",{parentName:"tr",align:null},"The HTTP Method (GET or POST)"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"POST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"sendLimit")),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of events to send at a time"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"500")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"byteLimitGet")),(0,a.kt)("td",{parentName:"tr",align:null},"The byte limit for a GET request"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"52000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"byteLimitPost")),(0,a.kt)("td",{parentName:"tr",align:null},"The byte limit for a POST request"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"52000")))),(0,a.kt)("p",null,"A full Emitter construction should look like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'IEmitter e1 = new AsyncEmitter ("com.collector.acme", HttpProtocol.HTTPS, HttpMethod.GET, 50, 30000, 30000);\n')),(0,a.kt)("p",null,"All of these variables can be altered after creation with the accompanying\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"emitter.SetXXX()"),"\xa0function. However do be aware that multiple threads will be accessing these variables so to be safe always shut the Tracker down using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"StopEventTracking()"),"\xa0before ammending anything."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:"),"\xa0Be aware that when sending events via\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0all events will be sent individually. This means that if your\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"sendLimit"),"\xa0is 500 there is the potential for 500 Threads to be spawned at the same time which can cause serious performance issues. To alleviate this concern simply drop your\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"sendLimit"),"\xa0to a more manageable range."))}m.isMDXComponent=!0}}]);