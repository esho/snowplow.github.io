"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[23109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),v=o,y=d["".concat(l,".").concat(v)]||d[v]||u[v]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Event Recovery for BDP customers",date:"2021-10-13",sidebar_position:20},i=void 0,s={unversionedId:"managing-data-quality/event-recovery-for-bdp-users/index",id:"managing-data-quality/event-recovery-for-bdp-users/index",title:"Event Recovery for BDP customers",description:"What is event recovery?",source:"@site/docs/managing-data-quality/event-recovery-for-bdp-users/index.md",sourceDirName:"managing-data-quality/event-recovery-for-bdp-users",slug:"/managing-data-quality/event-recovery-for-bdp-users/",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/event-recovery-for-bdp-users/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:20,frontMatter:{title:"Event Recovery for BDP customers",date:"2021-10-13",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Querying failed events in Athena and BigQuery",permalink:"/docs/managing-data-quality/failed-events/failed-events-in-athena-and-bigquery/"},next:{title:"Using the Recovery Builder to design your recovery",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/"}},l={},c=[{value:"What is event recovery?",id:"what-is-event-recovery",level:2},{value:"How does event recovery work?",id:"how-does-event-recovery-work",level:2},{value:"Designing the recovery",id:"designing-the-recovery",level:3},{value:"Running the recovery",id:"running-the-recovery",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-event-recovery"},"What is event recovery?"),(0,o.kt)("p",null,"Events can fail to process for many reasons (",(0,o.kt)("a",{parentName:"p",href:"/docs/managing-data-quality/failed-events/"},"see more in Failed Events"),"), when this happens the raw data for these events is stored in file storage on your cloud so they can be analysed, diagnosed and recovered."),(0,o.kt)("p",null,"Event recovery ensures you can recover these failed events, meaning you maintain a complete and accurate data set, even when your tracking or pipeline encounters problems."),(0,o.kt)("h2",{id:"how-does-event-recovery-work"},"How does event recovery work?"),(0,o.kt)("p",null,"At it's most simple, the recovery process simply runs a script over a set of raw data to 'fix' the issues and then attempts to re-process these events."),(0,o.kt)("p",null,"There are two phases to a recovery:"),(0,o.kt)("h3",{id:"designing-the-recovery"},"Designing the recovery"),(0,o.kt)("p",null,"Designing the script that will run and perform the fixes. This stage of recovery can be designed using the Recovery Builder."),(0,o.kt)("p",null,"A recovery script has two key parts:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recovery steps"),(0,o.kt)("br",{parentName:"p"}),"\n","A failed event is recovered by applying one or more steps to the payload to fix the issue that is causing a failure. These are typically actions to Replace a value, Remove a value, or Cast a value to a new type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recovery filters"),(0,o.kt)("br",{parentName:"p"}),"\n","Filters determine whether your recovery steps will be applied to a specific failed event, events will only be processed if they validate successfully against all filters."),(0,o.kt)("p",null,"The recovery process crudely process all Failed Events within a given time period. Within this period you may have had multiple different events failing, for multiple reasons reasons."),(0,o.kt)("p",null,"You want your recovery steps to apply only to events that need these recovery steps applying, this helps to avoid duplicates or failed recoveries."),(0,o.kt)("h3",{id:"running-the-recovery"},"Running the recovery"),(0,o.kt)("p",null,"Running the script over a batch of failed events between two dates. This fixes the event payloads, per the recovery script, and then reprocesses them through your pipeline."),(0,o.kt)("p",null,"This stage of recovery is currently a process run by the Snowplow Support team on customers behalf."))}u.isMDXComponent=!0}}]);