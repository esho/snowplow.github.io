"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[31667],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14441:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Setup guide",date:"2021-03-26",sidebar_position:1e3},i=void 0,o={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/indicative-relay/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/indicative-relay/index",title:"Setup guide",description:"Please follow these steps to setup the Snowplow Indicative Relay on AWS Lambda:",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/indicative-relay/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/indicative-relay",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/indicative-relay/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/indicative-relay/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/indicative-relay/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:1e3,frontMatter:{title:"Setup guide",date:"2021-03-26",sidebar_position:1e3},sidebar:"defaultSidebar",previous:{title:"Indicative",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/"},next:{title:"Technical information",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/technical-information/"}},d={},p=[{value:"1. Create your Indicative account",id:"1-create-your-indicative-account",level:3},{value:"2. Obtain an API key from Indicative",id:"2-obtain-an-api-key-from-indicative",level:3},{value:"3. Create an IAM Role for the Lambda",id:"3-create-an-iam-role-for-the-lambda",level:3},{value:"4. Create the Lambda function",id:"4-create-the-lambda-function",level:3},{value:"5. Observe the events in Indicative",id:"5-observe-the-events-in-indicative",level:2}],s={toc:p};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please follow these steps to setup the Snowplow Indicative Relay on AWS Lambda:"),(0,r.kt)("h3",{id:"1-create-your-indicative-account"},"1","."," Create your Indicative account"),(0,r.kt)("p",null,"If you do not have an Indicative account, go to ",(0,r.kt)("a",{parentName:"p",href:"https://app.indicative.com/#/login/register"},"Indicative")," to create an account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(55386).Z,width:"637",height:"722"})),(0,r.kt)("h3",{id:"2-obtain-an-api-key-from-indicative"},"2","."," Obtain an API key from Indicative"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are a new Indicative user, go to ",(0,r.kt)("a",{parentName:"li",href:"https://app.indicative.com/#/onboarding/snowplow"},"https://app.indicative.com/#/onboarding/snowplow"),". Then select ",(0,r.kt)("em",{parentName:"li"},"Snowplow")," and copy the API Key. Save it, you will need it later")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(51409).Z,width:"654",height:"487"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you want to send data to an existing project, go to ",(0,r.kt)("a",{parentName:"li",href:"https://app.indicative.com/#/account/projects"},"https://app.indicative.com/#/account/projects"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(82917).Z,width:"793",height:"314"})),(0,r.kt)("h3",{id:"3-create-an-iam-role-for-the-lambda"},"3","."," Create an IAM Role for the Lambda"),(0,r.kt)("p",null,"Your AWS Lambda needs to have an Execution Role that allows it to use the Kinesis Stream and CloudWatch. Open the AWS Management Console and follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to IAM Management in the Console, choose ",(0,r.kt)("em",{parentName:"li"},"Roles")," from the sidebar, then click ",(0,r.kt)("em",{parentName:"li"},"Create role"),"."),(0,r.kt)("li",{parentName:"ol"},"As shown in the screenshot below, for the type of trusted entity select ",(0,r.kt)("em",{parentName:"li"},"AWS Service")," and for the service that will use this role choose ",(0,r.kt)("em",{parentName:"li"},"Lambda"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37273).Z,width:"985",height:"492"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Now you need to choose a permission policy for the role. The Lambda needs to have read access to Kinesis and write access to CloudWatch logs - for that we will choose ",(0,r.kt)("em",{parentName:"li"},"AWSLambdaKinesisExecutionRole"),"."),(0,r.kt)("li",{parentName:"ol"},"On the next screen provide a name for the newly created role, then click ",(0,r.kt)("em",{parentName:"li"},"Create role")," to finish the process.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7181).Z,width:"968",height:"135"})),(0,r.kt)("h3",{id:"4-create-the-lambda-function"},"4","."," Create the Lambda function"),(0,r.kt)("p",null,"As with the IAM Role, we will be using the AWS Console to get our Lambda function up and running."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the Console navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"Lambda")," section and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create a function"),". Runtime should be ",(0,r.kt)("em",{parentName:"li"},"Java 8"),". In the ",(0,r.kt)("em",{parentName:"li"},"Role")," dropdown pick ",(0,r.kt)("em",{parentName:"li"},"Choose an existing role"),", then in the dropdown below choose the name of the role you have created in the previous part of the guide. Click ",(0,r.kt)("em",{parentName:"li"},"Create function"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(84600).Z,width:"1808",height:"801"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Jars for the Indicative Relay are hosted by us in S3. To find the S3 url to the appropriate hosted asset for the Snowplow Indicative Relay to provide to your Lambda function, you will need to choose the S3 bucket that is in the same region as your AWS Lambda function. For example, if your Lambda is ",(0,r.kt)("inlineCode",{parentName:"li"},"us-east-1")," region, and the latest version ",(0,r.kt)("inlineCode",{parentName:"li"},"0.4.0"),", then the jar you will provide to your Lambda function will be available at the following URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"s3://snowplow-hosted-assets-us-east-1/relays/indicative/indicative-relay-0.4.0.jar"),".")),(0,r.kt)("p",null,"To find the name of the bucket for your region, consult this table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Region"),(0,r.kt)("th",{parentName:"tr",align:null},"Bucket"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-us-east-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"us-west-1"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-us-west-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-us-west-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sa-east-1"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-sa-east-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eu-central-1"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-eu-central-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-southeast-1"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-ap-southeast-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-southeast-2"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-ap-southeast-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-ap-northeast-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-ap-south-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"us-east-2"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-us-east-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ca-central-1"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-ca-central-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eu-west-2"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-eu-west-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-northeast-2"),(0,r.kt)("td",{parentName:"tr",align:null},"snowplow-hosted-assets-ap-northeast-2")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Although the Lambda has been created, it does not do anything yet. We need to provide the code and configure the function. Take a look at the ",(0,r.kt)("em",{parentName:"li"},"Function code")," box. In the ",(0,r.kt)("em",{parentName:"li"},"Handler")," textbox paste: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.snowplowanalytics.indicative.LambdaHandler::recordHandler"),(0,r.kt)("br",{parentName:"li"}),"From the ",(0,r.kt)("em",{parentName:"li"},"Code entry type")," dropdown pick ",(0,r.kt)("em",{parentName:"li"},"Upload a file from Amazon S3"),". A textbox labeled ",(0,r.kt)("em",{parentName:"li"},"S3 Link URL")," will appear. Paste in the S3 url you found in the previous step.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(52049).Z,width:"1610",height:"264"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Below ",(0,r.kt)("em",{parentName:"li"},"Function code")," settings you will find a section called ",(0,r.kt)("em",{parentName:"li"},"Environment variables"),". You need to use these environment variables to configure some additional settings for the relay, such as the the API key and filters.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3.1 Setting up the API key"),": In the first row, first column (the key) type ",(0,r.kt)("inlineCode",{parentName:"li"},"INDICATIVE_API_KEY"),". In the second column (the value) paste your API Key obtained in the beginning of this guide."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3.2 Setting up filters"),": The relay lets you configure the following filters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"UNUSED","_","EVENTS: events that will not be relayed to Indicative;"),(0,r.kt)("li",{parentName:"ul"},"UNUSED","_","ATOMIC","_","FIELDS: fields of the ",(0,r.kt)("a",{parentName:"li",href:"/docs/understanding-your-pipeline/canonical-event/"},"canonical")," Snowplow event that will not be relayed to Indicative;"),(0,r.kt)("li",{parentName:"ul"},"UNUSED","_","CONTEXTS: contexts whose fields will not be relayed to Indicative.")))))),(0,r.kt)("p",null,"Out of the box, the relay is configured to use the following defaults:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Unused events"),(0,r.kt)("th",{parentName:"tr",align:null},"Unused atomic fields"),(0,r.kt)("th",{parentName:"tr",align:null},"Unused contexts"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app","_","heartbeat"),(0,r.kt)("td",{parentName:"tr",align:null},"etl","_","tstamp"),(0,r.kt)("td",{parentName:"tr",align:null},"application","_","context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app","_","initialized"),(0,r.kt)("td",{parentName:"tr",align:null},"collector","_","tstamp"),(0,r.kt)("td",{parentName:"tr",align:null},"application","_","error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app","_","shutdown"),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","created","_","tstamp"),(0,r.kt)("td",{parentName:"tr",align:null},"duplicate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app","_","warning"),(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"geolocation","_","context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create","_","event"),(0,r.kt)("td",{parentName:"tr",align:null},"txn","_","id"),(0,r.kt)("td",{parentName:"tr",align:null},"instance","_","identity","_","document")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emr","_","job","_","failed"),(0,r.kt)("td",{parentName:"tr",align:null},"name","_","tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"java","_","context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emr","_","job","_","started"),(0,r.kt)("td",{parentName:"tr",align:null},"v","_","tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"jobflow","_","step","_","status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emr","_","job","_","status"),(0,r.kt)("td",{parentName:"tr",align:null},"v","_","collector"),(0,r.kt)("td",{parentName:"tr",align:null},"parent","_","event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emr","_","job","_","succeeded"),(0,r.kt)("td",{parentName:"tr",align:null},"v","_","etl"),(0,r.kt)("td",{parentName:"tr",align:null},"performance","_","timing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incident"),(0,r.kt)("td",{parentName:"tr",align:null},"user","_","fingerprint"),(0,r.kt)("td",{parentName:"tr",align:null},"timing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incident","_","assign"),(0,r.kt)("td",{parentName:"tr",align:null},"geo","_","latitude"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incident","_","notify","_","of","_","close"),(0,r.kt)("td",{parentName:"tr",align:null},"geo","_","longitude"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incident","_","notify","_","user"),(0,r.kt)("td",{parentName:"tr",align:null},"ip","_","isp"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"job","_","update"),(0,r.kt)("td",{parentName:"tr",align:null},"ip","_","organization"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load","_","failed"),(0,r.kt)("td",{parentName:"tr",align:null},"ip","_","domain"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load","_","succeeded"),(0,r.kt)("td",{parentName:"tr",align:null},"ip","_","netspeed"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page","_","ping"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","urlscheme"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s3","_","notification","_","event"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","urlport"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send","_","email"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","urlquery"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send","_","message"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","urlfragment"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage","_","write","_","failed"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","urlscheme"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream","_","write","_","failed"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","urlport"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"task","_","update"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","urlquery"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wd","_","access","_","log"),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","urlfragment"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"pp","_","xoffset","_","min"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"pp","_","xoffset","_","max"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"pp","_","yoffset","_","min"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"pp","_","yoffset","_","max"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","pdf"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","flash"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","java"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","director"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","quicktime"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","realplayer"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","windowsmedia"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","gears"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","features","_","silverlight"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","cookies"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","colordepth"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","viewwidth"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"br","_","viewheight"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","ismobile"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","screenwidth"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","screenheight"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"doc","_","charset"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"doc","_","width"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"doc","_","height"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"tr","_","currency"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"mkt","_","clickid"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"etl","_","tags"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"dvce","_","sent","_","tstamp"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","domain","_","userid"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"refr","_","device","_","tstamp"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"derived","_","tstamp"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","vendor"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","name"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","format"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","version"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"event","_","fingerprint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"true","_","tstamp"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"To change the defaults, you can pass in your own lists of events, atomic fields or contexts to be filtered out. For example:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable key"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNUSED","_","EVENTS"),(0,r.kt)("td",{parentName:"tr",align:null},"page","_","ping,file","_","download")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNUSED","_","ATOMIC","_","FIELDS"),(0,r.kt)("td",{parentName:"tr",align:null},"name","_","tracker,event","_","vendor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNUSED","_","CONTEXTS"),(0,r.kt)("td",{parentName:"tr",align:null},"performance","_","timing,client","_","context")))),(0,r.kt)("p",null,"Similarly to setting up the API key, the first column (key) needs to be set to the specified environment variable name in ALLCAPS. The second column (value) is your own list as a comma-separated string with no spaces."),(0,r.kt)("p",null,"If you only specify the environment variable name but do not provide a list of values, then nothing will be filtered out."),(0,r.kt)("p",null,"If you do not set any of the environment variables, the defaults will be used."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3.3. Setting up the Indicative API URI"),": By default, the relay uses the standard URI. To change that, you can set the ",(0,r.kt)("inlineCode",{parentName:"li"},"INDICATIVE_URI")," environment variable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3.4. Setting up the field whose value should be used as the event name for\xa0",(0,r.kt)("inlineCode",{parentName:"strong"},"struct"),"\xa0events"),": In Snowplow's canonical event model, there's a legacy type of custom structured event, which is known as a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"struct"),"\xa0or\xa0",(0,r.kt)("a",{parentName:"li",href:"/docs/understanding-your-pipeline/canonical-event/#Custom_structured_events"},"'structured event'"),". These are still fairly popular with users, however the value of the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"event_name"),"\xa0field for those events (which is simply\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"event"),") can be confusing. To help group similar events, Snowplow users often designate one of their special fields (most commonly\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"se_action"),") to be the 'event name field'. Since version 0.5.0 by default\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"se_action"),"\xa0is used as the event name field for structured events. But you can override that by setting the Lambda environment variable\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"STRUCTURED_EVENT_NAME_FIELD"),"\xa0to the field whose value you'd rather use, eg\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"se_category"),".")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Scroll down a bit and take a look at the ",(0,r.kt)("em",{parentName:"li"},"Basic settings")," box. There you can set memory and timeout limits for the Lambda. We recommend setting 256 MB of memory or higher (on AWS Lambda the CPU performance scales linearly with the amount of memory). The timeout should be set quite high - we recommend one and half minute - because of so-called ",(0,r.kt)("em",{parentName:"li"},"JVM cold starts"),". The cold starts happen when the Lambda function is invoked for the first time on a new instance and it can take a significant amount of time.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(71505).Z,width:"792",height:"365"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Now let's add our enriched Kinesis stream as an event source for the function. From the list of triggers in the Designer configuration up top, choose Kinesis.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(42414).Z,width:"1595",height:"407"})),(0,r.kt)("p",null,"Take a look at the Configure triggers section which just appeared below. Choose your Kinesis stream that contains Snowplow enriched events. Set the batch size to your liking - 100 is a reasonable setting. Note that this a maximum batch size, the function can be triggered with less records. For the starting position we recommend Trim horizon, which starts processing the stream from an observable start. Click Add button to finish the trigger configuration. Make sure Enable trigger is selected."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Save the changes by clicking the Save button in the top-right part of the page.")),(0,r.kt)("h2",{id:"5-observe-the-events-in-indicative"},"5","."," Observe the events in Indicative"),(0,r.kt)("p",null,"After a while the events should start flowing into Indicative. You can go ",(0,r.kt)("em",{parentName:"p"},"Settings -> Events and Properties")," to see incoming event types, change their labels, descriptions and categories."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(43799).Z,width:"384",height:"761"})))}m.isMDXComponent=!0},55386:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1-16f859fa7191f8f3b1a524738bc95031.png"},51409:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2-446efdbefab261c5042d726e79661c46.png"},82917:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/3-2021a4cd3e3f457f23eb749af9efdd74.png"},37273:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/4-e21d7aa3bd8dabbc0cceb6bb283d589f.png"},7181:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/5-45da52df5624c0cf8a28d88e3e2834a2.png"},84600:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/6-af896c64ea2ac2661907c219c0d0750d.png"},52049:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/7-f52c25be76c163624a2406dbb084d563.png"},71505:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/8-9ef45c313ac32a4144381c10db766542.png"},42414:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/9-df247ccd466f4b52e9aa7de341bbbc14.png"},43799:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/91-fca277873f79bda8f82830889c1f44fe.png"}}]);