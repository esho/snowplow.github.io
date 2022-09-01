"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[11410],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(o),u=n,k=h["".concat(c,".").concat(u)]||h[u]||d[u]||a;return o?r.createElement(k,i(i({ref:t},p),{},{components:o})):r.createElement(k,i({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},19032:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=o(87462),n=(o(67294),o(3905)),a=o(83144);const i={title:"How the tracker stores state",date:"2021-03-24",sidebar_position:100},s=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/how-the-tracker-stores-state/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/how-the-tracker-stores-state/index",title:"How the tracker stores state",description:"",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/how-the-tracker-stores-state/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/how-the-tracker-stores-state",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/how-the-tracker-stores-state/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/how-the-tracker-stores-state/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/how-the-tracker-stores-state/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:100,frontMatter:{title:"How the tracker stores state",date:"2021-03-24",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Cookies & Local Storage",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/"},next:{title:"Getting the domain user information from the Snowplow Cookie",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/getting-the-userid-from-the-snowplow-cookie/"}},l={},p=[],d={toc:p};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{mdxType:"Block5490"}))}h.isMDXComponent=!0},83144:(e,t,o)=>{o.d(t,{ZP:()=>i});var r=o(87462),n=(o(67294),o(3905));const a={toc:[{value:"The session cookie",id:"the-session-cookie",level:4},{value:"The ID cookie",id:"the-id-cookie",level:4},{value:"The Collector cookie",id:"the-collector-cookie",level:4}]};function i(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Unless you have enabled\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"respectDoNotTrack"),"\xa0in the configuration argmap, the tracker will persist information on the client. The location depends on the\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"stateStorageStrategy"),"\xa0field in the argmap. By default, information will be stored in cookie. Alternatively, you can specify ",(0,n.kt)("inlineCode",{parentName:"p"},"localStorage")," to have the state stored in local storage. Finally, you can set\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"stateStorageStrategy"),"\xa0to ",(0,n.kt)("inlineCode",{parentName:"p"},"none")," in order not to store anything client side. You may also leverage ",(0,n.kt)("inlineCode",{parentName:"p"},"anonymousTracking")," to control when values are stored in cookies or local storage."),(0,n.kt)("p",null,"The stored state takes the form of two first party cookies: the session cookie and the ID cookie. By default their names are prefixed with \u201c",(0,n.kt)("em",{parentName:"p"},"sp"),"\u201c, but you can change this using the \u201ccookieName\u201d field in the argmap. Their names are suffixed with a hash of the current domain, so the full cookie names might look something like ","_","sp","_","ses.4209 and ","_","sp","_","id.4209."),(0,n.kt)("h4",{id:"the-session-cookie"},"The session cookie"),(0,n.kt)("p",null,"Called ","_","sp","_","ses.{{DOMAIN HASH}} by default, the only purpose of this cookie is to differentiate between different visits. Whenever an event is fired, the session cookie is set to expire in 30 minutes. (This value can be altered using\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"setSessionCookieTimeout"),")"),(0,n.kt)("p",null,"If no session cookie is already present when an event fires, the tracker treats this as an indication that long enough has passed since the user last visited that this session should be treated as a new session rather than a continuation of the previous session. The\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"visitCount"),"\xa0(how many times the user has visited) is increased by one and the\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"lastVisitTs"),"\xa0(the timestamp for the last session) is updated."),(0,n.kt)("p",null,"Note: A new session can be started at any time by calling the function\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"newSession"),"."),(0,n.kt)("h4",{id:"the-id-cookie"},"The ID cookie"),(0,n.kt)("p",null,"This cookie is called ","_","sp","_","id.{{DOMAIN HASH}} by default. It is used to persist information about a user\u2019s activity on the domain between sessions. It contains the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An ID for the user based on a v4 (random) UUID. Generated by the ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/uuid"},"uuid")," library."),(0,n.kt)("li",{parentName:"ul"},"How many times the user has visited the domain"),(0,n.kt)("li",{parentName:"ul"},"The timestamp of the user\u2019s first visit"),(0,n.kt)("li",{parentName:"ul"},"The timestamp of the current visit"),(0,n.kt)("li",{parentName:"ul"},"The timestamp of the last visit"),(0,n.kt)("li",{parentName:"ul"},"The ID of the current session"),(0,n.kt)("li",{parentName:"ul"},"ID of the previous session (since version 3.5)"),(0,n.kt)("li",{parentName:"ul"},"ID of the first event in the current session (since version 3.5)"),(0,n.kt)("li",{parentName:"ul"},"Device created timestamp of the first event in the current session (since version 3.5)"),(0,n.kt)("li",{parentName:"ul"},"Index of the last event in the session (used to inspect order of events) (since version 3.5)")),(0,n.kt)("p",null,"It expires after 2 years."),(0,n.kt)("h4",{id:"the-collector-cookie"},"The Collector cookie"),(0,n.kt)("p",null,"There is a third sort of Snowplow-related cookie: the cookie set by the Collector, independently of the JavaScript Tracker. The Collector cookie is called \u201csp\u201d. It is either a first or third-party cookie, depending on the collector URL, used to track users over multiple domains. It expires after one year."))}i.isMDXComponent=!0}}]);