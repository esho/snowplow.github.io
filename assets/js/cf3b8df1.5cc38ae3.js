"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[8800],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),y=r,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},96369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Query your data in Snowflake",date:"2022-05-10",sidebar_position:200},i=void 0,l={unversionedId:"open-source-quick-start/quick-start-installation-guide-on-aws/query-your-data/query-your-data-in-snowflake/index",id:"open-source-quick-start/quick-start-installation-guide-on-aws/query-your-data/query-your-data-in-snowflake/index",title:"Query your data in Snowflake",description:"If you have created Snowflake resources by following this tutorial and deployed the pipeline using the default or secure, you will have a Snowflake database where all of your enriched data is stored.",source:"@site/docs/open-source-quick-start/quick-start-installation-guide-on-aws/query-your-data/query-your-data-in-snowflake/index.md",sourceDirName:"open-source-quick-start/quick-start-installation-guide-on-aws/query-your-data/query-your-data-in-snowflake",slug:"/open-source-quick-start/quick-start-installation-guide-on-aws/query-your-data/query-your-data-in-snowflake/",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/query-your-data/query-your-data-in-snowflake/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/open-source-quick-start/quick-start-installation-guide-on-aws/query-your-data/query-your-data-in-snowflake/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:200,frontMatter:{title:"Query your data in Snowflake",date:"2022-05-10",sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Query your data in Postgres",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/query-your-data/query-your-data-in-postgres/"},next:{title:"Query your data in S3",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/query-your-data/query-your-data-in-s3/"}},s={},u=[],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you have created Snowflake resources by following ",(0,r.kt)("a",{parentName:"p",href:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/"},"this tutorial")," and deployed the pipeline using the default or secure, you will have a Snowflake database where all of your enriched data is stored."),(0,r.kt)("p",null,"Since Snowflake Loader only allows to load enriched data to Snowflake, your Snowflake database will contain only ",(0,r.kt)("inlineCode",{parentName:"p"},"atomic")," schema that contains your rich, high quality data. It will not contain ",(0,r.kt)("inlineCode",{parentName:"p"},"atomic_bad")," schema, unlike Postgres variant."),(0,r.kt)("p",null,"To query the good data in atomic.events, you will first need to connect to your Snowflake database."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is two different ways to connect to Snowflake database:"),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake_loader_user")," that is output by Snowflake Terraform module. The password for this user is the password you've passed as ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake_loader_password")," to Snowflake Terraform module."),(0,r.kt)("li",{parentName:"ul"},"Grant ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake_loader_role")," that is output by Snowflake Terraform module to a Snowflake user you have access and connect to database with credentials of this user."),(0,r.kt)("li",{parentName:"ul"},"Either Snowflake dashboard or ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/user-guide/snowsql.html"},"SnowSQL")," can be used to connect to Snowflake database and query data in there."),(0,r.kt)("li",{parentName:"ul"},"Run a query against your atomic.events table to take a look at the page view event that you generated in the previous step (",(0,r.kt)("inlineCode",{parentName:"li"},"where event_name = \u2018page_view\u2019"),"). You can understand more about each field in the canonical event ",(0,r.kt)("a",{parentName:"li",href:"/docs/understanding-your-pipeline/canonical-event/"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SELECT * FROM atomic.events WHERE event_name = 'page_view';"))),(0,r.kt)("p",null,"By default, there are 5 enrichments enabled, as listed below. These enrichments add extra properties and values to your events in real time as they are being processed by the Enrich application."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/enriching-your-data/available-enrichments/ua-parser-enrichment/"},"UA parser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/enriching-your-data/available-enrichments/yauaa-enrichment/"},"YAUAA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/enriching-your-data/available-enrichments/campaign-attribution-enrichment/"},"Campaign Attribution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/enriching-your-data/available-enrichments/event-fingerprint-enrichment/"},"Event fingerprint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/enriching-your-data/available-enrichments/referrer-parser-enrichment/"},"Referer parser"))),(0,r.kt)("p",null,"Some enrichments are legacy and therefore populate your atomic columns. From the above list, these are the campaign attribution, referer parser and event fingerprint enrichments. The UA parser and YAUAA enrichment also add a separate entity to each event (these are also referred to as contexts since they add additional context to the events). The contexts are loaded into separate columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"contexts","_","com","_","snowplowanalytics","_","snowplow","_","ua","_","parser","_","context","_","1"),(0,r.kt)("li",{parentName:"ul"},"contexts","_","nl","_","basjes","_","yauaa","_","context","_","1")))}d.isMDXComponent=!0}}]);