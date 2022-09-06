"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[72976],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,w=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(w,i(i({ref:n},c),{},{components:t})):a.createElement(w,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={title:"Configuration Examples",date:"2020-04-14",sidebar_position:0},i=void 0,l={unversionedId:"managing-data-quality/snowplow-event-recovery/0-2-concepts/configuration-examples/index",id:"managing-data-quality/snowplow-event-recovery/0-2-concepts/configuration-examples/index",title:"Configuration Examples",description:"Below configuration examples incorporate most of the available features.",source:"@site/docs/managing-data-quality/snowplow-event-recovery/0-2-concepts/configuration-examples/index.md",sourceDirName:"managing-data-quality/snowplow-event-recovery/0-2-concepts/configuration-examples",slug:"/managing-data-quality/snowplow-event-recovery/0-2-concepts/configuration-examples/",permalink:"/docs/managing-data-quality/snowplow-event-recovery/0-2-concepts/configuration-examples/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/snowplow-event-recovery/0-2-concepts/configuration-examples/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:0,frontMatter:{title:"Configuration Examples",date:"2020-04-14",sidebar_position:0},sidebar:"defaultSidebar",previous:{title:"Concepts",permalink:"/docs/managing-data-quality/snowplow-event-recovery/0-2-concepts/"},next:{title:"Running",permalink:"/docs/managing-data-quality/snowplow-event-recovery/running/"}},s={},p=[{value:"Minimal example",id:"minimal-example",level:3},{value:"Multiple flows example",id:"multiple-flows-example",level:3},{value:"Full example",id:"full-example",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below configuration examples incorporate most of the available features."),(0,o.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,o.kt)("p",null,"The most basic configuration that will run for particular bad row type in particular version and mark all the other as ",(0,o.kt)("inlineCode",{parentName:"p"},"failed")," because of missing configuration mappings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.snowplow/recoveries/jsonschema/2-0-0",\n  "data": {\n    "iglu:com.snowplowanalytics.snowplow.badrows/adapter_failures/jsonschema/*-*-*": [\n      {\n        "name": "pass-through flow",\n        "conditions": [],\n        "steps": []\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"In above scenario we want to resubmit all the received ",(0,o.kt)("inlineCode",{parentName:"p"},"adapter_failures")," without any modifications."),(0,o.kt)("h3",{id:"multiple-flows-example"},"Multiple flows example"),(0,o.kt)("p",null,"Following example shows a way of setting up multiple configuration flows for specific bad row types. Configurations will be matched top to bottom and the first from the to will be chosen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.snowplow/recoveries/jsonschema/2-0-0",\n  "data": {\n    "iglu:com.snowplowanalytics.snowplow.badrows/enrichment_failures/jsonschema/1-0-*": [\n      {\n        "name": "main flow",\n        "conditions": [\n          {\n            "op": "Test",\n            "path": "$.payload.raw.vendor",\n            "value": {\n              "regex": "com.snowplow\\\\.*"\n            }\n          }\n        ],\n        "steps": [\n          {\n            "op": "Replace",\n            "path": "$.raw.refererUri",\n            "match": "(?U)^.*$",\n            "value": "https://console.snplow.com/"\n          }\n        ]\n      },\n      {\n        "name": "pass-through",\n        "conditions": [],\n        "steps": []\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"In above scenario we want to process ",(0,o.kt)("inlineCode",{parentName:"p"},"1-0"),"-","series of ",(0,o.kt)("inlineCode",{parentName:"p"},"enrichment_failures")," bad row type only. Moreover we only want to modify those for which vendor in raw payload is starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"com.snowplow"),". For those bad rows we will replace full ",(0,o.kt)("inlineCode",{parentName:"p"},"refererUri")," contents with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://console.snplow.com/"),". All the other ",(0,o.kt)("inlineCode",{parentName:"p"},"enrichment_failures")," will be resubmitted as they've been originally submitted (pass-through scenario)."),(0,o.kt)("h3",{id:"full-example"},"Full example"),(0,o.kt)("p",null,"An advanced example making use of most of the features that will perform multiple operations on very specific subset of bad rows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.snowplow/recoveries/jsonschema/2-0-0",\n  "data": {\n    "iglu:com.snowplowanalytics.snowplow.badrows/enrichment_failures/jsonschema/1-0-*": [\n      {\n        "name": "main flow making use of most of available features",\n        "conditions": [\n          {\n            "op": "Test",\n            "path": "$.processor.artifact",\n            "value": {\n              "value": "beam-enrich"\n            }\n          },\n          {\n            "op": "Test",\n            "path": "$.payload.raw.vendor",\n            "value": {\n              "regex": "com.snowplow\\\\.*"\n            }\n          },\n          {\n            "op": "Test",\n            "path": "$.processor.artifact",\n            "value": {\n              "size": {\n                "eq": 11\n              }\n            }\n          },\n          {\n            "op": "Test",\n            "path": "$.processor.artifact",\n            "value": {\n              "size": {\n                "gt": 3\n              }\n            }\n          },\n          {\n            "op": "Test",\n            "path": "$.processor.artifact",\n            "value": {\n              "size": {\n                "lt": 30\n              }\n            }\n          }\n        ],\n        "steps": [\n          {\n            "op": "Replace",\n            "path": "$.raw.refererUri",\n            "match": "(?U)^.*$",\n            "value": "https://console.snplow.com/"\n          },\n          {\n            "op": "Remove",\n            "path": "$.raw.parameters.aid",\n            "match": "(?U)^.*$"\n          },\n          {\n            "op": "Replace",\n            "path": "$.raw.headers",\n            "match": "X-Forwarded-Proto:.*",\n            "value": "X-Forwarded-Proto: http"\n          },\n          {\n            "op": "Replace",\n            "path": "$.raw.parameters.cx.data.[?(@.schema=~iglu:org.w3/PerformanceTiming/jsonschema/1-0-0)].data.loadEventEnd",\n            "match": "(?U)^.*$",\n            "value": "1"\n          },\n          {\n            "op": "Cast",\n            "path": "$.raw.parameters.cx.data.[?(@.schema=~iglu:org.w3/PerformanceTiming/jsonschema/1-0-0)].data.domComplete",\n            "from": "Numeric",\n            "to": "Boolean"\n          },\n          {\n            "op": "Replace",\n            "path": "$.raw.parameters.cx.data.[1].data.domComplete",\n            "match": "false",\n            "value": "true"\n          },\n          {\n            "op": "Cast",\n            "path": "$.raw.parameters.cx.data.[?(@.data.navigationStart=~([0-9]+))].data.domComplete",\n            "from": "Boolean",\n            "to": "Numeric"\n          }\n        ]\n      },\n      {\n        "name": "impossible flow",\n        "conditions": [\n          {\n            "op": "Test",\n            "path": "$.processor.artifact",\n            "value": {\n              "value": "lorem-ipsum"\n            }\n          }\n        ],\n        "steps": []\n      }\n    ]\n  }\n}\n')))}m.isMDXComponent=!0}}]);