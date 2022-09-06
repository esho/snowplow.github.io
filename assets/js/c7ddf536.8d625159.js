"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[66082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=s,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=n(87462),s=(n(67294),n(3905));const r={title:"Authorize client connections to your cluster",date:"2020-02-26",sidebar_position:0},i=void 0,a={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/authorize-client-connections-to-your-cluster/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/authorize-client-connections-to-your-cluster/index",title:"Authorize client connections to your cluster",description:"To enable a direct connection between a client (e.g. on your local machine) and Redshift, click on the cluster you want to access, via the AWS console:",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/authorize-client-connections-to-your-cluster/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/authorize-client-connections-to-your-cluster",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/authorize-client-connections-to-your-cluster/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/authorize-client-connections-to-your-cluster/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/authorize-client-connections-to-your-cluster/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:0,frontMatter:{title:"Authorize client connections to your cluster",date:"2020-02-26",sidebar_position:0},sidebar:"defaultSidebar",previous:{title:"Launch a Redshift cluster",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/"},next:{title:"Connect to your cluster",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/connect-to-your-cluster/"}},c={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To enable a direct connection between a client (e.g. on your local machine) and Redshift, click on the cluster you want to access, via the AWS console:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(68727).Z,width:"1099",height:"888"})),(0,s.kt)("p",null,'Click on "Security Groups" on the left hand menu.'),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(54865).Z,width:"1030",height:"533"})),(0,s.kt)("p",null,"Amazon lets you create several different security groups so you can manage access by different groups of people. In this tutorial, we will just update the default group to grant access to a particular IP address."),(0,s.kt)("p",null,"Select the default security group:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(56779).Z,width:"1023",height:"613"})),(0,s.kt)("p",null,"We need to enable a connection type for this security group. Amazon offers two choices: an 'EC2 Security Group' (if you want to grant access to a client running on EC2) or a CIDR/IP connection if you want to connect a clieint that is not an EC2 instance."),(0,s.kt)("p",null,"In this example we're going to establish a direct connection between Redshift and our local machine (not on EC2), so select CIDR/IP. Amazon helpfully guesses the CIDR of the current machine. In our case, this is right, so we enter the value:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(77869).Z,width:"1023",height:"613"})),(0,s.kt)("p",null,'and click "Add".'),(0,s.kt)("p",null,"We should now be able to connect a SQL client on our local machine to Amazon Redshift."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," Amazon has moved to launching Redshift clusters in a VPC instance by default. In this case, the process for adding IP addresses or EC2 instances to a security group is very similar, but rather than being done in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Redshift > Security Groups")," section of the AWS console, it is done in the ",(0,s.kt)("inlineCode",{parentName:"p"},"EC2 -> VPC security groups")," section of the AWS management console."),(0,s.kt)("p",null,"Via ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cli/"},"AWS CLI"),", you could create the security group in the following fashion."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ aws ec2 create-security-group \\\n    --group-name "Redshift unlimited access" \\\n    --description "Unsafe. Use for demonstration only" \\\n    --vpc-id {{ VPC_ID }} \\\n    | jq -r \'.GroupId\'\n')),(0,s.kt)("p",null,"On output, you'll get ",(0,s.kt)("inlineCode",{parentName:"p"},"GroupId"),". We'll refer to it as ",(0,s.kt)("inlineCode",{parentName:"p"},"{{ REDSHIFT_SG }}"),"."),(0,s.kt)("p",null,"Next, you need to add access rules to the new security group (amend as required to serve your purpose)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws ec2 authorize-security-group-ingress \\\n    --group-id {{ REDSHIFT_SG }} \\\n    --protocol tcp \\\n    --port 5439 \\\n    --cidr 0.0.0.0/0\n")),(0,s.kt)("p",null,"Then tie the previously created security to the cluster in the following manner. On output, you'll get the cluster address which you can use in place of ",(0,s.kt)("inlineCode",{parentName:"p"},"hostname")," when establishing the connection to your database."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws redshift modify-cluster \\\n    --cluster-id snowplow \\\n    --vpc-security-group-ids {{ REDSHIFT_SG }} \\\n    | jq -r '.Cluster.Endpoint.Address'\n")))}p.isMDXComponent=!0},68727:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/authorise-redshift-setup-1-1d06181d0e40a5b982d53fd7d1d4544c.png"},54865:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/authorise-redshift-setup-2-fbf48273356f591e811cdc8fa81b44ed.png"},56779:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/authorise-redshift-setup-3-be3ed6380d6267037f5922bf3b2c405d.png"},77869:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/authorise-redshift-setup-4-cae31c5a759c6775d0b4c2d4ba1f67ef.png"}}]);