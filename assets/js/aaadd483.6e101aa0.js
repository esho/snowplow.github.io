"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[82059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||o;return n?i.createElement(m,r(r({ref:t},l),{},{components:n})):i.createElement(m,r({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={title:"Send a test event",date:"2021-09-23",sidebar_position:100},r=void 0,s={unversionedId:"open-source-quick-start/quick-start-installation-guide-on-gcp/sending-test-events/index",id:"open-source-quick-start/quick-start-installation-guide-on-gcp/sending-test-events/index",title:"Send a test event",description:"Now your pipeline is up and running, we can send a simple page\\_view event to it to validate that it is working.",source:"@site/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/sending-test-events/index.md",sourceDirName:"open-source-quick-start/quick-start-installation-guide-on-gcp/sending-test-events",slug:"/open-source-quick-start/quick-start-installation-guide-on-gcp/sending-test-events/",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/sending-test-events/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/sending-test-events/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:100,frontMatter:{title:"Send a test event",date:"2021-09-23",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Quick Start Installation Guide on GCP",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/"},next:{title:"Query your Postgres data",permalink:"/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/query-your-postgres-data/"}},c={},d=[{value:"Using cURL",id:"using-curl",level:5},{value:"Now let&#39;s query this data &gt;&gt;",id:"now-lets-query-this-data-",level:4}],l={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now your pipeline is up and running, we can send a simple page","_","view event to it to validate that it is working."),(0,a.kt)("h5",{id:"using-curl"},"Using cURL"),(0,a.kt)("p",null,"Send a simple request using cURL from your terminal. This example is a typical page","_","view event, which has been taken from this website."),(0,a.kt)("p",null,'The example will also send a sample "failed event" (a custom ',(0,a.kt)("inlineCode",{parentName:"p"},"product_view")," event that will fail due to an appropriate schema not being available to validate against) so that you can get a better understanding of how bad events are generated and what they look like."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl \'https://{{COLLECTOR_URL}}/com.snowplowanalytics.snowplow/tp2\' \\\n   -H \'Content-Type: application/json; charset=UTF-8\' \\\n   -H \'Cookie: _sp=305902ac-8d59-479c-ad4c-82d4a2e6bb9c\' \\\n   --data-raw \'{"schema":"iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4","data":[{"e":"pv","url":"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/send-test-events-to-your-pipeline/","page":"Send test events to your pipeline - Snowplow Docs","refr":"https://docs.snowplow.io/","tv":"js-2.17.2","tna":"spExample","aid":"docs-example","p":"web","tz":"Europe/London","lang":"en-GB","cs":"UTF-8","res":"3440x1440","cd":"24","cookie":"1","eid":"4e35e8c6-03c4-4c17-8202-80de5bd9d953","dtm":"1626182778191","cx":"eyJzY2hlbWEiOiJpZ2x1OmNvbS5zbm93cGxvd2FuYWx5dGljcy5zbm93cGxvdy9jb250ZXh0cy9qc29uc2NoZW1hLzEtMC0wIiwiZGF0YSI6W3sic2NoZW1hIjoiaWdsdTpjb20uc25vd3Bsb3dhbmFseXRpY3Muc25vd3Bsb3cvd2ViX3BhZ2UvanNvbnNjaGVtYS8xLTAtMCIsImRhdGEiOnsiaWQiOiI0YTU2ZjQyNy05MTk2LTQyZDEtOWE0YS03ZjRlNzk2OTM3ZmEifX1dfQ","vp":"863x1299","ds":"848x5315","vid":"3","sid":"87c18fc8-2055-4ec4-8ad6-fff64081c2f3","duid":"5f06dbb0-a893-472b-b61a-7844032ab3d6","stm":"1626182778194"},{"e":"ue","ue_px":"eyJzY2hlbWEiOiJpZ2x1OmNvbS5zbm93cGxvd2FuYWx5dGljcy5zbm93cGxvdy91bnN0cnVjdF9ldmVudC9qc29uc2NoZW1hLzEtMC0wIiwiZGF0YSI6eyJzY2hlbWEiOiJpZ2x1OmNvbS5teV9jb21wYW55L3Byb2R1Y3Rfdmlldy9qc29uc2NoZW1hLzEtMC0wIiwiZGF0YSI6eyJpZCI6IjVOMFctUEwwVyIsImN1cnJlbnRfcHJpY2UiOjQ0Ljk5LCJkZXNjcmlwdGlvbiI6IlB1cnBsZSBTbm93cGxvdyBIb29kaWUifX19","tv":"js-2.17.2","tna":"spExample","aid":"docs-example","p":"web","tz":"Europe/London","lang":"en-GB","cs":"UTF-8","res":"3440x1440","cd":"24","cookie":"1","eid":"542a79d3-a3b8-421c-99d6-543ff140a56a","dtm":"1626182778193","cx":"eyJzY2hlbWEiOiJpZ2x1OmNvbS5zbm93cGxvd2FuYWx5dGljcy5zbm93cGxvdy9jb250ZXh0cy9qc29uc2NoZW1hLzEtMC0wIiwiZGF0YSI6W3sic2NoZW1hIjoiaWdsdTpjb20uc25vd3Bsb3dhbmFseXRpY3Muc25vd3Bsb3cvd2ViX3BhZ2UvanNvbnNjaGVtYS8xLTAtMCIsImRhdGEiOnsiaWQiOiI0YTU2ZjQyNy05MTk2LTQyZDEtOWE0YS03ZjRlNzk2OTM3ZmEifX1dfQ","vp":"863x1299","ds":"848x5315","vid":"3","sid":"87c18fc8-2055-4ec4-8ad6-fff64081c2f3","duid":"5f06dbb0-a893-472b-b61a-7844032ab3d6","refr":"https://docs.snowplow.io/","url":"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/send-test-events-to-your-pipeline/","stm":"1626182778194"}]}\'\n')),(0,a.kt)("h4",{id:"now-lets-query-this-data-"},"Now ",(0,a.kt)("a",{parentName:"h4",href:"/docs/open-source-quick-start/quick-start-installation-guide-on-gcp/query-your-postgres-data/"},"let's query this data")," >>"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Do you have any feedback for us?"),(0,a.kt)("p",null,"We are really interested in understanding how you are finding the Quick Start and what we can do to better support you in getting started with our open source. If you have a moment, ",(0,a.kt)("a",{parentName:"p",href:"https://forms.gle/rKEqpFxwTfLjhQzR6"},"let us know via this short survey"),"."))}u.isMDXComponent=!0}}]);