"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[93099],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(i),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return i?r.createElement(h,a(a({ref:t},p),{},{components:i})):r.createElement(h,a({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},43422:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const o={title:"Schema Resolution",date:"2021-03-26",sidebar_position:400},a=void 0,l={unversionedId:"pipeline-components-and-applications/iglu/common-architecture/schema-resolution/index",id:"pipeline-components-and-applications/iglu/common-architecture/schema-resolution/index",title:"Schema Resolution",description:"This page describes the Schema resolution algorithm which is standard for all Iglu clients. Currently only\xa0Iglu Scala client\xa0fully follow this algorithm, while other clients may miss some parts, but we're working on making their behaviour consistent.",source:"@site/docs/pipeline-components-and-applications/iglu/common-architecture/schema-resolution/index.md",sourceDirName:"pipeline-components-and-applications/iglu/common-architecture/schema-resolution",slug:"/pipeline-components-and-applications/iglu/common-architecture/schema-resolution/",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/schema-resolution/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/common-architecture/schema-resolution/index.md",tags:[],version:"current",lastUpdatedAt:1663260865,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:400,frontMatter:{title:"Schema Resolution",date:"2021-03-26",sidebar_position:400},sidebar:"defaultSidebar",previous:{title:"Iglu Core",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/iglu-core/"},next:{title:"Igluctl",permalink:"/docs/pipeline-components-and-applications/iglu/igluctl-2/"}},s={},c=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"1.1 Resolver",id:"11-resolver",level:3},{value:"1.2 Registries",id:"12-registries",level:3},{value:"1.3 Cache",id:"13-cache",level:3},{value:"1.3.1 Cache algorithm",id:"131-cache-algorithm",level:4},{value:"1.3.2 Cache TTL",id:"132-cache-ttl",level:4},{value:"2. Lookup algorithm",id:"2-lookup-algorithm",level:2},{value:"3. Registry priority",id:"3-registry-priority",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page describes the Schema resolution algorithm which is standard for all Iglu clients. Currently only\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-scala-client"},"Iglu Scala client"),"\xa0fully follow this algorithm, while other clients may miss some parts, but we're working on making their behaviour consistent."),(0,n.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,n.kt)("p",null,"Before going further it is important to understand basic Iglu client configuration and essential concepts like Resolver, Registry (or Repository), Schema. Here is a quick overview of these concepts, if you're familiar with them you may want to skip this section."),(0,n.kt)("p",null,"Iglu clients are configured via JSON object described in dedicated Schema called\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.snowplowanalytics.iglu/resolver-config/jsonschema"},"resolver-config"),". Here we'll be ussing JSON resolver configuration which is platform independent and most wide-spread."),(0,n.kt)("h3",{id:"11-resolver"},"1.1 Resolver"),(0,n.kt)("p",null,"Resolver is an primary object of Iglu Client library, which contains all logic necessary to fetch requested Schema from appropriate registry (repository) and cache it properly. Resolver has two main properties: cache size (",(0,n.kt)("inlineCode",{parentName:"p"},"cacheSize"),") and list of registries (",(0,n.kt)("inlineCode",{parentName:"p"},"repositories"),")."),(0,n.kt)("h3",{id:"12-registries"},"1.2 Registries"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:"),"\xa0term\xa0",(0,n.kt)("em",{parentName:"p"},"repository"),"\xa0was deprecated.\xa0",(0,n.kt)("em",{parentName:"p"},"Registry"),"\xa0is default term to use when referring to Schema storage. So far, we've not renamed all occurrences, so for now they can be used interchangeable."),(0,n.kt)("p",null,"Each registry in resolver configuration has several values common for all types of registries, such as\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"name"),",\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"vendorPrefixes"),"\xa0and\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"priority"),". Also each registry has type, which is defined inside\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"connection"),"\xa0property. The only one important thing here about type of repository is that each type has its own priority hardcoded inside client library. Below we'll refer to this hard-coded priority by\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"classPriority"),"\xa0and to user-defined priority by\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"instancePriority"),'\xa0Usually, the "safer" registry - the higher\xa0',(0,n.kt)("inlineCode",{parentName:"p"},"classPriority"),"\xa0it has, so local repositories are more preferable than remote."),(0,n.kt)("h3",{id:"13-cache"},"1.3 Cache"),(0,n.kt)("p",null,"All Iglu clients use internal cache to store registry responses. By virtue of it, it is absolutely safe to launch Hadoop/Spark jobs with Iglu client embedded as it will not generate enormous amount of IO calls."),(0,n.kt)("h4",{id:"131-cache-algorithm"},"1.3.1 Cache algorithm"),(0,n.kt)("p",null,"Cache stores not just plain Schemas, but information about responses from each registry. It allows us to make different decisions depending on what exactly went wrong with particular request. Since Schema was successfuly fetched it will be stored until moment it get evicted by\xa0",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_Recently_Used_(LRU)"},"LRU cache"),"\xa0algorithm. This eviction it turn happens only if cache map reached its limit (defined in\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"cacheSize"),") and particular Schema wasn't requested for longer time than all other."),(0,n.kt)("h4",{id:"132-cache-ttl"},"1.3.2 Cache TTL"),(0,n.kt)("p",null,"Since version 0.5.0, Iglu Scala Client supports\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"cacheTtl"),'\xa0property. It is especially useful for real-time pipelines as they can store "failure" for very long time and TTL is a mechanism to ensure that day-long data won\'t go to bad stream. Note however that client also tries to re-resolve successfully fetched schemas, this allows operators to patch (re-upload) schemas without bringing pipeline down (although it is not recommended).'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"cacheTtl"),"\xa0is available since\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.iglu/resolver-config/jsonschema/1-0-2"},(0,n.kt)("inlineCode",{parentName:"a"},"1-0-2")," version"),"\xa0of resolver config."),(0,n.kt)("h2",{id:"2-lookup-algorithm"},"2. Lookup algorithm"),(0,n.kt)("p",null,"Overall, Schema Resolution algorithm can be described by following flowchart:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(80327).Z,width:"472",height:"473"})),(0,n.kt)("p",null,"Few important things to note:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'If registry responded with "NotFound" error - "missing" value will be cached and this repository won\'t be queried again, until this "missing" value not evicted by LRU-algorithm'),(0,n.kt)("li",{parentName:"ul"},'If registry responded with error other than "NotFound", for example "TimeoutError", "NetworkError", "ServerFault" etc - "needToRetry" value will be cached and Resolver will give this registry 3 chances more. After three failed lookups - "missing" value will be cached'),(0,n.kt)("li",{parentName:"ul"},'These "missing" and "needToRetry" values in cache are per-registry, not per-schema, which means if\xa0',(0,n.kt)("inlineCode",{parentName:"li"},"registryA"),'\xa0responded "NotFound" for Schema\xa0',(0,n.kt)("inlineCode",{parentName:"li"},"iglu:com.acme/event/jsonschema/1-0-0"),"\xa0and\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"registryB"),"\xa0responded with TimeoutError - resolver will immediately abandon\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"registryA"),"\xa0and keep try to query\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"registryB"),"\xa0for 3 more times.")),(0,n.kt)("h2",{id:"3-registry-priority"},"3. Registry priority"),(0,n.kt)("p",null,"For each particular Schema lookup, registries will be prioritized. In other words they will be sorted according following input parameters (ordered by their significance):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"vendorPrefix"),"\xa0- Resolver always will look first into those registries which\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"vendorPrefix"),"es matches\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"SchemaKey"),"'s vendor. It\xa0",(0,n.kt)("strong",{parentName:"li"},"does not"),"\xa0mean registries with unmatched\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"vendorPrefix"),"\xa0will be skipped, it means they will be queried last."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"classPriority"),"\xa0- hardcoded in client library value for each type of registry. It means that whatever high priority (low integer value) was seted up in configuration for particular registry - it will be overriden by\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"classPriority"),", so embedded repository will always be checked before HTTP (unless priority influenced by\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"vendorPrefix"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"instancePriority"),"\xa0- user-defined value. Influence only repositories within same\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"classPriority"),".")),(0,n.kt)("p",null,"One important thing to note is that both priorities (",(0,n.kt)("inlineCode",{parentName:"p"},"classPriority"),"\xa0and\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"instancePriority"),") order registries in ascending order. That means lower number means higher priority. Think of it as ascending list of number:\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"[1,2,3,4]"),"\xa0- smaller will be always first."))}u.isMDXComponent=!0},80327:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/schema-resolution-flowchart-156afc49078500123a19aaf9fab7e4e7.png"}}]);