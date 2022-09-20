"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[36238],{85162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294),l=t(86010);const o="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),l=t(67294),o=t(86010),r=t(72389),c=t(67392),i=t(7094),s=t(12466);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){var a,t;const{lazy:r,block:u,defaultValue:m,values:w,groupId:k,className:h}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=w?w:b.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),f=(0,c.l)(y,((e,a)=>e.value===a.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(a=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?a:b[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:T}=(0,i.U)(),[I,x]=(0,l.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:_}=(0,s.o5)();if(null!=k){const e=v[k];null!=e&&e!==I&&y.some((a=>a.value===e))&&x(e)}const E=e=>{const a=e.currentTarget,t=C.indexOf(a),n=y[t].value;n!==I&&(_(a),x(n),null!=k&&T(k,String(n)))},N=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=C.indexOf(e.currentTarget)+1;t=null!=(n=C[a])?n:C[0];break}case"ArrowLeft":{var l;const a=C.indexOf(e.currentTarget)-1;t=null!=(l=C[a])?l:C[C.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},h)},y.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===a?0:-1,"aria-selected":I===a,key:a,ref:e=>C.push(e),onKeyDown:N,onFocus:E,onClick:E},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":I===a})}),null!=t?t:a)}))),r?(0,l.cloneElement)(b.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==I})))))}function m(e){const a=(0,r.Z)();return l.createElement(u,(0,n.Z)({key:String(a)},e))}},55608:(e,a,t)=>{t.d(a,{d:()=>n});const n={snowplowMicro:"1.3.3",scalaTracker:"2.0.0"}},45696:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=t(87462),l=(t(67294),t(3905)),o=t(55608),r=t(90814),c=t(65488),i=t(85162);const s={title:"Setup",date:"2022-9-15",sidebar_position:0},d=void 0,p={unversionedId:"collecting-data/collecting-from-own-applications/scala-tracker/setup/index",id:"collecting-data/collecting-from-own-applications/scala-tracker/setup/index",title:"Setup",description:"The Tracker is published to Maven Central and JCenter, which should make it easy to add it as a dependency into your own Scala app.",source:"@site/docs/collecting-data/collecting-from-own-applications/scala-tracker/setup/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/scala-tracker/setup",slug:"/collecting-data/collecting-from-own-applications/scala-tracker/setup/",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/setup/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/scala-tracker/setup/index.md",tags:[],version:"current",lastUpdatedAt:1663694012,formattedLastUpdatedAt:"Sep 20, 2022",sidebarPosition:0,frontMatter:{title:"Setup",date:"2022-9-15",sidebar_position:0},sidebar:"defaultSidebar",previous:{title:"Scala Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/"},next:{title:"Initialization",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/initialization/"}},u={},m=[],w={toc:m};function k(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},w,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Tracker is published to Maven Central and JCenter, which should make it easy to add it as a dependency into your own Scala app."),(0,l.kt)(c.Z,{groupId:"packager",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sbt",label:"sbt",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Add the Scala Tracker to your build.sbt:"),(0,l.kt)(r.Z,{language:"scala",title:"build.sbt",mdxType:"CodeBlock"},'libraryDependencies += "com.snowplowanalytics" %% "snowplow-scala-tracker-core" % "'+o.d.scalaTracker+'"\n \n// If you plan to use the http4s emitter with an Ember client\nlibraryDependencies += "com.snowplowanalytics" %% "snowplow-scala-tracker-emitter-http4s" % "'+o.d.scalaTracker+'"\nlibraryDependencies += "org.http4s" %% "http4s-ember-client" % "0.23.15"\n \n// If you plan to use the id emitters:\nlibraryDependencies += "com.snowplowanalytics" %% "snowplow-scala-tracker-emitter-id" % "'+o.d.scalaTracker+'"\n \n// If you plan to use EC2/GCE contexts:\nlibraryDependencies += "com.snowplowanalytics" %% "snowplow-scala-tracker-metadata" % "'+o.d.scalaTracker+'"')),(0,l.kt)(i.Z,{value:"gradle",label:"Gradle",mdxType:"TabItem"},(0,l.kt)("p",null,"Add our Maven repository in your\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\xa0file:"),(0,l.kt)(r.Z,{language:"gradle",title:"build.gradle",mdxType:"CodeBlock"},"repositories {\n    ...\n    jcenter()\n}"),(0,l.kt)("p",null,"Then add into the same file:"),(0,l.kt)(r.Z,{language:"gradle",title:"build.gradle",mdxType:"CodeBlock"},"dependencies {\n    ...\n    // Snowplow Scala Tracker\n    compile 'com.snowplowanalytics:snowplow-scala-tracker-core_2.13:"+o.d.scalaTracker+"'\n \n    // If you plan to use the http4s emitters with an Ember client\n    compile 'com.snowplowanalytics:snowplow-scala-tracker-emitter-http4s_2.13:"+o.d.scalaTracker+"'\n    compile 'org.http4s:http4s-ember-client_2.13:0.23.15'\n \n    // If you plan to use the id emitters\n    compile 'com.snowplowanalytics:snowplow-scala-tracker-emitter-id_2.13:"+o.d.scalaTracker+"'\n \n    // If you plan to use EC2/GCE contexts:\n    compile 'com.snowplowanalytics:snowplow-scala-tracker-metadata_2.13:"+o.d.scalaTracker+"'\n}")),(0,l.kt)(i.Z,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,l.kt)("p",null,"Add into your project's\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,l.kt)(r.Z,{language:"maven",title:"pom.xml",mdxType:"CodeBlock"},"<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-scala-tracker-core_2.13</artifactId>\n    <version>"+o.d.scalaTracker+"</version>\n</dependency>\n \n\x3c!-- If you plan to use the http4s emitter with an Ember client: --\x3e\n<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-scala-tracker-emitter-http4s_2.13</artifactId>\n    <version>"+o.d.scalaTracker+"</version>\n</dependency>\n<dependency>\n    <groupId>org.http4s</groupId>\n    <artifactId>http4s-ember-client</artifactId>\n    <version>0.23.15</version>\n</dependency>\n \n\x3c!-- If you plan to use the id emitters: --\x3e\n<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-scala-tracker-emitter-id_2.13</artifactId>\n    <version>"+o.d.scalaTracker+"</version>\n</dependency>\n \n\x3c!-- If you plan to use EC2/GCE contexts: --\x3e\n<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-scala-tracker-metadata_2.13</artifactId>\n    <version>"+o.d.scalaTracker+"</version>\n</dependency>"))),(0,l.kt)("admonition",{title:"For Maven and Gradle users",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Notice a\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"_2.13"),"\xa0postfix in artifactId. This is used for Scala libraries and denotes the Scala version which the artifact (in our case\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"snowplow-scala-tracker"),") is compiled against. It also means that this library will bring a\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"org.scala-lang:scala-library_2.13.x"),"\xa0as transitive dependency and if you're using any other Scala dependency you should keep these postfixes in accordance (",(0,l.kt)("inlineCode",{parentName:"p"},"snowplow-scala-tracker"),"\xa0is also compiled against Scala 2.12).")))}k.isMDXComponent=!0}}]);