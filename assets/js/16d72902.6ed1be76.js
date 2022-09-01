"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[47229],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(i),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return i?o.createElement(h,a(a({ref:t},c),{},{components:i})):o.createElement(h,a({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<n;s++)a[s]=i[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},60620:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=i(87462),r=(i(67294),i(3905));const n={title:"JVM Embedded Repo",date:"2021-03-26",sidebar_position:5e3},a=void 0,l={unversionedId:"pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo/index",id:"pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo/index",title:"JVM Embedded Repo",description:"A JVM-embedded repo is an Iglu repository\xa0embedded\xa0inside a Java or Scala application, typically alongside the\xa0Scala client.",source:"@site/docs/pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo/index.md",sourceDirName:"pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo",slug:"/pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo/",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:5e3,frontMatter:{title:"JVM Embedded Repo",date:"2021-03-26",sidebar_position:5e3},sidebar:"tutorialSidebar",previous:{title:"Static repo",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/static-repo/"},next:{title:"Iglu Resolver",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"}},p={},s=[{value:"Technical architecture",id:"technical-architecture",level:2},{value:"Example",id:"example",level:2},{value:"Setup",id:"setup",level:2},{value:"1. Prepare your files",id:"1-prepare-your-files",level:3},{value:"2. Embed your files",id:"2-embed-your-files",level:3},{value:"3. Update your Iglu client configuration",id:"3-update-your-iglu-client-configuration",level:3}],c={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A JVM-embedded repo is an Iglu repository\xa0",(0,r.kt)("strong",{parentName:"p"},"embedded"),"\xa0inside a Java or Scala application, typically alongside the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-scala/"},"Scala client"),"."),(0,r.kt)("h2",{id:"technical-architecture"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/JVM-embedded-repo#technical-architecture"}),"Technical architecture"),(0,r.kt)("p",null,"A JVM-embedded repo is simply a set of schemas stored in an Iglu-compatible path inside the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),"\xa0folder of a Java or Scala application."),(0,r.kt)("p",null,"As an embedded repo, there is a no mechanism for updating the schemas stored in the repository following the release of the host application."),(0,r.kt)("h2",{id:"example"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/JVM-embedded-repo#example"}),"Example"),(0,r.kt)("p",null,"For an example of a JVM-embedded repo, check out the repository embedded in the Iglu Scala client itself:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-scala-client/tree/0.1.0/src/main/resources/iglu-client-embedded"},"https://github.com/snowplow/iglu-scala-client/tree/0.1.0/src/main/resources/iglu-client-embedded")),(0,r.kt)("p",null,"This embedded repository is used to bootstrap the Iglu Scala client with JSON Schemas that it needs before it can access any remote repositories."),(0,r.kt)("h2",{id:"setup"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/JVM-embedded-repo#setup"}),"Setup"),(0,r.kt)("h3",{id:"1-prepare-your-files"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/JVM-embedded-repo-setup#1-prepare-your-files"}),"1","."," Prepare your files"),(0,r.kt)("p",null,"You need to create a file structure for your JSON Schemas. Please check out the template we provide here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/tree/master/2-repositories/jvm-embedded-repo/template"},"https://github.com/snowplow/iglu/tree/master/2-repositories/jvm-embedded-repo/template")),(0,r.kt)("p",null,"Make the following changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"com.myvendor"),"\xa0with your company domain, reverse-ordered"),(0,r.kt)("li",{parentName:"ul"},"Replace\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"myschema"),"\xa0with the name of your first JSON Schema"),(0,r.kt)("li",{parentName:"ul"},"Leave\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"jsonschema"),"\xa0as-is (we only support JSON Schemas for now)"),(0,r.kt)("li",{parentName:"ul"},"Replace\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"1-0-0"),"\xa0with the schema specification of your first JSON Schema")),(0,r.kt)("p",null,"Writing JSON Schemas is out of scope for this setup guide - see\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},"Self-describing-JSONs-and-JSON-Schemas"),"\xa0for details."),(0,r.kt)("p",null,"Done? Now you are ready to embed your files."),(0,r.kt)("h3",{id:"2-embed-your-files"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/JVM-embedded-repo-setup#2-embed-your-files"}),"2","."," Embed your files"),(0,r.kt)("p",null,"You now need to embed your JSON Schema files into your Java or Scala application."),(0,r.kt)("p",null,"The Iglu Scala client will expect to find these JSON Schema files included in the application as resources. Therefore, you should store the files in a path something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapp/src/main/resources/my-repo/schemas\n")),(0,r.kt)("h3",{id:"3-update-your-iglu-client-configuration"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/iglu/wiki/JVM-embedded-repo-setup#3-update-your-iglu-client-configuration"}),"3","."," Update your Iglu client configuration"),(0,r.kt)("p",null,"Finally, update your Iglu client configuration so that it can resolve your new repository."),(0,r.kt)("p",null,"For details on how to do this, check out the page on\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"Iglu client configuration"),". In the case above, the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"path"),"\xa0you would specify for your embedded Iglu repository would be simply\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"/my-repo"),"."))}d.isMDXComponent=!0}}]);