"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[98260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),k=r,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},65817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(37419);const i={title:"Arduino Tracker",date:"2020-02-25",sidebar_position:290},l=void 0,p={unversionedId:"collecting-data/collecting-from-own-applications/arduino-tracker/index",id:"collecting-data/collecting-from-own-applications/arduino-tracker/index",title:"Arduino Tracker",description:"The\xa0Snowplow Arduino tracker\xa0allows you to track Snowplow events from an IP-connected\xa0Arduino\xa0board.",source:"@site/docs/collecting-data/collecting-from-own-applications/arduino-tracker/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/arduino-tracker",slug:"/collecting-data/collecting-from-own-applications/arduino-tracker/",permalink:"/docs/collecting-data/collecting-from-own-applications/arduino-tracker/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/arduino-tracker/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:290,frontMatter:{title:"Arduino Tracker",date:"2020-02-25",sidebar_position:290},sidebar:"tutorialSidebar",previous:{title:"Google Analytics Plugin",permalink:"/docs/collecting-data/collecting-from-own-applications/google-analytics-plugin/"},next:{title:"ActionScript3 Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/actionscript3-tracker/"}},u={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Tracker compatibility",id:"tracker-compatibility",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Testing",id:"testing",level:3},{value:"Integrating into your sketch",id:"integrating-into-your-sketch",level:2},{value:"General configuration and parameters",id:"general-configuration-and-parameters",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Required headers",id:"required-headers",level:4},{value:"Initialize SnowplowTracker",id:"initialize-snowplowtracker",level:4},{value:"Setting the endpoint",id:"setting-the-endpoint",level:4},{value:"Setting a Cloudfront endpoint using <code>initCf()</code>",id:"setting-a-cloudfront-endpoint-using-initcf",level:4},{value:"Setting a non-Cloudfront endpoint using <code>initUrl()</code>",id:"setting-a-non-cloudfront-endpoint-using-initurl",level:4},{value:"Setting the user ID",id:"setting-the-user-id",level:4},{value:"Setting the user ID using\xa0<code>setUserId</code>",id:"setting-the-user-id-usingsetuserid",level:5},{value:"Tracking specific events",id:"tracking-specific-events",level:2},{value:"Common",id:"common",level:3},{value:"Return codes",id:"return-codes",level:3},{value:"Tracking custom structured events",id:"tracking-custom-structured-events",level:3},{value:"<code>trackStructEvent</code>\xa0overview",id:"trackstructeventoverview",level:4},{value:"<code>trackStructEvent</code>: no\xa0<code>aValue</code>",id:"trackstructevent-noavalue",level:4},{value:"<code>trackStructEvent</code>: integer\xa0<code>aValue</code>",id:"trackstructevent-integeravalue",level:4},{value:"<code>trackStructEvent</code>: double\xa0<code>aValue</code>",id:"trackstructevent-doubleavalue",level:4},{value:"<code>trackStructEvent</code>: float\xa0<code>aValue</code>",id:"trackstructevent-floatavalue",level:4},{value:"Testing and debugging",id:"testing-and-debugging",level:2},{value:"Setup debugging",id:"setup-debugging",level:3}],d={toc:c};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"Block2899"}),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-arduino-tracker"},"Snowplow Arduino tracker"),"\xa0allows you to track Snowplow events from an IP-connected\xa0",(0,r.kt)("a",{parentName:"p",href:"http://arduino.cc/"},"Arduino"),"\xa0board."),(0,r.kt)("p",null,"The tracker should be straightforward to use if you are familiar with Arduino development; any prior experience with Snowplow's\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/"},"JavaScript tracker"),"\xa0or Google Analytics (which has a similar API to Snowplow) is helpful but not necessary."),(0,r.kt)("p",null,"Note that this tracker has access to a much more restricted set of Snowplow events than other trackers."),(0,r.kt)("h2",{id:"before-you-start"},"Before you start"),(0,r.kt)("h3",{id:"tracker-compatibility"},"Tracker compatibility"),(0,r.kt)("p",null,"Please note that the Snowplow Arduino Tracker requires the new Ethernet library API (with DHCP and DNS), which is in Arduino 1.0."),(0,r.kt)("p",null,"Almost all recent Arduinos (Arduino Uno, Arduino Due et al) should work fine with the Snowplow Tracker."),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"If you haven't done so already, download and install the Arduino toolchain and development environment from the\xa0",(0,r.kt)("a",{parentName:"p",href:"http://www.arduino.cc/en/Main/software"},"Arduino Software"),"\xa0page."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Follow these steps to install the Snowplow Arduino Tracker on your computer:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1)"),"\xa0Browse to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-arduino-tracker"},"Arduino Tracker's GitHub site")," and download the zip file"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2)"),"\xa0Open your Arduino software and click\xa0",(0,r.kt)("strong",{parentName:"p"},"File > Preferences"),"\xa0to check your Sketchbook location"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3)"),'\xa0Create a sub-folder within your Sketchbook location called "libraries" if it doesn\'t already exist'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4)"),'\xa0Now unzip the zip file you downloaded into the "libraries" sub-folder, renaming its top-level folder from "snowplow-arduino-tracker-master" to "SnowplowTracker":'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(79097).Z,width:"801",height:"402"})),(0,r.kt)("p",null,"That's it for installation! Now let's test the setup."),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Follow these steps to test the Snowplow Arduino Tracker with your Arduino board:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1)"),"\xa0If you have not already done so, connect your Arduino board to your computer, and to the Internet via the RJ-45 ethernet jack on your Ethernet shield, or via your Wi-Fi shield:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31472).Z,width:"432",height:"324"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2)"),"\xa0Within your Arduino software, click\xa0",(0,r.kt)("strong",{parentName:"p"},"File > Examples > SnowplowTracker > basicPing"),"\xa0to load a sample sketch which comes with the Snowplow Arduino Tracker."),(0,r.kt)("p",null,"Note that it is not necessary to make any edits to this sketch before running it (it is fine for example to leave the MAC address as specified)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3)"),"\xa0Next click\xa0",(0,r.kt)("strong",{parentName:"p"},"File > Upload"),". This should compile the sketch without any errors and upload it to your Arduino board:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4)"),"\xa0Now click\xa0",(0,r.kt)("strong",{parentName:"p"},"Tools > Serial Monitor"),"\xa0and you should see events being successfully pinged to Snowplow:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1382).Z,width:"980",height:"407"})),(0,r.kt)("p",null,"That's it for testing - although if you are interested, you can try out the three other sample sketches in under\xa0",(0,r.kt)("strong",{parentName:"p"},"File > Examples > SnowplowTracker"),"."),(0,r.kt)("h2",{id:"integrating-into-your-sketch"},"Integrating into your sketch"),(0,r.kt)("p",null,"You are now ready to integrate the Snowplow Arduino Tracker into your own sketch. This should be relatively straightforward - we recommend the following steps:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1)"),"\xa0Look at the source code of the example sketches that come with the Snowplow Arduino Tracker. You can find them on GitHub in\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-arduino-tracker/tree/master/examples"},"snowplow-arduino-tracker/examples")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2)"),"\xa0Read through the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/arduino-tracker/"},"rest of the documentation")," for the Arduino Tracker to learn exactly what tracking capabilities Snowplow can provide for your Arduino sketch."),(0,r.kt)("p",null,"For a standalone Arduino project which incorporates Snowplow tracking, please see\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alexanderdean/arduino-temp-tracker"},"arduino-temp-tracker"),"\xa0on GitHub."),(0,r.kt)("h2",{id:"general-configuration-and-parameters"},"General configuration and parameters"),(0,r.kt)("h3",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Assuming you have completed the\xa0Lua Tracker Setup\xa0for your Lua project, you are now ready to initialize the Lua Tracker."),(0,r.kt)("p",null,"You must add some initialization code to the top of your Arduino sketch, before your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"setup()"),"\xa0function:"),(0,r.kt)("h4",{id:"required-headers"},"Required headers"),(0,r.kt)("p",null,"Make sure you have the following includes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#include <SPI.h>\n#include <Ethernet.h>\n#include <SnowplowTracker.h>\n")),(0,r.kt)("h4",{id:"initialize-snowplowtracker"},"Initialize SnowplowTracker"),(0,r.kt)("p",null,"After your includes but before your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"setup()"),"\xa0function, initialize your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SnowplowTracker"),"\xa0something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// MAC address of this Arduino. Update with your shield\'s MAC address.\nconst byte mac[] = { 0x90, 0xA2, 0xDA, 0x00, 0xF8, 0xA0 };\n\n// Snowplow app name\nconst char *snowplowAppName = "my-arduino-project";\n\n// Snowplow Tracker\nSnowplowTracker snowplow(&Ethernet, mac, snowplowAppName);\n')),(0,r.kt)("p",null,"Note that this initialization includes setting the application ID for your Arduino project, as well as your device's MAC address."),(0,r.kt)("h4",{id:"setting-the-endpoint"},"Setting the endpoint"),(0,r.kt)("p",null,"Endpoint refers to the location of your collector: you need to point your Arduino tracker to your collector endpoint, to ensure that data generated by your Arduino is logged by the collector."),(0,r.kt)("p",null,"If you are using a Cloudfront collector you can use\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Arduino-Tracker#initCf"},"initCf"),"\xa0to set the endpoint. If you are using any other collector (e.g. the Clojure Collector or the Scala Stream Collector), then you should use\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Arduino-Tracker#initUrl"},"initUrl"),"."),(0,r.kt)("h4",{id:"setting-a-cloudfront-endpoint-using-initcf"},"Setting a Cloudfront endpoint using ",(0,r.kt)("inlineCode",{parentName:"h4"},"initCf()")),(0,r.kt)("p",null,"You can set the collector endpoint for the Cloudfront collector by adding to your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"setup()"),"\xa0function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow.initCf("{{CLOUDFRONT-SUBDOMAIN}}");\n')),(0,r.kt)("p",null,"So if your Cloudfront subdomain is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"d3rkrsqld9gmqf"),", you would include:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow.initCf("d3rkrsqld9gmqf");\n')),(0,r.kt)("p",null,"This completes the initialization of your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SnowplowTracker"),"."),(0,r.kt)("h4",{id:"setting-a-non-cloudfront-endpoint-using-initurl"},"Setting a non-Cloudfront endpoint using ",(0,r.kt)("inlineCode",{parentName:"h4"},"initUrl()")),(0,r.kt)("p",null,"If you are running a different collector (not the Cloudfront collector) then add to your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"setup()"),"\xa0function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow.initUrl("{{COLLECTOR-URL}}");\n')),(0,r.kt)("p",null,"So if your collector endpoint is at 'my-company.c.snplow.com' then you would include:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow.initUrl("my-company.c.snplow.com");\n')),(0,r.kt)("p",null,"This completes the initialization of your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SnowplowTracker"),"."),(0,r.kt)("h4",{id:"setting-the-user-id"},"Setting the user ID"),(0,r.kt)("p",null,"The Arduino Tracker automatically passes to the collector the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"mac_address"),"\xa0supplied on initialization."),(0,r.kt)("p",null,"However you may want to additionally identify a specific Arduino board by a more business-friendly name. To do this, you use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"setUserId"),"\xa0method."),(0,r.kt)("h5",{id:"setting-the-user-id-usingsetuserid"},"Setting the user ID using\xa0",(0,r.kt)("inlineCode",{parentName:"h5"},"setUserId")),(0,r.kt)("p",null,"To set a business-friendly user ID for this Arduino, use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"setUserId()"),"\xa0method i.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow.setUserId("boardroom-arduino");\n')),(0,r.kt)("h2",{id:"tracking-specific-events"},"Tracking specific events"),(0,r.kt)("p",null,"Tracking functions supported by the Arduino Tracker at a glance:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Function")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/snowplow/snowplow/wiki/Arduino-Tracker#trackStructEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"trackStructEvent"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track a Snowplow custom structured event")))),(0,r.kt)("h3",{id:"common"},"Common"),(0,r.kt)("p",null,"All events are tracked with specific Arduino C++ functions of the form\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackXXX"),", where\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"XXX"),"\xa0is the name of the event to track."),(0,r.kt)("p",null,"A given event type may have multiple different signatures (to support slightly different argument options or types)."),(0,r.kt)("h3",{id:"return-codes"},"Return codes"),(0,r.kt)("p",null,"All\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackXXX"),"\xa0functions return an integer to report the status of the attempt to track the given event object."),(0,r.kt)("p",null,"The full list of return codes are given below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Constant")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Integer value")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ERROR_CONNECTION_FAILED")),(0,r.kt)("td",{parentName:"tr",align:null},"-","1"),(0,r.kt)("td",{parentName:"tr",align:null},"Could not connect to Snowplow collector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ERROR_TIMED_OUT")),(0,r.kt)("td",{parentName:"tr",align:null},"-","2"),(0,r.kt)("td",{parentName:"tr",align:null},"Snowplow collector did not respond")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ERROR_INVALID_RESPONSE")),(0,r.kt)("td",{parentName:"tr",align:null},"-","3"),(0,r.kt)("td",{parentName:"tr",align:null},"Snowplow collector's response couldn't be parsed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ERROR_MISSING_ARGUMENT")),(0,r.kt)("td",{parentName:"tr",align:null},"-","4"),(0,r.kt)("td",{parentName:"tr",align:null},"Required argument(s) to\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"trackXXX"),"\xa0missing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ERROR_HTTP_STATUS")),(0,r.kt)("td",{parentName:"tr",align:null},"-","5"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP status code returned by Snowplow collector was server or client error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"1-399"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-error HTTP status code returned by Snowplow collector")))),(0,r.kt)("p",null,"You can access these constants in your code by prepending with\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SnowplowTracker::"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int ret_val = snowplow.trackXXX;\nif (ret_val == SnowplowTracker::ERROR_HTTP_STATUS) {\n  ...\n}\n")),(0,r.kt)("h3",{id:"tracking-custom-structured-events"},"Tracking custom structured events"),(0,r.kt)("p",null,"Custom structured events are the only form of tracking currently supported by the Snowplow Arduino tracker. Whenever you want to record an event or sensor reading from your IP-connected Arduino, use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackStructEvent"),"\xa0to send this data to Snowplow."),(0,r.kt)("p",null,"Some examples of tracking custom structured events from your Arduino board(s) might include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Monitoring the environment (temperature, humidity, light levels etc) in your warehouse/factory/workplace/shop/museum"),(0,r.kt)("li",{parentName:"ul"},"Tracking the movement of products around your shop/warehouse/factory using Arduino,\xa0",(0,r.kt)("a",{parentName:"li",href:"http://arduino.cc/blog/category/wireless/rfid/"},"RFID readers"),"\xa0and Snowplow"),(0,r.kt)("li",{parentName:"ul"},"Sending vehicle fleet information (locations, speeds, fuel levels etc) back to Snowplow using Arduino's\xa0",(0,r.kt)("a",{parentName:"li",href:"http://www.cooking-hacks.com/index.php/documentation/tutorials/arduino-3g-gprs-gsm-gps"},"3G and GPS"),"\xa0shields")),(0,r.kt)("h4",{id:"trackstructeventoverview"},(0,r.kt)("inlineCode",{parentName:"h4"},"trackStructEvent"),"\xa0overview"),(0,r.kt)("p",null,"There are five arguments associated with each structured event. Of them, only the first two are required:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aCategory")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The name you supply for the group of objects you want to track e.g. 'sensor', 'ecomm'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aAction")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A string which defines the type of user interaction for the web object e.g. 'read-temp', 'wifi-strength'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aLabel")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"An optional string which identifies the specific object being actioned e.g. ID of the sensor being read")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aProperty")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"An optional string describing the object or the action performed on it. This might be whether the temperature reading is in Fahrenheit or Celsius")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aValue")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"An optional float or double to quantify or further describe the user action. This might be the price of an item added-to-basket, or the starting time of the video where play was just pressed")))),(0,r.kt)("p",null,"There are four slightly different signatures for the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"tractStructEvent"),", depending on what type of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"aValue"),"\xa0you want to supply:"),(0,r.kt)("h4",{id:"trackstructevent-noavalue"},(0,r.kt)("inlineCode",{parentName:"h4"},"trackStructEvent"),": no\xa0",(0,r.kt)("inlineCode",{parentName:"h4"},"aValue")),(0,r.kt)("p",null,"The relevant signature for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackStructEvent"),"\xa0if you have no\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"aValue"),"\xa0to log is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int trackStructEvent(const char *aCategory,\n                     const char *aAction,\n                     const char *aLabel = NULL,\n                     const char *aProperty = NULL) const;\n")),(0,r.kt)("p",null,"Note that this version defaults\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"aLabel"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"aProperty"),"\xa0to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"\xa0if you don't set them. Here's an example invocation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow.trackStructEvent("example", "basic ping");\n')),(0,r.kt)("h4",{id:"trackstructevent-integeravalue"},(0,r.kt)("inlineCode",{parentName:"h4"},"trackStructEvent"),": integer\xa0",(0,r.kt)("inlineCode",{parentName:"h4"},"aValue")),(0,r.kt)("p",null,"The relevant signature for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackStructEvent"),"\xa0if\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"aValue"),"\xa0is an integer is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int trackStructEvent(const char *aCategory,\n                     const char *aAction,\n                     const char *aLabel,\n                     const char *aProperty,\n                     const int aValue) const;\n")),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Because\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"aValue"),"\xa0must be a float or double, this version of\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"trackStructEvent"),'\xa0appends ".0" to the end of the int before sending to Snowplow'),(0,r.kt)("li",{parentName:"ul"},"If you don't want to set\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"aLabel"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"aProperty"),", pass in\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"\xa0in their place")),(0,r.kt)("p",null,"Here's an example invocation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow.trackStructEvent("example", "profile-update", "age", NULL, 22);\n')),(0,r.kt)("h4",{id:"trackstructevent-doubleavalue"},(0,r.kt)("inlineCode",{parentName:"h4"},"trackStructEvent"),": double\xa0",(0,r.kt)("inlineCode",{parentName:"h4"},"aValue")),(0,r.kt)("p",null,"The relevant signature for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackStructEvent"),"\xa0to track a double in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"aValue"),"\xa0is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int trackStructEvent(const char *aCategory,\n                     const char *aAction,\n                     const char *aLabel,\n                     const char *aProperty,\n                     const double aValue,\n                     const int aValuePrecision = 2) const;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"aValuePrecision"),"\xa0lets you specify the number of decimal places to use when logging the double\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"aValue"),"\xa0(it defaults to two decimal places). Note that the default type for floating point literals in Arduino is double, not float."),(0,r.kt)("p",null,"Here's an example invocation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow.trackStructEvent("example", "constant", NULL, "pi", 3.14159, 5);\n')),(0,r.kt)("h4",{id:"trackstructevent-floatavalue"},(0,r.kt)("inlineCode",{parentName:"h4"},"trackStructEvent"),": float\xa0",(0,r.kt)("inlineCode",{parentName:"h4"},"aValue")),(0,r.kt)("p",null,"The relevant signature for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackStructEvent"),"\xa0to track a float in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"aValue"),"\xa0is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int trackStructEvent(const char *aCategory,\n                     const char *aAction,\n                     const char *aLabel,\n                     const char *aProperty,\n                     const float aValue,\n                     const int aValuePrecision = 2) const;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"aValuePrecision"),"\xa0lets you specify the number of decimal places to use when logging the float\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"aValue"),"\xa0(it defaults to two decimal places). Note that the default type for floating point literals in Arduino is double, not float."),(0,r.kt)("p",null,"Here's an example invocation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow.trackStructEvent("example", "temp reading", NULL, "celsius", 15.3f, 1);\n')),(0,r.kt)("h2",{id:"testing-and-debugging"},"Testing and debugging"),(0,r.kt)("p",null,"Arduino is a difficult platform to test and debug software on, so it's important to understand what options the Snowplow Arduino Tracker has for debugging.",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Arduino-Tracker#top"},"Back to top")),(0,r.kt)("h3",{id:"setup-debugging"},"Setup debugging"),(0,r.kt)("p",null,"By default, debug logging to your Arduino Serial Monitor console is switched\xa0",(0,r.kt)("strong",{parentName:"p"},"on"),"\xa0for the Snowplow Arduino Tracker, which should help you to identify any problems debugging your Snowplow event tracking."),(0,r.kt)("p",null,"To switch off this logging when you are finished testing, edit this line found near the top of your copy of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SnowplowTracker.cpp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#define LOG_LEVEL   0x03 // Change to 0x00 when you've finished testing\n")),(0,r.kt)("p",null,'As the comment says, change "0x03" to "0x00" to switch off all logging to your Arduino Serial Monitor console.'),(0,r.kt)("p",null,"The full set of logging levels are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Constant")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Integer value")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NO_LOG")),(0,r.kt)("td",{parentName:"tr",align:null},"0x00"),(0,r.kt)("td",{parentName:"tr",align:null},"Don't print any messages to the Serial Monitor console")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ERROR_LEVEL")),(0,r.kt)("td",{parentName:"tr",align:null},"0x01"),(0,r.kt)("td",{parentName:"tr",align:null},"Only print errors to the console")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INFO_LEVEL")),(0,r.kt)("td",{parentName:"tr",align:null},"0x02"),(0,r.kt)("td",{parentName:"tr",align:null},"Print errors and important messages to the console")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEBUG_LEVEL")),(0,r.kt)("td",{parentName:"tr",align:null},"0x03"),(0,r.kt)("td",{parentName:"tr",align:null},"Print all errors and messages to the console")))))}s.isMDXComponent=!0},37419:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Unsupported&color=24292e&labelColor=lightgrey&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Unsupported"}))))}i.isMDXComponent=!0},79097:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/libraries-folder-24b7c39d8c40a429e6bac178866c8688.png"},31472:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plug-in-arduino-8940b0b595a5d4dbce091dc4c50332f1.jpg"},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snowplow-working-f7ddbd50ed7b495e3fca9a7c7d2c2a4d.png"}}]);