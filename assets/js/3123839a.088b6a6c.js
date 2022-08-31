"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[16984],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(o),d=r,m=u["".concat(p,".").concat(d)]||u[d]||w[d]||s;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},91066:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>w,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const s={title:"The Snowplow Collector on AWS",date:"2020-02-26",sidebar_position:10},a=void 0,i={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/index",title:"The Snowplow Collector on AWS",description:"On a AWS pipeline, the Snowplow Stream Collector receives events sent over HTTP(S), and writes them to a raw Kinesis stream. From there, the data is picked up and processed by the Snowplow validation and enrichment job.",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:10,frontMatter:{title:"The Snowplow Collector on AWS",date:"2020-02-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"IAM permissions for operating Snowplow",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-operating-snowplow/"},next:{title:"Set up an SQS buffer",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/set-up-an-sqs-buffer/"}},p={},l=[],c={toc:l};function w(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(16185).Z,width:"699",height:"125"})),(0,r.kt)("p",null,"On a AWS pipeline, the Snowplow Stream Collector receives events sent over HTTP(S), and writes them to a raw Kinesis stream. From there, the data is picked up and processed by the Snowplow validation and enrichment job."),(0,r.kt)("p",null,"On a AWS pipeline the basic steps are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the AWS console, create two Kinesis streams to which the collector will write good payloads and bad events."),(0,r.kt)("li",{parentName:"ol"},"[","Optional","]"," ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/set-up-an-sqs-buffer/"},"Set up a SQS buffer,")," to handle spikes in traffic"),(0,r.kt)("li",{parentName:"ol"},"Configure and run the collector, using the main\xa0",(0,r.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/stream-collector/"},"collector documentation"),", which\xa0describes the core concepts of how the collector works, and the configuration options."),(0,r.kt)("li",{parentName:"ol"},"[","Optional","]"," ",(0,r.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/sqs2kinesis/"},"Configure and run Sqs2kinesis"),", which moves data from your SQS buffer back to the primary Kinesis queue."),(0,r.kt)("li",{parentName:"ol"},"[","Optional","]"," Sink the raw data to S3 using ",(0,r.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/"},"the Snowplow S3 loader"),". This is recommended in production so keep a copy of the raw data before any processing.")))}w.isMDXComponent=!0},16185:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/snowplow-aws-pipeline-collector-785db1c8bef9e6095363ebd7c9037824.png"}}]);