"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[1599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),w=u(n),d=a,m=w["".concat(l,".").concat(d)]||w[d]||c[d]||s;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=w;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}w.displayName="MDXCreateElement"},14108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const s={title:"Setting up your AWS environment",date:"2020-11-24",sidebar_position:0},r=void 0,i={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/index",title:"Setting up your AWS environment",description:"Set up a sub-account",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:0,frontMatter:{title:"Setting up your AWS environment",date:"2020-11-24",sidebar_position:0},sidebar:"defaultSidebar",previous:{title:"Setup Snowplow Open Source on AWS",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/"},next:{title:"IAM permissions for installing Snowplow",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-installing-snowplow/"}},l={},u=[{value:"Set up a sub-account",id:"set-up-a-sub-account",level:2},{value:"Overview",id:"overview",level:3},{value:"Setting up an AWS sub-account",id:"setting-up-an-aws-sub-account",level:3},{value:"1. Setup Consolidated Billing",id:"1-setup-consolidated-billing",level:4},{value:"2. Create a new account",id:"2-create-a-new-account",level:4},{value:"3. Link the accounts",id:"3-link-the-accounts",level:4},{value:"4. Enable the services that Snowplow requires",id:"4-enable-the-services-that-snowplow-requires",level:4},{value:"Create IAM roles",id:"create-iam-roles",level:2}],p={toc:u};function c(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"set-up-a-sub-account"},"Set up a sub-account"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"We recommend that Snowplow users create an AWS sub-account and sandbox all of their Snowplow operations into that account."),(0,a.kt)("h3",{id:"setting-up-an-aws-sub-account"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/AWS-sub-account-setup#setting-up-an-aws-sub-account"}),"Setting up an AWS sub-account"),(0,a.kt)("h4",{id:"1-setup-consolidated-billing"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/AWS-sub-account-setup#1-setup-consolidated-billing"}),"1","."," Setup Consolidated Billing"),(0,a.kt)("p",null,'As a first step, log into your AWS account and click the "Sign up for Consolidated Billing" button:'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://portal.aws.amazon.com/gp/aws/developer/account?ie=UTF8..."},"https://portal.aws.amazon.com/gp/aws/developer/account?ie=UTF8...")),(0,a.kt)("h4",{id:"2-create-a-new-account"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/AWS-sub-account-setup#2-create-a-new-account"}),"2","."," Create a new account"),(0,a.kt)("p",null,"From a non-logged in browser, you will then want to sign up again to AWS again like this:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://portal.aws.amazon.com/gp/aws/developer/registration/in..."},"https://portal.aws.amazon.com/gp/aws/developer/registration/in...")),(0,a.kt)("p",null,"Call this new account\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"snowplow-acme"),"\xa0(where Acme is your company name). Note the email address you signed up with."),(0,a.kt)("h4",{id:"3-link-the-accounts"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/AWS-sub-account-setup#3-link-the-accounts"}),"3","."," Link the accounts"),(0,a.kt)("p",null,"In your main account, head back to ConsolidatedBilling and click the Send a Request button. Provide the email address for your new sub-account."),(0,a.kt)("p",null,"You should receive an email to the email address for your new sub-account. Copy the activation link and paste it into your browser logged in to the sub-account."),(0,a.kt)("p",null,"Your accounts are now linked! This will allow us to spin up instances, create new S3 buckets etc."),(0,a.kt)("h4",{id:"4-enable-the-services-that-snowplow-requires"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/AWS-sub-account-setup#4-enable-the-services-that-snowplow-requires"}),"4","."," Enable the services that Snowplow requires"),(0,a.kt)("p",null,"Next, you need to enable the services Snowplow will require in the new subaccount."),(0,a.kt)("p",null,"For the Snowplow batch (Spark) flow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CloudFront"),(0,a.kt)("li",{parentName:"ul"},"CloudFormation"),(0,a.kt)("li",{parentName:"ul"},"EC2"),(0,a.kt)("li",{parentName:"ul"},"Elastic Beanstalk"),(0,a.kt)("li",{parentName:"ul"},"Elastic MapReduce"),(0,a.kt)("li",{parentName:"ul"},"S3"),(0,a.kt)("li",{parentName:"ul"},"Redshift")),(0,a.kt)("p",null,"For the Snowplow real-time (Kinesis) flow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As above, plus:"),(0,a.kt)("li",{parentName:"ul"},"Kinesis"),(0,a.kt)("li",{parentName:"ul"},"DynamoDB")),(0,a.kt)("h2",{id:"create-iam-roles"},"Create IAM roles"),(0,a.kt)("p",null,"IAMs gives you fine grained control over the level of permissions each user has in accessing your AWS account. It is wise to limit the permissions to each user to the minimum to enable them to do the job required, so that if those credentials are compromised, the hacker who gains access to them has limited access to your AWS account."),(0,a.kt)("p",null,"You need to setup different groups / users in IAMs at different stages of your Snowplow setup:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(64819).Z,width:"571",height:"689"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-installing-snowplow/"},"A user to setup Snowplow on your AWS account (the\xa0",(0,a.kt)("em",{parentName:"a"},"Snowplow Installer"),")"),". Create credentials for a user to install Snowplow on your AWS account. This user has lots of permissions, as she will need to setup all the relevant collectors, buckets on Amazon S3 and Redshift cluster, if required."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-operating-snowplow/"},"A user to run the Snowplow data pipeline (the\xa0",(0,a.kt)("em",{parentName:"a"},"Snowplow Operator"),")"),".\xa0",(0,a.kt)("em",{parentName:"li"},"Once"),"\xa0your Snowplow stack has been setup, you create a new user with much more limited permissions than those allocated to the user who installed Snowplow, and use these credentials for EmrEtlRunner to manage your data pipeline over time.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disclaimer: Snowplow Analytics Ltd will not be liable for any problems caused by the full or partial implementation of these instructions on your Amazon Web Services account. If in doubt, please consult an independent AWS security expert.")))}c.isMDXComponent=!0},64819:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/setup-flow-cropped-320a1811edd877510c33535b53b31d60.png"}}]);