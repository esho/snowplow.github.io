"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[70117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return t?o.createElement(g,a(a({ref:n},l),{},{components:t})):o.createElement(g,a({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const i={title:"Setup Validation and Enrich (GCP)",date:"2020-02-27",sidebar_position:30},a=void 0,p={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index",title:"Setup Validation and Enrich (GCP)",description:"On GCP we provide two options to run enrichments: Beam Enrich, running on top of Google Dataflow and Enrich PubSub, running as a standalone JVM application.",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index.md",tags:[],version:"current",lastUpdatedAt:1662631913,formattedLastUpdatedAt:"Sep 8, 2022",sidebarPosition:30,frontMatter:{title:"Setup Validation and Enrich (GCP)",date:"2020-02-27",sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"Setup Webhooks",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-webhooks/"},next:{title:"Add additional enrichments",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/add-additional-enrichments/"}},s={},c=[{value:"Run Enrich",id:"run-enrich",level:2}],l={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On GCP we provide two options to run enrichments: ",(0,r.kt)("strong",{parentName:"p"},"Beam Enrich"),", running on top of Google Dataflow and ",(0,r.kt)("strong",{parentName:"p"},"Enrich PubSub"),", running as a standalone JVM application."),(0,r.kt)("p",null,"Both applications consume the raw data from the raw Pub/Sub topic (outputted by the collector). Validate the data (against schemas stored in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/"},"Iglu Central")," or the user's own schema registry(ies), enrich the data using one or more enrichments and then write the processed data out to the enriched Pub/Sub topic, from where it can be e.g. loaded into BigQuery."),(0,r.kt)("h2",{id:"run-enrich"},"Run Enrich"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/enrichment-components/"},"Enrich applications reference")," has instructions for setting up and running ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/enrichment-components/enrich/"},"Enrich PubSub"),"."))}u.isMDXComponent=!0}}]);