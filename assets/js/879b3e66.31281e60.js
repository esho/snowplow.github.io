"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[77075],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>h});var t=i(67294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(i),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return i?t.createElement(m,r(r({ref:n},c),{},{components:i})):t.createElement(m,r({ref:n},c))}));function h(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var l=2;l<a;l++)r[l]=i[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},46338:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var t=i(87462),o=(i(67294),i(3905));const a={title:"Piinguin",date:"2021-03-26",sidebar_position:1e3},r=void 0,p={unversionedId:"pipeline-components-and-applications/piinguin/index",id:"pipeline-components-and-applications/piinguin/index",title:"Piinguin",description:"The piinguin and snowplow-piinguin-relay are intended to complete the PII handling functionality provided by snowplow.",source:"@site/docs/pipeline-components-and-applications/piinguin/index.md",sourceDirName:"pipeline-components-and-applications/piinguin",slug:"/pipeline-components-and-applications/piinguin/",permalink:"/docs/pipeline-components-and-applications/piinguin/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/piinguin/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:1e3,frontMatter:{title:"Piinguin",date:"2021-03-26",sidebar_position:1e3},sidebar:"defaultSidebar",previous:{title:"Control Plane API",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-4-0/control-plane-api/"},next:{title:"Setting up Piinguin",permalink:"/docs/pipeline-components-and-applications/piinguin/setting-up-piinguin/"}},s={},l=[{value:"Background",id:"background",level:2},{value:"Aims",id:"aims",level:2},{value:"Overview",id:"overview",level:2},{value:"Background",id:"background-1",level:2},{value:"Processing steps in order",id:"processing-steps-in-order",level:2},{value:"Piignuin Relay",id:"piignuin-relay",level:3},{value:"Piinguin Server",id:"piinguin-server",level:3},{value:"Piinguin client(s)",id:"piinguin-clients",level:3}],c={toc:l};function u(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The piinguin and snowplow-piinguin-relay are intended to complete the PII handling functionality provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow"},"snowplow"),"."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Following the release of ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2018/05/10/snowplow-r106-acropolis"},"R106")," which adds the capability to emit a stream of PII events, Snowplow wanted to continue leading the pack in terms of responsible PII management."),(0,o.kt)("p",null,"If you want to learn more about PII and how they are managed during Snowplow PII enrichment, you can read more in the release post for ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2018/02/27/snowplow-r100-epidaurus-released-with-pii-pseudonymization-support/"},"R100")," and ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2018/05/10/snowplow-r106-acropolis"},"R106"),"."),(0,o.kt)("h2",{id:"aims"},"Aims"),(0,o.kt)("p",null,"Piinguin aims to complete the PII management system which starts with the PII enrichment in snowplow, by providing a service which stores PII and helps control access by requiring that anyone who reads PII data, provides a justification in the form of a ",(0,o.kt)("a",{parentName:"p",href:"https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/lawful-basis-for-processing/#ib3"},"lawful basis for processing PII")," specified under ",(0,o.kt)("a",{parentName:"p",href:"https://www.eugdpr.org/"},"GDPR"),"."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The two components sit beside snowplow ans store and serve PII data. Here is a component overview:"),(0,o.kt)("p",null,"The piinguin and snowplow-piinguin-relay are intended to complete the PII handling functionality provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow"},"snowplow"),"."),(0,o.kt)("h2",{id:"background-1"},"Background"),(0,o.kt)("p",null,"Following the release of ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2018/05/10/snowplow-r106-acropolis"},"R106")," which adds the capability to emit a stream of PII events, Snowplow wanted to continue leading the pack in terms of responsible PII management."),(0,o.kt)("p",null,"If you want to learn more about PII and how they are managed during Snowplow PII enrichment, you can read more in the release post for ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2018/02/27/snowplow-r100-epidaurus-released-with-pii-pseudonymization-support/"},"R100")," and ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2018/05/10/snowplow-r106-acropolis"},"R106"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(29184).Z,width:"1451",height:"966"})),(0,o.kt)("h2",{id:"processing-steps-in-order"},"Processing steps in order"),(0,o.kt)("h3",{id:"piignuin-relay"},"Piignuin Relay"),(0,o.kt)("p",null,"The first component that receives that data out of the stream is the Piinguin Relay. That is simply an AWS Lambda function which uses the piinguin-client artifact from piinguin to send data to piinguin. You can read more details about this project in ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/piinguin/piinguin-technical-documentation/"},"piinguin technical documentation")," and detailed instructions on how to install and run it under ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/piinguin/setting-up-piinguin/"},"setting up piinguin"),"."),(0,o.kt)("h3",{id:"piinguin-server"},"Piinguin Server"),(0,o.kt)("p",null,"The second component is the piinguin-server itself which has to be in the same secure VPC as the Lambda function. In addition it needs to have access to an AWS Dynamo DB table to store the data. You can read more details about this project in ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/piinguin/piinguin-technical-documentation/"},"piinguin technical documentation")," and detailed instructions on how to install and run it under ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/piinguin/setting-up-piinguin/"},"setting up piinguin"),"."),(0,o.kt)("h3",{id:"piinguin-clients"},"Piinguin client(s)"),(0,o.kt)("p",null,'There is also another component named "piinguin-client" this refers to your own code in which you have made use of either the piinguin-client artifact or another implementation based on the GRPC protocol provided in piinguin. More detail on that under ',(0,o.kt)("a",{parentName:"p",href:"http://piin"},"piinguin technical documentation"),"."))}u.isMDXComponent=!0},29184:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/piinguin-diagram-dfa78e60579bcc41d37b6f76dd3ef599.png"}}]);