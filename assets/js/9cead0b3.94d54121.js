"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[91594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Subject",date:"2020-02-26",sidebar_position:60},l=void 0,s={unversionedId:"collecting-data/collecting-from-own-applications/unity-tracker/subject/index",id:"collecting-data/collecting-from-own-applications/unity-tracker/subject/index",title:"Subject",description:"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event.",source:"@site/docs/collecting-data/collecting-from-own-applications/unity-tracker/subject/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/unity-tracker/subject",slug:"/collecting-data/collecting-from-own-applications/unity-tracker/subject/",permalink:"/docs/collecting-data/collecting-from-own-applications/unity-tracker/subject/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/unity-tracker/subject/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:60,frontMatter:{title:"Subject",date:"2020-02-26",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Emitter",permalink:"/docs/collecting-data/collecting-from-own-applications/unity-tracker/emitter/"},next:{title:"Session",permalink:"/docs/collecting-data/collecting-from-own-applications/unity-tracker/session/"}},i={},p=[{value:"Set user ID with\xa0<code>SetUserId</code>",id:"set-user-id-withsetuserid",level:3},{value:"Set screen resolution with <code>SetScreenResolution</code>",id:"set-screen-resolution-with-setscreenresolution",level:3},{value:"Set viewport dimensions with\xa0<code>SetViewport</code>",id:"set-viewport-dimensions-withsetviewport",level:3},{value:"Set color depth with\xa0<code>SetColorDepth</code>",id:"set-color-depth-withsetcolordepth",level:3},{value:"Set timezone with\xa0<code>SetTimezone</code>",id:"set-timezone-withsettimezone",level:3},{value:"Set the language with\xa0<code>SetLanguage</code>",id:"set-the-language-withsetlanguage",level:3},{value:"<code>SetIpAddress</code>",id:"setipaddress",level:3},{value:"<code>SetUseragent</code>",id:"setuseragent",level:3},{value:"<code>SetNetworkUserId</code>",id:"setnetworkuserid",level:3},{value:"<code>SetDomainUserId</code>",id:"setdomainuserid",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event."),(0,r.kt)("p",null,"The Subject class has a set of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Set...()"),"\xa0methods to attach extra data relating to the user to all tracked events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-user-id"},(0,r.kt)("inlineCode",{parentName:"a"},"SetUserId"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-screen-resolution"},(0,r.kt)("inlineCode",{parentName:"a"},"SetScreenResolution"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-viewport"},(0,r.kt)("inlineCode",{parentName:"a"},"SetViewport"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-color-depth"},(0,r.kt)("inlineCode",{parentName:"a"},"SetColorDepth"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-timezone"},(0,r.kt)("inlineCode",{parentName:"a"},"SetTimezone"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-language"},(0,r.kt)("inlineCode",{parentName:"a"},"SetLanguage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-ip-address"},(0,r.kt)("inlineCode",{parentName:"a"},"SetIpAddress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-useragent"},(0,r.kt)("inlineCode",{parentName:"a"},"SetUseragent"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-network-user-id"},(0,r.kt)("inlineCode",{parentName:"a"},"SetNetworkUserId"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-domain-user-id"},(0,r.kt)("inlineCode",{parentName:"a"},"SetDomainUserId")))),(0,r.kt)("p",null,"Here are some examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Subject s1 = new Subject();\ns1.SetUserId("Kevin Gleason");\ns1.SetLanguage("en-gb");\ns1.SetScreenResolution(1920, 1080);\n')),(0,r.kt)("p",null,"After that, you can add your Subject to your Tracker like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Tracker t1 = new Tracker(..., s1)\n\n// OR\n\nt1.SetSubject(s1);\n")),(0,r.kt)("h3",{id:"set-user-id-withsetuserid"},"Set user ID with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"SetUserId")),(0,r.kt)("p",null,"You can set the user ID to any string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'s1.SetUserId( "{{USER ID}}" )\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'s1.SetUserId("alexd")\n')),(0,r.kt)("h3",{id:"set-screen-resolution-with-setscreenresolution"},"Set screen resolution with ",(0,r.kt)("inlineCode",{parentName:"h3"},"SetScreenResolution")),(0,r.kt)("p",null,"If your C# code has access to the device's screen resolution, then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"t1.SetScreenResolution( {{WIDTH}}, {{HEIGHT}} )\n")),(0,r.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"t1.SetScreenResolution(1366, 768)\n")),(0,r.kt)("h3",{id:"set-viewport-dimensions-withsetviewport"},"Set viewport dimensions with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"SetViewport")),(0,r.kt)("p",null,"If your C# code has access to the viewport dimensions, then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetViewport( {{WIDTH}}, {{HEIGHT}} )\n")),(0,r.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetViewport(300, 200)\n")),(0,r.kt)("h3",{id:"set-color-depth-withsetcolordepth"},"Set color depth with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"SetColorDepth")),(0,r.kt)("p",null,"If your C# code has access to the bit depth of the device's color palette for displaying images, then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetColorDepth( {{BITS PER PIXEL}} )\n")),(0,r.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetColorDepth(32)\n")),(0,r.kt)("h3",{id:"set-timezone-withsettimezone"},"Set timezone with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"SetTimezone")),(0,r.kt)("p",null,"This method lets you pass a user's timezone in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetTimezone( {{TIMEZONE}} )\n")),(0,r.kt)("p",null,"The timezone should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'s.SetTimezone("Europe/London")\n')),(0,r.kt)("h3",{id:"set-the-language-withsetlanguage"},"Set the language with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"SetLanguage")),(0,r.kt)("p",null,"This method lets you pass a user's language in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetLanguage( {{LANGUAGE}} )\n")),(0,r.kt)("p",null,"The language should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetLanguage('en')\n")),(0,r.kt)("h3",{id:"setipaddress"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetIpAddress")),(0,r.kt)("p",null,"This method lets you pass a user's IP Address in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"SetIpAddress( {{IP ADDRESS}} )\n")),(0,r.kt)("p",null,"The IP address should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'subj.SetIpAddress("127.0.0.1");\n')),(0,r.kt)("h3",{id:"setuseragent"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetUseragent")),(0,r.kt)("p",null,"This method lets you pass a useragent in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"SetUseragent( {{USERAGENT}} )\n")),(0,r.kt)("p",null,"The useragent should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'subj.SetUseragent("Agent Smith");\n')),(0,r.kt)("h3",{id:"setnetworkuserid"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetNetworkUserId")),(0,r.kt)("p",null,"This method lets you pass a Network User ID in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"SetNetworkUserId( {{NUID}} )\n")),(0,r.kt)("p",null,"The network user id should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'subj.SetNetworkUserId("network-id");\n')),(0,r.kt)("h3",{id:"setdomainuserid"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetDomainUserId")),(0,r.kt)("p",null,"This method lets you pass a Domain User ID in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"SetDomainUserId( {{DUID}} )\n")),(0,r.kt)("p",null,"The domain user id should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'subj.SetDomainUserId("domain-id");\n')))}u.isMDXComponent=!0}}]);