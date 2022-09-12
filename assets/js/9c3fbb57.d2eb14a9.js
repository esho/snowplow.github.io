"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[38218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Transforming enriched data",date:"2022-04-04",sidebar_position:10},i=void 0,d={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/index",title:"Transforming enriched data",description:"For a high-level overview of the RDB Loader architecture, of which the transformer is a part, see RDB Loader.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:10,frontMatter:{title:"Transforming enriched data",date:"2022-04-04",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"RDB Loader",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/"},next:{title:"Spark transformer",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer/"}},l={},s=[{value:"Shredded data",id:"shredded-data",level:2},{value:"Wide row format",id:"wide-row-format",level:2}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For a high-level overview of the RDB Loader architecture, of which the transformer is a part, see ",(0,r.kt)("a",{parentName:"em",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/"},"RDB Loader"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"transformer")," application can have two types of output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'shredded' data"),(0,r.kt)("li",{parentName:"ul"},"wide row format.")),(0,r.kt)("p",null,"Both the Spark transformer and the stream transformer can output both types. Which type to pick, depends on the intended storage target."),(0,r.kt)("p",null,"For loading into ",(0,r.kt)("strong",{parentName:"p"},"Redshift"),", use ",(0,r.kt)("a",{parentName:"p",href:"#shredded-data"},"shredded data"),"."),(0,r.kt)("p",null,"For loading into ",(0,r.kt)("strong",{parentName:"p"},"Snowflake"),", use ",(0,r.kt)("a",{parentName:"p",href:"#wide-row-format"},"wide row format"),"."),(0,r.kt)("p",null,"For loading into ",(0,r.kt)("strong",{parentName:"p"},"Databricks"),", use ",(0,r.kt)("a",{parentName:"p",href:"#wide-row-format"},"wide row format"),"."),(0,r.kt)("h2",{id:"shredded-data"},"Shredded data"),(0,r.kt)("p",null,"Shredding is the process of splitting a Snowplow enriched event into several smaller chunks, which can be inserted directly into ",(0,r.kt)("strong",{parentName:"p"},"Redshift")," tables."),(0,r.kt)("p",null,"A Snowplow enriched event is a 131-column tsv line. Each line contains all fields that constitute a specific event, including its id, timestamps, custom and derived contexts, etc."),(0,r.kt)("p",null,"After shredding, the following entities are split out from the original event:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Atomic event.")," A tsv line very similar to the enriched event but not containing JSON fields (",(0,r.kt)("inlineCode",{parentName:"li"},"contexts"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"derived_contexts")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"unstruct_event"),"). The results are stored under a path similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"shredded/good/run=2016-11-26-21-48-42/atomic-events/part-00000")," and are available to load with RDB Loader or directly with Redshift ",(0,r.kt)("inlineCode",{parentName:"li"},"COPY"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Contexts.")," Two JSON fields -- ",(0,r.kt)("inlineCode",{parentName:"li"},"contexts")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"derived_contexts")," -- are extracted from the enriched event. Their original values are validated self-describing JSONs, consisting of a ",(0,r.kt)("inlineCode",{parentName:"li"},"schema")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," property. After shredding, a third property is added, called ",(0,r.kt)("inlineCode",{parentName:"li"},"hierarchy"),". This ",(0,r.kt)("inlineCode",{parentName:"li"},"hierarchy")," contains fields you can use to later join your context SQL tables with the ",(0,r.kt)("inlineCode",{parentName:"li"},"atomic.events")," table. One atomic event can be associated with multiple context entities. The results are stored under a path like ",(0,r.kt)("inlineCode",{parentName:"li"},"shredded/good/run=2016-11-26-21-48-42/shredded-types/vendor=com.acme/name=my_context/format=jsonschema/version=1-0-1/part-00000"),", where the ",(0,r.kt)("inlineCode",{parentName:"li"},"part-*")," files are valid ndJSON files which can be loaded with RDB Loader or directly with Redshift ",(0,r.kt)("inlineCode",{parentName:"li"},"COPY"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Self-describing (unstructured) events.")," Same as the contexts described above but there is a strict one-to-one relation with atomic events. The results are stored under a path with the same structure as for contexts and are ready to be loaded with RDB Loader or directly with Redshift ",(0,r.kt)("inlineCode",{parentName:"li"},"COPY"),".")),(0,r.kt)("p",null,"These files are stored on S3 partitioned by type. When the data is loaded into Redshift, each type goes to a dedicated table."),(0,r.kt)("p",null,"The following diagram illustrates the process:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(98303).Z,width:"680",height:"650"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Shredded data can currently only be loaded into ",(0,r.kt)("strong",{parentName:"p"},"Redshift"),"."),(0,r.kt)("h2",{id:"wide-row-format"},"Wide row format"),(0,r.kt)("p",null,"Unlike shredding, wide row format preserves data as a single line per event, with one column for each different type of contexts and self-describing events."),(0,r.kt)("p",null,"For contexts (aka entities), the type of the column is ",(0,r.kt)("inlineCode",{parentName:"p"},"ARRAY")," and the name looks like ",(0,r.kt)("inlineCode",{parentName:"p"},"contexts_com_acme_my_custom_entity_schema_1"),". Note the plural that matches the ",(0,r.kt)("inlineCode",{parentName:"p"},"ARRAY")," type: in theory each ",(0,r.kt)("inlineCode",{parentName:"p"},"contexts_*")," column may contain multiple entities."),(0,r.kt)("p",null,"For self-describing events, the type of the column is ",(0,r.kt)("inlineCode",{parentName:"p"},"OBJECT")," and the name looks like ",(0,r.kt)("inlineCode",{parentName:"p"},"unstruct_event_com_acme_my_custom_event_schema_1"),". Each line in the table contains only 1 event."),(0,r.kt)("p",null,"The values in these columns have recursive structure with arbitrary depth, which depends on the schema that describes them."),(0,r.kt)("p",null,"The results are stored under a path like ",(0,r.kt)("inlineCode",{parentName:"p"},"output=good/part-00000")," and can be loaded with RDB Loader."),(0,r.kt)("p",null,"There are two options as output file format with wide row transformation: JSON and Parquet"),(0,r.kt)("p",null,"JSON file format can be used for loading into ",(0,r.kt)("strong",{parentName:"p"},"Snowflake")," and Parquet file format can be used for loading into ",(0,r.kt)("strong",{parentName:"p"},"Databricks")))}c.isMDXComponent=!0},98303:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storage-loader-dataflow-96341b5e426da988ea3bc5c07a4949d7.png"}}]);