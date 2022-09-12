"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[70444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Tracking events",date:"2021-10-15",sidebar_position:10},o=void 0,s={unversionedId:"collecting-data/collecting-from-own-applications/ruby-tracker/tracking-events/index",id:"collecting-data/collecting-from-own-applications/ruby-tracker/tracking-events/index",title:"Tracking events",description:"Snowplow has been built to enable you to track a wide range of events that occur when users interact with your websites and apps.",source:"@site/docs/collecting-data/collecting-from-own-applications/ruby-tracker/tracking-events/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/ruby-tracker/tracking-events",slug:"/collecting-data/collecting-from-own-applications/ruby-tracker/tracking-events/",permalink:"/docs/collecting-data/collecting-from-own-applications/ruby-tracker/tracking-events/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/ruby-tracker/tracking-events/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:10,frontMatter:{title:"Tracking events",date:"2021-10-15",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Getting started",permalink:"/docs/collecting-data/collecting-from-own-applications/ruby-tracker/getting-started/"},next:{title:"Adding data to your events: context and more",permalink:"/docs/collecting-data/collecting-from-own-applications/ruby-tracker/adding-data-events/"}},c={},l=[{value:"Track self-describing events with\xa0<code>track_self_describing_event</code>",id:"track-self-describing-events-withtrack_self_describing_event",level:3},{value:"Track structured events with\xa0<code>track_struct_event</code>",id:"track-structured-events-withtrack_struct_event",level:3},{value:"Track page views with\xa0<code>track_page_view</code>",id:"track-page-views-withtrack_page_view",level:3},{value:"Track screen views with\xa0<code>track_screen_view</code>",id:"track-screen-views-withtrack_screen_view",level:3},{value:"Track eCommerce transactions with\xa0<code>track-ecommerce-transaction</code>",id:"track-ecommerce-transactions-withtrack-ecommerce-transaction",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow has been built to enable you to track a wide range of events that occur when users interact with your websites and apps."),(0,r.kt)("p",null,"We provide several built-in methods to help you track different kinds of events. The ",(0,r.kt)("inlineCode",{parentName:"p"},"track_x_event")," methods range from single purpose methods, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"track_page_view"),", to the more complex but flexible ",(0,r.kt)("inlineCode",{parentName:"p"},"track_self_describing_event"),", which can be used to track any kind of user behaviour. We strongly recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"track_self_describing_event")," for your tracking, as it allows you to design custom event types to match your business requirements. This ",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/01/24/re-thinking-the-structure-of-event-data/"},"post on our blog"),', "Re-thinking the structure of event data" might be informative here.'),(0,r.kt)("p",null,"Tracking methods supported by the Ruby Tracker:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Method")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Event type tracked")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#self-describing-event"},(0,r.kt)("inlineCode",{parentName:"a"},"track_self_describing_event"))),(0,r.kt)("td",{parentName:"tr",align:null},'Custom event based on "self-describing" JSON schema')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#struct-event"},(0,r.kt)("inlineCode",{parentName:"a"},"track_struct_event"))),(0,r.kt)("td",{parentName:"tr",align:null},"Semi-custom structured event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#page-view"},(0,r.kt)("inlineCode",{parentName:"a"},"track_page_view"))),(0,r.kt)("td",{parentName:"tr",align:null},"View of web page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#screen-view"},(0,r.kt)("inlineCode",{parentName:"a"},"track_screen_view"))),(0,r.kt)("td",{parentName:"tr",align:null},"View of screen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ecommerce-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"track_ecommerce_transaction"))),(0,r.kt)("td",{parentName:"tr",align:null},"eCommerce transaction (and items in the transaction)")))),(0,r.kt)("p",null,"All the ",(0,r.kt)("inlineCode",{parentName:"p"},"track_x_event")," methods share common features and parameters. Every type of event can have an optional context, Subject, and Page added. A Timestamp can also be provided for all event types to override the default event timestamp. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/ruby-tracker/adding-data-events/"},"the next page")," to learn about adding extra data to events. It's important to understand how event context works, as it is one of the most powerful Snowplow features. Adding event context is a way to add depth, richness and value to all of your events."),(0,r.kt)("p",null,"Snowplow events are all processed into the same format, regardless of the event type (and regardless of the tracker language used). Read about the different properties and fields of events in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"."),(0,r.kt)("p",null,"We will first discuss the custom event tracking methods, followed by the out-of-the-box event types. Note that you can also design and create your own page view, screen view, or eCommerce events, using ",(0,r.kt)("inlineCode",{parentName:"p"},"track_self_describing_event"),", to fit your business needs better. The out-of-the-box event types are provided so you can get started with generating event data quickly."),(0,r.kt)("h3",{id:"track-self-describing-events-withtrack_self_describing_event"},"Track self-describing events with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"track_self_describing_event")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"track_self_describing_event"),"\xa0to track a custom event. This is the most advanced and powerful tracking method, which requires a certain amount of planning and infrastructure."),(0,r.kt)("p",null,'Self-describing events are based around "self-describing" (self-referential) JSONs, which are a specific kind of ',(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON schema"),". A unique schema can be designed for each type of event that you want to track. This allows you to track the specific things that are important to you, in a way that is defined by you."),(0,r.kt)("p",null,"This is particularly useful when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to track event types which are proprietary/specific to your business"),(0,r.kt)("li",{parentName:"ul"},"You want to track events which have unpredictable or frequently changing properties")),(0,r.kt)("p",null,"A self-describing JSON has two keys, ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," value should point to a valid self-describing JSON schema. They are called self-describing because the schema will specify the fields allowed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," value. Read more about how schemas are used with Snowplow ",(0,r.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"here"),"."),(0,r.kt)("p",null,"After events have been collected by the event collector, they are validated to ensure that the properties match the self-describing JSONs. Mistakes (e.g. extra fields, or incorrect types) will result in events being processed as Bad Events. This means that only high-quality, valid events arrive in your data storage or real-time stream."),(0,r.kt)("p",null,"Your schemas must be accessible to your pipeline to allow this validation. We provide ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/"},"Iglu")," for schema management. If you are a paid Snowplow customer, you can manage your schemas through your console. Check out our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-ruby-tracker-examples"},"Ruby tracker Rails example")," to see how we included schemas in the Snowplow Micro testing pipeline in that app."),(0,r.kt)("p",null,"This method was previously called\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"track_unstruct_event"),", as a counterpoint to ",(0,r.kt)("inlineCode",{parentName:"p"},"track_struct_event"),". This name is misleading and we are in the process of depreciating it. An ",(0,r.kt)("inlineCode",{parentName:"p"},"unstruct")," event requires a schema ruleset and therefore can be considered more structured than a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," event. However, this method still produces events labelled ",(0,r.kt)("inlineCode",{parentName:"p"},"unstruct"),", as changing the event name in the Tracker Protocol would be a breaking change."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"track_self_describing_event")," method has one required argument, which must be a SelfDescribingJson object (see ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-ruby-tracker/SnowplowTracker/SelfDescribingJson.html"},"API docs"),"). This class takes a schema name and a flat hash of event data. The keys of the\xa0hash can be either strings or Ruby symbols."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'self_desc_json = SnowplowTracker::SelfDescribingJson.new(\n  "iglu:com.example_company/save_game/jsonschema/1-0-2",\n  {\n    "saveId" => "4321",\n    "level" => 23,\n    "difficultyLevel" => "HARD",\n    "dlContent" => true\n  }\n)\n\ntracker.track_self_describing_event(event_json: self_desc_json)\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#accordion-using-ruby-tracker-andlt070-expand-this"},"Using Ruby tracker <0.7.0? Expand this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'self_desc_json = SnowplowTracker::SelfDescribingJson.new(\n  "iglu:com.example_company/save_game/jsonschema/1-0-2",\n  {\n    "saveId" => "4321",\n    "level" => 23,\n    "difficultyLevel" => "HARD",\n    "dlContent" => true\n  }\n)\n\ntracker.track_self_describing_event(self_desc_json)\n')),(0,r.kt)("p",null,"You can track anything you want using this method, as long as you can describe it in a self-describing JSON schema."),(0,r.kt)("h3",{id:"track-structured-events-withtrack_struct_event"},"Track structured events with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"track_struct_event")),(0,r.kt)("p",null,'This method provides a halfway-house between tracking fully user-defined self-describing events and out-of-the box predefined events. This event type can be used to track many types of user activity, as it is somewhat customizable. "Struct" events closely mirror the structure of Google Analytics events, with "category", "action", "label", and "value" properties.'),(0,r.kt)("p",null,"As these fields are fairly arbitrary, we recommend following the advice in this table how to define structured events. It's important to be consistent throughout the business about how each field is used."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required in event?")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},"The grouping of structured events which this\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"action"),"\xa0belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the type of user interaction which this event involves"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"Often used to refer to the 'object' the action is performed on"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"property")),(0,r.kt)("td",{parentName:"tr",align:null},"Describing the 'object', or the action performed on it"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides numerical data about the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track_struct_event(category: 'shop',\n                           action: 'add-to-basket',\n                           property: 'pcs',\n                           value: 2)\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#accordion-using-ruby-tracker-andlt070-expand-this"},"Using Ruby tracker <0.7.0? Expand this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track_struct_event('shop', 'add-to-basket', nil, 'pcs', 2)\n")),(0,r.kt)("h3",{id:"track-page-views-withtrack_page_view"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Ruby-Tracker#track-page-views-with-track_page_view"}),"Track page views with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"track_page_view")),(0,r.kt)("p",null,"This is a simple, single-use method for tracking a user viewing a page within your app. You can record the page URL, the page title, and the referrer URL. Only the page URL is strictly required."),(0,r.kt)("p",null,"As a server-side language, your Ruby code won't automatically have access to the page title. This is one small reason why page views are easier to track client-side. Conversely, server-side page view tracking is more accurate, as it is not blocked by adblockers. It can be useful to compare counts from client- and server-side page views to see how much effect adblockers are having."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track_page_view(page_url: 'www.example.com',\n                        page_title: 'example',\n                        referrer: 'www.referrer.com')\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#accordion-using-ruby-tracker-andlt070-expand-this"},"Using Ruby tracker <0.7.0? Expand this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track_page_view('www.example.com', 'example', 'www.referrer.com')\n")),(0,r.kt)("h3",{id:"track-screen-views-withtrack_screen_view"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Ruby-Tracker#track-screen-views-with-track_screen_view"}),"Track screen views with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"track_screen_view")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"track_screen_view"),"\xa0to track a user viewing a screen (or similar) within your app. This is the page view equivalent for apps that are not webpages. The arguments are ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),'; while both are optional, you must provided at least one of them to create a valid event. "Name" is the human-readable screen name, and "ID" should be the unique screen ID.'),(0,r.kt)("p",null,"This method creates an ",(0,r.kt)("inlineCode",{parentName:"p"},"unstruct")," event, by creating a SelfDescribingJson and calling ",(0,r.kt)("inlineCode",{parentName:"p"},"track_self_describing_event"),'. The schema ID for this is "iglu:com.snowplowanalytics.snowplow/screen',"_",'view/jsonschema/1-0-0", and the data field will contain the name and/or ID which you provide. That schema is hosted on the schema repository ',(0,r.kt)("a",{parentName:"p",href:"http://iglucentral.com/"},"Iglu Central"),", and so will always be available to your pipeline."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track_screen_view(name: 'HUD > Save Game',\n                          id: 'screen23')\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#accordion-using-ruby-tracker-andlt070-expand-this"},"Using Ruby tracker <0.7.0? Expand this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.track_screen_view('HUD > Save Game', 'screen23')\n")),(0,r.kt)("h3",{id:"track-ecommerce-transactions-withtrack-ecommerce-transaction"},"Track eCommerce transactions with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"track-ecommerce-transaction")),(0,r.kt)("p",null,"Use this out-of-the-box method to track an ecommerce transaction. This method is unique compared to the other ",(0,r.kt)("inlineCode",{parentName:"p"},"track_x_event")," methods, as it sends multiple multiple events: one ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction")," event, and one ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_item")," event for each item in the transaction. This is a legacy design; if we were creating a new eCommerce tracking method now, we would attach information about each item as event context entities to a single transaction event."),(0,r.kt)("p",null,'The arguments for this method are a "transaction" hash, and an array of "item" hashes. These hashes are strict about which keys are allowed and required. Check out the ',(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-ruby-tracker/SnowplowTracker/Tracker.html#track_ecommerce_transaction-instance_method"},"API docs")," for the full details of the allowed properties. You can also read there about how additional event properties (context, Subject, Page and Timestamp) are handled for eCommerce events."),(0,r.kt)("p",null,'Broadly, the "transaction" hash contains the information about the order as a whole: the order ID, the value of the transaction including tax and/or shipping, as well as geographic information about its origin, or the currency in which the order was placed.'),(0,r.kt)("p",null,'The "item" hash records each item\'s unique SKU identifier, value, and how many were purchased, as well as any further information which might be useful, such as its human-readable item name.'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"transaction = {\n  order_id: '12345',\n  total_value: 35,\n  city: 'London',\n  country: 'UK',\n  currency: 'GBP'\n}\nitem1 = {\n  sku: 'pbz0026',\n  price: 20,\n  quantity: 1,\n  category: 'film'\n}\nitem2 = {\n  sku: 'pbz0038',\n  price: 15,\n  quantity: 1,\n  name: 'red shoes'\n}\ntracker.track_ecommerce_transaction(transaction: transaction,\n                                    items: [item1, item2])\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#accordion-using-ruby-tracker-andlt070-expand-this"},"Using Ruby tracker <0.7.0? Expand this")),(0,r.kt)("p",null,"Note: older versions of the Ruby tracker have a bug in ",(0,r.kt)("inlineCode",{parentName:"p"},"track_ecommerce_transaction"),": hashes with symbols for keys are not accepted. The event will fail silently. You must use only string keys. This was fixed in version 0.7.0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"transaction = {\n  'order_id' => '12345',\n  'total_value' => 35,\n  'city' => 'London',\n  'country' => 'UK',\n  'currency' => 'GBP'\n}\nitem1 = {\n  'sku' => 'pbz0026',\n  'price' => 20,\n  'quantity' => 1,\n  'category' => 'film'\n}\nitem2 = {\n  'sku' => 'pbz0038',\n  'price' => 15,\n  'quantity' => 1,\n  'name' => 'red shoes'\n}\ntracker.track_ecommerce_transaction(transaction, [item1, item2])\n")),(0,r.kt)("p",null,"This will fire three events: one for the transaction as a whole, and one for each item. The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"order_id"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"currency"),"\xa0fields in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"transaction"),"\xa0argument will also be attached to each of the item events."))}d.isMDXComponent=!0}}]);