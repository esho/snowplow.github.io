"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[25935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const l={title:"Usage",date:"2020-10-12",sidebar_position:200},i=void 0,r={unversionedId:"collecting-data/collecting-from-own-applications/snowplow-tracking-cli/usage/index",id:"collecting-data/collecting-from-own-applications/snowplow-tracking-cli/usage/index",title:"Usage",description:"The command line interface is as follows:",source:"@site/docs/collecting-data/collecting-from-own-applications/snowplow-tracking-cli/usage/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/snowplow-tracking-cli/usage",slug:"/collecting-data/collecting-from-own-applications/snowplow-tracking-cli/usage/",permalink:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracking-cli/usage/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/snowplow-tracking-cli/usage/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:200,frontMatter:{title:"Usage",date:"2020-10-12",sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracking-cli/installation/"},next:{title:"Additional Information",permalink:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracking-cli/additional-information/"}},c={},p=[{value:"Examples",id:"examples",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The command line interface is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"snowplowtrk --collector={{COLLECTOR_DOMAIN}} --appid={{APP_ID}} --method=[POST|GET] --sdjson={{SELF_DESC_JSON}}\n")),(0,a.kt)("p",null,"or:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"snowplowtrk --collector={{COLLECTOR_DOMAIN}} --appid={{APP_ID}} --method=[POST|GET] --schema={{SCHEMA_URI}} --json={{JSON}}\n")),(0,a.kt)("p",null,"where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--collector")," is the domain for your Snowplow collector, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"snowplow-collector.acme.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--appid")," is optional (not sent if not set)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--method")," is optional. It defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--protocol")," is optional. It defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"https")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--sdjson")," is a self-describing JSON of the standard form ",(0,a.kt)("inlineCode",{parentName:"li"},'{ "schema": "iglu:...", "data": { ... } }')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--schema")," is a schema URI, most likely of the form ",(0,a.kt)("inlineCode",{parentName:"li"},"iglu:...")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--json")," is a (non-self-describing) JSON, of the form ",(0,a.kt)("inlineCode",{parentName:"li"},"{ ... }")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--ipaddress")," is optional. It defaults to an empty string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--contexts")," is optional. It defaults to an empty JSON array ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"))),(0,a.kt)("p",null,"The idea here is that you can either send in a ",(0,a.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/"},(0,a.kt)("strong",{parentName:"a"},"self-describing JSON")),", or pass in the constituent parts (i.e. a regular JSON plus a schema URI) and the Snowplow Tracking CLI will construct the final self-describing JSON for you."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'snowplowtrk --collector snowplow-collector.acme.com --appid myappid --method POST --schema iglu:com.snowplowanalytics.snowplow/event/jsonschema/1-0-0 --json "{\\"hello\\":\\"world\\"}"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'snowplowtrk --collector snowplow-collector.acme.com --appid myappid --method POST --sdjson "{\\"schema\\":\\"iglu:com.snowplowanalytics.snowplow/event/jsonschema/1-0-0\\", \\"data\\":{\\"hello\\":\\"world\\"}}"\n')))}d.isMDXComponent=!0}}]);