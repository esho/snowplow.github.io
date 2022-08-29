"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[98576],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64714:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Device info context",date:"2021-12-23",sidebar_position:4750},l=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/roku-tracker/device-context/index",id:"collecting-data/collecting-from-own-applications/roku-tracker/device-context/index",title:"Device info context",description:"Device Info Context is an entity attached to events that provides information about the Roku device. It gives information about the device model and OS, adds unique identifiers for the channel and device, includes playback settings, current device usage, locale, display properties, network status, and device features.",source:"@site/docs/collecting-data/collecting-from-own-applications/roku-tracker/device-context/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/roku-tracker/device-context",slug:"/collecting-data/collecting-from-own-applications/roku-tracker/device-context/",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/device-context/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/roku-tracker/device-context/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:4750,frontMatter:{title:"Device info context",date:"2021-12-23",sidebar_position:4750},sidebar:"tutorialSidebar",previous:{title:"Video tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/video-tracking/"},next:{title:"Example Roku app with Snowplow tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/example-app/"}},d={},p=[{value:"Roku&#39;s ID for Advertisers (RIDA)",id:"rokus-id-for-advertisers-rida",level:2}],s={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Device Info Context is an entity attached to events that provides information about the Roku device. It gives information about the device model and OS, adds unique identifiers for the channel and device, includes playback settings, current device usage, locale, display properties, network status, and device features."),(0,r.kt)("p",null,"The context is automatically added to all tracked events by default. If you prefer not to add the context to events, you may disable it using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"subject.deviceContext"),"\xa0option during tracker initialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"m.global.snowplow.init = {\n   subject: {\n      deviceContext: false ' disabling device info context\n   },\n   ...\n}\n")),(0,r.kt)("p",null,"The context entity reflects the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://developer.roku.com/en-gb/docs/references/brightscript/interfaces/ifdeviceinfo.md"},"ifDeviceInfo interface"),"\xa0in Roku SDK and picks some useful properties from it. It adds the following information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"model")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Model name of the Roku device (e.g., 3940EU)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"modelDisplayName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Model display name (e.g., Roku Express 4K)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"modelType")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of device (STB or TV)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"osVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Roku OS version (e.g., 10.5.1.4059) (Roku OS \u2265 9.2)"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"channelClientId")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique device identifier that is different across channels (Roku OS \u2265 8.1)"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isRIDADisabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether tracking via Roku's ID for Advertisers (RIDA) is disabled (Roku OS \u2265 8.1)"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RIDA")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"A persistent unique identifier (UUID) for the device (Roku OS \u2265 8.1)"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"captionsMode")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Global captions are turned on or off, or are in instant replay mode"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"audioOutputChannel")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of audio output"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"memoryLevel")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"General memory level of the channel (normal, low, critical) (Roku OS \u2265 8.1)"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeSinceLastKeypress")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of seconds since the last remote keypress was received"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userCountryCode")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 3166-1 country code of the user's Roku account (Roku OS \u2265 8.1)"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"countryCode")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Roku Channel Store associated with a user's Roku account"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"videoMode")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Video playback resolution"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"displayWidth")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Physical width of the attached display in centimeters"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"displayHeight")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Physical height of the attached display in centimeters"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"displayProperties")),(0,r.kt)("td",{parentName:"tr",align:null},"String","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of keys for display properties of the screen"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"connectionType")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of internet connection the device is using (e.g., WiFiConnection)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"internetStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Internet connection status of the device (Roku OS \u2265 10.0) ."),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"features")),(0,r.kt)("td",{parentName:"tr",align:null},"String","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of features that the current device/firmware supports"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")))),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"displayProperties"),"\xa0list may include keys for the following display properties:\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Internal"),"\xa0(display part of Roku player),\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Hdr10"),"\xa0(display supports HDR10),\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Hdr10Plus"),"\xa0(display supports HDR10),\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"DolbyVision"),"\xa0(display supports Dolby Vision). The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"features"),"\xa0list of activated features of the device may include\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"5.1_surround_sound"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"can_output_5.1_surround_sound"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sd_only_hardware"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"usb_hardware"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sdcard_hardware"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ethernet_hardware"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"gaming_hardware"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"energy_star_compliant"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"soundbar_hardware"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"handsfree_voice"),"."),(0,r.kt)("h2",{id:"rokus-id-for-advertisers-rida"},"Roku's ID for Advertisers (RIDA)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RIDA"),"\xa0is a Universally Unique Identifier (UUID) that is unique and persistent for the Roku device. It is designed to generally follow the guidelines established for the IDFA (Identifier for Advertising) that are available on other platforms such as iOS and Android. The ID is intended for Roku publishers to enable frequency capping and targeted advertising on the Roku platform."),(0,r.kt)("p",null,'Users can disable RIDA tracking by selecting "Limit ad tracking" in the device settings. In this case, the\xa0',(0,r.kt)("inlineCode",{parentName:"p"},"IsRIDADisabled"),"\xa0property will be true and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"RIDA"),"\xa0will be a temporary ID that expires after 30 days."),(0,r.kt)("p",null,"RIDA is tracked by the tracker by default. However, there may be cases where you may not want to track the identifier. To disable tracking RIDA, deactivate the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"subject.RIDATracking"),"\xa0option during tracker initialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"m.global.snowplow.init = {\n   subject: {\n      RIDATracking: false ' disabling tracking RIDA\n   },\n   ...\n}\n")))}c.isMDXComponent=!0}}]);