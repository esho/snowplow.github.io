"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[5537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"BigQuery Loader",date:"2020-09-29",sidebar_position:500},r=void 0,l={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/index",id:"pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/index",title:"BigQuery Loader",description:"Under the umbrella of Snowplow BigQuery Loader, we have a family of applications that can be used to load enriched Snowplow data into BigQuery.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/bigquery-loader",slug:"/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:500,frontMatter:{title:"BigQuery Loader",date:"2020-09-29",sidebar_position:500},sidebar:"defaultSidebar",previous:{title:"Upgrade guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/upgrade-guide/"},next:{title:"1.0.x upgrade guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/1-0-x-upgrade-guide/"}},s={},p=[{value:"Snowplow BigQuery StreamLoader",id:"snowplow-bigquery-streamloader",level:3},{value:"Snowplow BigQuery Loader",id:"snowplow-bigquery-loader",level:3},{value:"Snowplow BigQuery Mutator",id:"snowplow-bigquery-mutator",level:3},{value:"Snowplow BigQuery Repeater",id:"snowplow-bigquery-repeater",level:3},{value:"Table update lag",id:"table-update-lag",level:4},{value:"Topics, subscriptions and message formats",id:"topics-subscriptions-and-message-formats",level:3},{value:"Setup guide",id:"setup-guide",level:2},{value:"Configuration file",id:"configuration-file",level:3},{value:"Command line options",id:"command-line-options",level:3},{value:"StreamLoader",id:"streamloader",level:4},{value:"The Dataflow Loader",id:"the-dataflow-loader",level:4},{value:"Mutator",id:"mutator",level:4},{value:"<code>listen</code>",id:"listen",level:5},{value:"<code>add-column</code>",id:"add-column",level:5},{value:"<code>create</code>",id:"create",level:5},{value:"Repeater",id:"repeater",level:4},{value:"Docker support",id:"docker-support",level:3}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Under the umbrella of Snowplow BigQuery Loader, we have a family of applications that can be used to load enriched Snowplow data into BigQuery."),(0,a.kt)("p",null,"There are currently four applications, which are described in detail below. A typical deployment would consist of three of them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a loader app, which consumes the enriched stream and loads the data into the storage target. This comes in two flavours (Loader and StreamLoader) that are alternatives to each other and should not both be used at the same time."),(0,a.kt)("li",{parentName:"ul"},"a Mutator app, which keeps track of the fields present in the enriched data and updates the BigQuery table accordingly;"),(0,a.kt)("li",{parentName:"ul"},"a Repeater app, which handles so-called failed inserts.")),(0,a.kt)("h2",{id:""}),(0,a.kt)("p",null,"Technical Architecture"),(0,a.kt)("p",null,"The available tools are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Snowplow BigQuery StreamLoader"),", a standalone Scala app that can be deployed on ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"Google Kubernetes Engine"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Snowplow BigQuery Loader"),", an alternative to StreamLoader, in the form of a ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/dataflow"},"Google Cloud Dataflow")," job."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Snowplow BigQuery Mutator"),", a Scala app that performs table updates to add new columns as required."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Snowplow BigQuery Repeater"),", a Scala app that reads\xa0failed inserts\xa0(caused by\xa0",(0,a.kt)("em",{parentName:"li"},"table update lag"),") and re-tries inserting them into BigQuery after some delay, sinking failures into a dead-letter bucket.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(23734).Z,width:"960",height:"720"})),(0,a.kt)("h3",{id:"snowplow-bigquery-streamloader"},"Snowplow BigQuery StreamLoader"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reads Snowplow enriched events from a dedicated\xa0Pub/Sub subscription."),(0,a.kt)("li",{parentName:"ul"},"Uses the JSON transformer from the\xa0",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-scala-analytics-sdk"},"Snowplow Scala Analytics SDK"),"\xa0to convert those enriched events into JSON."),(0,a.kt)("li",{parentName:"ul"},"Uses\xa0",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-scala-client/"},"Iglu Client"),"\xa0to fetch JSON schemas for self-describing events and entities."),(0,a.kt)("li",{parentName:"ul"},"Uses\xa0",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu/tree/master/0-common/schema-ddl"},"Iglu Schema DDL"),"\xa0to transform self-describing events and entities into BigQuery format."),(0,a.kt)("li",{parentName:"ul"},"Writes transformed data into BigQuery."),(0,a.kt)("li",{parentName:"ul"},"Writes all encountered Iglu types into a dedicated Pub/Sub topic (the ",(0,a.kt)("inlineCode",{parentName:"li"},"types")," topic)."),(0,a.kt)("li",{parentName:"ul"},"Writes all data that failed to be validated against its schema into a dedicated ",(0,a.kt)("inlineCode",{parentName:"li"},"badRows")," Pub/Sub topic."),(0,a.kt)("li",{parentName:"ul"},"Writes all data that was successfully transformed, but could not be loaded into a dedicated ",(0,a.kt)("inlineCode",{parentName:"li"},"failedInserts")," topic.")),(0,a.kt)("h3",{id:"snowplow-bigquery-loader"},"Snowplow BigQuery Loader"),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"https://beam.apache.org/"},"Apache Beam")," job intended to run on\xa0Google Cloud Dataflow. An alternative to the StreamLoader application, it has the same algorithm."),(0,a.kt)("h3",{id:"snowplow-bigquery-mutator"},"Snowplow BigQuery Mutator"),(0,a.kt)("p",null,"The Mutator app is in charge of performing automatic table updates, which means you do not have to pause loading and manually update the table every time you're adding a new custom self-describing event or entity."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reads messages from a dedicated subscription to the ",(0,a.kt)("inlineCode",{parentName:"li"},"types")," topic."),(0,a.kt)("li",{parentName:"ul"},"Finds out if a message contains a type that has not been encountered yet (by checking internal cache)."),(0,a.kt)("li",{parentName:"ul"},"If a message contains a new type, double-checks it with the connected BigQuery table."),(0,a.kt)("li",{parentName:"ul"},"If the type is not in the table, fetches its JSON schema from an Iglu registry."),(0,a.kt)("li",{parentName:"ul"},"Transforms the JSON schema into BigQuery column definition."),(0,a.kt)("li",{parentName:"ul"},"Adds the column to the connected BigQuery table.")),(0,a.kt)("h3",{id:"snowplow-bigquery-repeater"},"Snowplow BigQuery Repeater"),(0,a.kt)("p",null,"The Repeater app is in charge of handling failed inserts. It reads ready-to-load events from a\xa0dedicated subscription on the ",(0,a.kt)("inlineCode",{parentName:"p"},"failedInserts"),"\xa0topic and re-tries inserting them into BigQuery to overcome 'table update lag'."),(0,a.kt)("h4",{id:"table-update-lag"},"Table update lag"),(0,a.kt)("p",null,"The loader app inserts data into BigQuery in near real-time. At the same time, it sinks\xa0messages containing information about the fields of an event into the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"types")," topic. It can take up to 10-15 seconds for Mutator to fetch, parse the message and execute an\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE"),"\xa0statement against the table. Additionally, the new column takes some time to propagate and become visible to all workers trying to write to it."),(0,a.kt)("p",null,"If a new type arrives from\xa0the input\xa0subscription in this period of time, BigQuery might reject the row containing it and it will be sent to the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"failedInserts"),"\xa0topic. This topic contains JSON objects\xa0",(0,a.kt)("em",{parentName:"p"},"ready to be loaded into BigQuery"),"\xa0(ie not canonical Snowplow Enriched event format)."),(0,a.kt)("p",null,"In order to load this data again from\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"failedInserts"),"\xa0to BigQuery you can use Repeater, which reads a subscription on\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"failedInserts"),"\xa0and performs\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),"\xa0statements."),(0,a.kt)("p",null,"Repeater has several important behaviour aspects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a pulled record is not a valid Snowplow event, it will result into a\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"loader_recovery_error"),"\xa0bad row."),(0,a.kt)("li",{parentName:"ul"},"If a pulled record is a valid event, Repeater will wait some time (15 minutes by default) after the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"etl_tstamp"),"\xa0before attempting to re-insert it, in order to let Mutator do its job."),(0,a.kt)("li",{parentName:"ul"},"If the database responds with an error, the row will get transformed into a\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"loader_recovery_error"),"\xa0bad row."),(0,a.kt)("li",{parentName:"ul"},"All entities in the dead-letter bucket are valid Snowplow ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-badrows"},"bad rows"),".")),(0,a.kt)("h3",{id:"topics-subscriptions-and-message-formats"},"Topics, subscriptions and message formats"),(0,a.kt)("p",null,"The Snowplow BigQuery Loader apps use Pub/Sub topics and subscriptions to store intermediate data and communicate with each other."),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,"Kind")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Populated by")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Consumed by")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Data format"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Input subscription"),(0,a.kt)("td",null,"Enriched events topic"),(0,a.kt)("td",null,"Loader / StreamLoader"),(0,a.kt)("td",null,"canonical ",(0,a.kt)("code",null,"TSV + JSON")," enriched format")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Types topic"),(0,a.kt)("td",null,"Loader / StreamLoader"),(0,a.kt)("td",null,"Types subscription"),(0,a.kt)("td",null,(0,a.kt)("code",null,"iglu:com.snowplowanalytics.snowplow/shredded_type/jsonschema/1-0-0"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Types subscription"),(0,a.kt)("td",null,"Types topic"),(0,a.kt)("td",null,"Mutator"),(0,a.kt)("td",null,(0,a.kt)("code",null,"iglu:com.snowplowanalytics.snowplow/shredded_type/jsonschema/1-0-0"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Bad row topic"),(0,a.kt)("td",null,"Loader / StreamLoader"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/pipeline-components-and-applications/loaders-storage-targets/google-cloud-storage-loader/"},"GCS Loader")),(0,a.kt)("td",null,(0,a.kt)("code",null,"iglu:com.snowplowanalytics.snowplow.badrows/loader_iglu_error/jsonschema/2-0-0"),(0,a.kt)("br",null),(0,a.kt)("code",null,"iglu:com.snowplowanalytics.snowplow.badrows/loader_parsing_error/jsonschema/2-0-0"),(0,a.kt)("br",null),(0,a.kt)("code",null,"iglu:com.snowplowanalytics.snowplow.badrows/loader_runtime_error/jsonschema/1-0-1"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Failed insert topic"),(0,a.kt)("td",null,"Loader / StreamLoader"),(0,a.kt)("td",null,"Failed insert subscription"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BigQuery JSON"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Failed insert subscription"),(0,a.kt)("td",null,"Failed insert topic"),(0,a.kt)("td",null,"Repeater"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BigQuery JSON"))))),(0,a.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,a.kt)("h3",{id:"configuration-file"},"Configuration file"),(0,a.kt)("p",null,"Loader / StreamLoader, Mutator and Repeater accept the same configuration file in HOCON format. An example of a minimal configuration file can look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "projectId": "com-acme"\n\n  "loader": {\n    "input": {\n      "subscription": "enriched-sub"\n    }\n\n    "output": {\n      "good": {\n        "datasetId": "snowplow"\n        "tableId": "events"\n      }\n\n      "bad": {\n        "topic": "bad-topic"\n      }\n\n      "types": {\n        "topic": "types-topic"\n      }\n\n      "failedInserts": {\n        "topic": "failed-inserts-topic"\n      }\n    }\n  }\n\n  "mutator": {\n    "input": {\n      "subscription": "types-sub"\n    }\n\n    "output": {\n      "good": ${loader.output.good} # will be automatically inferred\n    }\n  }\n\n  "repeater": {\n    "input": {\n      "subscription": "failed-inserts-sub"\n    }\n\n    "output": {\n      "good": ${loader.output.good} # will be automatically inferred\n\n      "deadLetters": {\n        "bucket": "gs://dead-letter-bucket"\n      }\n    }\n  }\n\n  "monitoring": {} # disabled\n}\n')),(0,a.kt)("p",null,"The loader takes command line arguments ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," with a path to the configuration hocon file and ",(0,a.kt)("inlineCode",{parentName:"p"},"--resolver")," with a path to the Iglu resolver file. If you are running the docker image then you should mount the configuration files into the container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker run \\\n    -v /path/to/configs:/configs \\\n    snowplow/snowplow-bigquery-streamloader:1.4.2 \\\n    --config=/configs/bigquery.hocon \\\n    --resolver=/configs/resolver.json\n")),(0,a.kt)("p",null,"Or you can pass the whole config as a base64-encoded string using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," option, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker run \\\n    -v /path/to/resolver.json:/resolver.json \\\n    snowplow/snowplow-bigquery-streamloader:1.4.2 \\\n    --config=ewogICJwcm9qZWN0SWQiOiAiY29tLWFjbWUiCgogICJsb2FkZXIiOiB7CiAgICAiaW5wdXQiOiB7CiAgICAgICJzdWJzY3JpcHRpb24iOiAiZW5yaWNoZWQtc3ViIgogICAgfQoKICAgICJvdXRwdXQiOiB7CiAgICAgICJnb29kIjogewogICAgICAgICJkYXRhc2V0SWQiOiAic25vd3Bsb3ciCiAgICAgICAgInRhYmxlSWQiOiAiZXZlbnRzIgogICAgICB9CgogICAgICAiYmFkIjogewogICAgICAgICJ0b3BpYyI6ICJiYWQtdG9waWMiCiAgICAgIH0KCiAgICAgICJ0eXBlcyI6IHsKICAgICAgICAidG9waWMiOiAidHlwZXMtdG9waWMiCiAgICAgIH0KCiAgICAgICJmYWlsZWRJbnNlcnRzIjogewogICAgICAgICJ0b3BpYyI6ICJmYWlsZWQtaW5zZXJ0cy10b3BpYyIKICAgICAgfQogICAgfQogIH0KCiAgIm11dGF0b3IiOiB7CiAgICAiaW5wdXQiOiB7CiAgICAgICJzdWJzY3JpcHRpb24iOiAidHlwZXMtc3ViIgogICAgfQoKICAgICJvdXRwdXQiOiB7CiAgICAgICJnb29kIjogJHtsb2FkZXIub3V0cHV0Lmdvb2R9ICMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGluZmVycmVkCiAgICB9CiAgfQoKICAicmVwZWF0ZXIiOiB7CiAgICAiaW5wdXQiOiB7CiAgICAgICJzdWJzY3JpcHRpb24iOiAiZmFpbGVkLWluc2VydHMtc3ViIgogICAgfQoKICAgICJvdXRwdXQiOiB7CiAgICAgICJnb29kIjogJHtsb2FkZXIub3V0cHV0Lmdvb2R9ICMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGluZmVycmVkCgogICAgICAiZGVhZExldHRlcnMiOiB7CiAgICAgICAgImJ1Y2tldCI6ICJnczovL2RlYWQtbGV0dGVyLWJ1Y2tldCIKICAgICAgfQogICAgfQogIH0KCiAgIm1vbml0b3JpbmciOiB7fSAjIGRpc2FibGVkCn0= \\\n    --resolver=/resolver.json\n")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"--config"),"\xa0command option is actually optional. For some setups it is more convenient to provide configuration parameters using JVM system properties or environment variables, as documented in\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/v1.4.1/README.md"},"the Lightbend config readme"),"."),(0,a.kt)("p",null,"For example, to override the ",(0,a.kt)("inlineCode",{parentName:"p"},"repeater.input.subscription")," setting using system properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ docker run \\\n    -v /path/to/configs:/configs \\\n    snowplow/snowplow-bigquery-streamloader:1.4.2 \\\n    --config=/configs/bigquery.hocon \\\n    --resolver=/configs/resolver.json \\\n    -Drepeater.input.subscription="failed-inserts-sub"\n')),(0,a.kt)("p",null,"Or to use environment variables for every setting:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker run \\\n    -v /path/to/resolver.json:/resolver.json \\\n    snowplow/snowplow-bigquery-repeater:1.4.2 \\\n    --resolver=/resolver.json \\ \n    -Dconfig.override_with_env_vars=true\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/snowplow-bigquery-loader-configuration-reference/"},"configuration reference")," for more details and advanced settings."),(0,a.kt)("h3",{id:"command-line-options"},"Command line options"),(0,a.kt)("p",null,"All apps accept a config HOCON as specified above, and an Iglu resolver config passed via the ",(0,a.kt)("inlineCode",{parentName:"p"},"--resolver")," option. The latter must conform to the ",(0,a.kt)("inlineCode",{parentName:"p"},"iglu:com.snowplowanalytics.iglu/resolver-config/jsonschema/1-0-3")," schema."),(0,a.kt)("h4",{id:"streamloader"},"StreamLoader"),(0,a.kt)("p",null,"StreamLoader accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--resolver")," arguments, as well as any JVM system properties that can be used to override the configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker run \\\n    -v /path/to/configs:/configs \\\n    snowplow/snowplow-bigquery-streamloader:1.4.2 \\\n    --config=/configs/bigquery.hocon \\\n    --resolver=/configs/resolver.json \\\n    -Dconfig.override_with_env_vars=true\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," flag is optional, but if missing, all configuration options must be specified in some other way (system properties or environment variables)."),(0,a.kt)("h4",{id:"the-dataflow-loader"},"The Dataflow Loader"),(0,a.kt)("p",null,"The Dataflow Loader accepts the same two arguments as StreamLoader and\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options"},"any other"),"\xa0supported by Google Cloud Dataflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ docker run \\\n    -v /path/to/configs:/configs \\\n    snowplow/snowplow-bigquery-loader:1.4.2 \\\n    --config=/configs/bigquery.hocon \\\n    --resolver=/configs/resolver.json \\\n    --labels={"key1":"val1","key2":"val2"} # optional Dataflow args\n')),(0,a.kt)("p",null,"The optional\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"labels"),"\xa0argument is an example of a Dataflow natively supported argument. It accepts a JSON with key-value pairs that will be used as\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/labeling-resources"},"labels"),"\xa0to the Cloud Dataflow job."),(0,a.kt)("p",null,"This can be launched from any machine authenticated to submit Dataflow jobs."),(0,a.kt)("h4",{id:"mutator"},"Mutator"),(0,a.kt)("p",null,"Mutator has three subcommands:\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"listen"),",\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"create"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"add-column"),"."),(0,a.kt)("h5",{id:"listen"},(0,a.kt)("inlineCode",{parentName:"h5"},"listen")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"listen"),"\xa0is the primary command and is used to automate table migrations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker run \\\n    -v /path/to/configs:/configs \\\n    snowplow/snowplow-bigquery-mutator:1.4.2 \\\n    listen \\\n    --config=/configs/bigquery.hocon \\\n    --resolver=/configs/resolver.json \\\n    --verbose # optional, for debugging only\n")),(0,a.kt)("h5",{id:"add-column"},(0,a.kt)("inlineCode",{parentName:"h5"},"add-column")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"add-column"),"\xa0can be used once to add a column to the table specified via the ",(0,a.kt)("inlineCode",{parentName:"p"},"loader.output.good")," setting. This should eliminate the risk of table update lag and the necessity to run a Repeater, but requires 'manual' intervention."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ docker run \\\n    -v /path/to/configs:/configs \\\n    snowplow/snowplow-bigquery-mutator:1.4.2 \\\n    add-column \\\n    --config=/configs/bigquery.hocon \\\n    --resolver=/configs/resolver.json \\\n    --shred-property=CONTEXTS \\\n    --schema="iglu:com.acme/app_context/jsonschema/1-0-0"\n')),(0,a.kt)("p",null,"The specified schema must be present in one of the Iglu registries in the resolver configuration."),(0,a.kt)("h5",{id:"create"},(0,a.kt)("inlineCode",{parentName:"h5"},"create")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create"),"\xa0creates an empty table with\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"atomic"),"\xa0structure. It can optionally be partitioned by a ",(0,a.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker run \\\n    -v /path/to/configs:/configs \\\n    snowplow/snowplow-bigquery-mutator:1.4.2 \\\n    create \\\n    --config=/configs/bigquery.hocon \\\n    --resolver=/configs/resolver.json \\\n    --partitionColumn=load_tstamp \\ # optional TIMESTAMP column by which to partition the table\n    --requirePartitionFilter # optionally require a filter on the partition column in all queries\n")),(0,a.kt)("p",null,"See the Google documentation for more information about ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/creating-partitioned-tables"},"partitioned tables"),"."),(0,a.kt)("h4",{id:"repeater"},"Repeater"),(0,a.kt)("p",null,"We recommend constantly running Repeater on a small / cheap node or Docker container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker run \\\n    -v /path/to/configs:/configs \\\n    snowplow/snowplow-bigquery-repeater:1.4.2 \\\n    listen \\\n    --config=/configs/bigquery.hocon \\\n    --resolver=/configs/resolver.json \\\n    --bufferSize=20 \\ # size of the batch to send to the dead-letter bucket\n    --timeout=20 \\ # duration after which bad rows will be sunk into the dead-letter bucket  \n    --backoffPeriod=900 # seconds to wait before attempting an insert (calculated against etl_tstamp)\n    --verbose # optional, for debugging only\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bufferSize"),",\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"timeout"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"backoffPeriod"),"\xa0are optional parameters."),(0,a.kt)("h3",{id:"docker-support"},"Docker support"),(0,a.kt)("p",null,"All applications are available as Docker images on Docker Hub, based on Ubuntu Focal and OpenJDK 11:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker pull snowplow/snowplow-bigquery-streamloader:1.4.2\n$ docker pull snowplow/snowplow-bigquery-loader:1.4.2\n$ docker pull snowplow/snowplow-bigquery-mutator:1.4.2\n$ docker pull snowplow/snowplow-bigquery-repeater:1.4.2\n")),(0,a.kt)("p",null,"We also provide an alternative lightweight set of images based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/distroless"},'Google\'s "distroless" base image'),", which may provide some security advantages for carrying fewer dependencies. These images are distinguished with the ",(0,a.kt)("inlineCode",{parentName:"p"},"1.4.2-distroless")," tag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker pull snowplow/snowplow-bigquery-streamloader:1.4.2-distroless\n$ docker pull snowplow/snowplow-bigquery-loader:1.4.2-distroless\n$ docker pull snowplow/snowplow-bigquery-mutator:1.4.2-distroless\n$ docker pull snowplow/snowplow-bigquery-repeater:1.4.2-distroless\n")),(0,a.kt)("p",null,"Mutator, Repeater and Streamloader are also available as fatjar files attached to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/releases"},"releases")," in the project's Github repository."))}u.isMDXComponent=!0},23734:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/BQL_100_technical_diagram-adad53ea3a4f8a8e9485a50003b15637.png"}}]);