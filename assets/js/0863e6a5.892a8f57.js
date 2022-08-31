"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[27541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Emitter",date:"2022-05-12",sidebar_position:80},l=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/emitter/index",id:"collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/emitter/index",title:"Emitter",description:"Events are sent using an\xa0Emitter\xa0class. You can initialize a class using a variety of builder functions.",source:"@site/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/emitter/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/emitter",slug:"/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/emitter/",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/emitter/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/emitter/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:80,frontMatter:{title:"Emitter",date:"2022-05-12",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Adding extra data: the Subject class",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/adding-extra-data-the-subject-class/"},next:{title:"Payload and logging",permalink:"/docs/collecting-data/collecting-from-own-applications/java-tracker/previous-versions/java-tracker-v0-11/payload-and-logging/"}},s={},c=[{value:"<code>HttpClientAdapters</code>",id:"httpclientadapters",level:3},{value:"<code>OkHttpClientAdapter</code>",id:"okhttpclientadapter",level:3},{value:"<code>ApacheHttpClientAdapter</code>",id:"apachehttpclientadapter",level:3},{value:"5.2 Using a buffer",id:"52-using-a-buffer",level:3},{value:"Choosing the HTTP method",id:"choosing-the-http-method",level:3},{value:"Threads",id:"threads",level:3},{value:"Emitter callback",id:"emitter-callback",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Events are sent using an\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter"),"\xa0class. You can initialize a class using a variety of builder functions."),(0,r.kt)("p",null,"Here are the Emitter builder functions that can be used to make either a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleEmitter"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"BatchEmitter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Simple (GET) Emitter\nEmitter simple = SimpleEmitter.builder()\n        .httpClientAdapter( {{ An Adapter }} ) // Required\n        .threadCount(20) // Default is 50\n        .requestCallback( {{ A callback }} ) // Default is Null\n        .requestExecutorService( {{ An ExecutorService }} ) // Default is Executors.newScheduledThreadPool\n        .build();\n\n// Batch (POST) Emitter\nEmitter batch = BatchEmitter.builder()\n        .httpClientAdapter( {{ An Adapter }} ) // Required\n        .bufferSize(20)  // Default is 50\n        .threadCount(20) // Default is 50\n        .requestCallback( {{ A callback }} ) // Default is Null\n        .requestExecutorService( {{ An ExecutorService }} ) // Default is Executors.newScheduledThreadPool\n        .build();\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Function Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"httpClientAdapter")),(0,r.kt)("td",{parentName:"tr",align:null},"The\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"HttpClientAdapter"),"\xa0to use for all event sending"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bufferSize")),(0,r.kt)("td",{parentName:"tr",align:null},"BatchEmitter Only: Specifies how many events go into a POST"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"threadCount")),(0,r.kt)("td",{parentName:"tr",align:null},"The count of Threads that can be used to send events"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"requestCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Lets you pass a callback class to handle succes/failure in sending events"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"requestExecutorService")),(0,r.kt)("td",{parentName:"tr",align:null},"Lets you choose an ExecutorService for thread pool creation"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h3",{id:"httpclientadapters"},(0,r.kt)("inlineCode",{parentName:"h3"},"HttpClientAdapters")),(0,r.kt)("p",null,"We currently offer two different Http Clients that can be used to send events to our collectors. Once created they need to be attached to the emitter in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"httpClientAdapter"),"\xa0builder argument."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Function Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the collector to send events to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"httpClient")),(0,r.kt)("td",{parentName:"tr",align:null},"The http client to use (either OkHttp or Apache)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h3",{id:"okhttpclientadapter"},(0,r.kt)("inlineCode",{parentName:"h3"},"OkHttpClientAdapter")),(0,r.kt)("p",null,"You build an\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"OkHttpClientAdapter"),"\xa0like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Make a new client\nOkHttpClient client = new OkHttpClient.Builder()\n      .connectTimeout(5, TimeUnit.SECONDS)\n      .readTimeout(5, TimeUnit.SECONDS)\n      .writeTimeout(5, TimeUnit.SECONDS)\n      .build();\n\n// Build the adapter\nHttpClientAdapter adapter = OkHttpClientAdapter.builder()\n      .url("http://www.acme.com")\n      .httpClient(client)\n      .build();\n')),(0,r.kt)("h3",{id:"apachehttpclientadapter"},(0,r.kt)("inlineCode",{parentName:"h3"},"ApacheHttpClientAdapter")),(0,r.kt)("p",null,"You build an\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ApacheHttpClientAdapter"),"\xa0like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Make a new client with custom concurrency rules\nPoolingHttpClientConnectionManager manager = new PoolingHttpClientConnectionManager();\nmanager.setDefaultMaxPerRoute(50);\n\n// Make the client\nCloseableHttpClient client = HttpClients.custom()\n      .setConnectionManager(manager)\n      .build();\n\n// Build the adapter\nHttpClientAdapter adapter = ApacheHttpClientAdapter.builder()\n      .url("http://www.acme.com")\n      .httpClient(client)\n      .build();\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": it is encouraged to research how best you want to setup your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ApacheClient"),"\xa0for maximum performance. By default the Apache Client will never timeout and will also allow only two outbound connections at a time. We have used a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"PoolingHttpClientConnectionManager"),"\xa0here to override that setting to allow up to 50 concurrent outbound connections."),(0,r.kt)("h3",{id:"52-using-a-buffer"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Java-Tracker#52-using-a-buffer"}),"5.2 Using a buffer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": Only applies to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"BatchEmitter")),(0,r.kt)("p",null,"A buffer is used to group events together in bulk before sending them. This is especially handy to reduce network usage. By default, the Emitter buffers up to 50 events before sending them. You can change this to send events instantly as soon as they are created like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Emitter batch = BatchEmitter.builder()\n        .httpClientAdapter( ... )\n        .build();\n\nbatch.setBufferSize(1)\n")),(0,r.kt)("p",null,"The buffer size must be an integer greater than or equal to 1."),(0,r.kt)("h3",{id:"choosing-the-http-method"},"Choosing the HTTP method"),(0,r.kt)("p",null,"Choosing to send via GET or POST is as easy as building a particular type of Emitter. If you want to send via GET then you will need to build a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleEmitter"),". For sending via POST you will need to build a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"BatchEmitter"),"."),(0,r.kt)("h3",{id:"threads"},"Threads"),(0,r.kt)("p",null,"The Thread Count is the size of the available Thread Pool that events can be sent on. The bigger the Pool of Threads the faster events can be sent. By default we use up to 50 Threads for sending but this can be altered up or down depending on many events you are sending. As well as how strong a computer the Tracker is running on."),(0,r.kt)("p",null,"Since Java tracker v0.11, the threads have informative naming to help with debugging. Threads in the Emitter thread pool are named ",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-emitter-BufferConsumer-thread-{{thread number}}"),". The Emitter request thread is named ",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-emitter-pool-1-request-thread-1"),"."),(0,r.kt)("h3",{id:"emitter-callback"},"Emitter callback"),(0,r.kt)("p",null,"If an event fails to send because of a network issue, you can choose to handle the failure case with a callback class to react accordingly. The callback class needs to implement the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"RequestCallback"),"\xa0interface in order to do so. Here is a sample bit of code to show how it could work:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Make a RequestCallback\nRequestCallback callback = new RequestCallback() {\n  @Override\n  public void onSuccess(int successCount) {\n    System.out.println("Success, successCount: " + successCount);\n  }\n\n  @Override\n  public void onFailure(int successCount, List<Event> failedEvents) {\n    System.out.println("Failure, successCount: " + successCount + "\\nfailedEvent:\\n" + failedEvents.toString());\n  }\n};\n\n// Attach it to an Emitter\nEmitter e1 = BatchEmitter.builder()\n        .httpClientAdapter( ... )\n        .requestCallback(callback)\n        .build();\n')),(0,r.kt)("p",null,"In the example, we can see an in-line example of handling the case. If events are all successfully sent, the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess"),"\xa0method returns the number of successful events sent. If there were any failures, the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"onFailure"),"\xa0method returns the successful events sent (if any) and a\xa0",(0,r.kt)("em",{parentName:"p"},"list of events"),"\xa0that failed to be sent (i.e. the HTTP state code did not return 200)."),(0,r.kt)("p",null,"A common pattern here could be to re-send all failed events if they occur. It is up to the developer to determine whether they want to wait a certain amount of time before re-sending or if they want to re-send at all."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Example on-failure function with re-tracking\nRequestCallback callback = new RequestCallback() {\n  @Override\n  public void onSuccess(int successCount) {\n    System.out.println("Success, successCount: " + successCount);\n  }\n\n  @Override\n  public void onFailure(int successCount, List<Event> failedEvents) {\n    System.out.println("Failure, successCount: " + successCount + "\\nfailedEvent:\\n" + failedEvents.toString());\n\n    // Re-send each event\n    for (TrackerPayload payload : failedEvents) {\n      tracker.tracker(payload);\n    }\n  }\n};\n')))}p.isMDXComponent=!0}}]);