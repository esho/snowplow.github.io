"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[12099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),l=n(41481);const i={title:"YouTube Tracking",date:"2022-01-12",sidebar_position:17e3},o=void 0,p={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/youtube-tracking/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/youtube-tracking/index",title:"YouTube Tracking",description:"This plugin will allow the tracking of an embedded YouTube IFrame.",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/youtube-tracking/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/youtube-tracking",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/youtube-tracking/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/youtube-tracking/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/youtube-tracking/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:17e3,frontMatter:{title:"YouTube Tracking",date:"2022-01-12",sidebar_position:17e3},sidebar:"tutorialSidebar",previous:{title:"Timezone",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/timezone/"},next:{title:"Advanced Usage",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/advanced-usage/"}},u={},s=[{value:"Download",id:"download",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"The enableYouTubeTracking function",id:"the-enableyoutubetracking-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Events",id:"events",level:2},{value:"Capturable Events",id:"capturable-events",level:3},{value:"Event Groups",id:"event-groups",level:3},{value:"Schemas and Example Data",id:"schemas-and-example-data",level:2},{value:"An unstructured event with identifying information",id:"an-unstructured-event-with-identifying-information",level:3},{value:"Snowplow platform-agnostic media context",id:"snowplow-platform-agnostic-media-context",level:3},{value:"YouTube player specific context",id:"youtube-player-specific-context",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.ZP,{mdxType:"Block5966"}),(0,r.kt)("h1",{id:"snowplow-media-tracking"},"Snowplow Media Tracking"),(0,r.kt)("p",null,"This plugin will allow the tracking of an embedded YouTube IFrame."),(0,r.kt)("h2",{id:"download"},"Download"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Download from GitHub Releases (Recommended)"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},"Github Releases (plugins.umd.zip)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Available on jsDelivr"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://cdn.jsdelivr.net/npm/@snowplow/browser-plugin-youtube-tracking@latest/dist/index.umd.min.js"},"jsDelivr")," (latest)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Available on unpkg"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://unpkg.com/@snowplow/browser-plugin-youtube-tracking@latest/dist/index.umd.min.js"},"unpkg")," (latest)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," This plugin will not work if using GAv4 Enhanced Measurement Video engagement, as both the GAv4 and Snowplow trackers will attempt to attach to the Youtube video."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"To start tracking a YouTube video with default settings, use the snippet below after\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/web-quick-start-guide/"},"setting up your tracker"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"index.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<html>\n  <head>\n    <title>Snowplow YouTube Tracking Example</title>\n    <script src="main.js"><\/script>\n  </head>\n  <body>\n    <iframe\n      id="example-id"\n      src="https://www.youtube.com/embed/zSM4ZyVe8xs"\n    ></iframe>  \n  </body>\n</html>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"main.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"window.snowplow(\n    'addPlugin',\n    'https://cdn.jsdelivr.net/npm/@snowplow/browser-plugin-youtube-tracking@latest/dist/index.umd.min.js',\n    ['snowplowYouTubeTracking', 'YouTubeTrackingPlugin']\n);\n\nwindow.snowplow('enableYouTubeTracking', {\n    id: 'example-id',\n    options: {\n        label: 'My Video Title',\n        boundaries: [10, 25, 50, 75]\n    }\n});\n")),(0,r.kt)("h2",{id:"the-enableyoutubetracking-function"},"The enableYouTubeTracking function"),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"enableYouTubeTracking"),"\xa0function takes the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'window.snowplow("enableYouTubeTracking", { id, options?: { label?, captureEvents?, boundaries?, updateRate? } })\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The HTML id attribute of the media element"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"An identifiable custom label sent with the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.captureEvents")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["DefaultEvents"]')),(0,r.kt)("td",{parentName:"tr",align:null},"The events or Event Group to capture. For a full list of events and groups, check the\xa0",(0,r.kt)("a",{parentName:"td",href:"#events"},"section below")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.boundaries")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[10, 25, 50, 75]")),(0,r.kt)("td",{parentName:"tr",align:null},"The progress percentages to fire an event at (valid values 1 - 99 inclusive)\xa0",(0,r.kt)("a",{parentName:"td",href:"#1"},"[","1","]")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.updateRate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"250")),(0,r.kt)("td",{parentName:"tr",align:null},"The rate at which\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"seek"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"volumechange"),"\xa0events can occur\xa0",(0,r.kt)("a",{parentName:"td",href:"#2"},"[","2","]")),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Below is an example of the full\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"enableYouTubeTracking"),"\xa0function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"window.snowplow('enableYouTubeTracking', {\n  id: 'example-video',\n  options: {\n    label: 'My Custom Video Label',\n    captureEvents: ['play', 'pause', 'ended'],\n    boundaries: [20, 80],\n    updateRate: 500,\n  }\n})\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"For this plugin to find your media element, your IFrame must be given the id that is passed into\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"enableYouTubeTracking"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"index.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' <iframe\n      id="example-id"\n      src="https://www.youtube.com/embed/zSM4ZyVe8xs"\n></iframe>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"main.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"window.snowplow('enableYouTubeTracking', {\n  id: \"example-id\"\n})\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"capturable-events"},"Capturable Events"),(0,r.kt)("p",null,"Below is a table of all the events that can be used in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"options.captureEvents")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Fire Condition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"play"),(0,r.kt)("td",{parentName:"tr",align:null},"The video is played")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pause"),(0,r.kt)("td",{parentName:"tr",align:null},"The video is paused")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seek"),(0,r.kt)("td",{parentName:"tr",align:null},"On seek")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volumechange"),(0,r.kt)("td",{parentName:"tr",align:null},"Volume has changed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ended"),(0,r.kt)("td",{parentName:"tr",align:null},"When playback stops at the end of the video")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"An error occurs in the player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"percentprogress"),(0,r.kt)("td",{parentName:"tr",align:null},"When a percentage boundary set in\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"options.boundaries"),"\xa0is reached")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"playbackratechange"),(0,r.kt)("td",{parentName:"tr",align:null},"Playback rate has changed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"playbackqualitychange"),(0,r.kt)("td",{parentName:"tr",align:null},"Playback quality has changed")))),(0,r.kt)("h3",{id:"event-groups"},"Event Groups"),(0,r.kt)("p",null,"You can also use a pre-made event group in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"options.captureEvents"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Events"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DefaultEvents")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["play", "pause", "seek", "volumechange", "ended", "percentprogress", "playbackratechange", "playbackqualitychange"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AllEvents")),(0,r.kt)("td",{parentName:"tr",align:null},"Every event listed in\xa0",(0,r.kt)("a",{parentName:"td",href:"#capturable-events"},"Capturable Events"))))),(0,r.kt)("p",null,'It is possible to extend an event group with any event in the Events table above. This could be useful if you want, for example, all the events contained in the "DefaultEvents" group, along with the "error" event. This is expressed in the following way:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'window.snowplow(\'enableYouTubeTracking\', {\n  id: "example-video",\n  options: {\n    captureEvents: ["DefaultEvents", "error"],\n  }\n})\n')),(0,r.kt)("h2",{id:"schemas-and-example-data"},"Schemas and Example Data"),(0,r.kt)("p",null,"Three schemas are used with this plugin:"),(0,r.kt)("h3",{id:"an-unstructured-event-with-identifying-information"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/media_player_event/jsonschema/1-0-0"},"An unstructured event with identifying information")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "type": "play",\n    "label": "Identifying Label"\n}\n')),(0,r.kt)("h3",{id:"snowplow-platform-agnostic-media-context"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/media_player/jsonschema/1-0-0"},"Snowplow platform-agnostic media context")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "currentTime": 12.32,\n    "duration": 20,\n    "ended": false,\n    "loop": false,\n    "muted": true,\n    "paused": false,\n    "playbackRate": 1,\n    "volume": 100\n}\n')),(0,r.kt)("h3",{id:"youtube-player-specific-context"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/org.whatwg/media_element/jsonschema/1-0-0"},"YouTube player specific context")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "autoPlay": false,\n  "avaliablePlaybackRates": [\n    0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2\n  ],\n  "buffering": false,\n  "controls": true,\n  "cued": false,\n  "loaded": 17,\n  "playbackQuality": "hd1080",\n  "playerId": "youtube",\n  "unstarted": false,\n  "url": "https://www.youtube.com/watch?v=zSM4ZyVe8xs",\n  "yaw": 0,\n  "pitch": 0,\n  "roll": 0,\n  "fov": 100.00004285756798,\n  "avaliableQualityLevels": [\n    "hd2160",\n    "hd1440",\n    "hd1080",\n    "hd720",\n    "large",\n    "medium",\n    "small",\n    "tiny",\n    "auto"\n  ]\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'To track when a video ends, use the "ended" event.\xa0')),(0,r.kt)("p",null,"2","."," ",(0,r.kt)("inlineCode",{parentName:"p"},"seek")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"volumechange")," use ",(0,r.kt)("inlineCode",{parentName:"p"},"setInterval")," to poll the player every ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," ms. You are able to adjust the poll rate, however, lower values may cause performance issues."))}c.isMDXComponent=!0},41481:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/snowplow/snowplow-javascript-tracker?include_prereleases&sort=semver&style=flat",alt:null}))))}i.isMDXComponent=!0}}]);