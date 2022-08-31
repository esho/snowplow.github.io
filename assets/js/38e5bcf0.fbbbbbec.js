"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[27718],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Tracking events",date:"2022-03-24",sidebar_position:20},l=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/java-tracker/tracking-events/index",id:"collecting-data/collecting-from-own-applications/java-tracker/tracking-events/index",title:"Tracking events",description:"To track an event, pass an Event instance to the Tracker.",source:"@site/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/java-tracker/tracking-events",slug:"/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/index.md",tags:[],version:"current",lastUpdatedAt:1661939204,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:20,frontMatter:{title:"Tracking events",date:"2022-03-24",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Installation and set-up",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/"},next:{title:"Custom tracking using schemas",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"}},c={},s=[{value:"Auto-tracked events",id:"auto-tracked-events",level:2},{value:"Manually-tracked events summary",id:"manually-tracked-events-summary",level:2},{value:"Tracking data that is not event-type specific",id:"tracking-data-that-is-not-event-type-specific",level:3},{value:"Creating a custom event (Unstructured events)",id:"creating-a-custom-event-unstructured-events",level:3},{value:"Creating a <code>ScreenView</code> event",id:"creating-a-screenview-event",level:3},{value:"Creating a <code>Timing</code> event",id:"creating-a-timing-event",level:3},{value:"Creating a <code>PageView</code> event",id:"creating-a-pageview-event",level:3},{value:"Creating a <code>Structured</code> event",id:"creating-a-structured-event",level:3},{value:"Creating <code>EcommerceTransaction</code> and <code>EcommerceTransactionItem</code> events",id:"creating-ecommercetransaction-and-ecommercetransactionitem-events",level:3},{value:"Adding custom timestamps to events",id:"adding-custom-timestamps-to-events",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To track an event, pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," instance to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker"),"."),(0,r.kt)("p",null,"For example, tracking a ",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Event event = new ScreenView.builder()\n                .name("screen name")\n                .build();\ntracker.track(event);\n')),(0,r.kt)("p",null,"The Java tracker makes it easy to track different kinds of data. We provide a range of ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," classes for tracking out-of-the-box event types as well as fully custom events."),(0,r.kt)("p",null,"Every tracked event payload has a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"event_id")," UUID string. Other ubiquitous properties include the ",(0,r.kt)("inlineCode",{parentName:"p"},"name_tracker")," (",(0,r.kt)("inlineCode",{parentName:"p"},"trackerNamespace"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"app_id")," (",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),") set when the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," was initialized. From version 0.12 onwards, ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker.track()")," returns the payload's ",(0,r.kt)("inlineCode",{parentName:"p"},"eventId"),"."),(0,r.kt)("p",null,"Snowplow events have a defined structure and ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"protocol")," that is identical regardless of the tracker used. A minimal payload - the raw event - is sent from the tracker to your collector. The raw event is ",(0,r.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/what-is-enrichment/"},"enriched")," as it passes through your pipeline. By the time the event arrives in your data storage, depending which ",(0,r.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/available-enrichments/"},"enrichments")," you have enabled, it will have gained different kinds of metadata, and have many more fields than it started with. The default Java tracker event fields are shown ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/what-do-java-tracker-events-look-like/"},"here"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-java-tracker"},"Java tracker Github repository"),' includes a mini demo, "simple-console". The demo sends one event of each type to your event collector.'),(0,r.kt)("h2",{id:"auto-tracked-events"},"Auto-tracked events"),(0,r.kt)("p",null,"The Java tracker does not yet support automatic event tracking. All tracking must be implemented manually."),(0,r.kt)("h2",{id:"manually-tracked-events-summary"},"Manually-tracked events summary"),(0,r.kt)("p",null,"The Java tracker provides classes for tracking different types of events. They are listed below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Event")," class"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"e")," in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"eventType")," in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/#creating-a-custom-event-unstructured-events"},(0,r.kt)("inlineCode",{parentName:"a"},"Unstructured")," (custom)")),(0,r.kt)("td",{parentName:"tr",align:null},"ue"),(0,r.kt)("td",{parentName:"tr",align:null},"unstruct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/#creating-a-screenview-event"},(0,r.kt)("inlineCode",{parentName:"a"},"ScreenView"))),(0,r.kt)("td",{parentName:"tr",align:null},"ue"),(0,r.kt)("td",{parentName:"tr",align:null},"unstruct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/#creating-a-timing-event"},(0,r.kt)("inlineCode",{parentName:"a"},"Timing"))),(0,r.kt)("td",{parentName:"tr",align:null},"ue"),(0,r.kt)("td",{parentName:"tr",align:null},"unstruct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/#creating-a-pageview-event"},(0,r.kt)("inlineCode",{parentName:"a"},"PageView"))),(0,r.kt)("td",{parentName:"tr",align:null},"pv"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/#creating-a-structured-event"},(0,r.kt)("inlineCode",{parentName:"a"},"Structured"))),(0,r.kt)("td",{parentName:"tr",align:null},"se"),(0,r.kt)("td",{parentName:"tr",align:null},"struct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/#creating-ecommercetransaction-and-ecommercetransactionitem-event"},(0,r.kt)("inlineCode",{parentName:"a"},"EcommerceTransaction")),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"tr"),(0,r.kt)("td",{parentName:"tr",align:null},"transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/#creating-ecommercetransaction-and-ecommercetransactionitem-event"},(0,r.kt)("inlineCode",{parentName:"a"},"EcommerceTransactionItem")),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"ti"),(0,r.kt)("td",{parentName:"tr",align:null},"transaction","_","item")))),(0,r.kt)("p",null,"Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," are a legacy design and may be deprecated soon."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," events (also called Self-Describing events elsewhere in Snowplow) allow you to track anything that can be described by a ",(0,r.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"JSON schema"),". The data you provide will be sent as a JSON inside the raw event payload. The specific type of JSON schema needed are described fully on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"next page"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Timing")," out-of-the-box event types are actually wrappers for ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," events: the method parameters for building those events represent fields in their hidden self-describing JSON schemas. This is why both ",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Timing"),' events are labelled "unstruct" in the data warehouse.'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PageView")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Structured")," event types are processed differently from ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured"),' events. Properties tracked using these events are not sent packaged as JSON, but as individual "atomic" fields in the raw event payload. We call these event types "primitive" or "canonical".'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured"),' events and primitive/canonical events are loaded into and modelled differently in your data warehouse. The "atomic" fields will always have individual columns.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," events are legacy primitive events. We recommend instead designing your own ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," events plus ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"context entities")," for eCommerce tracking."),(0,r.kt)("h3",{id:"tracking-data-that-is-not-event-type-specific"},"Tracking data that is not event-type specific"),(0,r.kt)("p",null,"Some data, such as that relating to the user whose activity is being tracked, is relevant across all event types. The Java tracker provides two mechanisms for tracking this kind of data."),(0,r.kt)("p",null,"Certain properties, including ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ipAddress"),', can be set as "atomic" properties in the raw event, using the ',(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," class. ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," properties relate mainly to client-side tracking. If you are using the Java tracker for server-side tracking, you may wish to pass client-side data for tracking server-side. These properties are discussed ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties/"},"here"),"."),(0,r.kt)("p",null,'A more general and powerful method is to attach self-describing JSON "context entities" to your events - the same JSON schemas as used for ',(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," events. This means that any data that can be described by a JSON schema can be added to any or all of your events. Read more on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"next page"),"."),(0,r.kt)("p",null,"All events also provide the option for setting a custom timestamp, called ",(0,r.kt)("inlineCode",{parentName:"p"},"trueTimestamp"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/#adding-custom-timestamps-to-events"},"below")," for details."),(0,r.kt)("h3",{id:"creating-a-custom-event-unstructured-events"},"Creating a custom event (Unstructured events)"),(0,r.kt)("p",null,"To track data using an ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," event, the data must be structured as a ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson")," object, discussed fully in ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"Custom tracking with schemas"),". These require two fields. The first is a URI for a self-describing JSON schema. The second is a data map, and the data must be valid against the schema. ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," events can be considered wrappers for sending ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," is a legacy name. This event type will be renamed the more accurate ",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," in the next release."),(0,r.kt)("p",null,"The simplest initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Unstructured unstructured = Unstructured.builder()\n            .eventData(dataAsSelfDescribingJson)\n            .build();\n")),(0,r.kt)("p",null,"See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/Unstructured.Builder.html"},"Unstructured.Builder")," options."),(0,r.kt)("h3",{id:"creating-a-screenview-event"},"Creating a ",(0,r.kt)("inlineCode",{parentName:"h3"},"ScreenView")," event"),(0,r.kt)("p",null,"Track screen views with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView")," event. It's a wrapper around an ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," event, using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/324cfe9a5390174a56084722a545287d01a5a060/schemas/com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0"},"this schema"),"."),(0,r.kt)("p",null,"A simple initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ScreenView screenView = ScreenView.builder()\n            .name("human readable screen name")\n            .id("unique screen ID")\n            .build();\n')),(0,r.kt)("p",null,"At least one of ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," must be set. See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/ScreenView.Builder.html"},"ScreenView.Builder")," options."),(0,r.kt)("h3",{id:"creating-a-timing-event"},"Creating a ",(0,r.kt)("inlineCode",{parentName:"h3"},"Timing")," event"),(0,r.kt)("p",null,"Track how long something took with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Timing")," event. It's a wrapper around an ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," event, using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/324cfe9a5390174a56084722a545287d01a5a060/schemas/com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0"},"this schema"),"."),(0,r.kt)("p",null,"A simple initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Timing timing = Timing.builder()\n            .category("category of the timed event")\n            .variable("name of the timed event")\n            .timing(10) // in milliseconds\n            .label("optional label")\n            .build();\n')),(0,r.kt)("p",null,"Provide your ",(0,r.kt)("inlineCode",{parentName:"p"},"timing")," value in milliseconds. The ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," property is optional. See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/Timing.Builder.html"},"Timing.Builder")," options."),(0,r.kt)("h3",{id:"creating-a-pageview-event"},"Creating a ",(0,r.kt)("inlineCode",{parentName:"h3"},"PageView")," event"),(0,r.kt)("p",null,"Track page views with the ",(0,r.kt)("inlineCode",{parentName:"p"},"PageView"),' event. This is a "primitive" event type; data will end up in individual "atomic" columns in the data warehouse.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Field in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},"Column in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page title"),(0,r.kt)("td",{parentName:"tr",align:null},"page"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"referrer URL"),(0,r.kt)("td",{parentName:"tr",align:null},"refr"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","referrer")))),(0,r.kt)("p",null,"The provided URLs will also be decomposed into other columns, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"page_urlscheme"),", during event ",(0,r.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/what-is-enrichment/"},"enrichment"),"."),(0,r.kt)("p",null,"A simple initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PageView pageViewEvent = PageView.builder()\n            .pageUrl("https://www.snowplowanalytics.com")\n            .pagetitle("Snowplow")\n            .referrer("https://github.com/snowplow/snowplow-java-tracker")\n            .build();\n')),(0,r.kt)("p",null,"Only ",(0,r.kt)("inlineCode",{parentName:"p"},"pageUrl")," is required. See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/PageView.Builder.html"},"PageView.Builder")," options."),(0,r.kt)("h3",{id:"creating-a-structured-event"},"Creating a ",(0,r.kt)("inlineCode",{parentName:"h3"},"Structured")," event"),(0,r.kt)("p",null,"To track custom data without schemas, use ",(0,r.kt)("inlineCode",{parentName:"p"},"Structured"),' events. They are the "primitive" equivalent of ',(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured"),' events. The provided data will end up in individual "atomic" columns in the data warehouse. Because of this, it\'s not possible to fully customise a ',(0,r.kt)("inlineCode",{parentName:"p"},"Structured")," event: the fields cannot be renamed, nor new fields added. ",(0,r.kt)("inlineCode",{parentName:"p"},"Structured")," events are designed to be similar to Google-style events."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Structured")," event fields have flexible definitions, and what you put into each field is up to you. This is a double-edged sword. It's highly advisable to agree business-wide on definitions for each of these fields, before implementing tracking."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Often contains data about"),(0,r.kt)("th",{parentName:"tr",align:null},"Field in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},"Column in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"Grouping for the action"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","ca"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of user activity"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","ac"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional event data"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","la"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property"),(0,r.kt)("td",{parentName:"tr",align:null},"The action or object acted on"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","pr"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","property")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"Numerical event data"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","va"),(0,r.kt)("td",{parentName:"tr",align:null},"se","_","value")))),(0,r.kt)("p",null,"A simple initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Structured structured = Structured.builder()\n                .category("category e.g. auth")\n                .action("action e.g. logout")\n                .label("optional label")\n                .property("optional property")\n                .value(12.34)\n                .build();\n')),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," are required. See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/Structured.Builder.html"},"Structured.Builder")," options."),(0,r.kt)("h3",{id:"creating-ecommercetransaction-and-ecommercetransactionitem-events"},"Creating ",(0,r.kt)("inlineCode",{parentName:"h3"},"EcommerceTransaction")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"EcommerceTransactionItem")," events"),(0,r.kt)("p",null,"To track eCommerce data, we recommend designing your own schemas for an ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," event. We suggest creating one schema for the overall transaction, and another schema for individual items. The transaction schema can be used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured")," event. Items in the transaction can be added as ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"context entities"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," events are legacy events, and it's highly likely they will be deprecated in the future. They are designed to be sent together, with one ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," containing an ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," for every item in the transaction. When the ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," event is tracked, the ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," events are extracted and sent separately. This means that although you have only tracked one event (using ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker.track()"),"), multple events are generated."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem"),' are "primitive" events. The data will end up in individual "atomic" columns in the data warehouse.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"EcommerceTransaction")," property"),(0,r.kt)("th",{parentName:"tr",align:null},"Field in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},"Column in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderId"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","id"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","orderid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalValue"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","tt"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","total")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"affiliation"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","af"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","affiliation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"taxValue"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","tx"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","tax")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shipping"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","sh"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","shipping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"city"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","ci"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","st"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","co"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","country")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","cu"),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","currency")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"EcommerceTransactionItem")," property"),(0,r.kt)("th",{parentName:"tr",align:null},"Field in raw event"),(0,r.kt)("th",{parentName:"tr",align:null},"Column in enriched event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"itemId"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","id"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","orderid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sku"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","sk"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","sku")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"price"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","pr"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","qu"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","quantity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","nm"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","ca"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","cu"),(0,r.kt)("td",{parentName:"tr",align:null},"ti","_","currency")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"orderId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"itemId")," should be the same, as it's the most direct way to associate the two events once they are in the warehouse."),(0,r.kt)("p",null,"A simple initialisation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Create events for each item in the transaction\nEcommerceTransactionItem item = EcommerceTransactionItem.builder()\n        .itemId("should be the same as order_id")\n        .sku("sku")\n        .price(1.0)\n        .quantity(2)\n        .name("item name")\n        .category("category")\n        .currency("currency")\n        .build();\n\n// Then make the EcommerceTransaction event\nEcommerceTransaction ecommerceTransaction = EcommerceTransaction.builder()\n        .items(item) // Add the EcommerceTransactionItem events\n        .orderId("should be the same as item_id")\n        .totalValue(2.0)\n        .affiliation("affiliation")\n        .taxValue(2.0)\n        .shipping(3.0)\n        .city("city")\n        .state("state")\n        .country("country")\n        .currency("currency")\n        .build();\n')),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransactionItem")," events, ",(0,r.kt)("inlineCode",{parentName:"p"},"itemId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"price")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"quantity")," are required. For ",(0,r.kt)("inlineCode",{parentName:"p"},"EcommerceTransaction")," events, only ",(0,r.kt)("inlineCode",{parentName:"p"},"orderId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"totalValue")," are required. See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/EcommerceTransaction.Builder.html"},"EcommerceTransaction.Builder")," and ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/events/EcommerceTransactionItem.Builder.html"},"EcommerceTransactionItem.Builder")," options."),(0,r.kt)("h2",{id:"adding-custom-timestamps-to-events"},"Adding custom timestamps to events"),(0,r.kt)("p",null,"Snowplow events have several timestamps. The raw event payload always contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"deviceCreatedTimestamp")," (",(0,r.kt)("inlineCode",{parentName:"p"},"dtm"),") and a ",(0,r.kt)("inlineCode",{parentName:"p"},"deviceSentTimestamp")," (",(0,r.kt)("inlineCode",{parentName:"p"},"stm"),"). Other timestamps are added as the event moves through the pipeline."),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.Builder")," in the Java tracker allows for a custom timestamp, called ",(0,r.kt)("inlineCode",{parentName:"p"},"trueTimestamp")," to be set. Read more about timestamps in ",(0,r.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/t/which-timestamp-is-the-best-to-see-when-an-event-occurred/538"},"this still relevant forums post"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"trueTimestamp")," can be added to any event using the ",(0,r.kt)("inlineCode",{parentName:"p"},"trueTimestamp()")," Builder method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// This example shows an Unstructured event, but all events can have a trueTimestamp\nUnstructured unstructured = Unstructured.builder()\n            .eventData(dataAsSelfDescribingJson)\n            .trueTimestamp(1647616394785L)\n            .build();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"trueTimestamp")," should be a ",(0,r.kt)("inlineCode",{parentName:"p"},"Long")," representing milliseconds since the Unix epoch."))}d.isMDXComponent=!0}}]);