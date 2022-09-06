"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[90211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Upgrade guide",date:"2020-04-25",sidebar_position:40},i=void 0,l={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/upgrade-guide/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/upgrade-guide/index",title:"Upgrade guide",description:"Upgrading from 0.1.0",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/upgrade-guide/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/upgrade-guide",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/upgrade-guide/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/upgrade-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/upgrade-guide/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:40,frontMatter:{title:"Upgrade guide",date:"2020-04-25",sidebar_position:40},sidebar:"defaultSidebar",previous:{title:"Backpopulate the manifest",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/backpopulate-the-manifest/"},next:{title:"BigQuery Loader",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/"}},p={},s=[{value:"Upgrading from 0.1.0",id:"upgrading-from-010",level:2},{value:"Upgrading from 0.2.0",id:"upgrading-from-020",level:2},{value:"Upgrading from 0.3.0",id:"upgrading-from-030",level:2},{value:"Upgrading from 0.4.0",id:"upgrading-from-040",level:2},{value:"Upgrading from 0.6.x to 0.7.x",id:"upgrading-from-06x-to-07x",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"upgrading-from-010"},"Upgrading from 0.1.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To update Snowflake infrastructure another ",(0,r.kt)("inlineCode",{parentName:"li"},"setup")," must be launched - it'll create a new file format ",(0,r.kt)("inlineCode",{parentName:"li"},"snowplow_enriched_json")),(0,r.kt)("li",{parentName:"ul"},"Both ",(0,r.kt)("inlineCode",{parentName:"li"},"setup")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"load")," subcommands now accept required ",(0,r.kt)("inlineCode",{parentName:"li"},"--snowflake-region")," option")),(0,r.kt)("h2",{id:"upgrading-from-020"},"Upgrading from 0.2.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Biggest change is that both transformer and loader now accept common configuration file (",(0,r.kt)("inlineCode",{parentName:"li"},"--configuration"),") and Iglu Resolver config (",(0,r.kt)("inlineCode",{parentName:"li"},"--resolver"),") instead of specific CLI options"),(0,r.kt)("li",{parentName:"ul"},"Static credentials are considered deprecated now, use AWS Role (or Snowflake stage)"),(0,r.kt)("li",{parentName:"ul"},"If you don't want to store credentials in config and already have existing stage - you'll need to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow-incubator/snowplow-snowflake-loader/wiki/Setup-Guide#creds"},"add credentials")," to stage object."),(0,r.kt)("li",{parentName:"ul"},"Snowflake transformer now depends on Spark 2.2.0 and therefore requires ",(0,r.kt)("inlineCode",{parentName:"li"},"amiVersion")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster.json")," to be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"5.9.0"))),(0,r.kt)("h2",{id:"upgrading-from-030"},"Upgrading from 0.3.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Due to several columns in atomic.events being widened to support pseudonymization and MaxMind changes, the table schema on Snowflake will need to be migrated - in order to automatically update the relevant column definitions, run ",(0,r.kt)("inlineCode",{parentName:"li"},"java -jar snowplow-snowflake-loader-0.4.0.jar migrate --loader-version 0.4.0"))),(0,r.kt)("h2",{id:"upgrading-from-040"},"Upgrading from 0.4.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Due to bad row support, URL of S3 bucket which bad rows will be written need to specified in the config with ",(0,r.kt)("inlineCode",{parentName:"li"},"badOutputUrl")," config field. Also, Snowflake config version need to be bumped to ",(0,r.kt)("inlineCode",{parentName:"li"},"1-0-2")," in the self describing json.")),(0,r.kt)("h2",{id:"upgrading-from-06x-to-07x"},"Upgrading from 0.6.x to 0.7.x"),(0,r.kt)("p",null,"Nothing required unless we want to authenticate loader via storage integration."),(0,r.kt)("p",null,"To upgrade Loader from 0.6.x to 0.7.x,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drop existing stage at Snowflake",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Re-creating stage is required to use storage integration"))),(0,r.kt)("li",{parentName:"ul"},"Follow ",(0,r.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/setup/"},"the setup page")," and create storage integration"),(0,r.kt)("li",{parentName:"ul"},"Create an external stage per ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/user-guide/data-load-s3-config.html#step-6-create-an-external-stage"},"Snowflake docs")," step 6."),(0,r.kt)("li",{parentName:"ul"},"Follow ",(0,r.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-snowflake-loader/configuration/"},"the configuration page")," and update loader configuration")),(0,r.kt)("p",null,"The setup page explicitly excludes step 6 for users running the loader for the first time, since loader's ",(0,r.kt)("inlineCode",{parentName:"p"},"setup")," subcommand creates the stage compatible with the storage integration mechanism, along with other required entities. However, we assume that upgrading users have setup their loader previously where stage was created using IAM credentials, hence the need to re-create it."))}u.isMDXComponent=!0}}]);