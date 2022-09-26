"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[5743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(r),u=a,m=h["".concat(d,".").concat(u)]||h[u]||c[u]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},74603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"RDB Loader 1.1.0",date:"2021-06-08",sidebar_position:-10},s=void 0,i={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/rdb-loader-1-1-0/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/rdb-loader-1-1-0/index",title:"RDB Loader 1.1.0",description:"1. Overview",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/rdb-loader-1-1-0/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/rdb-loader-1-1-0",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/rdb-loader-1-1-0/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/rdb-loader-1-1-0/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/rdb-loader-1-1-0/index.md",tags:[],version:"current",lastUpdatedAt:1664185094,formattedLastUpdatedAt:"Sep 26, 2022",sidebarPosition:-10,frontMatter:{title:"RDB Loader 1.1.0",date:"2021-06-08",sidebar_position:-10},sidebar:"defaultSidebar",previous:{title:"Update the search path for your Redshift cluster",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/update-the-search-path-for-your-redshift-cluster/"},next:{title:"RDB Loader 1.0.0",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-rdb-loader-post-r35/"}},d={},l=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Architecture",id:"2-architecture",level:2},{value:"3. Setup",id:"3-setup",level:2},{value:"4. Shredder stateless algorithm",id:"4-shredder-stateless-algorithm",level:2}],p={toc:l};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-overview"},"1. Overview"),(0,a.kt)("p",null,"Enriched events are loaded from S3 to Redshift by the RDB loader, which is in fact made of 2 applications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shredder: Spark batch job reading enriched events from S3 and writing shredded data to S3. Needs to be orchestrated by an external app (e.g. ",(0,a.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/dataflow-runner/"},"dataflow-runner"),"). When shredder is done, it writes a message to SQS with the details about shredded data on S3. Each execution writes one message to SQS."),(0,a.kt)("li",{parentName:"ul"},"Loader: long-running app that consumes details about shredded data from SQS and inserts into Redshift")),(0,a.kt)("p",null,"Upstream of the RDB loader, ",(0,a.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/"},"S3 loader")," must be setup to write enriched events from Kinesis to S3. It's important to ",(0,a.kt)("strong",{parentName:"p"},"not")," partition when doing so (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-s3-loader/blob/1.0.0/examples/config.hocon.sample#L92-L97"},"these parameters")," must not be set)."),(0,a.kt)("h2",{id:"2-architecture"},"2. Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(32473).Z,width:"960",height:"403"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enriched files copied from ",(0,a.kt)("em",{parentName:"li"},"enriched/")," to ",(0,a.kt)("em",{parentName:"li"},"archive/enriched/")," with S3DistCp on EMR."),(0,a.kt)("li",{parentName:"ol"},"Shredder is run as an EMR step. It reads the directory from step 1.\nStep 1 and 2 are orchestrated by Dataflow Runner (or any other orchestration tool).",(0,a.kt)("br",{parentName:"li"}),"Shredder is stateless. It knows which data to shred by comparing directories in ",(0,a.kt)("em",{parentName:"li"},"archive/enriched/")," and ",(0,a.kt)("em",{parentName:"li"},"shredded/"),"."),(0,a.kt)("li",{parentName:"ol"},"Shredder writes shredded data to S3."),(0,a.kt)("li",{parentName:"ol"},"When the writing is done, it sends the metadata about shredding data to SQS with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.storage/shredding_complete/jsonschema/1-0-0"},"this schema"),"."),(0,a.kt)("li",{parentName:"ol"},"Loader in a long-running app running app (e.g. on ECS fargate) that consumes messages from SQS."),(0,a.kt)("li",{parentName:"ol"},"When it receives a message sent by shredder, it knows where shredded data to load is located on S3."),(0,a.kt)("li",{parentName:"ol"},"Loader loads data into Redshift. It uses a manifest table to prevent from double-logging and for better logging.")),(0,a.kt)("h2",{id:"3-setup"},"3. Setup"),(0,a.kt)("p",null,"Steps to get RDB loader up and running:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/configuration-reference/"},"Configure shredder and loader")),(0,a.kt)("li",{parentName:"ol"},"Create SQS FIFO queue. Content-based deduplication needs to be enabled."),(0,a.kt)("li",{parentName:"ol"},"Configure ",(0,a.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},"Iglu Server")," with the schemas",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"IMPORTANT"),": do not forget to add ",(0,a.kt)("inlineCode",{parentName:"li"},"/api")," at the end of the uri in the resolver configuration for the loader"),(0,a.kt)("li",{parentName:"ol"},"Create ",(0,a.kt)("inlineCode",{parentName:"li"},"atomic.events")," table. Instructions can be found on ",(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/setup-the-snowplow-database-and-events-table/"},"this page")),(0,a.kt)("li",{parentName:"ol"},"Run RDB Loader as long-running process with access to message queue:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"docker run snowplow/snowplow-rdb-loader:1.1.0 --config config.hocon.base64 --iglu-config resolver.json.base64")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/configuration-reference/#dataflow-runner"},"Schedule EMR jobs with S3DistCp and Shredder"))),(0,a.kt)("h2",{id:"4-shredder-stateless-algorithm"},"4. Shredder stateless algorithm"),(0,a.kt)("p",null,"Shredder is stateless and infers automatically which data need to get shredded and which data were not successfully shredded in past runs, by comparing the content of enriched and shredded folders on S3."),(0,a.kt)("p",null,"How does this work ?"),(0,a.kt)("p",null,"Inside ",(0,a.kt)("em",{parentName:"p"},"archive/enriched/,")," folders are organized by run ids, e.g."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(61362).Z,width:"324",height:"210"})),(0,a.kt)("p",null,"When shredder starts, it lists the content of ",(0,a.kt)("em",{parentName:"p"},"archive/enriched"),"/."),(0,a.kt)("p",null,"It then lists the content of ",(0,a.kt)("em",{parentName:"p"},"shredded/")," and compares."),(0,a.kt)("p",null,"If all enriched events in ",(0,a.kt)("em",{parentName:"p"},"archive/enriched/")," have already been successfully shredded, then each folder in ",(0,a.kt)("em",{parentName:"p"},"archive/")," must exist in ",(0,a.kt)("em",{parentName:"p"},"shredded/")," with the same name and inside each of them, a file ",(0,a.kt)("em",{parentName:"p"},"shredded_complete.json")," must exist. The content of this file is a SDJ with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.storage/shredding_complete/jsonschema/1-0-0"},"this schema")," and is exactly what is sent to SQS for the loader."),(0,a.kt)("p",null,"When a folder exists in ",(0,a.kt)("em",{parentName:"p"},"archive/enriched/")," but not in ",(0,a.kt)("em",{parentName:"p"},"shredded/"),", it means that the folder needs to get shredded."),(0,a.kt)("p",null,"If a folder exists in both ",(0,a.kt)("em",{parentName:"p"},"archive/")," and ",(0,a.kt)("em",{parentName:"p"},"shredded/")," but there is no ",(0,a.kt)("em",{parentName:"p"},"shredded_complete.json")," in ",(0,a.kt)("em",{parentName:"p"},"shredded/"),", it means that shredded has failed for this folder in a past run. In this case shredder ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/1.0.0/modules/shredder/src/main/scala/com/snowplowanalytics/snowplow/rdbloader/shredder/batch/ShredJob.scala#L224"},"logs an error"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT"),': when rolling out to this version, the existing state needs to get "sealed", by creating ',(0,a.kt)("em",{parentName:"p"},"shredded_complete.json")," file (can be empty) inside each folder in ",(0,a.kt)("em",{parentName:"p"},"shredded/"),"."))}c.isMDXComponent=!0},32473:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-8198e19ec7758319753a81ae5ff3ed5a.png"},61362:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);