"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[56612],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=o,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"Running",date:"2020-07-22",sidebar_position:30},i=void 0,s={unversionedId:"managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/index",id:"managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/index",title:"Running",description:"Now that we've discussed configuring the recovery, let's dive in to running it on your pipeline.",source:"@site/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/index.md",sourceDirName:"managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running",slug:"/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/index.md",tags:[],version:"current",lastUpdatedAt:1663236058,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:30,frontMatter:{title:"Running",date:"2020-07-22",sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"Testing",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/testing/"},next:{title:"GCP - Beam",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/gcp-beam/"}},c={},l=[{value:"Define configuration",id:"define-configuration",level:2},{value:"Encode configuration",id:"encode-configuration",level:2},{value:"Deploy the job",id:"deploy-the-job",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we've discussed configuring the recovery, let's dive in to running it on your pipeline."),(0,o.kt)("p",null,"First we'll need to define configuration:"),(0,o.kt)("h2",{id:"define-configuration"},"Define configuration"),(0,o.kt)("p",null,"The configuration consists of the ",(0,o.kt)("inlineCode",{parentName:"p"},"resolver-config.json")," that your pipeline uses to resolve events against corresponding schema, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.snowplowanalytics.iglu/resolver-config/jsonschema/1-0-1",\n  "data": {\n    "cacheSize": 0,\n    "repositories": [\n      {\n        "name": "Iglu Central",\n        "priority": 0,\n        "vendorPrefixes": [\n          "com.snowplowanalytics"\n        ],\n        "connection": {\n          "http": {\n            "uri": "http://iglucentral.com"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Also, the",(0,o.kt)("inlineCode",{parentName:"p"},"job-config.json")," which describes the recovery job to be done, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.snowplowanalytics.snowplow/recoveries/jsonschema/4-0-0",\n  "data": {\n    "iglu:com.snowplowanalytics.snowplow.badrows/enrichment_failures/jsonschema/1-0-0": [\n      {\n        "name": "pass through",\n        "conditions": [],\n        "steps": []\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"encode-configuration"},"Encode configuration"),(0,o.kt)("p",null,"Configuration is supplied to recovery jobs as a Base64-encoded string. You can use your encoding plugin of choice, but here is an example ",(0,o.kt)("a",{parentName:"p",href:"http://ammonite.io/"},"ammonite"),"\xa0script you can use to encode your configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import java.util.Base64\nimport java.nio.charset.StandardCharsets\nimport ammonite.ops._\nimport $ivy.`io.circe::circe-parser:0.13.0`, io.circe._, io.circe.syntax._, io.circe.parser._\n\nval load = (path: String)  => read! os.Path(path, base = os.pwd)\nval encode = (str: String)  => Base64.getEncoder.encodeToString(str.getBytes(StandardCharsets.UTF_8))\n\n@main def run(config: String): Unit =\n  parse(load(config)) match {\n    case Right(data)  => println(encode(data.asJson.noSpaces))\n    case Left(err)  => println(s"Invalid JSON input in: ${err.getMessage}")\n  }\n')),(0,o.kt)("p",null,"And then just run (assuming ammonite is on your path and above script is called\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"encode.sc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"amm ./encode.sc resolver-config.json\namm ./encode.sc job-config.json\n")),(0,o.kt)("p",null,"Once the configuration files are encrypted it's time to deploy the recovery job on your pipeline."),(0,o.kt)("h2",{id:"deploy-the-job"},"Deploy the job"),(0,o.kt)("p",null,"There are several runtimes that recovery process can be deployed to:"))}u.isMDXComponent=!0}}]);