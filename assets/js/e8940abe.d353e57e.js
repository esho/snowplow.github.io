"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[43486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Tracking specific events",date:"2020-02-25",sidebar_position:50},l=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/index",id:"collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/index",title:"Tracking specific events",description:"Snowplow has been built to enable you to track a wide range of events that occur when users interact with your apps.",source:"@site/docs/collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events",slug:"/collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:50,frontMatter:{title:"Tracking specific events",date:"2020-02-25",sidebar_position:50},sidebar:"defaultSidebar",previous:{title:"Adding extra data: the Subject class",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/"},next:{title:"Emitters",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/emitters/"}},s={},c=[{value:"Custom event context",id:"custom-event-context",level:2},{value:"Optional true-timestamp argument",id:"optional-true-timestamp-argument",level:2},{value:"Track SelfDescribing/Unstructured events with\xa0&quot;SelfDescribingEvent&quot;",id:"track-selfdescribingunstructured-events-withselfdescribingevent",level:2},{value:"Track screen views with\xa0&quot;ScreenViewEvent&quot;",id:"track-screen-views-withscreenviewevent",level:2},{value:"Track structured events with\xa0<code>StructuredEvent</code>",id:"track-structured-events-withstructuredevent",level:2},{value:"Track timing events with\xa0&quot;TimingEvent&quot;",id:"track-timing-events-withtimingevent",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow has been built to enable you to track a wide range of events that occur when users interact with your apps."),(0,r.kt)("p",null,"We provide several built-in event classes to help you track different kinds of events. When instantiated, their objects can be passed to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"tracker.track()"),"\xa0methods to send events to the Snowplow collector. The event classes range from single purpose ones, such as\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenViewEvent"),", to the more complex but flexible\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribingEvent"),", which can be used to track any kind of user behaviour. We strongly recommend using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribingEvent"),"\xa0for your tracking, as it allows you to design custom event types to match your business requirements.\xa0",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/01/24/re-thinking-the-structure-of-event-data/"},"This post"),'\xa0on our blog, "Re-thinking the structure of event data" might be informative here.'),(0,r.kt)("p",null,"The tracker provides the following event classes for tracking events out of the box:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Function")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StructuredEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"Tracks a Snowplow custom structured event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelfDescribingEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"Tracks a Snowplow custom unstructured event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ScreenViewEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"Tracks the user viewing a screen within the application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TimingEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"Tracks a timing event")))),(0,r.kt)("p",null,"Snowplow events are all processed into the same format, regardless of the event type (and regardless of the tracker language used). Read about the different properties and fields of events in the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"."),(0,r.kt)("h2",{id:"custom-event-context"},"Custom event context"),(0,r.kt)("p",null,"Event context is an incredibly powerful aspect of Snowplow tracking, which allows you to create very rich data. It is based on the same self-describing JSON schemas as the self-describing events. Using event context, you can add any details you like to your events, as long as you can describe them in a self-describing JSON schema."),(0,r.kt)("p",null,'Each schema will describe a single "entity". All of an event\'s entities together form the event context. There is no limit to how many entities can be attached to one event.'),(0,r.kt)("p",null,"Note that context can be added to any event type, not just self-describing events. This means that even a simple event type like a screen view can hold complex and extensive information \u2013 reducing the chances of data loss and the amount of modelling (JOINs etc.) needed in modelling, while increasing the value of each event, and the sophistication of the possible use cases."),(0,r.kt)("p",null,"The entities you provide are validated against their schemas as the event is processed (during the enrich phase). If there is a mistake or mismatch, the event is processed as a Bad Event."),(0,r.kt)("p",null,'Once defined, an entity can be attached to any kind of event. This is also an important point; it means your tracking is as DRY as possible. Using the same "user" or "image" or "search result" (etc.) entities throughout your tracking reduces error, and again makes the data easier to model.'),(0,r.kt)("p",null,"Each tracking type provides a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"set_context()"),"\xa0method which accepts a vector of context entities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<SelfDescribingJson> context;\n")),(0,r.kt)("p",null,"If a visitor arrives on a page advertising a movie, the dictionary for a single custom context entity in the list might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'vector<SelfDescribingJson> context;\nSelfDescribingJson sdj(\n  "iglu:com.acme_company/movie_poster/jsonschema/2-1-1",\n  "{\\"movie_name\\":\\"Solaris\\",\\"poster_country\\":\\"JP\\"}"_json\n);\ncontext.push_back(sdj);\n')),(0,r.kt)("p",null,"This is how to fire a structured event with the above custom context entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'StructuredEvent se("category", "action");\nse.set_context(context);\n\nSnowplow::get_default_tracker()->track(se);\n')),(0,r.kt)("p",null,"Note that even though there is only one custom context entity attached to the event, it still needs to be placed in a list."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"INFO"),": We use the excellent json library from Github community member\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nlohmann"},"Niels (nlohmann)"),"\xa0for all JSON parsing. For more information on using this library please visit the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nlohmann/json"},"Technical information on Github"),"."),(0,r.kt)("h2",{id:"optional-true-timestamp-argument"},"Optional true-timestamp argument"),(0,r.kt)("p",null,"Each\xa0event class supports an optional true-timestamp argument; this allows you to provide the true-timestamp attached to this event to help with the timing of events in multiple timezones. The timestamp should be in milliseconds since the Unix epoch."),(0,r.kt)("p",null,"Here is an example tracking a structured event and supplying the optional true-timestamp argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'StructuredEvent se("category", "action");\n\n// As it is optional you will need to pass the address for this value\nunsigned long long true_tstamp = "1368725287000";\nse.set_true_timestamp(&true_tstamp);\n\nSnowplow::get_default_tracker()->track(se);\n')),(0,r.kt)("h2",{id:"track-selfdescribingunstructured-events-withselfdescribingevent"},'Track SelfDescribing/Unstructured events with\xa0"SelfDescribingEvent"'),(0,r.kt)("p",null,"Use\xa0the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribingEvent"),"\xa0type\xa0to track a custom event which consists of a name and an unstructured set of properties. This is useful when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to track event types which are proprietary/specific to your business (i.e. not already part of Snowplow), or"),(0,r.kt)("li",{parentName:"ul"},"You want to track events which have unpredictable or frequently changing properties")),(0,r.kt)("p",null,"A self-describing JSON has two keys,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),". The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0value should point to a valid self-describing JSON schema. They are called self-describing because the schema will specify the fields allowed in the data value. Read more about how schemas are used with Snowplow\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"here"),"."),(0,r.kt)("p",null,"After events have been collected by the event collector, they are validated to ensure that the properties match the self-describing JSONs. Mistakes (e.g. extra fields, or incorrect types) will result in events being processed as Bad Events. This means that only high-quality, valid events arrive in your data storage or real-time stream."),(0,r.kt)("p",null,"Your schemas must be accessible to your pipeline to allow this validation. We provide\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/"},"Iglu"),"\xa0for schema management. If you are a paid Snowplow customer, you can manage your schemas through your console. Check out our\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-ruby-tracker-examples"},"Ruby tracker Rails"),"\xa0example to see how we included schemas in the Snowplow Micro testing pipeline in that app."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SelfDescribingEvent"),"\xa0provides the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},"The properties of the event"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"SelfDescribingJson")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Create a JSON containing your data\njson data = "{\\"level\\":5,\\"saveId\\":\\"ju302\\",\\"hardMode\\":true}"_json;\n\n// Create a new SelfDescribingJson\nSelfDescribingJson sdj("iglu:com.example_company/save-game/jsonschema/1-0-2", data);\n\nSelfDescribingEvent sde(sdj);\nSnowplow::get_default_tracker()->track(sde);\n')),(0,r.kt)("p",null,"For more on JSON schema, refer to\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"this page"),"."),(0,r.kt)("h2",{id:"track-screen-views-withscreenviewevent"},'Track screen views with\xa0"ScreenViewEvent"'),(0,r.kt)("p",null,"Use\xa0the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenViewEvent"),"\xa0type\xa0to track a user viewing a screen (or equivalent) within your app. This is the page view equivalent for apps that are not webpages."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Human-readable name for this screen"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"*","string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for this screen"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"*","string")))),(0,r.kt)("p",null,"Although name and id are not individually required, at least one must be provided or the event will fail validation and subsequently throw an exception."),(0,r.kt)("p",null,"The event uses the following Iglu schema:\xa0",(0,r.kt)("a",{parentName:"p",href:"http://iglucentral.com/schemas/com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0"},"iglu:com.snowplowanalytics.snowplow/screen","_","view/jsonschema/1-0-0"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'string name = "Screen ID - 5asd56";\n\nScreenViewEvent sve;\nsve.name = &name;\n\nSnowplow::get_default_tracker()->track(sve);\n')),(0,r.kt)("h2",{id:"track-structured-events-withstructuredevent"},"Track structured events with\xa0",(0,r.kt)("inlineCode",{parentName:"h2"},"StructuredEvent"),(0,r.kt)("a",{parentName:"h2",href:"https://file+.vscode-resource.vscode-cdn.net/Users/matus/Projects/Snowplow/snowplow-cpp-tracker/docs/04-tracking-events.md#track-structured-events-with-trackstructevent"})),(0,r.kt)("p",null,"Use\xa0the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"StructuredEvent"),"\xa0type\xa0to track a custom event happening in your app which fits the Google Analytics-style structure of having up to five fields (with only the first two required). This method provides a halfway-house between tracking fully user-defined self-describing events and out-of-the box predefined events. This event type can be used to track many types of user activity, as it is somewhat customizable."),(0,r.kt)("p",null,"As these fields are fairly arbitrary, we recommend following the advice in this table how to define structured events. It's important to be consistent throughout the business about how each field is used."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},"The grouping of structured events which this\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"action"),"\xa0belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the type of user interaction which this event involves"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"A string to provide additional dimensions to the event data"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"*","string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"property")),(0,r.kt)("td",{parentName:"tr",align:null},"A string describing the object or the action performed on it"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"*","string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"A value to provide numerical data about the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"*","double")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'StructuredEvent se("shop", "add-to-basket"); // constructor takes category and action\nse.property = "pcs";\nse.value = 25.6;\n\nSnowplow::get_default_tracker()->track(se);\n')),(0,r.kt)("h2",{id:"track-timing-events-withtimingevent"},'Track timing events with\xa0"TimingEvent"'),(0,r.kt)("p",null,"Use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"TimingEvent"),"\xa0type to track user timing events such as how long resources take to load."),(0,r.kt)("p",null,"Its properties are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},"The category of the event"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"*","string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"variable")),(0,r.kt)("td",{parentName:"tr",align:null},"The variable of the event"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"*","string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timing")),(0,r.kt)("td",{parentName:"tr",align:null},"The timing of the event"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"*","int64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"The label of the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"*","string")))),(0,r.kt)("p",null,"The event uses the following Iglu schema:\xa0",(0,r.kt)("a",{parentName:"p",href:"http://iglucentral.com/schemas/com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0"},"iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'TimingEvent te("category", "variable", 123);\nSnowplow::get_default_tracker()->track(te);\n')))}u.isMDXComponent=!0}}]);