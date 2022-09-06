"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[24833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Unbounce",date:"2020-02-26",sidebar_position:130},i=void 0,l={unversionedId:"collecting-data/collecting-data-from-third-parties/unbounce/index",id:"collecting-data/collecting-data-from-third-parties/unbounce/index",title:"Unbounce",description:"Overview",source:"@site/docs/collecting-data/collecting-data-from-third-parties/unbounce/index.md",sourceDirName:"collecting-data/collecting-data-from-third-parties/unbounce",slug:"/collecting-data/collecting-data-from-third-parties/unbounce/",permalink:"/docs/collecting-data/collecting-data-from-third-parties/unbounce/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-data-from-third-parties/unbounce/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:130,frontMatter:{title:"Unbounce",date:"2020-02-26",sidebar_position:130},sidebar:"defaultSidebar",previous:{title:"StatusGator",permalink:"/docs/collecting-data/collecting-data-from-third-parties/statusgator/"},next:{title:"Vero",permalink:"/docs/collecting-data/collecting-data-from-third-parties/vero/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This webhook integration lets you receive\xa0",(0,r.kt)("a",{parentName:"p",href:"https://unbounce.com/"},"Unbounce"),"\xa0form submit events."),(0,r.kt)("h3",{id:"compatibility"},"Compatibility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/r97-knossos"},"R97 Knossos"),"+"," (",(0,r.kt)("inlineCode",{parentName:"li"},"POST"),"-","capable collectors only)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://documentation.unbounce.com/hc/en-us/articles/203510044-Using-a-Webhook"},"Unbounce webhook API"))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,'First login to Unbounce and click on the title the landing page for which you want to configure the webhook (in this example "Wayfaring"):'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(10889).Z,width:"1082",height:"796"})),(0,r.kt)("p",null,"In the page configuration click\xa0",(0,r.kt)("strong",{parentName:"p"},"Webhooks"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(95513).Z,width:"1227",height:"955"})),(0,r.kt)("p",null,"..and then click\xa0",(0,r.kt)("strong",{parentName:"p"},"Add Webhook"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(60724).Z,width:"972",height:"728"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the this field you will need to provide the URL to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by unbounce:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.unbounce/v1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then select the\xa0",(0,r.kt)("strong",{parentName:"li"},"Send all transcripts automatically"),"\xa0and/or\xa0",(0,r.kt)("strong",{parentName:"li"},"Send offline messages"),"\xa0according to your needs (2). As of the time of writing (15.12.2017) no other events are directly supported so\xa0",(0,r.kt)("strong",{parentName:"li"},"do not tick Send all events"),".")),(0,r.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.unbounce/v1?p=<platform code>\n")),(0,r.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,r.kt)("p",null,"Once the URL has been configured click\xa0",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(16483).Z,width:"837",height:"608"})),(0,r.kt)("p",null,"If you decide to\xa0",(0,r.kt)("strong",{parentName:"p"},"Configure Field Mapping"),"\xa0in the webhook dialog, configure only fields in\xa0",(0,r.kt)("strong",{parentName:"p"},"Unbounce Form Info"),"\xa0(1), not in\xa0",(0,r.kt)("strong",{parentName:"p"},"Unbounce Page Info"),"\xa0(2):"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(58107).Z,width:"778",height:"515"})),(0,r.kt)("p",null,"Once you click the\xa0",(0,r.kt)("strong",{parentName:"p"},"Done"),"\xa0button you are ready to receive events about your client chat interactions from Unbounce."))}u.isMDXComponent=!0},10889:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/unbounce-1-f5782b01ed1af2135dbf8b9a79838c8b.png"},95513:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/unbounce-2-36e8252c4bd11903f77800593659d48c.png"},60724:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/unbounce-3-43b32b8ab5547010331be1698215793b.png"},16483:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/unbounce-4-6acedcd3af62c47e3204856d14e8961c.png"},58107:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/unbounce-5-c7e4ae46e14d99c970ceae628a1a8b39.png"}}]);