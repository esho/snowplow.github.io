"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[37895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),i=n(67294),r=n(86010),o=n(72389),l=n(67392),s=n(7094),c=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:h,groupId:k,className:g}=e,v=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,l.l)(f,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[C,S]=(0,i.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=k){const e=y[k];null!=e&&e!==C&&f.some((t=>t.value===e))&&S(e)}const I=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==C&&(T(t),S(a),null!=k&&N(k,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var i;const t=x.indexOf(e.currentTarget)-1;n=null!=(i=x[t])?i:x[x.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:D,onFocus:I,onClick:I},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,o.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},1287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(65488),o=n(85162);const l={title:"Tracking Events",date:"2021-06-11",sidebar_position:3e3},s=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/tracking-events/index",id:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/tracking-events/index",title:"Tracking Events",description:"The mobile trackers capture two types of events, automatically captured and manual events.",source:"@site/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/tracking-events/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/tracking-events",slug:"/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/tracking-events/",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/tracking-events/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/tracking-events/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:3e3,frontMatter:{title:"Tracking Events",date:"2021-06-11",sidebar_position:3e3},sidebar:"tutorialSidebar",previous:{title:"Quick Start Guide",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/"},next:{title:"Remote Configuration",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/remote-configuration/"}},p={},u=[{value:"Auto Tracking",id:"auto-tracking",level:2},{value:"Custom Event Context",id:"custom-event-context",level:2},{value:"Tracking events with Custom Context",id:"tracking-events-with-custom-context",level:4},{value:"Manual Tracking",id:"manual-tracking",level:2},{value:"Self Describing",id:"self-describing",level:3},{value:"Structured",id:"structured",level:3},{value:"Timing",id:"timing",level:3},{value:"Screen View",id:"screen-view",level:3},{value:"Consent",id:"consent",level:3},{value:"Consent Granted",id:"consent-granted",level:4},{value:"Consent Withdrawn",id:"consent-withdrawn",level:4},{value:"Ecommerce Transaction",id:"ecommerce-transaction",level:3},{value:"Push Notification",id:"push-notification",level:3},{value:"Auto Tracking",id:"auto-tracking-1",level:2},{value:"Custom Event Context",id:"custom-event-context-1",level:2},{value:"Tracking events with Custom Context",id:"tracking-events-with-custom-context-1",level:4},{value:"Manual Tracking",id:"manual-tracking-1",level:2},{value:"Self Describing",id:"self-describing-1",level:3},{value:"Structured",id:"structured-1",level:3},{value:"Timing",id:"timing-1",level:3},{value:"Screen View",id:"screen-view-1",level:3},{value:"Consent",id:"consent-1",level:3},{value:"Consent Granted",id:"consent-granted-1",level:4},{value:"Consent Withdrawn",id:"consent-withdrawn-1",level:4},{value:"Ecommerce Transaction",id:"ecommerce-transaction-1",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ios",label:"iOS Tracker",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"The mobile trackers capture two types of events, automatically captured and manual events."),(0,i.kt)("h2",{id:"auto-tracking"},"Auto Tracking"),(0,i.kt)("p",null,"Automatically captured events in the iOS Tracker are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"App Lifecycle Tracking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Captures application foreground and application background events"))),(0,i.kt)("li",{parentName:"ul"},"Screen View Tracking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Captures each time a new "screen" is loaded'))),(0,i.kt)("li",{parentName:"ul"},"Exception Tracking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Captures any unhandled exceptions within the application"))),(0,i.kt)("li",{parentName:"ul"},"Installation Tracking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Captures an install event which occurs the first time an application is opened")))),(0,i.kt)("p",null,"These are enabled in the tracker configuration. In this example, some helpful automatic contexts and all Autotracking is enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"let trackerConfig = TrackerConfiguration()\n    .sessionContext(true)\n    .platformContext(true)\n    .screenContext(true)\n    .applicationContext(true)\n    .lifecycleAutotracking(true)\n    .screenViewAutotracking(true)\n    .exceptionAutotracking(true)\n    .installAutotracking(true)\n")),(0,i.kt)("h2",{id:"custom-event-context"},"Custom Event Context"),(0,i.kt)("p",null,"Custom context can be used to augment any standard Snowplow event type, including self describing events, with additional data. We refer to this custom context as ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-events-entities/"},"Event Entities"),"."),(0,i.kt)("p",null,"Custom context can be added as an extra argument to any of Snowplow's\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"track..()"),"\xa0methods and to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"addItem"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"addTrans"),"."),(0,i.kt)("p",null,"Each custom context is an array of self-describing JSON following the same pattern as an\xa0self describing event. As with self describing events, if you want to create your own custom context, you must create a\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"JSON schema"),"\xa0for it and upload it to an\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu"},"Iglu repository")," using the ",(0,i.kt)("a",{parentName:"p",href:"https://snowplow.io/snowplow-insights/"},"Snowplow BDP UI"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/managing-data-structures/"},"Data Structures API"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/"},"igluctl")," or one of the other supported ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/wiki/Setting-up-an-Iglu-client"},"Iglu clients"),". Since more than one (of either different or the same type) can be attached to an event, the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"\xa0argument (if it is provided at all) should be a non-empty array of self-describing JSONs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important:"),"\xa0Even if only one custom context is being attached to an event, it still needs to be wrapped in an array."),(0,i.kt)("p",null,"Here are two example custom context JSONs. One describes a screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n    schema: 'iglu:com.example/screen/jsonschema/1-2-1',\n    data: {\n        screenType: 'test',\n        lastUpdated: '2021-06-11'\n    }\n}\n")),(0,i.kt)("p",null,"and the other describes a user on that screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n    schema: 'iglu:com.example/user/jsonschema/2-0-0',\n    data: {\n      userType: 'tester'\n    }\n}\n")),(0,i.kt)("h4",{id:"tracking-events-with-custom-context"},"Tracking events with Custom Context"),(0,i.kt)("p",null,"How to track a ",(0,i.kt)("strong",{parentName:"p"},"screen view")," with both of these contexts attached:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'let event = ScreenView(name: "DemoScreenName", screenId: UUID())\nevent.contexts.add(\n    SelfDescribingJson(schema: "iglu:com.example/screen/jsonschema/1-2-1",\n        andDictionary: [\n             "screenType": "test",\n             "lastUpdated": "2021-06-11"\n        ])!)     \nevent.contexts.add(\n    SelfDescribingJson(schema: "iglu:com.example/user/jsonschema/2-0-0", \n        andDictionary: [\n             "userType": "tester"\n        ])!)\n\ntracker.track(event)\n')),(0,i.kt)("p",null,"It is also possible to ",(0,i.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-objc-tracker/interface_s_p_global_contexts_configuration.html"},"add contexts globally"),", so that they are applied to all (or a subset of) events within an application."),(0,i.kt)("h2",{id:"manual-tracking"},"Manual Tracking"),(0,i.kt)("h3",{id:"self-describing"},"Self Describing"),(0,i.kt)("p",null,"You may wish to track events in your app which are not directly supported by Snowplow and which\xa0structured event tracking\xa0does not adequately capture. Your event may have more than the five fields offered by\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Structured")," events, or its fields may not fit into the category-action-label-property-value model. The solution is Snowplow\u2019s self-describing events. Self-describing events are a ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"data structure based on JSON Schemas")," and can have arbitrarily many fields."),(0,i.kt)("p",null,"To define your own custom event, you must create a\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"JSON schema"),"\xa0for that event and upload it to an\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu"},"Iglu Schema Repository")," using ",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/"},"igluctl")," (or if a Snowplow BDP customer, you can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/managing-data-structures/"},"Snowplow BDP UI")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/managing-data-structures-via-the-api-2/"},"Data Structures API"),"). Snowplow uses the schema to validate that the JSON containing the event properties is well-formed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'let data = ["targetUrl": "http://a-target-url.com" as NSObject];       \nlet event = SelfDescribing(schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1", payload: data)       \n\ntracker.track(event)\n')),(0,i.kt)("p",null,"A Self Describing event is a\xa0",(0,i.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/"},"self-describing JSON"),". It has two fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"data"),"\xa0field, containing the properties of the event"),(0,i.kt)("li",{parentName:"ul"},"A\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"schema"),"\xa0field, containing the location of the\xa0",(0,i.kt)("a",{parentName:"li",href:"http://json-schema.org/"},"JSON schema"),"\xa0against which the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"data"),"\xa0field should be validated.")),(0,i.kt)("h3",{id:"structured"},"Structured"),(0,i.kt)("p",null,"Our philosophy in creating Snowplow is that users should capture important consumer interactions and design suitable data structures for this data capture. You can read more about that philosophy ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/"},"here"),". Using ",(0,i.kt)("inlineCode",{parentName:"p"},"trackSelfDescribingEvent")," captures these interactions with custom schemas, as desribed above."),(0,i.kt)("p",null,"However, as part of a Snowplow implementation there may be interactons where custom Self Describing events are perhaps too complex or unwarranted. They are then candidates to track using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Structured"),", if none of the other event-specific methods outlined below are appropriate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'let event = Structured(category: "Example", action: "my-action")\n    .label("my-label")\n    .property("my-property")\n    .value(5)\n\ntracker.track(event)\n')),(0,i.kt)("h3",{id:"timing"},"Timing"),(0,i.kt)("p",null,"Use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Timing"),"\xa0events to track user timing events such as how long resources take to load."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'let event = Timing(category: "timing-category", variable: "timing-variable", timing: 5)\n    .label("optional-label")       \n\ntracker.track(event)\n')),(0,i.kt)("h3",{id:"screen-view"},"Screen View"),(0,i.kt)("p",null,"Track the user viewing a screen within the application. This type of tracking is typically used when automatic screen view tracking is not suitable within your application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'let event = ScreenView(name: "DemoScreenName", screenId: UUID())\n\ntracker.track(event)\n')),(0,i.kt)("h3",{id:"consent"},"Consent"),(0,i.kt)("h4",{id:"consent-granted"},"Consent Granted"),(0,i.kt)("p",null,"Use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ConsentGranted"),"\xa0event to track a user opting into data collection. A consent document context will be attached to the event using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"version"),"\xa0arguments supplied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'let event = ConsentGranted(expiry: "2022-01-01T00:00:00Z", documentId: "1234abcd", version: "1.2")       \n    .name("document-name")\n    .documentDescription("document-description")\n                \ntracker.track(event)\n')),(0,i.kt)("h4",{id:"consent-withdrawn"},"Consent Withdrawn"),(0,i.kt)("p",null,"Use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ConsentWithdrawn"),"\xa0event to track a user withdrawing consent for data collection. A consent document context will be attached to the event using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"version"),"\xa0arguments supplied. To specify that a user opts out of all data collection,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"all"),"\xa0should be set to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'let event = ConsentWithdrawn()\n    .all(true)\n    .documentId("1234abcd")\n    .version("1.2")       \n    .name("document-name")\n    .documentDescription("document-description")\n                \ntracker.track(event)\n')),(0,i.kt)("h3",{id:"ecommerce-transaction"},"Ecommerce Transaction"),(0,i.kt)("p",null,"Modelled on Google Analytics ecommerce tracking capability, Snowplow uses three steps that can be used together to track online transactions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Create a Ecommerce event"),". Use\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"Ecommerce"),"\xa0to initialize a transaction object. This will be the object that is loaded with all the data relevant to the specific transaction that is being tracked including all the items in the order, the prices of the items, the price of shipping and the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"order_id"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Add items to the transaction."),"\xa0Create an array of ",(0,i.kt)("inlineCode",{parentName:"li"},"EcommerceItem")," to pass to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ecommerce")," object."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Submit the transaction to Snowplow"),"\xa0using the track() method, once all the relevant data has been loaded into the object.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'let transactionID = "6a8078be"       \n                \nlet itemArray = [       \n  EcommerceItem(sku: "DemoItemSku", price: 0.75, quantity: 1)\n    .name("DemoItemName")       \n    .category("DemoItemCategory")       \n    .currency("USD")       \n]       \n                \nlet event = Ecommerce(orderId: transactionID, totalValue: 350, items: itemArray)   \n    .affiliation("DemoTransactionAffiliation")\n    .taxValue(10)\n    .shipping(15)\n    .city("Boston")\n    .state("Massachisetts")\n    .country("USA")\n    .currency("USD")\n\ntracker.track(event)\n')),(0,i.kt)("h3",{id:"push-notification"},"Push Notification"),(0,i.kt)("p",null,"To track an event when a push notification is used, it is possible to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"PushNotification")," event which contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"NotificationContent")," object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'let attachments = [["identifier": "testidentifier",       \n                    "url": "testurl",       \n                    "type": "testtype"]]\n\nvar userInfo = Dictionary<String, Any>()\nuserInfo["test"] = "test"\n\nlet content = NotificationContent(title: "title", body: "body", badge: 5)\n    .subtitle("subtitle")\n    .sound("sound")\n    .launchImageName("launchImageName")\n    .userInfo(userInfo)\n    .attachments(attachments)\n\nlet event = PushNotification(       \n    date: "date",       \n    action: "action",       \n    trigger: "PUSH",       \n    category: "category",       \n    thread: "thread",       \n    notification: content)\n\ntracker.track(event)\n'))),(0,i.kt)(o.Z,{value:"android",label:"Android Tracker",mdxType:"TabItem"},(0,i.kt)("p",null,"The mobile trackers capture two types of events, automatically captured and manual events."),(0,i.kt)("h2",{id:"auto-tracking-1"},"Auto Tracking"),(0,i.kt)("p",null,"Automatically captured events in the iOS Tracker are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"App Lifecycle Tracking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Captures application foreground and application background events"))),(0,i.kt)("li",{parentName:"ul"},"Screen View Tracking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Captures each time a new "screen" is loaded'))),(0,i.kt)("li",{parentName:"ul"},"Exception Tracking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Captures any unhandled exceptions within the application"))),(0,i.kt)("li",{parentName:"ul"},"Installation Tracking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Captures an install event which occurs the first time an application is opened")))),(0,i.kt)("p",null,"These are enabled in the tracker configuration. In this example, some helpful automatic contexts and all Autotracking is enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TrackerConfiguration trackerConfiguration = new TrackerConfiguration(appId)       \n    .sessionContext(true)\n    .platformContext(true)\n    .applicationContext(true)\n    .screenContext(true)\n    .lifecycleAutotracking(true)\n    .screenViewAutotracking(true)\n    .exceptionAutotracking(true)\n    .installAutotracking(true);\n")),(0,i.kt)("h2",{id:"custom-event-context-1"},"Custom Event Context"),(0,i.kt)("p",null,"Custom context can be used to augment any standard Snowplow event type, including self describing events, with additional data. We refer to this custom context as ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-events-entities/"},"Event Entities"),"."),(0,i.kt)("p",null,"Custom context can be added as an extra argument to any of Snowplow's\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"track..()"),"\xa0methods and to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"addItem"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"addTrans"),"."),(0,i.kt)("p",null,"Each custom context is an array of self-describing JSON following the same pattern as an\xa0self describing event. As with self describing events, if you want to create your own custom context, you must create a\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"JSON schema"),"\xa0for it and upload it to an\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu"},"Iglu repository")," using the ",(0,i.kt)("a",{parentName:"p",href:"https://snowplow.io/snowplow-insights/"},"Snowplow BDP Console UI"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/managing-data-structures/"},"Data Structures API"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/"},"igluctl")," or one of the other supported ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/wiki/Setting-up-an-Iglu-client"},"Iglu clients"),". Since more than one (of either different or the same type) can be attached to an event, the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"\xa0argument (if it is provided at all) should be a non-empty array of self-describing JSONs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important:"),"\xa0Even if only one custom context is being attached to an event, it still needs to be wrapped in an array."),(0,i.kt)("p",null,"Here are two example custom context JSONs. One describes a screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n    schema: 'iglu:com.example/screen/jsonschema/1-2-1',\n    data: {\n        screenType: 'test',\n        lastUpdated: '2021-06-11'\n    }\n}\n")),(0,i.kt)("p",null,"and the other describes a user on that screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n    schema: 'iglu:com.example/user/jsonschema/2-0-0',\n    data: {\n      userType: 'tester'\n    }\n}\n")),(0,i.kt)("h4",{id:"tracking-events-with-custom-context-1"},"Tracking events with Custom Context"),(0,i.kt)("p",null,"How to track a ",(0,i.kt)("strong",{parentName:"p"},"screen view")," with both of these contexts attached:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ScreenView event = new ScreenView("screen", UUID.randomUUID().toString());         \n\nevent.customContexts.add(\n    new SelfDescribingJson("iglu:com.example/screen/jsonschema/1-2-1",                         \n        new HashMap<String, String>() {{\n            put("screenType", "test");\n            put("lastUpdated", "2021-06-11");\n        }})\n);\n\nevent.customContexts.add(\n    new SelfDescribingJson("iglu:com.example/user/jsonschema/2-0-0",                         \n        new HashMap<String, String>() {{\n            put("userType", "tester");\n        }})\n);\n\ntracker.track(event);\n')),(0,i.kt)("p",null,"It is also possible to ",(0,i.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-android-tracker/classcom_1_1snowplowanalytics_1_1snowplow_1_1configuration_1_1_global_contexts_configuration.html"},"add contexts globally"),", so that they are applied to all (or a subset of) events within an application."),(0,i.kt)("h2",{id:"manual-tracking-1"},"Manual Tracking"),(0,i.kt)("h3",{id:"self-describing-1"},"Self Describing"),(0,i.kt)("p",null,"You may wish to track events in your app which are not directly supported by Snowplow and which\xa0structured event tracking\xa0does not adequately capture. Your event may have more than the five fields offered by\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Structured")," events, or its fields may not fit into the category-action-label-property-value model. The solution is Snowplow\u2019s self-describing events. Self-describing events are a ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"data structure based on JSON Schemas")," and can have arbitrarily many fields."),(0,i.kt)("p",null,"To define your own custom event, you must create a\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"JSON schema"),"\xa0for that event and upload it to an\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu"},"Iglu Schema Repository")," using ",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/"},"igluctl")," (or if a Snowplow BDP customer, you can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/managing-data-structures/"},"Snowplow BDP Console UI")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/managing-data-structures-via-the-api-2/"},"Data Structures API"),"). Snowplow uses the schema to validate that the JSON containing the event properties is well-formed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Map<String, String> properties = new HashMap<>();\nproperties.put("targetUrl", "http://a-target-url.com");\nSelfDescribingJson sdj = new SelfDescribingJson("iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1", attributes);\n\nSelfDescribing event = new SelfDescribing(sdj);\n\ntracker.track(event);\n')),(0,i.kt)("p",null,"A Self Describing event is a\xa0",(0,i.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/"},"self-describing JSON"),". It has two fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"data"),"\xa0field, containing the properties of the event"),(0,i.kt)("li",{parentName:"ul"},"A\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"schema"),"\xa0field, containing the location of the\xa0",(0,i.kt)("a",{parentName:"li",href:"http://json-schema.org/"},"JSON schema"),"\xa0against which the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"data"),"\xa0field should be validated.")),(0,i.kt)("h3",{id:"structured-1"},"Structured"),(0,i.kt)("p",null,"Our philosophy in creating Snowplow is that users should capture important consumer interactions and design suitable data structures for this data capture. You can read more about that philosophy ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/"},"here"),". Using ",(0,i.kt)("inlineCode",{parentName:"p"},"trackSelfDescribingEvent")," captures these interactions with custom schemas, as desribed above."),(0,i.kt)("p",null,"However, as part of a Snowplow implementation there may be interactons where custom Self Describing events are perhaps too complex or unwarranted. They are then candidates to track using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Structured"),", if none of the other event-specific methods outlined below are appropriate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Structured event = Structured("my-category", "my-action")\n    .label("my-label")\n    .property("my-property")\n    .value(5);\n\ntracker.track(event);\n')),(0,i.kt)("h3",{id:"timing-1"},"Timing"),(0,i.kt)("p",null,"Use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Timing"),"\xa0events to track user timing events such as how long resources take to load."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Timing event = new Timing("timing-category", "timing-variable", 5)\n    .label("optional-label");\n                \ntracker.track(event);\n')),(0,i.kt)("h3",{id:"screen-view-1"},"Screen View"),(0,i.kt)("p",null,"Track the user viewing a screen within the application. This type of tracking is typically used when automatic screen view tracking is not suitable within your application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ScreenView event = new ScreenView("screen", UUID.randomUUID().toString());\n\ntracker.track(event);\n')),(0,i.kt)("h3",{id:"consent-1"},"Consent"),(0,i.kt)("h4",{id:"consent-granted-1"},"Consent Granted"),(0,i.kt)("p",null,"Use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ConsentGranted"),"\xa0event to track a user opting into data collection. A consent document context will be attached to the event using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"version"),"\xa0arguments supplied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ConsentGranted event = new ConsentGranted("2018-05-08T18:12:02+00:00", "doc id", "1.2")\n        .documentDescription("doc description")\n        .documentName("doc name");\n\ntracker.track(event);\n')),(0,i.kt)("h4",{id:"consent-withdrawn-1"},"Consent Withdrawn"),(0,i.kt)("p",null,"Use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ConsentWithdrawn"),"\xa0event to track a user withdrawing consent for data collection. A consent document context will be attached to the event using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"version"),"\xa0arguments supplied. To specify that a user opts out of all data collection,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"all"),"\xa0should be set to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ConsentWithdrawn event = new ConsentWithdrawn(true, "doc id", "1.2")\n        .documentDescription("doc description")\n        .documentName("doc name");\n\ntracker.track(event);\n')),(0,i.kt)("h3",{id:"ecommerce-transaction-1"},"Ecommerce Transaction"),(0,i.kt)("p",null,"Modelled on Google Analytics ecommerce tracking capability, Snowplow uses three steps that can be used together to track online transactions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Create a Ecommerce event"),". Use\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"Ecommerce"),"\xa0to initialize a transaction object. This will be the object that is loaded with all the data relevant to the specific transaction that is being tracked including all the items in the order, the prices of the items, the price of shipping and the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"order_id"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Add items to the transaction."),"\xa0Create an array of ",(0,i.kt)("inlineCode",{parentName:"li"},"EcommerceItem")," to pass to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ecommerce")," object."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Submit the transaction to Snowplow"),"\xa0using the track() method, once all the relevant data has been loaded into the object.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'EcommerceTransactionItem item = new EcommerceTransactionItem("sku-1", 35.00, 1)\n    .name("Acme 1")\n    .category("Stuff")\n    .currency("USD");\nList<EcommerceTransactionItem> items = new LinkedList<>();\nitems.add(item);\n\nEcommerceTransaction event = new EcommerceTransaction("order-1", 40.00, items)\n    .shipping(5.00);\n\ntracker.track(event);\n')))))}m.isMDXComponent=!0}}]);