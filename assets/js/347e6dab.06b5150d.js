"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[20478],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12484:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Session",date:"2020-02-26",sidebar_position:60},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/net-tracker/session/index",id:"collecting-data/collecting-from-own-applications/net-tracker/session/index",title:"Session",description:"The Session object is responsible for maintaining persistent data around user sessions over the life-time of an application.",source:"@site/docs/collecting-data/collecting-from-own-applications/net-tracker/session/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/net-tracker/session",slug:"/collecting-data/collecting-from-own-applications/net-tracker/session/",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/session/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/net-tracker/session/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:60,frontMatter:{title:"Session",date:"2020-02-26",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Event Tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/event-tracking/"},next:{title:"Platform specific functions",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/platform-specific-functions/"}},s={},c=[{value:"Constructor",id:"constructor",level:3},{value:"6.2 Functions",id:"62-functions",level:3},{value:"<code>SetBackground(bool)</code>",id:"setbackgroundbool",level:4}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Session object is responsible for maintaining persistent data around user sessions over the life-time of an application."),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Argument Name")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required?")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Default")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"savePath")),(0,a.kt)("td",{parentName:"tr",align:null},"The path to save persistent data into"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"foregroundTimeout")),(0,a.kt)("td",{parentName:"tr",align:null},"The time until a session expires in focus"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"600 (s)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"backgroundTimeout")),(0,a.kt)("td",{parentName:"tr",align:null},"The time until a session expires in back"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"300 (s)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"checkInterval")),(0,a.kt)("td",{parentName:"tr",align:null},"How often to validate the session timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"15 (s)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"logger")),(0,a.kt)("td",{parentName:"tr",align:null},"The logger to use within the application"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Null")))),(0,a.kt)("p",null,"A full ClientSession construction should look like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'ClientSession session = new ClientSession ("save_file_path.xml");\n')),(0,a.kt)("p",null,"The timeout's refer to the length of time the session remains active after the last event is sent. As long as events are sent within this limit the session will not timeout."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": When using the Tracker within Xamarin you will need to fetch a correct path for internal storage. Some example code for fetching this path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Android\npublic string GetLocalFilePath(string filename)\n{\n  string path = Environment.GetFolderPath(Environment.SpecialFolder.Personal);\n  return Path.Combine(path, filename);\n}\n\n// iOS\npublic string GetLocalFilePath(string filename)\n{\n  string docFolder = Environment.GetFolderPath(Environment.SpecialFolder.Personal);\n  string libFolder = Path.Combine(docFolder, "..", "Library", "Databases");\n\n  if (!Directory.Exists(libFolder))\n  {\n    Directory.CreateDirectory(libFolder);\n  }\n\n  return Path.Combine(libFolder, filename);\n}\n')),(0,a.kt)("h3",{id:"62-functions"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/.NET-Tracker#62-functions"}),"6.2 Functions"),(0,a.kt)("h4",{id:"setbackgroundbool"},(0,a.kt)("inlineCode",{parentName:"h4"},"SetBackground(bool)")),(0,a.kt)("p",null,"Will set whether or not the application is in the background. It is up to the developer to set this metric if they wish to have a different timeout for foreground and background."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": If a timeout occurs while the application has been backgrounded the SessionChecker will be stopped automatically. Session checking will resume on Foregrounding or on an event being tracked."))}u.isMDXComponent=!0}}]);