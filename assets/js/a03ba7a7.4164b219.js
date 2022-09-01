"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[43967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,g=d["".concat(c,".").concat(k)]||d[k]||u[k]||r;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Getting started",date:"2021-11-16",sidebar_position:1e3},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/index",id:"collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/index",title:"Getting started",description:"Designing how and what to track in your app is an important decision. Check out our docs about tracking design\xa0here.",source:"@site/docs/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide",slug:"/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/roku-tracker/quick-start-guide/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:1e3,frontMatter:{title:"Getting started",date:"2021-11-16",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Roku Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/"},next:{title:"Tracking Events",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events/"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Using Roku Package Manager (ropm)",id:"using-roku-package-manager-ropm",level:3},{value:"Manual Installation",id:"manual-installation",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Tracking events",id:"tracking-events",level:2},{value:"Testing",id:"testing",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Designing how and what to track in your app is an important decision. Check out our docs about tracking design\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/introduction-to-tracking-design/"},"here"),"."),(0,a.kt)("p",null,"The following steps will guide you through setting up the Roku tracker in your project and tracking a simple event."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"There are two options to install the Roku tracker package to your project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"using Roku package manager (ropm),"),(0,a.kt)("li",{parentName:"ol"},"by manually copying package files.")),(0,a.kt)("h3",{id:"using-roku-package-manager-ropm"},"Using Roku Package Manager (ropm)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rokucommunity/ropm"},"ropm"),"\xa0is a package manager for the Roku platform. If you are using ropm in your project, you may install the Roku tracker using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ropm install snowplow@npm:@snowplow/roku-tracker\n")),(0,a.kt)("h3",{id:"manual-installation"},"Manual Installation"),(0,a.kt)("p",null,"The Roku tracker may be installed by simply copying source files to your Roku project. You may download and unpack the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"dist.zip"),"\xa0or\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"dist.tar.gz"),"\xa0package from the latest release build on Github. Copy the following folders and files to your Roku project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Contents of\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"dist/source"),"\xa0into your\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"source"),"\xa0directory"),(0,a.kt)("li",{parentName:"ol"},"Contents of\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"dist/components"),"\xa0into your\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"components"),"\xa0directory")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"It is recommended that you instantiate Snowplow and add it to the global scope. In this way, it will be accessible from anywhere within your SceneGraph application. You may create the instance in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\xa0function of your main scene."),(0,a.kt)("p",null,"If you installed the package using ropm, mount the component as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'m.global.AddField("snowplow", "node", false)\nm.global.snowplow = CreateObject("roSGNode", "snowplow_Snowplow")\n')),(0,a.kt)("p",null,"If you installed the package manually, mount the component as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'m.global.AddField("snowplow", "node", false)\nm.global.snowplow = CreateObject("roSGNode", "Snowplow")\n')),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"Trackers are initialized by setting the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\xa0property with configuration of the tracker. This configuration takes the form of a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"roAssociativeArray"),". At its most basic, the configuration takes a Snowplow collector endpoint like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'m.global.snowplow.init = {\n    network: {\n        collector: "http://..."\n    }\n}\n')),(0,a.kt)("p",null,"To learn more about configuring how events are sent, check out\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/configuration/"},"this page"),"."),(0,a.kt)("h2",{id:"tracking-events"},(0,a.kt)("a",{parentName:"h2",href:"#tracking-events"}),"Tracking events"),(0,a.kt)("p",null,"To track an event, simply assign its properties as a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"roAssociativeArray"),"\xa0to a field corresponding to the event type. For instance, to track a structured event, assign the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"structured"),"\xa0property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'m.global.snowplow.structured = {\n    se_ca: "category",\n    se_ac: "action",\n    se_la: "label",\n    se_pr: "property",\n    se_va: 10\n}\n')),(0,a.kt)("p",null,"Visit documentation about\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/tracking-events/"},"tracking events"),"\xa0to learn about other supported event types. You may also want to read about\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/adding-data/"},"adding more data to tracked events"),"."),(0,a.kt)("h2",{id:"testing"},(0,a.kt)("a",{parentName:"h2",href:"#testing"}),"Testing"),(0,a.kt)("p",null,"Testing that your event tracking is properly configured can be as important as testing the other aspects of your app. It confirms that you are generating the events you expect."),(0,a.kt)("p",null,"We provide two types of pipeline for testing and debugging.\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/understanding-your-pipeline/what-is-snowplow-mini/"},"Snowplow Mini"),"\xa0is especially useful in manual schema and pipeline testing.\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/understanding-your-pipeline/what-is-snowplow-micro/"},"Snowplow Micro"),"\xa0is a minimal pipeline designed to be used as part of your app's automated test suite."),(0,a.kt)("p",null,"Check out the\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/example-app/"},"example Roku channel"),"\xa0to see the tracker used with a Snowplow Micro."))}u.isMDXComponent=!0}}]);