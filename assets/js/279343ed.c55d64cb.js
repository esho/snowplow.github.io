"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[50625],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,w=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return o?n.createElement(w,i(i({ref:t},c),{},{components:o})):n.createElement(w,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},15501:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={title:"Setup Snowplow BDP on AWS",date:"2020-01-30",sidebar_position:10,coverImage:"aws_logo_0.png"},i=void 0,s={unversionedId:"getting-started-with-snowplow-bdp/aws-setup-guide/index",id:"getting-started-with-snowplow-bdp/aws-setup-guide/index",title:"Setup Snowplow BDP on AWS",description:"To setup Snowplow, simply follow the 'Getting Started' steps in the Snowplow BDP Console. You will receive an account as part of your onboarding.",source:"@site/docs/getting-started-with-snowplow-bdp/aws-setup-guide/index.md",sourceDirName:"getting-started-with-snowplow-bdp/aws-setup-guide",slug:"/getting-started-with-snowplow-bdp/aws-setup-guide/",permalink:"/docs/getting-started-with-snowplow-bdp/aws-setup-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-with-snowplow-bdp/aws-setup-guide/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:10,frontMatter:{title:"Setup Snowplow BDP on AWS",date:"2020-01-30",sidebar_position:10,coverImage:"aws_logo_0.png"},sidebar:"defaultSidebar",previous:{title:"Feature Comparison",permalink:"/docs/getting-started-with-snowplow-bdp/what-is-snowplow-bdp/feature-comparison/"},next:{title:"Setup Snowplow BDP on GCP",permalink:"/docs/getting-started-with-snowplow-bdp/setup-guide-gcp/"}},l={},p=[{value:"What are the steps",id:"what-are-the-steps",level:2},{value:"What will I need",id:"what-will-i-need",level:2},{value:"Preparing your AWS sub-account",id:"preparing-your-aws-sub-account",level:2},{value:"Create sub-account",id:"create-sub-account",level:3},{value:"Set up Role and IAM permissions",id:"set-up-role-and-iam-permissions",level:3},{value:"Policy List",id:"policy-list",level:3},{value:"Set up Role and IAM Permissions with <strong>CloudFormation</strong>",id:"set-up-role-and-iam-permissions-with-cloudformation",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To setup Snowplow, simply follow the ",(0,a.kt)("a",{parentName:"p",href:"https://console.snowplowanalytics.com/getting-started"},"'Getting Started' steps in the Snowplow BDP Console"),". You will receive an account as part of your onboarding."),(0,a.kt)("h2",{id:"what-are-the-steps"},"What are the steps"),(0,a.kt)("p",null,"The first setup steps are designed to get your infrastructure in place and have you sending data as quickly as possible. The initial steps include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"providing the right cloud environment for Snowplow to be installed"),(0,a.kt)("li",{parentName:"ul"},"setting up your first sandbox environment"),(0,a.kt)("li",{parentName:"ul"},"selecting which warehouse, if any, you want to load your data into")),(0,a.kt)("p",null,"Completing the forms for these initial steps should take you around 30 minutes."),(0,a.kt)("h2",{id:"what-will-i-need"},"What will I need"),(0,a.kt)("p",null,"To setup your cloud environment as required you will need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"to be able to set up a sub-account and appropriate permissions on AWS"),(0,a.kt)("li",{parentName:"ul"},"to know which AWS region you\u2019d like us to install your Snowplow pipeline into"),(0,a.kt)("li",{parentName:"ul"},"to know whether or not you want\xa0VPC peering, and for which /21 or /22 CIDR range (note: ","[VPC peering is an additional bolt-on for basecamp and ascent tiers]","(this is a bolt-on for basecamp / ascent tiers))")),(0,a.kt)("p",null,"We often find our point of contact requires support from their DevOps or Networking colleagues to complete the cloud setup step; in Snowplow BDP Console you can ",(0,a.kt)("a",{parentName:"p",href:"/docs/using-the-snowplow-console/managing-users/"},"easily create accounts for colleagues")," who can complete this step for you."),(0,a.kt)("h2",{id:"preparing-your-aws-sub-account"},"Preparing your AWS sub-account"),(0,a.kt)("p",null,"These instructions are also provided as part of the setup flow in Snowplow BDP Console."),(0,a.kt)("h3",{id:"create-sub-account"},"Create sub-account"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From your main AWS account, set up an Organisation if you haven't done so already."),(0,a.kt)("li",{parentName:"ol"},"Create a member account (the sub-account) in that organization"),(0,a.kt)("li",{parentName:"ol"},"Sign out and sign into the new sub-account. Everything Snowplow-related will take place within this account from here in."),(0,a.kt)("li",{parentName:"ol"},"Follow ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html#access_policies_create-start"},"these instructions")," to create a policy using the policy list below.")),(0,a.kt)("h3",{id:"set-up-role-and-iam-permissions"},"Set up Role and IAM permissions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access the IAM control panel within the sub-account"),(0,a.kt)("li",{parentName:"ol"},"Go to Access management > Roles and select Create role"),(0,a.kt)("li",{parentName:"ol"},'Select "Another AWS account"',(0,a.kt)("br",{parentName:"li"}),"(Account ID: 793733611312 Require MFA: true)"),(0,a.kt)("li",{parentName:"ol"},"Select the policy you created earlier"),(0,a.kt)("li",{parentName:"ol"},'Call the role "SnowplowAdmin" or similar')),(0,a.kt)("p",null,"You will need to share this role with us as part of filling out the setup form in Snowplow BDP console."),(0,a.kt)("h3",{id:"policy-list"},"Policy List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},' "acm:*",\n "apigateway:*",\n "application-autoscaling:*",\n "autoscaling:*",\n "aws-marketplace:Subscribe",\n "aws-marketplace:Unsubscribe",\n "aws-marketplace:ViewSubscriptions",\n "cloudformation:*",\n "cloudfront:*",\n "cloudwatch:*",\n "dynamodb:*",\n "ec2:*",\n "es:*",\n "elasticbeanstalk:*",\n "elasticloadbalancing:*",\n "elasticmapreduce:*",\n "execute-api:*",\n "events:*",\n "iam:*",\n "kinesis:*",\n "lambda:*",\n "logs:*",\n "rds:*",\n "redshift:*",\n "s3:*",\n "sns:*",\n "ssm:*",\n "support:*",\n "route53:*",\n "ecs:*",\n "kms:List*",\n "kms:DescribeKey",\n "secretsmanager:CreateSecret",\n "secretsmanager:TagResource",\n "secretsmanager:DescribeSecret",\n "secretsmanager:GetResourcePolicy",\n "secretsmanager:PutSecretValue",\n "secretsmanager:GetSecretValue" \n')),(0,a.kt)("p",null,"For complete documentation from Amazon go ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html"},"here"),".\xa0"),(0,a.kt)("h3",{id:"set-up-role-and-iam-permissions-with-cloudformation"},"Set up Role and IAM Permissions with ",(0,a.kt)("strong",{parentName:"h3"},"CloudFormation")),(0,a.kt)("p",null,"We also provide a CloudFormation template that will create a role named SnowplowAdmin with the full permission set ",(0,a.kt)("a",{parentName:"p",href:"https://snowplow-hosted-assets.s3-eu-west-1.amazonaws.com/common/iam/SnowplowAdminRole_CF.yml"},"here"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access the CloudFormation service within the sub-account"),(0,a.kt)("li",{parentName:"ol"},"Go to Stacks select Create stack > With new resources (standard)"),(0,a.kt)("li",{parentName:"ol"},"Select Template is ready within the Prepare template block"),(0,a.kt)("li",{parentName:"ol"},"Specify an Amazon S3 URL with the full path to the SnowplowAdmin CloudFormation template and proceed"),(0,a.kt)("li",{parentName:"ol"},"Provide the stack with a meaningful name such as SnowplowAdmin stack"),(0,a.kt)("li",{parentName:"ol"},"Now proceed through the remainder of the prompts and choose Create stack")),(0,a.kt)("p",null,"For complete documentation from Amazon go ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html"},"here"),"."))}u.isMDXComponent=!0}}]);