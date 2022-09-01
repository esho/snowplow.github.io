"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[35586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Configuring how events are sent",date:"2021-10-26",sidebar_position:30},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/ruby-tracker/configuring-how-events-are-sent/index",id:"collecting-data/collecting-from-own-applications/ruby-tracker/configuring-how-events-are-sent/index",title:"Configuring how events are sent",description:"When you initialize your Tracker object, you will need to provide one or more Emitter objects. Remember that we advise using the Singleton pattern, to avoid constantly recreating your objects.",source:"@site/docs/collecting-data/collecting-from-own-applications/ruby-tracker/configuring-how-events-are-sent/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/ruby-tracker/configuring-how-events-are-sent",slug:"/collecting-data/collecting-from-own-applications/ruby-tracker/configuring-how-events-are-sent/",permalink:"/docs/collecting-data/collecting-from-own-applications/ruby-tracker/configuring-how-events-are-sent/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/ruby-tracker/configuring-how-events-are-sent/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:30,frontMatter:{title:"Configuring how events are sent",date:"2021-10-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Adding data to your events: context and more",permalink:"/docs/collecting-data/collecting-from-own-applications/ruby-tracker/adding-data-events/"},next:{title:"API documentation",permalink:"/docs/collecting-data/collecting-from-own-applications/ruby-tracker/ruby-api-documentation/"}},c={},s=[{value:"Manual flushing",id:"manual-flushing",level:3},{value:"Logging",id:"logging",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you ",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/ruby-tracker/getting-started/#tracking-design-and-initialization"},"initialize your Tracker object"),", you will need to provide one or more Emitter objects. Remember that we advise using the Singleton pattern, to avoid constantly recreating your objects."),(0,a.kt)("p",null,"There are two types of Emitter. The Emitter parent class can only send events synchronously. The AsyncEmitter subclass sends events asynchronously by default. We recommend you use the AsyncEmitter, to avoid slowing down your app."),(0,a.kt)("p",null,"Emitters and AsyncEmitters are initialized in the same way. An event collector endpoint is required, but there are various optional parameters that can also be set (see ",(0,a.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-ruby-tracker/SnowplowTracker/Emitter.html"},"API docs")," and below table). A Tracker can have more than one associated Emitter or AsyncEmitter. These can be provided at Tracker initialization, or added later on."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"emitter1 = SnowplowTracker::Emitter.new(endpoint: 'collector.example.com')\nemitter2 = SnowplowTracker::AsyncEmitter.new(endpoint: 'collector2.example.com')\nemitter3 = SnowplowTracker::AsyncEmitter.new(endpoint: 'collector.elsewhere.com',\n                                             options: { protocol: 'https' })\n\ntracker = SnowplowTracker::Tracker.new(emitters: [emitter1, emitter2])\ntracker.add_emitter(emitter3)\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#accordion-using-ruby-tracker-andlt070-expand-this"},"Using Ruby tracker <0.7.0? Expand this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"emitter1 = SnowplowTracker::Emitter.new('collector.example.com')\nemitter2 = SnowplowTracker::AsyncEmitter.new('collector2.example.com')\nemitter3 = SnowplowTracker::AsyncEmitter.new('collector.elsewhere.com',\n                                             { protocol: 'https' })\n\ntracker = SnowplowTracker::Tracker.new([emitter1, emitter2])\ntracker.add_emitter(emitter3)\n")),(0,a.kt)("p",null,"Optional Emitter settings:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Optional parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"path")),(0,a.kt)("td",{parentName:"tr",align:null},"Override the default path for appending to the endpoint")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"protocol")),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP or HTTPS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"port")),(0,a.kt)("td",{parentName:"tr",align:null},"The port for the connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"method")),(0,a.kt)("td",{parentName:"tr",align:null},"GET or POST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"buffer_size")),(0,a.kt)("td",{parentName:"tr",align:null},"The size of the buffer, i.e. the number of events to send at once")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"on_success")),(0,a.kt)("td",{parentName:"tr",align:null},"A method to call if events were all sent successfully")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"on_failure")),(0,a.kt)("td",{parentName:"tr",align:null},"A method to call if any events did not send")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"thread_count")),(0,a.kt)("td",{parentName:"tr",align:null},"Number of threads to use (relevant to AsyncEmitters only)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"logger")),(0,a.kt)("td",{parentName:"tr",align:null},"Log somewhere other than STDERR")))),(0,a.kt)("p",null,"Response status codes of 2xx or 3xx status codes are considered successful."),(0,a.kt)("h3",{id:"manual-flushing"},"Manual flushing"),(0,a.kt)("p",null,"You may want to force an emitter to send all events in its buffer, even if the buffer is not full. The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Tracker"),"\xa0class has a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"flush"),"\xa0method which flushes all its emitters. It accepts one argument,\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"async"),", which defaults to false. Unless you set\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"async"),"\xa0to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the flush will be synchronous: it will block until all queued events have been sent. Of course, if you are using Emitters rather than AsyncEmitters, the flush will always be synchronous, even if ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Synchronous flush\ntracker.flush\n\n# Asynchronous flush\ntracker.flush(async: true)\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#accordion-using-ruby-tracker-andlt070-expand-this"},"Using Ruby tracker <0.7.0? Expand this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Synchronous flush\ntracker.flush\n\n# Asynchronous flush\ntracker.flush(true)\n")),(0,a.kt)("h3",{id:"logging"},"Logging"),(0,a.kt)("p",null,"Emitters log messages about their activity and success during event sending. By default, Emitters log their activity to STDERR, using the Ruby standard library ",(0,a.kt)("a",{parentName:"p",href:"https://ruby-doc.org/stdlib-2.7.2/libdoc/logger/rdoc/Logger.html"},"Logger class"),". Messages with a message level above INFO are logged. Advanced users might wish to alter how this logging occurs. You can change the message logging level, or, alternatively, you might want to disable logging completely, or log somewhere other than STDERR. Read how to do this in the ",(0,a.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-ruby-tracker/SnowplowTracker/Emitter.html"},"API docs"),"."))}u.isMDXComponent=!0}}]);