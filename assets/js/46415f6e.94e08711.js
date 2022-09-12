"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[48889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Native Integrations",date:"2021-11-24",sidebar_position:0},i=void 0,l={unversionedId:"forwarding-events-to-destinations/forwarding-events/native-integrations/index",id:"forwarding-events-to-destinations/forwarding-events/native-integrations/index",title:"Native Integrations",description:"Snowplow is primarily built for Data Warehouse destinations and supports Redshift, Snowflake and BigQuery via the\xa0Snowplow Loaders. There is also support for S3 and GCS loading, plus the ability to consume directly from Kinesis or PubSub.",source:"@site/docs/forwarding-events-to-destinations/forwarding-events/native-integrations/index.md",sourceDirName:"forwarding-events-to-destinations/forwarding-events/native-integrations",slug:"/forwarding-events-to-destinations/forwarding-events/native-integrations/",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/native-integrations/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/forwarding-events-to-destinations/forwarding-events/native-integrations/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:0,frontMatter:{title:"Native Integrations",date:"2021-11-24",sidebar_position:0},sidebar:"defaultSidebar",previous:{title:"Forwarding Events",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/"},next:{title:"Google Tag Manager Server Side",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/"}},s={},p=[{value:"ElasticSearch (AWS only)",id:"elasticsearch-aws-only",level:2},{value:"Indicative (AWS only)",id:"indicative-aws-only",level:2},{value:"Azure Event Hubs",id:"azure-event-hubs",level:2},{value:"Apache Kafka",id:"apache-kafka",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow is primarily built for Data Warehouse destinations and supports Redshift, Snowflake and BigQuery via the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/"},"Snowplow Loaders"),". There is also support for S3 and GCS loading, plus the ability to consume directly from Kinesis or PubSub."),(0,r.kt)("p",null,"Snowplow also offers a variety of native integrations which directly consume the real time stream (Kinesis/PubSub) of your Snowplow pipeline. These integrations are listed below."),(0,r.kt)("h2",{id:"elasticsearch-aws-only"},"ElasticSearch (AWS only)"),(0,r.kt)("p",null,"The Elasticsearch loader reads enriched data from the enriched Kinesis stream and streams it into Elasticsearch in near real-time."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Open Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Snowplow BDP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/"},"Documentation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://console.snowplowanalytics.com/destinations/catalog"},"Request Setup"))))),(0,r.kt)("h2",{id:"indicative-aws-only"},"Indicative (AWS only)"),(0,r.kt)("p",null,"The Indicative relay reads Snowplow enriched events from a Kinesis Stream and transfers them to Indicative."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Open Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Snowplow BDP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/"},"Documentation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://console.snowplowanalytics.com/destinations/catalog"},"Request Setup"))))),(0,r.kt)("h2",{id:"azure-event-hubs"},"Azure Event Hubs"),(0,r.kt)("p",null,"Event Hubs is a fully managed, real-time data ingestion service that\u2019s simple, trusted and scalable. Snowplow BDP can relay transformed and enriched JSON into Event Hubs."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Open Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Snowplow BDP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://console.snowplowanalytics.com/destinations/catalog"},"Request Setup"))))),(0,r.kt)("h2",{id:"apache-kafka"},"Apache Kafka"),(0,r.kt)("p",null,"Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications. Snowplow BDP can relay transformed and enriched JSON into Apache Kafka."),(0,r.kt)("p",null,"Kafka Relaying of Enriched JSON is available to Snowplow BDP customers. Open Source users can get Kafka support for Enriched events by running their Snowplow pipelines on Apache Kafka."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Open Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Snowplow BDP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2757(Partial)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pipeline-components-and-applications/stream-collector/setup/"},"Collector Setup")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://console.snowplowanalytics.com/destinations/catalog"},"Request Setup"))))))}c.isMDXComponent=!0}}]);