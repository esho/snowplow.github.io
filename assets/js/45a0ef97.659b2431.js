"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[77293],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>p});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=l.createContext({}),s=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=s(t.components);return l.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),k=s(n),p=i,f=k["".concat(u,".").concat(p)]||k[p]||d[p]||o;return n?l.createElement(f,r(r({ref:e},c),{},{components:n})):l.createElement(f,r({ref:e},c))}));function p(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=k;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:i,r[1]=a;for(var s=2;s<o;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},72780:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const o={title:"sqs2kinesis configuration reference",date:"2021-07-16",sidebar_position:0},r=void 0,a={unversionedId:"pipeline-components-and-applications/sqs2kinesis/sqs2kinesis-configuration-reference/index",id:"pipeline-components-and-applications/sqs2kinesis/sqs2kinesis-configuration-reference/index",title:"sqs2kinesis configuration reference",description:"This is a complete list of the options that can be configured in the sqs2kinesis HOCON config file. The\xa0example configs in github\xa0show how to prepare an input file.",source:"@site/docs/pipeline-components-and-applications/sqs2kinesis/sqs2kinesis-configuration-reference/index.md",sourceDirName:"pipeline-components-and-applications/sqs2kinesis/sqs2kinesis-configuration-reference",slug:"/pipeline-components-and-applications/sqs2kinesis/sqs2kinesis-configuration-reference/",permalink:"/docs/pipeline-components-and-applications/sqs2kinesis/sqs2kinesis-configuration-reference/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/sqs2kinesis/sqs2kinesis-configuration-reference/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:0,frontMatter:{title:"sqs2kinesis configuration reference",date:"2021-07-16",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Sqs2kinesis",permalink:"/docs/pipeline-components-and-applications/sqs2kinesis/"},next:{title:"Enrichment",permalink:"/docs/pipeline-components-and-applications/enrichment-components/"}},u={},s=[{value:"Common options",id:"common-options",level:4},{value:"Advanced options",id:"advanced-options",level:4}],c={toc:s};function d(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a complete list of the options that can be configured in the sqs2kinesis HOCON config file. The\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/sqs2kinesis/tree/master/config"},"example configs in github"),"\xa0show how to prepare an input file."),(0,i.kt)("h4",{id:"common-options"},"Common options"),(0,i.kt)("table",{class:"has-fixed-layout"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"input.queue")),(0,i.kt)("td",null,"Required. The url of the SQS topic from which to read collector payloads.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.good.streamName")),(0,i.kt)("td",null,"Required. The output kinesis stream in which to write successfully parsed messages.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.bad.streamName")),(0,i.kt)("td",null,"Required. The output kinesis stream in which to write messages that could not be base64-decoded.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"monitoring.sentry.dsn")),(0,i.kt)("td",null,"Optional, for tracking uncaught run time exceptions")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"monitoring.health.host")),(0,i.kt)("td",null,"Optional, default ",(0,i.kt)("code",null,"0.0.0.0"),", sets the host name the health check endpoint listens on")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"monitoring.health.port")),(0,i.kt)("td",null,"Optional, default 8080, sets the port the health check endpoint listens on")))),(0,i.kt)("h4",{id:"advanced-options"},"Advanced options"),(0,i.kt)("p",null,"We believe these advanced options are set to sensible defaults, and hopefully you won't need to ever change them."),(0,i.kt)("table",{class:"has-fixed-layout"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"input.kinesisKey")),(0,i.kt)("td",null,"Default ",(0,i.kt)("code",null,"kinesisKey")," (for compatibility with snowplow collector). Sets the sqs message attribute that will be used to set the kinesis partition key")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"input.minBackoff")),(0,i.kt)("td",null,"Default 500 millis. Minimum backoff before retrying after sqs failure.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"input.maxBackoff")),(0,i.kt)("td",null,"Default 5 seconds. Maximum backoff before retrying after sqs failure.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"input.randomFactor")),(0,i.kt)("td",null,"Default 0.1. Random factor when calculating backoff time after sqs failure.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"input.maxRetries")),(0,i.kt)("td",null,"Default 5. Maximum number of retries after failure to ack (delete) a sqs message.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"input.maxRetriesWithin")),(0,i.kt)("td",null,"Default 1 minute. Duration for which ",(0,i.kt)("code",null,"input.maxRetries")," are counted, before exiting with failure.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.good.maxKinesisBytesPerRequest")),(0,i.kt)("td",null,"Default 5000000 (5 MB). The kinesis PutRecordsRequest will not exceed this size.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.good.maxKinesisBatch")),(0,i.kt)("td",null,"Default 500. The kinesis PutRecordsRequest will have no greater than this many records")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.good.keepAlive")),(0,i.kt)("td",null,"Default 1 second. Maximum time to wait before sending an incomplete PutRecordsRequst")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.good.minBackoff")),(0,i.kt)("td",null,"Default 500 millis. Minimum backoff before retrying after failure")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.good.maxBackoff")),(0,i.kt)("td",null,"Default 1 second. Maximum backoff before retrying after failure")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.good.randomFactor")),(0,i.kt)("td",null,"Default 0.1. Random factor used when calculating backoff time after failure.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.good.maxRetries")),(0,i.kt)("td",null,"Default 5. Maximum number of retries after failure.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.bad.maxKinesisBytesPerRequest")),(0,i.kt)("td",null,"Default 5000000 (5 MB). The kinesis PutRecordsRequest will not exceed this size.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.bad.maxKinesisBatch")),(0,i.kt)("td",null,"Default 500. The kinesis PutRecordsRequest will have no greater than this many records")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.bad.keepAlive")),(0,i.kt)("td",null,"Default 1 second. Maximum time to wait before sending an incomplete PutRecordsRequst")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.bad.minBackoff")),(0,i.kt)("td",null,"Default 500 millis. Minimum backoff before retrying after failure")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.bad.maxBackoff")),(0,i.kt)("td",null,"Default 1 second. Maximum backoff before retrying after failure")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.bad.randomFactor")),(0,i.kt)("td",null,"Default 0.1. Random factor used when calculating backoff time after failure.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"output.bad.maxRetries")),(0,i.kt)("td",null,"Default 5. Maximum number of retries after failure.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"akka.*"),(0,i.kt)("td",null,"Set ",(0,i.kt)("a",{href:"https://doc.akka.io/docs/akka/current/general/stream/stream-configuration.html"},"any standard akka streams option"),". For example, ",(0,i.kt)("code",null,"akka.loglevel = INFO"))))))}d.isMDXComponent=!0}}]);