"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[25470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return a?s.createElement(m,o(o({ref:t},u),{},{components:a})):s.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=a(87462),n=(a(67294),a(3905));const r={title:"Adding extra data: the Subject class",date:"2020-02-25",sidebar_position:30},o=void 0,i={unversionedId:"collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/index",id:"collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/index",title:"Adding extra data: the Subject class",description:"Subject information describes the user and device associated with the event, such as their user ID, what type of device they used, or what size screen that device had.",source:"@site/docs/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class",slug:"/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/c-tracker/adding-extra-data-the-subject-class/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:30,frontMatter:{title:"Adding extra data: the Subject class",date:"2020-02-25",sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"Initialisation",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/initialisation/"},next:{title:"Tracking specific events",permalink:"/docs/collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/"}},l={},c=[{value:"Set user ID with\xa0&quot;set_user_id&quot;",id:"set-user-id-withset_user_id",level:2},{value:"Set screen resolution with\xa0&quot;set_screen_resolution&quot;",id:"set-screen-resolution-withset_screen_resolution",level:2},{value:"Set viewport dimensions with\xa0&quot;set_viewport&quot;",id:"set-viewport-dimensions-withset_viewport",level:2},{value:"Set color depth with\xa0&quot;set_color_depth&quot;",id:"set-color-depth-withset_color_depth",level:2},{value:"Set timezone with\xa0&quot;set_timezone&quot;",id:"set-timezone-withset_timezone",level:2},{value:"Set the language with\xa0&quot;set_language&quot;",id:"set-the-language-withset_language",level:2},{value:"Set custom user-agent with\xa0&quot;set_useragent&quot;",id:"set-custom-user-agent-withset_useragent",level:2},{value:"Set user&#39;s IP address with\xa0&quot;set_ip_address&quot;",id:"set-users-ip-address-withset_ip_address",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Subject information describes the user and device associated with the event, such as their user ID, what type of device they used, or what size screen that device had."),(0,n.kt)("p",null,"Create a subject like this and add it to your tracker using the\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"Snowplow::create_tracker"),"\xa0call:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'auto subject = make_shared<Subject>();\nsubject.set_user_id("a-user-id");\n\nauto tracker = Snowplow::create_tracker("ns", "https://com.acme.collector", POST, "events.db", subject);\n')),(0,n.kt)("p",null,"You can also attach custom Subject information to individual events. In this way, you may track events describing different users or devices using the same tracker. Events can be assigned a shared C++ pointer to a Subject instance using the\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"set_subject"),"\xa0method. The following example shows how to attach a subject instance to a structured event (see\xa0",(0,n.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/"},"Tracking specific events"),"\xa0for more information on tracking events):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'auto subject = std::make_shared<Subject>();\nsubject->set_user_id("another-user");\n\nStructuredEvent se("category", "action");\nse.set_subject(subject);\n')),(0,n.kt)("p",null,"The Subject class has a set of\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"set...()"),"\xa0methods to attach extra data relating to the user to all tracked events:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set_user_id")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set_screen_resolution")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set_viewport")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set_color_depth")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set_timezone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set_language")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set_useragent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set_ip_address"))),(0,n.kt)("p",null,"We will discuss each of these in turn below:"),(0,n.kt)("h2",{id:"set-user-id-withset_user_id"},'Set user ID with\xa0"set',"_","user","_",'id"'),(0,n.kt)("p",null,"You can set the user ID to any string:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'subject->set_user_id( "{{USER ID}}" );\n')),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'subject->set_user_id("alexd");\n')),(0,n.kt)("h2",{id:"set-screen-resolution-withset_screen_resolution"},'Set screen resolution with\xa0"set',"_","screen","_",'resolution"'),(0,n.kt)("p",null,"If your code has access to the device\u2019s screen resolution, then you can pass this in to Snowplow too:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_screen_resolution( {{WIDTH}}, {{HEIGHT}} );\n")),(0,n.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_screen_resolution(1366, 768);\n")),(0,n.kt)("h2",{id:"set-viewport-dimensions-withset_viewport"},'Set viewport dimensions with\xa0"set',"_",'viewport"',(0,n.kt)("a",{parentName:"h2",href:"https://file+.vscode-resource.vscode-cdn.net/Users/matus/Projects/Snowplow/snowplow-cpp-tracker/docs/03-adding-data.md#set-viewport-dimensions-with-set_viewport"})),(0,n.kt)("p",null,"If your code has access to the viewport dimensions, then you can pass this in to Snowplow too:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_viewport( {{WIDTH}}, {{HEIGHT}} );\n")),(0,n.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_viewport(300, 200);\n")),(0,n.kt)("h2",{id:"set-color-depth-withset_color_depth"},'Set color depth with\xa0"set',"_","color","_",'depth"',(0,n.kt)("a",{parentName:"h2",href:"https://file+.vscode-resource.vscode-cdn.net/Users/matus/Projects/Snowplow/snowplow-cpp-tracker/docs/03-adding-data.md#set-color-depth-with-set_color_depth"})),(0,n.kt)("p",null,"If your code has access to the bit depth of the device\u2019s color palette for displaying images, then you can pass this in to Snowplow too:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_color_depth( {{BITS PER PIXEL}} );\n")),(0,n.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_color_depth(32);\n")),(0,n.kt)("h2",{id:"set-timezone-withset_timezone"},'Set timezone with\xa0"set',"_",'timezone"'),(0,n.kt)("p",null,"This method lets you pass a user\u2019s timezone in to Snowplow:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_timezone( {{TIMEZONE}} );\n")),(0,n.kt)("p",null,"The timezone should be a string:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'subject->set_timezone("Europe/London");\n')),(0,n.kt)("h2",{id:"set-the-language-withset_language"},'Set the language with\xa0"set',"_",'language"',(0,n.kt)("a",{parentName:"h2",href:"https://file+.vscode-resource.vscode-cdn.net/Users/matus/Projects/Snowplow/snowplow-cpp-tracker/docs/03-adding-data.md#set-the-language-with-set_language"})),(0,n.kt)("p",null,"This method lets you pass a user\u2019s language in to Snowplow:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_language( {{LANGUAGE}} );\n")),(0,n.kt)("p",null,"The language should be a string:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_language('en');\n")),(0,n.kt)("h2",{id:"set-custom-user-agent-withset_useragent"},'Set custom user-agent with\xa0"set',"_",'useragent"'),(0,n.kt)("p",null,"To change the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"},"user-agent string"),"\xa0sent along with events to identify the application and system, you may set custom useragent using this method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_useragent( {{USERAGENT}} );\n")),(0,n.kt)("p",null,"The user-agent should be a string:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'subject->set_useragent("YourApp/5.0 (Macintosh; Intel Mac OS X 10_15_7)");\n')),(0,n.kt)("h2",{id:"set-users-ip-address-withset_ip_address"},"Set user's IP address with\xa0\"set","_","ip","_",'address"'),(0,n.kt)("p",null,"To set the user's IP address, you may use this method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"subject->set_ip_address( {{IP_ADDRESS}} );\n")),(0,n.kt)("p",null,"The IP address should be a string:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'subject->set_ip_address("169.254.0.2");\n')),(0,n.kt)("p",null,"If the IP address is not set, the events will be assigned the IP address from the HTTP request by the Collector."))}p.isMDXComponent=!0}}]);