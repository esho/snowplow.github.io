"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[81621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||r;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"Introduction",date:"2021-04-12",sidebar_position:100},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/introduction/index",id:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/introduction/index",title:"Introduction",description:"The Mobile Trackers v2.0 can be configured at the startup with a set of Configuration objects. The entry point to setup the tracker is now the Snowplow class and the createTracker methods. They need a namespace string which is now mandatory.",source:"@site/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/introduction/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/introduction",slug:"/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/introduction/",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/introduction/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/introduction/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:100,frontMatter:{title:"Introduction",date:"2021-04-12",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Mobile Trackers v2.x",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/"},next:{title:"Quick Start Guide",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/"}},s={},c=[{value:"Configurations",id:"configurations",level:3},{value:"NetworkConfiguration",id:"networkconfiguration",level:4},{value:"TrackerConfiguration",id:"trackerconfiguration",level:4},{value:"SessionConfiguration",id:"sessionconfiguration",level:4},{value:"EmitterConfiguration",id:"emitterconfiguration",level:4},{value:"SubjectConfiguration",id:"subjectconfiguration",level:4},{value:"GdprConfiguration",id:"gdprconfiguration",level:4},{value:"GlobalContextsConfiguration",id:"globalcontextsconfiguration",level:4},{value:"Events (out of the box)",id:"events-out-of-the-box",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Mobile Trackers v2.0 can be configured at the startup with a set of Configuration objects. The entry point to setup the tracker is now the ",(0,a.kt)("inlineCode",{parentName:"p"},"Snowplow")," class and the ",(0,a.kt)("inlineCode",{parentName:"p"},"createTracker")," methods. They need a namespace string which is now mandatory."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"createTracker")," instance can be used to create multiple instances of the tracker in the same app. If you call it using a namespace already used, it will reconfigure the tracker with the same namespace. If you call it with a different namespace, the tracker will create a new independent tracker. Be sure to always use the same namespace if you want just a single instance of the tracker in the app"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The app can have multiple trackers and they are identified by the namespace. It's important to note that all the events not sent to the collector but stored in the tracker are attached to a specific namespace. This means that if a new configuration uses a different namespace, all those unsent event will still stored in the tracker, with no way to send them to any collector. To send them you need to reuse the original namespace string."),(0,a.kt)("h3",{id:"configurations"},"Configurations"),(0,a.kt)("p",null,"Fine tuning of the tracker is now possible with Configuration classes."),(0,a.kt)("p",null,"These are the classes for the configuration of the tracker:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NetworkConfiguration"),": to configure network connection with the Snowplow collector."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TrackerConfiguration"),": to configure contexts and automatic events of the tracker, and general behaviour."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SessionConfiguration"),": to configure session behaviour."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EmitterConfiguration"),": to fine tune about how the tracker sends events to the collector."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SubjectConfiguration"),": to specify details to send with events about the user and the platform."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GdprConfiguration"),": to configure the GDPR context."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GlobalContextsConfiguration"),": to configure the GlobalContexts feature to dynamically send created contexts with some selected events.")),(0,a.kt)("p",null,"Many of these settings can be changed at runtime through the tracker instance (",(0,a.kt)("inlineCode",{parentName:"p"},"TrackerController"),"). Through the TrackerController you can access other subcontrollers (",(0,a.kt)("inlineCode",{parentName:"p"},"SessionController"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkController"),", etc.) which allows detailed settings of the tracker."),(0,a.kt)("h4",{id:"networkconfiguration"},"NetworkConfiguration"),(0,a.kt)("p",null,"Represents the network communication configuration allowing the tracker to be able to send events to the Snowplow collector."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"endpoint"),": URL of the collector that is going to receive the events tracked by the tracker. The URL can include the schema/protocol (e.g.: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://collector-url.com"),"). In case the URL doesn't include the schema/protocol, the HTTPS protocol is automatically selected."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"method"),": The method used to send the requests (GET or POST)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"networkConnection"),": (optional) The NetworkConnection component which will control the communication between the tracker and the collector."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"customPostPath"),": A custom path which will be added to the endpoint URL to specify the complete URL of the collector when paired with the POST method.")),(0,a.kt)("h4",{id:"trackerconfiguration"},"TrackerConfiguration"),(0,a.kt)("p",null,"Represents the configuration of the tracker and the core tracker properties. The TrackerConfiguration can be used to setup the tracker behaviour indicating what should be tracked in term of automatic tracking and contexts/entities to track with the events."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"appId"),": Identifer of the app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"devicePlatform")," = mobile: It sets the device platform the tracker is running on."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"base64encoding")," = true: It indicates whether the JSON data in the payload should be base64 encoded."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"logLevel")," = OFF: It sets the log level of tracker logs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"loggerDelegate")," = null: It sets the logger delegate that receive logs from the tracker."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sessionContext")," = true: Whether session context is sent with all the tracked events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"applicationContext")," = true: Whether application context is sent with all the tracked events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"platformContext")," = true: Whether mobile/platform context is sent with all the tracked events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"geoLocationContext")," = false: Whether geo-location context is sent with all the tracked events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"screenContext")," = true: Whether screen context is sent with all the tracked events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"screenViewAutotracking")," = true: Whether enable automatic tracking of ScreenView events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lifecycleAutotracking")," = false: Whether enable automatic tracking of background and foreground transitions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"installAutotracking")," = true: Whether enable automatic tracking of install event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"exceptionAutotracking")," = true: Whether enable crash reporting.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": On Android, ",(0,a.kt)("strong",{parentName:"p"},"lifecycleAutotracking")," requires ",(0,a.kt)("inlineCode",{parentName:"p"},"androidx.lifecycle:lifecycle-extensions")," among the dependencies of the app."),(0,a.kt)("h4",{id:"sessionconfiguration"},"SessionConfiguration"),(0,a.kt)("p",null,"Represents the configuration of a Session object which gets appended to each event sent from the Tracker and changes based on the timeout set for the inactivity of app when in foreground or background."),(0,a.kt)("p",null,"Session data is maintained for the life of the application being installed on a device. Essentially it will update if it is not accessed within a configurable timeout."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"foregroundTimeout")," = 30 min: The amount of time that can elapse before the session id is updated while the app is in the foreground."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backgroundTimeout")," = 30 min: The amount of time that can elapse before the session id is updated while the app is in the background.")),(0,a.kt)("h4",{id:"emitterconfiguration"},"EmitterConfiguration"),(0,a.kt)("p",null,"Represents the tracker configuration from the emission perspective. It can be used to setup details about how the tracker should treat the events once they have been processed but not yet sent."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bufferOption")," = single: Sets whether the buffer should send events instantly or after the buffer has reached it's limit. By default, this is set to BufferOption Default."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"emitRange")," = 150: Maximum number of events collected from the EventStore to be sent in a request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"threadPoolSize")," = 15: Maximum number of threads working in parallel in the tracker to send requests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"byteLimitGet")," = 40000: Maximum amount of bytes allowed to be sent in a payload in a GET request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"byteLimitPost")," = 40000: Maximum amount of bytes allowed to be sent in a payload in a POST request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"eventStore")," (optional): Custom component with full ownership for persisting events before to be sent to the collector. If it's not set the tracker will use a SQLite database as default EventStore.")),(0,a.kt)("h4",{id:"subjectconfiguration"},"SubjectConfiguration"),(0,a.kt)("p",null,"Represents the configuration of the subject. The SubjectConfiguration can be used to setup the tracker with the basic information about the user and the app which will be attached on all the events as contexts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"userId")," = null: The custom user identifier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"useragent")," = null: The custom user-agent. It overrides the user-agent used by default."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ipAddress")," = null: The IP address (not automatically set)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"timezone")," (set by the tracker): The current timezone label."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"language")," (set by the tracker): The language set in the device."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"screenResolution")," (set by the tracker): The screen resolution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"screenViewPort")," = null: The screen viewport."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"colorDepth")," = null: The color depth.")),(0,a.kt)("h4",{id:"gdprconfiguration"},"GdprConfiguration"),(0,a.kt)("p",null,"This class allows the GDPR configuration of the tracker."),(0,a.kt)("h4",{id:"globalcontextsconfiguration"},"GlobalContextsConfiguration"),(0,a.kt)("p",null,"This class allows the setup of Global Contexts which are attached to selected events. The contexts are generated automatically by the tracker following the rules and generators provided by the developer. Each generator is associated to a filter/rule and a tag string used as identifier of the GlobalContexts generator. The filter/rule select the events where to apply the context and the generator creates the context for that event. Through the tag string is possible to add and remove the GlobalContexts generators at runtime."),(0,a.kt)("h3",{id:"events-out-of-the-box"},"Events (out of the box)"),(0,a.kt)("p",null,"There are some events that can be used out of the box for the manual tracking."),(0,a.kt)("p",null,"General events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Structured"),(0,a.kt)("li",{parentName:"ul"},"SelfDescribing"),(0,a.kt)("li",{parentName:"ul"},"Timing")),(0,a.kt)("p",null,"Screen event"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ScreenView")),(0,a.kt)("p",null,"GDPR events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ConsentWithdrawn and ConsentGranted (with ConsentDocument)")),(0,a.kt)("p",null,"ECommerce events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"EcommerceTransaction (with EcommerceTransactionItem)")),(0,a.kt)("p",null,"Simple notification tracking events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PushNotification")))}p.isMDXComponent=!0}}]);