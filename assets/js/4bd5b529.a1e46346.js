"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[60461],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),g=n,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return o?r.createElement(m,s(s({ref:t},c),{},{components:o})):r.createElement(m,s({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},30583:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={title:"Postgres Loader",date:"2020-07-02",sidebar_position:1e3},s=void 0,i={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/index",title:"Postgres Loader",description:"With Snowplow Postgres Loader you can load enriched data or plain self-describing JSONs into PostgreSQL database.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:1e3,frontMatter:{title:"Postgres Loader",date:"2020-07-02",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch Loader",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/elasticsearch-loader/"},next:{title:"Postgres Loader Configuration Reference",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/postgres-loader-configuration-reference/"}},l={},p=[{value:"Available on Terraform Registry",id:"available-on-terraform-registry",level:2},{value:"Getting a Docker image",id:"getting-a-docker-image",level:2},{value:"Iglu",id:"iglu",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Other",id:"other",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"With Snowplow Postgres Loader you can load enriched data or plain self-describing JSONs into PostgreSQL database."),(0,n.kt)("h2",{id:"available-on-terraform-registry"},"Available on Terraform Registry"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/snowplow-devops/s3-loader-kinesis-ec2/aws/latest"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Terraform&message=Registry&color=7B42BC&logo=terraform",alt:null}))),(0,n.kt)("p",null,"A Terraform module which deploys the Snowplow Postgres Loader on AWS EC2 for use with Kinesis. For installing in other environments, please see the other installation options below."),(0,n.kt)("h2",{id:"getting-a-docker-image"},"Getting a Docker image"),(0,n.kt)("p",null,"Snowplow Postgres Loader is ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/snowplow/snowplow-postgres-loader"},"published on DockerHub"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker pull snowplow/snowplow-postgres-loader:0.3.2\n")),(0,n.kt)("p",null,"It accepts very typical configuration for Snowplow Loader:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run --rm \\\n  -v $PWD/config:/snowplow/config \\\n  snowplow/snowplow-postgres-loader:0.3.2 \\\n  --resolver /snowplow/config/resolver.json \\\n  --config /snowplow/config/config.hocon\n")),(0,n.kt)("h2",{id:"iglu"},"Iglu"),(0,n.kt)("p",null,"Where ",(0,n.kt)("inlineCode",{parentName:"p"},"resolver.json")," is a typical ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"Iglu Client")," configuration."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Please pay attention that schemas for all self-describing JSONs flowing through Postgres Loader must be hosted on Iglu Server 0.6.0 or above."),(0,n.kt)("br",{parentName:"p"}),"\n","Iglu Central is static registry and if you use Snowplow-authored schemas - you need to upload all schemas from there as well."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"The configuration file is in HOCON format, and it specifies connection details for the target database and the input stream of events."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "input": {\n    "type": "Kinesis"\n    "streamName": "enriched-events"\n    "region": "eu-central-1"\n  }\n  "output" : {\n    "good": {\n      "type": "Postgres"\n      "host": "localhost"\n      "database": "snowplow"\n      "username": "postgres"\n      "password": ${POSTGRES_PASSWORD}\n      "schema": "atomic"\n    }\n  }\n}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"input")," section can alternatively specify a GCP PubSub subscription, instead of a kinesis stream like in the example above."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  "input": {\n    "type": "PubSub"\n    "projectId": "my-project"\n    "subscriptionId": "my-subscription"\n  }\n')),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/postgres-loader-configuration-reference/"},"the configuration reference")," for a complete description of all parameters."),(0,n.kt)("h2",{id:"other"},"Other"),(0,n.kt)("p",null,"Loader creates ",(0,n.kt)("inlineCode",{parentName:"p"},"events")," table on the start and every other table when it first encounters its corresponding schema."))}d.isMDXComponent=!0}}]);