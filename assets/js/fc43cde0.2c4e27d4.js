"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[98743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,f=c["".concat(l,".").concat(g)]||c[g]||u[g]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"1.0.x upgrade guide",date:"2021-10-07",sidebar_position:0},i=void 0,s={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/1-0-x-upgrade-guide/index",id:"pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/1-0-x-upgrade-guide/index",title:"1.0.x upgrade guide",description:"Configuration",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/1-0-x-upgrade-guide/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/1-0-x-upgrade-guide",slug:"/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/1-0-x-upgrade-guide/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/1-0-x-upgrade-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/1-0-x-upgrade-guide/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:0,frontMatter:{title:"1.0.x upgrade guide",date:"2021-10-07",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"BigQuery Loader",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/"},next:{title:"Configuration reference",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/snowplow-bigquery-loader-configuration-reference/"}},l={},p=[{value:"Configuration",id:"configuration",level:2},{value:"New events table field",id:"new-events-table-field",level:2},{value:"Migrating to StreamLoader",id:"migrating-to-streamloader",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The only breaking change from the 0.6.x series is the new format of the configuration file. That used to be a self-describing JSON but is now HOCON. Additionally, some app-specific command-line arguments have been incorporated into the config, such as Repeater's ",(0,o.kt)("inlineCode",{parentName:"p"},"--failedInsertsSub")," option. For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/#Setup_guide"},"setup guide")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/snowplow-bigquery-loader-configuration-reference/"},"configuration reference"),"."),(0,o.kt)("p",null,"Using Repeater as an example, if your configuration for 0.6.x looked like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.snowplow.storage/bigquery_config/jsonschema/1-0-0",\n  "data": {\n    "name": "Alpha BigQuery test",\n    "id": "31b1559d-d319-4023-aaae-97698238d808",\n    "projectId": "com-acme",\n    "datasetId": "snowplow",\n    "tableId": "events",\n    "input": "enriched-sub",\n    "typesTopic": "types-topic",\n    "typesSubscription": "types-sub",\n    "badRows": "bad-topic",\n    "failedInserts": "failed-inserts-topic",\n    "load": {\n      "mode": "STREAMING_INSERTS",\n      "retry": false\n     },\n     "purpose": "ENRICHED_EVENTS"\n  }\n}\n')),(0,o.kt)("p",null,"it will now look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "projectId": "com-acme"\n\n  "loader": {\n    "input": {\n      "subscription": "enriched-sub"\n    }\n\n    "output": {\n      "good": {\n        "datasetId": "snowplow"\n        "tableId": "events"\n      }\n\n      "bad": {\n        "topic": "bad-topic"\n      }\n\n      "types": {\n        "topic": "types-topic"\n      }\n\n      "failedInserts": {\n        "topic": "failed-inserts-topic"\n      }\n    }\n  }\n\n  "mutator": {\n    "input": {\n      "subscription": "types-sub"\n    }\n\n    "output": {\n      "good": ${loader.output.good} # will be automatically inferred\n    }\n  }\n\n  "repeater": {\n    "input": {\n      "subscription": "failed-inserts-sub"\n    }\n\n    "output": {\n      "good": ${loader.output.good} # will be automatically inferred\n\n      "deadLetters": {\n        "bucket": "gs://dead-letter-bucket"\n      }\n    }\n  }\n\n  "monitoring": {} # disabled\n}\n')),(0,o.kt)("p",null,"And instead of running it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ ./snowplow-bigquery-repeater \\\n    --config=$CONFIG \\\n    --resolver=$RESOLVER \\\n    --failedInsertsSub="failed-inserts-sub" \\\n    --deadEndBucket="gs://dead-letter-bucket"\n    --desperatesBufferSize=20 \\\n    --desperatesWindow=20 \\  \n    --backoffPeriod=900 \\\n    --verbose\n')),(0,o.kt)("p",null,"you will run it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run \\\n  -v /path/to/resolver.json:/resolver.json \\\n  snowplow/snowplow-bigquery-repeater:1.0.1 \\\n    --config=$CONFIG \\\n    --resolver=/resolver.json \\\n    --bufferSize=20 \\\n    --timeout=20 \\\n    --backoffPeriod=900 \\\n    --verbose\n")),(0,o.kt)("h2",{id:"new-events-table-field"},"New events table field"),(0,o.kt)("p",null,"The first time you deploy Mutator 1.0.0 it will add a new column to your events table: ",(0,o.kt)("inlineCode",{parentName:"p"},"load_tstamp"),". This represents the exact moment when the row was inserted into BigQuery. It shows you when events have arrived in the warehouse, which makes it possible to use incremental processing of newly arrived data in your downstream data modelling."),(0,o.kt)("p",null,"Depending on your traffic volume and pattern, there might be a short time period in which the loader app cannot write to BigQuery because the new column hasn't propagated and is not yet visible to all workers. For that reason, ",(0,o.kt)("strong",{parentName:"p"},"we recommend that you upgrade Mutator first"),"."),(0,o.kt)("h2",{id:"migrating-to-streamloader"},"Migrating to StreamLoader"),(0,o.kt)("p",null,"StreamLoader has been built as a standalone application, replacing Apache Beam and no longer requires you to use Dataflow."),(0,o.kt)("p",null,"Depending on your data volume and traffic patterns, this might lead to significant cost reductions. However, by migrating away from Dataflow, you no longer benefit from its exactly-once processing guarantees. As such, there could be a slight increase in the number of duplicate events loaded into BigQuery."),(0,o.kt)("p",null,"Duplicate events generally are to be expected in a Snowplow pipeline, which provides an at-least-once guarantee."),(0,o.kt)("p",null,"In our tests, we found that duplicates arise only during extreme autoscaling of the loader, eg if your pipeline has a sudden extreme spike in events. Aside from autoscaling events, we found the number of duplicate rows to be very low, however this depends on the type of worker infrastructure you use."))}u.isMDXComponent=!0}}]);