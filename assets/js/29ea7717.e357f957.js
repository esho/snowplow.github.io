"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[32018],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),f=n,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||r;return a?o.createElement(h,l(l({ref:t},d),{},{components:a})):o.createElement(h,l({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83300:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const r={title:"Android - Google Play Data Safety",date:"2021-11-24",sidebar_position:1e3},l=void 0,i={unversionedId:"collecting-data/collecting-from-own-applications/mobile-trackers/android-google-play-data-safety/index",id:"collecting-data/collecting-from-own-applications/mobile-trackers/android-google-play-data-safety/index",title:"Android - Google Play Data Safety",description:"Google Play is launching a new Data safety section to help app developers showcase their app\u2019s overall safety. The section, to be displayed on each app\u2019s store listing page, will summarize the app\u2019s privacy and security practices, as well as explain the data the app may collect and share from users (and why).",source:"@site/docs/collecting-data/collecting-from-own-applications/mobile-trackers/android-google-play-data-safety/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/mobile-trackers/android-google-play-data-safety",slug:"/collecting-data/collecting-from-own-applications/mobile-trackers/android-google-play-data-safety/",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/android-google-play-data-safety/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/mobile-trackers/android-google-play-data-safety/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:1e3,frontMatter:{title:"Android - Google Play Data Safety",date:"2021-11-24",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Objective-C (iOS) (0.1.0)",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/objective-c-0-1-0/"},next:{title:"React Native Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/react-native-tracker/"}},s={},c=[{value:"Key dates to be aware of",id:"key-dates-to-be-aware-of",level:2},{value:"Guidance for Snowplow Android Tracker users",id:"guidance-for-snowplow-android-tracker-users",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Google Play is launching a new Data safety section to help app developers showcase their app\u2019s overall safety. The section, to be displayed on each app\u2019s store listing page, will summarize the app\u2019s privacy and security practices, as well as explain the data the app may collect and share from users (and why)."),(0,n.kt)("p",null,"To comply with this new requirement, app developers will need to complete a ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/pNAS_0IcHtM"},"new Data safety form in Play Console")," that asks them to disclose how any first-party and third-party code (such as third-party libraries or SDKs) in their apps collect and share such data."),(0,n.kt)("p",null,"Google Play team published several resources to help app developers navigate this new requirement:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"https://notifications.google.com/g/p/AD-FnEzpM5OIRR9qJ0cLnuIwMUN4WlfZCYSLvasCsNu4xihuMgCDuPxTmZbi2LfHb_mZOcWdLEIs2EZ-oPJRd30cgIbtR-PNHP0lGpUFlgjixAf_eW-8JfoVcgh5lkaOEzwq4xPJjGCz1h90GXY"},"Help Center article")," with policy guidance for app developers."),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("a",{parentName:"li",href:"https://notifications.google.com/g/p/AD-FnEyRmAjHbFOlf4uK4pt5SWZ45hcuBi-at_hyCBVLgiNCd3UjAGFtKrKmxsPKIDTyHYFGf4QLjU4sY46_Rp-XBZHy6LnInPiV9ZW7hB8MSWsNOXz_P9u4LV0T5JfG0mGWHw"},"Android Developers guide")," to help app developers review how their app collects, protects and shares data."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"https://notifications.google.com/g/p/AD-FnEwkvMQvGbxZvh5t6QOkS6Onk77dUNH4xO2t9EnJVQIZDqnP6Hq7Va337l4fGm6NPcap_GSXBSfmAkWgR-xdHNNWwI9TX9D1agSbiTVg87aVsI_m2-rOnqWf8bBom8poRMlEQGg3IujfPRctUuJEp2lvSqL6re2NCMbbVEBJlPvQqXtEjQwHpxXpGE71TEuAwIW5fHTXJz4VlbQo-GQhcx29Q4g3YxXGDScUgg"},"Play Academy course")," that explains how various example apps should fill out the form.")),(0,n.kt)("p",null,"In particular, ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/googleplay/android-developer/answer/10787469?hl=en#in_play_console"},"in this table")," are the data that the developers need to disclose in the Data safety form."),(0,n.kt)("h2",{id:"key-dates-to-be-aware-of"},"Key dates to be aware of"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Starting October 18:")," App developers will start to see the Data safety section form in Play Console and are asked to start to complete and submit for review."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"February 2022:")," Users will start to see the Data safety section on app Store listing for apps with completed and approved form submissions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"April 2022:")," New app submissions and app updates will be rejected in Play Console if there are unresolved issues with the app developer\u2019s form"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"After April 2022:")," Play may take further enforcement actions against non-compliant apps according to Play\u2019s developer policy, including removal from the store.")),(0,n.kt)("h2",{id:"guidance-for-snowplow-android-tracker-users"},"Guidance for Snowplow Android Tracker users"),(0,n.kt)("p",null,"To assist developers in helping build user data and security transparency, the guidance below can be used to publish SDK guidance for developers incorporating our Snowplow Android Tracker into their apps."),(0,n.kt)("p",null,"The developer will be asked to provide information for various ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/googleplay/android-developer/answer/10787469#zippy=%2Cdata-types"},"data types"),"."),(0,n.kt)("p",null,"The Android Snowplow Tracker can be fully configured by the developer in order to track only the data that really matters. Much of the functionality of the tracker and the automatically tracked events are optional and they can be specifically configured at compile-time and at runtime. All the data tracked by the tracker is under the developers control and is only sent to a pipeline provided by the customer. Snowplow can\u2019t access any of the data tracked by the tracker."),(0,n.kt)("p",null,"Below the details of the data trackable with the Snowplow Android Tracker:"),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Category"),(0,n.kt)("td",null,"Data type"),(0,n.kt)("td",null,"Description"),(0,n.kt)("td",null,"Snowplow Android TrackerFeature")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Location"),(0,n.kt)("td",null,"Approximate location"),(0,n.kt)("td",null,"User or device physical location to an area greater than or equal to 3 square kilometers, such as the city a user is in, or location provided by Android\u2019s ACCESS_COARSE_LOCATION permission."),(0,n.kt)("td",null,"\u2705 Geolocation context(optional and ",(0,n.kt)("strong",null,"disabled")," by default in TrackerConfiguration geoLocationContext)")),(0,n.kt)("tr",null,(0,n.kt)("td",null),(0,n.kt)("td",null,"Precise location"),(0,n.kt)("td",null,"User or device physical location within an area less than 3 square kilometers, such as location provided by Android\u2019s ACCESS_FINE_LOCATION permission."),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,"App activity"),(0,n.kt)("td",null,"Page views and taps in app"),(0,n.kt)("td",null,"Information about how a user interacts with your app. For example, the number of page views or the screen coordinates of taps."),(0,n.kt)("td",null,"\u2705 ScreenView automatic tracking(optional but enabled by default in TrackerConfiguration screenViewAutotracking)")),(0,n.kt)("tr",null,(0,n.kt)("td",null),(0,n.kt)("td",null,"In-app search history"),(0,n.kt)("td",null,"Information about what a user has searched for in your app."),(0,n.kt)("td",null,"\u274c")),(0,n.kt)("tr",null,(0,n.kt)("td",null),(0,n.kt)("td",null,"Installed apps"),(0,n.kt)("td",null,"Information about the apps installed on a user's device."),(0,n.kt)("td",null,"\u274c")),(0,n.kt)("tr",null,(0,n.kt)("td",null),(0,n.kt)("td",null,"Other user-generated content"),(0,n.kt)("td",null,"Any other user-generated content not listed here, or in any other section. For example, user bios or notes."),(0,n.kt)("td",null,"\u274c")),(0,n.kt)("tr",null,(0,n.kt)("td",null),(0,n.kt)("td",null,"Other actions"),(0,n.kt)("td",null,"Any other user activity or actions in-app not listed here such as gameplay and likes."),(0,n.kt)("td",null,"\u2705 Session automatic tracking(optional but enabled by default in TrackerConfiguration sessionContext)",(0,n.kt)("br",null),"\u2705 Background-Foreground transition tracking(optional but enabled by default in TrackerConfiguration lifecycleAutotracking)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Web browsing"),(0,n.kt)("td",null,"Web browsing history"),(0,n.kt)("td",null,"Information about the websites a user has visited."),(0,n.kt)("td",null,"\u274c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"App info and performance"),(0,n.kt)("td",null,"Crash logs"),(0,n.kt)("td",null,"Crash log data from your app. For example, the number of times your app has crashed, stack traces, or other information directly related to a crash."),(0,n.kt)("td",null,"\u2705 Crash reporting automatic tracking(optional but enabled by default in TrackerConfiguration exceptionAutotracking)")),(0,n.kt)("tr",null,(0,n.kt)("td",null),(0,n.kt)("td",null,"Diagnostics"),(0,n.kt)("td",null,"Information about the performance of your app. For example battery life, loading time, latency, framerate, or any technical diagnostics."),(0,n.kt)("td",null,"\u2705 Platform context\xa0(optional but enabled by default in TrackerConfiguration platformContext)")),(0,n.kt)("tr",null,(0,n.kt)("td",null),(0,n.kt)("td",null,"Other app performance data"),(0,n.kt)("td",null,"Any other app performance data not listed here."),(0,n.kt)("td",null,"\u274c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Device or other identifiers"),(0,n.kt)("td",null,"Device or other identifiers"),(0,n.kt)("td",null,"Identifiers that relate to an individual device, browser or app. For example, an IMEI number, MAC address, Widevine Device ID, Firebase installation ID, or advertising identifier."),(0,n.kt)("td",null,"\u2705 Advertising identifier (AAID, also called IDFA) (optional but it requires TrackerConfiguration platformContext which is enabled by default, a dependency with com.google.android.gms:play-services-ads and a ",(0,n.kt)("a",{href:"https://ads-developers.googleblog.com/2018/10/announcing-v1700-of-android-google.html"},"tag")," on androidManifest.xml)")))),(0,n.kt)("p",null,"Note: The IP address of the device can be tracked by the collector. The Snowplow Android Tracker can\u2019t disable the collector IP tracking from the client app."))}p.isMDXComponent=!0}}]);