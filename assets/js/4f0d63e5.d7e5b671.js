"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[55997],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},55037:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Subject methods",date:"2020-10-28",sidebar_position:4e3},s=void 0,i={unversionedId:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/subject-methods/index",id:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/subject-methods/index",title:"Subject methods",description:"A list of the methods used to add data to the Subject class.",source:"@site/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/subject-methods/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/subject-methods",slug:"/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/subject-methods/",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/subject-methods/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/subject-methods/index.md",tags:[],version:"current",lastUpdatedAt:1663236058,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:4e3,frontMatter:{title:"Subject methods",date:"2020-10-28",sidebar_position:4e3},sidebar:"defaultSidebar",previous:{title:"Sending events",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/sending-events/"},next:{title:"Scala Tracker (0.5.0)",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/"}},l={},c=[{value:"Set the platform with\xa0<code>setPlatform</code>",id:"set-the-platform-withsetplatform",level:3},{value:"Set the user ID with\xa0<code>setUserId</code>",id:"set-the-user-id-withsetuserid",level:3},{value:"Set the screen resolution with <code>setScreenResolution</code>",id:"set-the-screen-resolution-with-setscreenresolution",level:3},{value:"Set the viewport dimensions with <code>setViewport</code>",id:"set-the-viewport-dimensions-with-setviewport",level:3},{value:"Set the color depth with\xa0<code>setColorDepth</code>",id:"set-the-color-depth-withsetcolordepth",level:3},{value:"Setting the timezone with\xa0<code>setTimezone</code>",id:"setting-the-timezone-withsettimezone",level:3},{value:"Setting the language with\xa0<code>setLang</code>",id:"setting-the-language-withsetlang",level:3},{value:"Setting the IP address with\xa0<code>setIpAddress</code>",id:"setting-the-ip-address-withsetipaddress",level:3},{value:"Setting the useragent with\xa0<code>setUseragent</code>",id:"setting-the-useragent-withsetuseragent",level:3},{value:"Setting the domain user ID with <code>setDomainUserId</code>",id:"setting-the-domain-user-id-with-setdomainuserid",level:3},{value:"Setting the network user ID with <code>setNetworkUserId</code>",id:"setting-the-network-user-id-with-setnetworkuserid",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A list of the methods used to add data to the Subject class."),(0,r.kt)("h3",{id:"set-the-platform-withsetplatform"},"Set the platform with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setPlatform")),(0,r.kt)("p",null,"The default platform is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Server"),". These are the available alternatives, all available in the package ",(0,r.kt)("inlineCode",{parentName:"p"},"com.snowplowanalytics.snowplow.scalatracker"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Server"),(0,r.kt)("li",{parentName:"ul"},"Web"),(0,r.kt)("li",{parentName:"ul"},"Mobile"),(0,r.kt)("li",{parentName:"ul"},"Desktop"),(0,r.kt)("li",{parentName:"ul"},"Tv"),(0,r.kt)("li",{parentName:"ul"},"Console"),(0,r.kt)("li",{parentName:"ul"},"InternetOfThings"),(0,r.kt)("li",{parentName:"ul"},"General")),(0,r.kt)("p",null,"Example usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"subject.setPlatform(Tv)\n")),(0,r.kt)("h3",{id:"set-the-user-id-withsetuserid"},"Set the user ID with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setUserId")),(0,r.kt)("p",null,"You can make the user ID a string of your choice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'subject.setUserId("user-000563456")\n')),(0,r.kt)("h3",{id:"set-the-screen-resolution-with-setscreenresolution"},"Set the screen resolution with ",(0,r.kt)("inlineCode",{parentName:"h3"},"setScreenResolution")),(0,r.kt)("p",null,"If your Scala code has access to the device's screen resolution, you can pass it in to Snowplow. Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"subject.setScreenResolution(1366, 768)\n")),(0,r.kt)("h3",{id:"set-the-viewport-dimensions-with-setviewport"},"Set the viewport dimensions with ",(0,r.kt)("inlineCode",{parentName:"h3"},"setViewport")),(0,r.kt)("p",null,"Similarly, you can pass the viewport dimensions in to Snowplow. Again, both numbers should be positive integers and the order is width followed by height. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"subject.setViewport(300, 200)\n")),(0,r.kt)("h3",{id:"set-the-color-depth-withsetcolordepth"},"Set the color depth with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setColorDepth")),(0,r.kt)("p",null,"If your Scala code has access to the bit depth of the device's color palette for displaying images, you can pass it in to Snowplow. The number should be a positive integer, in bits per pixel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"subject.setColorDepth(24)\n")),(0,r.kt)("h3",{id:"setting-the-timezone-withsettimezone"},"Setting the timezone with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setTimezone")),(0,r.kt)("p",null,"If your Scala code has access to the timezone of the device, you can pass it in to Snowplow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'subject.setTimezone("Europe London")\n')),(0,r.kt)("h3",{id:"setting-the-language-withsetlang"},"Setting the language with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setLang")),(0,r.kt)("p",null,"You can set the language field like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'subject.setLang("en")\n')),(0,r.kt)("h3",{id:"setting-the-ip-address-withsetipaddress"},"Setting the IP address with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setIpAddress")),(0,r.kt)("p",null,"If you have access to the user's IP address, you can set it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'subject.setIpAddresss("34.634.11.139")\n')),(0,r.kt)("h3",{id:"setting-the-useragent-withsetuseragent"},"Setting the useragent with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"setUseragent")),(0,r.kt)("p",null,'If you have access to the user\'s useragent (sometimes called "browser string"), you can set it like this:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'subject.setUseragent("Mozilla/5.0 (Windows NT 5.1; rv:24.0) Gecko/20100101 Firefox/24.0")\n')),(0,r.kt)("h3",{id:"setting-the-domain-user-id-with-setdomainuserid"},"Setting the domain user ID with ",(0,r.kt)("inlineCode",{parentName:"h3"},"setDomainUserId")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"domain_userid"),"\xa0field of the Snowplow event model corresponds to the ID stored in the first party cookie set by the Snowplow JavaScript Tracker. If you want to match up server-side events with client-side events, you can set the domain user ID for server-side events like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'subject.setDomainUserId("c7aadf5c60a5dff9")\n')),(0,r.kt)("h3",{id:"setting-the-network-user-id-with-setnetworkuserid"},"Setting the network user ID with ",(0,r.kt)("inlineCode",{parentName:"h3"},"setNetworkUserId")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"network_user_id"),"\xa0field of the Snowplow event model corresponds to the ID stored in the third party cookie set by the Snowplow Clojure Collector and Scala Stream Collector. You can set the network user ID for server-side events like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'subject.setNetworkUserId("ecdff4d0-9175-40ac-a8bb-325c49733607")\n')))}p.isMDXComponent=!0}}]);