"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[56392],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const a={title:"IP anonymization enrichment",date:"2020-02-14",sidebar_position:13},o=void 0,c={unversionedId:"enriching-your-data/available-enrichments/ip-anonymization-enrichment/index",id:"enriching-your-data/available-enrichments/ip-anonymization-enrichment/index",title:"IP anonymization enrichment",description:'This enrichment replaces the end of the user\'s IP address with "x"s, on a configurable length. For instance 13.54.45.87 could become 13.54.x.x.',source:"@site/docs/enriching-your-data/available-enrichments/ip-anonymization-enrichment/index.md",sourceDirName:"enriching-your-data/available-enrichments/ip-anonymization-enrichment",slug:"/enriching-your-data/available-enrichments/ip-anonymization-enrichment/",permalink:"/docs/enriching-your-data/available-enrichments/ip-anonymization-enrichment/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/enriching-your-data/available-enrichments/ip-anonymization-enrichment/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:13,frontMatter:{title:"IP anonymization enrichment",date:"2020-02-14",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Custom API Request enrichment",permalink:"/docs/enriching-your-data/available-enrichments/custom-api-request-enrichment/"},next:{title:"PII pseudonymization enrichment",permalink:"/docs/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment/"}},l={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'This enrichment replaces the end of the user\'s IP address with "x"s, on a configurable length. For instance 13.54.45.87 could become 13.54.x.x.'),(0,r.kt)("p",null,"Both IPv4 and IPv6 are supported."),(0,r.kt)("p",null,"This enrichment runs after ",(0,r.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/available-enrichments/ip-lookup-enrichment/"},"IP lookup enrichment"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/anon_ip/jsonschema/1-0-1"},"Schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/anon_ip.json"},"Example"))),(0,r.kt)("p",null,"The number of octets (IPv4) to anonymize is specified with ",(0,r.kt)("inlineCode",{parentName:"p"},"anonOctets")," and the number of segments (IPv6) to anonymize is specified with ",(0,r.kt)("inlineCode",{parentName:"p"},"anonSegments"),"."),(0,r.kt)("p",null,"For example anonymizing one octet would change an IPv4 address of 255.255.255.255 to 255.255.255.x, and anonymizing three octets would change it to 255.x.x.x."),(0,r.kt)("h2",{id:"input"},"Input"),(0,r.kt)("p",null,"This enrichment uses the IP of the user, that can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"user_ipaddress"),"\xa0field of the atomic event."),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("p",null,"The anonymized value of the IP address is updated in-place in ",(0,r.kt)("inlineCode",{parentName:"p"},"user_ipaddress"),"\xa0field, before ever being stored."))}u.isMDXComponent=!0}}]);