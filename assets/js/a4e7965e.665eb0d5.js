"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[68087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=i,m=u["".concat(l,".").concat(y)]||u[y]||c[y]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Analytics SDK - Python",date:"2020-11-03",sidebar_position:400},r=void 0,s={unversionedId:"modeling-your-data/analytics-sdk/analytics-sdk-python/index",id:"modeling-your-data/analytics-sdk/analytics-sdk-python/index",title:"Analytics SDK - Python",description:"1\\. Overview",source:"@site/docs/modeling-your-data/analytics-sdk/analytics-sdk-python/index.md",sourceDirName:"modeling-your-data/analytics-sdk/analytics-sdk-python",slug:"/modeling-your-data/analytics-sdk/analytics-sdk-python/",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-python/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/modeling-your-data/analytics-sdk/analytics-sdk-python/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:400,frontMatter:{title:"Analytics SDK - Python",date:"2020-11-03",sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Analytics SDK - Go",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-go/"},next:{title:"Analytics SDK - .NET",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-net/"}},l={},p=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Compatibility",id:"2-compatibility",level:2},{value:"3. Setup",id:"3-setup",level:2},{value:"3.1 PyPI",id:"31-pypi",level:3},{value:"3.2 pip",id:"32-pip",level:3},{value:"3.3 easy_install",id:"33-easy_install",level:3},{value:"4. Run Manifests",id:"4-run-manifests",level:2},{value:"4.1 Overview",id:"41-overview",level:3},{value:"4.2 Usage",id:"42-usage",level:3},{value:"4.3 Example",id:"43-example",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-overview"},"1","."," Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-python-analytics-sdk"},"Snowplow Analytics SDK for Python")," lets you work with ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-your-pipeline/canonical-event/"},"Snowplow enriched events")," in your Python event processing, data modeling and machine-learning jobs. You can use this SDK with ",(0,i.kt)("a",{parentName:"p",href:"http://spark.apache.org/"},"Apache Spark"),", ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),", and other Python-compatible data processing frameworks."),(0,i.kt)("h2",{id:"2-compatibility"},"2","."," Compatibility"),(0,i.kt)("p",null,"Snowplow Python Analytics SDK was tested with Python of versions: 2.7, 3.3, 3.4, 3.5."),(0,i.kt)("p",null,"As analytics SDKs supposed to be used heavily in conjunction with data-processing engines such as ",(0,i.kt)("a",{parentName:"p",href:"http://spark.apache.org/"},"Apache Spark"),", our goal is to maintain compatibility with all versions that PySpark supports. Whenever possible we try to maintain compatibility with broader range of Python versions and computing environments. This is achieved mostly by minimazing and isolating third-party dependencies and libraries."),(0,i.kt)("p",null,"There are only one external dependency currently:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/sdk-for-python/"},"Boto3")," - AWS Python SDK that used to provide access to Event Load Manifests.")),(0,i.kt)("p",null,"These dependencies can be installed from the package manager of the host system or through PyPi."),(0,i.kt)("h2",{id:"3-setup"},"3","."," Setup"),(0,i.kt)("h3",{id:"31-pypi"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Python-Analytics-SDK-setup#31-pypi"}),"3.1 PyPI"),(0,i.kt)("p",null,"The Snowplow Python Analytics SDK is published to ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.python.org/"},"PyPI"),", the the official third-party software repository for the Python programming language."),(0,i.kt)("p",null,"This makes it easy to either install the SDK locally, or to add it as a dependency into your own Python app or Spark job."),(0,i.kt)("h3",{id:"32-pip"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Python-Analytics-SDK-setup#32-pip"}),"3.2 pip"),(0,i.kt)("p",null,"To install the Snowplow Python Analytics SDK locally, assuming you already have Pip installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pip install snowplow_analytics_sdk --upgrade\n")),(0,i.kt)("p",null,"To add the Snowplow Analytics SDK as a dependency to your own Python app, edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," and add:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"snowplow_analytics_sdk==0.2.3\n")),(0,i.kt)("h3",{id:"33-easy_install"},"3.3 easy","_","install"),(0,i.kt)("p",null,"If you are still using easy","_","install:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ easy_install -U snowplow_analytics_sdk\n")),(0,i.kt)("h2",{id:"4-run-manifests"},"4","."," Run Manifests"),(0,i.kt)("h3",{id:"41-overview"},"4.1 Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-python-analytics-sdk"},"Snowplow Analytics SDK for Python")," provides you an API to work with run manifests. Run manifests is simple way to mark chunk (particular run) of enriched data as being processed, by for example Apache Spark data-modeling job."),(0,i.kt)("h3",{id:"42-usage"},"4.2 Usage"),(0,i.kt)("p",null,"Run manifests functionality resides in new ",(0,i.kt)("inlineCode",{parentName:"p"},"snowplow_analytics_sdk.run_manifests")," module."),(0,i.kt)("p",null,"Main class is ",(0,i.kt)("inlineCode",{parentName:"p"},"RunManifests"),", that proides access to DynamoDB table via ",(0,i.kt)("inlineCode",{parentName:"p"},"contains")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),", as well as ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," method to initialize table with appropriate settings. Other commonly-used function is ",(0,i.kt)("inlineCode",{parentName:"p"},"list_runids")," that is gives S3 client and path to folder such as ",(0,i.kt)("inlineCode",{parentName:"p"},"enriched.archive")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"shredded.archive")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," lists all folders that match Snowplow run id format (",(0,i.kt)("inlineCode",{parentName:"p"},"run-YYYY-mm-DD-hh-MM-SS"),"). Using ",(0,i.kt)("inlineCode",{parentName:"p"},"list_runids")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RunManifests")," you can list job runs and safely process them one by one without risk of reprocessing."),(0,i.kt)("h3",{id:"43-example"},"4.3 Example"),(0,i.kt)("p",null,"Here's a short usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"from boto3 import client\nfrom snowplow_analytics_sdk.run_manifests import *\n\ns3 = client('s3')\ndynamodb = client('dynamodb')\n\ndynamodb_run_manifests_table = 'snowplow-run-manifests'\nenriched_events_archive = 's3://acme-snowplow-data/storage/enriched-archive/'\nrun_manifests = RunManifests(dynamodb, dynamodb_run_manifests_table)\n\nrun_manifests.create()   # This should be called only once\n\nfor run_id in list_runids(s3, enriched_events_archive):\n    if not run_manifests.contains(run_id):\n        process(run_id)\n        run_manifests.add(run_id)\n    else:\n        pass\n")),(0,i.kt)("p",null,"In above example, we create two AWS service clients for S3 (to list job runs) and for DynamoDB (to access manifests). These cliens are provided via ","[","boto3","]","[","boto3","]"," Python AWS SDK and can be initialized with static credentials or with system-provided credentials."),(0,i.kt)("p",null,"Then we list all run ids in particular S3 path and process (by user-provided ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," function) only those that were not processed already. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"run_id")," is simple string with S3 key of particular job run."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RunManifests")," class is a simple API wrapper to DynamoDB, using which you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create")," DynamoDB table for manifests,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add")," run to table"),(0,i.kt)("li",{parentName:"ul"},"check if table ",(0,i.kt)("inlineCode",{parentName:"li"},"contains")," run id")))}c.isMDXComponent=!0}}]);