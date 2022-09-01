"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[97257],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Subject",date:"2020-02-26",sidebar_position:50},o=void 0,s={unversionedId:"collecting-data/collecting-from-own-applications/net-tracker/subject/index",id:"collecting-data/collecting-from-own-applications/net-tracker/subject/index",title:"Subject",description:"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event.",source:"@site/docs/collecting-data/collecting-from-own-applications/net-tracker/subject/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/net-tracker/subject",slug:"/collecting-data/collecting-from-own-applications/net-tracker/subject/",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/subject/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/net-tracker/subject/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:50,frontMatter:{title:"Subject",date:"2020-02-26",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Emitter",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/emitter/"},next:{title:"Event Tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/event-tracking/"}},i={},p=[{value:"<code>SetUserId</code>",id:"setuserid",level:3},{value:"<code>SetScreenResolution</code>",id:"setscreenresolution",level:3},{value:"<code>SetViewport</code>",id:"setviewport",level:3},{value:"<code>SetColorDepth</code>",id:"setcolordepth",level:3},{value:"<code>SetTimezone</code>",id:"settimezone",level:3},{value:"<code>SetLang</code>",id:"setlang",level:3},{value:"<code>SetIpAddress</code>",id:"setipaddress",level:3},{value:"<code>SetUseragent</code>",id:"setuseragent",level:3},{value:"<code>SetNetworkUserId</code>",id:"setnetworkuserid",level:3},{value:"<code>SetDomainUserId</code>",id:"setdomainuserid",level:3},{value:"<code>SetPlatform</code>",id:"setplatform",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event."),(0,r.kt)("p",null,"The Subject class has a set of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Set...()"),"\xa0methods to attach extra data relating to the user to all tracked events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-user-id"},(0,r.kt)("inlineCode",{parentName:"a"},"SetUserId"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-screen-resolution"},(0,r.kt)("inlineCode",{parentName:"a"},"SetScreenResolution"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-viewport"},(0,r.kt)("inlineCode",{parentName:"a"},"SetViewport"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-color-depth"},(0,r.kt)("inlineCode",{parentName:"a"},"SetColorDepth"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-timezone"},(0,r.kt)("inlineCode",{parentName:"a"},"SetTimezone"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-lang"},(0,r.kt)("inlineCode",{parentName:"a"},"SetLang"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-ip-address"},(0,r.kt)("inlineCode",{parentName:"a"},"SetIpAddress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-useragent"},(0,r.kt)("inlineCode",{parentName:"a"},"SetUseragent"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-network-user-id"},(0,r.kt)("inlineCode",{parentName:"a"},"SetNetworkUserId"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-domain-user-id"},(0,r.kt)("inlineCode",{parentName:"a"},"SetDomainUserId"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-platform"},(0,r.kt)("inlineCode",{parentName:"a"},"SetPlatform")))),(0,r.kt)("p",null,"Here are some examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Subject s1 = new Subject();\ns1.SetUserId("Kevin Gleason");\ns1.SetLang("en-gb");\ns1.SetScreenResolution(1920, 1080);\n')),(0,r.kt)("h3",{id:"setuserid"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetUserId")),(0,r.kt)("p",null,"You can set the user ID to any string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'s1.SetUserId( "{{USER ID}}" )\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'s1.SetUserId("alexd")\n')),(0,r.kt)("h3",{id:"setscreenresolution"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetScreenResolution")),(0,r.kt)("p",null,"If your C# code has access to the device's screen resolution, then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s1.SetScreenResolution( {{WIDTH}}, {{HEIGHT}} )\n")),(0,r.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s1.SetScreenResolution(1366, 768)\n")),(0,r.kt)("h3",{id:"setviewport"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetViewport")),(0,r.kt)("p",null,"If your C# code has access to the viewport dimensions, then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s1.SetViewport( {{WIDTH}}, {{HEIGHT}} )\n")),(0,r.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s1.SetViewport(300, 200)\n")),(0,r.kt)("h3",{id:"setcolordepth"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetColorDepth")),(0,r.kt)("p",null,"If your C# code has access to the bit depth of the device's color palette for displaying images, then you can pass this in to Snowplow too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetColorDepth( {{BITS PER PIXEL}} )\n")),(0,r.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetColorDepth(32)\n")),(0,r.kt)("h3",{id:"settimezone"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetTimezone")),(0,r.kt)("p",null,"This method lets you pass a user's timezone in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetTimezone( {{TIMEZONE}} )\n")),(0,r.kt)("p",null,"The timezone should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'s.SetTimezone("Europe/London")\n')),(0,r.kt)("h3",{id:"setlang"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetLang")),(0,r.kt)("p",null,"This method lets you pass a user's language in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetLang( {{LANGUAGE}} )\n")),(0,r.kt)("p",null,"The language should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetLang('en')\n")),(0,r.kt)("h3",{id:"setipaddress"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetIpAddress")),(0,r.kt)("p",null,"This method lets you pass a user's IP Address in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetIpAddress( {{IP ADDRESS}} )\n")),(0,r.kt)("p",null,"The IP address should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'s.SetIpAddress("127.0.0.1");\n')),(0,r.kt)("h3",{id:"setuseragent"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetUseragent")),(0,r.kt)("p",null,"This method lets you pass a useragent in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetUseragent( {{USERAGENT}} )\n")),(0,r.kt)("p",null,"The useragent should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'s.SetUseragent("Agent Smith");\n')),(0,r.kt)("h3",{id:"setnetworkuserid"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetNetworkUserId")),(0,r.kt)("p",null,"This method lets you pass a Network User ID in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetNetworkUserId( {{NUID}} )\n")),(0,r.kt)("p",null,"The network user id should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'s.SetNetworkUserId("network-id");\n')),(0,r.kt)("h3",{id:"setdomainuserid"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetDomainUserId")),(0,r.kt)("p",null,"This method lets you pass a Domain User ID in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetDomainUserId( {{DUID}} )\n")),(0,r.kt)("p",null,"The domain user id should be a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'s.SetDomainUserId("domain-id");\n')),(0,r.kt)("h3",{id:"setplatform"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetPlatform")),(0,r.kt)("p",null,"This method lets you set the Platform that the Tracker is running on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetPlatform( Platform.{{ option }} )\n")),(0,r.kt)("p",null,"The Platform should be an enum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"s.SetPlatform(Platform.Mob);\n")),(0,r.kt)("p",null,"Available platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Web"),(0,r.kt)("li",{parentName:"ul"},"Mob"),(0,r.kt)("li",{parentName:"ul"},"Pc"),(0,r.kt)("li",{parentName:"ul"},"Srv"),(0,r.kt)("li",{parentName:"ul"},"App"),(0,r.kt)("li",{parentName:"ul"},"Tv"),(0,r.kt)("li",{parentName:"ul"},"Cnsl"),(0,r.kt)("li",{parentName:"ul"},"Iot")))}u.isMDXComponent=!0}}]);