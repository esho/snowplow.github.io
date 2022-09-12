"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[24320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||a;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"S3 loader monitoring",date:"2021-10-04",sidebar_position:30},i=void 0,s={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/s3-loader/monitoring/index",id:"pipeline-components-and-applications/loaders-storage-targets/s3-loader/monitoring/index",title:"S3 loader monitoring",description:"The S3 loader has several types of monitoring built in, to help the pipeline operator: Statsd metrics, Sentry alerts, and Snowplow tracking.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/monitoring/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/s3-loader/monitoring",slug:"/pipeline-components-and-applications/loaders-storage-targets/s3-loader/monitoring/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/monitoring/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/monitoring/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:30,frontMatter:{title:"S3 loader monitoring",date:"2021-10-04",sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"S3 Loader",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/"},next:{title:"S3 loader configuration reference",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/"}},l={},p=[{value:"Statsd",id:"statsd",level:2},{value:"Sentry",id:"sentry",level:2},{value:"Snowplow Tracking",id:"snowplow-tracking",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The S3 loader has several types of monitoring built in, to help the pipeline operator: Statsd metrics, Sentry alerts, and Snowplow tracking."),(0,r.kt)("h2",{id:"statsd"},"Statsd"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/statsd/statsd"},"Statsd"),"\xa0is a daemon that aggregates and summarizes application metrics. It receives metrics sent by the application over UDP, and then periodically flushes the aggregated metrics to a\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/statsd/statsd/blob/master/docs/backend.md"},"pluggable storage backend"),"."),(0,r.kt)("p",null,"When processing enriched events, the S3 loader can emit metrics to a statsd daemon describing every S3 file it writes. Here is a string representation of the metrics it sends:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"snowplow.s3loader.count:42|c|#tag1:value1\nsnowplow.s3loader.latency_collector_to_load:123.4|g|#tag1:value1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count_good"),": the total number of events in the batch that was loaded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latency_collector_to_load"),": this is the time difference between reaching the collector and getting loaded to S3.")),(0,r.kt)("p",null,"Statsd monitoring is configured by setting the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring.metrics.statsd"),"\xa0section in\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/"},"the hocon file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"monitoring": {\n  "metrics": {\n    "hostname": "localhost"\n    "port": 8125\n    "tags": {\n      "tag1": "value1"\n      "tag2": "value2"\n    }\n    "prefix": "snowplow.s3loader"\n  }\n}\n')),(0,r.kt)("h2",{id:"sentry"},"Sentry"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.sentry.io/"},"Sentry"),"\xa0is a popular error monitoring service, which helps developers diagnose and fix problems in an application. The S3 loader can send an error report to sentry whenever something unexpected happens. The reasons for the error can then be explored in the sentry server\u2019s UI."),(0,r.kt)("p",null,"Common reasons might be failure to read or write from Kinesis, or failure to write to S3."),(0,r.kt)("p",null,"Sentry monitoring is configured by setting the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring.sentry.dsn"),"\xa0key in\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/"},"the hocon file"),"\xa0with the url of your sentry server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"monitoring": {\n  "dsn": "http://sentry.acme.com"\n}\n')),(0,r.kt)("h2",{id:"snowplow-tracking"},"Snowplow Tracking"),(0,r.kt)("p",null,"The loader can emit a Snowplow event to a collector when the application experiences runtime problems. It sends ",(0,r.kt)("inlineCode",{parentName:"p"},"[app_initialized](https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.monitoring.kinesis/app_initialized/jsonschema/1-0-0)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"[app_heartbeat](https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.monitoring.kinesis/app_heartbeat/jsonschema/1-0-0)")," events to show the application is alive. A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.monitoring.kinesis/storage_write_failed/jsonschema/1-0-0"},(0,r.kt)("inlineCode",{parentName:"a"},"storage_write_failed")," event")," is sent when a file cannot be written to S3, and a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.monitoring.kinesis/app_shutdown/jsonschema/1-0-0"},(0,r.kt)("inlineCode",{parentName:"a"},"app_shutdown")," event")," is sent when the application exits due to too many S3 errors."),(0,r.kt)("p",null,"Snowplow monitoring is configured by setting the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring.snowplow"),"\xa0section in\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/"},"the hocon file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"monitoring": {\n  "appId": "redshift-loader"\n  "collector": "collector.acme.com"\n}\n')))}d.isMDXComponent=!0}}]);