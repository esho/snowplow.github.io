"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[35578],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return a?o.createElement(m,i(i({ref:t},p),{},{components:a})):o.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(87462),n=(a(67294),a(3905));const r={title:"RDB Loader",date:"2022-04-04",sidebar_position:10},i=void 0,s={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/index",title:"RDB Loader",description:'We use the name RDB Loader (from "relational database") for a set of applications that can be used to load Snowplow events into a data warehouse. Use these tools if you want to load into Redshift, Snowflake or Databricks. For other destinations, see here.',source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/index.md",tags:[],version:"current",lastUpdatedAt:1664185094,formattedLastUpdatedAt:"Sep 26, 2022",sidebarPosition:10,frontMatter:{title:"RDB Loader",date:"2022-04-04",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"2.0.0 Upgrade Guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/2-0-0-upgrade-guide/"},next:{title:"Transforming enriched data",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/transforming-enriched-data/"}},l={},d=[{value:"How to pick a transformer",id:"how-to-pick-a-transformer",level:2},{value:"Based on expected data volume",id:"based-on-expected-data-volume",level:3},{value:"Based on the importance of deduplication",id:"based-on-the-importance-of-deduplication",level:3},{value:"How to pick a loader based on the destination",id:"how-to-pick-a-loader-based-on-the-destination",level:2},{value:"How <code>transformer</code> and <code>loader</code> interface with other Snowplow components and each other",id:"how-transformer-and-loader-interface-with-other-snowplow-components-and-each-other",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'We use the name RDB Loader (from "relational database") for a set of applications that can be used to load Snowplow events into a data warehouse. Use these tools if you want to load into ',(0,n.kt)("strong",{parentName:"p"},"Redshift"),", ",(0,n.kt)("strong",{parentName:"p"},"Snowflake")," or ",(0,n.kt)("strong",{parentName:"p"},"Databricks"),". For other destinations, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/"},"here"),"."),(0,n.kt)("p",null,"Loading ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/enrichment-components/"},"enriched")," Snowplow data is a two-step process which consists of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"transforming the enriched tsv-formatted data into a format that can be readily loaded into a target (previously known as 'shredding');"),(0,n.kt)("li",{parentName:"ul"},"loading the transformed data.")),(0,n.kt)("p",null,"Each step is handled by a dedicated application: ",(0,n.kt)("inlineCode",{parentName:"p"},"transformer")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"loader"),". To load Snowplow data with RDB Loader, you'll need to run one of each."),(0,n.kt)("h2",{id:"how-to-pick-a-transformer"},"How to pick a transformer"),(0,n.kt)("p",null,"The transformer app currently comes in two flavours: a Spark job that processes data in batches, and a long-running streaming app."),(0,n.kt)("p",null,"The process of transforming the data is not dependent on the storage target. Which one is best for your use case depends on two factors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"your expected data volume"),(0,n.kt)("li",{parentName:"ul"},"how much importance you place on deduplicating the data before loading it into the data warehouse.")),(0,n.kt)("h3",{id:"based-on-expected-data-volume"},"Based on expected data volume"),(0,n.kt)("p",null,"The Spark transformer (",(0,n.kt)("inlineCode",{parentName:"p"},"snowplow-transformer-batch"),") is the best choice for big volumes, as the work can be split across multiple workers. However, the need to run it on EMR creates some overhead that is not justified for low-volume pipelines."),(0,n.kt)("p",null,"The stream transformer (",(0,n.kt)("inlineCode",{parentName:"p"},"snowplow-transformer-kinesis"),") is a much leaner alternative and suggested for use with low volumes that can be comfortably processed on a single node. Keep in mind that in a multi-node setup you might run into race conditions between the different workers."),(0,n.kt)("p",null,"To make the best choice, consider:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is the underlying infrastructure? For example, a single-node stream transformer will perform differently based on the resources it is given by the machine it runs on."),(0,n.kt)("li",{parentName:"ul"},"What is the frequency for processing data? For example, even in a low-volume pipeline, if you only run the transform job once a day, the accumulated data might be enough to justify the use of Spark.")),(0,n.kt)("h3",{id:"based-on-the-importance-of-deduplication"},"Based on the importance of deduplication"),(0,n.kt)("p",null,"The transformer is also in charge of ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/transforming-enriched-data/deduplication/"},"deduplicating")," the data. Currently, only the Spark transformer can do that."),(0,n.kt)("p",null,"If duplicates are not a concern, or if you are happy to deal with them after the data has been loaded in the warehouse, then pick a transformer based on your expected volume (see above). Otherwise, use the Spark transformer."),(0,n.kt)("h2",{id:"how-to-pick-a-loader-based-on-the-destination"},"How to pick a loader based on the destination"),(0,n.kt)("p",null,"There are different loader applications depending on the storage target. Currently, RDB Loader supports Redshift, Snowflake and Databricks."),(0,n.kt)("p",null,"For loading into ",(0,n.kt)("strong",{parentName:"p"},"Redshift"),", use the ",(0,n.kt)("inlineCode",{parentName:"p"},"snowplow-rdb-loader-redshift")," artefact."),(0,n.kt)("p",null,"For loading into ",(0,n.kt)("strong",{parentName:"p"},"Snowflake"),", use the ",(0,n.kt)("inlineCode",{parentName:"p"},"snowplow-rdb-loader-snowflake")," artefact."),(0,n.kt)("p",null,"For loading into ",(0,n.kt)("strong",{parentName:"p"},"Databricks"),", use the ",(0,n.kt)("inlineCode",{parentName:"p"},"snowplow-rdb-loader-databricks")," artefact."),(0,n.kt)("h2",{id:"how-transformer-and-loader-interface-with-other-snowplow-components-and-each-other"},"How ",(0,n.kt)("inlineCode",{parentName:"h2"},"transformer")," and ",(0,n.kt)("inlineCode",{parentName:"h2"},"loader")," interface with other Snowplow components and each other"),(0,n.kt)("p",null,"The applications communicate through messages."),(0,n.kt)("p",null,"The transformer consumes enriched tsv-formatted Snowplow events from S3 or stream. It writes its output to S3. Once it's finished processing a batch of data, it issues a message with details about the run."),(0,n.kt)("p",null,"The loader consumes a stream of these messages and uses them to determine what data needs to be loaded. It issues the necessary SQL commands to the storage target."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(29078).Z,width:"1342",height:"732"})))}c.isMDXComponent=!0},29078:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/shredder_loader_interface-61ca7dd9fe9a7d56e462774878a60aa5.png"}}]);