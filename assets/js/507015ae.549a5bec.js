"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[22411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={title:"Usage Guide",date:"2020-04-03",sidebar_position:20},l=void 0,r={unversionedId:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-4-0/usage-guide/index",id:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-4-0/usage-guide/index",title:"Usage Guide",description:"This page refers to version 0.4.0 of Snowplow Mini for AWS. It also assumes an already running Snowplow Mini instance.",source:"@site/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-4-0/usage-guide/index.md",sourceDirName:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-4-0/usage-guide",slug:"/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-4-0/usage-guide/",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-4-0/usage-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-4-0/usage-guide/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:20,frontMatter:{title:"Usage Guide",date:"2020-04-03",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Setup guide for AWS",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-4-0/setup-guide-for-aws/"},next:{title:"Control Plane API",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-4-0/control-plane-api/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"First time usage",id:"first-time-usage",level:2},{value:"Connecting to the instance for the first time",id:"connecting-to-the-instance-for-the-first-time",level:3},{value:"Changing the super API key for the local Iglu schema registry",id:"changing-the-super-api-key-for-the-local-iglu-schema-registry",level:3},{value:"Generating a pair of read/write API keys for the local Iglu schema registry",id:"generating-a-pair-of-readwrite-api-keys-for-the-local-iglu-schema-registry",level:3},{value:"Copying your Iglu repository to Snowplow Mini (optional)",id:"copying-your-iglu-repository-to-snowplow-mini-optional",level:3},{value:"Setting up HTTPS (optional)",id:"setting-up-https-optional",level:3},{value:"Sending events to Snowplow Mini",id:"sending-events-to-snowplow-mini",level:2},{value:"Example events",id:"example-events",level:3},{value:"Events from tracker",id:"events-from-tracker",level:3},{value:"Accessing the Elasticsearch API",id:"accessing-the-elasticsearch-api",level:2},{value:"Viewing the data in Kibana",id:"viewing-the-data-in-kibana",level:2},{value:"Index patterns",id:"index-patterns",level:3},{value:"Discover your data",id:"discover-your-data",level:3},{value:"Uploading custom enrichments",id:"uploading-custom-enrichments",level:2},{value:"Please note:",id:"please-note",level:4},{value:"Adding a custom schema",id:"adding-a-custom-schema",level:2},{value:"Adding an external Iglu repository",id:"adding-an-external-iglu-repository",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page refers to version 0.4.0 of Snowplow Mini for AWS. It also assumes an already running Snowplow Mini instance.\xa0"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,o.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,o.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates (because they can)")),(0,o.kt)("h2",{id:"first-time-usage"},"First time usage"),(0,o.kt)("p",null,"This section is dedicated to the steps that need performing when accessing the Snowplow Mini instance for the first time."),(0,o.kt)("h3",{id:"connecting-to-the-instance-for-the-first-time"},"Connecting to the instance for the first time"),(0,o.kt)("p",null,"You can access the Snowplow Mini instance at the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"http://<public dns>/home"),"\xa0address. While accessing Snowplow Mini services, HTTP authentication is required. As a result, you will be prompted for credentials which are\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"USERNAME_PLACEHOLDER"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"PASSWORD_PLACEHOLDER"),"\xa0by default."),(0,o.kt)("p",null,"You\xa0",(0,o.kt)("strong",{parentName:"p"},"should"),'\xa0change these default credentials to something to your liking by going to the Control Plane tab (the last one) and fill the "Change username and password for basic http authentication" form towards the bottom.'),(0,o.kt)("p",null,"You will then be prompted for those new credentials."),(0,o.kt)("h3",{id:"changing-the-super-api-key-for-the-local-iglu-schema-registry"},"Changing the super API key for the local Iglu schema registry"),(0,o.kt)("p",null,"As as second step, you should change the super API key for the Iglu schema registry that is bundled with Snowplow Mini. This API key can be changed via the Control Plane tab."),(0,o.kt)("p",null,"Given that this API key must be a UUID, you will need to generate one by running\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"uuidgen"),"\xa0at the command line, or by using an online UUID generator like\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.uuidgenerator.net/"},"this one"),". Make a note of this UUID, you'll need it to upload your own event and context schemas to Snowplow Mini in the next subsection."),(0,o.kt)("h3",{id:"generating-a-pair-of-readwrite-api-keys-for-the-local-iglu-schema-registry"},"Generating a pair of read/write API keys for the local Iglu schema registry"),(0,o.kt)("p",null,"To add schemas to the Iglu repository bundled with Snowplow Mini, you have to create a dedicated pair of API keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"http://<public dns>/iglu-server")),(0,o.kt)("li",{parentName:"ul"},"Input the super API key set up in step 2.2 in the input box in the top right corner"),(0,o.kt)("li",{parentName:"ul"},"Develop the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"keygen"),"\xa0section"),(0,o.kt)("li",{parentName:"ul"},"Develop the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/auth/keygen"),"\xa0operation"),(0,o.kt)("li",{parentName:"ul"},"Input the appropriate\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"vendor_prefix"),"\xa0for this API key"),(0,o.kt)("li",{parentName:"ul"},"Click\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Try it out!")),(0,o.kt)("li",{parentName:"ul"},"You should receive a JSON similar to:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "read":"bfa90866-ab14-4b92-b6ef-d421fd688b54",\n  "write":"6175aa41-d3a7-4e4f-9fb4-3a170f3c6c16"\n}\n')),(0,o.kt)("h3",{id:"copying-your-iglu-repository-to-snowplow-mini-optional"},"Copying your Iglu repository to Snowplow Mini (optional)"),(0,o.kt)("p",null,"To test and send non-standard Snowplow events such as your own custom-contexts and unstructured events you can load them into the Iglu repository local to the Snowplow Mini instance."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get a local copy of your Iglu repository which contains your schemas. This should be modelled after\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/tree/master/schemas"},"this folder")),(0,o.kt)("li",{parentName:"ol"},"Download the latest Igluctl from Github:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://github.com/snowplow-incubator/igluctl/releases/download/0.2.0/igluctl_0.2.0.zip\nunzip -j igluctl_0.2.0.zip\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the executable with the following input:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The address of the Iglu repository:\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"http://<public dns>/iglu-server")),(0,o.kt)("li",{parentName:"ul"},"The Super API Key you created in step 2.2"),(0,o.kt)("li",{parentName:"ul"},"The path to your schemas For example to load the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"iglu-central"),"\xa0repository into Iglu Server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/path/to/igluctl static push iglu-central/schemas http://<public dns>/iglu-server 980ae3ab-3aba- 4ffe-a3c2-3b2e24e2ffce --public\n")),(0,o.kt)("p",null,"Note: this example assumes the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"iglu-central"),"\xa0repository has been cloned in the same directory as where executable is run."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"After uploading the schemas, you will need to clear the cache with the restart button under the Control Plane tab in the Snowplow Mini dashboard.")),(0,o.kt)("h3",{id:"setting-up-https-optional"},"Setting up HTTPS (optional)"),(0,o.kt)("p",null,"If you want to use HTTPS to connect to Snowplow Mini, you need to submit a domain name via the Control Plane. Make sure that the domain name you submit is redirected to the IP of the server Snowplow Mini is running from."),(0,o.kt)("h2",{id:"sending-events-to-snowplow-mini"},"Sending events to Snowplow Mini"),(0,o.kt)("p",null,"Now that the first time usage steps have been dealt with, you can send some events!"),(0,o.kt)("h3",{id:"example-events"},"Example events"),(0,o.kt)("p",null,"An easy way to quickly send a few test events is to use our example web page."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up the Snowplow Mini UI at:\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"http://<public dns>/home")),(0,o.kt)("li",{parentName:"ol"},"Login with username and password which you choose in step 2.1"),(0,o.kt)("li",{parentName:"ol"},"Select the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Example Events"),"\xa0tab"),(0,o.kt)("li",{parentName:"ol"},"Press the event triggering buttons on the page!")),(0,o.kt)("h3",{id:"events-from-tracker"},"Events from tracker"),(0,o.kt)("p",null,"You can instrument any other Snowplow tracker by specifying the collector URL as the public DNS of the Snowplow Mini instance."),(0,o.kt)("h2",{id:"accessing-the-elasticsearch-api"},"Accessing the Elasticsearch API"),(0,o.kt)("p",null,"Snowplow Mini makes the Elasticsearch HTTP API available at\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"http://<public dns>/elasticsearch"),", you can check it's working by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checking the Elasticsearch API is available:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"curl --user username:password http://<public dns>/elasticsearch")),(0,o.kt)("li",{parentName:"ul"},"You should see a\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK"),"\xa0response"))),(0,o.kt)("li",{parentName:"ul"},"Checking the number of good events we sent in step 3:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"curl --user username:password http://<public dns>/elasticsearch/good/good/_count")),(0,o.kt)("li",{parentName:"ul"},"You should see the appropriate count of sent events")))),(0,o.kt)("h2",{id:"viewing-the-data-in-kibana"},"Viewing the data in Kibana"),(0,o.kt)("p",null,"Data sent to Snowplow Mini will be processed and loaded into Elasticsearch in real time. In turn, it will be made available in Kibana. To view the data in Kibana, navigate in your browser to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"http://<public dns>/kibana")),(0,o.kt)("h3",{id:"index-patterns"},"Index patterns"),(0,o.kt)("p",null,"Snowplow Mini comes with two index patterns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"good"),"\xa0: For all of your good events, indexed on\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"collector_tstamp"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bad"),"\xa0: For all of your bad events, indexed in\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"failure_tstamp"),".")),(0,o.kt)("h3",{id:"discover-your-data"},"Discover your data"),(0,o.kt)("p",null,"Once you've loaded Kibana you should be able to view the data via the discover interface."),(0,o.kt)("p",null,"You can view the number of events recorded over time on the histogram at the top. By selecting one of the bars you can zoom into just those events and can then inspect the individual event data."),(0,o.kt)("h2",{id:"uploading-custom-enrichments"},"Uploading custom enrichments"),(0,o.kt)("p",null,"You can add new custom enrichments via the Control Plane tab. The only thing you have to do is submit the enrichment file which you created according to this\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Configurable-enrichments"},"wiki page"),". If the enrichment relies on additional schemas these should be uploaded to the Iglu repository."),(0,o.kt)("h4",{id:"please-note"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow-mini/wiki/Usage-guide---0.4.0#please-note"}),"Please note:"),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/PII-pseudonymization-enrichment"},"PII Enrichment"),"\xa0is not compatible with this version of Snowplow Mini. A new version which will work with the PII enrichment is expected to be released before the 28th of May 2018."),(0,o.kt)("h2",{id:"adding-a-custom-schema"},"Adding a custom schema"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Input the write API key created in subsection 2.3 in the input box in the top right corner"),(0,o.kt)("li",{parentName:"ul"},"Develop the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"schemas"),"\xa0section"),(0,o.kt)("li",{parentName:"ul"},"Develop the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/schemas/{vendor}/{name}/{schemaFormat}/{version}"),"\xa0operation"),(0,o.kt)("li",{parentName:"ul"},"Fill the vendor, name, format, version and body according to your schema in the form"),(0,o.kt)("li",{parentName:"ul"},"Click\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Try it out!"))),(0,o.kt)("h2",{id:"adding-an-external-iglu-repository"},"Adding an external Iglu repository"),(0,o.kt)("p",null,"If you already have an external Iglu repository available, instead of copying it inside the Iglu repository bundled with the Snowplow Mini instance as shown in 2.4, you can add it directly with the Control Plane's\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Add an external Iglu repository"),"\xa0form. Note that if you're using a static repository hosted on S3, you can omit providing an API key."))}c.isMDXComponent=!0}}]);