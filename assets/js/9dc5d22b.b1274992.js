"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[68743],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(a),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,l(l({ref:e},s),{},{components:a})):n.createElement(h,l({ref:e},s))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48165:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"HubSpot",date:"2020-08-10",sidebar_position:20},l=void 0,i={unversionedId:"collecting-data/collecting-data-from-third-parties/hubspot/index",id:"collecting-data/collecting-data-from-third-parties/hubspot/index",title:"HubSpot",description:"Overview",source:"@site/docs/collecting-data/collecting-data-from-third-parties/hubspot/index.md",sourceDirName:"collecting-data/collecting-data-from-third-parties/hubspot",slug:"/collecting-data/collecting-data-from-third-parties/hubspot/",permalink:"/docs/collecting-data/collecting-data-from-third-parties/hubspot/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-data-from-third-parties/hubspot/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:20,frontMatter:{title:"HubSpot",date:"2020-08-10",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"CallRail",permalink:"/docs/collecting-data/collecting-data-from-third-parties/callrail/"},next:{title:"Iglu Webhook",permalink:"/docs/collecting-data/collecting-data-from-third-parties/iglu-webhook/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Event source",id:"event-source",level:3},{value:"Snowplow adapter",id:"snowplow-adapter",level:3},{value:"Events",id:"events",level:2},{value:"Setup",id:"setup",level:2}],s={toc:c};function m(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This webhook adapter lets you track events logged by ",(0,o.kt)("a",{parentName:"p",href:"https://www.hubspot.com/"},"HubSpot"),"."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("h3",{id:"event-source"},"Event source"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/methods/webhooks/webhooks-overview"},"HubSpot webhook API")," sends events as a JSON body in a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request."),(0,o.kt)("h3",{id:"snowplow-adapter"},"Snowplow adapter"),(0,o.kt)("p",null,"Implementation: HubSpotAdapter"),(0,o.kt)("p",null,"HubSpot webhook support was implemented in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/releases/tag/r113-filitosa"},"Snowplow R113"),"."),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"All resources for this webhook's events:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Event")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"JSON Schema")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Company change"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.hubspot/company_change/jsonschema/1-0-0"},"company","_","change 1-0-0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Company creation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.hubspot/company_creation/jsonschema/1-0-0"},"company","_","creation 1-0-0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Company deletion"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.hubspot/company_deletion/jsonschema/1-0-0"},"company","_","deletion 1-0-0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Contact change"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.hubspot/contact_change/jsonschema/1-0-0"},"contact","_","change 1-0-0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Contact creation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.hubspot/contact_creation/jsonschema/1-0-0"},"contact","_","creation 1-0-0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Contact deletion"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.hubspot/contact_deletion/jsonschema/1-0-0"},"contact","_","deletion 1-0-0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Deal change"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.hubspot/deal_change/jsonschema/1-0-0"},"deal","_","change 1-0-0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Deal creation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.hubspot/deal_creation/jsonschema/1-0-0"},"deal","_","creation 1-0-0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Deal deletion"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.hubspot/deal_deletion/jsonschema/1-0-0"},"deal","_","deletion 1-0-0"))))),(0,o.kt)("p",null,"Iglu HubSpot definitions"),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The webhook address can be found here on ",(0,o.kt)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/methods/webhooks/webhooks-overview"},"official HubSpot documentation"),"."),(0,o.kt)("p",null,"The endpoint should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.hubspot/v1\n")))}m.isMDXComponent=!0}}]);