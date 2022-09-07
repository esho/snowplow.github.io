"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[5199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),k=r,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},57425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Installation and set-up",date:"2022-03-24",sidebar_position:10},l=void 0,i={unversionedId:"collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/index",id:"collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/index",title:"Installation and set-up",description:"Installing",source:"@site/docs/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up",slug:"/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/java-tracker/installation-and-set-up/index.md",tags:[],version:"current",lastUpdatedAt:1662564480,formattedLastUpdatedAt:"Sep 7, 2022",sidebarPosition:10,frontMatter:{title:"Installation and set-up",date:"2022-03-24",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Java Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/"},next:{title:"Tracking events",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/"}},p={},c=[{value:"Installing",id:"installing",level:2},{value:"Install using Maven",id:"install-using-maven",level:3},{value:"Install using Gradle",id:"install-using-gradle",level:3},{value:"Install by direct download",id:"install-by-direct-download",level:3},{value:"Install in Scala project (SBT)",id:"install-in-scala-project-sbt",level:3},{value:"Setting up",id:"setting-up",level:2},{value:"Configuring the <code>Tracker</code>",id:"configuring-the-tracker",level:3},{value:"Stopping the tracker",id:"stopping-the-tracker",level:3},{value:"Logging",id:"logging",level:3}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installing"},"Installing"),(0,r.kt)("p",null,"The Snowplow Java tracker has been built and tested using Java versions 8, 11 and 17, so should work within any Java application built using JDK8 upwards. The Java tracker is also usable from Scala. "),(0,r.kt)("p",null,"The current tracker version is 1.0.0. New issues and pull requests are very welcome! Find the Github repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-java-tracker"},"here"),".  "),(0,r.kt)("h3",{id:"install-using-maven"},"Install using Maven"),(0,r.kt)("p",null,"Add into your project\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-java-tracker</artifactId>\n    <version>1.0.0</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"install-using-gradle"},"Install using Gradle"),(0,r.kt)("p",null,"From version 0.10.1 onwards, we provide out-of-the-box support for sending events via OkHttp or Apache HTTP. The appropriate dependencies must be specified. The default tracker configuration uses OkHttp.  "),(0,r.kt)("p",null,"Add this into your project\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," for the default installation with OkHttp support:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.snowplowanalytics:snowplow-java-tracker:1.0.0'\n    implementation ('com.snowplowanalytics:snowplow-java-tracker:1.0.0') {\n        capabilities {\n            requireCapability 'com.snowplowanalytics:snowplow-java-tracker-okhttp-support'\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Adding Apache HTTP support instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.snowplowanalytics:snowplow-java-tracker:1.0.0'\n    implementation ('com.snowplowanalytics:snowplow-java-tracker:1.0.0') {\n        capabilities {\n            requireCapability 'com.snowplowanalytics:snowplow-java-tracker-apachehttp-support'\n        }\n    }\n}\n")),(0,r.kt)("p",null,"If you are using your own ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpClientAdapter")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.snowplowanalytics:snowplow-java-tracker:1.0.0'\n}\n")),(0,r.kt)("h3",{id:"install-by-direct-download"},"Install by direct download"),(0,r.kt)("p",null,"You can also manually insert the tracker by downloading the jar directly from ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=a:snowplow-java-tracker"},"Maven Central"),"."),(0,r.kt)("h3",{id:"install-in-scala-project-sbt"},"Install in Scala project (SBT)"),(0,r.kt)("p",null,"The Snowplow Java tracker is also usable from Scala. Add this to your SBT config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// Dependency\nval snowplowTracker = "com.snowplowanalytics"  % "snowplow-java-tracker"  % "1.0.0"\n')),(0,r.kt)("h2",{id:"setting-up"},"Setting up"),(0,r.kt)("p",null,"The simplest initialization looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.snowplowanalytics.snowplow.tracker.Snowplow;\nimport com.snowplowanalytics.snowplow.tracker.Tracker;\n\nTracker tracker = Snowplow.createTracker("trackerNamespace", "appId", "http://collectorEndpoint");\n')),(0,r.kt)("p",null,'The URL path for your collector endpoint should include the protocol, "http" or "https". The Java tracker is able to send events to either.  '),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow")," interface, added in v1, contains static methods to help initialise and manage ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," objects. This is especially useful when multiple trackers are needed (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/using-multiple-trackers/"},"here"),"). See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/Snowplow.html"},"Snowplow")," details."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-java-tracker"},"Java tracker Github repository"),' includes a mini demo, "simple-console". Follow the instructions in the README to send one event of each type to your event collector. Simple-console is provided as a simple reference app to help you set up the tracker.'),(0,r.kt)("p",null,"These are the required objects for tracking using the Java tracker:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tracker")),(0,r.kt)("td",{parentName:"tr",align:null},"Tracks events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subclasses of ",(0,r.kt)("inlineCode",{parentName:"td"},"Event")),(0,r.kt)("td",{parentName:"tr",align:null},"What you want to track")))),(0,r.kt)("h3",{id:"configuring-the-tracker"},"Configuring the ",(0,r.kt)("inlineCode",{parentName:"h3"},"Tracker")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," class has the responsibility for tracking ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/"},"events"),". Certain properties can or must also be set when creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker"),", which will be attached to all events. These are ",(0,r.kt)("inlineCode",{parentName:"p"},"trackerNamespace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),"."),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"trackerNamespace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," are required arguments when creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker"),". Snowplow events are designed to be stored in a single data warehouse/lake, regardless of their source, to make data modelling easier and provide a single valuable source of truth for your business. The tracker namespace allows you to distinguish events sent by this specific ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker"),", if you are using multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," instances within your app. It's also the identifier for ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," objects in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow")," class. The ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," allows you to identify events from this specific application, if you are tracking from multiple places. "),(0,r.kt)("p",null,"The other Tracker property that will be added to all tracked events is ",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),". This is set by default to ",(0,r.kt)("inlineCode",{parentName:"p"},"srv"),' - "server-side app". To set another valid platform type, use the ',(0,r.kt)("inlineCode",{parentName:"p"},"DevicePlatform")," enum during construction."),(0,r.kt)("p",null,"The final two ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," configuration options are whether to use base-64 encoding, and whether to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject")," object (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/java-tracker/tracking-specific-client-side-properties/"},"here")," for details about ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject"),"). By default, JSONs within the event are sent base-64 encoded. This can be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," here at ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," initialization."),(0,r.kt)("p",null,"To create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," with custom configuration, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackerConfiguration")," class. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TrackerConfiguration trackerConfig = new TrackerConfiguration("namespace", "appId")\n        .base64Encoded(false)\n        .platform(DevicePlatform.Desktop);\n\n// Use the Snowplow class to create Trackers\nTracker tracker = Snowplow.createTracker(\n    trackerConfig,\n    new NetworkConfiguration("http://collector"));\n\n// Alternatively, create an Emitter first, and then create a Tracker directly\n// Emitters are introduced in the next section\nBatchEmitter emitter = new BatchEmitter(new NetworkConfiguration("http://collector"));\nTracker tracker = new Tracker(trackerConfig, emitter);\n')),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," will produce events with the ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," value ",(0,r.kt)("inlineCode",{parentName:"p"},"pc"),"."),(0,r.kt)("p",null,"See the API docs for the full ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/Tracker.html"},"Tracker"),", ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/configuration/TrackerConfiguration.html"},"TrackerConfiguration")," and ",(0,r.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-java-tracker/index.html?com/snowplowanalytics/snowplow/tracker/Snowplow.html"},"Snowplow")," details."),(0,r.kt)("h3",{id:"stopping-the-tracker"},"Stopping the tracker"),(0,r.kt)("p",null,"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchEmitter"),", contains a pool of non-daemon threads managed by a ",(0,r.kt)("inlineCode",{parentName:"p"},"ScheduledExecutorService"),". To close the executor service and stop the threads, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"close()")," method. This method can be called directly on an ",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter"),", or via a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"tracker.close()\n\n// It's also possible to close the Emitter directly\ntracker.getEmitter().close()\nemitter.close()\n")),(0,r.kt)("p",null,"There is no way to restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter")," after this. Note that if your app is not quit, events can still be tracked after ",(0,r.kt)("inlineCode",{parentName:"p"},"close()")," has been called: they will accumulate in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter")," buffer, unable to be sent."),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("p",null,"Logging in the Tracker is done using SLF4J. The majority of the logging set as ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," so it will not overly populate your own logging."),(0,r.kt)("p",null,"Since Java tracker v0.11, user-supplied values are only logged at ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," level."))}d.isMDXComponent=!0}}]);