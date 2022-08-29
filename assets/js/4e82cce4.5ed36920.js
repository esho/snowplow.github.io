"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[87625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Custom Integrations",date:"2021-11-24",sidebar_position:30},i=void 0,s={unversionedId:"forwarding-events-to-destinations/forwarding-events/custom-integrations/index",id:"forwarding-events-to-destinations/forwarding-events/custom-integrations/index",title:"Custom Integrations",description:"Snowplow is underpinned by Event Streams, either AWS Kinesis, GCP PubSub or Apache Kafka. Before a Snowplow pipeline loads the events to a Data Warehouse, the enriched events are available on a stream and a custom consumer can be built to consume these events. Below we describe some high level concepts which can be used to consume the enriched event streams.",source:"@site/docs/forwarding-events-to-destinations/forwarding-events/custom-integrations/index.md",sourceDirName:"forwarding-events-to-destinations/forwarding-events/custom-integrations",slug:"/forwarding-events-to-destinations/forwarding-events/custom-integrations/",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/custom-integrations/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/forwarding-events-to-destinations/forwarding-events/custom-integrations/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:30,frontMatter:{title:"Custom Integrations",date:"2021-11-24",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Building an Enriched event relay for GTM SS",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/building-an-enriched-event-relay-for-gtm-ss/"},next:{title:"Reverse ETL",permalink:"/docs/forwarding-events-to-destinations/reverse-etl/"}},l={},c=[{value:"Transforming the Enriched Stream to JSON",id:"transforming-the-enriched-stream-to-json",level:2},{value:"AWS Lambda and GCP Cloud Functions",id:"aws-lambda-and-gcp-cloud-functions",level:2},{value:"Kinesis Client Library (KCL) applications",id:"kinesis-client-library-kcl-applications",level:2},{value:"Pub/Sub client library applications",id:"pubsub-client-library-applications",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow is underpinned by Event Streams, either AWS Kinesis, GCP PubSub or Apache Kafka. Before a Snowplow pipeline loads the events to a Data Warehouse, the enriched events are available on a stream and a custom consumer can be built to consume these events. Below we describe some high level concepts which can be used to consume the enriched event streams."),(0,r.kt)("h2",{id:"transforming-the-enriched-stream-to-json"},"Transforming the Enriched Stream to JSON"),(0,r.kt)("p",null,"The Snowplow events in the Enriched stream are in a tab separated format (TSV) by default. Many downstream consumers will prefer this data in JSON format, and the Snowplow Analytics SDKs have been built to help with this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/modeling-your-data/analytics-sdk/"},"Snowplow Analytics SDKs"))),(0,r.kt)("h2",{id:"aws-lambda-and-gcp-cloud-functions"},"AWS Lambda and GCP Cloud Functions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambdas"),"\xa0and\xa0",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/functions/"},"GCP Cloud Functions"),"\xa0are server-less platforms that allow you to write applications that can be triggered by events from Kinesis and PubSub respectively. By configuring a function to be triggered by an event, it is possible to write applications that take the Snowplow events, perform transformations and other processing, then relay that event into another system."),(0,r.kt)("p",null,"Server-less functions are an easy way to approach building real time consumers of the event stream for those use cases which require fast action or decisioning based on incoming events (For example, Ad Bidding, Paywall Optimization, Real-time reporting, etc)."),(0,r.kt)("p",null,"For an example of what could be achieved with AWS Lambda, take a look at this example of\xa0",(0,r.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/real-time-reporting-using-aws-lambda-and-dynamodb-a-tutorial-to-compute-the-number-of-players-in-a-game-level-on-the-snowplow-event-stream-1-2/1008"},"Real-time reporting using AWS Lambda and DynamoDB"),"."),(0,r.kt)("h2",{id:"kinesis-client-library-kcl-applications"},"Kinesis Client Library (KCL) applications"),(0,r.kt)("p",null,"The KCL (Kinesis Consumer Library) allows for applications to be built to consume from AWS Kinesis. It makes use of AWS DynamoDB to keep track of shards in the data stream, and makes it far easier to consume from Kinesis than would otherwise be possible."),(0,r.kt)("p",null,"There is comprehensive documentation on building Amazon KCL apps within the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/streams/latest/dev/shared-throughput-kcl-consumers.html"},"AWS Documentation"),"."),(0,r.kt)("h2",{id:"pubsub-client-library-applications"},"Pub/Sub client library applications"),(0,r.kt)("p",null,"The Pub/Sub client libraries allow for applications to be built to consume from GCP Pub/Sub. It makes it easy to build against and consume events in Pub/Sub streams, ultimately making it far easier to consume from Pub/Sub than would otherwise be possible."),(0,r.kt)("p",null,"There is comprehensive documentation on building GCP Pub/Sub client library apps within the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/pubsub/docs/reference/libraries"},"GCP Documentation"),"."))}d.isMDXComponent=!0}}]);