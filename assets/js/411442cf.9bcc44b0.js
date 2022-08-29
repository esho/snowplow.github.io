"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[80904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Migrating from 0.1.0",date:"2020-04-15",sidebar_position:60},o=void 0,l={unversionedId:"managing-data-quality/snowplow-event-recovery/migrating-from-0-1-0/index",id:"managing-data-quality/snowplow-event-recovery/migrating-from-0-1-0/index",title:"Migrating from 0.1.0",description:"From a user point-of-view changes in recovery process introduced in 0.2.0 boil down to:",source:"@site/docs/managing-data-quality/snowplow-event-recovery/migrating-from-0-1-0/index.md",sourceDirName:"managing-data-quality/snowplow-event-recovery/migrating-from-0-1-0",slug:"/managing-data-quality/snowplow-event-recovery/migrating-from-0-1-0/",permalink:"/docs/managing-data-quality/snowplow-event-recovery/migrating-from-0-1-0/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/snowplow-event-recovery/migrating-from-0-1-0/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:60,frontMatter:{title:"Migrating from 0.1.0",date:"2020-04-15",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/managing-data-quality/snowplow-event-recovery/troubleshooting/"},next:{title:"Hints & workflows",permalink:"/docs/managing-data-quality/snowplow-event-recovery/0-2-from-the-trenches-working-with-recovery/"}},s={},p=[{value:"Data Sinks",id:"data-sinks",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Examples",id:"examples",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"From a user point-of-view changes in recovery process introduced in 0.2.0 boil down to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"data sinks"),(0,a.kt)("li",{parentName:"ul"},"configuration")),(0,a.kt)("h3",{id:"data-sinks"},"Data Sinks"),(0,a.kt)("p",null,"Since version 0.2 data is delivered to PubSub (GCP) and Kinesis (AWS) and only failed (ones which did not get recovery flows successfully applied) and unrecoverable (ones which are considered faulty beyond fixing) are stored in GCS (GCP) and S3 (AWS) buckets. These require additional command-line output parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"--failedOutput")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--unrecoverableOutput")," pointing to bucket paths."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"As described in Concepts, configuration is significantly different and instead of introducing specific set of custom JSON configuration objects relies on more generic approach built upon JSON Patch. In order to migrate existing configurations to work with 0.2.0+ versions of recovery they should be migrates as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"0.1.x"),(0,a.kt)("th",{parentName:"tr",align:null},"0.2.x"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PassThrough"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"empty steps mean pass-through")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ReplaceInQueryString"),(0,a.kt)("td",{parentName:"tr",align:null},"Replace step"),(0,a.kt)("td",{parentName:"tr",align:null},"query string is deconstructed into individual parameters or querystring fields depending on bad row type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RemoveFromQueryString"),(0,a.kt)("td",{parentName:"tr",align:null},"Replace step"),(0,a.kt)("td",{parentName:"tr",align:null},"query string is deconstructed into individual parameters or querystring fields depending on bad row type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ReplaceInBase64FieldInQueryString"),(0,a.kt)("td",{parentName:"tr",align:null},"Replace step"),(0,a.kt)("td",{parentName:"tr",align:null},"Base64-encoded and inline JSON fields are treated just as any other field. Structure within base64-encoded strings can be accessed by JsonPath.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ReplaceInBody"),(0,a.kt)("td",{parentName:"tr",align:null},"Replace step"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RemoveFromBody"),(0,a.kt)("td",{parentName:"tr",align:null},"Remove step"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ReplaceInBase64FieldInBody"),(0,a.kt)("td",{parentName:"tr",align:null},"Replace step"),(0,a.kt)("td",{parentName:"tr",align:null},"Base64-encoded and inline JSON fields are treated just as any other field. Structure within base64-encoded strings can be accessed by JsonPath.")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"0.1.x"),(0,a.kt)("th",{parentName:"tr",align:null},'{"name": "ReplaceInBase64FieldInBody","error": "instance type (object) does not match any allowed primitive type (allowed: ','[\\"null\\",\\"string\\"]',')\\n level: \\"error\\"\\n schema: {\\"loadingURI\\":\\"#\\",\\"pointer\\":\\"/properties/device/properties/geo/properties/country_iso2\\"}","base64Field": "ue_px","toReplace": "\\"country_iso2\\":',"{","(",(0,a.kt)("sup",{parentName:"th",id:"fnref-}"},(0,a.kt)("a",{parentName:"sup",href:"#fn-}",className:"footnote-ref"},"}")),"+)","}",'","replacement": "\\"country_iso2\\":\\"bad_country_iso2.Str\\""}'))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.2.x"),(0,a.kt)("td",{parentName:"tr",align:null},'{"op": "Replace","path": "parameters.cx.country_iso2","match": "(?U)^.*$","value": "bad_country_iso2.Str"}')))))}u.isMDXComponent=!0}}]);