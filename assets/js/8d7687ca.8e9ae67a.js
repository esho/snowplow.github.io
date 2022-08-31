"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[75143],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),g=i,f=d["".concat(p,".").concat(g)]||d[g]||c[g]||r;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function g(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},45996:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(87462),i=(o(67294),o(3905));const r={title:"Configuration options",date:"2020-03-02",sidebar_position:10},a=void 0,l={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-google-cloud-storage-gcs-destination/configuration-options/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-google-cloud-storage-gcs-destination/configuration-options/index",title:"Configuration options",description:"Cloud Storage Loader specific options",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-google-cloud-storage-gcs-destination/configuration-options/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-google-cloud-storage-gcs-destination/configuration-options",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-google-cloud-storage-gcs-destination/configuration-options/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-google-cloud-storage-gcs-destination/configuration-options/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-google-cloud-storage-gcs-destination/configuration-options/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:10,frontMatter:{title:"Configuration options",date:"2020-03-02",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Running Google Cloud Storage Loader",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-google-cloud-storage-gcs-destination/downloading-google-cloud-storage-loader/"},next:{title:"Try Snowplow",permalink:"/docs/try-snowplow/"}},p={},s=[{value:"Cloud Storage Loader specific options",id:"cloud-storage-loader-specific-options",level:3},{value:"Dataflow options",id:"dataflow-options",level:3},{value:"Testing",id:"testing",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Output",id:"output",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"cloud-storage-loader-specific-options"},"Cloud Storage Loader specific options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--inputSubscription=String")," The Cloud Pub/Sub subscription to read from, formatted as projects/","[","PROJECT","]","/subscriptions/","[","SUB","]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--outputDirectory=String")," The Cloud Storage directory to output files to, ends with /"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--outputFilenamePrefix=String")," Default: output The Cloud Storage prefix to output files to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--shardTemplate=String")," Default: -W-P-SSSSS-of-NNNNN The shard template which will be part of the filenames"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--outputFilenameSuffix=String")," Default: .txt The suffix of the filenames written out"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--windowDuration=Int")," Default: 5 The window duration in minutes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--compression=String")," Default: none The compression used (gzip, bz2 or none), bz2 can\u2019t be loaded into BigQuery"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--numShards=int")," Default: 1 The maximum number of output shards produced when writing")),(0,i.kt)("h3",{id:"dataflow-options"},"Dataflow options"),(0,i.kt)("p",null,"To run on Dataflow, Beam Enrich will rely on a set of additional configuration options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--runner=DataFlowRunner")," which specifies that we want to run on Dataflow"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--project=[PROJECT]"),", the name of the GCP project"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--streaming=true")," to notify Dataflow that we\u2019re running a streaming application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--zone=europe-west2-a"),", the zone where the Dataflow nodes (effectively ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/"},"GCP Compute Engine")," nodes) will be launched"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--region=europe-west2"),", the region where the Dataflow job will be launched"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--gcpTempLocation=gs://[BUCKET]/"),", the GCS bucket where temporary files necessary to run the job (e.g. JARs) will be stored")),(0,i.kt)("p",null,"The list of all the options can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options"},"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options"),"."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"The tests for this codebase can be run with ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt test"),"."),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"You can run the job locally and experiment with its different parts using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spotify/scio/wiki/Scio-REPL"},"SCIO REPL")," by running ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt repl/run"),"."),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"The output of the Snowplow Google Cloud Storage Loader can be loaded into BigQuery. This becomes particularly useful if you choose to load the Snowplow bad stream into Cloud Storage. Indeed, loading that data from Cloud Storage into BigQuery is straightforward and makes it easy to investigate bad rows."))}c.isMDXComponent=!0}}]);