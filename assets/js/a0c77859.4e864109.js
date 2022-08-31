"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[217],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),g=i,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||r;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={title:"Setting up data quality alerts",date:"2021-01-14",sidebar_position:2500},l=void 0,o={unversionedId:"managing-data-quality/failed-events/setting-up-data-quality-alerts/index",id:"managing-data-quality/failed-events/setting-up-data-quality-alerts/index",title:"Setting up data quality alerts",description:"Overview",source:"@site/docs/managing-data-quality/failed-events/setting-up-data-quality-alerts/index.md",sourceDirName:"managing-data-quality/failed-events/setting-up-data-quality-alerts",slug:"/managing-data-quality/failed-events/setting-up-data-quality-alerts/",permalink:"/docs/managing-data-quality/failed-events/setting-up-data-quality-alerts/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/failed-events/setting-up-data-quality-alerts/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:2500,frontMatter:{title:"Setting up data quality alerts",date:"2021-01-14",sidebar_position:2500},sidebar:"tutorialSidebar",previous:{title:"Monitoring failed events in the Console",permalink:"/docs/managing-data-quality/failed-events/failed-events-in-the-ui/"},next:{title:"Accessing failed event aggregates via the API",permalink:"/docs/managing-data-quality/failed-events/accessing-failed-event-aggregates-via-the-api/"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Subscribing to alerts",id:"subscribing-to-alerts",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Snowplow can send two types of alerts to help you monitor Failed Events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New failed event:")," receive an alert within 10 minutes of a new type of event failure being detected on your pipeline."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Failed event digest"),": receive a twice-daily digest of all Failed Event activity in the previous 12-hour period.")),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"To receive alerts you must have the Failed Events monitoring feature switched on in the Snowplow BDP console."),(0,i.kt)("h2",{id:"subscribing-to-alerts"},"Subscribing to alerts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to Snowplow BDP console"),(0,i.kt)("li",{parentName:"ul"},"Locate the pipeline you wish to set up alerts for in the left-hand navigation"),(0,i.kt)("li",{parentName:"ul"},"Find and select ",(0,i.kt)("inlineCode",{parentName:"li"},"Pipeline configuration")),(0,i.kt)("li",{parentName:"ul"},"Scroll down to ",(0,i.kt)("inlineCode",{parentName:"li"},"Pipeline alerts")," or use the page navigation to jump to it")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(70891).Z,width:"1083",height:"374"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Manage")," for the alert you wish to subscribe to"),(0,i.kt)("li",{parentName:"ul"},"Add one or more email addresses by typing them into the input and clicking ",(0,i.kt)("inlineCode",{parentName:"li"},"Add recipient")),(0,i.kt)("li",{parentName:"ul"},"Once you have added all recipients, click ",(0,i.kt)("inlineCode",{parentName:"li"},"Save Changes"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(26745).Z,width:"1333",height:"842"})))}p.isMDXComponent=!0},26745:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-1-c126cf31abb6c600ad83169dafcaf38c.png"},70891:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-3c256d464f0d3d6437d8aba978ef0f10.png"}}]);