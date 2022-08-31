"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[20320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Quick Start Installation Guide on GCP",date:"2021-09-21",sidebar_position:100},i=void 0,l={unversionedId:"open-source-quick-start/quick-start-installation-guide-on-gcp/index",id:"open-source-quick-start/quick-start-installation-guide-on-gcp/index",title:"Quick Start Installation Guide on GCP",description:"This guide will take you through how to spin up an open source pipeline using the Snowplow terraform modules. Learn more about Infrastructure as code with Terraform here.",source:"@site/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/index.md",sourceDirName:"open-source-quick-start/quick-start-installation-guide-on-gcp",slug:"/open-source-quick-start/quick-start-installation-guide-on-gcp/",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:100,frontMatter:{title:"Quick Start Installation Guide on GCP",date:"2021-09-21",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Upgrade guide",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/upgrade-guide/"},next:{title:"Send a test event",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/sending-test-events/"}},s={},u=[{value:"Before you begin",id:"before-you-begin",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Select which example you want to use",id:"select-which-example-you-want-to-use",level:3},{value:"<strong>Setting up your Iglu Server</strong>",id:"setting-up-your-iglu-server",level:3},{value:"<strong>Setting up your pipeline</strong>",id:"setting-up-your-pipeline",level:3},{value:"<strong>Now let&#39;s send some events to your pipeline</strong>! &gt;&gt;",id:"now-lets-send-some-events-to-your-pipeline-",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will take you through how to spin up an open source pipeline using the ",(0,r.kt)("a",{parentName:"p",href:"https://registry.terraform.io/namespaces/snowplow-devops"},"Snowplow terraform modules"),". ",(0,r.kt)("em",{parentName:"p"},"Learn more about ",(0,r.kt)("a",{parentName:"em",href:"https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code?in=terraform/aws-get-started"},"Infrastructure as code with Terraform")," here.")),(0,r.kt)("h3",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"Sign up on ",(0,r.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/"},"discourse"),"! If you run into any problems or have any questions, we are here to help."),(0,r.kt)("p",null,"If you are interested in receiving the latest updates from Product & Engineering, such as critical bug fixes, security updates, new features and the rest, then ",(0,r.kt)("a",{parentName:"p",href:"https://go.snowplowanalytics.com/get-snowplow-technology-updates"},"join our mailing list"),"."),(0,r.kt)("p",null,"You can find more details on the infrastructure and applications that ",(0,r.kt)("a",{parentName:"p",href:"/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/summary-of-what-you-have-deployed-gcp/"},"will be deployed in your cloud here"),"."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"Google Cloud SDK")," installed"),(0,r.kt)("li",{parentName:"ul"},"A Google cloud service account",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/docs/authentication/getting-started#setting_the_environment_variable"},"details on using the service account with the Cloud SDK")),(0,r.kt)("li",{parentName:"ul"},"You will need to:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Navigate to your service account on Google Cloud Console"),(0,r.kt)("li",{parentName:"ul"},"Create a new JSON Key and store locally"),(0,r.kt)("li",{parentName:"ul"},"Create the environment variable by running ",(0,r.kt)("inlineCode",{parentName:"li"},'export GOOGLE_APPLICATION_CREDENTIALS="KEY PATH"')," in terminal"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform 1.0.0")," or higher installed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Follow the instructions to make sure the terraform binary is available on your PATH. You can also use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tfutils/tfenv"},"tfenv")," to help manage Terraform installation"))),(0,r.kt)("li",{parentName:"ul"},"Download ",(0,r.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/igluctl-2/"},"the latest igluctl")," which allows you to publish schemas for your ",(0,r.kt)("a",{parentName:"li",href:"/docs/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/#custom-events"},"custom events")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/understanding-tracking-design/predefined-vs-custom-entities/#custom-contexts"},"entities")," to ",(0,r.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/"},"Iglu (your schema registry)")),(0,r.kt)("li",{parentName:"ul"},"Clone the repository at\xa0",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/quickstart-examples"},"https://github.com/snowplow/quickstart-examples"),"\xa0to your localhost",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/snowplow/quickstart-examples.git"))))),(0,r.kt)("h3",{id:"select-which-example-you-want-to-use"},"Select which example you want to use"),(0,r.kt)("p",null,"The Quickstart Examples repository contains two different deployment strategies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secure")," (Recommended for production use cases)")),(0,r.kt)("p",null,"The main difference is around the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/overview"},"VPC")," that the components are deployed within. In ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," you will deploy everything into a public subnet, this is the easiest route if you want to try out Snowplow as you can use ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/vpc#default-network"},"your default network (auto mode VPC"),"). However, to increase the security of your components, it is recommended and best practise to deploy components into private subnets. This ensures they are not available publicly. To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"`secure`")," configuration you will need your ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/vpc#auto-mode-considerations"},"own custom VPC network")," with public and private subnets. You can follow ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/using-vpc#creating_networks"},"this guide")," for steps on how to create networks and subnetworks on GCP."),(0,r.kt)("h3",{id:"setting-up-your-iglu-server"},(0,r.kt)("strong",{parentName:"h3"},"Setting up your Iglu Server")),(0,r.kt)("p",null,"The first step is to set up your ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/"},"Iglu")," Server stack.\xa0 This will mean that you can create and evolve your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/#custom-events"},"custom event & entities"),". Iglu enables you to store the schemas for your events & entities and fetch them as your events are getting processed by your pipeline.\xa0"),(0,r.kt)("p",null,"We will go into more details on why this is very valuable and how to create your custom events & entities later, but for now you will need to set this up first so that your pipeline (specifically the Enrich application and your Postgres loader) can communicate with Iglu.\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Update your input variables")),(0,r.kt)("p",null,"Once you have cloned the ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart-examples")," repository, you will need to navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/gcp/iglu_server")," directory to update the input variables in ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/snowplow/quickstart-examples.git\ncd quickstart-examples/terraform/gcp/iglu_server/default #or secure\nnano terraform.tfvars #or other text editor of your choosing\n")),(0,r.kt)("p",null,"To update your input variables, you'll need to know a couple of things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your IP Address. ",(0,r.kt)("a",{parentName:"li",href:"https://duckduckgo.com/?q=ip+address&t=ffab&ia=answer"},"Help"),"."),(0,r.kt)("li",{parentName:"ul"},"A UUID for your Iglu Servers API Key. ",(0,r.kt)("a",{parentName:"li",href:"https://duckduckgo.com/?t=ffab&q=uuid&ia=answer"},"Help"),"."),(0,r.kt)("li",{parentName:"ul"},"If you have opted for ",(0,r.kt)("inlineCode",{parentName:"li"},"secure"),", the network and subnetworks you will deploy your Iglu Server into.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you are deploying to your default network then set ",(0,r.kt)("inlineCode",{parentName:"li"},"network = default")," and leave subnetworks empty"))),(0,r.kt)("li",{parentName:"ul"},"How to generate a SSH Key.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On most systems you can generate a SSH Key with: ",(0,r.kt)("inlineCode",{parentName:"li"},"ssh-keygen -t rsa -b 4096")),(0,r.kt)("li",{parentName:"ul"},"This will output where you public key is stored, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.ssh/id_rsa.pub")),(0,r.kt)("li",{parentName:"ul"},"You can get the value with ",(0,r.kt)("inlineCode",{parentName:"li"},"cat ~/.ssh/id_rsa.pub"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2 (optional): Update telemetry settings")),(0,r.kt)("p",null,"We want to make this experience as easy & as valuable as possible for open source users new to Snowplow, and so we have added (optional) telemetry. You can find further details on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-devops/terraform-snowplow-telemetry"},"what we track here"),", along with our ",(0,r.kt)("a",{parentName:"p",href:"/docs/open-source-quick-start/what-is-the-quick-start-for-open-source/telemetry-principles/"},"telemetry principles"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you wish to subscribe to our mailing list for updates to these modules or security advisories please set the ",(0,r.kt)("inlineCode",{parentName:"li"},"user_provided_id")," variable to include a valid email address which we can reach you at.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Providing a consistent ",(0,r.kt)("inlineCode",{parentName:"em"},"user_provided_id")," across your modules allows us to tie events together across applications so we can get a better understanding of unique users, and the topology of open source pipelines. This helps us to know how we can improve the experience going forward, so we really appreciate it being set!")))),(0,r.kt)("li",{parentName:"ul"},"To disable telemetry simply set variable ",(0,r.kt)("inlineCode",{parentName:"li"},"telemetry_enabled = false"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3: Run the terraform script to set up your Iglu stack")),(0,r.kt)("p",null,"You can now use terraform to create your Iglu Server stack."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"terraform init\nterraform plan\nterraform apply\n")),(0,r.kt)("p",null,"This will output your ",(0,r.kt)("inlineCode",{parentName:"p"},"iglu_server_dns_name"),". Make a note of this, you'll need it when setting up your pipeline. If you have attached a custom ssl certificate and set up your own DNS records then you don't need this value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4: Seed your Iglu Server from Iglu Central")),(0,r.kt)("p",null,"For your pipeline to work, you'll need to seed your Iglu Server with the standard Snowplow Schemas that are hosted in Iglu Central. To do this you will need ",(0,r.kt)("inlineCode",{parentName:"p"},"igluctl"),", your Iglu Servers DNS and your Iglu API key that you created for your ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),". You should update the ",(0,r.kt)("inlineCode",{parentName:"p"},"igluctl")," command below with the correct values for your Iglu Server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/snowplow/iglu-central\ncd iglu-central\nigluctl static push --public schemas/ http://CHANGE-TO-MY-IGLU-URL.elb.amazonaws.com 00000000-0000-0000-0000-000000000000\n")),(0,r.kt)("h3",{id:"setting-up-your-pipeline"},(0,r.kt)("strong",{parentName:"h3"},"Setting up your pipeline")),(0,r.kt)("p",null,"In this section you will update the input variables for the terraform module, and then run the terraform script to set up your pipeline.\xa0 At the end you will have a working Snowplow pipeline."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Update your input variables")),(0,r.kt)("p",null,"Once you have cloned the ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart-examples")," repository, you will need to navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline")," directory to update the input variables in ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/snowplow/quickstart-examples.git\ncd quickstart-examples/terraform/gcp/pipeline/default #or secure\nnano terraform.tfvars #or other text editor of your choosing\n")),(0,r.kt)("p",null,"To update your input variables, you'll need to know a couple of things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your IP Address. ",(0,r.kt)("a",{parentName:"li",href:"https://duckduckgo.com/?q=ip+address&t=ffab&ia=answer"},"Help"),"."),(0,r.kt)("li",{parentName:"ul"},"Your Iglu Servers DNS from ",(0,r.kt)("a",{parentName:"li",href:"#iglu-setup"},"Setting up your Iglu Server.")),(0,r.kt)("li",{parentName:"ul"},"Your UUID for your Iglu Servers API Key. ",(0,r.kt)("a",{parentName:"li",href:"https://duckduckgo.com/?t=ffab&q=uuid&ia=answer"},"Help"),"."),(0,r.kt)("li",{parentName:"ul"},"If you have opted for ",(0,r.kt)("inlineCode",{parentName:"li"},"secure"),", the network and subnetworks you will deploy your Iglu Server into.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you are deploying to your default network then set ",(0,r.kt)("inlineCode",{parentName:"li"},"network = default")," and leave subnetworks empty."))),(0,r.kt)("li",{parentName:"ul"},"How to generate a SSH Key.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On most systems you can generate a SSH Key with: ",(0,r.kt)("inlineCode",{parentName:"li"},"ssh-keygen -t rsa -b 4096")),(0,r.kt)("li",{parentName:"ul"},"This will output where you public key is stored, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.ssh/id_rsa.pub")),(0,r.kt)("li",{parentName:"ul"},"You can get the value with ",(0,r.kt)("inlineCode",{parentName:"li"},"cat ~/.ssh/id_rsa.pub"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2 (optional): Update telemetry settings")),(0,r.kt)("p",null,"We want to make this experience as easy & as valuable as possible for open source users new to Snowplow, and so we have added (optional) telemetry. You can find further details on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-devops/terraform-snowplow-telemetry"},"what we track here"),", along with our ",(0,r.kt)("a",{parentName:"p",href:"/docs/open-source-quick-start/what-is-the-quick-start-for-open-source/telemetry-principles/"},"telemetry principles"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you wish to subscribe to our mailing list for updates to these modules or security advisories please set the ",(0,r.kt)("inlineCode",{parentName:"li"},"user_provided_id")," variable to include a valid email address which we can reach you at.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Providing a consistent ",(0,r.kt)("inlineCode",{parentName:"em"},"user_provided_id")," across your modules allows us to tie events together across applications so we can get a better understanding of unique users, and the topology of open source pipelines. This helps us to know where to invest our efforts going forward.")))),(0,r.kt)("li",{parentName:"ul"},"To disable telemetry simply set variable ",(0,r.kt)("inlineCode",{parentName:"li"},"telemetry_enabled = false"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3: Run the terraform script to set up your Pipeline stack")),(0,r.kt)("p",null,"You can now use terraform to create your Pipeline stack."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"terraform init\nterraform plan\nterraform apply\n")),(0,r.kt)("p",null,"This will output your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"collector_dns_name"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"db_address"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"db_port"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"db_id"),". Make a note of these, you\u2019ll need it when sending events and connecting to your database. If you have attached a custom ssl certificate and set up your own DNS records then you don\u2019t need your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"collector_dns_name"),"\xa0as you will use your own DNS record to send events from the Snowplow trackers."),(0,r.kt)("h4",{id:"now-lets-send-some-events-to-your-pipeline-"},(0,r.kt)("strong",{parentName:"h4"},"Now let's ",(0,r.kt)("a",{parentName:"strong",href:"/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/sending-test-events/"},"send some events")," to your pipeline"),"! >>"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Do you have any feedback for us?"),(0,r.kt)("p",null,"We are really interested in understanding how you are finding the Quick Start and what we can do to better support you in getting started with our open source. If you have a moment, ",(0,r.kt)("a",{parentName:"p",href:"https://forms.gle/rKEqpFxwTfLjhQzR6"},"let us know via this short survey"),"."))}c.isMDXComponent=!0}}]);