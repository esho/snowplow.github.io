"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[26655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Migration guide: v0.12",date:"2022-03-24",sidebar_position:70},l=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/java-tracker/migration-guide-v0-12/index",id:"collecting-data/collecting-from-own-applications/java-tracker/migration-guide-v0-12/index",title:"Migration guide: v0.12",description:"Several new features were added in v0.12. See the Github changelog for full details. Unfortunately, these improvements involve multiple breaking changes. See below for a guide to the changes.",source:"@site/docs/collecting-data/collecting-from-own-applications/java-tracker/migration-guide-v0-12/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/java-tracker/migration-guide-v0-12",slug:"/collecting-data/collecting-from-own-applications/java-tracker/migration-guide-v0-12/",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/migration-guide-v0-12/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/java-tracker/migration-guide-v0-12/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:70,frontMatter:{title:"Migration guide: v0.12",date:"2022-03-24",sidebar_position:70},sidebar:"defaultSidebar",previous:{title:"What do Java tracker events look like?",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/what-do-java-tracker-events-look-like/"},next:{title:"Previous versions",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/"}},p={},c=[{value:"<code>BatchEmitter</code>",id:"batchemitter",level:3},{value:"<code>SimpleEmitter</code>",id:"simpleemitter",level:3},{value:"<code>Emitter</code> interface",id:"emitter-interface",level:3},{value:"Getting an event&#39;s <code>eventId</code>",id:"getting-an-events-eventid",level:3},{value:"<code>Event</code>, <code>AbstractEvent</code>, and child classes",id:"event-abstractevent-and-child-classes",level:3},{value:"<code>TrackerEvent</code> and callbacks",id:"trackerevent-and-callbacks",level:3}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Several new features were added in v0.12. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-java-tracker"},"Github")," changelog for full details. Unfortunately, these improvements involve multiple breaking changes. See below for a guide to the changes."),(0,r.kt)("h3",{id:"batchemitter"},(0,r.kt)("inlineCode",{parentName:"h3"},"BatchEmitter")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchEmitter.Builder")," configuration options have changed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Updated"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bufferSize")," has been renamed ",(0,r.kt)("inlineCode",{parentName:"li"},"batchSize"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requestExecutorService()")," now requires a ",(0,r.kt)("inlineCode",{parentName:"li"},"ScheduledExecutorService"),", rather than just ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutorService"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Removed"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requestCallback()")," is gone, since events that fail to send will now be automatically retried.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Added")," (these are not breaking changes):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eventStore()"),". It's now possible to design your own event buffer using the ",(0,r.kt)("inlineCode",{parentName:"li"},"EventStore")," interface. This is an optional setting, with a default of ",(0,r.kt)("inlineCode",{parentName:"li"},"InMemoryEventStore"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bufferCapacity()"),". Set the maximum capacity of the default ",(0,r.kt)("inlineCode",{parentName:"li"},"InMemoryEventStore"),". Again, this setting is optional. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"Integer.MAX_VALUE")," (the maximum capacity of the queue used).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": creating a BatchEmitter with the relevant options",(0,r.kt)("br",{parentName:"p"}),"\n","Old API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BatchEmitter batchEmitter = BatchEmitter.builder()\n        .url("http://collector.url")\n        .bufferSize(20)\n        .requestCallback( {{ A callback }} )\n        .requestExecutorService(ExecutorService)\n        .build();\n')),(0,r.kt)("p",null,"Version 0.12:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BatchEmitter batchEmitter = BatchEmitter.builder()\n        .url("http://collector.url")\n        .batchSize(20)\n        .eventStore(EventStore)\n        .bufferCapacity(1000000) // this won\'t do anything since eventStore is specified\n        .requestExecutorService(ScheduledExecutorService)\n        .build();\n')),(0,r.kt)("h3",{id:"simpleemitter"},(0,r.kt)("inlineCode",{parentName:"h3"},"SimpleEmitter")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SimpleEmitter")," has been deprecated. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchEmitter")," instead, or create your own ",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter")," using the provided interface. Like ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleEmitter"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchEmitter")," sends events asynchronously. However, requests are made using POST, rather than GET. We strongly recommend sending events in batches, but to mimic SimpleEmitter in sending events one-by-one, use a ",(0,r.kt)("inlineCode",{parentName:"p"},"batchSize")," of 1."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleEmitter")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchEmitter"),(0,r.kt)("br",{parentName:"p"}),"\n","Old API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SimpleEmitter simpleEmitter = SimpleEmitter.builder()\n        .url("http://collector.url")\n        .build();\n\nTracker tracker = new Tracker.TrackerBuilder(simpleEmitter, "namespace", "appId")\n        .build();\n')),(0,r.kt)("p",null,"Version 0.12:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BatchEmitter batchEmitter = BatchEmitter.builder()\n        .url("http://collector.url")\n        .batchSize(1)\n        .build();\n\nTracker tracker = new Tracker.TrackerBuilder(batchEmitter, "namespace", "appId")\n        .build();\n')),(0,r.kt)("h3",{id:"emitter-interface"},(0,r.kt)("inlineCode",{parentName:"h3"},"Emitter")," interface"),(0,r.kt)("p",null,"Every method in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter")," interface has been updated!"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setBufferSize()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getBufferSize()")," have been renamed ",(0,r.kt)("inlineCode",{parentName:"p"},"setBatchSize()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getBatchSize()"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getBuffer()")," now returns a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerPayload")," objects rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerEvent")," objects (which no longer exist)."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("inlineCode",{parentName:"p"},"emit()")," is now more accurately called ",(0,r.kt)("inlineCode",{parentName:"p"},"add()"),', as in "add to buffer". It takes a ',(0,r.kt)("inlineCode",{parentName:"p"},"TrackerPayload")," object, not a ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerEvent"),", and has a new return type: a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", used to confirm that the ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerPayload")," has been successfully added to the buffer."),(0,r.kt)("h3",{id:"getting-an-events-eventid"},"Getting an event's ",(0,r.kt)("inlineCode",{parentName:"h3"},"eventId")),(0,r.kt)("p",null,"We are aware of some use cases involving exporting the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventId"),"s of tracked Events to third-party apps. The ",(0,r.kt)("inlineCode",{parentName:"p"},"eventId")," is now returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker.track()"),". It's returned in a list to allow for ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," events, which generate multiple payloads. If the event buffer is full, the event is lost. In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," will be returned instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventId"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": getting the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventId"),(0,r.kt)("br",{parentName:"p"}),"\n","Old API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PageView pageView = PageView.builder()\n        .pageUrl("https://www.snowplowanalytics.com")\n        .build();\n\nString eventId = pageView.getEventId();\n')),(0,r.kt)("p",null,"Version 0.12:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PageView pageView = PageView.builder()\n        .pageUrl("https://www.snowplowanalytics.com")\n        .build();\n\nList<String> eventIds = tracker.track(pageView);\nString eventId = eventIds.get(0);\n')),(0,r.kt)("h3",{id:"event-abstractevent-and-child-classes"},(0,r.kt)("inlineCode",{parentName:"h3"},"Event"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"AbstractEvent"),", and child classes"),(0,r.kt)("p",null,"Several methods have been removed: the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," interface and ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractEvent")," methods ",(0,r.kt)("inlineCode",{parentName:"p"},"getDeviceCreatedTimestamp()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"getEventId()"),"; and the ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractEvent.Builder")," methods ",(0,r.kt)("inlineCode",{parentName:"p"},"deviceCreatedTimestamp()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"eventId()"),". The deprecated ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getTimestamp()")," methods have been removed from these classes too."),(0,r.kt)("p",null,'Having discovered them, we deleted these methods immediately (rather than deprecating) as we considered them very dangerous. Allowing custom UUIDs can accidentally lead to non-unique "unique" identifiers, which causes big problems for pipelines, and risks data loss.'),(0,r.kt)("p",null,"Despite the name, ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," objects are no longer associated with an ",(0,r.kt)("inlineCode",{parentName:"p"},"eventId")," ; this is generated when the ",(0,r.kt)("inlineCode",{parentName:"p"},"Payload")," object is made. The main purpose of the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventId")," is to provide a UUID for events once they have been received by the collector and are in the pipeline."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": creating a PageView with all the options",(0,r.kt)("br",{parentName:"p"}),"\n","Old API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PageView pageViewEvent = PageView.builder()\n        .pageTitle("Snowplow Analytics")\n        .pageUrl("https://www.snowplowanalytics.com")\n        .referrer("https://www.google.com")\n        .customContext(SelfDescribingJson)\n        .subject(Subject)\n        .trueTimestamp(1646834667343L)\n        .deviceCreatedtimestamp(1646834667123L)\n        .eventId("UUID")\n        .build();\n')),(0,r.kt)("p",null,"Version 0.12:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PageView pageViewEvent = PageView.builder()\n        .pageTitle("Snowplow Analytics")\n        .pageUrl("https://www.snowplowanalytics.com")\n        .referrer("https://www.google.com")\n        .customContext(SelfDescribingJson)\n        .subject(Subject)\n        .trueTimestamp(1646834667343L)\n        .build();\n')),(0,r.kt)("h3",{id:"trackerevent-and-callbacks"},(0,r.kt)("inlineCode",{parentName:"h3"},"TrackerEvent")," and callbacks"),(0,r.kt)("p",null,"This class no longer exists. It was a wrapper around tracked ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," objects to allow request callbacks. ",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),"s were stored in the buffer as ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerEvent")," until event sending, when a ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerPayload")," would be extracted. ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerPayload")," objects are now stored directly."),(0,r.kt)("p",null,"Callbacks allowed developers to re-track events that failed to send - if a HTTP response code other than 2xx was received. This put the burden on users to handle retry. Now that the tracker automatically retries, callbacks are no longer necessary, and have been removed."))}s.isMDXComponent=!0}}]);