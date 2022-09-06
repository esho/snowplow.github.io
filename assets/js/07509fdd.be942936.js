"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[13109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Client Sessions",date:"2020-02-25",sidebar_position:70},o=void 0,s={unversionedId:"collecting-data/collecting-from-own-applications/c-tracker/client-sessions/index",id:"collecting-data/collecting-from-own-applications/c-tracker/client-sessions/index",title:"Client Sessions",description:"You can optionally decide to include Client Sessionization. This object will keep track of your users sessions and can be configured to timeout after a certain amount of inactivity.",source:"@site/docs/collecting-data/collecting-from-own-applications/c-tracker/client-sessions/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/c-tracker/client-sessions",slug:"/collecting-data/collecting-from-own-applications/c-tracker/client-sessions/",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/client-sessions/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/c-tracker/client-sessions/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:70,frontMatter:{title:"Client Sessions",date:"2020-02-25",sidebar_position:70},sidebar:"defaultSidebar",previous:{title:"Emitters",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/emitters/"},next:{title:"Upgrading to Newer Versions",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/upgrading-to-newer-versions/"}},l={},c=[{value:"Session store",id:"session-store",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can optionally decide to include Client Sessionization. This object will keep track of your users sessions and can be configured to timeout after a certain amount of inactivity."),(0,r.kt)("p",null,"Activity is determined by how often events are sent with the Tracker \u2013 so you will need to send events to keep the current session active. Sessions are updated when new events are tracked. There are two timeouts that are checked: foreground and background timeout. Depending on whether the app is in foreground or backgroud, the relevant timeout is used to compare the time difference since previous event and, in case it surpasses the timeout, a new session is started."),(0,r.kt)("p",null,"In\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/c-tracker/initialisation/"},"Initialisation"),", we discussed how to create a tracker with optional session tracking enabled and configurable foreground and background timeouts. If you enabled session tracking when creating the tracker, you can access a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ClientSession"),"\xa0instance using the tracker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"auto client_session = Snowplow::get_default_tracker()->get_client_session();\n")),(0,r.kt)("p",null,"To set the background/foreground state you will need to detect this and then set this on the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ClientSession"),"\xa0object like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"client_session.set_is_background(true || false);\n")),(0,r.kt)("p",null,"When client sessions are used, the\xa0",(0,r.kt)("a",{parentName:"p",href:"http://iglucentral.com/schemas/com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-2"},(0,r.kt)("inlineCode",{parentName:"a"},"client_session")),"\xa0context entity is added to all tracked event. This entity consists of the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userId")),(0,r.kt)("td",{parentName:"tr",align:null},"An identifier for the user of the session."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sessionId")),(0,r.kt)("td",{parentName:"tr",align:null},"An identifier (UUID) for the session."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sessionIndex")),(0,r.kt)("td",{parentName:"tr",align:null},"The index of the current session for this user."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventIndex")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional index of the current event in the session. Signifies the order of events in which they were tracked."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"previousSessionId")),(0,r.kt)("td",{parentName:"tr",align:null},"The previous session identifier (UUID) for this user."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"storageMechanism")),(0,r.kt)("td",{parentName:"tr",align:null},"The mechanism that the session information has been stored on the device."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"firstEventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The optional identifier (UUID) of the first event id for this session."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"firstEventTimestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional date-time timestamp of when the first event in the session was tracked."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"session-store"},"Session store"),(0,r.kt)("p",null,"The session store is used to persist the currently active session."),(0,r.kt)("p",null,"The tracker provides the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SqliteStorage"),"\xa0class that can be used as the session store. However, you may also provide a custom session store implementation. To do so, define a class that inherits from the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SessionStore"),"\xa0struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct SessionStore {\n  virtual unique_ptr<json> get_session() = 0;\n  virtual void set_session(const json &session_data) = 0;\n  virtual void delete_session() = 0;\n};\n")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SessionStore"),"\xa0struct defines functions to retrieve, set, and delete the current session. It represents sessions in their JSON format. The three operations have the following behavior:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get_session")),(0,r.kt)("td",{parentName:"tr",align:null},"Return a unique pointer to the current session or nullptr if it doesn't exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set_session")),(0,r.kt)("td",{parentName:"tr",align:null},"Persist the current session.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"delete_session")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove and reset the current session.")))))}p.isMDXComponent=!0}}]);