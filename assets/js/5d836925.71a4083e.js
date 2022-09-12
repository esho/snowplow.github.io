"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[70156],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,g=m["".concat(l,".").concat(f)]||m[f]||c[f]||a;return t?n.createElement(g,i(i({ref:r},d),{},{components:t})):n.createElement(g,i({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30802:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"Stream transformer",date:"2022-04-04",sidebar_position:20},i=void 0,s={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/stream-transformer/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/stream-transformer/index",title:"Stream transformer",description:"For a high-level overview of the Transform process, see Transforming enriched data. For guidance on picking the right transformer app, see How to pick a transformer.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/stream-transformer/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/stream-transformer",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/stream-transformer/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/stream-transformer/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/stream-transformer/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:20,frontMatter:{title:"Stream transformer",date:"2022-04-04",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Spark transformer",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer/"},next:{title:"Deduplication",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/deduplication/"}},l={},p=[{value:"Downloading the artefact",id:"downloading-the-artefact",level:2},{value:"Configuring <code>snowplow-transformer-kinesis</code>",id:"configuring-snowplow-transformer-kinesis",level:2},{value:"Running the stream transformer",id:"running-the-stream-transformer",level:2}],d={toc:p};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For a high-level overview of the Transform process, see ",(0,o.kt)("a",{parentName:"em",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/"},"Transforming enriched data"),". For guidance on picking the right ",(0,o.kt)("inlineCode",{parentName:"em"},"transformer")," app, see ",(0,o.kt)("a",{parentName:"em",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/#how-to-pick-a-transformer"},"How to pick a transformer"),".")),(0,o.kt)("p",null,"Unlike the ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer/"},"Spark transformer"),", the stream transformer reads data directly from the enriched Kinesis stream and does not use Spark or EMR. It's a plain JVM application, like Stream Enrich or S3 Loader."),(0,o.kt)("p",null,"Reading directly from Kinesis means that the transformer can bypass the ",(0,o.kt)("inlineCode",{parentName:"p"},"s3DistCp")," staging / archiving step."),(0,o.kt)("p",null,"Another benefit is that it doesn't process a bounded data set and can emit transformed folders based only on its configured frequency. This means the pipeline loading frequency is limited only by the storage target."),(0,o.kt)("h2",{id:"downloading-the-artefact"},"Downloading the artefact"),(0,o.kt)("p",null,"The asset is published as a jar file attached to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/releases"},"Github release notes")," for each version."),(0,o.kt)("p",null,"It's also available as a Docker image on Docker Hub under ",(0,o.kt)("inlineCode",{parentName:"p"},"snowplow/transformer-kinesis:4."),"1.0."),(0,o.kt)("h2",{id:"configuring-snowplow-transformer-kinesis"},"Configuring ",(0,o.kt)("inlineCode",{parentName:"h2"},"snowplow-transformer-kinesis")),(0,o.kt)("p",null,"The transformer takes two configuration files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"config.hocon")," file with application settings"),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("inlineCode",{parentName:"li"},"iglu_resolver.json")," file with the resolver configuration for your ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu"},"Iglu")," schema registry.")),(0,o.kt)("p",null,"An example of the minimal required config for the stream transformer can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.kinesis.config.minimal.hocon"},"here")," and a more detailed one ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.kinesis.config.reference.hocon"},"here"),". For details about each setting, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/"},"configuration reference"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"here")," for details on how to prepare the Iglu resolver file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," All self-describing schemas for events processed by the transformer ",(0,o.kt)("strong",{parentName:"p"},"must")," be hosted on ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},"Iglu Server")," 0.6.0 or above. ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/"},"Iglu Central")," is a registry containing Snowplow-authored schemas. If you want to use them alongside your own, you will need to add it to your resolver file. Keep it mind that it could override your own private schemas if you give it higher priority. For details on this see ",(0,o.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/t/important-changes-to-iglu-centrals-api-for-schema-lists/5720#how-will-this-affect-my-snowplow-pipeline-3"},"here"),"."),(0,o.kt)("h2",{id:"running-the-stream-transformer"},"Running the stream transformer"),(0,o.kt)("p",null,"The two config files need to be passed in as base64-encoded strings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run snowplow/transformer-kinesis:4.1.0 \\\n  --iglu-config $RESOLVER_BASE64 \\\n  --config $CONFIG_BASE64\n")))}c.isMDXComponent=!0}}]);