"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[73638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=a(87462),o=(a(67294),a(3905));const n={title:"Quick Start Installation Guide on AWS",date:"2021-07-08",sidebar_position:100},i=void 0,l={unversionedId:"open-source-quick-start/quick-start-installation-guide-on-aws/index",id:"open-source-quick-start/quick-start-installation-guide-on-aws/index",title:"Quick Start Installation Guide on AWS",description:"This guide will take you through how to spin up an open source pipeline using the Snowplow terraform modules.",source:"@site/docs/open-source-quick-start/quick-start-installation-guide-on-aws/index.md",sourceDirName:"open-source-quick-start/quick-start-installation-guide-on-aws",slug:"/open-source-quick-start/quick-start-installation-guide-on-aws/",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/open-source-quick-start/quick-start-installation-guide-on-aws/index.md",tags:[],version:"current",lastUpdatedAt:1661936223,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:100,frontMatter:{title:"Quick Start Installation Guide on AWS",date:"2021-07-08",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Telemetry Principles",permalink:"/docs/open-source-quick-start/what-is-the-quick-start-for-open-source/telemetry-principles/"},next:{title:"Send a test event",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/send-test-events-to-your-pipeline/"}},s={},u=[{value:"Before you begin",id:"before-you-begin",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Select which example you want to use",id:"select-which-example-you-want-to-use",level:3},{value:"Storage Options",id:"storage-options",level:4},{value:"<strong>Setting up your Iglu Server</strong>",id:"setting-up-your-iglu-server",level:3},{value:"<strong>Setting up your pipeline</strong>",id:"setting-up-your-pipeline",level:3},{value:"Postgres",id:"postgres",level:5},{value:"Snowflake",id:"snowflake",level:5},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Usage",id:"usage",level:4},{value:"Output",id:"output",level:4},{value:"Now send your first events to your pipeline &gt;&gt;",id:"now-send-your-first-events-to-your-pipeline-",level:5}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide will take you through how to spin up an open source pipeline using the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/namespaces/snowplow-devops"},"Snowplow terraform modules"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Learn more about ",(0,o.kt)("a",{parentName:"em",href:"https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code?in=terraform/aws-get-started"},"Infrastructure as code with Terraform")," here.")),(0,o.kt)("h3",{id:"before-you-begin"},"Before you begin"),(0,o.kt)("p",null,"Sign up on ",(0,o.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/"},"discourse"),"! If you run into any problems or have any questions, we are here to help."),(0,o.kt)("p",null,"If you are interested in receiving the latest updates from Product & Engineering, such as critical bug fixes, security updates, new features and the rest, then ",(0,o.kt)("a",{parentName:"p",href:"https://go.snowplowanalytics.com/get-snowplow-technology-updates"},"join our mailing list"),"."),(0,o.kt)("p",null,"You can find more details on the infrastructure and applications that will be deployed in your cloud ",(0,o.kt)("a",{parentName:"p",href:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/summary-of-what-you-have-deployed/"},"here"),"."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"AWS CLI")," version 2 installed",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config"},"Configured")," against a role that has the AdminstratorAccess policy attached",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"AdminstratorAccess allows all actions on all AWS services and shouldn't be used in production"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform 1.0.0")," or higher installed",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Follow the instructions to make sure the terraform binary is available on your PATH. You can also use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tfutils/tfenv"},"tfenv")," to help manage Terraform installation"))),(0,o.kt)("li",{parentName:"ul"},"Download ",(0,o.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/igluctl-2/"},"the latest igluctl")," which allows you to publish schemas for your ",(0,o.kt)("a",{parentName:"li",href:"/docs/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/#custom-events"},"custom events")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/understanding-tracking-design/predefined-vs-custom-entities/#custom-contexts"},"entities")," to ",(0,o.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/"},"Iglu (your schema registry)")),(0,o.kt)("li",{parentName:"ul"},"Clone the repository at\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/quickstart-examples"},"https://github.com/snowplow/quickstart-examples"),"\xa0to your localhost",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/snowplow/quickstart-examples.git"))))),(0,o.kt)("h3",{id:"select-which-example-you-want-to-use"},"Select which example you want to use"),(0,o.kt)("p",null,"The Quickstart Examples repository contains two different deployment strategies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secure")," (Recommended for production use cases)")),(0,o.kt)("p",null,"The main difference is around the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"},"VPC")," that the components are deployed within. In ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," you will deploy everything into a public subnet, this is the easiest route if you want to try out Snowplow as you can use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#view-default-vpc"},"your default VPC"),". However, to increase the security of your components, it is recommended and best practise to deploy components into private subnets. This ensures they are not available publicly. To use the ",(0,o.kt)("inlineCode",{parentName:"p"},"`secure`")," configuration you will need ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html"},"your own VPC with public and private subnets"),". You can follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html"},"this guide")," for steps on how to create VPCs and subnets on AWS."),(0,o.kt)("h4",{id:"storage-options"},"Storage Options"),(0,o.kt)("p",null,"There are also two different storage options for you to select. The steps below will guide you through how to set each up, however you will need to know if you wish to use ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres")," or if you have an external ",(0,o.kt)("inlineCode",{parentName:"p"},"snowflake")," instance you wish to use."),(0,o.kt)("h3",{id:"setting-up-your-iglu-server"},(0,o.kt)("strong",{parentName:"h3"},"Setting up your Iglu Server")),(0,o.kt)("p",null,"The first step is to set up your ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/"},"Iglu")," Server stack.\xa0 This will mean that you can create and evolve your own ",(0,o.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/#custom-events"},"custom event & entities"),". Iglu enables you to store the schemas for your events & entities and fetch them as your events are getting processed by your pipeline.\xa0"),(0,o.kt)("p",null,"We will go into more details on why this is very valuable and how to create your custom events & entities later, but for now you will need to set this up first so that your pipeline (specifically the Enrich application and your Postgres loader) can communicate with Iglu.\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Update your input variables")),(0,o.kt)("p",null,"Once you have cloned the ",(0,o.kt)("inlineCode",{parentName:"p"},"quickstart-examples")," repository, you will need to navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"iglu_server")," directory to update the input variables in ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/snowplow/quickstart-examples.git\ncd quickstart-examples/terraform/aws/iglu_server/default #or secure\nnano terraform.tfvars #or other text editor of your choosing\n")),(0,o.kt)("p",null,"To update your input variables, you'll need to know a couple of things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your IP Address. ",(0,o.kt)("a",{parentName:"li",href:"https://duckduckgo.com/?q=ip+address&t=ffab&ia=answer"},"Help"),"."),(0,o.kt)("li",{parentName:"ul"},"A UUID for your Iglu Servers API Key. ",(0,o.kt)("a",{parentName:"li",href:"https://duckduckgo.com/?t=ffab&q=uuid&ia=answer"},"Help"),"."),(0,o.kt)("li",{parentName:"ul"},"The default VPC you will deploy your Iglu Server into. ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#view-default-vpc"},"Help"),"."),(0,o.kt)("li",{parentName:"ul"},"How to generate a SSH Key.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On most systems you can generate a SSH Key with: ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh-keygen -t rsa -b 4096")),(0,o.kt)("li",{parentName:"ul"},"This will output where you public key is stored, for example: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.ssh/id_rsa.pub")),(0,o.kt)("li",{parentName:"ul"},"You can get the value with ",(0,o.kt)("inlineCode",{parentName:"li"},"cat ~/.ssh/id_rsa.pub"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2 (optional): Update telemetry settings")),(0,o.kt)("p",null,"We want to make this experience as easy & as valuable as possible for open source users new to Snowplow, and so we have added (optional) telemetry. You can find further details on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow-devops/terraform-snowplow-telemetry"},"what we track here"),", along with our ",(0,o.kt)("a",{parentName:"p",href:"/docs/open-source-quick-start/what-is-the-quick-start-for-open-source/telemetry-principles/"},"telemetry principles"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you wish to subscribe to our mailing list for updates to these modules or security advisories please set the ",(0,o.kt)("inlineCode",{parentName:"li"},"user_provided_id")," variable to include a valid email address which we can reach you at.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Providing a consistent ",(0,o.kt)("inlineCode",{parentName:"em"},"user_provided_id")," across your modules allows us to tie events together across applications so we can get a better understanding of unique users, and the topology of open source pipelines. This helps us to know where to invest our efforts going forward.")))),(0,o.kt)("li",{parentName:"ul"},"To disable telemetry simply set variable ",(0,o.kt)("inlineCode",{parentName:"li"},"telemetry_enabled = false"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Run the terraform script to set up your Iglu stack")),(0,o.kt)("p",null,"You can now use terraform to create your Iglu Server stack. You will be asked to select a region, you can find more information about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"},"available regions here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"terraform init\nterraform plan\nterraform apply\n")),(0,o.kt)("p",null,"This will output your ",(0,o.kt)("inlineCode",{parentName:"p"},"iglu_server_dns_name"),". Make a note of this, you'll need it when setting up your pipeline. If you have attached a custom ssl certificate and set up your own DNS records then you don't need this value."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4 (optional): Add your schemas to Iglu Server")),(0,o.kt)("p",null,"You can skip this step for now, however if you want to track custom events using Snowplow, you'll need to add the schemas for your events to your Iglu Server."),(0,o.kt)("p",null,"To do this you will need ",(0,o.kt)("inlineCode",{parentName:"p"},"igluctl"),", your Iglu Servers DNS and your Iglu API key that you created for your ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),". You should update the ",(0,o.kt)("inlineCode",{parentName:"p"},"igluctl")," command below with the correct values for your Iglu Server (assuming your schemas are in a ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas/")," folder local to where you're running ",(0,o.kt)("inlineCode",{parentName:"p"},"icluctl"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"igluctl static push --public schemas/ http://CHANGE-TO-MY-IGLU-URL.elb.amazonaws.com 00000000-0000-0000-0000-000000000000\n")),(0,o.kt)("h3",{id:"setting-up-your-pipeline"},(0,o.kt)("strong",{parentName:"h3"},"Setting up your pipeline")),(0,o.kt)("p",null,"In this section you will update the input variables for the terraform module, and then run the terraform script to set up your pipeline.\xa0 At the end you will have a working Snowplow pipeline that you can send your web, mobile or server side data to."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Update your input variables")),(0,o.kt)("p",null,"Once you have cloned the ",(0,o.kt)("inlineCode",{parentName:"p"},"quickstart-examples")," repository, you will need to navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pipeline")," directory to update the input variables in either ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres.terraform.tfvars")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"snowflake.terraform.tfvars")," according to the chosen destination. How to choose the destination and configure it will be explained in detail in the next section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/snowplow/quickstart-examples.git\ncd quickstart-examples/terraform/aws/pipeline/default #or secure\nnano terraform.tfvars #or other text editor of your choosing\n")),(0,o.kt)("p",null,"To update your input variables, you'll need to know a couple of things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your IP Address. ",(0,o.kt)("a",{parentName:"li",href:"https://duckduckgo.com/?q=ip+address&t=ffab&ia=answer"},"Help"),"."),(0,o.kt)("li",{parentName:"ul"},"Your Iglu Servers DNS from ",(0,o.kt)("a",{parentName:"li",href:"#iglu-setup"},"Setting up your Iglu Server.")),(0,o.kt)("li",{parentName:"ul"},"Your UUID for your Iglu Servers API Key. ",(0,o.kt)("a",{parentName:"li",href:"https://duckduckgo.com/?t=ffab&q=uuid&ia=answer"},"Help"),"."),(0,o.kt)("li",{parentName:"ul"},"The default VPC you will deploy your Pipeline into. ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#view-default-vpc"},"Help"),"."),(0,o.kt)("li",{parentName:"ul"},"How to generate a SSH Key.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On most systems you can generate a SSH Key with: ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh-keygen -t rsa -b 4096")),(0,o.kt)("li",{parentName:"ul"},"This will output where you public key is stored, for example: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.ssh/id_rsa.pub")),(0,o.kt)("li",{parentName:"ul"},"You can get the value with ",(0,o.kt)("inlineCode",{parentName:"li"},"cat ~/.ssh/id_rsa.pub"))))),(0,o.kt)("p",null,"As mentioned above, there are two options for pipeline's destination database. These are Postgres and Snowflake. Your chosen database needs to be specified with ",(0,o.kt)("inlineCode",{parentName:"p"},"pipeline_db")," variable. Allowed values for that variable are ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"snowflake"),". Respective ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," file should be filled in according to the chosen database. Only database specific variables are different in those two tfvars files."),(0,o.kt)("h5",{id:"postgres"},"Postgres"),(0,o.kt)("p",null,"If you choose Postgres as destination, there is no additional step. Respective variables need to be filled according to the desired setup. Necessary resources like Postgres instance, database, table, user will be created by Pipeline Terraform module."),(0,o.kt)("h5",{id:"snowflake"},"Snowflake"),(0,o.kt)("p",null,"If you choose Snowflake as destination, there is one more additional step. Pipeline Terraform module doesn't create necessary Snowflake resources, unlike Postgres resources. It only deploys the Snowflake Loader. Therefore Snowflake resources need to be created before deploying the pipeline. We've created ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/quickstart-examples/tree/snowflake-loader/terraform/aws/snowflake"},"another Terraform module")," for this purpose. You can follow the Optional Step 2 below",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/engineering-announcements/blob/cac7a9c26100fc84e38d19298f63e88a682b22bd/quickstart-snowflake/aws/snowflake-setup.md"})," to learn how to use Snowflake Terraform module. Snowflake Terraform module will give outputs after it is applied. These outputs need to be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"snowflake.terraform.tfvars"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2 (Snowflake only): Run Snowflake terraform module")),(0,o.kt)("p",null,"It is possible to use Snowflake as the destination in AWS pipelines. However necessary resources need to be created in Snowflake before starting the pipeline."),(0,o.kt)("p",null,"For this purpose, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/quickstart-examples/tree/main/terraform/aws/snowflake"},"Snowflake Terraform module")," has been created. This module creates resources including, but not limited to, Snowflake database, table, user, and role. These resources are needed by the Snowflake Loader to operate correctly."),(0,o.kt)("h4",{id:"prerequisites-1"},"Prerequisites"),(0,o.kt)("p",null,"Authentication for the service user is required for the Snowflake Terraform provider - ",(0,o.kt)("a",{parentName:"p",href:"https://quickstarts.snowflake.com/guide/terraforming_snowflake/index.html"},"follow this tutorial")," to obtain Snowflake connection details:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"account"),(0,o.kt)("td",{parentName:"tr",align:null},"The account name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"username"),(0,o.kt)("td",{parentName:"tr",align:null},"A snowflake user to perform resource creation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"region"),(0,o.kt)("td",{parentName:"tr",align:null},"Region for the snowflake deployment.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"role"),(0,o.kt)("td",{parentName:"tr",align:null},"Needs to be ACCOUNTADMIN or similar.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"private","_","key","_","path"),(0,o.kt)("td",{parentName:"tr",align:null},"Path the private key.")))),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fill variables in ",(0,o.kt)("a",{parentName:"li",href:"terraform.tfvars"},"terraform.tfvars")," within the ",(0,o.kt)("inlineCode",{parentName:"li"},"aws/snowflake")," folder. Snowflake connection details found in the ",(0,o.kt)("a",{parentName:"li",href:"#Prerequisites"},"Prerequisites")," section need to be assigned to respective variables in ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform.tfvars"),"."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform init")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform apply"))),(0,o.kt)("h4",{id:"output"},"Output"),(0,o.kt)("p",null,"Snowflake Terraform module will output the name of the created resources. Full list can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/quickstart-examples/blob/snowflake-loader/terraform/aws/snowflake/outputs.tf"},"here"),"."),(0,o.kt)("p",null,"These output values need to be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"aws/pipeline")," modules as a variable when Snowflake is selected as pipeline's destination."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3 (optional): Update telemetry settings")),(0,o.kt)("p",null,"If you wish to subscribe to our mailing list for updates to these modules or security advisories please set the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"user_provided_id"),"\xa0variable to include a valid email address which we can reach you at"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Providing a consistent\xa0",(0,o.kt)("inlineCode",{parentName:"em"},"user_provided_id"),"\xa0across your modules allows us to tie events together across applications so we can get a better understanding of unique users, and the topology of open source pipelines. This helps us to know where to invest our efforts going forward."))),(0,o.kt)("p",null,"To disable telemetry simply set variable\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"telemetry_enabled = false"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4: Run the terraform script to set up your Pipeline stack")),(0,o.kt)("p",null,"You can now use terraform to create your Pipeline stack. You will be asked to select a region, you can find more information about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"},"available regions here"),"."),(0,o.kt)("p",null,"The below example points to the postrgres tfvars file, you should switch this to ","`","snowflake","`"," if you're using Snowflake loading."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"terraform init\nterraform plan -var-file=postgres.terraform.tfvars\nterraform apply -var-file=postgres.terraform.tfvars\n")),(0,o.kt)("p",null,"This will output your ",(0,o.kt)("inlineCode",{parentName:"p"},"collector_dns_name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"db_address"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"db_port")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"db_id"),". Make a note of these, you'll need it when sending events and connecting to your database. If you have attached a custom ssl certificate and set up your own DNS records then you don't need your ",(0,o.kt)("inlineCode",{parentName:"p"},"collector_dns_name")," as you will use your own DNS record to send events from the Snowplow trackers."),(0,o.kt)("p",null,"Terraform errors"),(0,o.kt)("p",null,"For solutions to some common Terraform errors that you might encounter when running ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply"),", see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/open-source-quick-start/quick-start-faqs/#Troubleshooting_Terraform_Errors"},"FAQs section"),"."),(0,o.kt)("h5",{id:"now-send-your-first-events-to-your-pipeline-"},"Now ",(0,o.kt)("a",{parentName:"h5",href:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/send-test-events-to-your-pipeline/"},"send your first events to your pipeline >>")))}d.isMDXComponent=!0}}]);