"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[92093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),c=n(7094),s=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:k,values:m,groupId:f,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===k?k:null!=(t=null!=k?k:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:T}=(0,c.U)(),[C,N]=(0,a.useState)(w),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==C&&v.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=S.indexOf(t),r=v[n].value;r!==C&&(O(t),N(r),null!=f&&T(f,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=S.indexOf(e.currentTarget)+1;n=null!=(r=S[t])?r:S[0];break}case"ArrowLeft":{var a;const t=S.indexOf(e.currentTarget)-1;n=null!=(a=S[t])?a:S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>S.push(e),onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function k(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},39078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={title:"Quick Start Guide",date:"2021-04-12",sidebar_position:200},c=void 0,s={unversionedId:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/index",id:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/index",title:"Quick Start Guide",description:"Installation",source:"@site/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide",slug:"/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/quick-start-guide/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:200,frontMatter:{title:"Quick Start Guide",date:"2021-04-12",sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/introduction/"},next:{title:"Tracking Events",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/mobile-trackers-v2-x/tracking-events/"}},u={},p=[{value:"Installation",id:"installation",level:3},{value:"Instrumentation",id:"instrumentation",level:3},{value:"Installation",id:"installation-1",level:3},{value:"Instrumentation",id:"instrumentation-1",level:3}],d={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ios",label:"iOS Tracker",default:!0,mdxType:"TabItem"},(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The iOS Tracker SDK can be installed using various dependency managers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Swift Package Manager")," (Recommended)"),(0,a.kt)("p",null,"To install Snowplow Tracker with SPM:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In Xcode, select File > Swift Packages > Add Package Dependency."),(0,a.kt)("li",{parentName:"ol"},"Add the url where to download the library: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-objc-tracker"},"https://github.com/snowplow/snowplow-objc-tracker"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cocoapods")),(0,a.kt)("p",null,"To install Snowplow Tracker with Cocoapods:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure that Cocoapods is installed on your system and correctly configured for your app."),(0,a.kt)("li",{parentName:"ol"},"Add the iOS Tracker SDK among the dependencies of your ",(0,a.kt)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   pod 'SnowplowTracker', '~> 2.0'\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"pod install")," to add the tracker to your app project.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Carthage")),(0,a.kt)("p",null,"To install Snowplow Tracker with Carthage:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure that Carthage is installed on your system and correctly configured for your app."),(0,a.kt)("li",{parentName:"ol"},"Add the iOS Tracker SDK among the dependencies of your ",(0,a.kt)("inlineCode",{parentName:"li"},"Cartfile"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   github "snowplow/snowplow-objc-tracker" ~> 2.0\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"carthage update")," and drag the appropriate frameworks from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Carthage/build")," folder to your app project.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported System Version")),(0,a.kt)("p",null,"The iOS Tracker SDK supports ",(0,a.kt)("strong",{parentName:"p"},"iOS 9.0+"),", ",(0,a.kt)("strong",{parentName:"p"},"macOS 10.9+"),", ",(0,a.kt)("strong",{parentName:"p"},"tvOS 9.0+")," and ",(0,a.kt)("strong",{parentName:"p"},"watchOS 2.0+")),(0,a.kt)("h3",{id:"instrumentation"},"Instrumentation"),(0,a.kt)("p",null,"Once the tracker SDK is correctly set as a dependency in your app project you have to instrument the tracker:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your application delegate ",(0,a.kt)("inlineCode",{parentName:"li"},"AppDelegate.swift")," add ",(0,a.kt)("inlineCode",{parentName:"li"},"import SnowplowTracker"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"application(_:didFinishLaunchingWithOptions:)")," method, set up the SDK as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   let tracker = Snowplow.createTracker(namespace: "appTracker", endpoint: COLLECTOR_URL, method: .post)\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"It creates a tracker instance which can be used to track events like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   let event = Structured(category: "Category_example", action: "Action_example")\n   tracker.track(event)\n')),(0,a.kt)("p",null,"If you prefer to access the tracker when the reference is not directly accessible, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultTracker")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   Snowplow.defaultTracker().track(event)\n")),(0,a.kt)("p",null,"The tracker has a default configuration where some settings are enabled by default:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"session tracking"),(0,a.kt)("li",{parentName:"ul"},"screen tracking"),(0,a.kt)("li",{parentName:"ul"},"platform contexts (mobile specific context fields)")),(0,a.kt)("p",null,"You can override the default configuration with a fine grained configuration when you create the tracker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'let networkConfig = NetworkConfiguration(endpoint: COLLECTOR_URL, method: .post)\nlet trackerConfig = TrackerConfiguration()\n    .base64Encoding(false)\n    .sessionContext(true)\n    .platformContext(true)\n    .lifecycleAutotracking(true)\n    .screenViewAutotracking(true)\n    .screenContext(true)\n    .applicationContext(true)\n    .exceptionAutotracking(true)\n    .installAutotracking(true)\nlet sessionConfig = SessionConfiguration(\n    foregroundTimeout: Measurement(value: 30, unit: .minutes),\n    backgroundTimeout: Measurement(value: 30, unit: .minutes)\n)       \nSnowplow.createTracker(\n    namespace: "appTracker",\n    network: networkConfig,\n    configurations: [trackerConfig, sessionConfig]\n);\n'))),(0,a.kt)(l.Z,{value:"android",label:"Android Tracker",mdxType:"TabItem"},(0,a.kt)("h3",{id:"installation-1"},"Installation"),(0,a.kt)("p",null,"The Android Tracker SDK is available on ",(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.snowplowanalytics/snowplow-android-tracker"},"Maven Central")," and can be installed using Gradle."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gradle")),(0,a.kt)("p",null,"Add into your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dependencies {\n  ...\n  // Snowplow Android Tracker\n  implementation 'com.snowplowanalytics:snowplow-android-tracker:2.+'\n  // In case 'lifecycleAutotracking' is enabled\n  implementation 'androidx.lifecycle-extensions:2.2.+'\n  ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported System Version")),(0,a.kt)("p",null,"The Android Tracker SDK supports Android 5 (",(0,a.kt)("strong",{parentName:"p"},"API level 21+"),")"),(0,a.kt)("h3",{id:"instrumentation-1"},"Instrumentation"),(0,a.kt)("p",null,"Once the tracker SDK is correctly set as a dependency in your app project you have to instrument the tracker:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your ",(0,a.kt)("inlineCode",{parentName:"li"},"Application")," subclass, set up the SDK as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   TrackerController tracker = Snowplow.createTracker(context, "appTracker", COLLECTOR_URL, HttpMethod.POST);\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"It creates a tracker instance which can be used to track events like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   Event event = new Structured("Category_example", "Action_example");\n   tracker.track(event);\n')),(0,a.kt)("p",null,"If you prefer to access the tracker when the reference is not directly accessible, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultTracker")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   Snowplow.getDefaultTracker().track(event);\n")),(0,a.kt)("p",null,"The tracker has a default configuration where some settings are enabled by default:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"session tracking"),(0,a.kt)("li",{parentName:"ul"},"screen tracking"),(0,a.kt)("li",{parentName:"ul"},"platform contexts (mobile specific context fields)")),(0,a.kt)("p",null,"You can override the default configuration with a fine grained configuration when you create the tracker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'NetworkConfiguration networkConfig = new NetworkConfiguration(COLLECTOR_URL, HttpMethod.POST);\nTrackerConfiguration trackerConfig = new TrackerConfiguration("appId")\n    .base64Encoding(false)\n    .sessionContext(true)\n    .platformContext(true)\n    .lifecycleAutotracking(true)\n    .screenViewAutotracking(true)\n    .screenContext(true)\n    .applicationContext(true)\n    .exceptionAutotracking(true)\n    .installAutotracking(true);\nSessionConfiguration sessionConfig = new SessionConfiguration(\n    new TimeMeasure(30, TimeUnit.SECONDS),\n    new TimeMeasure(30, TimeUnit.SECONDS)\n);\nSnowplow.createTracker(context,\n    "appTracker",\n    networkConfig,\n    trackerConfig,\n    sessionConfig\n);\n')))))}k.isMDXComponent=!0}}]);