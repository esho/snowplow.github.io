"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[40029],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=c(a),u=o,m=k["".concat(l,".").concat(u)]||k[u]||d[u]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},73859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),r=a(7838);const i={title:"Cookies & Local Storage",date:"2020-02-21",sidebar_position:4200},s=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/cookies-local-storage/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/cookies-local-storage/index",title:"Cookies & Local Storage",description:"",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/cookies-local-storage/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/cookies-local-storage",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/cookies-local-storage/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/cookies-local-storage/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/cookies-local-storage/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:4200,frontMatter:{title:"Cookies & Local Storage",date:"2020-02-21",sidebar_position:4200},sidebar:"tutorialSidebar",previous:{title:"Third Party CDN Hosting",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/third-party-cdn-hosting/"},next:{title:"How the tracker stores state",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/cookies-local-storage/how-the-tracker-stores-state/"}},c={},p=[],d={toc:p};function k(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.ZP,{mdxType:"Block5488"}))}k.isMDXComponent=!0},7838:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),o=(a(67294),a(3905));const r={toc:[]};function i(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, the Snowplow JavaScript and Browser Tracker make use of Cookies and Local Storage. The behaviour of each of these cookies and local storage keys are described here. The base name of each cookie can be configured by following these\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/initialization-options/#Configuring_the_cookie_name"},"instructions"),"."),(0,o.kt)("h1",{id:"cookies"},(0,o.kt)("a",{parentName:"h1",href:"https://github.com/snowplow/snowplow/wiki/Javascript-Tracker-Cookies-and-Local-Storage#cookies"}),"Cookies"),(0,o.kt)("p",null,"Cookies are only stored if\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"stateStorageStrategy"),"\xa0is set to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"cookie"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"cookieAndLocalStorage"),"\xa0(default) or if the deprecated tracker initialisation argument\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"configUseCookies"),"\xa0is set to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\xa0(default). When using\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"cookieAndLocalStorage"),"\xa0this will prefer cookie storage for\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"_sp_id"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"_sp_ses"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Cookie Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Expires"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"_","sp","_","id"),(0,o.kt)("td",{parentName:"tr",align:null},"2 years or\xa0",(0,o.kt)("inlineCode",{parentName:"td"},"cookieLifetime"),"\xa0set on tracker initialisation"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores user information that is created when a user first visits a site and updated on subsequent visits. It is used to identify users and track the users activity across a domain. This cookie stores a unique identifier for each user, a unique identifier for the users current session, the number of visits a user has made to the site, the timestamp of the users first visit, the timestamp of their previous visit and the timestamp of their current visit, references to previous session and first event in the current session, and index of the last event in the session.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"_","sp","_","ses"),(0,o.kt)("td",{parentName:"tr",align:null},"30 minutes or\xa0",(0,o.kt)("inlineCode",{parentName:"td"},"sessionCookieTimeout"),"\xa0set on tracker initialisation"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to identify if the user is in an active session on a site or if this is a new session for a user (i.e. cookie doesn't exist or has expired).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"When using ",(0,o.kt)("inlineCode",{parentName:"td"},"anonymousTracking: { withSessionTracking: true }")," (2.15.0+) this key will contain a ",(0,o.kt)("em",{parentName:"td"},"salt")," value which is used to stitch page views into a session. The value is never sent to the collector."),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sp"),(0,o.kt)("td",{parentName:"tr",align:null},"1 year or\xa0",(0,o.kt)("inlineCode",{parentName:"td"},"collector.cookie.expiration"),"\xa0set in collector config"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores a server-side collector generated unique identifier for a user that is sent with all subsequent tracking event events. Can be used as a first party cookie is the collector is on the same domain as the site. Can be disabled by setting\xa0",(0,o.kt)("inlineCode",{parentName:"td"},"collector.cookie.enabled"),"\xa0to false (See\xa0",(0,o.kt)("a",{parentName:"td",href:"/docs/pipeline-components-and-applications/stream-collector/configure/"},"here"),"\xa0for more information).")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"_sp_id"),"\xa0is stored in the format:\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"{domainUserId}.{createdTime}.{visitCount}.{nowTime}.{lastVisitTime}.{sessionId}.{previousSessionId}.{firstEventId}.{firstEventTsInMs}.{eventIndex}"),". Please note that the last 4 parts of the cookie (",(0,o.kt)("inlineCode",{parentName:"p"},"previousSessionId"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"firstEventId"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"firstEventTsInMs"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"eventIndex"),") are only available since version 3.5 of the tracker."),(0,o.kt)("h1",{id:"local-storage"},(0,o.kt)("a",{parentName:"h1",href:"https://github.com/snowplow/snowplow/wiki/Javascript-Tracker-Cookies-and-Local-Storage#local-storage"}),"Local Storage"),(0,o.kt)("p",null,"Local Storage will only be used if\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"stateStorageStrategy"),"\xa0is set to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"localStorage"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"cookieAndLocalStorage"),"\xa0(default) or if the deprecated tracker initialisation argument\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"configUseLocaStorage"),"\xa0is set to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\xa0(default). Both cookies listed above can be stored in local storage rather than as cookies by setting\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"stateStorageStrategy"),"\xa0to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"localStorage"),". Local storage can be disabled by setting\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"stateStorageStrategy"),"\xa0to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"cookie"),"\xa0or\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Storage Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"snowplowOutQueue","_","{namespace}","_","post2"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to store a cache of unsent events. This is used to reduce the chance of events to be lost due to page navigation and events not being set to the collector before the navigation event occurs. Where GET requests are used, this key will end in\xa0",(0,o.kt)("inlineCode",{parentName:"td"},"_get"),"\xa0rather than\xa0",(0,o.kt)("inlineCode",{parentName:"td"},"_post2"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"snowplowOutQueue","_","{namespace}","_","post2.expires"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to match the concept of cookie expiry within Local Storage. This ensures a consistent behaviour between cookie and local storage. Where GET requests are used, this key will end in\xa0",(0,o.kt)("inlineCode",{parentName:"td"},"_get"),"\xa0rather than\xa0",(0,o.kt)("inlineCode",{parentName:"td"},"_post2"),".")))),(0,o.kt)("h1",{id:"mapping-values-to-tracker-protocol"},(0,o.kt)("a",{parentName:"h1",href:"https://github.com/snowplow/snowplow/wiki/Javascript-Tracker-Cookies-and-Local-Storage#mapping-values-to-tracker-protocol"}),"Mapping Values to Tracker Protocol"),(0,o.kt)("p",null,"The values stored in the cookies listed above are mapped into the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"tracker protocol"),"\xa0when events are sent to a Snowplow Collector."),(0,o.kt)("p",null,"The below table shows which parameters the cookie values map to:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Request Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Event Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Cookie Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"duid"),(0,o.kt)("td",{parentName:"tr",align:null},"domain","_","userid"),(0,o.kt)("td",{parentName:"tr",align:null},"_","sp","_","id.domainUserId")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nuid"),(0,o.kt)("td",{parentName:"tr",align:null},"network","_","userid"),(0,o.kt)("td",{parentName:"tr",align:null},"sp")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"vid"),(0,o.kt)("td",{parentName:"tr",align:null},"domain","_","sessionidx"),(0,o.kt)("td",{parentName:"tr",align:null},"_","sp","_","id.visitCount")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sid"),(0,o.kt)("td",{parentName:"tr",align:null},"domain","_","sessionid"),(0,o.kt)("td",{parentName:"tr",align:null},"_","sp","_","id.sessionId")))),(0,o.kt)("h1",{id:"allowing-users-to-opt-out"},(0,o.kt)("a",{parentName:"h1",href:"https://github.com/snowplow/snowplow/wiki/Javascript-Tracker-Cookies-and-Local-Storage#allowing-users-to-opt-out"}),"Allowing users to Opt Out"),(0,o.kt)("p",null,"The JavaScript tracker offers two methods that allow the users to opt out of using cookies (and local storage in the case of ","_","sp","_","id and ","_","sp","_","ses)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/initialization-options/#Anonymous_Tracking"},"Anonymous Tracking")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/initialization-options/#Respecting_Do_Not_Track"},"Respecting Do Not Track")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/initialization-options/#Opt-out_cookie"},"Set an opt out cookie"))),(0,o.kt)("h1",{id:"further-information"},(0,o.kt)("a",{parentName:"h1",href:"https://github.com/snowplow/snowplow/wiki/Javascript-Tracker-Cookies-and-Local-Storage#further-information"}),"Further Information"),(0,o.kt)("p",null,"How the JavaScript tracker utilises these cookies to store state as well as information on how to retrieve the values can be found below."))}i.isMDXComponent=!0}}]);