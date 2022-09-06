"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[35133],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(o),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||r;return o?n.createElement(m,l(l({ref:t},p),{},{components:o})):n.createElement(m,l({ref:t},p))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},34633:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const r={title:"Setup Snowplow Open Source on GCP",date:"2020-02-25",sidebar_position:20},l=void 0,i={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/index",title:"Setup Snowplow Open Source on GCP",description:"Quick Start",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:20,frontMatter:{title:"Setup Snowplow Open Source on GCP",date:"2020-02-25",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Setup Data Models",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-data-models/"},next:{title:"Setup the collector (GCP)",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-the-snowplow-collector/"}},c={},s=[{value:"Creating a new project",id:"creating-a-new-project",level:3},{value:"Enabling Billing and appropriate APIs and services",id:"enabling-billing-and-appropriate-apis-and-services",level:3},{value:"Installing Google Cloud SDK locally",id:"installing-google-cloud-sdk-locally",level:3},{value:"Setting up Authentication and Credentials",id:"setting-up-authentication-and-credentials",level:3}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Quick Start"),(0,a.kt)("p",null,"We have built a set of ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/namespaces/snowplow-devops"},"terraform")," modules, which automates the setting up & deployment of the required infrastructure & applications for an operational Snowplow open source pipeline, with just a handful of input variables required on your side.\xa0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/"},"Quick Start Installation Guide on GCP")),(0,a.kt)("p",null,"Setup Snowplow on GCP as per the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the setup guide below"),(0,a.kt)("li",{parentName:"ol"},"Setup the Snowplow collector"),(0,a.kt)("li",{parentName:"ol"},"Setup one or more sources (trackers or webhooks)"),(0,a.kt)("li",{parentName:"ol"},"Setup validation and enrich"),(0,a.kt)("li",{parentName:"ol"},"Setup the BigQuery Loader, to stream your data into BigQuery")),(0,a.kt)("h3",{id:"creating-a-new-project"},"Creating a new project"),(0,a.kt)("p",null,"To get started with Google Cloud, first go to\xa0",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/cloud-resource-manager"},"https://console.cloud.google.com/cloud-resource-manager"),"\xa0and create a new project."),(0,a.kt)("h3",{id:"enabling-billing-and-appropriate-apis-and-services"},"Enabling Billing and appropriate APIs and services"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once you've created your project, you have to enable all the services your project requires."),(0,a.kt)("li",{parentName:"ul"},"For instance, if you need a Google Compute instance (equivalent to an AWS EC2 instance), you'd want to make sure Google Compute Engine API is enabled."),(0,a.kt)("li",{parentName:"ul"},"To enable/disable APIs, and check your API usage, go to\xa0",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/dashboard"},"https://console.cloud.google.com/apis/dashboard"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service/API needed"),(0,a.kt)("th",{parentName:"tr",align:null},"Who needs it"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Google Compute Engine"),(0,a.kt)("td",{parentName:"tr",align:null},"Scala Stream Collector / Stream Enrich")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Google Cloud Pub/Sub"),(0,a.kt)("td",{parentName:"tr",align:null},"Scala Stream Collector / Stream Enrich")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some services require Billing to be enabled. To enable and manage your billing accounts, go to\xa0",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/billing"},"https://console.cloud.google.com/billing"),". A pop-up will show, asking you to select the billing account with which to associate your project. If it doesn't, Billing was enabled by default when you created your project, probably because you have only one active billing account.")),(0,a.kt)("h3",{id:"installing-google-cloud-sdk-locally"},"Installing Google Cloud SDK locally"),(0,a.kt)("p",null,"Google provides a second way for you to interact with its services: the Google Cloud SDK. It allows you to issue a large number of commands to, for example, create Compute instances, publish and subscribe to PubSub topics, create BigQuery tables, authenticate, among others."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Google Compute instances come with the Cloud SDK pre-installed."),(0,a.kt)("li",{parentName:"ul"},"If you intend to run some part of your project locally, you'll need to download and install the appropriate\xa0",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/"},"Cloud SDK package"),"\xa0for your platform.")),(0,a.kt)("h3",{id:"setting-up-authentication-and-credentials"},"Setting up Authentication and Credentials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to\xa0",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/credentials"},"the credentials section of the API manager"),"."),(0,a.kt)("li",{parentName:"ul"},"Make sure your project is selected (in the dropdown menu to the left of the search bar)."),(0,a.kt)("li",{parentName:"ul"},"Here you can manage the credentials for the different roles/accounts associated with your project. For instance, you wouldn't want to authenticate with your personal account on a Compute Instance to which multilple people have access. In that case, it is recommended to use a service account."),(0,a.kt)("li",{parentName:"ul"},"Compute Instances come with a default service account, but you can create more, with different privileges and different purposes.")),(0,a.kt)("p",null,"On this page, you can create credentials for your existing accounts. If you don't have a service account:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Click on Create Credentials > Service account key, then on the service account dropdown selector, pick "New service account".'),(0,a.kt)("li",{parentName:"ul"},"Fill in the Service account name and ID, and pick its role."),(0,a.kt)("li",{parentName:"ul"},"Finally, click Create. This will download a JSON file with the credentials. This is the only occasion in which this file can be downloaded, so save it carefully. You'll need to place this file wherever you need this service account to be able to authenticate.")),(0,a.kt)("p",null,"You can also use the SDK to authenticate (if you want to authenticate with your personal account), doing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud auth login\n")),(0,a.kt)("p",null,"If you have multiple projects, this will default to the most recent one you worked on. If you need to change the current project, do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set project YOUR_PROJECT_ID\n")),(0,a.kt)("p",null,"Every gcloud command can be appended with '--help' for more info. For more detailed information on Service Accounts:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/OAuth2ServiceAccount"},"https://developers.google.com/identity/protocols/OAuth2ServiceAccount")))}u.isMDXComponent=!0}}]);