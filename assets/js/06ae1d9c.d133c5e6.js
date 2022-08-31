"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[89785],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var l=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},s=Object.keys(t);for(l=0;l<s.length;l++)a=s[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(l=0;l<s.length;l++)a=s[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=l.createContext({}),c=function(t){var e=l.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return l.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,i=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),h=c(a),k=n,u=h["".concat(i,".").concat(k)]||h[k]||p[k]||s;return a?l.createElement(u,o(o({ref:e},d),{},{components:a})):l.createElement(u,o({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,o=new Array(s);o[0]=h;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=t,r.mdxType="string"==typeof t?t:n,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82473:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var l=a(87462),n=(a(67294),a(3905));const s={title:"Snowplow 21.08 North Cascades",date:"2021-08-28",sidebar_position:99980},o=void 0,r={unversionedId:"pipeline-components-and-applications/version-compatibility-matrix/snowplow-21-08-north-cascades/index",id:"pipeline-components-and-applications/version-compatibility-matrix/snowplow-21-08-north-cascades/index",title:"Snowplow 21.08 North Cascades",description:"Recommended Stack",source:"@site/docs/pipeline-components-and-applications/version-compatibility-matrix/snowplow-21-08-north-cascades/index.md",sourceDirName:"pipeline-components-and-applications/version-compatibility-matrix/snowplow-21-08-north-cascades",slug:"/pipeline-components-and-applications/version-compatibility-matrix/snowplow-21-08-north-cascades/",permalink:"/docs/pipeline-components-and-applications/version-compatibility-matrix/snowplow-21-08-north-cascades/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/version-compatibility-matrix/snowplow-21-08-north-cascades/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:99980,frontMatter:{title:"Snowplow 21.08 North Cascades",date:"2021-08-28",sidebar_position:99980},sidebar:"tutorialSidebar",previous:{title:"Snowplow 22.01 Western Ghats",permalink:"/docs/pipeline-components-and-applications/version-compatibility-matrix/snowplow-22-01-western-ghats/"},next:{title:"Snowplow 21.04 Pennine Alps",permalink:"/docs/pipeline-components-and-applications/version-compatibility-matrix/snowplow-21-04-pennine-alps/"}},i={},c=[{value:"Recommended Stack",id:"recommended-stack",level:3},{value:"AWS",id:"aws",level:4},{value:"GCP",id:"gcp",level:4},{value:"Iglu",id:"iglu",level:4},{value:"<strong>Trackers</strong>",id:"trackers",level:4},{value:"<strong>Data Model</strong>ing",id:"data-modeling",level:4},{value:"SQL Runner",id:"sql-runner",level:5},{value:"dbt",id:"dbt",level:5},{value:"<strong>Testing</strong>",id:"testing",level:4},{value:"Analytics SDKs",id:"analytics-sdks",level:4}],d={toc:c};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,l.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"recommended-stack"},"Recommended Stack"),(0,n.kt)("p",null,"Please note, the ",(0,n.kt)("inlineCode",{parentName:"p"},"x")," indicates that we recommend always being on the latest patched version. Components which have been updated since the last release are ",(0,n.kt)("strong",{parentName:"p"},"highlighted"),"."),(0,n.kt)("p",null,"Log4j Advisory"),(0,n.kt)("p",null,"Following the ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/t/advisory-impact-of-log4j-2-cve-2021-44228-on-snowplow-components/6065"},"Log4j advisory in December 2021"),", we have updated a number of recommended component versions within the 21.08 North Cascades release. These are ",(0,n.kt)("strong",{parentName:"p"},"highlighted")," and with an ","*"," next to the component name."),(0,n.kt)("h4",{id:"aws"},"AWS"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("span",{class:"has-inline-color has-luminous-vivid-orange-color"},(0,n.kt)("strong",null,"Stream Collector"),"*")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("span",{class:"has-inline-color has-luminous-vivid-orange-color"},(0,n.kt)("strong",null,"Stream Enrich"),"*")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Dataflow Runner"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Sqs2Kinesis")))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"http://github.com/snowplow/stream-collector/releases"},"v2.4.5")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/stream-enrich/releases"},"v2.0.5")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/dataflow-runner/releases"},"v0.5.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/sqs2kinesis/releases/tag/1.0.0",target:"_blank",rel:"noreferrer noopener"},"v1.0.x"))))),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-luminous-vivid-orange-color"},"S3 Loader*"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"RDB Loader"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Snowflake Loader"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-luminous-vivid-orange-color"},"Elasticsearch",(0,n.kt)("br",null),"Loader*")))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-s3-loader/releases"},"v2.1.3")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-rdb-loader/releases"},"v1.1.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-snowflake-loader/releases"},"v0.8.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-elasticsearch-loader/releases"},"v1.0.5"))))),(0,n.kt)("h4",{id:"gcp"},"GCP"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("span",{class:"has-inline-color has-luminous-vivid-orange-color"},(0,n.kt)("strong",null,"Stream Collector"),"*")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("span",{class:"has-inline-color has-luminous-vivid-orange-color"},(0,n.kt)("strong",null,"Beam Enrich"),"*")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("span",{class:"has-inline-color has-luminous-vivid-orange-color"},(0,n.kt)("strong",null,"Enrich PubSub"),"*")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"GCS Loader"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"BigQuery Loader")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/stream-collector/releases"},"v2.4.5")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/enrich/releases"},"v2.0.5")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/enrich/releases"},"v2.0.5")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-google-cloud-storage-loader/releases"},"v0.3.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/releases"},"v0.6.x"))))),(0,n.kt)("h4",{id:"iglu"},"Iglu"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Iglu Server"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"igluctl"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Iglu Central")))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/iglu-server/releases"},"v0.7.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/igluctl/releases/"},"v0.8.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/iglu-central/releases",target:"_blank",rel:"noreferrer noopener"},"R125"))))),(0,n.kt)("h4",{id:"trackers"},(0,n.kt)("strong",{parentName:"h4"},"Trackers")),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"JS (Web & Node)"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Android"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},(0,n.kt)("strong",null,"iOS"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"React Native"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Java"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},".NET"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Python")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},"v3.1.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-android-tracker/releases"},"v2.2.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-objc-tracker/releases"},"v2.2.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-react-native-tracker/releases"},"v1.0.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-java-tracker/releases"},"v0.9.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-dotnet-tracker/releases"},"v1.1.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-python-tracker/releases"},"v0.9.x"))))),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"AMP"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Unity"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"PHP"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Golang"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Scala"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Ruby"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"C++")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"/docs/collecting-data/collecting-from-own-applications/google-amp-tracker/"},"v1.0.3")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-unity-tracker/releases"},"v0.5.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-php-tracker/releases"},"v0.4.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-golang-tracker/releases"},"v2.4.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-scala-tracker/releases"},"v1.0.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-ruby-tracker/releases"},"v0.6.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-cpp-tracker/releases"},"v0.1.x"))))),(0,n.kt)("h4",{id:"data-modeling"},(0,n.kt)("strong",{parentName:"h4"},"Data Model"),"ing"),(0,n.kt)("h5",{id:"sql-runner"},"SQL Runner"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Redshift web model"),(0,n.kt)("td",null,"BigQuery web model"),(0,n.kt)("td",null,"Snowflake web model")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.2.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.0.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.0.x"))))),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Redshift mobile model"))),(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"BigQuery mobile model"))),(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Snowflake mobile model")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.1.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.1.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.1.x"))))),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"SQL Runner")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/sql-runner/releases"},"v0.9.x"))))),(0,n.kt)("h5",{id:"dbt"},"dbt"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"dbt-snowplow-web"))),(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"dbt-snowplow-utils"))),(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"dbt")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/dbt-snowplow-web/releases",target:"_blank",rel:"noreferrer noopener"},"v0.2.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/dbt-snowplow-utils/releases",target:"_blank",rel:"noreferrer noopener"},"v0.2.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/dbt-labs/dbt/releases"},"v0.19.x"))))),(0,n.kt)("h4",{id:"testing"},(0,n.kt)("strong",{parentName:"h4"},"Testing")),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("strong",null,"Mini")),(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Micro")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-mini/releases"},"v0.12.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-micro/releases"},"v1.2.x"))))),(0,n.kt)("h4",{id:"analytics-sdks"},"Analytics SDKs"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Scala"),(0,n.kt)("td",null,"JavaScript"),(0,n.kt)("td",null,"Python"),(0,n.kt)("td",null,".NET"),(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Golang")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-python-analytics-sdk/releases"},"v2.1.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-js-analytics-sdk/releases"},"v0.3.0")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-python-analytics-sdk/releases"},"v0.2.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-dotnet-analytics-sdk/releases"},"v0.2.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-golang-analytics-sdk/releases",target:"_blank",rel:"noreferrer noopener"},"v0.1.x"))))),(0,n.kt)("p",null,"We hope that the above provides clarity on our recommended stack, however if you have any questions or feedback please reach out to us on\xa0",(0,n.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/"},"discourse"),"."))}p.isMDXComponent=!0}}]);