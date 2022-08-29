"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[59917],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return t?i.createElement(d,a(a({ref:n},s),{},{components:t})):i.createElement(d,a({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const o={title:"Configure Stream Enrich",date:"2020-02-26",sidebar_position:20},a=void 0,c={unversionedId:"pipeline-components-and-applications/enrichment-components/stream-enrich/configure-stream-enrich/index",id:"pipeline-components-and-applications/enrichment-components/stream-enrich/configure-stream-enrich/index",title:"Configure Stream Enrich",description:"Basic configuration",source:"@site/docs/pipeline-components-and-applications/enrichment-components/stream-enrich/configure-stream-enrich/index.md",sourceDirName:"pipeline-components-and-applications/enrichment-components/stream-enrich/configure-stream-enrich",slug:"/pipeline-components-and-applications/enrichment-components/stream-enrich/configure-stream-enrich/",permalink:"/docs/pipeline-components-and-applications/enrichment-components/stream-enrich/configure-stream-enrich/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/enrichment-components/stream-enrich/configure-stream-enrich/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:20,frontMatter:{title:"Configure Stream Enrich",date:"2020-02-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"(to be deprecated) Stream Enrich",permalink:"/docs/pipeline-components-and-applications/enrichment-components/stream-enrich/"},next:{title:"Loaders and storage targets",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/"}},l={},p=[{value:"Basic configuration",id:"basic-configuration",level:2},{value:"Template",id:"template",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Resolver configuration",id:"resolver-configuration",level:2},{value:"Enrichments configuration",id:"enrichments-configuration",level:2},{value:"Configuration in DynamoDB",id:"configuration-in-dynamodb",level:2}],s={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,r.kt)("h3",{id:"template"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Configure-Stream-Enrich#template"}),"Template"),(0,r.kt)("p",null,"Template configuration for Kafka can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/blob/3.2.0/config/stream-enrich-kafka.hocon"},"here"),"."),(0,r.kt)("h3",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"You can also now include Snowplow Monitoring in the application. This is setup through an optional section at the bottom of the config. You will need to ammend:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"monitoring.snowplow.collectorUri")," insert your snowplow collector URI here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"monitoring.snowplow.appId")," the app-id used in decorating the events sent.")),(0,r.kt)("p",null,"If you do not wish to include Snowplow Monitoring please remove the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring")," section from the config."),(0,r.kt)("h2",{id:"resolver-configuration"},"Resolver configuration"),(0,r.kt)("p",null,"You will also need a JSON configuration for the Iglu resolver used to look up JSON schemas. A sample configuration is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/blob/master/config/iglu_resolver.json"},"here"),"."),(0,r.kt)("h2",{id:"enrichments-configuration"},"Enrichments configuration"),(0,r.kt)("p",null,"You may wish to use Snowplow's configurable enrichments. To do this, create a directory of enrichment JSONs. For each configurable enrichment you wish to use, the enrichments directory should contain a .json file with a configuration JSON for that enrichment. When you come to run Stream Enrich you can then pass in the path to this directory using the ",(0,r.kt)("em",{parentName:"p"},"-","-enrichments")," parameter."),(0,r.kt)("p",null,"Example configurations could be found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/tree/master/config/enrichments"},"GitHub repository"),"."),(0,r.kt)("p",null,"See the documentation on ",(0,r.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/available-enrichments/"},"configuring enrichments")," for details on the available enrichments."),(0,r.kt)("h2",{id:"configuration-in-dynamodb"},"Configuration in DynamoDB"),(0,r.kt)("p",null,"When using with Kinesis, it\u2019s possible to store the configuration of the resolver and/or enrichments in DynamoDB. In this case\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"dynamodb:"),"\xa0prefix needs to be used in place of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"file:"),"\xa0prefix:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  --resolver dynamodb:eu-west-1/configuration_table/resolver \\\n  --enrichments dynamodb:eu-west-1/configuration_table/enrichment_\n")),(0,r.kt)("p",null,"In this case it\u2019s assumed that the enrichments and resolver are stored in a table named\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"configuration_table"),"\xa0in eu-west-1, that the key for that table is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", that the resolver JSON is stored in an item whose key has value\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"resolver"),", and the enrichments are stored in items whose keys have values beginning with\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"enrichment"),"."),(0,r.kt)("p",null,"In the example above\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"configuration_table"),"\xa0is a table with 2 columns :\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"There must be one line with\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"resolver"),"\xa0as\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\xa0and the content in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"\xa0column."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enrichment_"),"\xa0is the prefix used in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\xa0column to configure an enrichment, and then the content must be put in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"\xa0column. Here is the list of all the enrichments (with\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"enrichment_"),"\xa0prefix) in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\xa0column :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"enrichment","_","api","_","request","_","enrichment","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","http","_","header","_","extractor","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","iab","_","spiders","_","and","_","robots","_","enrichment"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","pii","_","enrichment","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","sql","_","query","_","enrichment","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","weather","_","enrichment","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","yauaa","_","enrichment","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","anon","_","ip"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","campaign","_","attribution"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","cookie","_","extractor","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","currency","_","conversion","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","event","_","fingerprint","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","ip","_","lookups"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","javascript","_","script","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","referer","_","parser"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","ua","_","parser","_","config"),(0,r.kt)("li",{parentName:"ul"},"enrichment","_","user","_","agent","_","utils","_","config")))}m.isMDXComponent=!0}}]);