"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[88097],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Setup",date:"2020-12-02",sidebar_position:0},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/setup-2/index",id:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/setup-2/index",title:"Setup",description:"The Tracker is published to Maven Central and JCenter, which should make it easy to add it as a dependency into your own Scala app.",source:"@site/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/setup-2/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/setup-2",slug:"/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/setup-2/",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/setup-2/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/setup-2/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:0,frontMatter:{title:"Setup",date:"2020-12-02",sidebar_position:0},sidebar:"defaultSidebar",previous:{title:"Scala Tracker v1",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/"},next:{title:"Initialization",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-1-0-0/initialization/"}},c={},s=[{value:"SBT",id:"sbt",level:2},{value:"Gradle",id:"gradle",level:2},{value:"Maven",id:"maven",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Tracker is published to Maven Central and JCenter, which should make it easy to add it as a dependency into your own Scala app."),(0,r.kt)("h2",{id:"sbt"},"SBT"),(0,r.kt)("p",null,"Add the Scala Tracker to your build.sbt like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\nlibraryDependencies += "com.snowplowanalytics" %% "snowplow-scala-tracker-core" % "1.0.1"\n\n// If you plan to use the http4s emitter with a blaze client\nlibraryDependencies += "com.snowplowanalytics" %% "snowplow-scala-tracker-emitter-https" % "1.0.1"\nlibraryDependencies += "org.http4s" %% "http4s-blaze-client" % "0.21.5"\n\n// If you plan to use the id emitters:\nlibraryDependencies += "com.snowplowanalytics" %% "snowplow-scala-tracker-emitter-id" % "1.0.1"\n')),(0,r.kt)("h2",{id:"gradle"},"Gradle"),(0,r.kt)("p",null,"If you are using Gradle in your own Scala application, then add our Maven repository in your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\xa0file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"repositories {\n    ...\n    jcenter()\n}\n")),(0,r.kt)("p",null,"Then add into the same file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dependencies {\n    ...\n    // Snowplow Scala Tracker\n    compile 'com.snowplowanalytics:snowplow-scala-tracker-core_2.13:1.0.1'\n\n    // If you plan to use the http4s emitters with a blaze client\n    compile 'com.snowplowanalytics:snowplow-scala-tracker-emitter-http4s_2.13:1.0.1'\n    compile 'org.http4s:http4s-blaze.client_2.13:0.21.5'\n\n    // If you plan to use the id emitters\n    compile 'com.snowplowanalytics:snowplow-scala-tracker-emitter-id_2.13:1.0.1'\n}\n")),(0,r.kt)("p",null,"Notice a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"_2.13"),"\xa0postfix in artifactId. This is used for Scala libraries and denote Scala version which artifact (in our case\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-scala-tracker"),") is compiled against. It also means that this library will bring a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"org.scala-lang:scala-library_2.13.x"),"\xa0as transitive dependency and if you're using any other Scala dependency you should keep these postfixes in accordance (",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-scala-tracker"),"\xa0is also compiled against Scala 2.12)."),(0,r.kt)("h2",{id:"maven"},"Maven"),(0,r.kt)("p",null,"If you are using Maven for building your Scala application, then add into your project's\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-scala-tracker-core_2.13</artifactId>\n    <version>1.0.1</version>\n</dependency>\n\n\x3c!-- If you plan to use the http4s emitter with a blaze client: --\x3e\n<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-scala-tracker-emitter-http4s_2.13</artifactId>\n    <version>1.0.1</version>\n</dependency>\n<dependency>\n    <groupId>org.http4s</groupId>\n    <artifactId>http4s-blaze-client</artifactId>\n    <version>0.21.5</version>\n</dependency>\n\n\x3c!-- If you plan to use the id emitters: --\x3e\n<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-scala-tracker-emitter-id_2.13</artifactId>\n    <version>1.0.1</version>\n</dependency>\n")),(0,r.kt)("p",null,"Notice a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"_2.13"),"\xa0postfix in artifactId. This is used for Scala libraries and denote Scala version which artifact (in our case\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-scala-tracker"),") is compiled against. It also means that this library will bring a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"org.scala-lang:scala-library_2.13.x"),"\xa0as transitive dependency and if you're using any other Scala dependency you should keep these postfixes in accordance (",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-scala-tracker"),"\xa0is also compiled against Scala 2.12)."))}d.isMDXComponent=!0}}]);