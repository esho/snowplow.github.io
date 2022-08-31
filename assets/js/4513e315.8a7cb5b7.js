"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[82691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,w=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(w,l(l({ref:t},u),{},{components:n})):i.createElement(w,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={title:"Setup guide for AWS",date:"2020-04-03",sidebar_position:10},l=void 0,r={unversionedId:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-5-0/setup-guide-for-aws/index",id:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-5-0/setup-guide-for-aws/index",title:"Setup guide for AWS",description:"Overview",source:"@site/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-5-0/setup-guide-for-aws/index.md",sourceDirName:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-5-0/setup-guide-for-aws",slug:"/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-5-0/setup-guide-for-aws/",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-5-0/setup-guide-for-aws/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-5-0/setup-guide-for-aws/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:10,frontMatter:{title:"Setup guide for AWS",date:"2020-04-03",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Snowplow Mini 0.5.0",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-5-0/"},next:{title:"Usage Guide",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-5-0/usage-guide/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Security Group",id:"security-group",level:2},{value:"Choose AMI",id:"choose-ami",level:2},{value:"Choose Instance Type",id:"choose-instance-type",level:2},{value:"Configure Instance",id:"configure-instance",level:2},{value:"Add Storage",id:"add-storage",level:2},{value:"Tag Instance",id:"tag-instance",level:2},{value:"Configure Security Group",id:"configure-security-group",level:2},{value:"Review",id:"review",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,o.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,o.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates (because they can)")),(0,o.kt)("p",null,"All setup for Snowplow Mini is done within the AWS Console and will incur small amounts of running costs, depending on the size of the EC2 instance you select."),(0,o.kt)("p",null,"This service is available as an EC2 image within the AWS Community AMIs in the following regions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ap-northeast-1: ami-e129d29e"),(0,o.kt)("li",{parentName:"ul"},"ap-northeast-2: ami-2b812a45"),(0,o.kt)("li",{parentName:"ul"},"ap-south-1: ami-206c424f"),(0,o.kt)("li",{parentName:"ul"},"ap-southeast-1: ami-4029173c"),(0,o.kt)("li",{parentName:"ul"},"ap-southeast-2: ami-49d5072b"),(0,o.kt)("li",{parentName:"ul"},"ca-central-1: ami-7fef6c1b"),(0,o.kt)("li",{parentName:"ul"},"eu-central-1: ami-72e8dd99"),(0,o.kt)("li",{parentName:"ul"},"eu-west-1: ami-eae7dd93"),(0,o.kt)("li",{parentName:"ul"},"eu-west-2: ami-9412fef3"),(0,o.kt)("li",{parentName:"ul"},"sa-east-1: ami-a60e57ca"),(0,o.kt)("li",{parentName:"ul"},"us-east-1: ami-83b7defc"),(0,o.kt)("li",{parentName:"ul"},"us-east-2: ami-135e6176"),(0,o.kt)("li",{parentName:"ul"},"us-west-1: ami-54405a34"),(0,o.kt)("li",{parentName:"ul"},"us-west-2: ami-ab0a70d3")),(0,o.kt)("p",null,"The software stack installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Snowplow Stream Collector 0.11.0"),(0,o.kt)("li",{parentName:"ul"},"Snowplow Stream Enrich NSQ 0.16.1"),(0,o.kt)("li",{parentName:"ul"},"Snowplow Elasticsearch Sink 0.10.1"),(0,o.kt)("li",{parentName:"ul"},"Snowplow Iglu Server 0.2.0"),(0,o.kt)("li",{parentName:"ul"},"Elasticsearch 1.7.5"),(0,o.kt)("li",{parentName:"ul"},"Kibana 4.0.1"),(0,o.kt)("li",{parentName:"ul"},"Postgresql 9.5")),(0,o.kt)("p",null,"Note: All services are configured to start automatically so everything should happily survive restarts/shutdowns."),(0,o.kt)("p",null,"To understand the flow of data please refer to the following diagram:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"snowplow-mini-topology",src:n(9427).Z,width:"1051",height:"686"})),(0,o.kt)("h2",{id:"security-group"},"Security Group"),(0,o.kt)("p",null,"In the EC2 Console UI select\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Security Groups"),"\xa0from the panel on the left."),(0,o.kt)("p",null,"Select the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Create Security Group"),"\xa0button and fill in the name, description and what VPC you want to attach it to."),(0,o.kt)("p",null,"You will then need to add the following InBound rules:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"snowplow-mini-security-group-setup",src:n(32556).Z,width:"1366",height:"768"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (80)"),(0,o.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,o.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (443)"),(0,o.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,o.kt)("li",{parentName:"ul"},"SSH (optional):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (22)"),(0,o.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"{{ YOUR IP HERE }}/32"))))),(0,o.kt)("p",null,"For OutBound you can leave the default to allow everything out."),(0,o.kt)("h2",{id:"choose-ami"},"Choose AMI"),(0,o.kt)("p",null,"In the EC2 Console UI select the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Launch Instance"),"\xa0button then select the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Community AMIs"),"\xa0button. In the search bar enter\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"snowplow-mini-0.5.0"),"\xa0to find the needed AMI and then select it."),(0,o.kt)("h2",{id:"choose-instance-type"},"Choose Instance Type"),(0,o.kt)("p",null,"As we are going to be running several applications in unison we recommend to use a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"t2.medium"),"\xa0or larger."),(0,o.kt)("h2",{id:"configure-instance"},"Configure Instance"),(0,o.kt)("p",null,"If you created your Security Group in a different VPC than the default you will need to select the same VPC in the Network field."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": If you select a custom VPC ensure that you select\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Enable"),"\xa0for the Auto-assign Public IP option."),(0,o.kt)("h2",{id:"add-storage"},"Add Storage"),(0,o.kt)("p",null,"Depending on how long you intend to run Snowplow Mini and how much data you intend to send/store you will need to change the size of the block store accordingly."),(0,o.kt)("p",null,"For basic testing and debugging 8Gb should suffice."),(0,o.kt)("p",null,"We also recommend changing the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Volume Type"),"\xa0to GP2 from Magnetic for a smoother experience."),(0,o.kt)("h2",{id:"tag-instance"},"Tag Instance"),(0,o.kt)("p",null,"Add any tags you like here."),(0,o.kt)("h2",{id:"configure-security-group"},"Configure Security Group"),(0,o.kt)("p",null,"Select the Security Group you created in Step 2."),(0,o.kt)("h2",{id:"review"},"Review"),(0,o.kt)("p",null,"Press the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Launch"),"\xa0button and select an existing key-pair, or create a new one, if you want to be able to SSH onto the box."))}c.isMDXComponent=!0},32556:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/security-groups-setup-8ceb1ae04baae89e38972cd4a38b0bde.png"},9427:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/snowplow-mini-topology-95da73899375d477bfe132b2bcdb0e19.jpg"}}]);