"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[20775],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var o=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,l=function(t,e){if(null==t)return{};var n,o,l={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),p=u(n),k=l,f=p["".concat(s,".").concat(k)]||p[k]||c[k]||r;return n?o.createElement(f,i(i({ref:e},d),{},{components:n})):o.createElement(f,i({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=p;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:l,i[1]=a;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76720:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=n(87462),l=(n(67294),n(3905));const r={title:"Postgres Loader Configuration Reference",date:"2021-07-07",sidebar_position:0},i=void 0,a={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/postgres-loader-configuration-reference/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/postgres-loader-configuration-reference/index",title:"Postgres Loader Configuration Reference",description:"This is a complete list of the options that can be configured in the postgres loader's HOCON config file. The example configs in github show how to prepare an input file.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/postgres-loader-configuration-reference/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/postgres-loader-configuration-reference",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/postgres-loader-configuration-reference/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/postgres-loader-configuration-reference/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/postgres-loader-configuration-reference/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:0,frontMatter:{title:"Postgres Loader Configuration Reference",date:"2021-07-07",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Postgres Loader",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/"},next:{title:"Events Manifest Populator",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/events-manifest-populator/"}},s={},u=[{value:"Advanced options",id:"advanced-options",level:4}],d={toc:u};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is a complete list of the options that can be configured in the postgres loader's HOCON config file. The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-postgres-loader/tree/master/config"},"example configs in github")," show how to prepare an input file."),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.type")),(0,l.kt)("td",null,'Required. Can be "Kinesis", "PubSub" or "Local". Configures where input events will be read from.')),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.streamName")),(0,l.kt)("td",null,"Required when ",(0,l.kt)("code",null,"input.type")," is Kinesis. Name of the Kinesis stream to read from.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.region")),(0,l.kt)("td",null,"Required when ",(0,l.kt)("code",null,"input.type")," is Kinesis. AWS region in which the Kinesis stream resides.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.initialPosition")),(0,l.kt)("td",null,"Optional. Used when ",(0,l.kt)("code",null,"input.type"),' is Kinesis. Use "TRIM_HORIZON" (the default) to start streaming at the last untrimmed record in the shard, which is the oldest data record in the shard. Or use "LATEST" to start streaming just after the most recent record in the shard.')),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.retrievalMode.type")),(0,l.kt)("td",null,"Optional. When ",(0,l.kt)("code",null,"input.type"),' is Kinesis, this sets the polling mode for retrieving records. Can be "FanOut" (the default) or "Polling".')),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.retrievalMode.maxRecords")),(0,l.kt)("td",null,"Optional. Used when ",(0,l.kt)("code",null,"input.retrievalMode.type"),' is "Polling". Configures how many records are fetched in each poll of the kinesis stream. Default 10000.')),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.projectId")),(0,l.kt)("td",null,"Required when ",(0,l.kt)("code",null,"input.type")," is PubSub. The name of your GCP project.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.subscriptionId")),(0,l.kt)("td",null,"Required when ",(0,l.kt)("code",null,"input.type")," is PubSub. Id of the PubSub subscription to read events from")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.path")),(0,l.kt)("td",null,"Required when ",(0,l.kt)("code",null,"input.type")," is Local. Path for event source. It can be directory or file. If it is directory, all the files under given directory will be read recursively. Also, given path can be both absolute path or relative path w.r.t. executable.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.good.host")),(0,l.kt)("td",null,"Required. Hostname of the postgres database.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.good.port")),(0,l.kt)("td",null,"Optional. Port number of the postgres database. Default 5432.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.good.database")),(0,l.kt)("td",null,"Required. Name of the postgres database.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.good.username")),(0,l.kt)("td",null,"Required. Postgres role name to use when connecting to the database")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.good.password")),(0,l.kt)("td",null,"Required. Password for the postgres user.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.good.schema")),(0,l.kt)("td",null,"Required. The Postgres schema in which to create tables and write events.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.good.sslMode")),(0,l.kt)("td",null,'Optional. Configures how the client and server agree on ssl protection. Default "REQUIRE"')),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.bad.type")),(0,l.kt)("td",null,'Optional. Can be "Kinesis", "PubSub", "Local" or "Noop". Configures where bad rows will be sent. Default is "Noop" which means bad rows will be discarded')),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.bad.streamName")),(0,l.kt)("td",null,"Required when ",(0,l.kt)("code",null,"bad.type")," is Kinesis. Name of the Kinesis stream to write to.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.bad.region")),(0,l.kt)("td",null,"Required when ",(0,l.kt)("code",null,"bad.type")," is Kinesis. AWS region in which the Kinesis stream resides.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.bad.projectId")),(0,l.kt)("td",null,"Required when ",(0,l.kt)("code",null,"bad.type")," is PubSub. The name of your GCP project.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.bad.topicId")),(0,l.kt)("td",null,"Required when ",(0,l.kt)("code",null,"bad.type")," is PubSub. Id of the PubSub topic to write bad rows to")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.bad.path")),(0,l.kt)("td",null,"Required when ",(0,l.kt)("code",null,"bad.type")," is Local. Path of the file to write bad rows")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"purpose")),(0,l.kt)("td",null,'Optional. Set this to "ENRICHED_EVENTS" (the default) when reading the stream of enriched events in tsv format. Set this to "JSON" when reading a stream of self-describing json, e.g. snowplow bad rows.')),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"monitoring.metrics.cloudWatch")),(0,l.kt)("td",null,"Optional boolean, with default true. For kinesis input, this is used to disable sending metrics to cloudwatch.")))),(0,l.kt)("h4",{id:"advanced-options"},"Advanced options"),(0,l.kt)("p",null,"We believe these advanced options are set to sensible defaults, and hopefully you won't need to ever change them."),(0,l.kt)("table",{class:"has-fixed-layout"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"backoffPolicy.minBackoff")),(0,l.kt)("td",null,"If producer (PubSub or Kinesis) fails to send item, it will retry to send it again. This field configures backoff time for first retry. Every retry will double the backoff time of previous one.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"backoffPolicy.maxBackoff")),(0,l.kt)("td",null,"Maximum backoff time for retry. After this value is reached, backoff time will no more increase.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.checkpointSettings.maxBatchSize")),(0,l.kt)("td",null,"Used when ",(0,l.kt)("code",null,"input.type")," is Kinesis. Determines the max number of records to aggregate before checkpointing the records. Default is 1000.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.checkpointSettings.maxBatchWait")),(0,l.kt)("td",null,"Used when ",(0,l.kt)("code",null,"input.type")," is Kinesis. Determines the max amount of time to wait before checkpointing the records. Default is 10 seconds.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"input.checkpointSettings.maxConcurrent")),(0,l.kt)("td",null,"Used when ",(0,l.kt)("code",null,"input.type")," is PubSub. The max number of concurrent evaluation for checkpointer.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.good.maxConnections")),(0,l.kt)("td",null,"Maximum number of connections database pool is allowed to reach. Default 10")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.good.threadPoolSize")),(0,l.kt)("td",null,'Size of the thread pool for blocking database operations. Default is value of "maxConnections"')),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.bad.delayThreshold")),(0,l.kt)("td",null,"Set the delay threshold to use for batching. After this amount of time has elapsed (counting from the first element added), the elements will be wrapped up in a batch and sent. Default 200 milliseconds")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.bad.maxBatchSize")),(0,l.kt)("td",null,"A batch of messages will be emitted when the number of events in batch reaches the given size. Default 500")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"output.bad.maxBatchBytes")),(0,l.kt)("td",null,"A batch of messages will be emitted when the size of the batch reaches the given size. Default 5 MB")))))}c.isMDXComponent=!0}}]);