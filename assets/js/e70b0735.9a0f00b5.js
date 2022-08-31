"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[66428],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Adding extra data: the Subject class",date:"2020-02-25",sidebar_position:30},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/index",id:"collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/index",title:"Adding extra data: the Subject class",description:"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event.",source:"@site/docs/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class",slug:"/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/",permalink:"/docs/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/actionscript3-tracker/adding-extra-data-the-subject-class/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:30,frontMatter:{title:"Adding extra data: the Subject class",date:"2020-02-25",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Initialisation",permalink:"/docs/collecting-data/collecting-from-own-applications/actionscript3-tracker/actionscript-3-tracker-initialisation/"},next:{title:"Tracking specific events",permalink:"/docs/collecting-data/collecting-from-own-applications/actionscript3-tracker/tracking-specific-events/"}},s={},c=[{value:"Set user ID with\xa0<code>setUserId</code>",id:"set-user-id-withsetuserid",level:3},{value:"Set screen resolution with\xa0<code>setScreenResolution</code>",id:"set-screen-resolution-withsetscreenresolution",level:3},{value:"Set viewport dimensions with\xa0<code>setViewport</code>",id:"set-viewport-dimensions-withsetviewport",level:3},{value:"Set color depth with\xa0<code>setColorDepth</code>",id:"set-color-depth-withsetcolordepth",level:3},{value:"Set timezone with\xa0<code>setTimezone</code>",id:"set-timezone-withsettimezone",level:3},{value:"Set the language with\xa0<code>setLanguage</code>",id:"set-the-language-withsetlanguage",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may have additional information about your application's environment, current user and so on, which you want to send to Snowplow with each event."),(0,o.kt)("p",null,"The Subject class has a set of\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"set...()"),"\xa0methods to attach extra data relating to the user to all tracked events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setUserId")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setScreenResolution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setViewport")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setColorDepth")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setTimezone")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setLanguag"),(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/ActionScript3-Tracker#set-lang"},(0,o.kt)("inlineCode",{parentName:"a"},"e")))),(0,o.kt)("p",null,"Here are some examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'s1.setUserID("Kevin Gleason");\ns1.setLanguage("en-gb");\ns1.setScreenResolution(1920, 1080);\n')),(0,o.kt)("p",null,"After that, you can add your Subject to your Tracker like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Tracker(emitter, namespace, appId, s1);\n// OR\nt1.setSubject(s1);\n")),(0,o.kt)("h3",{id:"set-user-id-withsetuserid"},"Set user ID with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setUserId")),(0,o.kt)("p",null,"You can set the user ID to any string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'s1.setUserId( "{{USER ID}}" )\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'s1.setUserId("alexd")\n')),(0,o.kt)("h3",{id:"set-screen-resolution-withsetscreenresolution"},"Set screen resolution with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setScreenResolution")),(0,o.kt)("p",null,"If you wish to track the device's screen resolution, then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"t1.setScreenResolution( {{WIDTH}}, {{HEIGHT}} )\n")),(0,o.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"t1.setScreenResolution(1366, 768)\n")),(0,o.kt)("p",null,"You can get these values by referencing\xa0",(0,o.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/system/Capabilities.html#screenResolutionX"},"flash.system.Capabilities.screenResolutionX"),"\xa0and\xa0",(0,o.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/system/Capabilities.html#screenResolutionY"},"flash.system.Capabilities.screenResolutionY"),", although they will only reflect the dimensions of the main screen."),(0,o.kt)("p",null,"Alternatively, if your AS3 code has script access via\xa0",(0,o.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/external/ExternalInterface.html"},"ExternalInterface"),", you can use Javascript to query these values from the browser or another player context."),(0,o.kt)("h3",{id:"set-viewport-dimensions-withsetviewport"},"Set viewport dimensions with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setViewport")),(0,o.kt)("p",null,"If your AS3 code has access to the viewport dimensions (by calling Javascript code through\xa0",(0,o.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/external/ExternalInterface.html"},"ExternalInterface"),"), then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"s.setViewport( {{WIDTH}}, {{HEIGHT}} )\n")),(0,o.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"s.setViewport(300, 200)\n")),(0,o.kt)("h3",{id:"set-color-depth-withsetcolordepth"},"Set color depth with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setColorDepth")),(0,o.kt)("p",null,"If your AS3 code has access to the bit depth of the device's color palette for displaying images (by calling Javascript's screen.colorDepth via\xa0",(0,o.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/external/ExternalInterface.html"},"ExternalInterface"),"), then you can pass this in to Snowplow too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"s.setColorDepth( {{BITS PER PIXEL}} )\n")),(0,o.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"s.setColorDepth(32)\n")),(0,o.kt)("h3",{id:"set-timezone-withsettimezone"},"Set timezone with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setTimezone")),(0,o.kt)("p",null,"This method lets you pass a user's timezone in to Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"s.setTimezone( {{TIMEZONE}} )\n")),(0,o.kt)("p",null,"The timezone should be a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'s.setTimezone("Europe/London")\n')),(0,o.kt)("h3",{id:"set-the-language-withsetlanguage"},"Set the language with\xa0",(0,o.kt)("inlineCode",{parentName:"h3"},"setLanguage")),(0,o.kt)("p",null,"This method lets you pass a user's language in to Snowplow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"s.setLanguage( {{LANGUAGE}} )\n")),(0,o.kt)("p",null,"The language should be a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"s.setLanguage('en')\n")))}u.isMDXComponent=!0}}]);