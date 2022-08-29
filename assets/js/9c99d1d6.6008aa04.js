"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[49330],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const i={title:"Setup guide for AWS",date:"2020-06-17",sidebar_position:-10},r=void 0,o={unversionedId:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-1/setup-guide-for-aws/index",id:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-1/setup-guide-for-aws/index",title:"Setup guide for AWS",description:"Overview",source:"@site/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-1/setup-guide-for-aws/index.md",sourceDirName:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-1/setup-guide-for-aws",slug:"/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-1/setup-guide-for-aws/",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-1/setup-guide-for-aws/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-1/setup-guide-for-aws/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:-10,frontMatter:{title:"Setup guide for AWS",date:"2020-06-17",sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"Snowplow Mini 0.9.1",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-1/"},next:{title:"Setup Guide for GCP",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-1/setup-guide-for-gcp/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"large &amp; xlarge &amp; xxlarge",id:"large--xlarge--xxlarge",level:3},{value:"Security Group",id:"security-group",level:2},{value:"Choose AMI",id:"choose-ami",level:2},{value:"Choose Instance Type",id:"choose-instance-type",level:2},{value:"Configure Instance",id:"configure-instance",level:2},{value:"Add Storage",id:"add-storage",level:2},{value:"Tag Instance",id:"tag-instance",level:2},{value:"Configure Security Group",id:"configure-security-group",level:2},{value:"Review",id:"review",level:2}],d={toc:s};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,l.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,l.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates")),(0,l.kt)("p",null,"All setup for Snowplow Mini is done within the AWS Console and will incur small amounts of running costs, depending on the size of the EC2 instance you select."),(0,l.kt)("p",null,"As of\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"0.6.0"),", we offer 3 different images for 3 new sizes of Snowplow Mini."),(0,l.kt)("p",null,"To decide on which size of Snowplow Mini to choose, read on."),(0,l.kt)("h3",{id:"large--xlarge--xxlarge"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow-mini/wiki/Setup-guide-AWS#large--xlarge--xxlarge"}),"large & xlarge & xxlarge"),(0,l.kt)("p",null,"Until\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"0.6.0"),", Snowplow Mini was being used inside AWS\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"t2.medium"),",\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"n1-standard-1"),"\xa0in GCP, instances and it served well for demonstration purposes. However, we observed that Snowplow Mini started exceeding its initial motivation and machine resources started to become an obstacle, causing issues with Elasticsearch etc. This is why, Mini is available at 3 different sizes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"large"),"\xa0: Same image published so far. Elasticsearch has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"4g"),"\xa0heap size and Snowplow apps has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"0.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"8g"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"xlarge"),"\xa0: Double the large image. Elasticsearch has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"8g"),"\xa0heap size and Snowplow apps has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"1.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"16g"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"xxlarge"),"\xa0: Double the xlarge image. Elasticsearch has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"16g"),"\xa0heap size and Snowplow apps has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"3g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"32g"),".")),(0,l.kt)("p",null,"This service is available as an EC2 image within the AWS Community AMIs in the following regions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"large / t2.large"),(0,l.kt)("th",{parentName:"tr",align:null},"xlarge / t2.xlarge"),(0,l.kt)("th",{parentName:"tr",align:null},"xxlarge / t2.xxlarge"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-00cf573cc2724bae6"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0f1b64b0c51c23101"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-042ac0c0a6969d0ee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0f3f9fa4f0dd84cd9"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0081def3f0fc57043"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0be8d873bc36dbd20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-07c490d37c6b158c7"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-00d74ab1bc20f0091"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0cd35d771332bc819")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-southeast-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-02a6bbc5fd4058068"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0a033bb3b1f2ea7d0"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0d3555a7482a6d0c6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-southeast-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-087c800d389e3eab0"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-03238197d3650b0fa"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-039f6ced297a84a50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ca-central-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-072b0d114bbae9dd9"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0cc30290fdd9eaec0"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-00e7b45147e916149")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-central-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-059c27611337d6901"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-08a31db18eb249565"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-068812aae63898faf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0d33e6b86b05506ed"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0f4c93a7f632c73bc"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-083d64747dc6f3a1f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-west-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-060ae0bda9f345c57"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0ffaa210e6e937178"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-074a7272fd080b34d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sa-east-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0059a4fe1ccd246f6"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-04ee23dd0f7e7af92"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-058f081edc91fdf64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-029b7badd74475588"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-047ac50fe93778f10"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0c959b323e018e00e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-east-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-045ae125bcf876956"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0b6646e4aeeeaf076"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0e3a1d9e1ad5a6b86")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-west-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-006d25ad77c6ab7a7"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-086671a8c3d53ddb2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-05c45161738e4f7b4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0c9617c34092f4560"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-001861a4bab3d0d3d"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0a5140d75585bcd0a")))),(0,l.kt)("p",null,"The software stack installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Snowplow Stream Collector NSQ 1.0.1"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Stream Enrich NSQ 1.1.3"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Elasticsearch Loader 0.12.0"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Iglu Server 0.6.1"),(0,l.kt)("li",{parentName:"ul"},"Elasticsearch-OSS 6.3.1"),(0,l.kt)("li",{parentName:"ul"},"Kibana-OSS 6.3.1"),(0,l.kt)("li",{parentName:"ul"},"Postgresql 9.5"),(0,l.kt)("li",{parentName:"ul"},"NSQ v1.2.0")),(0,l.kt)("p",null,"Note: All services are configured to start automatically so everything should happily survive restarts/shutdowns."),(0,l.kt)("p",null,"To understand the flow of data please refer to the following diagram:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(59764).Z,width:"1051",height:"686"})),(0,l.kt)("h2",{id:"security-group"},"Security Group"),(0,l.kt)("p",null,"In the EC2 Console UI select\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Security Groups"),"\xa0from the panel on the left."),(0,l.kt)("p",null,"Select the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Create Security Group"),"\xa0button and fill in the name, description and what VPC you want to attach it to."),(0,l.kt)("p",null,"You will then need to add the following InBound rules:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"snowplow-mini-security-group-setup",src:a(64255).Z,width:"1366",height:"768"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (80)"),(0,l.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,l.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (443)"),(0,l.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,l.kt)("li",{parentName:"ul"},"SSH (optional):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (22)"),(0,l.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"{{ YOUR IP HERE }}/32"))))),(0,l.kt)("p",null,"For OutBound you can leave the default to allow everything out."),(0,l.kt)("h2",{id:"choose-ami"},"Choose AMI"),(0,l.kt)("p",null,"In the EC2 Console UI select the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Launch Instance"),"\xa0button then select the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Community AMIs"),"\xa0button. In the search bar enter\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"snowplow-mini-0.9.1"),"\xa0to find the needed AMI and then select it."),(0,l.kt)("h2",{id:"choose-instance-type"},"Choose Instance Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"0.9.1"),"\xa0AMI names explicitly specifies which instance type to use."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.9.1-large"),"\xa0needs\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"t2.large")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.9.1-xlarge"),"\xa0needs\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"t2.xlarge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.9.1-xxlarge"),"\xa0needs\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"t2.2xlarge"))),(0,l.kt)("h2",{id:"configure-instance"},"Configure Instance"),(0,l.kt)("p",null,"If you created your Security Group in a different VPC than the default you will need to select the same VPC in the Network field."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": If you select a custom VPC ensure that you select\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Enable"),"\xa0for the Auto-assign Public IP option."),(0,l.kt)("h2",{id:"add-storage"},"Add Storage"),(0,l.kt)("p",null,"Depending on how long you intend to run Snowplow Mini and how much data you intend to send/store you will need to change the size of the block store accordingly."),(0,l.kt)("p",null,"For basic testing and debugging;"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"20-50 Gb should suffice for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"large")),(0,l.kt)("li",{parentName:"ul"},"50-100 Gb should suffice for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"xlarge")),(0,l.kt)("li",{parentName:"ul"},"100-200 Gb should suffice for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"xxlarge"))),(0,l.kt)("p",null,"We also recommend changing the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Volume Type"),"\xa0to GP2 from Magnetic for a smoother experience."),(0,l.kt)("h2",{id:"tag-instance"},"Tag Instance"),(0,l.kt)("p",null,"Add any tags you like here."),(0,l.kt)("h2",{id:"configure-security-group"},"Configure Security Group"),(0,l.kt)("p",null,"Select the Security Group you created in Step 2."),(0,l.kt)("h2",{id:"review"},"Review"),(0,l.kt)("p",null,"Press the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Launch"),"\xa0button and select an existing key-pair, or create a new one, if you want to be able to SSH onto the box."))}u.isMDXComponent=!0},64255:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security-groups-setup-8ceb1ae04baae89e38972cd4a38b0bde.png"},59764:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snowplow-mini-topology-95da73899375d477bfe132b2bcdb0e19.jpg"}}]);