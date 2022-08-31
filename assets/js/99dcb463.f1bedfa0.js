"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[91145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Concepts",date:"2020-04-15",sidebar_position:0},r=void 0,l={unversionedId:"managing-data-quality/snowplow-event-recovery/0-2-concepts/index",id:"managing-data-quality/snowplow-event-recovery/0-2-concepts/index",title:"Concepts",description:"There is a wide range of use cases at which the recovery might come in handy. Configuration mechanism allows for flexibility taking into account the most common use cases.",source:"@site/docs/managing-data-quality/snowplow-event-recovery/0-2-concepts/index.md",sourceDirName:"managing-data-quality/snowplow-event-recovery/0-2-concepts",slug:"/managing-data-quality/snowplow-event-recovery/0-2-concepts/",permalink:"/docs/managing-data-quality/snowplow-event-recovery/0-2-concepts/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/snowplow-event-recovery/0-2-concepts/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:0,frontMatter:{title:"Concepts",date:"2020-04-15",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Event Recovery for Open Source",permalink:"/docs/managing-data-quality/snowplow-event-recovery/"},next:{title:"Configuration Examples",permalink:"/docs/managing-data-quality/snowplow-event-recovery/0-2-concepts/configuration-examples/"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Steps",id:"steps",level:3},{value:"Conditions",id:"conditions",level:3},{value:"Flows",id:"flows",level:3},{value:"I/O",id:"io",level:2},{value:"AWS",id:"aws",level:4},{value:"GCP",id:"gcp",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There is a wide range of use cases at which the recovery might come in handy. Configuration mechanism allows for flexibility taking into account the most common use cases."),(0,o.kt)("p",null,"With recovery it is possible to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"replace values"),(0,o.kt)("li",{parentName:"ul"},"remove values"),(0,o.kt)("li",{parentName:"ul"},"cast JSON types")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"With introduction of multiple bad row types, recovery process has to adjust its runtime to operate only on a subset of bad rows or to be able to perform different action on different bad row types. Therefore to allow for the flexibility we introduce reusable configuration components that we map onto specific bad row types:"),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("p",null,"Steps are individual modifications applied to Bad Row payloads as atomic parts of recovery flows (scenarios). The steps operate on specific field values and can replace or nullify/remove values. Other modifications could possibly be implemented in the future. There is prior art started at ",(0,o.kt)("a",{parentName:"p",href:"http://jsonpatch.com/#operations"},"Json Patch")," that provides an RFC for patching operations used with HTTP. These operations are however limited to structural changes not value changes and it assumes no deep modifications. It was suggested whether we could extend the specification to also operate internally on field values. The assumption is that we add additional, optional field - ",(0,o.kt)("inlineCode",{parentName:"p"},"match")," that, when available as a part of step description, will use the field's value as a regex and replace its matches with ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,o.kt)("p",null,"Currently we do anticipate following operations that can be expressed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"replace value contents by matching an expression (can be used to replace complete values)"),(0,o.kt)("li",{parentName:"ul"},"remove value contents by matching an expression"),(0,o.kt)("li",{parentName:"ul"},"cast value from one type to another (ie. ",(0,o.kt)("inlineCode",{parentName:"li"},"string -> int"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"int -> string"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"a -> [a]"),")")),(0,o.kt)("p",null,"It is important to note that recovery operates on bad row payloads and thus steps' path scopes its entry point as bad row's ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," field, ie. to reach a ",(0,o.kt)("inlineCode",{parentName:"p"},"vendor")," field that's located within ",(0,o.kt)("inlineCode",{parentName:"p"},"raw")," part of payload, the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"raw.vendor"),"."),(0,o.kt)("p",null,"Steps are constructed with following JSON object format consisting of four individual parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"op")," - transformation operation to perform: Replace, Remove, Cast"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," - JSON Path to object, the path can contain specific field names (ie. ",(0,o.kt)("inlineCode",{parentName:"li"},"raw"),") , array ids (ie. ",(0,o.kt)("inlineCode",{parentName:"li"},"[1]"),") or filters (by regex: ",(0,o.kt)("inlineCode",{parentName:"li"},"$.raw.parameters.cx.data.[?(@.data.navigationStart=~([0-9]+))].data.domComplete"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"match")," - an expression applied when replacing field's values with new value"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," - a new value to be set")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// Replace\n{\n  "op": "Replace",\n  "path": "$.raw.parameters.aid",\n  "match": "(?U)^.*$",\n  "value": "https://console.snplow.com/"\n}\n\n// Remove\n{\n  "op": "Remove",\n  "path": "$.raw.parameters.aid",\n  "match": "(?U)^.*$"\n}\n\n// Cast\n{\n  "op": "Cast",\n  "path": "\n$.raw.parameters.cx.data.[?(@.data.navigationStart=~([0-9]+))].data.domComplete",\n  "from": "Numeric",\n  "to": "Boolean"\n}\n')),(0,o.kt)("h3",{id:"conditions"},"Conditions"),(0,o.kt)("p",null,"Conditions are boolean expressions that operate on ",(0,o.kt)("inlineCode",{parentName:"p"},"BadRow")," fields. The conditions are used to select proper recovery flow depending on ",(0,o.kt)("inlineCode",{parentName:"p"},"BadRow")," structure or value. For structure finding appropriate path is solved by many specs of JSON query ie. Json Path. The values can be matched using regexes using a flexible syntax that is well understood and widely used. Condition therefore is a product of path and value expressions. To keep it in line with ",(0,o.kt)("a",{parentName:"p",href:"http://jsonpatch.com/#operations"},"JSON Patch"),", following description is proposed: It is important to note that conditions can be applied to arbitrary bad row fields and thus conditions' path scopes its entry point as bad row's \"root\"."),(0,o.kt)("p",null,"Much like steps, conditions are constructed with following JSON object format consisting of four individual parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"op")," - transformation operation to perform: Replace, Remove, Cast"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," - JSON Path to object, the path can contain specific field names (ie. ",(0,o.kt)("inlineCode",{parentName:"li"},"raw"),") , array ids (ie. ",(0,o.kt)("inlineCode",{parentName:"li"},"[1]"),") or filters (by regex: ",(0,o.kt)("inlineCode",{parentName:"li"},"[?(@.schema=~iglu://\\\\.*)]"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," - a value matcher to match against: match a regular expression, compare directly (object equality), check size for equality, less or greater than")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// Compare values\n{\n  "op": "Test",\n  "path": "$.processor.artifact",\n  "value": {\n    "value": "beam-enrich"\n  }\n}\n\n// Match against regex\n{\n  "op": "Test",\n  "path": "$.payload.raw.vendor",\n  "value": {\n    "regex": "com.snowplow\\\\.*"\n  }\n}\n\n// Compare sizes\n{\n  "op": "Test",\n  "path": "$.processor.artifact",\n  "value": {\n    "size": {\n      "eq": 11\n    }\n  }\n}\n{\n  "op": "Test",\n  "path": "$.processor.artifact",\n  "value": {\n    "size": {\n      "gt": 3\n    }\n  }\n}\n{\n  "op": "Test",\n  "path": "$.processor.artifact",\n  "value": {\n    "size": {\n      "lt": 30\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"flows"},"Flows"),(0,o.kt)("p",null,"Flows are sequences of Steps applied one by one. Flows are mapped onto specific"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "name": "main flow",\n  "conditions": [],\n  "steps": []\n}\n')),(0,o.kt)("h2",{id:"io"},"I/O"),(0,o.kt)("p",null,"By principle data is sourced from bad row bucket storage and delivered back into collector stream. Failed and unrecoverable bad rows are stored in bucket storage. For cloud-specific locations see below tables."),(0,o.kt)("h4",{id:"aws"},"AWS"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"input"),(0,o.kt)("td",null,"output"),(0,o.kt)("td",null,"failed output"),(0,o.kt)("td",null,"unrecoverable output")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"S3",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--input"),")"),(0,o.kt)("td",null,"Kinesis",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--output"),")"),(0,o.kt)("td",null,"S3",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--failedOutput"),")"),(0,o.kt)("td",null,"S3",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--unrecoverableOutput"),")")))),(0,o.kt)("h4",{id:"gcp"},"GCP"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"input"),(0,o.kt)("td",null,"output"),(0,o.kt)("td",null,"failed output"),(0,o.kt)("td",null,"unrecoverable output")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"GCS",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--input"),")"),(0,o.kt)("td",null,"PubSub",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--output"),")"),(0,o.kt)("td",null,"GCS",(0,o.kt)("br",null),"(",(0,o.kt)("code",null,"--failedOutput"),")"),(0,o.kt)("td",null,"GCS (",(0,o.kt)("code",null,"--unrecoverableOutput"),")")))))}u.isMDXComponent=!0}}]);