"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[40702],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(k,l(l({ref:t},s),{},{components:a})):r.createElement(k,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Initialization",date:"2022-05-12",sidebar_position:20},l=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/initialization/index",id:"collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/initialization/index",title:"Initialization",description:"Assuming you have completed the\xa0Java Tracker Setup\xa0for your project, you are now ready to initialize the Java Tracker.",source:"@site/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/initialization/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/initialization",slug:"/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/initialization/",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/initialization/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/initialization/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:20,frontMatter:{title:"Initialization",date:"2022-05-12",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/setup/"},next:{title:"Tracking specific events",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/tracking-specific-events/"}},c={},p=[{value:"Importing the module",id:"importing-the-module",level:3},{value:"Creating a Tracker",id:"creating-a-tracker",level:3},{value:"<code>emitter</code>",id:"emitter",level:4},{value:"<code>subject</code>",id:"subject",level:4}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Assuming you have completed the\xa0Java Tracker Setup\xa0for your project, you are now ready to initialize the Java Tracker."),(0,n.kt)("h3",{id:"importing-the-module"},"Importing the module"),(0,n.kt)("p",null,"Import the Java Tracker's classes into your Java code like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.snowplowanalytics.snowplow.tracker.*;\nimport com.snowplowanalytics.snowplow.tracker.emitter.*;\nimport com.snowplowanalytics.snowplow.tracker.http.*;\n")),(0,n.kt)("p",null,"That's it - you are now ready to initialize a Tracker instance."),(0,n.kt)("h3",{id:"creating-a-tracker"},"Creating a Tracker"),(0,n.kt)("p",null,"To instantiate a tracker in your code (can be global or local to the process being tracked) simply instantiate the\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"Tracker"),"\xa0interface with the following builder patterm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Tracker.TrackerBuilder(Emitter : emitter, String : namespace, String : appId)\n  .subject(Subject)\n  .base64(boolean)\n  .platform(enum DevicePlatforms)\n  .build();\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Tracker tracker = new Tracker.TrackerBuilder(emitter, "AF003", "cf")\n                    .subject(user1Subject)\n                    .base64(true)\n                    .platform(DevicePlatform.Desktop)\n                    .build();\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Argument Name")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Required?")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Default")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"emitter")),(0,n.kt)("td",{parentName:"tr",align:null},"The Emitter object you create"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"namespace")),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the tracker instance"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"appId")),(0,n.kt)("td",{parentName:"tr",align:null},"The application ID"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"subject")),(0,n.kt)("td",{parentName:"tr",align:null},"The subject that defines a user"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"base64")),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to enable\xa0",(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Base64"},"base 64 encoding")),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"platform")),(0,n.kt)("td",{parentName:"tr",align:null},"The device the Tracker is running on"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"ServerSideApp")))),(0,n.kt)("h4",{id:"emitter"},(0,n.kt)("inlineCode",{parentName:"h4"},"emitter")),(0,n.kt)("p",null,"The emitter to which the tracker will send events. See\xa0",(0,n.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/configuring-how-events-are-sent/"},"Emitters"),"\xa0for more on emitter configuration."),(0,n.kt)("p",null,"To attach a new Emitter to the Tracker:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Emitter emitter = BatchEmitter.builder()\n        .url(collectorEndpoint)\n        .bufferSize(5) \n        .build();\n\nTracker tracker = new Tracker.TrackerBuilder(emitter, "AF003", "sp")\n                    .base64(true)\n                    .build();\n')),(0,n.kt)("h4",{id:"subject"},(0,n.kt)("inlineCode",{parentName:"h4"},"subject")),(0,n.kt)("p",null,"The user which the Tracker will track. This should be an instance of the\xa0Subject\xa0class. You don't need to set this during Tracker construction; you can also include a Subject object with the actual event; this will override the Tracker attached subject."),(0,n.kt)("p",null,"In fact, you don't need to create a subject at all. If you don't, though, your events won't contain user-specific data such as timezone and language."),(0,n.kt)("p",null,"To attach a new Subject to the Tracker:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Subject subject = SubjectBuilder.builder()\n    .userId("e2479592-4e9a-4d75-948c-7c02d2f718df")\n    .build();\n\nTracker tracker = new Tracker.TrackerBuilder(emitter, "AF003", "sp")\n                    .subject(subject)\n                    .base64(true)\n                    .platform(DevicePlatform.Desktop)\n                    .build();\n')),(0,n.kt)("p",null,"For a full list of supported platforms, please see the\xa0",(0,n.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/#Common_parameters_platform_and_event_independent"},"Snowplow Tracker Protocol"),"."))}u.isMDXComponent=!0}}]);