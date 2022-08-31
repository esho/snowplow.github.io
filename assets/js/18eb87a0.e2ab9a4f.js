"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[23559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={title:"Custom tracking using schemas",date:"2022-03-24",sidebar_position:30},r=void 0,s={unversionedId:"collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/index",id:"collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/index",title:"Custom tracking using schemas",description:"Self-describing (self-referential) JSON schemas are at the core of Snowplow tracking. Read more about them here. They allow you to track completely customised data, and are also used internally throughout Snowplow pipelines.",source:"@site/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas",slug:"/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:30,frontMatter:{title:"Custom tracking using schemas",date:"2022-03-24",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Tracking events",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/"},next:{title:"Tracking specific client-side properties",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties/"}},c={},l=[{value:"Adding custom entities to any event",id:"adding-custom-entities-to-any-event",level:3},{value:"Global context",id:"global-context",level:3},{value:"Self-describing JSON in the Java tracker",id:"self-describing-json-in-the-java-tracker",level:3}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Self-describing (self-referential) JSON schemas are at the core of Snowplow tracking. Read more about them ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"here"),". They allow you to track completely customised data, and are also used internally throughout Snowplow pipelines."),(0,i.kt)("p",null,"In all our trackers, self-describing JSON are used in two places. One is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Unstructured"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"SelfDescribing")," event type that wraps custom self-describing JSONs for sending. The second use is to attach custom data to any tracked event. It's one of the most powerful Snowplow features."),(0,i.kt)("p",null,"When tracking user behaviour, the event describes the specific activity they performed, e.g. a user added an item to an eCommerce cart. To understand the meaning of the event, and how it relates to your business, it's ideal to also track the persistent environment in which the activity was performed. For example, is the user a repeat customer? Which item did they add, and how many are in stock?"),(0,i.kt)("p",null,'These environmental factors can be tracked as the event "context", using self-describing JSON. When self-describing JSON are tracked as part of an event, they are called "entities". All the entities of an event together form the context. Read more in this ',(0,i.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/03/25/what-are-snowplow-events-and-entities-and-what-makes-them-so-powerful/"},"thorough blog post"),"."),(0,i.kt)("h3",{id:"adding-custom-entities-to-any-event"},"Adding custom entities to any event"),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"Event.Builder")," in the Java tracker allows for a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson")," objects to be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),". It's fine to add multiple entities of the same type. There's no official limit to how many entities you can add to a single event, but consider if the payload size could become problematic if you are adding a large number."),(0,i.kt)("p",null,"Context entities can be added to any event using the ",(0,i.kt)("inlineCode",{parentName:"p"},"customContext()")," Builder method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// This example shows an Unstructured event, but all events can have context\nUnstructured unstructured = Unstructured.builder()\n            .eventData(dataAsSelfDescribingJson)\n            .customContext(listOfEntitiesAsSelfDescribingJson)\n            .build();\n")),(0,i.kt)("p",null,"Event context is sent as a JSON inside the event payload. During ",(0,i.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/what-is-enrichment/"},"enrichment"),", it is separated into columns for each different schema used."),(0,i.kt)("p",null,'A note on nomenclature: entities were originally called "context", with the context called "contexts". The old nomenclature is still used in some parts of Snowplow, meaning that enriched events in the data warehouse refer to "contexts"/"context" rather than "context"/"entity".'),(0,i.kt)("h3",{id:"global-context"},"Global context"),(0,i.kt)("p",null,"The Java tracker does not yet provide the ability to automatically assign entities to specific events."),(0,i.kt)("h3",{id:"self-describing-json-in-the-java-tracker"},"Self-describing JSON in the Java tracker"),(0,i.kt)("p",null,"The Java tracker provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson")," class for custom events and entities. There is no in-built distinction between schemas used for events and those used for entities: they can be used interchangably."),(0,i.kt)("p",null,"Your schemas must be accessible to your pipeline, within an ",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/"},"Iglu server"),". Tracked events containing self-describing JSON are validated against their schemas during the enrichment phase of the pipeline. If the data don't match the schema, the events end up in the Bad Rows storage instead of the data warehouse."),(0,i.kt)("p",null,"A self-describing JSON needs two keys, ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," key is the Iglu URI for the schema. The ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," value must match the properties described by the specified schema. It is usually provided as a map."),(0,i.kt)("p",null,"A simple initialisation looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// This map will be used for the "data" key\nMap<String, String> eventData = new HashMap<>();\neventData.put("targetUrl", "https://www.snowplowanalytics.com")\n\n// Wrap the map in a SelfDescribingJson\n// The specified schema allows for a String property "targetUrl"\nSelfDescribingJson sdj = new SelfDescribingJson("iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1", eventData);\n')),(0,i.kt)("p",null,"See the API docs for the full ",(0,i.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/payload/SelfDescribingJson.html"},"SelfDescribingJson")," constructor options."),(0,i.kt)("p",null,"JSON can be sent base-64 encoded or not. By default, they are encoded. This is set as part of the Tracker configuration. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/#setting-up"},"Setting up"),"."))}p.isMDXComponent=!0}}]);