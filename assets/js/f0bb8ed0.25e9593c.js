"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[30176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Adding data to your events: context and more",date:"2021-11-16",sidebar_position:3e3},o=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/roku-tracker/adding-data/index",id:"collecting-data/collecting-from-own-applications/roku-tracker/adding-data/index",title:"Adding data to your events: context and more",description:"There are multiple ways to add extra data to your tracked events, adding richness and value to your dataset. Each of them involves a different class from the Roku tracker.",source:"@site/docs/collecting-data/collecting-from-own-applications/roku-tracker/adding-data/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/roku-tracker/adding-data",slug:"/collecting-data/collecting-from-own-applications/roku-tracker/adding-data/",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/adding-data/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/roku-tracker/adding-data/index.md",tags:[],version:"current",lastUpdatedAt:1663236058,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:3e3,frontMatter:{title:"Adding data to your events: context and more",date:"2021-11-16",sidebar_position:3e3},sidebar:"defaultSidebar",previous:{title:"Tracking Events",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events/"},next:{title:"Configuring how events are sent",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/configuration/"}},s={},d=[{value:"Event context",id:"event-context",level:2},{value:"Adding user and platform data with Subject",id:"adding-user-and-platform-data-with-subject",level:2},{value:"Event timestamps",id:"event-timestamps",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are multiple ways to add extra data to your tracked events, adding richness and value to your dataset. Each of them involves a different class from the Roku tracker."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Event context using self-describing data: Attach event context, describing anything you like, in the form of self-describing JSONs."),(0,r.kt)("li",{parentName:"ol"},"Subject: Include information about the user, or the platform on which the event occurred."),(0,r.kt)("li",{parentName:"ol"},"Timestamp: Override the default event timestamp with your own timestamp.")),(0,r.kt)("p",null,"You can attach any of these as additional arguments to the track event methods."),(0,r.kt)("h2",{id:"event-context"},(0,r.kt)("a",{parentName:"h2",href:"#event-context"}),"Event context"),(0,r.kt)("p",null,"Event context is an incredibly powerful aspect of Snowplow tracking, which allows you to create very rich data. It is based on the same self-describing JSON schemas as the self-describing events. Using event context, you can add any details you like to your events, as long as you can describe them in a self-describing JSON schema."),(0,r.kt)("p",null,'Each schema will describe a single "entity". All of an event\u2019s entities together form the event context. The event context will be sent as one field of the event, finally ending up in one column (',(0,r.kt)("inlineCode",{parentName:"p"},"context"),") in your data storage. There is no limit to how many entities can be attached to one event."),(0,r.kt)("p",null,"Note that context can be added to any event type, not just self-describing events. This means that even a simple event type like a page view can hold complex and extensive information \u2013 reducing the chances of data loss and the amount of modelling (JOINs etc.) needed in modelling, while increasing the value of each event, and the sophistication of the possible use cases."),(0,r.kt)("p",null,"The entities you provide are validated against their schemas as the event is processed (during the enrich phase). If there is a mistake or mismatch, the event is processed as a Bad Event."),(0,r.kt)("p",null,'Once defined, an entity can be attached to any kind of event. This is also an important point; it means your tracking is as DRY as possible. Using the same "user" or "image" or "search result" (etc.) entities throughout your tracking reduces error, and again makes the data easier to model.'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-brightscript"},'m.global.snowplow.screenView = {\n    id: "screen23",\n    context: [\n        {\n            schema: "iglu:com.my_company/movie_poster/jsonschema/1-0-0",\n            data: {\n                movie_name: "Solaris",\n                poster_country: "JP",\n                poster_date: "1978-01-01"\n            }\n        },\n        {\n            schema: "iglu:com.my_company/customer/jsonschema/1-0-0",\n            data: {\n                p_buy: 0.23,\n                segment: "young_adult"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"adding-user-and-platform-data-with-subject"},(0,r.kt)("a",{parentName:"h2",href:"#adding-user-and-platform-data-with-subject"}),"Adding user and platform data with Subject"),(0,r.kt)("p",null,"Subject information describes the user and device associated with the event, such as their user ID, what type of device they used, or what size screen that device had."),(0,r.kt)("p",null,"This information can be entered during tracker initialization by passing a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"subject"),"\xa0associative array to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"\xa0method. All of the information is optional."),(0,r.kt)("p",null,"Some subject information is filled automatically by the tracker. This includes the platform of the user, timezone, language, resolution, and viewport."),(0,r.kt)("p",null,"The following table lists all the properties that can be set in tracker initialization. These are all part of the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domainUserId")),(0,r.kt)("td",{parentName:"tr",align:null},"Cookie-based unique identifier for user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"networkUserId")),(0,r.kt)("td",{parentName:"tr",align:null},"Cookie-based unique identifier for user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appId")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for application")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-brightscript"},'m.global.snowplow.init = {\n    subject: {\n        domainUserId: "...",\n        networkUserId: "...",\n        appId: "..."\n    }\n}\n')),(0,r.kt)("h2",{id:"event-timestamps"},(0,r.kt)("a",{parentName:"h2",href:"#event-timestamps"}),"Event timestamps"),(0,r.kt)("p",null,"Processed Snowplow events have five different timestamps."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Timestamp name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dtm")),(0,r.kt)("td",{parentName:"tr",align:null},"Device timestamp. Added automatically during event creation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ttm")),(0,r.kt)("td",{parentName:"tr",align:null},"True timestamp. This can be manually set as an alternative to\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"dtm"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stm")),(0,r.kt)("td",{parentName:"tr",align:null},"Sent timestamp. Added automatically on event sending.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collector_tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Added by the event collector.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"etl_tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Added after event enrichment during the processing pipeline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"derived_tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Either a calculated value (",(0,r.kt)("inlineCode",{parentName:"td"},"collector_tstamp"),"\xa0- (",(0,r.kt)("inlineCode",{parentName:"td"},"stm"),"\xa0-\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"dtm"),")) or the same as\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"ttm"))))),(0,r.kt)("p",null,"Overriding the default event timestamp (",(0,r.kt)("inlineCode",{parentName:"p"},"dtm"),") with\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ttm"),"\xa0can be useful in some situations. For example, if the Snowplow event refers to an action that happened previously but is only now being tracked. The type of the timestamp is a string with number of milliseconds since the Unix epoch."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-brightscript"},'m.global.snowplow.structured = {\n    se_ca: "category",\n    se_ac: "action",\n    se_va: 10,\n    ttm: CreateObject("roDateTime").AsSeconds().ToStr() + "000"\n}\n')),(0,r.kt)("p",null,"This\xa0",(0,r.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/t/which-timestamp-is-the-best-to-see-when-an-event-occurred/538"},"Discourse forums"),"\xa0post explains why you may wish to use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"derived_tstamp"),"\xa0as the main event timestamp rather than\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"dvce_created_tstamp"),"\xa0(",(0,r.kt)("inlineCode",{parentName:"p"},"dtm"),")."))}p.isMDXComponent=!0}}]);