"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[29922],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=o,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},77041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"1.0.0 Upgrade Guide",date:"2021-04-14",sidebar_position:200},i=void 0,s={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-0-0-upgrade-guide/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-0-0-upgrade-guide/index",title:"1.0.0 Upgrade Guide",description:"This is a release adding a new experimental Stream Shredder asset and improving independent Loader architecture, introduced in R35.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-0-0-upgrade-guide/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-0-0-upgrade-guide",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-0-0-upgrade-guide/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-0-0-upgrade-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-0-0-upgrade-guide/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:200,frontMatter:{title:"1.0.0 Upgrade Guide",date:"2021-04-14",sidebar_position:200},sidebar:"defaultSidebar",previous:{title:"1.2.0 Upgrade Guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/"},next:{title:"R35 Upgrade Guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r35-upgrade-guide/"}},d={},l=[{value:"Assets",id:"assets",level:2},{value:"Configuration changes",id:"configuration-changes",level:2},{value:"Manifest",id:"manifest",level:2},{value:"Stream Shredder",id:"stream-shredder",level:2},{value:"Directory structure",id:"directory-structure",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a release adding a new experimental Stream Shredder asset and improving independent Loader architecture, introduced in R35."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/t/snowplow-rdb-loader-1-0-0-released/5017"},"Official announcement.")),(0,o.kt)("p",null,"This is the first release in 1.x branch and no breaking changes will be introduced until 2.x release. If you're upgrading from R34 or earlier it's strictly recommended to follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r35-upgrade-guide/"},"R35 Upgrade Guide")," first."),(0,o.kt)("h2",{id:"assets"},"Assets"),(0,o.kt)("p",null,"RDB Loader, RDB Shredder and Stream RDB Shredder all have 1.o.0 version, despite last one being an experimental asset. RDB Shredder is published on S3:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s3://snowplow-hosted-assets-eu-central-1/4-storage/rdb-shredder/snowplow-rdb-shredder-1.0.1.jar"))),(0,o.kt)("p",null,"RDB Loader and RDB Stream Shredder distributed as Docker images, published on DockerHub:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snowplow/snowplow-rdb-loader:1.0.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snowplow/snowplow-rdb-stream-shredder:1.0.1"))),(0,o.kt)("h2",{id:"configuration-changes"},"Configuration changes"),(0,o.kt)("p",null,"All configuration changes are scoped to ",(0,o.kt)("inlineCode",{parentName:"p"},"shredder")," property."),(0,o.kt)("p",null,"Since we added another type of a shredder, one has to specify the type explicitly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n"shredder": {\n  "type" : "batch",                                  # Was not necessary in R35\n  "input": "s3://snowplow-enriched-archive/path/",   # Remains the same\n  "output": ...                                      # Explained below\n}\n')),(0,o.kt)("p",null,"_"),(0,o.kt)("p",null,"The major API change in 1.0.0 is the new partitioning scheme unifying ",(0,o.kt)("inlineCode",{parentName:"p"},"good")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bad")," output. Whereas previously it was necessary to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"outputBad"),", now there's only ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"shredder.output")," object:"),(0,o.kt)("p",null,"_"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},'"output": {                                  # Was a string in R35\n  "path": "s3://snowplow-shredded-archive/", # Path to shredded output\n  "compression": "GZIP"                      # Output compression, GZIP or NONE'))," ",(0,o.kt)("inlineCode",{parentName:"p"},"}")),(0,o.kt)("p",null,"In Dataflow Runner playbook you have to specify new Main classpath for RDB Shredder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"--class", "com.snowplowanalytics.snowplow.rdbloader.shredder.batch.Main"\n')),(0,o.kt)("h2",{id:"manifest"},"Manifest"),(0,o.kt)("p",null,"The new manifest table has the same name as previous one - ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest"),". In order to avoid a clash, RDB Loader 1.0.0 checks existence of the table every time it starts and if table exists checks if it's new or old one. If table exists and it's legacy - it will be renamed into ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest_legacy")," and can be removed manually later, new table will be created automatically. If table doesn't exist - it will be created."),(0,o.kt)("p",null,"No user actions necessary here."),(0,o.kt)("h2",{id:"stream-shredder"},"Stream Shredder"),(0,o.kt)("p",null,"You only need to choose one Shredder: batch or stream. ",(0,o.kt)("strong",{parentName:"p"},"For production environment we recommend using Batch Shredder.")),(0,o.kt)("p",null,"Stream Shredder is configured within same configuration file as RDB Loader and RDB Batch Shredder, but using following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  "shredder": {       \n    # A batch loader would fail, if stream type encountered\n    "type" : "stream",       \n    # Input stream information         \n    "input": {                \n      # file is another option, but used for debugging only               \n      "type": "kinesis",        \n      # KCL app name - a DynamoDB table will be created with the same name       \n      "appName": "acme-rdb-shredder",       \n      # Kinesis Stream name, must exist     \n      "streamName": "enriched-events",       \n      # Kinesis region       \n      "region": "us-east-1",       \n      # Kinesis position: LATEST or TRIM_HORIZON\n      "position": "LATEST"       \n    },       \n                \n    # A frequency to emit loading finished message - 5,10,15,20,30,60 etc minutes, this is what controls how often your data will be loaded\n    "windowing": "10 minutes",       \n                \n    # Path to shredded archive, same as for batch      \n    "output": {       \n      # Path to shredded output       \n      "path": "s3://bucket/good/",       \n      # Shredder output compression, GZIP or NONE       \n      "compression": "GZIP"       \n    }\n}\n')),(0,o.kt)("h2",{id:"directory-structure"},"Directory structure"),(0,o.kt)("p",null,"There is a major change in shredder output directory structure, on top of what has changed in R35."),(0,o.kt)("p",null,"If you're using a 3rd-party query engine such as Amazon Athena to query shredded data, the new partitioning can break the schema. And thus it's recommended to create a new root for shredded data."),(0,o.kt)("p",null,"Structure of the typical shredded folder now looks like following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"run=2021-03-29-15-40-30/\n\xa0\xa0\xa0 shredding_complete.json\n\xa0\xa0\xa0 output=good/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 vendor=com.snowplowanalytics.snowplow/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 name=atomic/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 format=tsv/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 model=1/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 vendor=com.acme/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 name=link_click/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 format=json/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 model=1/\n\xa0\xa0\xa0 output=bad/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 vendor=com.snowplowanalytics.snowplow/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 name=loader_parsing_error/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 format=json/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 model=1/\n")))}u.isMDXComponent=!0}}]);