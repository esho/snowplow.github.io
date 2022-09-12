"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[54706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=l,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6734:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(87462),l=(a(67294),a(3905)),r=a(41481);const i={title:"Media Tracking",date:"2022-01-11",sidebar_position:12500},o=void 0,d={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/media-tracking/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/media-tracking/index",title:"Media Tracking",description:"This plugin will allow the tracking of any HTML5\xa0`\xa0or\xa0`\xa0element, along with many HTML5 based video player frameworks.",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/media-tracking/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/media-tracking",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/media-tracking/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/media-tracking/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/media-tracking/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:12500,frontMatter:{title:"Media Tracking",date:"2022-01-11",sidebar_position:12500},sidebar:"defaultSidebar",previous:{title:"Link Click Tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/link-click-tracking/"},next:{title:"Optimizely Classic",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/optimizely-classic/"}},p={},s=[{value:"Download",id:"download",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"The enableMediaTracking function",id:"the-enablemediatracking-function",level:2},{value:"Usage",id:"usage",level:2},{value:"The\xa0<code>&lt;audio&gt; or &lt;video&gt;</code>\xa0element has the HTML id passed into\xa0<code>enableMediaTracking</code>",id:"theaudio-or-videoelement-has-the-html-id-passed-intoenablemediatracking",level:4},{value:"The media element is the only\xa0<code>&lt;audio&gt; or &lt;video&gt;</code>\xa0child of a parent element with the HTML id passed into\xa0<code>enableMediaTracking</code>",id:"the-media-element-is-the-onlyaudio-or-videochild-of-a-parent-element-with-the-html-id-passed-intoenablemediatracking",level:4},{value:"Events",id:"events",level:2},{value:"Capturable Events",id:"capturable-events",level:3},{value:"Event Groups",id:"event-groups",level:3},{value:"Schemas and Example Data",id:"schemas-and-example-data",level:2},{value:"An unstructured event with identifying information",id:"an-unstructured-event-with-identifying-information",level:3},{value:"Snowplow platform-agnostic media context",id:"snowplow-platform-agnostic-media-context",level:3},{value:"HTML5 Media specific context",id:"html5-media-specific-context",level:3},{value:"HTML5 Video specific context",id:"html5-video-specific-context",level:3},{value:"Video Frameworks",id:"video-frameworks",level:3}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.ZP,{mdxType:"Block5966"}),(0,l.kt)("p",null,"This plugin will allow the tracking of any HTML5\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"<video>"),"\xa0or\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"<audio>"),"\xa0element, along with many HTML5 based video player frameworks."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Tracker Distribution"),(0,l.kt)("th",{parentName:"tr",align:null},"Included"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sp.js")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sp.lite.js")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,l.kt)("h2",{id:"download"},"Download"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Download from GitHub Releases (Recommended)"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},"Github Releases (plugins.umd.zip)"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Available on jsDelivr"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://cdn.jsdelivr.net/npm/@snowplow/browser-plugin-media-tracking@latest/dist/index.umd.min.js"},"jsDelivr")," (latest)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Available on unpkg"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://unpkg.com/@snowplow/browser-plugin-media-tracking@latest/dist/index.umd.min.js"},"unpkg")," (latest)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," The links to the CDNs above point to the current latest version. You should pin to a specific version when integrating this plugin on your website if you are using a third party CDN in production."),(0,l.kt)("h2",{id:"quick-start"},"Quick Start"),(0,l.kt)("p",null,"To start tracking media with default settings, use the snippet below, using your id and source:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"main.js"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"window.snowplow('addPlugin', \n  \"https://cdn.jsdelivr.net/npm/@snowplow/browser-plugin-media-tracking@latest/dist/index.umd.min.js\",\n  [\"snowplowMediaTracking\", \"MediaTrackingPlugin\"]\n);\n\nwindow.snowplow('enableMediaTracking', {\n  id: 'example-id'\n})\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"index.html"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<html>\n  <head>\n    <title>Snowplow Media Tracking Example</title>\n  </head>\n  <body>\n    <video id='example-id' src='./example-video.mp4'></video>\n  </body>\n</html>\n")),(0,l.kt)("h2",{id:"the-enablemediatracking-function"},"The enableMediaTracking function"),(0,l.kt)("p",null,"The\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"enableMediaTracking"),"\xa0function takes the form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"window.snowplow('enableMediaTracking', { id, options?: { label?, captureEvents?, boundaries?, volumeChangeTrackingInterval? } })\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The HTML id attribute of the media element"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options.label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"An identifiable custom label sent with the event"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options.captureEvents")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"['DefaultEvents']")),(0,l.kt)("td",{parentName:"tr",align:null},"The events or Event Group to capture. For a full list of events and groups, check the\xa0",(0,l.kt)("a",{parentName:"td",href:"#events"},"section below")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options.boundaries")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[10, 25, 50, 75]")),(0,l.kt)("td",{parentName:"tr",align:null},"The progress percentages to fire an event at (valid values 1 - 99 inclusive)\xa0",(0,l.kt)("a",{parentName:"td",href:"#1"},"[","1","]")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options.volumeChangeTrackingInterval")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"250")),(0,l.kt)("td",{parentName:"tr",align:null},"The rate at which volume events can be sent ",(0,l.kt)("a",{parentName:"td",href:"#2"},"[","2","]")),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("p",null,"Below is an example of the full\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"enableMediaTracking"),"\xa0function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"window.snowplow('enableMediaTracking', {\n  id: 'example-video',\n  options: {\n    label: 'My Custom Video Label',\n    captureEvents: ['play', 'pause', 'ended'],\n    boundaries: [20, 80],\n    volumeChangeTrackingInterval: 200,\n  }\n}\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"For this plugin to find your media element, one of the following conditions must be true:"),(0,l.kt)("h4",{id:"theaudio-or-videoelement-has-the-html-id-passed-intoenablemediatracking"},"The\xa0",(0,l.kt)("inlineCode",{parentName:"h4"},"<audio> or <video>"),"\xa0element has the HTML id passed into\xa0",(0,l.kt)("inlineCode",{parentName:"h4"},"enableMediaTracking")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"index.html"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"...\n  <body>\n    <video id='example-id' src='./example-video.mp4'></video>\n    <script>\n      window.snowplow('enableMediaTracking', {\n        id: 'example-id'\n      })\n      <\/script>\n  </body>\n...\n")),(0,l.kt)("p",null,"Or"),(0,l.kt)("h4",{id:"the-media-element-is-the-onlyaudio-or-videochild-of-a-parent-element-with-the-html-id-passed-intoenablemediatracking"},"The media element is the only\xa0",(0,l.kt)("inlineCode",{parentName:"h4"},"<audio> or <video>"),"\xa0child of a parent element with the HTML id passed into\xa0",(0,l.kt)("inlineCode",{parentName:"h4"},"enableMediaTracking")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"index.html"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"...\n  <body>\n    <div id=\"example-id\">\n      <video id='example-id' src='./example-video.mp4'></video>\n    </div>\n    <script>\n      window.snowplow('enableMediaTracking', {\n        id: 'example-id'\n      })\n      <\/script>\n  </body>\n...\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"capturable-events"},"Capturable Events"),(0,l.kt)("p",null,"Below is a table of all the events that can be used in\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"options.captureEvents")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Fire Condition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"abort"),(0,l.kt)("td",{parentName:"tr",align:null},"The resource was not fully loaded, but not as the result of an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canplay"),(0,l.kt)("td",{parentName:"tr",align:null},"The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canplaythrough"),(0,l.kt)("td",{parentName:"tr",align:null},"The user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"durationchange"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration attribute has been updated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emptied"),(0,l.kt)("td",{parentName:"tr",align:null},"The media has become empty; for example, when the media has already been loaded (or partially loaded), and the HTMLMediaElement.load() method is called to reload it.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ended"),(0,l.kt)("td",{parentName:"tr",align:null},"When playback stops when end of the media (",(0,l.kt)("inlineCode",{parentName:"td"},"<audio>"),"\xa0or\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"<video>"),") is reached or because no further data is available.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"The resource could not be loaded due to an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadeddata"),(0,l.kt)("td",{parentName:"tr",align:null},"The first frame of the media has finished loading.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadedmetadata"),(0,l.kt)("td",{parentName:"tr",align:null},"The metadata has been loaded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadstart"),(0,l.kt)("td",{parentName:"tr",align:null},"The browser has started to load a resource.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pause"),(0,l.kt)("td",{parentName:"tr",align:null},"When a request to pause play is handled and the activity has entered its paused state, most commonly occurring when the media's HTMLMediaElement.pause() method is called.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"play"),(0,l.kt)("td",{parentName:"tr",align:null},"The paused property is changed from true to false, as a result of the HTMLMediaElement.play() method, or the autoplay attribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"playing"),(0,l.kt)("td",{parentName:"tr",align:null},"When playback is ready to start after having been paused or delayed due to lack of data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"progress"),(0,l.kt)("td",{parentName:"tr",align:null},"Fired periodically as the browser loads a resource.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ratechange"),(0,l.kt)("td",{parentName:"tr",align:null},"The playback rate has changed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seeked"),(0,l.kt)("td",{parentName:"tr",align:null},"When a seek operation completes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seeking"),(0,l.kt)("td",{parentName:"tr",align:null},"When a seek operation begins")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stalled"),(0,l.kt)("td",{parentName:"tr",align:null},"The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"suspend"),(0,l.kt)("td",{parentName:"tr",align:null},"The media data loading has been suspended.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeupdate"),(0,l.kt)("td",{parentName:"tr",align:null},"The time indicated by the currentTime attribute has been updated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volumechange"),(0,l.kt)("td",{parentName:"tr",align:null},"The volume has changed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"waiting"),(0,l.kt)("td",{parentName:"tr",align:null},"When playback has stopped because of a temporary lack of data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enterpictureinpicture"),(0,l.kt)("td",{parentName:"tr",align:null},"When the element enters picture-in-picture mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"leavepictureinpicture"),(0,l.kt)("td",{parentName:"tr",align:null},"When the element leaves picture-in-picture mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fullscreenchange"),(0,l.kt)("td",{parentName:"tr",align:null},"Fired immediately after the browser switches into or out of full-screen. mode.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cuechange"),(0,l.kt)("td",{parentName:"tr",align:null},"When a text track has changed the currently displaying cues.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"percentprogress"),(0,l.kt)("td",{parentName:"tr",align:null},"When a percentage boundary set in\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"options.boundaries"),"\xa0is reached.")))),(0,l.kt)("p",null,"Note"),(0,l.kt)("p",null,"Not all events are available in all browsers (though most are). To check, use the following links:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#browser_compatibility"},"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#browser","_","compatibility")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#browser_compatibility"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#browser","_","compatibility")),(0,l.kt)("h3",{id:"event-groups"},"Event Groups"),(0,l.kt)("p",null,"You can also use a pre-made event group in\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"options.captureEvents"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Events"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DefaultEvents")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"['pause', 'play', 'seeked', 'ratechange', 'volumechange', 'ended', 'fullscreenchange', 'percentprogress']"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AllEvents")),(0,l.kt)("td",{parentName:"tr",align:null},"Every event listed in\xa0",(0,l.kt)("a",{parentName:"td",href:"#capturable-events"},"Capturable Events"))))),(0,l.kt)("p",null,"It is possible to extend an event group with any event in the Events table above. This could be useful, for example, if you want all the events contained in the 'DefaultEvents' group, along with the 'emptied' event. This is expressed in the following way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"window.snowplow('enableMediaTracking', {\n  id: 'example-video',\n  options: {\n    captureEvents: ['DefaultEvents', 'emptied'],\n  }\n})\n")),(0,l.kt)("h2",{id:"schemas-and-example-data"},"Schemas and Example Data"),(0,l.kt)("p",null,"Four schemas are used with this plugin:"),(0,l.kt)("h3",{id:"an-unstructured-event-with-identifying-information"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/media_player_event/jsonschema/1-0-0"},"An unstructured event with identifying information")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "type": "play",\n    "label": "Identifying Label"\n}\n')),(0,l.kt)("h3",{id:"snowplow-platform-agnostic-media-context"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/media_player/jsonschema/1-0-0"},"Snowplow platform-agnostic media context")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "currentTime": 12.32,\n    "duration": 20,\n    "ended": false,\n    "loop": false,\n    "muted": true,\n    "paused": false,\n    "playbackRate": 1,\n    "volume": 100\n}\n')),(0,l.kt)("h3",{id:"html5-media-specific-context"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/org.whatwg/media_element/jsonschema/1-0-0"},"HTML5 Media specific context")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "htmlId": "my-video",\n    "mediaType": "VIDEO",\n    "autoPlay": false,\n    "buffered": [\n        {\n            "start": 0, "end" : 20\n        }\n    ],\n    "controls": true,\n    "currentSrc": "http://example.com/video.mp4",\n    "defaultMuted": true,\n    "defaultPlaybackRate": 1,\n    "disableRemotePlayback": false,\n    "error": null,\n    "networkState": "IDLE",\n    "preload": "metadata",\n    "readyState": "ENOUGH_DATA",\n    "seekable": [\n        {\n            "start": 0, "end" : 20\n        }\n    ],\n    "seeking": false,\n    "src": "http://example.com/video.mp4",\n    "textTracks": [\n        {\n            "label": "English",\n            "language": "en",\n            "kind": "captions",\n            "mode": "showing",\n        },\n    ],\n    "fileExtension": "mp4",\n    "fullscreen": false,\n    "pictureInPicture": false\n}\n')),(0,l.kt)("h3",{id:"html5-video-specific-context"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/org.whatwg/video_element/jsonschema/1-0-0"},"HTML5 Video specific context")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "autoPictureInPicture": false,\n    "disablePictureInPicture": false,\n    "poster": "http://www.example.com/poster.jpg",\n    "videoHeight": 300,\n    "videoWidth": 400\n}\n')),(0,l.kt)("p",null,"Note"),(0,l.kt)("p",null,"Not all properties in the HTML5 Media/Video specific schemas will be available on all browsers. Use the following links to check availability:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#browser_compatibility"},"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#browser","_","compatibility")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#browser_compatibility"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#browser","_","compatibility")),(0,l.kt)("h3",{id:"video-frameworks"},"Video Frameworks"),(0,l.kt)("p",null,"This plugin has been tested with\xa0",(0,l.kt)("a",{parentName:"p",href:"https://videojs.com/"},"VideoJS"),"\xa0and\xa0",(0,l.kt)("a",{parentName:"p",href:"https://plyr.io/"},"Plyr"),", but should work with almost any player framework that results in a\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"<video>"),"\xa0element)."),(0,l.kt)("hr",null),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"To track when a video ends, use the 'ended' event.\xa0")),(0,l.kt)("p",null,"2","."," When holding and dragging the volume slider, 'volumechange' events would be fired extremely quickly. This is used to limit the rate they can be sent out at. The default value is likely to be appropriate, but you can adjust it if you find you want fewer/more volume events through."))}c.isMDXComponent=!0},41481:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={toc:[]};function i(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/snowplow/snowplow-javascript-tracker?include_prereleases&sort=semver&style=flat",alt:null}))))}i.isMDXComponent=!0}}]);