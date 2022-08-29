"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[96966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Reverse ETL",date:"2021-11-23",sidebar_position:300},i=void 0,s={unversionedId:"forwarding-events-to-destinations/reverse-etl/index",id:"forwarding-events-to-destinations/reverse-etl/index",title:"Reverse ETL",description:"Snowplow and Reverse ETL represents best in class tooling for companies executing more sophisticated use cases with their behavioral data.",source:"@site/docs/forwarding-events-to-destinations/reverse-etl/index.md",sourceDirName:"forwarding-events-to-destinations/reverse-etl",slug:"/forwarding-events-to-destinations/reverse-etl/",permalink:"/docs/forwarding-events-to-destinations/reverse-etl/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/forwarding-events-to-destinations/reverse-etl/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:300,frontMatter:{title:"Reverse ETL",date:"2021-11-23",sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Custom Integrations",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/custom-integrations/"},next:{title:"Managing data quality",permalink:"/docs/managing-data-quality/"}},l={},c=[{value:"What problem does Reverse ETL solve?",id:"what-problem-does-reverse-etl-solve",level:2},{value:"Reverse ETL Platforms",id:"reverse-etl-platforms",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Snowplow and Reverse ETL represents best in class tooling for companies executing more sophisticated use cases with their behavioral data."),(0,a.kt)("p",null,"As one example of where this approach is beneficial, many organizations begin with marketing use cases by creating simple segments but quickly want to target their ads more effectively wanting to incorporate customer propensity to buy and predictive lifetime value. That increase in sophistication can only come from building a deep understanding of users in a place like a data warehouse with modelling tooling (AI/ML) and Reverse ETL."),(0,a.kt)("p",null,"This can only be done repeatedly, and with confidence with excellent governance practises which comes from Snowplow\u2019s compliance controls (i.e. controlling which data is sent to 3rd parties), schematised workflows and UI/API for management. Targeting in a sophisticated way ensure resource is allocated best as well (e.g. don\u2019t target users who have already purchased)."),(0,a.kt)("p",null,"Snowplow and Reverse ETL is for organizations who want to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adapt to changes in customer behavior and the business questions being asked."),(0,a.kt)("li",{parentName:"ul"},"Use Rich, extensible behavioral data."),(0,a.kt)("li",{parentName:"ul"},"Maintain high quality data due to validation and private cloud deployment."),(0,a.kt)("li",{parentName:"ul"},"Activate very high value audiences based on propensity to convert."),(0,a.kt)("li",{parentName:"ul"},"Execute well on dozens of other use cases.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(19458).Z,width:"560",height:"240"})),(0,a.kt)("h2",{id:"what-problem-does-reverse-etl-solve"},"What problem does Reverse ETL solve?"),(0,a.kt)("p",null,"Organizations have invested in building a high quality data asset in their data warehouse to power numerous use cases, so naturally want to use this to effectively target their users."),(0,a.kt)("p",null,"Reverse ETL enables organizations to take the output of the intelligence they've built using all their customer data (behavioral and non-behavioral) and publish that directly to marketing platforms where it can be activated."),(0,a.kt)("h2",{id:"reverse-etl-platforms"},"Reverse ETL Platforms"),(0,a.kt)("p",null,"Reverse ETL helps organizations operationalize the data in their warehouse by syncing it with other SaaS solutions such as Salesforce and Google Ads."),(0,a.kt)("p",null,"Snowplow partners with and recommends Census and Hightouch as Reverse ETL platforms to allow organisations to achieve the use cases described above."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.getcensus.com/"},"Census")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hightouch.io/"},"Hightouch"))))}u.isMDXComponent=!0},19458:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reverseetl-70742060395d2f5b62046145cceaf1e2.png"}}]);