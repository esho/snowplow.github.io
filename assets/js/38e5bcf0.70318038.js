"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[27718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Tracking events",date:"2022-03-24",sidebar_position:20},l=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/java-tracker/tracking-events/index",id:"collecting-data/collecting-from-own-applications/java-tracker/tracking-events/index",title:"Tracking events",description:"To track an event, pass an Event instance to the Tracker.",source:"@site/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/java-tracker/tracking-events",slug:"/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/index.md",tags:[],version:"current",lastUpdatedAt:1662564480,formattedLastUpdatedAt:"Sep 7, 2022",sidebarPosition:20,frontMatter:{title:"Tracking events",date:"2022-03-24",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Installation and set-up",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/"},next:{title:"Custom tracking using schemas",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"}},s={},p=[{value:"Auto-tracked events",id:"auto-tracked-events",level:2},{value:"Manually-tracked events summary",id:"manually-tracked-events-summary",level:2},{value:"Tracking data that is not event-type specific",id:"tracking-data-that-is-not-event-type-specific",level:3},{value:"Creating a custom event (SelfDescribing)",id:"creating-a-custom-event-selfdescribing",level:3},{value:"Creating a <code>ScreenView</code> event",id:"creating-a-screenview-event",level:3},{value:"Creating a <code>Timing</code> event",id:"creating-a-timing-event",level:3},{value:"Creating a PageView event",id:"creating-a-pageview-event",level:3},{value:"Creating a <code>Structured</code> event",id:"creating-a-structured-event",level:3},{value:"Creating <code>EcommerceTransaction</code> and <code>EcommerceTransactionItem</code> events",id:"creating-ecommercetransaction-and-ecommercetransactionitem-events",level:3},{value:"Adding custom timestamps to events",id:"adding-custom-timestamps-to-events",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To track an event, pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," instance to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker"),". "),(0,r.kt)("p",null,"For example, tracking a ScreenView:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Event event = new ScreenView.builder()\n                .name("screen name")\n                .build();\ntracker.track(event);\n')),(0,r.kt)("p",null,"The Java tracker makes it easy to track different kinds of data. We provide a range of ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," classes for tracking out-of-the-box event types as well as fully custom events. "),(0,r.kt)("p",null,"Every tracked event payload has a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"event_id")," UUID string. Other ubiquitous properties include the ",(0,r.kt)("inlineCode",{parentName:"p"},"name_tracker")," (",(0,r.kt)("inlineCode",{parentName:"p"},"trackerNamespace"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"app_id")," (",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),") set when the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," was initialized. From version 0.12 onwards, ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker.track()")," returns the payload's ",(0,r.kt)("inlineCode",{parentName:"p"},"eventId"),"."),(0,r.kt)("p",null,"Snowplow events have a defined structure and ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"protocol")," that is identical regardless of the tracker used. A minimal payload - the raw event - is sent from the tracker to your collector. The raw event is ",(0,r.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/what-is-enrichment/"},"enriched")," as it passes through your pipeline. By the time the event arrives in your data storage, depending which ",(0,r.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/available-enrichments/"},"enrichments")," you have enabled, it will have gained different kinds of metadata, and have many more fields than it started with. The default Java tracker event fields are shown ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/what-do-java-tracker-events-look-like/"},"here"),". "),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-java-tracker"},"Java tracker Github repository"),' includes a mini demo, "simple-console". The demo sends one event of each type to your event collector.'),(0,r.kt)("h2",{id:"auto-tracked-events"},"Auto-tracked events"),(0,r.kt)("p",null,"The Java tracker does not yet support automatic event tracking. All tracking must be implemented manually."),(0,r.kt)("h2",{id:"manually-tracked-events-summary"},"Manually-tracked events summary"),(0,r.kt)("p",null,"The Java tracker provides classes for tracking different types of events. They are listed below.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Event")," class"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"e")," in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"eventType")," in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelfDescribing")," (custom)"),(0,r.kt)("td",{parentName:"tr",align:null},"ue"),(0,r.kt)("td",{parentName:"tr",align:null},"unstruct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ScreenView")),(0,r.kt)("td",{parentName:"tr",align:null},"ue"),(0,r.kt)("td",{parentName:"tr",align:null},"unstruct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Timing")),(0,r.kt)("td",{parentName:"tr",align:null},"ue"),(0,r.kt)("td",{parentName:"tr",align:null},"unstruct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PageView")),(0,r.kt)("td",{parentName:"tr",align:null},"pv"),(0,r.kt)("td",{parentName:"tr",align:null},"page_view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Structured")),(0,r.kt)("td",{parentName:"tr",align:null},"se"),(0,r.kt)("td",{parentName:"tr",align:null},"struct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EcommerceTransaction")),(0,r.kt)("td",{parentName:"tr",align:null},"tr"),(0,r.kt)("td",{parentName:"tr",align:null},"transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EcommerceTransactionItem")),(0,r.kt)("td",{parentName:"tr",align:null},"ti"),(0,r.kt)("td",{parentName:"tr",align:null},"transaction_item")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," are a legacy design and will be deprecated soon.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," events (called ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," prior to v1) allow you to track anything that can be described by a ",(0,r.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"JSON schema"),". The data you provide will be sent as a JSON inside the raw event payload. The specific type of JSON schema needed are described fully on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"next page"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Timing")," out-of-the-box event types are actually wrappers for ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," events: the methods for building those events represent fields in their hidden self-describing JSON schemas. This is why both ",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Timing"),' events are labelled "unstruct" in the data warehouse.'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PageView")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Structured")," event types are processed differently from ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing"),' events. Properties tracked using these events are not sent packaged as JSON, but as individual "atomic" fields in the raw event payload. We call these event types "canonical" or "primitive".'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing"),' events and canonical events are loaded into and modelled differently in your data warehouse. The "atomic" fields will always have individual columns.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," events are legacy primitive events. We recommend instead designing your own ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," events plus ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"context entities")," for eCommerce tracking. "),(0,r.kt)("h3",{id:"tracking-data-that-is-not-event-type-specific"},"Tracking data that is not event-type specific"),(0,r.kt)("p",null,"Some data, such as that relating to the user whose activity is being tracked, is relevant across all event types. The Java tracker provides two mechanisms for tracking this kind of data."),(0,r.kt)("p",null,"Certain properties, including ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ipAddress"),', can be set as "atomic" properties in the raw event, using the ',(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," class. ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," properties relate mainly to client-side tracking. If you are using the Java tracker for server-side tracking, you may wish to pass client-side data for tracking server-side. This is discussed ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties/"},"here"),"."),(0,r.kt)("p",null,'A more general and powerful method is to attach self-describing JSON "context entities" to your events - the same JSON schemas as used for ',(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," events. This means that any data that can be described by a JSON schema can be added to any or all of your events. Read more on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"next page"),"."),(0,r.kt)("p",null,"All events also provide the option for setting a custom timestamp, called ",(0,r.kt)("inlineCode",{parentName:"p"},"trueTimestamp"),". See below for details."),(0,r.kt)("h3",{id:"creating-a-custom-event-selfdescribing"},"Creating a custom event (SelfDescribing)"),(0,r.kt)("p",null,"To track data using an ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," event, the data must be structured as a ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson")," object, discussed fully on the next page. These require two fields. The first is a URI for a self-describing JSON schema. The second is a data map, and the data must be valid against the schema. ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," events can be considered wrappers for sending ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson"),"."),(0,r.kt)("p",null,"The simplest initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"SelfDescribing selfDescribing = SelfDescribing.builder()\n            .eventData(dataAsSelfDescribingJson)\n            .build();\n")),(0,r.kt)("p",null,"See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/SelfDescribing.Builder.html"},"SelfDescribing.Builder")," options."),(0,r.kt)("h3",{id:"creating-a-screenview-event"},"Creating a ",(0,r.kt)("inlineCode",{parentName:"h3"},"ScreenView")," event"),(0,r.kt)("p",null,"Track screen views with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView")," event. It's a wrapper around a ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," event, using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/324cfe9a5390174a56084722a545287d01a5a060/schemas/com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0"},"this schema"),"."),(0,r.kt)("p",null,"A simple initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ScreenView screenView = ScreenView.builder()\n            .name("human readable screen name")\n            .id("unique screen ID")\n            .build();\n')),(0,r.kt)("p",null,"At least one of ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," must be set. See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/ScreenView.Builder.html"},"ScreenView.Builder")," options."),(0,r.kt)("h3",{id:"creating-a-timing-event"},"Creating a ",(0,r.kt)("inlineCode",{parentName:"h3"},"Timing")," event"),(0,r.kt)("p",null,"Track how long something took with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Timing")," event. It's a wrapper around a ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," event, using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/324cfe9a5390174a56084722a545287d01a5a060/schemas/com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0"},"this schema"),"."),(0,r.kt)("p",null,"A simple initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Timing timing = Timing.builder()\n            .category("category of the timed event")\n            .variable("name of the timed event")\n            .timing(10) // in milliseconds\n            .label("optional label")\n            .build();\n')),(0,r.kt)("p",null,"Provide your ",(0,r.kt)("inlineCode",{parentName:"p"},"timing")," value in milliseconds. The ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," property is optional. See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/Timing.Builder.html"},"Timing.Builder")," options."),(0,r.kt)("h3",{id:"creating-a-pageview-event"},"Creating a PageView event"),(0,r.kt)("p",null,"Track page views with the ",(0,r.kt)("inlineCode",{parentName:"p"},"PageView"),' event. This is a "canonical" event type; data will end up in individual "atomic" columns in the data warehouse.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Field in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},"Column in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"page_url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page title"),(0,r.kt)("td",{parentName:"tr",align:null},"page"),(0,r.kt)("td",{parentName:"tr",align:null},"page_title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"referrer URL"),(0,r.kt)("td",{parentName:"tr",align:null},"refr"),(0,r.kt)("td",{parentName:"tr",align:null},"page_referrer")))),(0,r.kt)("p",null,"The provided URLs will also be decomposed into other columns, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"page_urlscheme"),", during event ",(0,r.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/what-is-enrichment/"},"enrichment"),"."),(0,r.kt)("p",null,"A simple initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PageView pageViewEvent = PageView.builder()\n            .pageUrl("https://www.snowplowanalytics.com")\n            .pagetitle("Snowplow")\n            .referrer("https://github.com/snowplow/snowplow-java-tracker")\n            .build();\n')),(0,r.kt)("p",null,"Only ",(0,r.kt)("inlineCode",{parentName:"p"},"pageUrl")," is required. See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/PageView.Builder.html"},"PageView.Builder")," options."),(0,r.kt)("h3",{id:"creating-a-structured-event"},"Creating a ",(0,r.kt)("inlineCode",{parentName:"h3"},"Structured")," event"),(0,r.kt)("p",null,"To track custom data without schemas, use ",(0,r.kt)("inlineCode",{parentName:"p"},"Structured"),' events. They are the "canonical" equivalent of ',(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing"),' events. The provided data will end up in individual "atomic" columns in the data warehouse. Because of this, it\'s not possible to fully customise a ',(0,r.kt)("inlineCode",{parentName:"p"},"Structured")," event: the fields cannot be renamed, nor new fields added. ",(0,r.kt)("inlineCode",{parentName:"p"},"Structured")," events are designed to be similar to Google-style events.  "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Structured")," event fields have flexible definitions, and what you put into each field is up to you. This is a double-edged sword. It's highly advisable to agree business-wide on definitions for each of these fields, before implementing tracking.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Often contains data about"),(0,r.kt)("th",{parentName:"tr",align:null},"Field in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},"Column in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"Grouping for the action"),(0,r.kt)("td",{parentName:"tr",align:null},"se_ca"),(0,r.kt)("td",{parentName:"tr",align:null},"se_category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of user activity"),(0,r.kt)("td",{parentName:"tr",align:null},"se_ac"),(0,r.kt)("td",{parentName:"tr",align:null},"se_action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional event data"),(0,r.kt)("td",{parentName:"tr",align:null},"se_la"),(0,r.kt)("td",{parentName:"tr",align:null},"se_label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property"),(0,r.kt)("td",{parentName:"tr",align:null},"The action or object acted on"),(0,r.kt)("td",{parentName:"tr",align:null},"se_pr"),(0,r.kt)("td",{parentName:"tr",align:null},"se_property")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"Numerical event data"),(0,r.kt)("td",{parentName:"tr",align:null},"se_va"),(0,r.kt)("td",{parentName:"tr",align:null},"se_value")))),(0,r.kt)("p",null,"A simple initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Structured structured = Structured.builder()\n                .category("category e.g. auth")\n                .action("action e.g. logout")\n                .label("optional label")\n                .property("optional property")\n                .value(12.34)\n                .build();\n')),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," are required. See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/Structured.Builder.html"},"Structured.Builder")," options."),(0,r.kt)("h3",{id:"creating-ecommercetransaction-and-ecommercetransactionitem-events"},"Creating ",(0,r.kt)("inlineCode",{parentName:"h3"},"EcommerceTransaction")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"EcommerceTransactionItem")," events"),(0,r.kt)("p",null,"To track eCommerce data, we recommend designing your own schemas for an ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," event. We suggest creating one schema for the overall transaction, and another schema for individual items. The transaction schema can be used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," event. Items in the transaction can be added as ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"context entities"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," events are legacy events, and it's highly likely they will be deprecated in the future. They are designed to be sent together, with one ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," containing an ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," for every item in the transaction. When the ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," event is tracked, the ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," events are extracted and sent separately. This means that although you have only tracked one event (using ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker.track()"),"), multple events are generated."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem"),' are "canonical" events. The data will end up in individual "atomic" columns in the data warehouse.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"EcommerceTransaction")," property"),(0,r.kt)("th",{parentName:"tr",align:null},"Field in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},"Column in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderId"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_id"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_orderid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalValue"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_tt"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_total")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"affiliation"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_af"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_affiliation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"taxValue"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_tx"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_tax")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shipping"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_sh"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_shipping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"city"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_ci"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_st"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_co"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_country")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_cu"),(0,r.kt)("td",{parentName:"tr",align:null},"tr_currency")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"EcommerceTransactionItem")," property"),(0,r.kt)("th",{parentName:"tr",align:null},"Field in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},"Column in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"itemId"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_id"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_orderid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sku"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_sk"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_sku")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"price"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_pr"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_qu"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_quantity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_nm"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_ca"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_cu"),(0,r.kt)("td",{parentName:"tr",align:null},"ti_currency")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"orderId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"itemId")," should be the same, as it's the most direct way to associate the two events once they are in the warehouse."),(0,r.kt)("p",null,"A simple initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Create events for each item in the transaction\nEcommerceTransactionItem item = EcommerceTransactionItem.builder()\n        .itemId("should be the same as order_id")\n        .sku("sku")\n        .price(1.0)\n        .quantity(2)\n        .name("item name")\n        .category("category")\n        .currency("currency")\n        .build();\n\n// Then make the EcommerceTransaction event\nEcommerceTransaction ecommerceTransaction = EcommerceTransaction.builder()\n        .items(item) // Add the EcommerceTransactionItem events\n        .orderId("should be the same as item_id")\n        .totalValue(2.0)\n        .affiliation("affiliation")\n        .taxValue(2.0)\n        .shipping(3.0)\n        .city("city")\n        .state("state")\n        .country("country")\n        .currency("currency")\n        .build();\n')),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," events, ",(0,r.kt)("inlineCode",{parentName:"p"},"itemId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"price")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"quantity")," are required. For ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," events, only ",(0,r.kt)("inlineCode",{parentName:"p"},"orderId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"totalValue")," are required. See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/EcommerceTransaction.Builder.html"},"EcommerceTransaction.Builder")," and ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/EcommerceTransactionItem.Builder.html"},"EcommerceTransactionItem.Builder")," options."),(0,r.kt)("h3",{id:"adding-custom-timestamps-to-events"},"Adding custom timestamps to events"),(0,r.kt)("p",null,"Snowplow events have several timestamps. The raw event payload always contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"deviceCreatedTimestamp")," (",(0,r.kt)("inlineCode",{parentName:"p"},"dtm"),") and a ",(0,r.kt)("inlineCode",{parentName:"p"},"deviceSentTimestamp")," (",(0,r.kt)("inlineCode",{parentName:"p"},"stm"),"). Other timestamps are added as the event moves through the pipeline."),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.Builder")," in the Java tracker allows for a custom timestamp, called ",(0,r.kt)("inlineCode",{parentName:"p"},"trueTimestamp")," to be set. Read more about timestamps in ",(0,r.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/t/which-timestamp-is-the-best-to-see-when-an-event-occurred/538"},"this still relevant forums post"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"trueTimestamp")," can be added to any event using the ",(0,r.kt)("inlineCode",{parentName:"p"},"trueTimestamp()")," Builder method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// This example shows an Unstructured event, but all events can have a trueTimestamp\nSelfDescribing selfDescribing = SelfDescribing.builder()\n            .eventData(dataAsSelfDescribingJson)\n            .trueTimestamp(1647616394785L)\n            .build();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"trueTimestamp")," should be a ",(0,r.kt)("inlineCode",{parentName:"p"},"Long")," representing milliseconds since the Unix epoch."))}d.isMDXComponent=!0}}]);