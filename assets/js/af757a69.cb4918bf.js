"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[6321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"Tutorial: A Guide to Using the Poplin Chrome Extension",date:"2021-06-09",sidebar_position:90},s=void 0,r={unversionedId:"tutorials/tutorial-a-guide-to-using-the-poplin-chrome-extension/index",id:"tutorials/tutorial-a-guide-to-using-the-poplin-chrome-extension/index",title:"Tutorial: A Guide to Using the Poplin Chrome Extension",description:"At Snowplow we frequently use the Poplin chrome extension to check for event emission on a web page, we also recommend that our clients do the same when in the process of QA\u2019ing their tracking code. This extension is an open source project by Poplin data, one of our partners operating in Australia and New Zealand - the source code for the extension can be found here.",source:"@site/docs/tutorials/tutorial-a-guide-to-using-the-poplin-chrome-extension/index.md",sourceDirName:"tutorials/tutorial-a-guide-to-using-the-poplin-chrome-extension",slug:"/tutorials/tutorial-a-guide-to-using-the-poplin-chrome-extension/",permalink:"/docs/tutorials/tutorial-a-guide-to-using-the-poplin-chrome-extension/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/tutorials/tutorial-a-guide-to-using-the-poplin-chrome-extension/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:90,frontMatter:{title:"Tutorial: A Guide to Using the Poplin Chrome Extension",date:"2021-06-09",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Setting up R to perform more sophisticated analysis on your Snowplow data",permalink:"/docs/tutorials/setting-up-r-to-perform-more-sophisticated-analysis-on-your-snowplow-data/"}},l={},p=[],c={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At Snowplow we frequently use the ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/snowplow-inspector/maplkdomeamdlngconidoefjpogkmljm?hl=en"},"Poplin chrome extension")," to check for event emission on a web page, we also recommend that our clients do the same when in the process of QA\u2019ing their tracking code. This extension is an open source project by ",(0,a.kt)("a",{parentName:"p",href:"https://poplindata.com/"},"Poplin data"),", one of our partners operating in Australia and New Zealand - the source code for the extension can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/poplindata/chrome-snowplow-inspector"},"here"),"."),(0,a.kt)("p",null,"Once added to chrome the extension can be opened by opening developer tools (ctrl-shift-I), where it has its own tab named \u2018snowplow\u2019 (look for the tab adjacent to \u2018Elements\u2019, \u2018Console\u2019, \u2018Network\u2019, etc. - it may be necessary to expand the list of tabs using the chevrons >>.\xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How it works")),(0,a.kt)("p",null,"As a user browses a webpage they can perform different actions that may be tracked as Snowplow events. These events are sent as HTTP requests to the Snowplow collector that the tracker on the webpage is pointed towards. Simply put, what the Poplin extension does is parse these same HTTP requests into a more easily readable format. This allows anyone with the extension to more easily see what actions on a webpage with Snowplow tracking trigger what events to be sent to a Snowplow pipeline.\xa0"),(0,a.kt)("p",null,"In the example below two events were fired as HTTP post requests from a test webpage: a ",(0,a.kt)("strong",{parentName:"p"},"page","_","view")," event and a ",(0,a.kt)("strong",{parentName:"p"},"link","_","click")," event.\xa0"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(80596).Z,width:"1441",height:"1144"})),(0,a.kt)("p",null,"Within the parsed out HTTP requests that comprise the event payload are a variety of ",(0,a.kt)("a",{parentName:"p",href:"/docs/understanding-your-pipeline/canonical-event/"},"Snowplow canonical event")," fields such as unique event","_","ids, timestamps and user and session identifiers, as well as any custom event or entity fields."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Role of The Poplin Extension in Event QA"),"\xa0"),(0,a.kt)("p",null,"The Poplin extension is an invaluable tool for anyone who is pushing tracking live as it gives real time, easy to access, information on what events are being emitted and what the contents of these events are. This makes the tool a good first port of call when trying to answer questions such as \u201cwhy is X event not appearing in my data warehouse\u201d by showing whether or not the event is actually firing on a chosen webpage.\xa0\xa0"),(0,a.kt)("p",null,"Additionally the extension can be configured to show whether or not an event has passed validation according to any event validation rules codified in jsonschema - stored in an iglu registry.\xa0"),(0,a.kt)("p",null,"By default the extension is able to see jsonschemas for events and entities that are built into the Snowplow javascript tracker, as they are publicly available on ",(0,a.kt)("a",{parentName:"p",href:"http://iglucentral.com"},"iglucentral.com"),".\xa0"),(0,a.kt)("p",null,"However the extension can be configured to compare events against private schema repositories (that contain your organization's proprietary jsonschemas). If the extension is not configured to point towards your private schema repository then any custom events or entities will not be recognised by the extension. An example of an unrecognized event is shown below:\xa0"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(72592).Z,width:"1600",height:"512"})),(0,a.kt)("p",null,"Clicking on the \u201cunrecognised\u201d button and following the steps below will allow you to configure your own Poplin extension to also use jsonschemas from private repositories that you have access to.\xa0"),(0,a.kt)("p",null,"Upon clicking on the \u201cunrecognised\u201d button you will be directed to the extension options (shown below), which should contain the iglucentral.com URL by default:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(10162).Z,width:"393",height:"308"})),(0,a.kt)("p",null,"Additional iglu repositories can be added. Each repository can be delimited by spaces, lines or commas and the format for repositories is either:"),(0,a.kt)("p",null,"For the production jsonschema repository:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://{{API_auth_key}}@com-acme-prod.iglu.snplow.net/api")),(0,a.kt)("p",null,"For the development jsonschema repository:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://{{API_auth_key}}@com-acme-dev.iglu.snplow.net/api")),(0,a.kt)("p",null,"Unlike the iglucentral.com repository these private repositories cannot be accessed directly via the browser.\xa0"),(0,a.kt)("p",null,"The organisation specific API authentication key can be generated via the Snowplow BDP Console by navigating to the Iglu API key management page (steps shown below):"),(0,a.kt)("p",null,"Step 1:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(81225).Z,width:"297",height:"275"})),(0,a.kt)("p",null,"Step 2:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(44990).Z,width:"628",height:"161"})),(0,a.kt)("p",null,"Step 3:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9795).Z,width:"1006",height:"660"})),(0,a.kt)("p",null,"A note on the difference between the two jsonschema repositories: the production jsonschemas are bound to the production snowplow pipeline and are what validate events that land in the final clean data set in the data warehouse or datalake.\xa0"),(0,a.kt)("p",null,"The development jsonschemas are bound to a QA tool called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-mini"},"snowplow mini")," that can be used for the real time validation of events. This tool was created to enable jsonschemas to be QA\u2019ed prior to pushing tracking live to production, events that are validated against these development jsonschemas do not land in a data warehouse.\xa0"),(0,a.kt)("p",null,"In the example below I have added two example repositories for the Snowplow AWS engineering development environment, one for a production jsonschema registry and one for a development jsonschema registry.\xa0"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(22024).Z,width:"399",height:"597"})),(0,a.kt)("p",null,"Now that the extension can query your private iglu repositories the extension will be able to tell you in real time whether your events and entities are failing validation from entirely within the browser. An example of an event passing validation is shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(68106).Z,width:"1172",height:"362"})),(0,a.kt)("p",null,"An example of an event failing validation is shown below, the reason for this event failing validation is due to \u201cexample","_","field","_","1\u201d being a required field meaning it cannot be null."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(24541).Z,width:"1176",height:"361"})),(0,a.kt)("p",null,"This is useful, but when it comes to the debugging of failed events and the investigation of exactly WHY a particular event has failed validation there are additional tools that should be considered."),(0,a.kt)("p",null,"For events that failed validation against a schema in the dev registry Snowplow mini is a dedicated tool that has been built to provide real time, actionable feedback on why events are failing validation. For events that failed validation in production see our guides on ",(0,a.kt)("a",{parentName:"p",href:"/docs/managing-data-quality/failed-events/failed-events-in-athena-and-bigquery/"},"how to query failed events")," from their respective destinations. These failed events have a ",(0,a.kt)("a",{parentName:"p",href:"/docs/managing-data-quality/failed-events/understanding-failed-events/"},"specific format")," that includes an array of helpful, detailed error messages that explain the exact reasons why the event failed validation."))}d.isMDXComponent=!0},9795:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Screenshot-2021-06-09-at-11.04.00-eab5d95305a7149f3b9c3d6d007ef28d.png"},44990:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Screenshot-2021-06-09-at-11.06.17-e9d9720c540a318f3cc2d6381ddc9a29.png"},68106:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/event-passing-validation-83d5696e0fc78ef3365f0dd166d4d7bd.png"},24541:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/event-validation-failed-a3a6348d71e7f3a5578db19ccf803548.png"},81225:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/snowplow-bdp-ui-manage-account-c189a788bb0b482a201aa83aa26fa23d.png"},22024:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/snowplow-inspector-2-59f2ddd86ce9936c346a0fa2a049a067.png"},10162:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/snowplow-inspector-152d1734e090151b7fefcc7f6b521e2e.png"},72592:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/unrecognized-event-baf07815a75f0af65c5aae5c2e02c736.png"},80596:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/using-poplin-chrome-extension-ba12f1b8370842c4e358626911e92b9a.png"}}]);