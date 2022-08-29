"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[65213],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},54323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={title:"BigQuery Loader (0.3.x)",date:"2020-03-11",sidebar_position:30},r=void 0,l={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-3-0/index",id:"pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-3-0/index",title:"BigQuery Loader (0.3.x)",description:"This is not the latest version. Please be aware that we have identified a security vulnerability in BigQuery Repeater in this version, which we've fixed in version 0.4.2. You can find more details on our Discourse forum.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-3-0/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-3-0",slug:"/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-3-0/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-3-0/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-3-0/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:30,frontMatter:{title:"BigQuery Loader (0.3.x)",date:"2020-03-11",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"BigQuery Loader (0.4.x)",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-4-0/"},next:{title:"Google Cloud Storage Loader",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/google-cloud-storage-loader/"}},s={},p=[{value:"Technical Architecture",id:"technical-architecture",level:2},{value:"Snowplow BigQuery Loader",id:"snowplow-bigquery-loader",level:3},{value:"Overview",id:"overview",level:4},{value:"Algorithm",id:"algorithm",level:4},{value:"Snowplow BigQuery Mutator",id:"snowplow-bigquery-mutator",level:3},{value:"Overview",id:"overview-1",level:4},{value:"Algorithm",id:"algorithm-1",level:4},{value:"Snowplow BigQuery Repeater",id:"snowplow-bigquery-repeater",level:3},{value:"Overview",id:"overview-2",level:4},{value:"Mutation lag",id:"mutation-lag",level:4},{value:"Snowplow BigQuery Forwarder",id:"snowplow-bigquery-forwarder",level:3},{value:"Topics and message formats",id:"topics-and-message-formats",level:3},{value:"Setup guide",id:"setup-guide",level:2},{value:"Configuration file",id:"configuration-file",level:3},{value:"Loading mode",id:"loading-mode",level:4},{value:"Command line options",id:"command-line-options",level:4},{value:"Loader",id:"loader",level:4},{value:"Mutator",id:"mutator",level:4},{value:"<code>listen</code>",id:"listen",level:5},{value:"<code>add-column</code>",id:"add-column",level:5},{value:"<code>create</code>",id:"create",level:5},{value:"Repeater",id:"repeater",level:3},{value:"Forwarder",id:"forwarder",level:4},{value:"Docker support",id:"docker-support",level:3},{value:"Partitioning",id:"partitioning",level:3}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is not the ",(0,o.kt)("a",{parentName:"strong",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-bigquery-destination/"},"latest version"),".")," Please be aware that we have identified a security vulnerability in BigQuery Repeater in this version, which we've fixed in version ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-4-0/"},"0.4.2"),". You can find more details on our ",(0,o.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/important-notice-snowplow-bigquery-loader-vulnerability-and-fix/3783"},"Discourse forum"),"."),(0,o.kt)("p",null,"Snowplow supports streaming data into BigQuery in near real-time."),(0,o.kt)("p",null,"In order to do this, you need to setup the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader"},"BigQuery Loader"),". This loads enriched events from the enriched Pub/Sub topic, and streams them into BigQuery."),(0,o.kt)("h2",{id:"technical-architecture"},"Technical Architecture"),(0,o.kt)("p",null,"The available tools are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Snowplow BigQuery Loader"),", an ",(0,o.kt)("a",{parentName:"li",href:"https://beam.apache.org/"},"Apache Beam")," job that reads Snowplow enriched data from Google Pub/Sub, transforms it into BigQuery-friendly format and loads it. It also writes information about encountered data types into an auxiliary\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"typesTopic"),"\xa0Pub/Sub topic."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Snowplow BigQuery Mutator"),", a Scala app that reads the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"typesTopic"),"\xa0(via\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"typesSubscription"),") and performs table mutations to add new columns as required."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Snowplow BigQuery Repeater"),", a Scala app that reads\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"failedInserts"),"\xa0(caused by\xa0",(0,o.kt)("em",{parentName:"li"},"mutation lag"),") and tries to re-insert them into BigQuery after some delay, sinking failures into a dead-end bucket."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Snowplow BigQuery Forwarder"),", an alternative to Repeater implemented as an Apache Beam job. In most cases, we recommend using Repeater.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2906).Z,width:"900",height:"338"})),(0,o.kt)("p",null,'In addition it also includes a fourth microservice, the "forwarder". This has been replaced by the "repeater" - we recommend users setup the repeater rather than the forwarder.'),(0,o.kt)("h3",{id:"snowplow-bigquery-loader"},"Snowplow BigQuery Loader"),(0,o.kt)("h4",{id:"overview"},"Overview"),(0,o.kt)("p",null,"An Apache Beam job intended to run on\xa0",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/"},"Google Dataflow"),"\xa0and load enriched data from\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"enriched"),"\xa0Pub/Sub topic to Google BigQuery."),(0,o.kt)("h4",{id:"algorithm"},"Algorithm"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reads Snowplow enriched events from\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"input"),"\xa0Pub/Sub subscription."),(0,o.kt)("li",{parentName:"ul"},"Uses the JSON transformer from the\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-scala-analytics-sdk"},"Snowplow Scala Analytics SDK"),"\xa0to convert those enriched events into JSONs."),(0,o.kt)("li",{parentName:"ul"},"Uses\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-scala-client/"},"Iglu Client"),"\xa0to fetch JSON schemas for self-describing events and entities."),(0,o.kt)("li",{parentName:"ul"},"Uses\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu/tree/master/0-common/schema-ddl"},"Iglu Schema DDL"),"\xa0to transform self-describing events and entities into BigQuery format."),(0,o.kt)("li",{parentName:"ul"},"Writes transformed data into BigQuery."),(0,o.kt)("li",{parentName:"ul"},"Writes all encountered Iglu types into a\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"typesTopic"),"."),(0,o.kt)("li",{parentName:"ul"},"Writes all data failed to be processed into a\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"badRows"),"\xa0topic."),(0,o.kt)("li",{parentName:"ul"},"Writes data that succeeded to be transformed, but failed to be loaded into a\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"failedInserts"),"\xa0topic.")),(0,o.kt)("h3",{id:"snowplow-bigquery-mutator"},"Snowplow BigQuery Mutator"),(0,o.kt)("h4",{id:"overview-1"},"Overview"),(0,o.kt)("p",null,"This is a Scala app that reads data from the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"typesTopic"),"\xa0via a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"typesSubscription"),"\xa0and performs table mutations."),(0,o.kt)("h4",{id:"algorithm-1"},"Algorithm"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reads messages from\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"typesSubscription"),"."),(0,o.kt)("li",{parentName:"ul"},"Finds out if a message contains a type that has not been encountered yet (by checking internal cache)."),(0,o.kt)("li",{parentName:"ul"},"If a message contains a new type, double-checks it with the connected BigQuery table."),(0,o.kt)("li",{parentName:"ul"},"If the type is not in the table, fetches its JSON schema from Iglu Registry."),(0,o.kt)("li",{parentName:"ul"},"Transforms JSON schema into BigQuery column definition."),(0,o.kt)("li",{parentName:"ul"},"Adds the column to the connected BigQuery table.")),(0,o.kt)("h3",{id:"snowplow-bigquery-repeater"},"Snowplow BigQuery Repeater"),(0,o.kt)("p",null,"A JVM application that reads a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"failedInserts"),"\xa0subscription and tries to re-insert them into BigQuery to overcome mutation lag."),(0,o.kt)("h4",{id:"overview-2"},"Overview",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki#overview-3"})),(0,o.kt)("p",null,"Repeater has several important behaviour aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If a pulled record is not a valid Snowplow event, it will result into a\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"loader_recovery_error"),"\xa0bad row."),(0,o.kt)("li",{parentName:"ul"},"If a pulled record is a valid event, Repeater will wait some time (5 minutes by default) after the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"etl_tstamp"),"\xa0before attempting to re-insert it, in order to let Mutator do its job."),(0,o.kt)("li",{parentName:"ul"},"If the database responds with an error, the row will get transformed into a\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"loader_recovery_error"),"\xa0bad row."),(0,o.kt)("li",{parentName:"ul"},"All entities in the dead-end bucket are valid Snowplow bad rows.")),(0,o.kt)("h4",{id:"mutation-lag"},"Mutation lag"),(0,o.kt)("p",null,"Loader inserts data into BigQuery in near real-time. At the same time, it sinks\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"shredded_type"),"\xa0payloads into the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"typesTopic"),"\xa0approximately every 5 seconds. It also can take up to 10-15 seconds for Mutator to fetch, parse the message and execute an\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE"),"\xa0statement against the table."),(0,o.kt)("p",null,"If a new type arrives from\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"input"),"\xa0subscription in this period of time and Mutator fails to handle it, BigQuery will reject the row containing it and it will be sent to the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"failedInserts"),"\xa0topic. This topic contains JSON objects\xa0",(0,o.kt)("em",{parentName:"p"},"ready to be loaded into BigQuery"),"\xa0(ie not canonical Snowplow Enriched event format)."),(0,o.kt)("p",null,"In order to load this data again from\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"failedInserts"),"\xa0to BigQuery you can use Repeater or Forwarder (see below). Both read a subscription from\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"failedInserts"),"\xa0and perform\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT"),"\xa0statements."),(0,o.kt)("h3",{id:"snowplow-bigquery-forwarder"},"Snowplow BigQuery Forwarder"),(0,o.kt)("p",null,"Used for exactly the same purpose as Repeater, but uses Dataflow under the hood, which makes it suitable for very big amounts of data. At the same time, it has several important drawbacks compared with Repeater:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User needs to re-launch it manually when failed inserts appear."),(0,o.kt)("li",{parentName:"ul"},"Otherwise, it could be extremely expensive to run a Dataflow job that idles 99.9% of the time (it cannot terminate as it is a streaming/infinite job1)."),(0,o.kt)("li",{parentName:"ul"},"There's no way to tell Forwarder that it should take a pause before inserting rows back. Without the pause there's a chance that Mutator doesn't get a chance to alter the table."),(0,o.kt)("li",{parentName:"ul"},"Forwarder keeps retrying all inserts (default behaviour for streaming Dataflow jobs), while Repeater has a dead-end GCS bucket."),(0,o.kt)("li",{parentName:"ul"},"In order to debug a problem with Forwarder, operator needs to inspect Stackdriver logs.")),(0,o.kt)("p",null,"1Forwarder is a very generic and primitive Dataflow job. It could be launched using the standard Dataflow templates. But a standard template job cannot accept a subscription as a source, only a topic. That means the job must be running all the time and most of the time it will be idle."),(0,o.kt)("h3",{id:"topics-and-message-formats"},"Topics and message formats"),(0,o.kt)("p",null,"Snowplow BigQuery Loader uses Google Pub/Sub topics and subscriptions to store intermediate data and communicate between applications."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"input"),"\xa0subscription -- data enriched by Beam Enrich, in canonical\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"TSV+JSON format"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"typesTopic"),"\xa0-- all shredded types in\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"iglu:com.snowplowanalytics.snowplow/shredded_type/jsonschema/1-0-0"),"\xa0self-describing payload encountered by Loader are sinked here with ~5 seconds interval;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"typesSubscription"),"\xa0-- a subscription to\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"typesTopic"),"\xa0used by Mutator with\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"iglu:com.snowplowanalytics.snowplow/shredded_type/jsonschema/1-0-0"),"\xa0self-describing payloads;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"badRows"),"\xa0topic -- data that could not be processed by Loader due to Iglu Registry unavailability, formatted as\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"bad rows"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"failedInserts"),"\xa0topic -- data that has been successfully transformed by Loader, but failed loading to BigQuery usually due to mutation lag, formatted as\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"BigQuery JSON"),".")),(0,o.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,o.kt)("h3",{id:"configuration-file"},"Configuration file"),(0,o.kt)("p",null,"Loader, Mutator, Repeater and Forwarder accept the same configuration file with\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.snowplowanalytics.snowplow.storage/bigquery_config/jsonschema"},"iglu:com.snowplowanalytics.snowplow.storage/bigquery","_","config/jsonschema/"),"\xa0schema, which looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "schema": "iglu:com.snowplowanalytics.snowplow.storage/bigquery_config/jsonschema/1-0-0",\n    "data": {\n        "name": "Alpha BigQuery test",\n        "id": "31b1559d-d319-4023-aaae-97698238d808",\n\n        "projectId": "com-acme",\n        "datasetId": "snowplow",\n        "tableId": "events",\n\n        "input": "enriched-good-sub",\n        "typesTopic": "bq-test-types",\n        "typesSubscription": "bq-test-types-sub",\n        "badRows": "bq-test-bad-rows",\n        "failedInserts": "bq-test-bad-inserts",\n\n        "load": {\n            "mode": "STREAMING_INSERTS",\n            "retry": false\n        },\n\n        "purpose": "ENRICHED_EVENTS"\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All topics and subscriptions (",(0,o.kt)("inlineCode",{parentName:"li"},"input"),",\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"typesTopic"),",\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"typesSubscription"),",\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"badRows"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"failedInserts"),") are explained in the\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-3-0/#topics-and-message-formats"},"topics and message formats"),"\xa0section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"projectId"),"\xa0is used to group all resources (topics, subscriptions and BigQuery table)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"datasetId"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"tableId"),"\xa0(along with\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"projectId"),") specify the target BigQuery table."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),"\xa0is an arbitrary human-readable description of the storage target."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),"\xa0is a unique identificator in UUID format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"load"),"\xa0specifies the loading mode and is explained in the dedicated section below."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"purpose"),"\xa0is a standard storage configuration. Its only valid value currently is\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"ENRICHED_EVENTS"),".")),(0,o.kt)("h4",{id:"loading-mode"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#loading-mode"}),"Loading mode"),(0,o.kt)("p",null,"BigQuery supports two loading APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/streaming-data-into-bigquery"},"Streaming inserts API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs"},"Load jobs API"))),(0,o.kt)("p",null,"You can use the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"load"),"\xa0property to configure Loader to use one of them."),(0,o.kt)("p",null,"For example, the configuration for using\xa0",(0,o.kt)("strong",{parentName:"p"},"streaming inserts"),"\xa0can look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "load": {\n        "mode": "STREAMING_INSERTS",\n        "retry": false\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"retry"),"\xa0specifies if failed inserts (eg due to mutation lag) should be retried infinitely or sent straight to the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"failedInserts"),"\xa0topic. If a row cannot be inserted, it will be re-tried indefinitely, which can throttle the whole job. In that case a restart might be required."),(0,o.kt)("p",null,"The configuration for using\xa0",(0,o.kt)("strong",{parentName:"p"},"load jobs"),"\xa0can look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "load": {\n        "mode": "FILE_LOADS",\n        "frequency": 60000\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"frequency"),"\xa0specifies how often the load job should be performed, in seconds. Unlike the near-real-time\xa0",(0,o.kt)("strong",{parentName:"p"},"streaming inserts"),"\xa0API, load jobs are more batch-oriented."),(0,o.kt)("p",null,"Load jobs do not support\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"retry"),"\xa0(and streaming inserts do not support\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"frequency"),")."),(0,o.kt)("p",null,"It is generally recommended to stick with the\xa0",(0,o.kt)("strong",{parentName:"p"},"streaming jobs"),"\xa0API without retries and use\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-3-0/#repeater"},"Repeater"),"\xa0to recover data from\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"failedInserts"),". However, the\xa0",(0,o.kt)("strong",{parentName:"p"},"load jobs"),"\xa0API is cheaper and generates fewer duplicates."),(0,o.kt)("h4",{id:"command-line-options"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#command-line-options"}),"Command line options"),(0,o.kt)("p",null,"All four apps accept a path to a config file as specified above, and to an Iglu resolver config."),(0,o.kt)("h4",{id:"loader"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#loader"}),"Loader"),(0,o.kt)("p",null,"Loader accepts two required arguments, one optional argument, and\xa0",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options"},"any other"),"\xa0supported by Google Cloud Dataflow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ ./snowplow-bigquery-loader \\\n    --config=$CONFIG \\\n    --resolver=$RESOLVER\n    --labels={"key1":"val1","key2":"val2"} # optional\n')),(0,o.kt)("p",null,"The optional\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"labels"),"\xa0argument accepts a JSON with key-value pairs that will be used as\xa0",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/labeling-resources"},"labels"),"\xa0to the Cloud Dataflow job. This will be helpful if you are launching Loader as a Kubernetes job: because labels assigned to the job will not be replicated in the resulting Dataflow job."),(0,o.kt)("p",null,"This can be launched from any machine authenticated to submit Dataflow jobs."),(0,o.kt)("h4",{id:"mutator"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#mutator"}),"Mutator"),(0,o.kt)("p",null,"Mutator has three subcommands:\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"listen"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"create"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"add-column"),"."),(0,o.kt)("h5",{id:"listen"},(0,o.kt)("a",{parentName:"h5",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#listen"}),(0,o.kt)("inlineCode",{parentName:"h5"},"listen")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"listen"),"\xa0is the primary command and is used to automate table migrations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ./snowplow-bigquery-mutator \\\n    listen\n    --config $CONFIG \\\n    --resolver $RESOLVER \\\n    --verbose               # Optional, for debugging only\n")),(0,o.kt)("h5",{id:"add-column"},(0,o.kt)("a",{parentName:"h5",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#add-column"}),(0,o.kt)("inlineCode",{parentName:"h5"},"add-column")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"add-column"),"\xa0can be used once to add a column manually. This should eliminate the risk of mutation lag and the necessity to run a Repeater or Forwarder job."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ./snowplow-bigquery-mutator \\\n    add-column \\\n    --config $CONFIG \\\n    --resolver $RESOLVER \\\n    --shred-property CONTEXTS \\ --schema iglu:com.acme/app_context/jsonschema/1-0-0\n")),(0,o.kt)("p",null,"The specified schema must be present in one of the Iglu registries in the resolver configuration."),(0,o.kt)("h5",{id:"create"},(0,o.kt)("a",{parentName:"h5",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#create"}),(0,o.kt)("inlineCode",{parentName:"h5"},"create")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"create"),"\xa0creates an empty table with\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"atomic"),"\xa0structure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ./snowplow-bigquery-mutator \\\n    create \\\n    --config $CONFIG \\\n    --resolver $RESOLVER\n")),(0,o.kt)("h3",{id:"repeater"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#repeater"}),"Repeater"),(0,o.kt)("p",null,"We recommend constantly running Repeater on a small / cheap node or Docker container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ./snowplow-bigquery-repeater \\\n    create \\\n    --config $CONFIG \\\n    --resolver $RESOLVER \\\n    --failedInsertsSub $FAILED_INSERTS_SUB \\\n    --deadEndBucket $DEAD_END_GCS \\   # Must start with gcs:\\\\ prefix\n    --desperatesBufferSize 20 \\       # Size of the batch to send to the dead-end bucket\n    --desperatesWindow 20 \\           # Window duration after which bad rows will be sunk into the dead-end bucket\n    --backoffPeriod 900               # Seconds to wait before attempting a re-insert (calculated against etl_tstamp)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"desperatesBufferSize"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"desperatesWindow"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"backoffPeriod"),"\xa0are optional parameters."),(0,o.kt)("h4",{id:"forwarder"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#forwarder"}),"Forwarder"),(0,o.kt)("p",null,"Like Loader, Forwarder can be submitted from any machine authenticated to submit Dataflow jobs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ ./snowplow-bigquery-forwarder \\\n    --config=$CONFIG \\\n    --resolver=$RESOLVER\n    --labels={"key1":"val1","key2":"val2"} # optional\n    --failedInsertsSub=$FAILED_INSERTS_SUB\n')),(0,o.kt)("p",null,"Its only unique option is\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"failedInsertsSub"),", which is a subscription (that must be created\xa0",(0,o.kt)("em",{parentName:"p"},"upfront"),") to the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"failedInserts"),"\xa0topic."),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"labels"),"\xa0argument works the same as with Loader."),(0,o.kt)("p",null,"By convention both Dataflow jobs (Forwarder and Loader) accept CLI options with\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"="),"\xa0symbol and camelCase, while Mutator and Repeater accept them in UNIX style (without\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"="),")."),(0,o.kt)("h3",{id:"docker-support"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#docker-support"}),"Docker support"),(0,o.kt)("p",null,"All four applications are available as Docker images."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snowplow-docker-registry.bintray.io/snowplow/snowplow-bigquery-loader:0.3.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snowplow-docker-registry.bintray.io/snowplow/snowplow-bigquery-mutator:0.3.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snowplow-docker-registry.bintray.io/snowplow/snowplow-bigquery-repeater:0.3.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snowplow-docker-registry.bintray.io/snowplow/snowplow-bigquery-forwarder:0.3.0"))),(0,o.kt)("h3",{id:"partitioning"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/wiki/Setup-guide#partitioning"}),"Partitioning"),(0,o.kt)("p",null,"During initial setup it is strongly recommended to\xa0",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/creating-column-partitions"},"setup partitioning"),"\xa0on the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"derived_tstamp"),"\xa0property. Mutator's\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"create"),"\xa0command does not automatically add partitioning yet."))}u.isMDXComponent=!0},2906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bigquery-microservices-architecture-d8e7fac055f25a9f9be2d4c810d8b9f1.png"}}]);