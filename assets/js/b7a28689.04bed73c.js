"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[3240],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),s=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),g=s(a),d=n,u=g["".concat(c,".").concat(d)]||g[d]||m[d]||o;return a?r.createElement(u,i(i({ref:e},p),{},{components:a})):r.createElement(u,i({ref:e},p))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},20248:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Settings Guide",date:"2021-11-18",sidebar_position:100},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v3/settings-variable-guide/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v3/settings-variable-guide/index",title:"Settings Guide",description:"The Snowplow v3 Settings custom variable template is meant to be used with the Snowplow v3 tag template.",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v3/settings-variable-guide/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v3/settings-variable-guide",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v3/settings-variable-guide/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v3/settings-variable-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v3/settings-variable-guide/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:100,frontMatter:{title:"Settings Guide",date:"2021-11-18",sidebar_position:100},sidebar:"defaultSidebar",previous:{title:"Template for JavaScript Tracker v3",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v3/"},next:{title:"Tag Guide",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/google-tag-manager-custom-template/template-for-javascript-tracker-v3/tag-template-guide/"}},c={},s=[{value:"Install the template",id:"install-the-template",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Tracker Name",id:"tracker-name",level:3},{value:"Collector Endpoint Hostname",id:"collector-endpoint-hostname",level:3},{value:"Acknowledgements",id:"acknowledgements",level:3}],p={toc:s};function m(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Snowplow v3 Settings")," custom variable template is meant to be used with the Snowplow v3 tag template."),(0,n.kt)("p",null,"With this template, you can compile a ",(0,n.kt)("strong",{parentName:"p"},"tracker configuration object"),", which you can then load into your Snowplow tags to avoid the need to manually enter the same tracker settings across all your tags."),(0,n.kt)("h2",{id:"install-the-template"},"Install the template"),(0,n.kt)("p",null,"To ",(0,n.kt)("strong",{parentName:"p"},"install the template"),", browse to ",(0,n.kt)("strong",{parentName:"p"},"Templates")," in the Google Tag Manager user interface."),(0,n.kt)("p",null,"Under ",(0,n.kt)("strong",{parentName:"p"},"Variable Templates"),", click ",(0,n.kt)("strong",{parentName:"p"},"Search Gallery"),", and type ",(0,n.kt)("inlineCode",{parentName:"p"},"Snowplow v3")," into the gallery overlay search bar."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"search Snowplow v3 Settings in GTM gallery",src:a(95711).Z,width:"678",height:"175"})),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"Snowplow v3 Settings")," template name, and then click ",(0,n.kt)("strong",{parentName:"p"},"Add to Workspace")," in the next screen. Review the permissions and click ",(0,n.kt)("strong",{parentName:"p"},"Add")," to finalize the import."),(0,n.kt)("p",null,"After importing the template, you can follow the normal process of creating a ",(0,n.kt)("strong",{parentName:"p"},"new variable")," in Google Tag Manager, and the ",(0,n.kt)("strong",{parentName:"p"},"Snowplow v3 Settings")," template will be listed among the ",(0,n.kt)("strong",{parentName:"p"},"Custom")," variable types you can choose from."),(0,n.kt)("h2",{id:"instructions"},"Instructions"),(0,n.kt)("p",null,"The fields in the template provide a UI for setting the tracker configuration parameters. You are thus encouraged to follow ",(0,n.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/initialization-options/"},"this link")," to understand what each individual field does."),(0,n.kt)("h3",{id:"tracker-name"},"Tracker Name"),(0,n.kt)("p",null,"It is important to set the ",(0,n.kt)("strong",{parentName:"p"},"tracker name"),". The reason you might have more than one tracker name generated on the site is if you have different configuration objects or tracking endpoints to which you want to send commands."),(0,n.kt)("p",null,"When the tag runs, it first checks if a tag with this name has already been initialized. If it has, it then proceeds to send the command to this tracker name. If a tracker with this name has ",(0,n.kt)("em",{parentName:"p"},"not")," been initialized, a new tracker is initialized with the tracker configuration from this settings variable."),(0,n.kt)("p",null,"This means that a tracker configuration is applied ",(0,n.kt)("strong",{parentName:"p"},"only once")," to the tracker. Thus if you have more than one tag running on the site, each with the same tracker name but different tracker configurations, only the configuration of the tag that fires ",(0,n.kt)("em",{parentName:"p"},"first")," will be applied to the tracker."),(0,n.kt)("h3",{id:"collector-endpoint-hostname"},"Collector Endpoint Hostname"),(0,n.kt)("p",null,"This needs to be set to the hostname/domain (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"sp.domain.com"),") on which you\u2019ve configured your Snowplow collector. Snowplow BDP customers can find this in their ",(0,n.kt)("a",{parentName:"p",href:"/docs/using-the-snowplow-console/accessing-collector-configuration/"},"Pipeline Configuration settings"),"."),(0,n.kt)("h3",{id:"acknowledgements"},"Acknowledgements"),(0,n.kt)("p",null,"Thanks to ",(0,n.kt)("a",{parentName:"p",href:"https://www.simoahava.com/"},"Simo Ahava")," for building the intial release of this template."))}m.isMDXComponent=!0},95711:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/search_snowplow_v3_settings-45c9d7f96e8fb0b7c37e5815d576db56.png"}}]);