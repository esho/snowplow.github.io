"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[86034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),y=i,f=p["".concat(s,".").concat(y)]||p[y]||c[y]||n;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<n;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=r(87462),i=(r(67294),r(3905));const n={title:"Adding filters to your recovery",date:"2021-10-13",sidebar_position:3e3},a=void 0,l={unversionedId:"managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/adding-filters-to-your-recovery/index",id:"managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/adding-filters-to-your-recovery/index",title:"Adding filters to your recovery",description:"Filters determine whether your recovery steps will be applied to a specific failed event, events will only be processed if they validate successfully against all filters.",source:"@site/docs/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/adding-filters-to-your-recovery/index.md",sourceDirName:"managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/adding-filters-to-your-recovery",slug:"/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/adding-filters-to-your-recovery/",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/adding-filters-to-your-recovery/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/adding-filters-to-your-recovery/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:3e3,frontMatter:{title:"Adding filters to your recovery",date:"2021-10-13",sidebar_position:3e3},sidebar:"tutorialSidebar",previous:{title:"Adding recovery steps",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/adding-recovery-steps/"},next:{title:"Manual Event Recovery for Snowplow BDP",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/"}},s={},d=[{value:"Adding a filter",id:"adding-a-filter",level:3},{value:"Testing your filters",id:"testing-your-filters",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filters determine whether your recovery steps will be applied to a specific failed event, events will only be processed if they validate successfully against all filters."),(0,i.kt)("p",null,"The recovery process crudely process all Failed Events within a given time period. Within this period you may have had multiple different events failing, for multiple reasons reasons."),(0,i.kt)("p",null,"You want your recovery steps to apply only to events that need these recovery steps applying, this helps to avoid duplicates or failed recoveries."),(0,i.kt)("p",null,"As examples you could target one or more of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Certain Schema e.g. only where schema name = add","_","to","_","cart","_","1","_","0","_","0"),(0,i.kt)("li",{parentName:"ul"},"Certain keyword (For example, app","_","id, or URL) e.g. only where app","_","id = website"),(0,i.kt)("li",{parentName:"ul"},"Certain value for a specific field, etc e.g. only where currency < 3")),(0,i.kt)("p",null,"If there is a match the event will be processed (it will be filtered in), if there is not a match it will not be process (it will be filtered out)."),(0,i.kt)("h3",{id:"adding-a-filter"},"Adding a filter"),(0,i.kt)("p",null,"To add a filter step, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add a filter")," button. This will allow you to build a filter."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First select the attribute you wish to target with this filter. As you type attributes from your event will auto-complete."),(0,i.kt)("li",{parentName:"ol"},"Select the test you want to run"),(0,i.kt)("li",{parentName:"ol"},"Depending on the test a number of other options may appear, fill these out as required. Once complete a notification will let you know if your example failed event matches against these criteria."),(0,i.kt)("li",{parentName:"ol"},"Click 'Add this filter'")),(0,i.kt)("p",null,"Once added the step will appear in your list of filters."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(45430).Z,width:"1416",height:"852"})),(0,i.kt)("h3",{id:"testing-your-filters"},"Testing your filters"),(0,i.kt)("p",null,"As you build up a set of filters they will automatically be run against your example failed event and you will be shown whether your event passes these filters (would be processed) or fails to pass them (would not be processed)."),(0,i.kt)("p",null,"You can also test the filters against a batch of events. To do this, simply upload a batch file of events and each event in turn will be tested against your filters. You'll then be able to browse to sense check which were filtered out."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(96555).Z,width:"1416",height:"852"})),(0,i.kt)("p",null,"In this example two of the events in our batch did not pass our filters"))}c.isMDXComponent=!0},96555:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Screen-Shot-2021-10-13-at-16.14.27-e58d72cc7cf57250da02e876e0ddd897.jpg"},45430:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Screen-Shot-2021-10-13-at-16.16.42-774c96011fd954609dba06ffff5d0887.jpg"}}]);