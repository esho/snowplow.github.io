"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[88455],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,g=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return a?o.createElement(g,i(i({ref:t},p),{},{components:a})):o.createElement(g,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={title:"Upgrade guide",date:"2021-09-01",sidebar_position:400},i=void 0,s={unversionedId:"open-source-quick-start/quick-start-installation-guide-on-aws/upgrade-guide/index",id:"open-source-quick-start/quick-start-installation-guide-on-aws/upgrade-guide/index",title:"Upgrade guide",description:"Now that you have successfully spun up a Snowplow pipeline, you might want to upgrade your components when there are updates available.",source:"@site/docs/open-source-quick-start/quick-start-installation-guide-on-aws/upgrade-guide/index.md",sourceDirName:"open-source-quick-start/quick-start-installation-guide-on-aws/upgrade-guide",slug:"/open-source-quick-start/quick-start-installation-guide-on-aws/upgrade-guide/",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/upgrade-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/open-source-quick-start/quick-start-installation-guide-on-aws/upgrade-guide/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:400,frontMatter:{title:"Upgrade guide",date:"2021-09-01",sidebar_position:400},sidebar:"defaultSidebar",previous:{title:"AWS and Snowflake",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/summary-of-what-you-have-deployed/aws-and-snowflake/"},next:{title:"Quick Start Installation Guide on GCP",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/"}},l={},u=[{value:"Updating your repository",id:"updating-your-repository",level:2},{value:"Migrations",id:"migrations",level:2},{value:"22.01 to 22.01-Patch.1",id:"2201-to-2201-patch1",level:3},{value:"Changing the name of the pipeline_db* variables",id:"changing-the-name-of-the-pipeline_db-variables",level:4},{value:"21.04 to 21.08",id:"2104-to-2108",level:3},{value:"Changing some of the column types",id:"changing-some-of-the-column-types",level:4},{value:"Cloudwatch logs are on by default",id:"cloudwatch-logs-are-on-by-default",level:4},{value:"Updating Snowplow components",id:"updating-snowplow-components",level:2},{value:"Iglu Server",id:"iglu-server",level:4},{value:"Pipeline",id:"pipeline",level:4}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Now that you have successfully spun up a Snowplow pipeline, you might want to upgrade your components when there are updates available."),(0,n.kt)("p",null,"The Open Source Quick Start is updated in line with the Snowplow OS Distributions and here we describe the steps you need to take to upgrade between versions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," You may have deviated from the original Quick Start example Terraform files, if this is the case then the concepts described here still apply however you will want to compare the differences between Quick Start releases to see what you need to update."),(0,n.kt)("h2",{id:"updating-your-repository"},"Updating your repository"),(0,n.kt)("p",null,"To upgrade to a new Quick Start version, you first need to update your ",(0,n.kt)("inlineCode",{parentName:"p"},"snowplow/quickstart-examples")," repository to the next release. We recommend upgrading one release at a time to ease the transition rather than trying to leap from an older version to the latest, although this should also be possible with some caution."),(0,n.kt)("p",null,"You'll first need to commit or stash any changes you haven't commited. If you've updated your ",(0,n.kt)("inlineCode",{parentName:"p"},".tfvars")," then you should stash these first (use ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash"),") and once you've updated your repository, you can retrieve your changes from the stash (use ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash pop"),")."),(0,n.kt)("p",null,"To jump to the latest release, you should update your local ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch to latest:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd quickstart-examples\ngit checkout main\ngit pull\n")),(0,n.kt)("p",null,"If you only want to move to a specific version then you should checkout that tag into a new branch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd quickstart-examples\ngit checkout -b 21.08 21.08 // To checkout 21.08\n")),(0,n.kt)("h2",{id:"migrations"},"Migrations"),(0,n.kt)("p",null,"Before updating your stack, you should run any required manual migrations. These are listed below."),(0,n.kt)("p",null,"If the specific upgrade path isn't mentioned below, then you should be able to upgrade without any manual interventation."),(0,n.kt)("p",null,"Clicking the links below will show all the Terraform differences between each version."),(0,n.kt)("h3",{id:"2201-to-2201-patch1"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/quickstart-examples/compare/22.01...22.01-patch.1"},"22.01 to 22.01-Patch.1")),(0,n.kt)("h4",{id:"changing-the-name-of-the-pipeline_db-variables"},"Changing the name of the pipeline","_","db","*"," variables"),(0,n.kt)("p",null,"Since we have two destination database options (",(0,n.kt)("inlineCode",{parentName:"p"},"postgres")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"snowflake"),") starting with this release, we've replaced 'pipeline","_","db' part in the variable names with 'postgres","_","db'. You need to change your variable names accordingly."),(0,n.kt)("p",null,"Also, new 'pipeline","_","db' variable is introduced. This variable specifies the database that will be used as destination in the pipeline. It can be either 'postgres' or 'snowflake'. Since all existing pipelines are using Postgres if they aren't modified, this variable should be set to 'postgres' in those pipelines."),(0,n.kt)("h3",{id:"2104-to-2108"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/quickstart-examples/compare/21.04...21.08"},"21.04 to 21.08")),(0,n.kt)("h4",{id:"changing-some-of-the-column-types"},"Changing some of the column types"),(0,n.kt)("p",null,"The database schemas created with a 21.04 Quick Start do not work well with events enriched with pii pseudoanonymization. Therefore, a Postgres migration is required to change types of some of the columns. You need to apply ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-postgres-loader/blob/master/migrations/0-3-0.sql"},"this migration script")," to your database (You may need to change the ",(0,n.kt)("inlineCode",{parentName:"p"},"public")," schema to ",(0,n.kt)("inlineCode",{parentName:"p"},"atomic")," for this to run successfully with the standard Quick Start installation)."),(0,n.kt)("h4",{id:"cloudwatch-logs-are-on-by-default"},"Cloudwatch logs are on by default"),(0,n.kt)("p",null,"21.08 Quick Start has enabled Cloud Watch logs by default. We recommend you leave this enabled as the cloud watch logs can be beneficial when diagnosing any issues with your pipeline components."),(0,n.kt)("h2",{id:"updating-snowplow-components"},"Updating Snowplow components"),(0,n.kt)("p",null,"If you are using a standard Quick Start deployment, you can follow the steps below to upgrade your Iglu Server and Pipeline. If you have deviated from the example, then you should compare the differences between the Snowplow OS Distributions in the examples and update your usage of the Terraform modules accordingly."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," You will experience some brief downtime when running these upgrades, as there is no redudency in the default deployment. If you want to run these upgrades with no downtime then you will need to extend the Quick Start examples to have redundant Iglu Servers and Snowplow Collectors at a minimum."),(0,n.kt)("h4",{id:"iglu-server"},"Iglu Server"),(0,n.kt)("p",null,"Now you are ready to update your Iglu Server. The example below is for the ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," configuration on ",(0,n.kt)("inlineCode",{parentName:"p"},"aws"),". You should change to the correct folder for your preferred installation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd terraform/aws/iglu_server/default\nterraform init\nterraform plan\n")),(0,n.kt)("p",null,"At this stage, you should see the changes that will be made to your infrastructure. If everything looks ok and there are no errors you can apply the update."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.kt)("h4",{id:"pipeline"},"Pipeline"),(0,n.kt)("p",null,"Now you are ready to update your pipeline components. The example below is for the ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," configuration on ",(0,n.kt)("inlineCode",{parentName:"p"},"aws"),". You should change to the correct folder for your preferred installation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd terraform/aws/pipeline/default\nterraform init\nterraform plan\n")),(0,n.kt)("p",null,"At this stage, you should see the changes that will be made to your infrastructure. If everything looks ok and there are no errors you can apply the update."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Have more questions? Take a look at our ",(0,n.kt)("a",{parentName:"strong",href:"/docs/open-source-quick-start/quick-start-faqs/"},"Quick Start FAQs")," or reach out to us on ",(0,n.kt)("a",{parentName:"strong",href:"https://discourse.snowplow.io/"},"discourse"),"!")))}d.isMDXComponent=!0}}]);