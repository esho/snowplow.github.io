"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[15097],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5389:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"Event deduplication",date:"2020-03-05",sidebar_position:20},o=void 0,l={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/event-deduplication/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/event-deduplication/index",title:"Event deduplication",description:"Duplicates is a common problem in event pipelines, it has been described and studied many times. Basically, the problem is that we cannot guarantee that every event has a unique UUID because",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/event-deduplication/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/event-deduplication",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/event-deduplication/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/event-deduplication/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/event-deduplication/index.md",tags:[],version:"current",lastUpdatedAt:1664185094,formattedLastUpdatedAt:"Sep 26, 2022",sidebarPosition:20,frontMatter:{title:"Event deduplication",date:"2020-03-05",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Shredding Overview",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/shredding-overview/"},next:{title:"DynamoDB Table",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/previous-versions/snowplow-rdb-loader/dynamodb-table/"}},s={},p=[{value:"In-batch natural de-duplication",id:"in-batch-natural-de-duplication",level:4},{value:"In-batch synthetic de-duplication",id:"in-batch-synthetic-de-duplication",level:4},{value:"Cross-batch natural de-duplication",id:"cross-batch-natural-de-duplication",level:4},{value:"DynamoDB table design",id:"dynamodb-table-design",level:5},{value:"Check-and-set algorithm",id:"check-and-set-algorithm",level:5},{value:"Enabling",id:"enabling",level:5},{value:"Table cleanup",id:"table-cleanup",level:5},{value:"Costs and performance penalty",id:"costs-and-performance-penalty",level:5}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Duplicates is a common problem in event pipelines, it has been described and studied ",(0,i.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/blog/2015/08/19/dealing-with-duplicate-event-ids/"},"many")," ",(0,i.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/blog/2016/01/26/snowplow-r76-changeable-hawk-eagle-released/#deduplication"},"times"),". Basically, the problem is that we cannot guarantee that every event has a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"UUID")," because"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"we have no exactly-once delivery guarantees"),(0,i.kt)("li",{parentName:"ol"},"user-side software can send events more than once"),(0,i.kt)("li",{parentName:"ol"},"we have to rely on flawed ",(0,i.kt)("a",{parentName:"li",href:"http://snowplowanalytics.com/blog/2016/01/26/snowplow-r76-changeable-hawk-eagle-released/#deduplication"},"algorithms"))),(0,i.kt)("p",null,"There are four strategies planned regarding incorporating deduplication mechanisms in RDB Shredder:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Strategy"),(0,i.kt)("th",{parentName:"tr",align:null},"Batch?"),(0,i.kt)("th",{parentName:"tr",align:null},"Same event ID?"),(0,i.kt)("th",{parentName:"tr",align:null},"Same event fingerprint?"),(0,i.kt)("th",{parentName:"tr",align:null},"Availability"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"In-batch natural de-duplication"),(0,i.kt)("td",{parentName:"tr",align:null},"In-batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://snowplowanalytics.com/blog/2016/01/26/snowplow-r76-changeable-hawk-eagle-released/#deduplication"},"R76 Changeable Hawk-Eagle"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"In-batch synthetic de-duplication"),(0,i.kt)("td",{parentName:"tr",align:null},"In-batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://snowplowanalytics.com/blog/2016/12/20/snowplow-r86-petra-released/"},"R86 Petra"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cross-batch natural de-duplication"),(0,i.kt)("td",{parentName:"tr",align:null},"Cross-batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://snowplowanalytics.com/blog/2017/04/27/snowplow-r88-angkor-wat-released/"},"R88 Angkor Wat"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cross-batch synthetic de-duplication"),(0,i.kt)("td",{parentName:"tr",align:null},"Cross-batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Planned")))),(0,i.kt)("p",null,"We will cover these in turn:",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Relational-Database-Shredder#41-in-batch-natural-de-duplication"})),(0,i.kt)("h4",{id:"in-batch-natural-de-duplication"},"In-batch natural de-duplication"),(0,i.kt)("p",null,"As of ",(0,i.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/blog/2016/01/26/snowplow-r76-changeable-hawk-eagle-released/#deduplication"},"the R76 Changeable Eagle-Hawk release"),', RDP de-duplicates "natural duplicates"'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"i.e. events which share the same event ID (",(0,i.kt)("inlineCode",{parentName:"li"},"event_id"),") and the same event payload (based by ",(0,i.kt)("inlineCode",{parentName:"li"},"event_fingerprint"),"), meaning that they are semantically identical to each other. For a given ETL run (batch) of events being processed, RDB Shredder keeps only the first out of each group of natural duplicates; all others will be discarded.")),(0,i.kt)("p",null,"To enable this functionality you need to have ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Event-fingerprint-enrichment"},"the Event Fingerprint Enrichment")," enabled in order to correctly populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint")," property."),(0,i.kt)("h4",{id:"in-batch-synthetic-de-duplication"},"In-batch synthetic de-duplication"),(0,i.kt)("p",null,"As of ",(0,i.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/blog/2016/12/20/snowplow-r86-petra-released/"},"the R86 Petra"),', RDP de-duplicates "synthetic duplicates" - i.e. events which share the same event ID (',(0,i.kt)("inlineCode",{parentName:"p"},"event_id"),"), but have different event payload (based on ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint"),"), meaning that they can be either semantically independent events (caused by the flawed algorithms discussed above) or the same events with slightly different payloads (caused by third-party software). For a given ETL run (batch) of events being processed, RDB Shredder uses the following strategy:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Collect all the events with identical ",(0,i.kt)("inlineCode",{parentName:"li"},"event_id")," which are left after natural-deduplication"),(0,i.kt)("li",{parentName:"ol"},"Generate new random ",(0,i.kt)("inlineCode",{parentName:"li"},"event_id")," for each of them"),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/duplicate/jsonschema/1-0-0"},(0,i.kt)("inlineCode",{parentName:"a"},"duplicate"))," context with the original ",(0,i.kt)("inlineCode",{parentName:"li"},"event_id")," for each event where the duplicated ",(0,i.kt)("inlineCode",{parentName:"li"},"event_id")," was found")),(0,i.kt)("p",null,"There is no configuration required for this functionality - de-duplication is performed automatically in RDB Shredder, but it is highly recommended to use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Event-fingerprint-enrichment"},"Event Fingerprint Enrichment")," in order to correctly populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint")," property."),(0,i.kt)("h4",{id:"cross-batch-natural-de-duplication"},"Cross-batch natural de-duplication"),(0,i.kt)("p",null,"With cross-batch natural de-duplication, we have to face a new issue: we need to track events across multiple ETL batches to detect duplicates. We don't need to store the whole event - just the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_id")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint")," metadata. We also need to store these in a database that allows fast random access - we chose Amazon DynamoDB, a fully managed NoSQL database service."),(0,i.kt)("p",null,"Cross-batch natural deduplication implemented in both RDB Shredder and Snowflake Transformer on top ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-events-manifest"},"Snowplow Events Manifest")," Scala library."),(0,i.kt)("h5",{id:"dynamodb-table-design"},"DynamoDB table design"),(0,i.kt)("p",null,"We store the event metadata in a DynamoDB table with the following attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eventId"),", a String"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fingerprint"),", a String"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"etlTime"),", a Date"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ttl"),", a Date")),(0,i.kt)("p",null,"A lookup into this table will tell us if the event we are looking for has been seen before based on ",(0,i.kt)("inlineCode",{parentName:"p"},"event_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint"),"."),(0,i.kt)("p",null,"We store the ",(0,i.kt)("inlineCode",{parentName:"p"},"etl_timestamp")," to prevent issues in the case of a failed run. If a run fails and is then rerun, we don't want the rerun to consider rows in the DynamoDB table which were written as part of the prior failed run; otherwise all events in the rerun would be rejected as dupes!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WARNING")," Due used algorithm in cross-batch deduplication, we strictly discourage anyone from deleting ",(0,i.kt)("inlineCode",{parentName:"p"},"enriched/good")," folder, as pipeline recovery step after RDB Shred job has started. Reprocessing known ",(0,i.kt)("inlineCode",{parentName:"p"},"eventId"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"fingerprint"),"s will mark events as duplicates and therefore will result in ",(0,i.kt)("strong",{parentName:"p"},"data loss"),"."),(0,i.kt)("h5",{id:"check-and-set-algorithm"},"Check-and-set algorithm"),(0,i.kt)("p",null,"It is clear as to when we need to read the event metadata from DynamoDB: during the RDB Shredder process. But when do we write the event metadata for this run back to DynamoDB? Instead of doing all the reads and then doing all the writes, we decided to use DynamoDB's ",(0,i.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.ConditionalUpdate"},"conditional updates")," to perform a check-and-set operation inside RDB Shredder, on a per-event basis."),(0,i.kt)("p",null,"The algorithm is simple:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attempt to write the ",(0,i.kt)("inlineCode",{parentName:"li"},"event_id-event_fingerprint-etl_timestamp")," triple to DynamoDB ",(0,i.kt)("strong",{parentName:"li"},"but only if")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"event_id-event_fingerprint")," pair cannot be found with an earlier ",(0,i.kt)("inlineCode",{parentName:"li"},"etl_timestamp")," than the provided one"),(0,i.kt)("li",{parentName:"ul"},"If the write fails, we have a natural duplicate"),(0,i.kt)("li",{parentName:"ul"},"If the write succeeds, we know we have an event which is not a natural duplicate (it could still be a synthetic duplicate however)")),(0,i.kt)("p",null,'If we discover a natural duplicate, we delete it. We know that we have an "original" of this event already safely in Redshift (because we have found it in DynamoDB).'),(0,i.kt)("p",null,"In the code, we perform this check after we have grouped the batch by ",(0,i.kt)("inlineCode",{parentName:"p"},"event_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"event_fingerprint"),"; this ensures that all check-and-set requests to a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"event_id-event_fingerprint")," pair in DynamoDB will come from a single mapper."),(0,i.kt)("h5",{id:"enabling"},"Enabling"),(0,i.kt)("p",null,"To enable cross-batch natural de-duplication you must provide a DynamoDB table ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Configuring-storage-targets#dynamodb"},"configuration")," to EmrEtlRunner and provide ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Setting-up-Amazon-DynamoDB"},"necessary rights")," in IAM. If this is not provided, then cross-batch natural de-duplication will be disabled. In-batch de-duplication will still work however."),(0,i.kt)("p",null,'To avoid "cold start" problems you may want to use the ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Event-manifest-populator"},"Event-manifest-populator")," Spark job, which backpopulates duplicate storage with events from the specified point in time."),(0,i.kt)("h5",{id:"table-cleanup"},"Table cleanup"),(0,i.kt)("p",null,"To make sure the DynamoDB table is not going to be overpopulated we're using ",(0,i.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html"},"the DynamoDB Time-to-Live")," feature, which provides automatic cleanup after the specified time. For event manifests this time is the etl timestamp plus 180 days and stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl")," attribute."),(0,i.kt)("h5",{id:"costs-and-performance-penalty"},"Costs and performance penalty"),(0,i.kt)("p",null,"Cross-batch deduplication uses DynamoDB as transient storage and therefore has associated AWS costs. Default write capacity is 100 units, which means no matter how powerful your EMR cluster is - whole RDB Shredder can be throttled by AWS DynamoDB. The rough cost of the default setup is 50USD per month, however throughput can be ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Setting-up-Amazon-DynamoDB"},"tweaked")," according to your needs."))}c.isMDXComponent=!0}}]);